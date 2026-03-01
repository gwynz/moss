import asyncio
from pathlib import Path
from pydoll.constants import PageLoadState
from pydoll.browser.chromium import Chrome
from pydoll.browser.options import ChromiumOptions
from .engine_utils import DB_DIR, METAMASK_CHROME_DIR, get_brave_executable
from services import profile_repo as repo


def create_fast_scraping_options():
    options = ChromiumOptions()

    # WebRTC IP leak prevention
    options.webrtc_leak_protection = True

    # Faster page loads (DOM ready is enough for scraping)
    options.page_load_state = PageLoadState.INTERACTIVE

    # Disable unnecessary features
    options.add_argument('--disable-extensions')
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-background-networking')
    options.add_argument('--disable-sync')
    options.add_argument('--disable-translate')

    # Block content that slows down loading
    options.block_notifications = True
    options.block_popups = True

    # Disable images for even faster loading (if you don't need them)
    options.add_argument('--blink-settings=imagesEnabled=false')

    # Network optimizations
    options.add_argument('--disable-features=NetworkPrediction')
    options.add_argument('--dns-prefetch-disable')

    # Browser References
    options.browser_preferences = {
        # Disable network prediction and prefetching
        'net': {
            'network_prediction_options': 2  # 2 = Never predict
        },
        # Disable image loading
        'profile': {
            'default_content_setting_values': {
                'images': 2  # 2 = Block, 1 = Allow
            }
        },
        # Disable plugins
        'webkit': {
            'webprefs': {
                'plugins_enabled': False
            }
        },
        # Disable spell check
        'browser': {
            'enable_spellchecking': False
        },

        # WebRTC (can leak real IP)
        'webrtc': {
            'ip_handling_policy': 'disable_non_proxied_udp',
            'multiple_routes_enabled': False,
            'nonproxied_udp_enabled': False,
            'allow_legacy_tls_protocols': False
        }
    }

    return options


def create_full_stealth_options():
    """Complete stealth configuration combining arguments and preferences."""
    options = ChromiumOptions()

    # WebRTC IP leak prevention
    options.webrtc_leak_protection = True

    # Core stealth
    options.add_argument('--disable-blink-features=AutomationControlled')
    options.add_argument('--disable-features=IsolateOrigins,site-per-process')

    # User agent (use a recent, common one)
    options.add_argument(
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36')

    # Language and locale
    options.add_argument('--lang=en-US')
    options.add_argument('--accept-lang=en-US,en;q=0.9')

    # WebGL (software renderer to avoid unique GPU signatures)
    options.add_argument('--use-gl=swiftshader')
    options.add_argument('--disable-features=WebGLDraftExtensions')

    # ===== Browser Preferences =====
    options.browser_preferences = {
        # Realistic homepage
        'homepage': 'https://www.google.com',
        'session': {
            'restore_on_startup': 1,
            'startup_urls': ['https://www.google.com']
        },

        # Enable features real users have
        'safebrowsing': {'enabled': True},
        'autofill': {'enabled': True},
        'search': {'suggest_enabled': True},
        'dns_prefetching': {'enabled': True},

        # Privacy
        'enable_do_not_track': False,  # Most users don't enable this
        'enable_referrers': False,

        # Safe Browsing
        'safebrowsing': {
            'enabled': False,                   # Disable Safe Browsing
            'enhanced': False                   # Disable enhanced protection
        },

        # Privacy Sandbox (Google's cookie replacement)
        'privacy_sandbox': {
            'apis_enabled': False,
            'topics_enabled': False,
            'fledge_enabled': False
        },

        # Third-party cookies
        'profile': {
            'block_third_party_cookies': True,
            'cookie_controls_mode': 1,          # Block third-party in incognito

            # Content settings
            'default_content_setting_values': {
                'cookies': 1,
                'third_party_cookie_blocking_enabled': True
            }
        },

        # WebRTC (can leak real IP)
        'webrtc': {
            'ip_handling_policy': 'disable_non_proxied_udp',
            'multiple_routes_enabled': False,
            'nonproxied_udp_enabled': False,
            'allow_legacy_tls_protocols': False
        }
    }

    return options


async def launch(profile: dict, fast: bool = False):
    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(DB_DIR / "browser_data" / "pydoll" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    options = None
    if fast:
        print("Creating fast scraping options")
        options = create_fast_scraping_options()
    else:
        print("Creating full stealth options")
        options = create_full_stealth_options()

    abs_user_data_dir = str(Path(user_data_dir).absolute())
    options.add_argument(f"--user-data-dir={abs_user_data_dir}")

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

    if profile.get("ext_metamask"):
        if METAMASK_CHROME_DIR.exists():
            load_ext_paths.append(str(METAMASK_CHROME_DIR.absolute()))

    custom_ext = profile.get("extensions_path")
    if custom_ext:
        for p in custom_ext.split(";"):
            path = Path(p.strip())
            if p.strip() and path.exists():
                load_ext_paths.append(str(path.absolute()))

    if load_ext_paths:
        ext_arg = ",".join(load_ext_paths)
        options.add_argument(f"--load-extension={ext_arg}")

    # Use local Brave if available
    brave_exe = get_brave_executable()
    if brave_exe and brave_exe.exists():
        print(f"Using local Brave: {brave_exe}")
        options.binary_location = str(brave_exe)

    browser = Chrome(options=options)

    await browser.start()
    return browser
