import flet as ft

from components.app_bar import AppBar
from components.diagnostics_view import DiagnosticsView
from components.moss_view import MossView
from contexts.route import RouteContext, RouteContextValue
from contexts.theme import ThemeContext, ThemeContextValue
from models.app_model import AppModel
from models.moss import Moss
from utils.crypto import initialize_session


@ft.component
def App(moss: Moss) -> ft.View:
    app, _ = ft.use_state(AppModel(route=ft.context.page.route))

    password_ref = ft.use_ref()

    def on_login(e):
        if not password_ref.current.value:
            return
        if initialize_session(password_ref.current.value):
            app.is_unlocked = True
            app.needs_setup = False
            ft.context.page.update()
        else:
            password_ref.current.error_text = "Incorrect password"
            ft.context.page.update()

    # subscribe to page events as soon as possible
    ft.context.page.on_route_change = app.route_change
    ft.context.page.on_view_pop = app.view_popped

    # stable callbacks (don’t change identity each render)
    toggle_mode = ft.use_callback(
        lambda: app.toggle_theme(), dependencies=[app.theme_mode]
    )
    set_theme_color = ft.use_callback(
        lambda color: app.set_theme_color(color), dependencies=[app.theme_color]
    )

    # memoize the provided value so its identity changes only when mode changes
    theme_value = ft.use_memo(
        lambda: ThemeContextValue(
            mode=app.theme_mode,
            seed_color=app.theme_color,
            toggle_mode=toggle_mode,
            set_seed_color=set_theme_color,
        ),
        dependencies=[app.theme_mode, app.theme_color,
                      toggle_mode, set_theme_color],
    )

    navigate_callback = ft.use_callback(
        lambda new_route: app.navigate(new_route), dependencies=[app.route]
    )

    route_value = ft.use_memo(
        lambda: RouteContextValue(
            route=app.route,
            navigate=navigate_callback,
        ),
        dependencies=[app.route],
    )

    def on_mounted():
        print("Page size:", ft.context.page.width, ft.context.page.height)
        ft.context.page.fonts = {
            "Roboto Mono": "RobotoMono-VariableFont_wght.ttf",
            "RobotoSlab": "RobotoSlab[wght].ttf",
        }

    ft.on_mounted(on_mounted)

    def update_theme():
        print("Theme mode changed to:", app.theme_mode)
        print("Theme color changed to:", app.theme_color)
        ft.context.page.theme_mode = app.theme_mode
        ft.context.page.theme = ft.context.page.dark_theme = ft.Theme(
            color_scheme_seed=app.theme_color
        )

    ft.on_updated(update_theme, [app.theme_mode, app.theme_color])

    if not app.is_unlocked:
        return ft.View(
            route="/login",
            vertical_alignment=ft.MainAxisAlignment.CENTER,
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                ft.Card(
                    content=ft.Container(
                        content=ft.Column(
                            [
                                ft.Icon(
                                    ft.Icons.LOCK_PERSON_OUTLINED,
                                    size=80,
                                    color=ft.Colors.PRIMARY,
                                ),
                                ft.Column(
                                    [
                                        ft.Text(
                                            "Master Password Required",
                                            size=24,
                                            weight=ft.FontWeight.BOLD,
                                        ),
                                        ft.Text(
                                            "Set a master password to encrypt your sensitive data. Don't lose it!"
                                            if app.needs_setup
                                            else "Enter your password to unlock the application.",
                                            text_align=ft.TextAlign.CENTER,
                                            color=ft.Colors.ON_SURFACE_VARIANT,
                                        ),
                                    ],
                                    horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                                ),
                                ft.TextField(
                                    ref=password_ref,
                                    label="Master Password",
                                    password=True,
                                    can_reveal_password=True,
                                    width=320,
                                    on_submit=on_login,
                                    autofocus=True,
                                ),
                                ft.ElevatedButton(
                                    "Set Password" if app.needs_setup else "Unlock",
                                    width=320,
                                    height=50,
                                    on_click=on_login,
                                ),
                            ],
                            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                            spacing=30,
                        ),
                        padding=40,
                        width=400,
                    )
                )
            ],
        )

    return RouteContext(
        route_value,
        lambda: ThemeContext(
            theme_value,
            lambda: ft.View(
                route="/",
                appbar=AppBar(),
                controls=[
                    DiagnosticsView()
                    if app.route == "/__diag"
                    else MossView(moss)
                ],
            ),
        ),
    )
