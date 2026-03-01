import asyncio
import flet as ft

from models.proxy_model import ProxyManagerModel
from mosses.proxies.index._proxy_form import ProxyForm
from mosses.proxies.index._proxy_list import ProxyList
from mosses.proxies.index._proxy_test import test_proxy_connectivity
from services.db import init_db
from services import proxy_repo as repo

name = "Proxy Manager"


def moss():
    return ProxyManager()


@ft.component
def ProxyManager():
    model, set_model = ft.use_state(ProxyManagerModel())
    confirm_delete, set_confirm_delete = ft.use_state(None)
    import_dialog_open, set_import_dialog_open = ft.use_state(False)
    is_importing, set_is_importing = ft.use_state(False)
    import_field_ref = ft.use_ref()

    async def startup():
        try:
            await init_db()
            proxies = await repo.list_proxies()
            model.set_proxies(proxies)
        except Exception as e:
            model.error_message = str(e)
        finally:
            model.is_loading = False

    ft.on_mounted(lambda: asyncio.create_task(startup()))

    async def refresh_proxies():
        proxies = await repo.list_proxies()
        model.set_proxies(proxies)

    async def on_test(proxy):
        p_id = proxy["id"]
        model.set_test_result(p_id, "Testing...")
        success, msg = await test_proxy_connectivity(proxy)
        model.set_test_result(p_id, msg)

    def on_edit(proxy):
        model.start_edit(proxy)

    def on_delete_request(proxy):
        set_confirm_delete(proxy)

    async def on_delete_confirm(e):
        proxy = confirm_delete
        set_confirm_delete(None)
        if proxy:
            await repo.delete_proxy(proxy["id"])
            await refresh_proxies()

    async def on_import_submit(_):
        set_is_importing(True)
        try:
            import_data = import_field_ref.current.value if import_field_ref.current else ""
            lines = import_data.strip().split("\n")
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                parts = line.split(":")
                if len(parts) == 4:
                    host, port, user, pwd = parts

                    # Check if proxy already exists
                    existing = await repo.find_proxy_by_host_port(host, port)

                    if existing:
                        # Update credentials if they differ
                        if existing["proxy_username"] != user or existing["proxy_password"] != pwd:
                            await repo.update_proxy(
                                existing["id"],
                                proxy_username=user,
                                proxy_password=pwd
                            )
                    else:
                        # Create new proxy
                        await repo.create_proxy(
                            name=host,
                            proxy_type="HTTP",
                            proxy_host=host,
                            proxy_port=port,
                            proxy_username=user,
                            proxy_password=pwd
                        )
        finally:
            set_is_importing(False)
            set_import_dialog_open(False)
            if import_field_ref.current:
                import_field_ref.current.value = ""
            await refresh_proxies()

    async def on_save(form_data):
        try:
            if model.form_mode == "add":
                name = form_data.pop("name", None) or "Unnamed"
                await repo.create_proxy(name, **form_data)
            elif model.form_mode == "edit" and model.editing_proxy_id:
                await repo.update_proxy(model.editing_proxy_id, **form_data)
            model.back_to_list()
            await refresh_proxies()
        except Exception as e:
            model.error_message = f"Save failed: {e}"

    # --- Render ---
    if model.is_loading:
        loading_controls: list[ft.Control] = [
            ft.ProgressRing(),
            ft.Text("Loading proxies..."),
        ]
        return ft.Container(
            content=ft.Column(
                controls=loading_controls,
                horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                spacing=16,
            ),
            alignment=ft.Alignment.CENTER,
            expand=True,
        )

    # Delete confirmation dialog
    dialog = ft.AlertDialog(
        key="delete_dialog",
        modal=True,
        title=ft.Text("Delete Proxy"),
        open=True if confirm_delete else False,
        content=ft.Text(
            f'Delete proxy "{confirm_delete["name"] if confirm_delete else ""}"?'),
        actions=[
            ft.TextButton(
                "Cancel", on_click=lambda _: set_confirm_delete(None)),
            ft.FilledButton(
                "Delete",
                on_click=lambda e: asyncio.create_task(on_delete_confirm(e)),
                style=ft.ButtonStyle(bgcolor=ft.Colors.RED),
            ),
        ],
    )

    error_banner = ft.Banner(
        open=True if model.error_message else False,
        bgcolor=ft.Colors.ERROR_CONTAINER,
        content=ft.Text(model.error_message),
        actions=[
            ft.TextButton("Dismiss", on_click=lambda _: setattr(
                model, 'error_message', ""))
        ],
    )

    # Import dialog
    import_dialog = ft.AlertDialog(
        key="import_dialog",
        modal=True,
        open=import_dialog_open,
        title=ft.Text("Import Proxies"),
        content=ft.Column(
            controls=[
                ft.ProgressBar(visible=is_importing, color=ft.Colors.GREEN),
                ft.Text(
                    "Paste proxies in host:port:user:pass format (one per line):", size=12),
                ft.TextField(
                    ref=import_field_ref,
                    multiline=True,
                    min_lines=10,
                    max_lines=15,
                    text_size=12,
                    hint_text="host:port:user:pass",
                    expand=True,
                    read_only=is_importing,
                )
            ],
            tight=True,
            width=500,
        ),
        actions=[
            ft.TextButton(
                "Cancel",
                on_click=lambda _: set_import_dialog_open(False),
                disabled=is_importing
            ),
            ft.FilledButton(
                content=ft.Row([
                    ft.ProgressRing(width=16, height=16, stroke_width=2,
                                    color=ft.Colors.WHITE) if is_importing else ft.Icon(ft.Icons.DOWNLOAD),
                    ft.Text("Importing..." if is_importing else "Import"),
                ], tight=True),
                on_click=lambda e: asyncio.create_task(
                    on_import_submit(e)),
                disabled=is_importing
            )
        ],
    )

    children: list[ft.Control] = []
    if error_banner.open:
        children.append(error_banner)

    if model.form_mode == "list":
        children.append(
            ProxyList(
                model=model,
                on_edit=on_edit,
                on_delete=on_delete_request,
                on_test=lambda p: asyncio.create_task(on_test(p)),
                on_import_click=lambda: set_import_dialog_open(True),
            )
        )
    else:
        children.append(
            ProxyForm(
                proxy=model.editing_proxy,
                is_edit=(model.form_mode == "edit"),
                on_save=lambda data: asyncio.create_task(on_save(data)),
                on_cancel=model.back_to_list,
            )
        )

    # Add both dialogs to the end of the list to keep their positions stable
    children.append(dialog)
    children.append(import_dialog)

    return ft.Container(
        content=ft.Column(children, expand=True, spacing=8),
        padding=16,
        expand=True,
    )
