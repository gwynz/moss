import asyncio
import socket

import flet as ft

from mosses.proxies.index._proxy_test import test_proxy_tcp


@ft.component
def ProxyTest(proxy_type: str, proxy_host: str, proxy_port: int, proxy_username: str, proxy_password: str):
    status, set_status = ft.use_state("")
    testing, set_testing = ft.use_state(False)

    async def do_test(_):
        if not proxy_host or not proxy_port or not proxy_type:
            set_status("Fill in proxy fields first")
            return

        set_testing(True)
        set_status("Testing...")

        _, msg = await test_proxy_tcp(proxy_type, proxy_host, int(proxy_port))
        set_status(msg)
        set_testing(False)

    status_color = ft.Colors.GREY_500
    if status.startswith("OK"):
        status_color = ft.Colors.GREEN
    elif status.startswith("FAIL"):
        status_color = ft.Colors.RED

    return ft.Row(
        [
            ft.OutlinedButton(
                "Test Proxy",
                icon=ft.Icons.SPEED,
                on_click=do_test,
                disabled=testing,
            ),
            ft.Text(status, size=12,
                    color=status_color) if status else ft.Container(),
        ],
        spacing=12,
        vertical_alignment=ft.CrossAxisAlignment.CENTER,
    )
