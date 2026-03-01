import asyncio
import os
import sys
from pathlib import Path

# Add src to sys.path
sys.path.append(str(Path("src").absolute()))

from utils.crypto import encrypt_string, decrypt_string
from services.wallet_repo import generate_mnemonic, create_wallet, list_wallets, delete_wallet
from services.db import init_db

async def test_wallet_manager():
    print("Testing Wallet Manager...")

    # 1. Test Encryption
    original = "test mnemonic phrase"
    encrypted = encrypt_string(original)
    decrypted = decrypt_string(encrypted)
    assert original == decrypted
    assert original != encrypted
    print("✓ Encryption/Decryption working.")

    # 2. Test Mnemonic Generation
    mnemonic12 = generate_mnemonic(128)
    assert len(mnemonic12.split()) == 12
    mnemonic24 = generate_mnemonic(256)
    assert len(mnemonic24.split()) == 24
    print("✓ Mnemonic generation working.")

    # 3. Test Database & Repository
    await init_db()

    name = "Test Wallet"
    note = "Testing note"
    seed = mnemonic12

    # Create
    wallet = await create_wallet(name, seed, "12 words", note)
    assert wallet["name"] == name
    assert wallet["note"] == note
    assert wallet["public_address"].startswith("0x")
    print(f"✓ Wallet created: {wallet['public_address']}")

    # List
    wallets = await list_wallets()
    assert any(w["id"] == wallet["id"] for w in wallets)
    print(f"✓ Wallet found in list. Total wallets: {len(wallets)}")

    # Cleanup
    success = await delete_wallet(wallet["id"])
    assert success
    print("✓ Wallet deleted.")

    print("\nAll tests passed successfully!")

if __name__ == "__main__":
    asyncio.run(test_wallet_manager())
