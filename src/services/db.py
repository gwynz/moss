import aiosqlite
from pathlib import Path

_DB_DIR = Path.home() / ".moss"
_DB_PATH = _DB_DIR / "moss.db"

_SCHEMA = """
CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    notes TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    last_launched TEXT,

    -- Identity
    user_agent TEXT NOT NULL DEFAULT '',
    platform TEXT NOT NULL DEFAULT 'Win32',
    language TEXT NOT NULL DEFAULT 'en-US',

    -- Display
    screen_width INTEGER NOT NULL DEFAULT 1920,
    screen_height INTEGER NOT NULL DEFAULT 1080,
    color_depth INTEGER NOT NULL DEFAULT 24,
    pixel_ratio REAL NOT NULL DEFAULT 1.0,

    -- Hardware
    hardware_concurrency INTEGER NOT NULL DEFAULT 4,
    device_memory INTEGER NOT NULL DEFAULT 8,

    -- Timezone
    timezone TEXT NOT NULL DEFAULT 'America/New_York',

    -- WebGL
    webgl_vendor TEXT NOT NULL DEFAULT '',
    webgl_renderer TEXT NOT NULL DEFAULT '',

    -- Canvas / Audio
    canvas_noise REAL NOT NULL DEFAULT 0.0,
    audio_noise REAL NOT NULL DEFAULT 0.0,

    -- Geolocation
    geoip INTEGER NOT NULL DEFAULT 1,
    geo_latitude REAL,
    geo_longitude REAL,
    geo_accuracy REAL NOT NULL DEFAULT 100.0,

    -- Proxy
    proxy_type TEXT NOT NULL DEFAULT '',
    proxy_host TEXT NOT NULL DEFAULT '',
    proxy_port INTEGER NOT NULL DEFAULT 0,
    proxy_username TEXT NOT NULL DEFAULT '',
    proxy_password TEXT NOT NULL DEFAULT '',

    -- Browser Data
    ext_metamask INTEGER NOT NULL DEFAULT 0,
    ext_phantom INTEGER NOT NULL DEFAULT 0,
    extensions_path TEXT NOT NULL DEFAULT '',
    startup_url TEXT NOT NULL DEFAULT 'about:blank',
    cookies TEXT NOT NULL DEFAULT '',

    -- Runtime
    browser_type TEXT NOT NULL DEFAULT 'camoufox',
    user_data_dir TEXT NOT NULL DEFAULT '',
    is_running INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS proxies (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    notes TEXT NOT NULL DEFAULT '',
    proxy_type TEXT NOT NULL, -- HTTP, SOCKS4, SOCKS5
    proxy_host TEXT NOT NULL,
    proxy_port INTEGER NOT NULL,
    proxy_username TEXT NOT NULL DEFAULT '',
    proxy_password TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);
"""


_INITIALIZED = False


async def get_connection() -> aiosqlite.Connection:
    _DB_DIR.mkdir(parents=True, exist_ok=True)
    conn = await aiosqlite.connect(str(_DB_PATH))
    await conn.execute("PRAGMA journal_mode=WAL")
    conn.row_factory = aiosqlite.Row
    return conn


async def init_db() -> None:
    global _INITIALIZED
    if _INITIALIZED:
        return

    conn = await get_connection()
    try:
        await conn.executescript(_SCHEMA)

        # Migration for existing databases
        cursor = await conn.execute("PRAGMA table_info(profiles)")
        columns = [row["name"] for row in await cursor.fetchall()]
        if "ext_metamask" not in columns:
            await conn.execute("ALTER TABLE profiles ADD COLUMN ext_metamask INTEGER NOT NULL DEFAULT 0")
        if "ext_phantom" not in columns:
            await conn.execute("ALTER TABLE profiles ADD COLUMN ext_phantom INTEGER NOT NULL DEFAULT 0")
        if "browser_type" not in columns:
            await conn.execute("ALTER TABLE profiles ADD COLUMN browser_type TEXT NOT NULL DEFAULT 'camoufox'")

        # Reset any stale is_running flags from previous sessions
        await conn.execute("UPDATE profiles SET is_running = 0 WHERE is_running = 1")
        await conn.commit()
        _INITIALIZED = True
    finally:
        await conn.close()
