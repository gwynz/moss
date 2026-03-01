import asyncio
from pathlib import Path
from pydoll.constants import PageLoadState
from pydoll.browser.chromium import Chrome
from pydoll.browser.options import ChromiumOptions
from .engine_utils import DB_DIR, ensure_extension_extracted
from services import profile_repo as repo

async def launch(profile: dict, fast: bool = False) -> bool:
    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(DB_DIR / "browser_data" / "pydoll" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    options = ChromiumOptions()
    options.browser_preferences = {
        'enable_do_not_track': True,
        'enable_referrers': False,
        'safebrowsing': {'enabled': False},
        'profile': {
            'password_manager_enabled': False,
            'block_third_party_cookies': True,
            'cookie_controls_mode': 1
        },
        'autofill': {'enabled': False, 'profile_enabled': False},
        'search': {'suggest_enabled': False},
        'user_experience_metrics': {'reporting_enabled': False},
    }
    options.binary_location = r""

    abs_user_data_dir = str(Path(user_data_dir).absolute())
    options.add_argument(f"--user-data-dir={abs_user_data_dir}")

    if fast:
        options.page_load_state = PageLoadState.INTERACTIVE
        options.add_argument('--disable-extensions')
        options.add_argument('--disable-gpu')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-background-networking')
        options.add_argument('--disable-sync')
        options.add_argument('--disable-translate')
        options.block_notifications = True
        options.block_popups = True
        options.add_argument('--blink-settings=imagesEnabled=false')
        options.add_argument('--disable-features=NetworkPrediction')
        options.add_argument('--dns-prefetch-disable')
    else:
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.add_argument('--disable-features=IsolateOrigins,site-per-process')
        options.add_argument('--lang=en-US')
        options.add_argument('--accept-lang=en-US,en;q=0.9')
        options.add_argument('--use-gl=swiftshader')
        options.add_argument('--disable-features=WebGLDraftExtensions')
        options.webrtc_leak_protection = True

    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    options.add_argument(f"--window-size={int(width)},{int(height)}")
    options.add_argument('--window-position=0,0')

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
        options.add_argument(f"--proxy-server={proxy_url}")

    load_ext_paths = []
    chrome_ext_dir = Path(__file__).parent.parent / "assets" / "extensions" / "chrome"
    chrome_ext_dir.mkdir(parents=True, exist_ok=True)

    if profile.get("ext_metamask"):
        mm_path = chrome_ext_dir / "metamask"
        if ensure_extension_extracted("metamask", mm_path):
            load_ext_paths.append(str(mm_path.absolute()))

    if profile.get("ext_phantom"):
        ph_path = chrome_ext_dir / "phantom"
        if ensure_extension_extracted("phantom", ph_path):
            load_ext_paths.append(str(ph_path.absolute()))

    custom_ext = profile.get("extensions_path")
    if custom_ext:
        for p in custom_ext.split(";"):
            path = Path(p.strip())
            if p.strip() and path.exists():
                load_ext_paths.append(str(path.absolute()))

    if load_ext_paths:
        ext_arg = ",".join(load_ext_paths)
        options.add_argument(f"--load-extension={ext_arg}")

    browser = Chrome(options=options)
    await browser.start()
    return browser
