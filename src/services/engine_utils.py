from pathlib import Path
import shutil
import zipfile

import os
import sys
import platform
import requests
import asyncio
from pathlib import Path

DB_DIR = Path.home() / ".moss"
BIN_DIR = DB_DIR / "bin"
BRAVE_DIR = BIN_DIR / "brave"
EXTENSIONS_DIR = DB_DIR / "extensions"
METAMASK_CHROME_DIR = EXTENSIONS_DIR / "chrome" / "metamask"

def get_brave_executable() -> Path | None:
    """Returns the path to the local Brave executable based on OS."""
    if sys.platform == "win32":
        return BRAVE_DIR / "brave.exe"
    elif sys.platform == "darwin":
        return BRAVE_DIR / "Brave Browser.app" / "Contents" / "MacOS" / "Brave Browser"
    else:
        return BRAVE_DIR / "brave"

def is_brave_installed() -> bool:
    """Checks if the local Brave binary exists."""
    exe = get_brave_executable()
    return exe is not None and exe.exists()

async def download_brave(progress_callback=None):
    """Downloads and extracts Brave to the local bin directory."""
    BRAVE_DIR.mkdir(parents=True, exist_ok=True)
    BIN_DIR.mkdir(parents=True, exist_ok=True)

    # Simplified download URLs
    urls = {
        "win32": "https://github.com/brave/brave-browser/releases/download/v1.75.173/brave-v1.75.173-win32-x64.zip",
        "linux": "https://github.com/brave/brave-browser/releases/download/v1.75.173/brave-v1.75.173-linux-amd64.zip",
        "darwin": "https://github.com/brave/brave-browser/releases/download/v1.75.173/brave-v1.75.173-darwin-x64.zip"
    }

    url = urls.get(sys.platform)
    if not url:
        raise Exception(f"Unsupported platform: {sys.platform}")

    def _sync_download():
        if progress_callback: progress_callback("Downloading Brave browser...", 0.1)
        response = requests.get(url, stream=True, timeout=60.0)
        response.raise_for_status()

        zip_path = BIN_DIR / "brave.zip"
        with open(zip_path, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        return zip_path

    try:
        zip_path = await asyncio.to_thread(_sync_download)

        if progress_callback: progress_callback("Extracting browser files...", 0.6)
        import zipfile
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(BRAVE_DIR)

        os.remove(zip_path)

        if sys.platform != "win32":
            exe = get_brave_executable()
            if exe and exe.exists():
                exe.chmod(exe.stat().st_mode | 0o111)

        if progress_callback: progress_callback("Brave installed successfully!", 1.0)
        return True
    except Exception as e:
        if progress_callback: progress_callback(f"Error: {str(e)}", 0)
        raise e

EXTENSIONS_DIR = DB_DIR / "extensions"
METAMASK_CHROME_DIR = EXTENSIONS_DIR / "chrome" / "metamask"
METAMASK_FIREFOX_DIR = EXTENSIONS_DIR / "firefox" / "metamask"
METAMASK_ID = "ipkfmedcjidoidhklihaemaelnomcglo"

def is_metamask_installed() -> bool:
    """Checks if both Chrome and Firefox MetaMask extensions are downloaded and extracted."""
    chrome_ok = METAMASK_CHROME_DIR.exists() and (METAMASK_CHROME_DIR / "manifest.json").exists()
    firefox_ok = METAMASK_FIREFOX_DIR.exists() and (METAMASK_FIREFOX_DIR / "manifest.json").exists()
    return chrome_ok and firefox_ok

async def download_metamask(progress_callback=None):
    """Downloads and extracts MetaMask extension for both Chrome and Firefox."""
    EXTENSIONS_DIR.mkdir(parents=True, exist_ok=True)

    # Versions and URLs
    VERSION = "12.10.1"
    CHROME_URL = f"https://github.com/MetaMask/metamask-extension/releases/download/v{VERSION}/metamask-chrome-{VERSION}.zip"
    FIREFOX_URL = f"https://github.com/MetaMask/metamask-extension/releases/download/v{VERSION}/metamask-firefox-{VERSION}.zip"

    def _sync_download(url, name):
        if progress_callback: progress_callback(f"Downloading MetaMask ({name})...", 0.1)
        response = requests.get(url, stream=True, timeout=60.0)
        response.raise_for_status()
        zip_path = EXTENSIONS_DIR / f"metamask_{name}.zip"
        with open(zip_path, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk: f.write(chunk)
        return zip_path

    async def _process_variant(url, name, target_dir):
        zip_path = await asyncio.to_thread(_sync_download, url, name)

        if progress_callback: progress_callback(f"Extracting MetaMask ({name})...", 0.6)
        if target_dir.exists():
            shutil.rmtree(target_dir, ignore_errors=True)
        target_dir.mkdir(parents=True, exist_ok=True)

        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(target_dir)

        os.remove(zip_path)

    try:
        # Download and extract both
        await _process_variant(CHROME_URL, "chrome", METAMASK_CHROME_DIR)
        await _process_variant(FIREFOX_URL, "firefox", METAMASK_FIREFOX_DIR)

        if progress_callback: progress_callback("MetaMask ready for all engines!", 1.0)
        return True
    except Exception as e:
        if progress_callback: progress_callback(f"Error: {str(e)}", 0)
        raise e


def ensure_extension_extracted(name: str, target_dir: Path) -> bool:
    """If name.zip exists in root, delete target_dir and extract fresh."""
    zip_path = Path(f"{name}.zip")
    if zip_path.exists():
        try:
            if target_dir.exists():
                shutil.rmtree(target_dir, ignore_errors=True)
            target_dir.mkdir(parents=True, exist_ok=True)
            with zipfile.ZipFile(zip_path, 'r') as z:
                z.extractall(target_dir)
            return True
        except Exception as e:
            print(f"Error extracting {name}.zip: {e}")
    return target_dir.exists()
