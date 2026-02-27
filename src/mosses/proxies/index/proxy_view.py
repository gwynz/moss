import asyncio
import flet as ft

from models.proxy_model import ProxyManagerModel
from mosses.proxies.index._proxy_form import ProxyForm
from mosses.proxies.index._proxy_list import ProxyList
from mosses.proxies.index._proxy_test import test_proxy_connectivity
from services._db import init_db
from services import _proxy_repo as repo

name = "Proxy Manager"


def moss():
    return ProxyManager()


@ft.component
def ProxyManager():
    model, set_model = ft.use_state(ProxyManagerModel())
    confirm_delete, set_confirm_delete = ft.use_state(None)

    async def startup():
        try:
            await init_db()
            proxies = await repo.list_proxies()
            model.set_proxies(proxies)
        except Exception as e:
            model.error_message = str(e)
        finally:
            model.is_loading = False

    def on_mount():
        asyncio.create_task(startup())
        return None

    ft.use_effect(on_mount, [])

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
        return ft.Container(
            content=ft.Column(
                [
                    ft.ProgressRing(),
                    ft.Text("Loading proxies..."),
                ],
                horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                spacing=16,
            ),
            alignment=ft.Alignment.CENTER,
            expand=True,
        )

    # Delete confirmation dialog
    dialog_actions: list[ft.Control] = [
        ft.TextButton(
            "Cancel", on_click=lambda _: set_confirm_delete(None)),
        ft.FilledButton(
            "Delete",
            on_click=lambda e: asyncio.create_task(on_delete_confirm(e)),
            style=ft.ButtonStyle(bgcolor=ft.Colors.RED),
        ),
    ]
    dialog = ft.AlertDialog(
        modal=True,
        title=ft.Text("Delete Proxy"),
        open=True if confirm_delete else False,
        content=ft.Text(
            f'Delete proxy "{confirm_delete["name"] if confirm_delete else ""}"?'),
        actions=dialog_actions,
    )

    error_banner_actions: list[ft.Control] = [
        ft.TextButton("Dismiss", on_click=lambda _: setattr(
            model, 'error_message', ""))
    ]
    error_banner = ft.Banner(
        open=True if model.error_message else False,
        bgcolor=ft.Colors.ERROR_CONTAINER,
        content=ft.Text(model.error_message),
        actions=error_banner_actions,
    )

    children = []
    if error_banner.open:
        children.append(error_banner)

    if model.form_mode == "list":
        children.append(
            ProxyList(
                model=model,
                on_edit=on_edit,
                on_delete=on_delete_request,
                on_test=lambda p: asyncio.create_task(on_test(p)),
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

    if dialog.open:
        children.append(dialog)

    return ft.Container(
        content=ft.Column(children, expand=True, spacing=8),
        padding=16,
        expand=True,
    )
