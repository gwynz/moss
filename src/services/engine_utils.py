from pathlib import Path
import shutil
import zipfile

import json
import tempfile
import os
import sys
import platform
import requests
import asyncio
from pathlib import Path

DB_DIR = Path.home() / ".moss"
BIN_DIR = DB_DIR / "bin"
BRAVE_DIR = BIN_DIR / "brave"
CHROME_DIR = BIN_DIR / "chrome"
EXTENSIONS_DIR = DB_DIR / "extensions"
METAMASK_CHROME_DIR = EXTENSIONS_DIR / "chrome" / "metamask"


async def create_proxy_extension(proxy_host, proxy_port, proxy_user, proxy_pass):
    """Creates a temporary extension to handle proxy authentication."""
    ext_dir = tempfile.mkdtemp(prefix="moss_proxy_")

    manifest = {
        "version": "1.0.0",
        "manifest_version": 3,
        "name": "Moss Proxy Extension",
        "permissions": [
            "proxy",
            "tabs",
            "storage",
            "webRequest",
            "webRequestAuthProvider",
        ],
        "host_permissions": ["<all_urls>"],
        "background": {"service_worker": "background.js"},
    }

    background_js = f"""
        var config = {{
            mode: "fixed_servers",
            rules: {{
                singleProxy: {{
                    scheme: "http",
                    host: "{proxy_host}",
                    port: {int(proxy_port)}
                }},
                bypassList: ["<local>"]
            }}
        }};

        chrome.proxy.settings.set({{value: config, scope: "regular"}}, function() {{}});

        chrome.webRequest.onAuthRequired.addListener(
            function(details) {{
                return {{
                    authCredentials: {{
                        username: "{proxy_user}",
                        password: "{proxy_pass}"
                    }}
                }};
            }},
            {{urls: ["<all_urls>"]}},
            ["blocking"]
        );
    """

    with open(os.path.join(ext_dir, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    with open(os.path.join(ext_dir, "background.js"), "w") as f:
        f.write(background_js)

    return ext_dir


def get_browser_executable(browser_engine: str = "chrome") -> Path | None:
    """Returns the path to the local browser executable based on browser_engine and OS."""
    if browser_engine == "brave":
        if sys.platform == "win32":
            return BRAVE_DIR / "brave.exe"
        elif sys.platform == "darwin":
            return (
                BRAVE_DIR / "Brave Browser.app" / "Contents" / "MacOS" / "Brave Browser"
            )
        else:
            return BRAVE_DIR / "brave"
    elif browser_engine == "chrome":
        if sys.platform == "win32":
            return CHROME_DIR / "chrome.exe"
        elif sys.platform == "darwin":
            return (
                CHROME_DIR
                / "Google Chrome.app"
                / "Contents"
                / "MacOS"
                / "Google Chrome"
            )
        else:
            return CHROME_DIR / "chrome"
    return None


def is_browser_installed(browser_engine: str = "chrome") -> bool:
    """Checks if the local browser binary exists."""
    exe = get_browser_executable(browser_engine)
    return exe is not None and exe.exists()


async def download_browser(browser_engine: str = "brave", progress_callback=None):
    """Downloads and extracts the specified browser to the local bin directory."""
    target_dir = BRAVE_DIR if browser_engine == "brave" else CHROME_DIR
    target_dir.mkdir(parents=True, exist_ok=True)
    BIN_DIR.mkdir(parents=True, exist_ok=True)

    # Simplified download URLs
    # Note: These URLs are versions that match the environment or are portable stablereleases
    urls = {
        "brave": {
            "win32": "https://github.com/brave/brave-browser/releases/download/v1.75.173/brave-v1.75.173-win32-x64.zip",
            "linux": "https://github.com/brave/brave-browser/releases/download/v1.75.173/brave-v1.75.173-linux-amd64.zip",
            "darwin": "https://github.com/brave/brave-browser/releases/download/v1.75.173/brave-v1.75.173-darwin-x64.zip",
        },
        "chrome": {
            #
            "win32": "https://storage.googleapis.com/chrome-for-testing-public/133.0.6943.126/win64/chrome-win64.zip",
            "linux": "https://storage.googleapis.com/chrome-for-testing-public/133.0.6943.126/linux64/chrome-linux64.zip",
            "darwin": "https://storage.googleapis.com/chrome-for-testing-public/133.0.6943.126/mac-x64/chrome-mac-x64.zip",
        },
    }

    browser_urls = urls.get(browser_engine)
    if not browser_urls:
        raise Exception(f"Unsupported browser: {browser_engine}")

    url = browser_urls.get(sys.platform)
    if not url:
        raise Exception(f"Unsupported platform: {sys.platform} for {browser_engine}")

    def _sync_download():
        if progress_callback:
            progress_callback(f"Downloading {browser_engine}...", 0.1)
        response = requests.get(url, stream=True, timeout=60.0)
        response.raise_for_status()

        zip_path = BIN_DIR / f"{browser_engine}_tmp.zip"
        with open(zip_path, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        return zip_path

    try:
        zip_path = await asyncio.to_thread(_sync_download)

        if progress_callback:
            progress_callback("Extracting browser files...", 0.6)

        # Determine extraction strategy based on file extension
        import zipfile

        if url.endswith(".zip"):
            with zipfile.ZipFile(zip_path, "r") as zip_ref:
                zip_ref.extractall(target_dir)
            # Chrome extraction sometimes puts files in a subfolder like 'chrome-win64'
            if browser_engine == "chrome":
                extracted_subdirs = [d for d in target_dir.iterdir() if d.is_dir()]
                if len(extracted_subdirs) == 1:
                    subdir = extracted_subdirs[0]
                    for item in subdir.iterdir():
                        shutil.move(str(item), str(target_dir))
                    subdir.rmdir()
        else:
            # Handle other formats if necessary (pkg, deb, msi are harder to extract portably)
            if progress_callback:
                progress_callback(
                    f"Manual installation required for {browser_engine} on {sys.platform}",
                    0,
                )
            return False

        os.remove(zip_path)

        if sys.platform != "win32":
            exe = get_browser_executable(browser_engine)
            if exe and exe.exists():
                exe.chmod(exe.stat().st_mode | 0o111)

        if progress_callback:
            progress_callback(
                f"{browser_engine.capitalize()} installed successfully!", 1.0
            )
        return True
    except Exception as e:
        if progress_callback:
            progress_callback(f"Error: {str(e)}", 0)
        raise e


EXTENSIONS_DIR = DB_DIR / "extensions"
METAMASK_CHROME_DIR = EXTENSIONS_DIR / "chrome" / "metamask"
METAMASK_FIREFOX_DIR = EXTENSIONS_DIR / "firefox" / "metamask"
METAMASK_ID = "ipkfmedcjidoidhklihaemaelnomcglo"


def is_metamask_installed() -> bool:
    """Checks if both Chrome and Firefox MetaMask extensions are downloaded and extracted."""
    chrome_ok = (
        METAMASK_CHROME_DIR.exists()
        and (METAMASK_CHROME_DIR / "manifest.json").exists()
    )
    firefox_ok = (
        METAMASK_FIREFOX_DIR.exists()
        and (METAMASK_FIREFOX_DIR / "manifest.json").exists()
    )
    return chrome_ok and firefox_ok


async def download_metamask(progress_callback=None):
    """Downloads and extracts MetaMask extension for both Chrome and Firefox."""
    EXTENSIONS_DIR.mkdir(parents=True, exist_ok=True)

    # Versions and URLs
    VERSION = "12.10.1"
    CHROME_URL = f"https://github.com/MetaMask/metamask-extension/releases/download/v{VERSION}/metamask-chrome-{VERSION}.zip"
    FIREFOX_URL = f"https://github.com/MetaMask/metamask-extension/releases/download/v{VERSION}/metamask-firefox-{VERSION}.zip"

    def _sync_download(url, name):
        if progress_callback:
            progress_callback(f"Downloading MetaMask ({name})...", 0.1)
        response = requests.get(url, stream=True, timeout=60.0)
        response.raise_for_status()
        zip_path = EXTENSIONS_DIR / f"metamask_{name}.zip"
        with open(zip_path, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        return zip_path

    async def _process_variant(url, name, target_dir):
        zip_path = await asyncio.to_thread(_sync_download, url, name)

        if progress_callback:
            progress_callback(f"Extracting MetaMask ({name})...", 0.6)
        if target_dir.exists():
            shutil.rmtree(target_dir, ignore_errors=True)
        target_dir.mkdir(parents=True, exist_ok=True)

        with zipfile.ZipFile(zip_path, "r") as zip_ref:
            zip_ref.extractall(target_dir)

        os.remove(zip_path)

    try:
        # Download and extract both
        await _process_variant(CHROME_URL, "chrome", METAMASK_CHROME_DIR)
        await _process_variant(FIREFOX_URL, "firefox", METAMASK_FIREFOX_DIR)

        if progress_callback:
            progress_callback("MetaMask ready for all engines!", 1.0)
        return True
    except Exception as e:
        if progress_callback:
            progress_callback(f"Error: {str(e)}", 0)
        raise e


def ensure_extension_extracted(name: str, target_dir: Path) -> bool:
    """If name.zip exists in root, delete target_dir and extract fresh."""
    zip_path = Path(f"{name}.zip")
    if zip_path.exists():
        try:
            if target_dir.exists():
                shutil.rmtree(target_dir, ignore_errors=True)
            target_dir.mkdir(parents=True, exist_ok=True)
            with zipfile.ZipFile(zip_path, "r") as z:
                z.extractall(target_dir)
            return True
        except Exception as e:
            print(f"Error extracting {name}.zip: {e}")
    return target_dir.exists()
