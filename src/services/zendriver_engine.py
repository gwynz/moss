from pathlib import Path
import zendriver as zd
from .engine_utils import (
    DB_DIR,
    METAMASK_CHROME_DIR,
    get_browser_executable,
    create_proxy_extension,
)


async def launch(profile: dict):
    profile_id = profile["id"]
    browser_engine = profile.get("browser_engine", "chrome")
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(
            DB_DIR / "browser_data" / profile_id / "zendriver" / browser_engine
        )
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    config = zd.Config()
    config.user_data_dir = user_data_dir
    config.headless = False

    # Use local browser if available
    browser_exe = get_browser_executable(browser_engine)
    if browser_exe and browser_exe.exists():
        print(f"Using local {browser_engine}: {browser_exe}")
        config.browser_executable_path = str(browser_exe)

    config.browser_args.extend(
        ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
    )

    load_ext_paths = []

    # Handle Proxy with Dual Modes
    proxy_host = profile.get("proxy_host")
    proxy_port = profile.get("proxy_port")

    if proxy_host and proxy_port:
        user = profile.get("proxy_username", "")
        password = profile.get("proxy_password", "")

        proxy_ext_path = await create_proxy_extension(
            proxy_host, proxy_port, user, password
        )
        load_ext_paths.append(proxy_ext_path)

        # Required for extensions to work with authentication scripts
        config.add_argument("--disable-features=DisableLoadExtensionCommandLineSwitch")

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
        config.add_argument(f"--load-extension={ext_arg}")

    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    config.browser_args.append(f"--window-size={int(width)},{int(height)}")

    browser = await zd.start(config)

    return browser, browser.main_tab
