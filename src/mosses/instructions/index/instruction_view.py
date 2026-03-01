import flet as ft


def moss():
    return InstructionView()


@ft.component
def InstructionView():
    def status_badge(text, is_enabled):
        return ft.Container(
            content=ft.Text(
                text, size=11, weight=ft.FontWeight.BOLD, color=ft.Colors.WHITE),
            bgcolor=ft.Colors.GREEN_700 if is_enabled else ft.Colors.RED_700,
            padding=ft.padding.symmetric(horizontal=8, vertical=2),
            border_radius=12,
        )

    return ft.Container(
        content=ft.Column(
            [
                ft.Text("Browser Engines Comparison",
                        size=24, weight=ft.FontWeight.BOLD),
                ft.Text(
                    "Moss supports multiple browser engines to suit different automation and privacy needs.", size=14),
                ft.Divider(),
                ft.DataTable(
                    heading_row_height=50,
                    data_row_min_height=40,
                    column_spacing=20,
                    columns=[
                        ft.DataColumn(
                            ft.Text("Tool", weight=ft.FontWeight.BOLD)),
                        ft.DataColumn(
                            ft.Text("Core Engine", weight=ft.FontWeight.BOLD)),
                        ft.DataColumn(
                            ft.Text("Core Tool", weight=ft.FontWeight.BOLD)),
                        ft.DataColumn(
                            ft.Text("Extensions", weight=ft.FontWeight.BOLD)),
                        ft.DataColumn(
                            ft.Text("Proxy", weight=ft.FontWeight.BOLD)),
                        ft.DataColumn(ft.Text("Download Engine",
                                      weight=ft.FontWeight.BOLD)),
                    ],
                    rows=[
                        ft.DataRow(cells=[
                            ft.DataCell(
                                ft.Text("PyDoll", weight=ft.FontWeight.W_600)),
                            ft.DataCell(ft.Text("Chromium")),
                            ft.DataCell(ft.Text("No")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Button(
                                "Brave", icon=ft.Icons.DOWNLOAD, disabled=True)),
                        ]),
                        ft.DataRow(cells=[
                            ft.DataCell(
                                ft.Text("Camoufox", weight=ft.FontWeight.W_600)),
                            ft.DataCell(ft.Text("Firefox")),
                            ft.DataCell(ft.Text("Based Playwright")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Button(
                                "Firefox", icon=ft.Icons.DOWNLOAD, disabled=True)),
                        ]),
                        ft.DataRow(cells=[
                            ft.DataCell(
                                ft.Text("ZenDriver", weight=ft.FontWeight.W_600)),
                            ft.DataCell(ft.Text("Chromium")),
                            ft.DataCell(ft.Text("Based on nodriver")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Text("Manual")),
                            ft.DataCell(ft.Button(
                                "Brave", icon=ft.Icons.DOWNLOAD, disabled=True)),
                        ]),
                        ft.DataRow(cells=[
                            ft.DataCell(
                                ft.Text("Playwright", weight=ft.FontWeight.W_600)),
                            ft.DataCell(ft.Text("Chromium")),
                            ft.DataCell(ft.Text("No")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Button(
                                "Brave", icon=ft.Icons.DOWNLOAD, disabled=True)),
                        ]),
                        ft.DataRow(cells=[
                            ft.DataCell(
                                ft.Text("NoDriver", weight=ft.FontWeight.W_600)),
                            ft.DataCell(ft.Text("Chromium")),
                            ft.DataCell(ft.Text("No")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Text("Auto")),
                            ft.DataCell(ft.Button(
                                "Brave", icon=ft.Icons.DOWNLOAD, disabled=True)),
                        ]),
                        ft.DataRow(cells=[
                            ft.DataCell(
                                ft.Text("Cloak", weight=ft.FontWeight.W_600, color=ft.Colors.GREY_500)),
                            ft.DataCell(ft.Text("Chromium")),
                            ft.DataCell(ft.Text("Plan")),
                            ft.DataCell(ft.Text("Coming Soon")),
                            ft.DataCell(ft.Text("Coming Soon")),
                            ft.DataCell(ft.Button(
                                "Coming Soon", icon=ft.Icons.DOWNLOAD, disabled=True)),
                        ]),
                    ]
                ),
                ft.Divider(),
                ft.Text("Usage Notes:", size=16, weight=ft.FontWeight.BOLD),
                ft.Text(
                    "• Camoufox: Best for high-fidelity fingerprinting. It automatically downloads its own patched Firefox binary.", size=13),
                ft.Text(
                    "• ZenDriver: Powerful automation engine. It handles its own browser download, but requires manual setup for now.", size=13),
                ft.Text(
                    "• NoDriver: Uses an undetected CDPSession approach. Supports integrated proxies and uses system Chrome.", size=13),
                ft.Text(
                    "• PyDoll: Lightweight Chrome-based engine using system or manually provided binaries.", size=13),
            ],
            spacing=10,
            scroll=ft.ScrollMode.ADAPTIVE,
            expand=True,
        ),
        padding=20,
        expand=True,
    )
