from pathlib import Path
import shutil
import zipfile

DB_DIR = Path.home() / ".moss"

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
