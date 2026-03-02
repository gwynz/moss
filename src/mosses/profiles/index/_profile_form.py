import flet as ft
import asyncio


from contexts.route import RouteContext
from mosses.profiles.index._profile_proxy import ProxyTest
from services.engine_utils import (
    is_browser_installed,
    download_browser,
    is_metamask_installed,
    download_metamask,
)
from utils.crypto import encrypt_string, decrypt_string
from services.proxy_repo import pick_random_proxy, list_proxies
from services.wallet_repo import list_wallets
from services.fingerprint_defaults import (
    USER_AGENTS,
    PLATFORMS,
    LANGUAGES,
    TIMEZONES,
    HARDWARE_CONCURRENCIES,
    DEVICE_MEMORIES,
    COLOR_DEPTHS,
    PIXEL_RATIOS,
    generate_random_fingerprint,
)


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
        defaults["ext_metamask"] = False
        defaults["tool_type"] = "pydoll"
        defaults["browser_engine"] = "chrome"
        defaults["extensions_path"] = ""
        defaults["startup_url"] = "about:blank"
        defaults["cookies"] = "[]"
        defaults["geoip"] = True
        defaults["wallet_id"] = ""
        defaults["metamask_password"] = ""
        return defaults

    route_ctx = ft.use_context(RouteContext)
    form_data, set_form_data = ft.use_state(make_initial())
    active_tab, set_active_tab = ft.use_state(0)
    wallets, set_wallets = ft.use_state([])
    proxies, set_proxies = ft.use_state([])

    # Fetch wallets & proxies
    async def fetch_initial_data():
        w_task = list_wallets()
        p_task = list_proxies()
        wlist, plist = await asyncio.gather(w_task, p_task)
        set_wallets(wlist)
        set_proxies(plist)

    ft.on_mounted(fetch_initial_data)

    # Browser download state
    is_browser_ready, set_is_browser_ready = ft.use_state(
        is_browser_installed(form_data.get("browser_engine", "chrome"))
    )
    download_progress, set_download_progress = ft.use_state(0.0)
    download_status, set_download_status = ft.use_state("")
    is_downloading, set_is_downloading = ft.use_state(False)

    # MetaMask state
    is_mm_ready, set_is_mm_ready = ft.use_state(is_metamask_installed())
    mm_status, set_mm_status = ft.use_state("")

    def update_field(key, value):
        new_data = dict(form_data)
        new_data[key] = value
        set_form_data(new_data)
        if key in ["tool_type", "browser_engine"]:
            b_type = new_data.get("tool_type")
            b_name = new_data.get("browser_engine", "chrome")
            if b_type in ["pydoll", "zendriver"]:
                set_is_browser_ready(is_browser_installed(b_name))
            else:
                set_is_browser_ready(True)

    def on_quick_add(e):
        val = e.control.value.strip()
        if not val:
            return
        parts = val.split(":")
        new_data = dict(form_data)
        if len(parts) >= 2:
            new_data["proxy_host"] = parts[0]
            try:
                new_data["proxy_port"] = int(parts[1])
            except (ValueError, TypeError):
                pass
        if len(parts) >= 4:
            new_data["proxy_username"] = parts[2]
            new_data["proxy_password"] = parts[3]
        set_form_data(new_data)

    async def on_random_proxy(_):
        proxy = await pick_random_proxy()
        if not proxy:
            return
        new_data = dict(form_data)
        new_data["proxy_type"] = proxy.get("proxy_type", "http")
        new_data["proxy_host"] = proxy.get("proxy_host", "")
        new_data["proxy_port"] = proxy.get("proxy_port", 0)
        new_data["proxy_username"] = proxy.get("proxy_username", "")
        new_data["proxy_password"] = proxy.get("proxy_password", "")
        set_form_data(new_data)

    def on_proxy_select(e):
        proxy_id = e.control.value
        if not proxy_id:
            return
        selected = next((p for p in proxies if str(p["id"]) == proxy_id), None)
        if selected:
            new_data = dict(form_data)
            new_data["proxy_type"] = selected.get("proxy_type", "http")
            new_data["proxy_host"] = selected.get("proxy_host", "")
            new_data["proxy_port"] = selected.get("proxy_port", 0)
            new_data["proxy_username"] = selected.get("proxy_username", "")
            new_data["proxy_password"] = selected.get("proxy_password", "")
            set_form_data(new_data)

    def randomize(_):
        current_name = form_data.get("name", "")
        current_notes = form_data.get("notes", "")
        new_data = generate_random_fingerprint()
        new_data["name"] = current_name
        new_data["notes"] = current_notes
        # Preserve proxy/advanced settings
        for key in (
            "proxy_type",
            "proxy_host",
            "proxy_port",
            "proxy_username",
            "proxy_password",
            "fonts",
            "media_devices",
            "ext_metamask",
            "extensions_path",
            "startup_url",
            "cookies",
            "geoip",
        ):
            new_data[key] = form_data.get(key, "")
        set_form_data(new_data)

    async def on_download_click(_):
        if is_downloading:
            return

        set_is_downloading(True)
        set_download_status("Starting...")

        def progress(msg, val):
            set_download_status(msg)
            set_download_progress(val)

        try:
            await download_browser(form_data.get("browser_engine", "chrome"), progress)
            set_is_browser_ready(True)
        except Exception as ex:
            set_download_status(f"Error: {str(ex)}")
        finally:
            set_is_downloading(False)

    async def on_download_mm(_):
        if is_downloading:
            return
        set_is_downloading(True)
        set_mm_status("Downloading...")
        try:
            await download_metamask(lambda msg, _: set_mm_status(msg))
            set_is_mm_ready(is_metamask_installed())
        except Exception as ex:
            set_mm_status(f"Error: {ex}")
        finally:
            set_is_downloading(False)

    def do_save(_):
        page = ft.context.page
        if not form_data.get("name", "").strip():
            sb = ft.SnackBar(ft.Text("Profile name is required!"))
            page.overlay.append(sb)
            sb.open = True
            page.update()
            return
        on_save(form_data)

    # --- Helper to build labeled text fields ---
    def text_field(label: str, key: str, **kwargs):
        return ft.TextField(
            label=label,
            value=str(form_data.get(key, "") or ""),
            on_change=lambda e: update_field(key, e.control.value),
            text_size=13,
            **kwargs,
        )

    def number_field(label: str, key: str, **kwargs):
        val = form_data.get(key)
        return ft.TextField(
            label=label,
            value=str(val) if val is not None else "",
            on_change=lambda e: update_field(
                key, _parse_num(e.control.value, type(val) if val is not None else int)
            ),
            text_size=13,
            keyboard_type=ft.KeyboardType.NUMBER,
            **kwargs,
        )

    def dropdown_field(label, key, options, **kwargs):
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
            **kwargs,
        )

    def tab_content(controls: list[ft.Control]) -> ft.Control:
        return ft.Container(
            content=ft.Column(controls, spacing=12, scroll=ft.ScrollMode.AUTO),
            padding=16,
            expand=True,
        )

    # === Tab 1: Profile ===
    download_section = ft.Container()
    cur_b_name = form_data.get("browser_engine", "chrome")
    display_b_name = cur_b_name.capitalize()

    if not is_browser_ready and form_data.get("tool_type") in [
        "pydoll",
        "zendriver",
    ]:
        download_section = ft.Container(
            content=ft.Column(
                [
                    ft.Row(
                        [
                            ft.Icon(
                                ft.Icons.WARNING_ROUNDED, color=ft.Colors.ORANGE_700
                            ),
                            ft.Text(
                                f"{display_b_name} Browser Required",
                                color=ft.Colors.ORANGE_700,
                                weight=ft.FontWeight.BOLD,
                            ),
                        ]
                    ),
                    ft.Text(
                        f"A local {display_b_name} browser is required for Pydoll/Zendriver.",
                        size=12,
                    ),
                    ft.Row(
                        [
                            ft.FilledButton(
                                f"Download {display_b_name}",
                                icon=ft.Icons.DOWNLOAD,
                                on_click=on_download_click,
                                disabled=is_downloading,
                            ),
                            ft.Text(download_status, size=11, italic=True),
                        ],
                        alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
                    ),
                    (
                        ft.ProgressBar(value=download_progress, width=400)
                        if is_downloading or download_progress > 0
                        else ft.Container()
                    ),
                ],
                spacing=8,
            ),
            padding=12,
            bgcolor=ft.Colors.with_opacity(0.1, ft.Colors.ORANGE_100),
            border_radius=8,
            border=ft.Border(bottom=ft.BorderSide(1, ft.Colors.ORANGE_200)),
        )
    elif is_browser_ready and form_data.get("tool_type") in ["pydoll", "zendriver"]:
        download_section = ft.Container(
            content=ft.Row(
                [
                    ft.Icon(ft.Icons.CHECK_CIRCLE, color=ft.Colors.GREEN_700, size=20),
                    ft.Text(
                        f"{display_b_name} browser ready",
                        color=ft.Colors.GREEN_700,
                        size=12,
                    ),
                    ft.FilledButton("Download", icon=ft.Icons.DOWNLOAD, disabled=True),
                ],
                spacing=10,
            ),
            padding=8,
            bgcolor=ft.Colors.with_opacity(0.1, ft.Colors.GREEN_100),
            border_radius=8,
        )

    profile_controls: list[ft.Control] = [
        text_field("Profile Name *", "name"),
        ft.Row(
            [
                dropdown_field(
                    "Browser Engine",
                    "tool_type",
                    ["camoufox", "zendriver", "pydoll"],
                    expand=True,
                ),
                dropdown_field(
                    "Browser",
                    "browser_engine",
                    ["chrome", "brave"],
                    visible=form_data.get("tool_type") in ["pydoll", "zendriver"],
                    expand=True,
                ),
            ]
        ),
        download_section,
        ft.Row(
            [
                ft.Dropdown(
                    label="Wallet",
                    value=str(form_data.get("wallet_id", "") or ""),
                    options=[
                        ft.DropdownOption(
                            key=str(w["id"]),
                            text=f"{w['public_address']} - {w["name"]} {w['note']}",
                        )
                        for w in wallets
                    ],
                    on_select=lambda e: update_field("wallet_id", e.control.value),
                    text_size=13,
                    editable=True,
                    expand=True,
                ),
                ft.TextButton(
                    "Manage Wallet",
                    icon=ft.Icons.OPEN_IN_NEW,
                    on_click=lambda _: route_ctx.navigate("/wallets/index"),
                ),
            ]
        ),
        text_field("Notes", "notes", multiline=True, min_lines=2, max_lines=4),
    ]

    # === Tab 2: Browser ===
    browser_controls: list[ft.Control] = [
        ft.Divider(),
        ft.Text("Software", size=14, weight=ft.FontWeight.W_500),
        ft.Container(height=4),
        dropdown_field("User Agent", "user_agent", USER_AGENTS, disabled=True),
        dropdown_field("Platform", "platform", PLATFORMS, disabled=True),
        dropdown_field("Language", "language", LANGUAGES, disabled=True),
        dropdown_field("Timezone", "timezone", TIMEZONES, disabled=True),
        ft.Divider(),
        ft.Text("Geolocation", size=14, weight=ft.FontWeight.W_500),
        ft.Checkbox(
            label="Enable GeoIP",
            value=bool(form_data.get("geoip", True)),
            disabled=True,
            on_change=lambda e: update_field("geoip", e.control.value),
        ),
        number_field("Latitude", "geo_latitude", disabled=True),
        number_field("Longitude", "geo_longitude", disabled=True),
        number_field("Accuracy (meters)", "geo_accuracy", disabled=True),
        ft.Divider(),
        ft.Text("Cookies", size=14, weight=ft.FontWeight.W_500),
        text_field(
            "Cookies JSON (import/export)",
            "cookies",
            multiline=True,
            min_lines=4,
            max_lines=10,
            disabled=True,
        ),
    ]

    # === Tab 3: Display ===
    display_controls: list[ft.Control] = [
        number_field("Screen Width", "screen_width", disabled=True),
        number_field("Screen Height", "screen_height", disabled=True),
        dropdown_field("Color Depth", "color_depth", COLOR_DEPTHS, disabled=True),
        dropdown_field("Pixel Ratio", "pixel_ratio", PIXEL_RATIOS, disabled=True),
    ]

    # === Tab 4: Hardware ===
    hardware_controls: list[ft.Control] = [
        dropdown_field(
            "CPU Cores", "hardware_concurrency", HARDWARE_CONCURRENCIES, disabled=True
        ),
        dropdown_field(
            "Device Memory (GB)", "device_memory", DEVICE_MEMORIES, disabled=True
        ),
        ft.Divider(),
        ft.Text("WebGL", size=14, weight=ft.FontWeight.W_500),
        text_field("WebGL Vendor", "webgl_vendor", disabled=True),
        text_field("WebGL Renderer", "webgl_renderer", disabled=True),
        ft.Divider(),
        ft.Text("Canvas Fingerprint", size=14, weight=ft.FontWeight.W_500),
        ft.Slider(
            min=0,
            max=0.1,
            value=float(form_data.get("canvas_noise", 0)),
            divisions=100,
            label="{value}",
            disabled=True,
            on_change=lambda e: update_field(
                "canvas_noise", round(e.control.value or 0.0, 4)
            ),
        ),
        ft.Text(
            f"Canvas noise: {form_data.get('canvas_noise', 0)}",
            size=12,
            color=ft.Colors.GREY_500,
        ),
        ft.Divider(),
        ft.Text("Audio Fingerprint", size=14, weight=ft.FontWeight.W_500),
        ft.Slider(
            min=0,
            max=0.05,
            value=float(form_data.get("audio_noise", 0)),
            divisions=100,
            label="{value}",
            disabled=True,
            on_change=lambda e: update_field(
                "audio_noise", round(e.control.value or 0.0, 4)
            ),
        ),
        ft.Text(
            f"Audio noise: {form_data.get('audio_noise', 0)}",
            size=12,
            color=ft.Colors.GREY_500,
        ),
    ]

    # === Tab 5: Network ===
    # Find if current form host/port matches a saved proxy to keep dropdown selected
    current_proxy_id = next(
        (
            str(p["id"])
            for p in proxies
            if p.get("proxy_host") == form_data.get("proxy_host")
            and str(p.get("proxy_port")) == str(form_data.get("proxy_port"))
        ),
        None,
    )

    network_controls: list[ft.Control] = [
        ft.Row(
            [
                ft.Dropdown(
                    label="Select Proxy",
                    options=[
                        ft.DropdownOption(
                            key=str(p["id"]),
                            text=(
                                f"{p['name']} ({p.get('proxy_host')}:{p.get('proxy_port')})"
                                if p.get("name")
                                else f"{p.get('proxy_host')}:{p.get('proxy_port')}"
                            ),
                        )
                        for p in proxies
                    ],
                    on_select=on_proxy_select,
                    value=current_proxy_id,
                    text_size=13,
                    expand=True,
                ),
                ft.TextButton(
                    "Random Pick",
                    icon=ft.Icons.SHUFFLE,
                    on_click=on_random_proxy,
                ),
                ft.TextButton(
                    "Manage Proxy",
                    icon=ft.Icons.OPEN_IN_NEW,
                    on_click=lambda _: route_ctx.navigate("/proxies/index"),
                ),
            ]
        ),
        ft.Divider(),
        ft.TextField(
            label="Shortcut (host:port:user:pass)",
            on_change=on_quick_add,
            value=(
                f"{form_data.get('proxy_host', '')}:{form_data.get('proxy_port', 0)}:{form_data.get('proxy_username', '')}:{form_data.get('proxy_password', '')}"
                if form_data.get("proxy_host", "")
                and form_data.get("proxy_port", 0)
                and form_data.get("proxy_username", "")
                and form_data.get("proxy_password", "")
                else ""
            ),
            text_size=13,
            hint_text="example.com:8080:username:password",
            expand=True,
        ),
        ft.Divider(),
        dropdown_field("Proxy Type", "proxy_type", ["http", "socks5"]),
        text_field("Proxy Host", "proxy_host"),
        number_field("Proxy Port", "proxy_port"),
        text_field("Proxy Username", "proxy_username"),
        text_field(
            "Proxy Password", "proxy_password", password=True, can_reveal_password=True
        ),
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
        ft.Text("Standard Extensions", size=14, weight=ft.FontWeight.W_500),
        ft.Row(
            [
                ft.Checkbox(
                    label="MetaMask",
                    value=bool(form_data.get("ext_metamask", False)),
                    on_change=lambda e: update_field("ext_metamask", e.control.value),
                ),
                ft.FilledButton(
                    "Download Extension" if not is_mm_ready else "Extension Ready",
                    icon=(
                        ft.Icons.DOWNLOAD if not is_mm_ready else ft.Icons.CHECK_CIRCLE
                    ),
                    on_click=on_download_mm,
                    disabled=is_mm_ready or is_downloading,
                    visible=bool(form_data.get("ext_metamask", False)),
                    height=35,
                ),
                (
                    ft.Text(mm_status, size=11, italic=True, color=ft.Colors.GREY_500)
                    if mm_status
                    else ft.Container()
                ),
            ],
            spacing=10,
            vertical_alignment=ft.CrossAxisAlignment.CENTER,
        ),
        ft.TextField(
            label="MetaMask Password (for automation)",
            value=decrypt_string(form_data.get("metamask_password", "")) or "Password123!",
            password=True,
            can_reveal_password=True,
            text_size=13,
            visible=bool(form_data.get("ext_metamask", False)),
            on_change=lambda e: update_field("metamask_password", encrypt_string(e.control.value)),
        ),
        ft.Text(
            "Encrypted on save. Defaults to Password123! if empty.",
            size=11,
            italic=True,
            color=ft.Colors.GREY_500,
            visible=bool(form_data.get("ext_metamask", False)),
        ),
        ft.Divider(),
        ft.Text("Custom Extensions", size=14, weight=ft.FontWeight.W_500),
        text_field("Extensions Path (unpacked)", "extensions_path"),
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
            # ft.OutlinedButton(
            #     "Randomize",
            #     icon=ft.Icons.SHUFFLE,
            #     on_click=randomize,
            # ),
            ft.FilledButton(
                "Save",
                icon=ft.Icons.SAVE,
                on_click=do_save,
                disabled=not form_data.get("name", "").strip() or not is_browser_ready,
            ),
        ],
        vertical_alignment=ft.CrossAxisAlignment.CENTER,
    )

    tab_headers: list[ft.Tab] = [
        ft.Tab(label="Profile", icon=ft.Icons.PERSON),
    ]
    tab_views: list[ft.Control] = [
        tab_content(profile_controls),
    ]

    if is_edit:
        tab_headers.append(ft.Tab(label="Browser", icon=ft.Icons.WEB_ASSET))
        tab_views.append(tab_content(browser_controls))
        tab_headers.append(ft.Tab(label="Display", icon=ft.Icons.MONITOR))
        tab_views.append(tab_content(display_controls))
        tab_headers.append(ft.Tab(label="Hardware", icon=ft.Icons.MEMORY))
        tab_views.append(tab_content(hardware_controls))

    tab_headers.extend(
        [
            ft.Tab(label="Network", icon=ft.Icons.WIFI),
            ft.Tab(label="Advanced", icon=ft.Icons.TUNE),
        ]
    )
    tab_views.extend(
        [
            tab_content(network_controls),
            tab_content(advanced_controls),
        ]
    )

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
                length=len(tab_headers),
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
