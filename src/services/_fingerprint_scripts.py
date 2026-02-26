def get_navigator_script(profile: dict) -> str:
    return f"""
(() => {{
    const props = {{
        userAgent: {_js_str(profile.get('user_agent', ''))},
        platform: {_js_str(profile.get('platform', 'Win32'))},
        language: {_js_str(profile.get('language', 'en-US'))},
        languages: {_js_str(profile.get('languages', 'en-US,en'))}.split(','),
        hardwareConcurrency: {profile.get('hardware_concurrency', 4)},
        deviceMemory: {profile.get('device_memory', 8)},
    }};
    for (const [key, value] of Object.entries(props)) {{
        if (value !== '' && value !== null) {{
            try {{
                Object.defineProperty(navigator, key, {{
                    get: () => value,
                    configurable: true,
                }});
            }} catch(e) {{}}
        }}
    }}
}})();
"""


def get_screen_script(profile: dict) -> str:
    w = profile.get("screen_width", 1920)
    h = profile.get("screen_height", 1080)
    cd = profile.get("color_depth", 24)
    pr = profile.get("pixel_ratio", 1.0)
    return f"""
(() => {{
    const screenProps = {{
        width: {w}, height: {h},
        availWidth: {w}, availHeight: {h - 40},
        colorDepth: {cd}, pixelDepth: {cd},
    }};
    for (const [key, value] of Object.entries(screenProps)) {{
        try {{
            Object.defineProperty(screen, key, {{
                get: () => value,
                configurable: true,
            }});
        }} catch(e) {{}}
    }}
    try {{
        Object.defineProperty(window, 'devicePixelRatio', {{
            get: () => {pr},
            configurable: true,
        }});
    }} catch(e) {{}}
}})();
"""


def get_webgl_script(profile: dict) -> str:
    vendor = profile.get("webgl_vendor", "")
    renderer = profile.get("webgl_renderer", "")
    if not vendor and not renderer:
        return ""
    return f"""
(() => {{
    const getParameterOrig = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function(param) {{
        const ext = this.getExtension('WEBGL_debug_renderer_info');
        if (ext) {{
            if (param === ext.UNMASKED_VENDOR_WEBGL) return {_js_str(vendor)};
            if (param === ext.UNMASKED_RENDERER_WEBGL) return {_js_str(renderer)};
        }}
        return getParameterOrig.call(this, param);
    }};
    if (typeof WebGL2RenderingContext !== 'undefined') {{
        const getParam2Orig = WebGL2RenderingContext.prototype.getParameter;
        WebGL2RenderingContext.prototype.getParameter = function(param) {{
            const ext = this.getExtension('WEBGL_debug_renderer_info');
            if (ext) {{
                if (param === ext.UNMASKED_VENDOR_WEBGL) return {_js_str(vendor)};
                if (param === ext.UNMASKED_RENDERER_WEBGL) return {_js_str(renderer)};
            }}
            return getParam2Orig.call(this, param);
        }};
    }}
}})();
"""


def get_canvas_noise_script(profile: dict) -> str:
    noise = profile.get("canvas_noise", 0.0)
    if not noise:
        return ""
    return f"""
(() => {{
    const origToDataURL = HTMLCanvasElement.prototype.toDataURL;
    const origToBlob = HTMLCanvasElement.prototype.toBlob;
    const origGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    const noiseAmt = {noise};

    function addNoise(imageData) {{
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {{
            const noise = Math.floor((Math.random() - 0.5) * noiseAmt * 255);
            data[i] = Math.max(0, Math.min(255, data[i] + noise));
            data[i+1] = Math.max(0, Math.min(255, data[i+1] + noise));
            data[i+2] = Math.max(0, Math.min(255, data[i+2] + noise));
        }}
        return imageData;
    }}

    CanvasRenderingContext2D.prototype.getImageData = function(...args) {{
        const imageData = origGetImageData.apply(this, args);
        return addNoise(imageData);
    }};

    HTMLCanvasElement.prototype.toDataURL = function(...args) {{
        try {{
            const ctx = this.getContext('2d');
            if (ctx) {{
                const imageData = origGetImageData.call(ctx, 0, 0, this.width, this.height);
                addNoise(imageData);
                ctx.putImageData(imageData, 0, 0);
            }}
        }} catch(e) {{}}
        return origToDataURL.apply(this, args);
    }};

    HTMLCanvasElement.prototype.toBlob = function(cb, ...args) {{
        try {{
            const ctx = this.getContext('2d');
            if (ctx) {{
                const imageData = origGetImageData.call(ctx, 0, 0, this.width, this.height);
                addNoise(imageData);
                ctx.putImageData(imageData, 0, 0);
            }}
        }} catch(e) {{}}
        return origToBlob.call(this, cb, ...args);
    }};
}})();
"""


def get_audio_noise_script(profile: dict) -> str:
    noise = profile.get("audio_noise", 0.0)
    if not noise:
        return ""
    return f"""
(() => {{
    const origGetFloatFrequencyData = AnalyserNode.prototype.getFloatFrequencyData;
    const noiseAmt = {noise};
    AnalyserNode.prototype.getFloatFrequencyData = function(array) {{
        origGetFloatFrequencyData.call(this, array);
        for (let i = 0; i < array.length; i++) {{
            array[i] += (Math.random() - 0.5) * noiseAmt * 100;
        }}
    }};
}})();
"""


def get_timezone_script(profile: dict) -> str:
    tz = profile.get("timezone", "")
    if not tz:
        return ""
    return f"""
(() => {{
    const tz = {_js_str(tz)};
    const origResolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;
    Intl.DateTimeFormat.prototype.resolvedOptions = function() {{
        const result = origResolvedOptions.call(this);
        result.timeZone = tz;
        return result;
    }};
}})();
"""


def get_geolocation_script(profile: dict) -> str:
    lat = profile.get("geo_latitude")
    lng = profile.get("geo_longitude")
    if lat is None or lng is None:
        return ""
    acc = profile.get("geo_accuracy", 100.0)
    return f"""
(() => {{
    const fakePosition = {{
        coords: {{
            latitude: {lat},
            longitude: {lng},
            accuracy: {acc},
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
        }},
        timestamp: Date.now(),
    }};
    navigator.geolocation.getCurrentPosition = (success) => {{
        success(fakePosition);
    }};
    navigator.geolocation.watchPosition = (success) => {{
        success(fakePosition);
        return 0;
    }};
}})();
"""


def get_media_devices_script(profile: dict) -> str:
    devices_json = profile.get("media_devices", "")
    if not devices_json:
        return ""
    return f"""
(() => {{
    const fakeDevices = {devices_json};
    if (navigator.mediaDevices && fakeDevices.length > 0) {{
        navigator.mediaDevices.enumerateDevices = async () => fakeDevices;
    }}
}})();
"""


def get_webrtc_script(profile: dict) -> str:
    policy = profile.get("webrtc_policy", "default")
    if policy == "disable":
        return """
(() => {
    window.RTCPeerConnection = undefined;
    window.webkitRTCPeerConnection = undefined;
    window.mozRTCPeerConnection = undefined;
})();
"""
    return ""


def get_all_scripts(profile: dict) -> str:
    scripts = [
        get_navigator_script(profile),
        get_screen_script(profile),
        get_webgl_script(profile),
        get_canvas_noise_script(profile),
        get_audio_noise_script(profile),
        get_timezone_script(profile),
        get_geolocation_script(profile),
        get_media_devices_script(profile),
        get_webrtc_script(profile),
    ]
    return "\n".join(s for s in scripts if s)


def _js_str(value: str) -> str:
    escaped = str(value).replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
    return f"'{escaped}'"
