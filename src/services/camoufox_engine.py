import asyncio
from pathlib import Path
from typing import Any, Callable, Optional
from camoufox.async_api import AsyncCamoufox
from browserforge.fingerprints import Screen
from playwright.async_api import Browser, BrowserContext
from .engine_utils import DB_DIR, METAMASK_FIREFOX_DIR


async def launch(profile: dict, on_close: Callable[[str], Any]) -> Any:
    profile_id = profile["id"]
    ext_metamask = profile.get("ext_metamask", False)
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(DB_DIR / "browser_data" / "camoufox" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

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

    launch_kwargs = {
        "user_data_dir": user_data_dir,
        "persistent_context": True,
        "headless": False,
        "proxy": proxy_config,
        "geoip": True,
        "main_world_eval": True,
    }

    if ext_metamask and METAMASK_FIREFOX_DIR.exists():
        launch_kwargs["addons"] = [str(METAMASK_FIREFOX_DIR)]
        # launch_kwargs["allow_addon_new_tab"] = True !! no update yet

    screen_width = profile.get("screen_width")
    screen_height = profile.get("screen_height")
    if screen_width and screen_height:
        w, h = int(screen_width), int(screen_height)
        launch_kwargs["window"] = (w, h)
        launch_kwargs["screen"] = Screen(max_width=w, max_height=h)

    browser_manager = AsyncCamoufox(**launch_kwargs)
    result = await browser_manager.__aenter__()

    if isinstance(result, Browser):
        context = await result.new_context()
    elif isinstance(result, BrowserContext):
        context = result
    else:
        context = result

    startup_url = profile.get("startup_url", "about:blank")
    if startup_url and startup_url != "about:blank":
        pages = context.pages
        if pages:
            await pages[0].goto(startup_url)
        else:
            page = await context.new_page()
            await page.goto(startup_url)

    context.on("close", lambda _ctx: asyncio.ensure_future(
        on_close(profile_id)))
    return context
