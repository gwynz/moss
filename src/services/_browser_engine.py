import asyncio
import atexit
from pathlib import Path
from typing import TYPE_CHECKING

from services import _profile_repo as repo

if TYPE_CHECKING:
    from playwright.async_api import Browser, BrowserContext

# profile_id -> BrowserContext
_running_contexts: dict[str, "BrowserContext"] = {}
_camoufox_instance = None
_DB_DIR = Path.home() / ".moss"


async def launch_profile(profile: dict) -> bool:
    profile_id = profile["id"]
    if profile_id in _running_contexts:
        return False

    from camoufox.async_api import AsyncCamoufox
    from browserforge.fingerprints import Screen

    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(_DB_DIR / "browser_data" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    # Map profile to Camoufox options
    proxy_config = None
    proxy_type = profile.get("proxy_type", "")
    proxy_host = profile.get("proxy_host", "")
    proxy_port = profile.get("proxy_port", 0)
    if proxy_type and proxy_host and proxy_port:
        proxy_config = {"server": f"{proxy_type}://{proxy_host}:{proxy_port}"}
        proxy_user = profile.get("proxy_username", "")
        proxy_pass = profile.get("proxy_password", "")
        if proxy_user:
            proxy_config["username"] = proxy_user
        if proxy_pass:
            proxy_config["password"] = proxy_pass

    # Camoufox specific and Playwright standard options
    # Note: Camoufox handles fingerprinting automatically.
    # We can pass 'os', 'fonts', etc. if we want to be specific.

    launch_kwargs = {
        "user_data_dir": user_data_dir,
        "persistent_context": True,
        "headless": False,
        "proxy": proxy_config,
        "geoip": True,
    }

    # Set screen size if available
    screen_width = profile.get("screen_width")
    screen_height = profile.get("screen_height")
    if screen_width and screen_height:
        w, h = int(screen_width), int(screen_height)
        launch_kwargs["window"] = (w, h)
        launch_kwargs["screen"] = Screen(
            max_width=w, max_height=h)

    browser_manager = AsyncCamoufox(**launch_kwargs)
    result = await browser_manager.__aenter__()

    # Ensure it's a context (Camoufox returns context if persistent_context=True)
    # When persistent_context=True, AsyncCamoufox returns a BrowserContext.
    # Otherwise it returns a Browser.
    from playwright.async_api import Browser, BrowserContext

    if isinstance(result, Browser):
        context = await result.new_context()
    elif isinstance(result, BrowserContext):
        context = result
    else:
        # Fallback for type narrowing
        context = result  # type: ignore

    # Store context
    _running_contexts[profile_id] = context

    # # Import cookies if present
    # cookies_json = profile.get("cookies", "")
    # if cookies_json:
    #     import json
    #     try:
    #         cookies = json.loads(cookies_json)
    #         if cookies:
    #             await context.add_cookies(cookies)
    #     except (json.JSONDecodeError, TypeError):
    #         pass

    await repo.set_running(profile_id, True)
    await repo.set_last_launched(profile_id)

    startup_url = profile.get("startup_url", "about:blank")
    if startup_url and startup_url != "about:blank":
        pages = context.pages
        if pages:
            await pages[0].goto(startup_url)
        else:
            page = await context.new_page()
            await page.goto(startup_url)

    # Watch for browser close
    # Using 'close' for BrowserContext is correct in Playwright.
    # If the error persists, it might be due to incorrect type narrowing
    # or Pylance being overly strict with the literal.
    # The error "Argument of type 'Literal['close']' cannot be assigned to parameter 'event' of type 'Literal['disconnected']' in function 'on'"
    # suggests it might be expecting 'disconnected' if it thinks it's a Browser,
    # but for BrowserContext 'close' is correct.
    # We cast to any to bypass the literal check if Pylance is confused.
    from typing import Any
    context.on("close", lambda _ctx: asyncio.ensure_future(
        _on_context_closed(profile_id)))  # type: ignore

    return True


async def _on_context_closed(profile_id: str):
    _running_contexts.pop(profile_id, None)
    try:
        await repo.set_running(profile_id, False)
    except Exception:
        pass


async def close_profile(profile_id: str) -> bool:
    context = _running_contexts.pop(profile_id, None)
    if context is None:
        return False

    # Export cookies before closing
    try:
        import json
        cookies = await context.cookies()
        if cookies:
            await repo.update_profile(profile_id, cookies=json.dumps(cookies))
    except Exception:
        pass

    try:
        await context.close()
    except Exception:
        pass

    await repo.set_running(profile_id, False)
    return True


def is_running(profile_id: str) -> bool:
    return profile_id in _running_contexts


async def export_cookies(profile_id: str) -> str | None:
    import json
    context = _running_contexts.get(profile_id)
    if context is None:
        return None
    cookies = await context.cookies()
    return json.dumps(cookies, indent=2)


async def import_cookies(profile_id: str, cookies_json: str) -> bool:
    import json
    context = _running_contexts.get(profile_id)
    if context is None:
        return False
    try:
        cookies = json.loads(cookies_json)
        await context.add_cookies(cookies)
        return True
    except (json.JSONDecodeError, TypeError):
        return False


async def close_all():
    profile_ids = list(_running_contexts.keys())
    for pid in profile_ids:
        await close_profile(pid)


def _atexit_cleanup():
    try:
        loop = asyncio.get_event_loop()
        if loop.is_running():
            loop.create_task(close_all())
        else:
            loop.run_until_complete(close_all())
    except Exception:
        pass


atexit.register(_atexit_cleanup)
