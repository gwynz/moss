import os
from pathlib import Path
from cryptography.fernet import Fernet

_KEY_DIR = Path.home() / ".moss"
_KEY_PATH = _KEY_DIR / "secret.key"

def _get_or_create_key() -> bytes:
    _KEY_DIR.mkdir(parents=True, exist_ok=True)
    if _KEY_PATH.exists():
        return _KEY_PATH.read_bytes()

    key = Fernet.generate_key()
    _KEY_PATH.write_bytes(key)
    # Set permissions to read/write by owner only (Linux/macOS)
    if os.name != 'nt':
        _KEY_PATH.chmod(0o600)
    return key

_FERNET = Fernet(_get_or_create_key())

def encrypt_string(data: str) -> str:
    """Encrypts a string and returns a URL-safe base64-encoded string."""
    if not data:
        return ""
    return _FERNET.encrypt(data.encode()).decode()

def decrypt_string(token: str) -> str:
    """Decrypts a URL-safe base64-encoded string and returns the original string."""
    if not token:
        return ""
    try:
        return _FERNET.decrypt(token.encode()).decode()
    except Exception:
        # If decryption fails (e.g. invalid key or data), return empty or handle error
        return ""
