import asyncio
import atexit
from typing import Any, Optional

from services import profile_repo as repo
from . import engine_utils
from . import camoufox_engine
from . import pydoll_engine
from . import zendriver_engine
from . import cloak_engine

# profile_id -> BrowserContext or Browser object
_running_contexts: dict[str, Any] = {}


async def launch_profile(profile: dict) -> bool:
    profile_id = profile["id"]
    if profile_id in _running_contexts:
        return False

    tool_type = profile.get("tool_type", "camoufox")

    try:
        if tool_type == "zendriver":
            context, page = await zendriver_engine.launch(profile)
        elif tool_type == "pydoll":
            context, page = await pydoll_engine.launch(profile)
        elif tool_type == "cloakbrowser":
            raise NotImplementedError("CloakBrowser not yet supported")
        else:
            # Default to Camoufox
            context, page = await camoufox_engine.launch(
                profile, on_close=_on_context_closed
            )

        _running_contexts[profile_id] = context

        await repo.set_running(profile_id, True)
        await repo.set_last_launched(profile_id)
        return True
    except Exception as e:
        print(f"Failed to launch {tool_type}: {e}")
        return False


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

        if hasattr(context, "cookies") and callable(getattr(context, "cookies")):
            cookies = await context.cookies()
            if cookies:
                await repo.update_profile(profile_id, cookies=json.dumps(cookies))
    except Exception as e:
        print(f"Error exporting cookies for {profile_id}: {e}")
        pass

    try:
        # Pydoll uses .stop(), Playwright/ZenDriver use .close()
        if hasattr(context, "stop") and callable(getattr(context, "stop")):
            await context.stop()
        elif hasattr(context, "close") and callable(getattr(context, "close")):
            await context.close()
        print(f"Closed browser for profile {profile_id}")
    except Exception as e:
        print(f"Error closing browser for profile {profile_id}: {e}")
        pass

    await repo.set_running(profile_id, False)
    return True


def is_running(profile_id: str) -> bool:
    return profile_id in _running_contexts


def supports_wallet_import(tool_type: str) -> bool:
    """Checks if the engine for the given browser type supports MetaMask import."""
    engines = {
        "camoufox": camoufox_engine,
        "pydoll": pydoll_engine,
        "zendriver": zendriver_engine,
        "cloakbrowser": cloak_engine,
    }
    engine_mod = engines.get(tool_type.lower())
    return hasattr(engine_mod, "import_metamask_wallet")


async def export_cookies(profile_id: str) -> str | None:
    import json

    context = _running_contexts.get(profile_id)
    if context is None:
        return None
    if hasattr(context, "cookies") and callable(getattr(context, "cookies")):
        cookies = await context.cookies()
        return json.dumps(cookies, indent=2)
    return None


async def import_cookies(profile_id: str, cookies_json: str) -> bool:
    import json

    context = _running_contexts.get(profile_id)
    if context is None:
        return False
    try:
        cookies = json.loads(cookies_json)
        if hasattr(context, "add_cookies") and callable(
            getattr(context, "add_cookies")
        ):
            await context.add_cookies(cookies)
            return True
    except (json.JSONDecodeError, TypeError):
        pass
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
