import asyncio
import random
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional, Callable


class BaseTask(ABC):
    """
    Base class for all automated tasks.
    Tasks define their own compatibility and execution logic.
    """

    id: str = ""
    name: str = ""
    description: str = ""

    # Defaults: allow everything unless overridden
    supported_tools: List[str] = ["pydoll", "camoufox", "zendriver"]
    supported_engines: List[str] = ["chrome", "firefox"]

    def get_required_profile_modifications(
        self, profile: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Returns a dictionary of profile overrides needed for this task to run.
        e.g. {"ext_metamask": True}
        """
        return {}

    @abstractmethod
    async def run(
        self, profile: Dict[str, Any], tab: Any, update_status: Callable[[str], None]
    ) -> Optional[str]:
        """
        Executes the task logic.
        :param profile: The profile dictionary from the database.
        :param tab: The browser tab/page object (engine-specific).
        :param update_status: Callback to update the UI status message.
        :return: Optional 'note' string to save for the next task.
        """
        pass

    def is_supported(self, tool_type: str, engine: str) -> bool:
        """Checks if this task can run on the given tool/engine combination."""
        return tool_type.lower() in [
            t.lower() for t in self.supported_tools
        ] and engine.lower() in [e.lower() for e in self.supported_engines]


class MetamaskImportTask(BaseTask):
    id = "metamask_import"
    name = "Import MetaMask Wallet"
    description = "Automatically imports a seed phrase into the MetaMask extension."

    # Currently only implemented for pydoll + chrome
    supported_tools = ["pydoll"]
    supported_engines = ["chrome"]

    def get_required_profile_modifications(
        self, profile: Dict[str, Any]
    ) -> Dict[str, Any]:
        return {"ext_metamask": True}

    async def run(
        self, profile: Dict[str, Any], tab: Any, update_status: Callable[[str], None]
    ) -> Optional[str]:
        from services import wallet_repo, pydoll_engine
        from utils.crypto import decrypt_string

        update_status("Fetching wallet data...")
        w_id = profile.get("wallet_id")
        if not w_id:
            raise Exception("No wallet linked to profile")

        wallet = await wallet_repo.get_wallet(w_id, decrypt_seed=True)
        if not wallet or not wallet.get("seed"):
            raise Exception("Wallet seed missing or decryption failed")

        mm_pass_enc = profile.get("metamask_password")
        mm_pass = decrypt_string(mm_pass_enc) if mm_pass_enc else "Password123!"

        update_status("Executing MetaMask automation...")
        await pydoll_engine.import_metamask_wallet(
            tab,
            seed_phrase=wallet["seed"],
            password=mm_pass,
        )

        # Return a note to enable subsequent tasks
        return "metamask_imported_successfully"


import asyncio
import random
from typing import Any, Callable, Dict, Optional

from utils.crypto import decrypt_string
from services.engine_utils import METAMASK_ID


class TradeDecibelTask(BaseTask):
    id = "trade_decibel"
    name = "Trade Decibel (Long/Short)"
    description = "Automatically places Long and Short market orders on Decibel Trade."

    # Specific to pydoll/chrome for now as it uses complex selectors
    supported_tools = ["pydoll"]
    supported_engines = ["chrome"]

    WALLET_STATUS_XPATH = (
        "/html/body/div[2]/header/div[2]/div[1]/div/div[2]/button/div/span/div/p[1]"
    )
    LONG_SIDE_XPATH = "/html/body/div[5]/main/div[3]/div[1]/div[2]/div[2]/label[1]"
    SHORT_SIDE_XPATH = "/html/body/div[5]/main/div[3]/div[1]/div[2]/div[2]/label[2]"
    ORDER_TYPE_TRIGGER_XPATH = (
        "/html/body/div[5]/main/div[3]/div[1]/div[3]/div[1]/button[2]"
    )
    ORDER_TYPE_TEXT_XPATH_SUFFIX = "/div/p"
    MARKET_OPT_XPATH = "/html/body/div[12]/div/div[1]/div"
    USD_XPATH = "/html/body/div[5]/main/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div/div/div/div/label[2]/span"
    SIZE_INPUT_XPATH = (
        "/html/body/div[5]/main/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div/input"
    )
    REDUCE_ONLY_XPATH = "/html/body/div[5]/main/div[3]/div[1]/div[5]/div[2]/label/div"
    UNLOCK_PASSWORD_CSS = 'input[data-testid="unlock-password"]'
    UNLOCK_SUBMIT_CSS = 'button[data-testid="unlock-submit"]'
    PLACE_ORDER_BUTTON_CSS = 'button[data-testid="place-order-button"]'

    def get_required_profile_modifications(
        self, profile: Dict[str, Any]
    ) -> Dict[str, Any]:
        # Typically requires MetaMask for trading
        return {"ext_metamask": True}

    async def run(
        self, profile: Dict[str, Any], tab: Any, update_status: Callable[[str], None]
    ) -> Optional[str]:
        # Helper for human-like click with offsets and hold time
        async def human_click(el):
            if not el:
                return
            await el.click(
                x_offset=random.randint(-5, 5),
                y_offset=random.randint(-3, 3),
                hold_time=random.uniform(0.1, 0.25),
            )
            await asyncio.sleep(random.uniform(0.4, 0.8))

        # Helper to get live attribute value using XPath
        async def get_live_attr(xpath: str, attr_name: str) -> Optional[str]:
            script = f"""
            (function() {{
                var el = document.evaluate('{xpath}', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return el ? el.getAttribute('{attr_name}') : null;
            }})()
            """
            res = await tab.execute_script(script)
            # Extract value from CDP response structure
            if isinstance(res, dict):
                result_obj = res.get("result", {})
                if isinstance(result_obj, dict):
                    inner_result = result_obj.get("result", {})
                    if isinstance(inner_result, dict):
                        return inner_result.get("value")
                    return result_obj.get("value")
            return res

        # Helper to get live input value using XPath
        async def get_live_input_value(xpath: str) -> Optional[str]:
            script = f"""
            (function() {{
                var el = document.evaluate('{xpath}', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return el ? el.value : null;
            }})()
            """
            res = await tab.execute_script(script)
            # Extract value from CDP response structure
            if isinstance(res, dict):
                result_obj = res.get("result", {})
                if isinstance(result_obj, dict):
                    inner_result = result_obj.get("result", {})
                    if isinstance(inner_result, dict):
                        return inner_result.get("value")
                    return result_obj.get("value")
            return res

        await self._unlock_metamask(profile, tab, update_status, human_click)
        await self._navigate_to_decibel(tab, update_status)
        connected = await self._wait_for_wallet_connection(tab, update_status)
        if not connected:
            update_status(
                "Warning: Wallet not confirmed as Primary. Proceeding with caution..."
            )
        update_status("Waiting for page load & user 'reading' (5-9s)...")
        await asyncio.sleep(random.uniform(5, 9))

        first_side = random.choice(["long", "short"])
        second_side = "short" if first_side == "long" else "long"

        success_1 = await self._place_order(
            tab,
            update_status,
            human_click,
            get_live_attr,
            get_live_input_value,
            first_side,
        )
        if success_1:
            update_status(f"First trade ({first_side}) finished. Starting second...")
            await self._place_order(
                tab,
                update_status,
                human_click,
                get_live_attr,
                get_live_input_value,
                second_side,
            )

        update_status("Trade Decibel Task completed.")
        await asyncio.sleep(5)
        return "decibel_trades_executed"

    async def _unlock_metamask(
        self,
        profile: Dict[str, Any],
        tab: Any,
        update_status: Callable[[str], None],
        human_click,
    ):
        update_status("Unlocking MetaMask...")
        mm_pass_enc = profile.get("metamask_password")
        mm_pass = decrypt_string(mm_pass_enc) if mm_pass_enc else "Password123!"

        await tab.go_to(f"chrome-extension://{METAMASK_ID}/home.html")
        await asyncio.sleep(random.uniform(4, 5))

        unlock_input = await tab.query(self.UNLOCK_PASSWORD_CSS, raise_exc=False)
        if unlock_input:
            await unlock_input.type_text(mm_pass)
            await asyncio.sleep(random.uniform(2, 3))
            unlock_btn = await tab.query(self.UNLOCK_SUBMIT_CSS)
            if unlock_btn:
                await human_click(unlock_btn)
                await asyncio.sleep(random.uniform(5, 7))

    async def _navigate_to_decibel(
        self, tab: Any, update_status: Callable[[str], None]
    ):
        update_status("Navigating to Decibel Trade...")
        await tab.go_to("https://app.decibel.trade/trade")
        update_status("Waiting for Connect Wallet...")
        await asyncio.sleep(8)

    async def _wait_for_wallet_connection(
        self, tab: Any, update_status: Callable[[str], None]
    ) -> bool:
        connected = False
        for _ in range(50):  # Max ~60s wait/retry cycle
            wallet_status_el = await tab.query(
                self.WALLET_STATUS_XPATH, raise_exc=False
            )
            if wallet_status_el:
                text = await wallet_status_el.text
                if text and "Primary" in text:
                    update_status("Wallet connected (Primary).")
                    connected = True
                    break
            update_status("Waiting for wallet connection...")
            await asyncio.sleep(6)
        return connected

    async def _place_order(
        self,
        tab: Any,
        update_status: Callable[[str], None],
        human_click,
        get_live_attr,
        get_live_input_value,
        side: str,
    ) -> bool:
        update_status(f"Setting up {side.upper()} order...")

        # 1. Select Long/Short
        side_xpath = self.LONG_SIDE_XPATH if side == "long" else self.SHORT_SIDE_XPATH
        side_btn = await tab.query(side_xpath)
        if side_btn:
            await human_click(side_btn)

        # 2. Ensure Market order is selected
        order_type_text_xpath = (
            f"{self.ORDER_TYPE_TRIGGER_XPATH}{self.ORDER_TYPE_TEXT_XPATH_SUFFIX}"
        )
        order_type_el = await tab.query(order_type_text_xpath)
        if order_type_el:
            text = await order_type_el.text
            print(f"Order type: {text}")
            if "Market Order" not in (text or ""):
                trigger = await tab.query(self.ORDER_TYPE_TRIGGER_XPATH)
                if trigger:
                    await human_click(trigger)
                    market_opt = await tab.query(self.MARKET_OPT_XPATH)
                    if market_opt:
                        await human_click(market_opt)

        # 3. Ensure USD currency is selected
        usd_label = await tab.query(self.USD_XPATH)
        if usd_label:
            state = await get_live_attr(self.USD_XPATH, "data-state")
            print("usd_label live data-state:", state, usd_label)
            if state != "checked":
                await human_click(usd_label)

        # 4. Enter Size
        size_input = await tab.query(self.SIZE_INPUT_XPATH)
        if size_input:
            current_val = await get_live_input_value(self.SIZE_INPUT_XPATH)
            print(f"Current size: {current_val}")
            if str(current_val) != "5":
                await size_input.type_text("5", interval=random.uniform(0.1, 0.25))
                await asyncio.sleep(random.uniform(0.3, 0.6))

        # 5. Validate Reduce Only is unchecked
        reduce_only = await tab.query(self.REDUCE_ONLY_XPATH)
        if reduce_only:
            state = await get_live_attr(self.REDUCE_ONLY_XPATH, "data-state")
            print("reduce_only live data-state:", state, reduce_only)
            if state == "checked":
                await human_click(reduce_only)
                await asyncio.sleep(random.uniform(1, 2))

        # 6. Place Order
        submit_btn = await tab.query(self.PLACE_ORDER_BUTTON_CSS)
        if submit_btn:
            update_status(f"Submitting {side.upper()} order...")
            await human_click(submit_btn)
            update_status("Waiting for confirmation (1s)...")
            await asyncio.sleep(random.uniform(1, 2))
            return True

        return False


# Registry of available tasks
TASKS: Dict[str, BaseTask] = {
    MetamaskImportTask.id: MetamaskImportTask(),
    TradeDecibelTask.id: TradeDecibelTask(),
}


def get_task(task_id: str) -> Optional[BaseTask]:
    return TASKS.get(task_id)


def list_tasks() -> List[BaseTask]:
    return list(TASKS.values())
