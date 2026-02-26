import random

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

LANGUAGES = ["en-US", "en-GB", "de-DE", "fr-FR", "es-ES", "pt-BR", "ja-JP", "zh-CN", "ko-KR", "ru-RU"]

SCREEN_RESOLUTIONS = [
    (1920, 1080),
    (2560, 1440),
    (1366, 768),
    (1536, 864),
    (1440, 900),
    (1680, 1050),
    (3840, 2160),
    (1280, 720),
    (1600, 900),
    (2560, 1080),
]

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

WEBGL_CONFIGS = [
    ("Google Inc. (NVIDIA)", "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (NVIDIA)", "ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (NVIDIA)", "ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 SUPER Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (AMD)", "ANGLE (AMD, AMD Radeon RX 6700 XT Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (AMD)", "ANGLE (AMD, AMD Radeon RX 580 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (Intel)", "ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (Intel)", "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)"),
    ("Google Inc. (Apple)", "ANGLE (Apple, Apple M1, OpenGL 4.1)"),
    ("Google Inc. (Apple)", "ANGLE (Apple, Apple M2, OpenGL 4.1)"),
]

HARDWARE_CONCURRENCIES = [2, 4, 6, 8, 12, 16]
DEVICE_MEMORIES = [2, 4, 8, 16, 32]
COLOR_DEPTHS = [24, 30, 32]
PIXEL_RATIOS = [1.0, 1.25, 1.5, 2.0]

WEBRTC_POLICIES = ["default", "disable_non_proxied_udp", "disable"]


def generate_random_fingerprint() -> dict:
    ua = random.choice(USER_AGENTS)

    if "Windows" in ua:
        platform = "Win32"
    elif "Macintosh" in ua or "Mac OS" in ua:
        platform = "MacIntel"
    elif "Linux" in ua:
        platform = "Linux x86_64"
    else:
        platform = random.choice(PLATFORMS)

    lang = random.choice(LANGUAGES)
    lang_base = lang.split("-")[0]
    languages = f"{lang},{lang_base}"

    width, height = random.choice(SCREEN_RESOLUTIONS)
    webgl_vendor, webgl_renderer = random.choice(WEBGL_CONFIGS)

    return {
        "user_agent": ua,
        "platform": platform,
        "language": lang,
        "languages": languages,
        "screen_width": width,
        "screen_height": height,
        "color_depth": random.choice(COLOR_DEPTHS),
        "pixel_ratio": random.choice(PIXEL_RATIOS),
        "hardware_concurrency": random.choice(HARDWARE_CONCURRENCIES),
        "device_memory": random.choice(DEVICE_MEMORIES),
        "timezone": random.choice(TIMEZONES),
        "webgl_vendor": webgl_vendor,
        "webgl_renderer": webgl_renderer,
        "canvas_noise": round(random.uniform(0.01, 0.05), 4),
        "audio_noise": round(random.uniform(0.001, 0.01), 4),
        "webrtc_policy": "default",
    }
