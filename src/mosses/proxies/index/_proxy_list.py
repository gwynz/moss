import flet as ft
import pyperclip
import random


@ft.component
def ProxyList(model, on_edit, on_delete, on_test, on_import_click):
    # Use local state for the input field text
    search_val, set_search_val = ft.use_state(model.search_query)

    def on_search_submit(_=None):
        model.set_search(search_val)

    def on_search_change(e):
        set_search_val(e.control.value)

    def on_random_pick(e):
        if not model.proxies:
            e.page.snack_bar = ft.SnackBar(
                ft.Text("No proxies available to pick from"))
            e.page.snack_bar.open = True
            e.page.update()
            return

        proxy = random.choice(model.proxies)
        proxy_str = f"{proxy['proxy_host']}:{proxy['proxy_port']}:{proxy['proxy_username']}:{proxy['proxy_password']}"
        pyperclip.copy(proxy_str)
        e.page.snack_bar = ft.SnackBar(
            ft.Text(f"Randomly picked and copied: {proxy['name']}"))
        e.page.snack_bar.open = True
        e.page.update()

    def proxy_row(proxy):
        test_status = model.test_results.get(proxy["id"], "")

        # Status circle
        is_ok = test_status.startswith("OK") if test_status else None
        status_color = ft.Colors.GREEN if is_ok else (
            ft.Colors.RED if is_ok is False else ft.Colors.GREY_600)

        status_indicator = ft.Container(
            width=10,
            height=10,
            border_radius=5,
            bgcolor=status_color,
            tooltip=test_status if test_status else "Not tested",
        )

        def on_copy(e):
            proxy_str = f"{proxy['proxy_host']}:{proxy['proxy_port']}:{proxy['proxy_username']}:{proxy['proxy_password']}"
            pyperclip.copy(proxy_str)
            e.page.snack_bar = ft.SnackBar(ft.Text(f"Copied: {proxy_str}"))
            e.page.snack_bar.open = True
            e.page.update()

        # Type badge
        type_badge = ft.Container(
            content=ft.Text(proxy["proxy_type"].upper(), size=9,
                            color=ft.Colors.WHITE, weight=ft.FontWeight.BOLD),
            bgcolor=ft.Colors.BLUE_GREY_700,
            border_radius=4,
            padding=ft.Padding(left=5, top=1, right=5, bottom=1),
        )

        return ft.Container(
            content=ft.Row([
                status_indicator,
                ft.Column([
                    ft.Row([
                        ft.Text(proxy["name"], size=14,
                                weight=ft.FontWeight.W_500),
                        type_badge,
                    ], spacing=8),
                    ft.Text(
                        f"{proxy['proxy_host']}:{proxy['proxy_port']}", size=11, color=ft.Colors.GREY_500),
                    ft.Text(proxy["notes"], size=11, color=ft.Colors.GREY_500,
                            italic=True, max_lines=1) if proxy["notes"] else ft.Container(),
                ], expand=True, spacing=2),
                ft.Row([
                    ft.IconButton(ft.Icons.PLAY_ARROW_OUTLINED, tooltip="Test",
                                  icon_color=ft.Colors.GREEN, on_click=lambda _: on_test(proxy), icon_size=20),
                    ft.IconButton(ft.Icons.EDIT_OUTLINED, tooltip="Edit",
                                  on_click=lambda _: on_edit(proxy), icon_size=20),
                    ft.IconButton(ft.Icons.COPY_ALL_OUTLINED,
                                  tooltip="Copy", on_click=on_copy, icon_size=20),
                    ft.IconButton(ft.Icons.DELETE_OUTLINE, tooltip="Delete",
                                  icon_color=ft.Colors.RED_400, on_click=lambda _: on_delete(proxy), icon_size=20),
                ], spacing=0)
            ], vertical_alignment=ft.CrossAxisAlignment.CENTER, spacing=12),
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

    toolbar = ft.Row(
        controls=[
            ft.Text("Proxies", size=20, weight=ft.FontWeight.BOLD, expand=True),
            ft.TextField(
                value=search_val,
                hint_text="Search proxies...",
                width=250,
                height=40,
                text_size=13,
                content_padding=ft.Padding(left=8, top=0, right=8, bottom=4),
                on_change=on_search_change,
                on_submit=on_search_submit,
            ),
            ft.IconButton(
                icon=ft.Icons.SEARCH,
                on_click=on_search_submit,
                tooltip="Search",
            ),
            ft.TextButton(
                "Import",
                icon=ft.Icons.DOWNLOAD,
                on_click=lambda _: on_import_click(),
            ),
            ft.TextButton(
                "Random Pick",
                icon=ft.Icons.SHUFFLE,
                on_click=lambda e: on_random_pick(e),
            ),
            ft.FilledButton(
                "Add Proxy",
                icon=ft.Icons.ADD,
                on_click=lambda _: model.start_add(),
            ),
        ],
        alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
        vertical_alignment=ft.CrossAxisAlignment.CENTER,
    )

    pagination_controls = ft.Row([
        ft.IconButton(
            icon=ft.Icons.NAVIGATE_BEFORE,
            on_click=lambda _: model.set_page(model.page - 1),
            disabled=model.page <= 1,
        ),
        ft.Text(f"Page {model.page} of {model.total_pages}", size=14),
        ft.IconButton(
            icon=ft.Icons.NAVIGATE_NEXT,
            on_click=lambda _: model.set_page(model.page + 1),
            disabled=model.page >= model.total_pages,
        ),
    ], alignment=ft.MainAxisAlignment.CENTER)

    return ft.Column([
        toolbar,
        ft.ListView(
            controls=[proxy_row(p) for p in model.paged_proxies],
            expand=True,
            spacing=4,
        ) if model.paged_proxies else ft.Container(
            content=ft.Text("No proxies found", size=16),
            alignment=ft.Alignment.CENTER,
            padding=40
        ),
        pagination_controls if model.total_pages > 1 else ft.Container()
    ], expand=True, spacing=12)
