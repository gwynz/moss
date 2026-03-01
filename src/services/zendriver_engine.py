from pathlib import Path
import zendriver as zd
from .engine_utils import DB_DIR

async def launch(profile: dict) -> zd.Browser:
    profile_id = profile["id"]
    user_data_dir = profile.get("user_data_dir", "")
    if not user_data_dir:
        user_data_dir = str(DB_DIR / "browser_data" / "zendriver" / profile_id)
        Path(user_data_dir).mkdir(parents=True, exist_ok=True)

    config = zd.Config()
    config.user_data_dir = user_data_dir
    config.headless = False

    config.browser_args.extend([
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage"
    ])

    width = profile.get("screen_width", 1280)
    height = profile.get("screen_height", 720)
    config.browser_args.append(f"--window-size={int(width)},{int(height)}")

    browser = await zd.start(config)

    # Setup proxy and extensions on the main tab
    await browser.get("draft:,")

    return browser
