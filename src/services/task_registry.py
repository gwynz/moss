import asyncio
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

    def get_required_profile_modifications(self, profile: Dict[str, Any]) -> Dict[str, Any]:
        """
        Returns a dictionary of profile overrides needed for this task to run.
        e.g. {"ext_metamask": True}
        """
        return {}

    @abstractmethod
    async def run(self, profile: Dict[str, Any], tab: Any, update_status: Callable[[str], None]) -> Optional[str]:
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
        return (tool_type.lower() in [t.lower() for t in self.supported_tools] and
                engine.lower() in [e.lower() for e in self.supported_engines])

class MetamaskImportTask(BaseTask):
    id = "metamask_import"
    name = "Import MetaMask Wallet"
    description = "Automatically imports a seed phrase into the MetaMask extension."

    # Currently only implemented for pydoll + chrome
    supported_tools = ["pydoll"]
    supported_engines = ["chrome"]

    def get_required_profile_modifications(self, profile: Dict[str, Any]) -> Dict[str, Any]:
        return {"ext_metamask": True}

    async def run(self, profile: Dict[str, Any], tab: Any, update_status: Callable[[str], None]) -> Optional[str]:
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

# Registry of available tasks
TASKS: Dict[str, BaseTask] = {
    MetamaskImportTask.id: MetamaskImportTask(),
}

def get_task(task_id: str) -> Optional[BaseTask]:
    return TASKS.get(task_id)

def list_tasks() -> List[BaseTask]:
    return list(TASKS.values())
