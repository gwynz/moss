import flet as ft


from services._fingerprint_defaults import (
    USER_AGENTS, PLATFORMS, LANGUAGES,
    TIMEZONES, WEBGL_CONFIGS, HARDWARE_CONCURRENCIES, DEVICE_MEMORIES,
    COLOR_DEPTHS, PIXEL_RATIOS, WEBRTC_POLICIES, generate_random_fingerprint,
)
from mosses.profiles.index._proxy_test import ProxyTest


@ft.component
def ProfileForm(profile: dict, is_edit: bool, on_save, on_cancel):
    # Local form state — initialize from profile or random defaults
    def make_initial():
        if is_edit and profile:
            return dict(profile)
        defaults = generate_random_fingerprint()
        defaults["name"] = ""
        defaults["notes"] = ""
        defaults["proxy_type"] = "http"
        defaults["proxy_host"] = ""
        defaults["proxy_port"] = 0
        defaults["proxy_username"] = ""
        defaults["proxy_password"] = ""
        defaults["fonts"] = ""
        defaults["geo_latitude"] = None
        defaults["geo_longitude"] = None
        defaults["geo_accuracy"] = 100.0
        defaults["media_devices"] = ""
        defaults["extensions_path"] = ""
        defaults["startup_url"] = "about:blank"
        defaults["cookies"] = ""
        defaults["geoip"] = True
        return defaults

    form_data, set_form_data = ft.use_state(make_initial())
    active_tab, set_active_tab = ft.use_state(0)

    def update_field(key, value):
        new_data = dict(form_data)
        new_data[key] = value
        set_form_data(new_data)

    def randomize(_):
        current_name = form_data.get("name", "")
        current_notes = form_data.get("notes", "")
        new_data = generate_random_fingerprint()
        new_data["name"] = current_name
        new_data["notes"] = current_notes
        # Preserve proxy/advanced settings
        for key in ("proxy_type", "proxy_host", "proxy_port", "proxy_username",
                    "proxy_password", "fonts", "media_devices", "extensions_path",
                    "startup_url", "cookies", "geoip"):
            new_data[key] = form_data.get(key, "")
        set_form_data(new_data)

    def do_save(_):
        if not form_data.get("name", "").strip():
            return
        on_save(form_data)

    # --- Helper to build labeled text fields ---
    def text_field(label, key, **kwargs):
        return ft.TextField(
            label=label,
            value=str(form_data.get(key, "") or ""),
            on_change=lambda e: update_field(key, e.control.value),
            text_size=13,
            **kwargs,
        )

    def number_field(label, key, **kwargs):
        val = form_data.get(key)
        return ft.TextField(
            label=label,
            value=str(val) if val is not None else "",
            on_change=lambda e: update_field(key, _parse_num(
                e.control.value, type(val) if val is not None else int)),
            text_size=13,
            keyboard_type=ft.KeyboardType.NUMBER,
            **kwargs,
        )

    def dropdown_field(label, key, options):
        current = str(form_data.get(key, ""))
        dd_options = [ft.DropdownOption(key=str(o)) for o in options]
        option_keys = {str(o) for o in options}
        if current and current not in option_keys:
            dd_options.insert(0, ft.DropdownOption(key=current))
        return ft.Dropdown(
            label=label,
            value=current,
            options=dd_options,
            on_select=lambda e: update_field(key, e.control.value),
            text_size=13,
        )

    def tab_content(controls: list[ft.Control]) -> ft.Control:
        return ft.Container(
            content=ft.Column(controls, spacing=12, scroll=ft.ScrollMode.AUTO),
            padding=16,
        )

    # === Tab 1: Profile ===
    profile_controls: list[ft.Control] = [
        text_field("Profile Name *", "name"),
        text_field("Notes", "notes", multiline=True, min_lines=2, max_lines=4),
    ]

    # === Tab 2: Browser ===
    browser_controls: list[ft.Control] = [
        dropdown_field("User Agent", "user_agent", USER_AGENTS),
        dropdown_field("Platform", "platform", PLATFORMS),
        dropdown_field("Language", "language", LANGUAGES),
        dropdown_field("Timezone", "timezone", TIMEZONES),
    ]

    # === Tab 3: Display ===
    display_controls: list[ft.Control] = [
        number_field("Screen Width", "screen_width"),
        number_field("Screen Height", "screen_height"),
        dropdown_field("Color Depth", "color_depth", COLOR_DEPTHS),
        dropdown_field("Pixel Ratio", "pixel_ratio", PIXEL_RATIOS),
    ]

    # === Tab 4: Hardware ===
    hardware_controls: list[ft.Control] = [
        dropdown_field("CPU Cores", "hardware_concurrency",
                       HARDWARE_CONCURRENCIES),
        dropdown_field("Device Memory (GB)", "device_memory", DEVICE_MEMORIES),
        ft.Divider(),
        ft.Text("WebGL", size=14, weight=ft.FontWeight.W_500),
        text_field("WebGL Vendor", "webgl_vendor"),
        text_field("WebGL Renderer", "webgl_renderer"),
        ft.Divider(),
        ft.Text("Canvas Fingerprint", size=14, weight=ft.FontWeight.W_500),
        ft.Slider(
            min=0, max=0.1,
            value=float(form_data.get("canvas_noise", 0)),
            divisions=100,
            label="{value}",
            on_change=lambda e: update_field(
                "canvas_noise", round(e.control.value or 0.0, 4)),
        ),
        ft.Text(f"Canvas noise: {form_data.get('canvas_noise', 0)}",
                size=12, color=ft.Colors.GREY_500),
        ft.Divider(),
        ft.Text("Audio Fingerprint", size=14, weight=ft.FontWeight.W_500),
        ft.Slider(
            min=0, max=0.05,
            value=float(form_data.get("audio_noise", 0)),
            divisions=100,
            label="{value}",
            on_change=lambda e: update_field(
                "audio_noise", round(e.control.value or 0.0, 4)),
        ),
        ft.Text(f"Audio noise: {form_data.get('audio_noise', 0)}",
                size=12, color=ft.Colors.GREY_500),
    ]

    # === Tab 5: Network ===
    network_controls: list[ft.Control] = [
        ft.Text("Proxy", size=14, weight=ft.FontWeight.W_500),
        dropdown_field("Proxy Type", "proxy_type", ["http", "socks5"]),
        text_field("Proxy Host", "proxy_host"),
        number_field("Proxy Port", "proxy_port"),
        text_field("Proxy Username", "proxy_username"),
        text_field("Proxy Password", "proxy_password",
                   password=True, can_reveal_password=True),
        ProxyTest(
            proxy_type=form_data.get("proxy_type", ""),
            proxy_host=form_data.get("proxy_host", ""),
            proxy_port=form_data.get("proxy_port", 0),
            proxy_username=form_data.get("proxy_username", ""),
            proxy_password=form_data.get("proxy_password", ""),
        ),
    ]

    # === Tab 7: Advanced ===
    advanced_controls: list[ft.Control] = [
        text_field("Startup URL", "startup_url"),
        ft.Divider(),
        ft.Text("Geolocation", size=14, weight=ft.FontWeight.W_500),
        ft.Checkbox(
            label="Enable GeoIP",
            value=bool(form_data.get("geoip", True)),
            on_change=lambda e: update_field("geoip", e.control.value),
        ),
        number_field("Latitude", "geo_latitude",
                     disabled=bool(form_data.get("geoip", True))),
        number_field("Longitude", "geo_longitude",
                     disabled=bool(form_data.get("geoip", True))),
        number_field("Accuracy (meters)", "geo_accuracy",
                     disabled=bool(form_data.get("geoip", True))),
        ft.Divider(),
        ft.Text("Extensions", size=14, weight=ft.FontWeight.W_500),
        text_field("Extensions Path (unpacked)", "extensions_path"),
        ft.Divider(),
        ft.Text("Cookies", size=14, weight=ft.FontWeight.W_500),
        text_field("Cookies JSON (import/export)", "cookies",
                   multiline=True, min_lines=4, max_lines=10),
    ]

    # --- Toolbar ---
    toolbar = ft.Row(
        [
            ft.IconButton(
                icon=ft.Icons.ARROW_BACK,
                tooltip="Back to list",
                on_click=lambda _: on_cancel(),
            ),
            ft.Text(
                "Edit Profile" if is_edit else "New Profile",
                size=20,
                weight=ft.FontWeight.BOLD,
                expand=True,
            ),
            ft.OutlinedButton(
                "Randomize",
                icon=ft.Icons.SHUFFLE,
                on_click=randomize,
            ),
            ft.FilledButton(
                "Save",
                icon=ft.Icons.SAVE,
                on_click=do_save,
                disabled=not form_data.get("name", "").strip(),
            ),
        ],
        vertical_alignment=ft.CrossAxisAlignment.CENTER,
    )

    tab_headers: list[ft.Control] = [
        ft.Tab(label="Profile", icon=ft.Icons.PERSON),
        ft.Tab(label="Browser", icon=ft.Icons.WEB_ASSET),
        ft.Tab(label="Display", icon=ft.Icons.MONITOR),
        ft.Tab(label="Hardware", icon=ft.Icons.MEMORY),
        ft.Tab(label="Network", icon=ft.Icons.WIFI),
        ft.Tab(label="Advanced", icon=ft.Icons.TUNE),
    ]

    tab_views: list[ft.Control] = [
        tab_content(profile_controls),
        tab_content(browser_controls),
        tab_content(display_controls),
        tab_content(hardware_controls),
        tab_content(network_controls),
        tab_content(advanced_controls),
    ]

    return ft.Column(
        [
            toolbar,
            ft.Tabs(
                content=ft.Column(
                    [
                        ft.TabBar(tabs=tab_headers),
                        ft.TabBarView(controls=tab_views, expand=True),
                    ],
                    expand=True,
                ),
                length=6,
                animation_duration=200,
                expand=True,
                selected_index=active_tab,
                on_change=lambda e: set_active_tab(e.control.selected_index),
            ),
        ],
        spacing=8,
        expand=True,
    )


def _parse_num(value: str, num_type=int):
    if not value or not value.strip():
        return None
    try:
        return num_type(value)
    except (ValueError, TypeError):
        return None
