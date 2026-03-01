import flet as ft

from models.profile_model import ProfileManagerModel


@ft.component
def ProfileCard(profile: dict, model: ProfileManagerModel, on_run, on_stop, on_edit, on_delete):
    name = profile.get("name", "Unnamed")
    proxy_type = profile.get("proxy_type", "")
    proxy_host = profile.get("proxy_host", "")
    proxy_port = profile.get("proxy_port", 0)
    notes = profile.get("notes", "")
    is_running = model.is_running(profile["id"])
    is_starting = model.is_starting(profile["id"])
    ua = profile.get("user_agent", "")
    browser_type = profile.get("browser_type", "camoufox")

    # Status indicator
    status_indicator = ft.ProgressRing(
        width=12, height=12, stroke_width=2
    ) if is_starting else ft.Container(
        width=10,
        height=10,
        border_radius=5,
        bgcolor=ft.Colors.GREEN if is_running else ft.Colors.GREY_600,
        tooltip="Running" if is_running else "Stopped",
    )

    # Proxy badge
    proxy_badge = None
    if proxy_type and proxy_host:
        proxy_text = f"{proxy_type.upper()}://{proxy_host}:{proxy_port}"
        proxy_badge = ft.Container(
            content=ft.Text(proxy_text, size=10, color=ft.Colors.WHITE),
            bgcolor=ft.Colors.GREEN,
            border_radius=4,
            padding=ft.Padding(left=6, top=2, right=6, bottom=2),
        )

    # UA preview
    ua_preview = None
    if ua:
        short_ua = ua[:60] + "..." if len(ua) > 60 else ua
        ua_preview = ft.Text(
            short_ua, size=11, color=ft.Colors.GREY_500, max_lines=1)

    # Notes preview
    notes_preview = None
    if notes:
        short_notes = notes[:80] + "..." if len(notes) > 80 else notes
        notes_preview = ft.Text(
            short_notes, size=11, color=ft.Colors.GREY_500, italic=True, max_lines=1)

    # Action buttons
    run_stop_btn = ft.IconButton(
        icon=ft.Icons.STOP_CIRCLE_OUTLINED if is_running else ft.Icons.PLAY_CIRCLE_OUTLINED,
        icon_color=ft.Colors.RED if is_running else ft.Colors.GREEN,
        tooltip="Stop" if is_running else "Run",
        on_click=lambda _: on_stop(profile) if is_running else on_run(profile),
        icon_size=20,
        disabled=is_starting,
    )

    edit_btn = ft.IconButton(
        icon=ft.Icons.EDIT_OUTLINED,
        tooltip="Edit",
        on_click=lambda _: on_edit(profile),
        icon_size=20,
        disabled=is_running or is_starting,
    )

    delete_btn = ft.IconButton(
        icon=ft.Icons.DELETE_OUTLINE,
        tooltip="Delete",
        icon_color=ft.Colors.RED_400,
        on_click=lambda _: on_delete(profile),
        icon_size=20,
        disabled=is_running or is_starting,
    )

    # Browser badge
    browser_colors = {
        "camoufox": ft.Colors.ORANGE_800,
        "zendriver": ft.Colors.BLUE_GREY_700,
        "pydoll": ft.Colors.YELLOW_900,
        "cloakbrowser": ft.Colors.BLUE_GREY_700,
    }

    browser_badge = ft.Container(
        content=ft.Text(browser_type.upper(), size=9,
                        color=ft.Colors.WHITE, weight=ft.FontWeight.BOLD),
        bgcolor=browser_colors.get(browser_type.lower(), ft.Colors.GREY_600),
        border_radius=4,
        padding=ft.Padding(left=5, top=1, right=5, bottom=1),
    )

    info_widgets: list[ft.Control] = []
    info_widgets.append(ft.Text(name, size=14, weight=ft.FontWeight.W_500))
    info_widgets.append(browser_badge)
    if proxy_badge:
        info_widgets.append(proxy_badge)

    details: list[ft.Control] = []
    if ua_preview:
        details.append(ua_preview)

    wallet_name = profile.get("wallet_name")
    wallet_address = profile.get("wallet_address")
    if wallet_name or wallet_address:
        w_display = f"{wallet_name} - {wallet_address}" if wallet_name and wallet_address else (
            wallet_name or wallet_address)
        details.append(
            ft.Text(w_display, size=11, color=ft.Colors.GREY_500, max_lines=1)
        )

    if notes_preview:
        details.append(notes_preview)

    row_controls: list[ft.Control] = [
        status_indicator,
        ft.Column(
            [
                ft.Row(info_widgets, spacing=8),
                *details,
            ],
            spacing=2,
            expand=True,
        ),
        ft.Row(
            [run_stop_btn, edit_btn, delete_btn],
            spacing=0,
        ),
    ]

    return ft.Container(
        content=ft.Row(
            row_controls,
            vertical_alignment=ft.CrossAxisAlignment.CENTER,
            spacing=12,
        ),
        padding=ft.Padding(left=16, top=8, right=16, bottom=8),
        border=ft.Border(
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
        ),
        border_radius=8,
        margin=ft.Margin(left=0, top=0, right=0, bottom=4),
    )
