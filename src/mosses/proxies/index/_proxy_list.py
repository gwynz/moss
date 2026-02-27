import flet as ft


@ft.component
def ProxyList(model, on_edit, on_delete, on_test):
    def on_search(e):
        model.set_search(e.control.value)

    def proxy_card(proxy):
        test_status = model.test_results.get(proxy["id"], "")

        status_display = ft.Container()
        if test_status:
            is_ok = test_status.startswith("OK")
            color = ft.Colors.GREEN if is_ok else ft.Colors.RED
            status_display = ft.Text(
                test_status, color=color, size=12, italic=True)

        return ft.Card(
            content=ft.Container(
                content=ft.Column([
                    ft.ListTile(
                        leading=ft.Icon(ft.Icons.LANGUAGE),
                        title=ft.Text(
                            proxy["name"], weight=ft.FontWeight.BOLD),
                        subtitle=ft.Text(
                            f"{proxy['proxy_type']}://{proxy['proxy_host']}:{proxy['proxy_port']}"),
                    ),
                    ft.Container(
                        padding=ft.padding.only(
                            left=16, right=16, top=0, bottom=8),
                        content=ft.Column([
                            ft.Text(
                                proxy["notes"], size=12, color=ft.Colors.ON_SURFACE_VARIANT) if proxy["notes"] else ft.Container(),
                            status_display,
                        ], spacing=4)
                    ),
                    ft.Row([
                        ft.TextButton("Test", icon=ft.Icons.PLAY_ARROW,
                                      on_click=lambda _: on_test(proxy)),
                        ft.TextButton("Edit", icon=ft.Icons.EDIT,
                                      on_click=lambda _: on_edit(proxy)),
                        ft.IconButton(
                            ft.Icons.DELETE_OUTLINE, icon_color=ft.Colors.RED, on_click=lambda _: on_delete(proxy)),
                    ], alignment=ft.MainAxisAlignment.END)
                ], spacing=0),
                padding=8
            )
        )

    return ft.Column([
        ft.Row([
            ft.TextField(
                hint_text="Search proxies...",
                prefix_icon=ft.Icons.SEARCH,
                expand=True,
                on_change=on_search,
                value=model.search_query,
            ),
            ft.FilledButton(
                "Add Proxy",
                icon=ft.Icons.ADD,
                on_click=lambda _: model.start_add(),
            ),
        ]),
        ft.Divider(),
        ft.GridView(
            controls=[proxy_card(p) for p in model.filtered_proxies],
            expand=True,
            runs_count=3,
            max_extent=400,
            child_aspect_ratio=1.8,
            spacing=10,
            run_spacing=10,
        ) if model.filtered_proxies else ft.Container(
            content=ft.Text("No proxies found", size=16),
            alignment=ft.Alignment.CENTER,
            padding=40
        )
    ], expand=True)
