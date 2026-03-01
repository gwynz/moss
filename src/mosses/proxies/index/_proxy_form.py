import flet as ft


@ft.component
def ProxyForm(proxy, is_edit, on_save, on_cancel):
    name_ref = ft.Ref[ft.TextField]()
    notes_ref = ft.Ref[ft.TextField]()
    type_ref = ft.Ref[ft.Dropdown]()
    host_ref = ft.Ref[ft.TextField]()
    port_ref = ft.Ref[ft.TextField]()
    user_ref = ft.Ref[ft.TextField]()
    pass_ref = ft.Ref[ft.TextField]()

    def on_save_click(_):
        page = ft.context.page
        if not host_ref.current or not host_ref.current.value:
            sb = ft.SnackBar(ft.Text("Proxy Host is required!"))
            page.overlay.append(sb)
            sb.open = True
            page.update()
            return

        if not port_ref.current or not port_ref.current.value:
            sb = ft.SnackBar(ft.Text("Proxy Port is required!"))
            page.overlay.append(sb)
            sb.open = True
            page.update()
            return

        on_save({
            "name": name_ref.current.value if name_ref.current else "",
            "notes": notes_ref.current.value if notes_ref.current else "",
            "proxy_type": type_ref.current.value,
            "proxy_host": host_ref.current.value,
            "proxy_port": int(port_ref.current.value or 0),
            "proxy_username": user_ref.current.value if user_ref.current else "",
            "proxy_password": pass_ref.current.value if pass_ref.current else "",
        })

    return ft.Container(
        content=ft.Column([
            ft.Row([
                ft.IconButton(
                    icon=ft.Icons.ARROW_BACK,
                    tooltip="Back to list",
                    on_click=lambda _: on_cancel()
                ),
                ft.Text(
                    "Edit Proxy" if is_edit else "New Proxy",
                    size=20,
                    weight=ft.FontWeight.BOLD,
                    expand=True,
                ),
                ft.FilledButton(
                    "Save",
                    icon=ft.Icons.SAVE,
                    on_click=on_save_click
                ),
            ], vertical_alignment=ft.CrossAxisAlignment.CENTER),
            ft.Divider(),
            ft.Column([
                ft.Row([
                    ft.Dropdown(
                        ref=type_ref,
                        label="Type",
                        value=proxy.get("proxy_type", "HTTP"),
                        options=[
                            ft.dropdown.Option("HTTP"),
                            ft.dropdown.Option("SOCKS4"),
                            ft.dropdown.Option("SOCKS5"),
                        ],
                        width=120
                    ),
                    ft.TextField(ref=host_ref, label="Host", value=proxy.get(
                        "proxy_host", ""), expand=True),
                    ft.TextField(ref=port_ref, label="Port", value=str(
                        proxy.get("proxy_port", "8080")), width=100),
                ]),
                ft.Row([
                    ft.TextField(ref=user_ref, label="Username", value=proxy.get(
                        "proxy_username", ""), expand=True),
                    ft.TextField(ref=pass_ref, label="Password", value=proxy.get(
                        "proxy_password", ""), password=True, can_reveal_password=True, expand=True),
                ]),
                ft.TextField(ref=name_ref, label="Name (Optional)",
                             value=proxy.get("name", ""), expand=True),
                ft.TextField(ref=notes_ref, label="Notes (Optional)", value=proxy.get(
                    "notes", ""), multiline=True, min_lines=3),
            ], spacing=16, scroll=ft.ScrollMode.AUTO, expand=True),
        ], spacing=20, expand=True),
        padding=20,
    )
