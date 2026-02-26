import asyncio
import atexit
from datetime import datetime, timezone
from pathlib import Path
from typing import TYPE_CHECKING

from services._fingerprint_scripts import get_all_scripts
from services import _profile_repo as repo

if TYPE_CHECKING:
    from playwright.async_api import BrowserContext

_running_contexts: dict[str, "BrowserContext"] = {}  # profile_id -> BrowserContext
_playwright_instance = None
_DB_DIR = Path.home() / ".moss"


async def _get_playwright():
    global _playwright_instance
    if _playwright_instance is None:
        from playwright.async_api import async_playwright
        pw = async_playwright()
        _playwright_instance = await pw.start()
    return _playwright_instance


async def launch_profile(profile: dict) -> bool:
    profile_id = profile["id"]
    if profile_id in _running_contexts:
        return False

    pw = await _get_playwright()

    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(_DB_DIR / "browser_data" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    args = [
        "--disable-blink-features=AutomationControlled",
        "--disable-infobars",
        "--no-first-run",
        "--no-default-browser-check",
    ]

    webrtc_policy = profile.get("webrtc_policy", "default")
    if webrtc_policy == "disable_non_proxied_udp":
        args.append("--webrtc-ip-handling-policy=disable_non_proxied_udp")
    elif webrtc_policy == "disable":
        args.append("--webrtc-ip-handling-policy=disable_non_proxied_udp")
        args.append("--disable-webrtc-hw-encoding")
        args.append("--disable-webrtc-hw-decoding")

    extensions_path = profile.get("extensions_path", "")
    if extensions_path and Path(extensions_path).exists():
        args.append(f"--load-extension={extensions_path}")
        args.append(f"--disable-extensions-except={extensions_path}")

    launch_kwargs = {
        "user_data_dir": user_data_dir,
        "headless": False,
        "args": args,
        "ignore_default_args": ["--enable-automation"],
        "chromium_sandbox": False,
    }

    ua = profile.get("user_agent", "")
    if ua:
        launch_kwargs["user_agent"] = ua

    w = profile.get("screen_width", 1920)
    h = profile.get("screen_height", 1080)
    launch_kwargs["viewport"] = {"width": w, "height": h}

    tz = profile.get("timezone", "")
    if tz:
        launch_kwargs["timezone_id"] = tz

    lang = profile.get("language", "")
    if lang:
        launch_kwargs["locale"] = lang

    geo_lat = profile.get("geo_latitude")
    geo_lng = profile.get("geo_longitude")
    if geo_lat is not None and geo_lng is not None:
        launch_kwargs["geolocation"] = {
            "latitude": geo_lat,
            "longitude": geo_lng,
            "accuracy": profile.get("geo_accuracy", 100.0),
        }
        launch_kwargs["permissions"] = ["geolocation"]

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
        launch_kwargs["proxy"] = proxy_config

    context = await pw.chromium.launch_persistent_context(**launch_kwargs)

    fingerprint_js = get_all_scripts(profile)
    if fingerprint_js:
        await context.add_init_script(fingerprint_js)
        for page in context.pages:
            await page.add_init_script(fingerprint_js)

    # Import cookies if present
    cookies_json = profile.get("cookies", "")
    if cookies_json:
        import json
        try:
            cookies = json.loads(cookies_json)
            if cookies:
                await context.add_cookies(cookies)
        except (json.JSONDecodeError, TypeError):
            pass

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
    context.on("close", lambda _ctx: asyncio.ensure_future(_on_context_closed(profile_id)))

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
    global _playwright_instance
    if _playwright_instance:
        try:
            await _playwright_instance.stop()
        except Exception:
            pass
        _playwright_instance = None


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
