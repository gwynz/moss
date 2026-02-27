import uuid
from datetime import datetime, timezone

from services.db import get_connection

_ALL_COLUMNS = [
    "id", "name", "notes", "proxy_type", "proxy_host", "proxy_port",
    "proxy_username", "proxy_password", "created_at", "updated_at"
]


def _row_to_dict(row) -> dict:
    return {col: row[i] for i, col in enumerate(_ALL_COLUMNS)}


async def list_proxies() -> list[dict]:
    conn = await get_connection()
    try:
        cursor = await conn.execute(
            f"SELECT {', '.join(_ALL_COLUMNS)} FROM proxies ORDER BY created_at DESC"
        )
        rows = await cursor.fetchall()
        return [_row_to_dict(row) for row in rows]
    finally:
        await conn.close()


async def get_proxy(proxy_id: str) -> dict | None:
    conn = await get_connection()
    try:
        cursor = await conn.execute(
            f"SELECT {', '.join(_ALL_COLUMNS)} FROM proxies WHERE id = ?",
            (proxy_id,),
        )
        row = await cursor.fetchone()
        return _row_to_dict(row) if row else None
    finally:
        await conn.close()


async def find_proxy_by_host_port(host: str, port: str) -> dict | None:
    conn = await get_connection()
    try:
        cursor = await conn.execute(
            f"SELECT {', '.join(_ALL_COLUMNS)} FROM proxies WHERE proxy_host = ? AND proxy_port = ?",
            (host, str(port)),
        )
        row = await cursor.fetchone()
        return _row_to_dict(row) if row else None
    finally:
        await conn.close()


async def create_proxy(name: str, **kwargs) -> dict:
    now = datetime.now(timezone.utc).isoformat()
    proxy_id = str(uuid.uuid4())

    cols = ["id", "name", "created_at", "updated_at"]
    vals = [proxy_id, name, now, now]

    for col in [c for c in _ALL_COLUMNS if c not in cols]:
        if col in kwargs:
            cols.append(col)
            vals.append(kwargs[col])

    placeholders = ", ".join("?" for _ in cols)
    col_names = ", ".join(cols)

    conn = await get_connection()
    try:
        await conn.execute(
            f"INSERT INTO proxies ({col_names}) VALUES ({placeholders})",
            vals,
        )
        await conn.commit()
    finally:
        await conn.close()

    proxy = await get_proxy(proxy_id)
    assert proxy is not None
    return proxy


async def update_proxy(proxy_id: str, **kwargs) -> dict | None:
    if not kwargs:
        return await get_proxy(proxy_id)

    now = datetime.now(timezone.utc).isoformat()
    kwargs["updated_at"] = now

    set_clause = ", ".join(f"{k} = ?" for k in kwargs)
    vals = list(kwargs.values()) + [proxy_id]

    conn = await get_connection()
    try:
        await conn.execute(
            f"UPDATE proxies SET {set_clause} WHERE id = ?",
            vals,
        )
        await conn.commit()
    finally:
        await conn.close()

    return await get_proxy(proxy_id)


async def delete_proxy(proxy_id: str) -> bool:
    conn = await get_connection()
    try:
        cursor = await conn.execute("DELETE FROM proxies WHERE id = ?", (proxy_id,))
        await conn.commit()
        return cursor.rowcount > 0
    finally:
        await conn.close()
