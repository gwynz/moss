import random
from browserforge.fingerprints import FingerprintGenerator

# Keep some constants for UI/Selection if needed
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
]

PLATFORMS = ["Win32", "MacIntel", "Linux x86_64"]

LANGUAGES = ["en-US", "en-GB", "de-DE", "fr-FR",
             "es-ES", "pt-BR", "ja-JP", "zh-CN", "ko-KR", "ru-RU"]

TIMEZONES = [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Asia/Tokyo",
    "Asia/Shanghai",
    "Australia/Sydney",
]

WEBRTC_POLICIES = ["default", "disable_non_proxied_udp", "disable"]


HARDWARE_CONCURRENCIES = [2, 4, 8, 12, 16, 24, 32]
DEVICE_MEMORIES = [4, 8, 16, 32, 64]
COLOR_DEPTHS = [24, 30]
PIXEL_RATIOS = [1.0, 1.25, 1.5, 2.0, 2.5, 3.0]

WEBGL_CONFIGS = [
    ("Google Inc. (NVIDIA)",
     "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (NVIDIA)",
     "ANGLE (NVIDIA, NVIDIA GeForce RTX 4070 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (Intel)",
     "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (Intel)",
     "ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (ATI Technologies Inc.)",
     "ANGLE (ATI Technologies Inc., AMD Radeon RX 6700 XT Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Apple Inc.", "Apple M1"),
    ("Apple Inc.", "Apple M2"),
    ("Apple Inc.", "Apple M3"),
]


def generate_random_fingerprint() -> dict:
    # Use browserforge to generate a realistic fingerprint
    # Restrict to desktop browsers (chrome, edge, firefox, safari)
    fg = FingerprintGenerator(
        browser=["chrome", "edge", "firefox", "safari"],
        os=["windows", "macos", "linux"],
    )
    fp = fg.generate()

    # browserforge returns a Fingerprint object with nested attributes
    navigator = fp.navigator
    screen = fp.screen
    video_card = fp.videoCard

    # Extract values, mapping to our flat dictionary structure
    ua = navigator.userAgent
    platform = navigator.platform
    lang = navigator.language
    # languages is typically a list in browserforge
    languages = ",".join(getattr(navigator, "languages", [lang]))

    width = screen.width
    height = screen.height
    color_depth = screen.colorDepth
    # devicePixelRatio is found in the screen object
    pixel_ratio = getattr(screen, "devicePixelRatio", 1.0)

    hardware_concurrency = navigator.hardwareConcurrency
    device_memory = navigator.deviceMemory

    # videoCard can be None in some fingerprints
    webgl_vendor = getattr(
        video_card, "vendor", "Google Inc. (NVIDIA)") if video_card else "Google Inc. (NVIDIA)"
    webgl_renderer = getattr(
        video_card, "renderer", "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)") if video_card else "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)"

    # Extract additional fields from browserforge if available
    fonts = ",".join(getattr(fp, "fonts", []))
    media_devices = getattr(fp, "multimediaDevices", {})
    # Convert media devices to a simplified string representation if needed,
    # but for now we'll just store a placeholder or joined string if schema expects it.
    # Looking at _db.py, media_devices is a TEXT field.
    media_devices_str = str(media_devices)

    return {
        "user_agent": ua,
        "platform": platform,
        "language": lang,
        "languages": languages,
        "screen_width": 1280,
        "screen_height": 720,
        "color_depth": color_depth,
        "pixel_ratio": pixel_ratio,
        "hardware_concurrency": hardware_concurrency,
        "device_memory": device_memory,
        # browserforge doesn't provide TZ easily in the same way
        "timezone": random.choice(TIMEZONES),
        "webgl_vendor": webgl_vendor,
        "webgl_renderer": webgl_renderer,
        "canvas_noise": round(random.uniform(0.01, 0.05), 4),
        "audio_noise": round(random.uniform(0.001, 0.01), 4),
        "webrtc_policy": "default",
        "fonts": fonts,
        "media_devices": media_devices_str,
        "geo_latitude": random.uniform(-90, 90),
        "geo_longitude": random.uniform(-180, 180),
        "geo_accuracy": random.uniform(0, 100),
    }
