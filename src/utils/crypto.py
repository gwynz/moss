import base64
import os
from pathlib import Path
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

_CONFIG_DIR = Path.home() / ".moss"
_SALT_PATH = _CONFIG_DIR / "salt.bin"
_VERIFY_PATH = _CONFIG_DIR / "verify.bin"

# Current session's Fernet instance (None if locked)
_SESSION_FERNET: Fernet | None = None

def _get_or_create_salt() -> bytes:
    _CONFIG_DIR.mkdir(parents=True, exist_ok=True)
    if _SALT_PATH.exists():
        return _SALT_PATH.read_bytes()
    salt = os.urandom(16)
    _SALT_PATH.write_bytes(salt)
    return salt

def is_password_set() -> bool:
    return _VERIFY_PATH.exists()

def initialize_session(password: str) -> bool:
    """Derives the key and validates it against the stored verification file."""
    global _SESSION_FERNET
    salt = _get_or_create_salt()

    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=600000,
    )
    key = base64.urlsafe_b64encode(kdf.derive(password.encode()))
    fernet = Fernet(key)

    if not _VERIFY_PATH.exists():
        # First-time setup: encrypt a canary string to verify password later
        _VERIFY_PATH.write_bytes(fernet.encrypt(b"MOSS_VALID_KEY"))
        _SESSION_FERNET = fernet
        return True

    try:
        decrypted = fernet.decrypt(_VERIFY_PATH.read_bytes())
        if decrypted == b"MOSS_VALID_KEY":
            _SESSION_FERNET = fernet
            return True
    except Exception:
        return False
    return False

def logout():
    global _SESSION_FERNET
    _SESSION_FERNET = None

def encrypt_string(data: str) -> str:
    if not _SESSION_FERNET or not data:
        return ""
    return _SESSION_FERNET.encrypt(data.encode()).decode()

def decrypt_string(token: str) -> str:
    if not _SESSION_FERNET or not token:
        return ""
    try:
        return _SESSION_FERNET.decrypt(token.encode()).decode()
    except Exception:
        # If decryption fails (e.g. invalid key or data), return empty
        return ""
