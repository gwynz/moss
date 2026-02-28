import asyncio
import atexit
from pathlib import Path
from typing import TYPE_CHECKING

from services import profile_repo as repo

if TYPE_CHECKING:
    from playwright.async_api import Browser, BrowserContext

# profile_id -> BrowserContext
_running_contexts: dict[str, "BrowserContext"] = {}
_DB_DIR = Path.home() / ".moss"


async def launch_profile(profile: dict) -> bool:
    profile_id = profile["id"]
    if profile_id in _running_contexts:
        return False

    browser_type = profile.get("browser_type", "camoufox")
    if browser_type == "zendriver":
        return await _launch_zendriver(profile)

    return await _launch_camoufox(profile)


async def _launch_camoufox(profile: dict) -> bool:
    from camoufox.async_api import AsyncCamoufox
    from browserforge.fingerprints import Screen
    from playwright.async_api import Browser, BrowserContext
    from typing import Any

    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(_DB_DIR / "browser_data" / "camoufox" / profile_id)
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
    addons = []
    # Load standard extensions if enabled
    ext_dir = Path(__file__).parent.parent / \
        "assets" / "extensions" / "firefox"
    if profile.get("ext_metamask"):
        mm_path = ext_dir / "metamask"
        if mm_path.exists():
            addons.append(str(mm_path))
    if profile.get("ext_phantom"):
        ph_path = ext_dir / "phantom"
        if ph_path.exists():
            addons.append(str(ph_path))

    # Load custom extensions from path
    extensions_path = profile.get("extensions_path")
    if extensions_path:
        # Supports semicolon separated list of extracted addon directories
        paths = [p.strip() for p in extensions_path.split(";") if p.strip()]
        for p in paths:
            if Path(p).exists():
                addons.append(p)

    launch_kwargs = {
        "user_data_dir": user_data_dir,
        "persistent_context": True,
        "headless": False,
        "proxy": proxy_config,
        "geoip": True,
        "addons": addons if addons else None,
        "main_world_eval": True,
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
    if isinstance(result, Browser):
        context = await result.new_context()
    elif isinstance(result, BrowserContext):
        context = result
    else:
        # Fallback for type narrowing
        context = result  # type: ignore

    # Store context
    _running_contexts[profile_id] = context

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
    context.on("close", lambda _ctx: asyncio.ensure_future(
        _on_context_closed(profile_id)))  # type: ignore

    return True


async def _launch_zendriver(profile: dict) -> bool:
    import zendriver as zd
    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(_DB_DIR / "browser_data" /
                            "zendriver" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    # Proxy Configuration
    proxy_server = ""
    proxy_type = profile.get("proxy_type", "")
    proxy_host = profile.get("proxy_host", "")
    proxy_port = profile.get("proxy_port", 0)
    if proxy_type and proxy_host and proxy_port:
        proxy_server = f"{proxy_type}://{proxy_host}:{proxy_port}"
        # ZenDriver/Chrome handles auth via '--proxy-auth' or extension
        # For simplicity in this implementation, we use the standard proxy flag
        # Advanced auth might require a custom extension or helper

    config = zd.Config()
    config.user_data_dir = user_data_dir
    config.headless = False
    if proxy_server:
        if config.browser_args is None:
            config.browser_args = []
        config.browser_args.append(f"--proxy-server={proxy_server}")
        # Note: ZenDriver doesn't support proxy auth via Config directly.
        # This implementation sets the server; auth would require a CDP interceptor or extension.

    # Screen Size
    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    if config.browser_args is None:
        config.browser_args = []
    config.browser_args.append(f"--window-size={int(width)},{int(height)}")

    # Extensions
    chrome_ext_dir = Path(__file__).parent.parent / \
        "assets" / "extensions" / "chrome"
    load_extensions = []
    if profile.get("ext_metamask"):
        mm_path = chrome_ext_dir / "metamask"
        if mm_path.exists():
            load_extensions.append(str(mm_path))
    if profile.get("ext_phantom"):
        ph_path = chrome_ext_dir / "phantom"
        if ph_path.exists():
            load_extensions.append(str(ph_path))

    # Load custom extensions from path
    ext_path_str = profile.get("extensions_path")
    if ext_path_str:
        paths = [p.strip() for p in ext_path_str.split(";") if p.strip()]
        for p in paths:
            if Path(p).exists():
                load_extensions.append(p)

    if load_extensions:
        if config.browser_args is None:
            config.browser_args = []
        # Mandatory flags for ZenDriver to allow extension loading/debugging
        config.browser_args.append("--enable-unsafe-extension-debugging")
        config.browser_args.append("--remote-debugging-pipe")

    browser = await zd.start(config)

    # ZenDriver dynamic extension loading
    if load_extensions:
        import zendriver.cdp.extensions as zd_ext
        for ext_path in load_extensions:
            try:
                # ZenDriver/CDP requires absolute paths for extension loading
                abs_path = str(Path(ext_path).absolute())
                await browser.main_tab.send(zd_ext.load_unpacked(abs_path))
            except Exception:
                # Log or handle extension load failures
                pass

    # ZenDriver returns an object that acts like a browser/context
    # We store it in running contexts for management
    _running_contexts[profile_id] = browser  # type: ignore

    await repo.set_running(profile_id, True)
    await repo.set_last_launched(profile_id)

    # Handle startup URL
    startup_url = profile.get("startup_url", "about:blank")
    if startup_url and startup_url != "about:blank":
        page = await browser.get(startup_url)

    # Watch for browser exit
    # Note: Logic here depends on ZenDriver's specific event system
    # For now, we assume standard process monitoring if available or manual close

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
