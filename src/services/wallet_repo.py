import uuid
from datetime import datetime, timezone
from eth_account import Account
from services.db import get_connection
from utils.crypto import encrypt_string, decrypt_string

# Enable mnemonic support for eth-account
Account.enable_unaudited_hdwallet_features()

_ALL_COLUMNS = [
    "id", "name", "note", "public_address", "seed", "seed_type", "created_at", "updated_at"
]

def _row_to_dict(row, decrypt_seed=False) -> dict:
    d = {col: row[i] for i, col in enumerate(_ALL_COLUMNS)}
    if decrypt_seed and d.get("seed"):
        d["seed"] = decrypt_string(d["seed"])
    return d

async def list_wallets() -> list[dict]:
    conn = await get_connection()
    try:
        cursor = await conn.execute(
            f"SELECT {', '.join(_ALL_COLUMNS)} FROM wallets ORDER BY created_at DESC"
        )
        rows = await cursor.fetchall()
        return [_row_to_dict(row) for row in rows]
    finally:
        await conn.close()

async def get_wallet(wallet_id: str, decrypt_seed=False) -> dict | None:
    conn = await get_connection()
    try:
        cursor = await conn.execute(
            f"SELECT {', '.join(_ALL_COLUMNS)} FROM wallets WHERE id = ?",
            (wallet_id,),
        )
        row = await cursor.fetchone()
        return _row_to_dict(row, decrypt_seed=decrypt_seed) if row else None
    finally:
        await conn.close()

async def create_wallet(name: str, seed: str, seed_type: str, note: str = "") -> dict:
    now = datetime.now(timezone.utc).isoformat()
    wallet_id = str(uuid.uuid4())

    # Derive public address from mnemonic if not provided/as validation
    try:
        account = Account.from_mnemonic(seed)
        public_address = account.address
    except Exception as e:
        raise ValueError(f"Invalid mnemonic: {e}")

    encrypted_seed = encrypt_string(seed)

    conn = await get_connection()
    try:
        await conn.execute(
            """INSERT INTO wallets
               (id, name, note, public_address, seed, seed_type, created_at, updated_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
            (wallet_id, name, note, public_address, encrypted_seed, seed_type, now, now),
        )
        await conn.commit()
    finally:
        await conn.close()

    wallet = await get_wallet(wallet_id)
    assert wallet is not None
    return wallet

async def update_wallet(wallet_id: str, **kwargs) -> dict | None:
    if not kwargs:
        return await get_wallet(wallet_id)

    now = datetime.now(timezone.utc).isoformat()
    kwargs["updated_at"] = now

    if "seed" in kwargs:
        # Re-derive address if seed changes
        try:
            account = Account.from_mnemonic(kwargs["seed"])
            kwargs["public_address"] = account.address
            kwargs["seed"] = encrypt_string(kwargs["seed"])
        except Exception as e:
            raise ValueError(f"Invalid mnemonic: {e}")

    set_clause = ", ".join(f"{k} = ?" for k in kwargs)
    vals = list(kwargs.values()) + [wallet_id]

    conn = await get_connection()
    try:
        await conn.execute(
            f"UPDATE wallets SET {set_clause} WHERE id = ?",
            vals,
        )
        await conn.commit()
    finally:
        await conn.close()

    return await get_wallet(wallet_id)

async def delete_wallet(wallet_id: str) -> bool:
    conn = await get_connection()
    try:
        # Clear references in profiles
        await conn.execute("UPDATE profiles SET wallet_id = NULL WHERE wallet_id = ?", (wallet_id,))
        # Delete the wallet
        cursor = await conn.execute("DELETE FROM wallets WHERE id = ?", (wallet_id,))
        await conn.commit()
        return cursor.rowcount > 0
    finally:
        await conn.close()

def generate_mnemonic(strength: int = 128) -> str:
    """Generate a random mnemonic (128 bits = 12 words, 256 bits = 24 words)."""
    # Account.create_with_mnemonic() returns (account, mnemonic)
    _, mnemonic = Account.create_with_mnemonic(num_words=12 if strength == 128 else 24)
    return mnemonic
