from pathlib import Path
import zendriver as zd
from .engine_utils import DB_DIR, METAMASK_CHROME_DIR, get_brave_executable


async def launch(profile: dict) -> zd.Browser:
    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(DB_DIR / "browser_data" / "zendriver" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    config = zd.Config()
    config.user_data_dir = user_data_dir
    config.headless = False

    # Use local Brave if available
    brave_exe = get_brave_executable()
    if brave_exe and brave_exe.exists():
        print(f"Using local Brave: {brave_exe}")
        config.browser_executable_path = str(brave_exe)

    config.browser_args.extend([
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage"
    ])

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
        config.add_argument(f"--load-extension={ext_arg}")

    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    config.browser_args.append(f"--window-size={int(width)},{int(height)}")

    browser = await zd.start(config)
    return browser
