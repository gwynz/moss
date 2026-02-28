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
    if browser_type == "pydoll":
        return await _launch_pydoll(profile)
    if browser_type == "cloakbrowser":
        return await _launch_cloakbrowser(profile)

    return await _launch_camoufox(profile)


async def _launch_cloakbrowser(profile: dict) -> bool:
    # from cloakbrowser import launch
    # from playwright.async_api import Browser, BrowserContext

    # profile_id = profile["id"]
    # user_data_dir = profile.get("user_data_dir", "")
    # if not user_data_dir:
    #     user_data_dir = str(_DB_DIR / "browser_data" / "cloakbrowser" / profile_id)
    #     Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    # # Proxy configuration
    # proxy_config = None
    # proxy_type = profile.get("proxy_type", "")
    # proxy_host = profile.get("proxy_host", "")
    # proxy_port = profile.get("proxy_port", 0)
    # if proxy_type and proxy_host and proxy_port:
    #     proxy_config = {"server": f"{proxy_type}://{proxy_host}:{proxy_port}"}
    #     proxy_user = profile.get("proxy_username", "")
    #     proxy_pass = profile.get("proxy_password", "")
    #     if proxy_user:
    #         proxy_config["username"] = proxy_user
    #     if proxy_pass:
    #         proxy_config["password"] = proxy_pass

    # # Launch arguments
    # args = []
    # width = profile.get("screen_width")
    # height = profile.get("screen_height")
    # if width and height:
    #     args.append(f"--window-size={int(width)},{int(height)}")

    # # CloakBrowser launch
    # # Note: launch() in cloakbrowser is typically async if using playwright.async_api
    # browser = await launch(
    #     headless=False,
    #     proxy=proxy_config,
    #     user_data_dir=user_data_dir,
    #     args=args
    # )

    # # Ensure we get a context
    # if isinstance(browser, Browser):
    #     context = await browser.new_context()
    # elif isinstance(browser, BrowserContext):
    #     context = browser
    # else:
    #     context = browser # type: ignore

    # # Store context
    # _running_contexts[profile_id] = context

    # await repo.set_running(profile_id, True)
    # await repo.set_last_launched(profile_id)

    # startup_url = profile.get("startup_url", "about:blank")
    # if startup_url and startup_url != "about:blank":
    #     pages = context.pages
    #     if pages:
    #         await pages[0].goto(startup_url)
    #     else:
    #         page = await context.new_page()
    #         await page.goto(startup_url)

    # # Watch for browser close
    # context.on("close", lambda _ctx: asyncio.ensure_future(
    #     _on_context_closed(profile_id)))  # type: ignore

    # return True
    raise NotImplementedError("CloakBrowser not yet supported")


async def _launch_pydoll(profile: dict) -> bool:
    from pydoll.browser.chromium import Chrome
    from pydoll.browser.options import ChromiumOptions

    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(_DB_DIR / "browser_data" / "pydoll" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    options = ChromiumOptions()
    options.add_argument(f"--user-data-dir={user_data_dir}")
    options.headless = False

    # Screen Size
    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    options.add_argument(f"--window-size={int(width)},{int(height)}")

    # Proxy configuration
    proxy_type = profile.get("proxy_type", "")
    proxy_host = profile.get("proxy_host", "")
    proxy_port = profile.get("proxy_port", 0)
    if proxy_type and proxy_host and proxy_port:
        user = profile.get("proxy_username", "")
        password = profile.get("proxy_password", "")
        if user and password:
            proxy_url = f"{proxy_type}://{user}:{password}@{proxy_host}:{proxy_port}"
        else:
            proxy_url = f"{proxy_type}://{proxy_host}:{proxy_port}"
        # Pydoll/Chrome proxy argument
        options.add_argument(f"--proxy-server={proxy_url}")

    # Extension loading
    load_ext_paths = []
    chrome_ext_dir = Path(__file__).parent.parent / \
        "assets" / "extensions" / "chrome"

    if profile.get("ext_metamask"):
        mm_path = chrome_ext_dir / "metamask"
        if mm_path.exists():
            load_ext_paths.append(str(mm_path.absolute()))

    if profile.get("ext_phantom"):
        ph_path = chrome_ext_dir / "phantom"
        if ph_path.exists():
            load_ext_paths.append(str(ph_path.absolute()))

    custom_ext = profile.get("extensions_path")
    if custom_ext:
        for p in custom_ext.split(";"):
            if p.strip() and Path(p.strip()).exists():
                load_ext_paths.append(str(Path(p.strip()).absolute()))

    if load_ext_paths:
        options.add_argument(f"--load-extension={','.join(load_ext_paths)}")

    browser = Chrome(options=options)
    await browser.start()

    # Store "context" (for pydoll it's the browser object itself)
    _running_contexts[profile_id] = browser  # type: ignore

    await repo.set_running(profile_id, True)
    await repo.set_last_launched(profile_id)

    return True


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

    # # Camoufox specific and Playwright standard options
    # addons = []
    # # Load standard extensions if enabled
    # ext_dir = Path(__file__).parent.parent / \
    #     "assets" / "extensions" / "firefox"
    # if profile.get("ext_metamask"):
    #     mm_path = ext_dir / "metamask"
    #     if mm_path.exists():
    #         addons.append(str(mm_path))
    # if profile.get("ext_phantom"):
    #     ph_path = ext_dir / "phantom"
    #     if ph_path.exists():
    #         addons.append(str(ph_path))

    # # Load custom extensions from path
    # extensions_path = profile.get("extensions_path")
    # if extensions_path:
    #     # Supports semicolon separated list of extracted addon directories
    #     paths = [p.strip() for p in extensions_path.split(";") if p.strip()]
    #     for p in paths:
    #         if Path(p).exists():
    #             addons.append(p)

    launch_kwargs = {
        "user_data_dir": user_data_dir,
        "persistent_context": True,
        "headless": False,
        "proxy": proxy_config,
        "geoip": True,
        # "addons": addons if addons else None,
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

    config = zd.Config()
    config.user_data_dir = user_data_dir
    config.headless = False

    # Critical flags for extension loading stability
    config.browser_args.append("--no-sandbox")
    config.browser_args.append("--disable-gpu")
    config.browser_args.append("--disable-dev-shm-usage")

    # Screen Size
    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    config.browser_args.append(f"--window-size={int(width)},{int(height)}")

    # Extensions
    # chrome_ext_dir = Path(__file__).parent.parent / \
    #     "assets" / "extensions" / "chrome"
    # load_ext_paths = []

    # if profile.get("ext_metamask"):
    #     mm_path = chrome_ext_dir / "metamask"
    #     if mm_path.exists():
    #         ext_path = str(mm_path.absolute())
    #         config.add_extension(extension_path=ext_path)
    #         load_ext_paths.append(ext_path)

    # if profile.get("ext_phantom"):
    #     ph_path = chrome_ext_dir / "phantom"
    #     if ph_path.exists():
    #         ext_path = str(ph_path.absolute())
    #         config.add_extension(extension_path=ext_path)
    #         load_ext_paths.append(ext_path)

    # # Some versions of Chrome require this flag to successfully load multiple unpacked extensions
    # if load_ext_paths:
    #     config.browser_args.append(
    #         f"--disable-extensions-except={','.join(load_ext_paths)}")

    browser = await zd.start(config)

    # Setup proxy and extensions on the main tab
    # Using 'draft:,' as in the working example to ensure a clean state for CDP setup
    tab = await browser.get("draft:,")

    # Store context for management
    _running_contexts[profile_id] = browser  # type: ignore

    await repo.set_running(profile_id, True)
    await repo.set_last_launched(profile_id)

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
