import uuid
from datetime import datetime, timezone

from services.db import get_connection
from services.fingerprint_defaults import generate_random_fingerprint

# All profile columns (excluding id, created_at, updated_at)
_MUTABLE_COLUMNS = [
    "name", "notes", "last_launched",
    "user_agent", "platform", "language",
    "screen_width", "screen_height", "color_depth", "pixel_ratio",
    "hardware_concurrency", "device_memory",
    "timezone",
    "webgl_vendor", "webgl_renderer",
    "canvas_noise", "audio_noise",
    "geoip",
    "geo_latitude", "geo_longitude", "geo_accuracy",
    "proxy_type", "proxy_host", "proxy_port", "proxy_username", "proxy_password",
    "ext_metamask",
    "browser_type",
    "extensions_path", "startup_url", "cookies",
    "user_data_dir", "is_running", "wallet_id",
]

_ALL_COLUMNS = ["id", "name", "notes", "created_at", "updated_at", "last_launched",
                "user_agent", "platform", "language",
                "screen_width", "screen_height", "color_depth", "pixel_ratio",
                "hardware_concurrency", "device_memory",
                "timezone",
                "webgl_vendor", "webgl_renderer",
                "canvas_noise", "audio_noise",
                "geoip",
                "geo_latitude", "geo_longitude", "geo_accuracy",
                "proxy_type", "proxy_host", "proxy_port", "proxy_username", "proxy_password",
                "ext_metamask",
                "browser_type",
                "extensions_path", "startup_url", "cookies",
                "user_data_dir", "is_running", "wallet_id",
                ]


def _row_to_dict(row) -> dict:
    return {col: row[i] for i, col in enumerate(_ALL_COLUMNS)}


async def list_profiles() -> list[dict]:
    conn = await get_connection()
    try:
        query = f"""
            SELECT p.*, w.name as wallet_name, w.public_address as wallet_address
            FROM profiles p
            LEFT JOIN wallets w ON p.wallet_id = w.id
            ORDER BY p.created_at DESC
        """
        cursor = await conn.execute(query)
        rows = await cursor.fetchall()
        return [dict(row) for row in rows]
    finally:
        await conn.close()


async def get_profile(profile_id: str) -> dict | None:
    conn = await get_connection()
    try:
        query = f"""
            SELECT p.*, w.name as wallet_name, w.public_address as wallet_address
            FROM profiles p
            LEFT JOIN wallets w ON p.wallet_id = w.id
            WHERE p.id = ?
        """
        cursor = await conn.execute(query, (profile_id,))
        row = await cursor.fetchone()
        return dict(row) if row else None
    finally:
        await conn.close()


async def create_profile(name: str, **kwargs) -> dict:
    now = datetime.now(timezone.utc).isoformat()
    profile_id = str(uuid.uuid4())

    defaults = generate_random_fingerprint()
    defaults.update(kwargs)

    cols = ["id", "name", "created_at", "updated_at"]
    vals = [profile_id, name, now, now]

    for col in _MUTABLE_COLUMNS:
        if col in ("name", "last_launched"):
            continue
        if col in defaults:
            cols.append(col)
            vals.append(defaults[col])

    placeholders = ", ".join("?" for _ in cols)
    col_names = ", ".join(cols)

    conn = await get_connection()
    try:
        await conn.execute(
            f"INSERT INTO profiles ({col_names}) VALUES ({placeholders})",
            vals,
        )
        await conn.commit()
    finally:
        await conn.close()

    profile = await get_profile(profile_id)
    assert profile is not None
    return profile


async def update_profile(profile_id: str, **kwargs) -> dict | None:
    if not kwargs:
        return await get_profile(profile_id)

    now = datetime.now(timezone.utc).isoformat()
    kwargs["updated_at"] = now

    set_clause = ", ".join(f"{k} = ?" for k in kwargs)
    vals = list(kwargs.values()) + [profile_id]

    conn = await get_connection()
    try:
        await conn.execute(
            f"UPDATE profiles SET {set_clause} WHERE id = ?",
            vals,
        )
        await conn.commit()
    finally:
        await conn.close()

    return await get_profile(profile_id)


async def delete_profile(profile_id: str) -> bool:
    conn = await get_connection()
    try:
        cursor = await conn.execute("DELETE FROM profiles WHERE id = ?", (profile_id,))
        await conn.commit()
        return cursor.rowcount > 0
    finally:
        await conn.close()


async def set_running(profile_id: str, running: bool) -> None:
    await update_profile(profile_id, is_running=1 if running else 0)


async def set_last_launched(profile_id: str) -> None:
    now = datetime.now(timezone.utc).isoformat()
    await update_profile(profile_id, last_launched=now)


async def import_profiles(profiles_data: list[dict]) -> int:
    """
    Imports profiles from a list of dictionaries.
    Skips profiles with IDs that already exist in the database.
    Returns the number of profiles successfully imported.
    """
    conn = await get_connection()
    try:
        # Get existing IDs to avoid duplicates
        cursor = await conn.execute("SELECT id FROM profiles")
        rows = await cursor.fetchall()
        existing_ids = {row["id"] for row in rows}

        imported_count = 0
        for entry in profiles_data:
            if entry.get("id") in existing_ids:
                continue

            # Filter data to only include valid columns that exist in the schema
            cols = []
            vals = []
            for col in _ALL_COLUMNS:
                if col in entry and entry[col] is not None:
                    cols.append(col)
                    vals.append(entry[col])

            if not cols:
                continue

            placeholders = ", ".join("?" for _ in cols)
            col_names = ", ".join(cols)

            await conn.execute(
                f"INSERT INTO profiles ({col_names}) VALUES ({placeholders})",
                vals,
            )
            imported_count += 1

        await conn.commit()
        return imported_count
    finally:
        await conn.close()
