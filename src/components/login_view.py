import flet as ft
from typing import cast, Callable, Any
from utils.crypto import initialize_session


@ft.component
def LoginView(needs_setup: bool, on_login_success: Callable[[ft.ControlEvent], Any]):
    password_ref = ft.use_ref()
    error_text, set_error_text = ft.use_state("")

    def on_login(e):
        password_field = cast(ft.TextField, password_ref.current)
        if not password_field or not password_field.value:
            set_error_text("Password is required")
            return

        if initialize_session(password_field.value):
            on_login_success(e)
        else:
            set_error_text("Incorrect password")

    return ft.View(
        route="/login",
        vertical_alignment=ft.MainAxisAlignment.CENTER,
        horizontal_alignment=ft.CrossAxisAlignment.CENTER,
        controls=[
            ft.Card(
                content=ft.Container(
                    content=ft.Column(
                        cast(list[ft.Control], [
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
                                        if needs_setup
                                        else "Enter your password to unlock the application.",
                                        text_align=ft.TextAlign.CENTER,
                                        color=ft.Colors.ON_SURFACE_VARIANT,
                                    ),
                                ],
                                horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                            ),
                            ft.TextField(
                                ref=cast(ft.Ref, password_ref),
                                label="Master Password",
                                password=True,
                                can_reveal_password=True,
                                width=320,
                                on_submit=on_login,
                                autofocus=True,
                            ),
                            ft.Text(
                                error_text,
                                color=ft.Colors.ERROR,
                                size=12,
                                visible=bool(error_text),
                            ),
                            ft.ElevatedButton(
                                "Set Password" if needs_setup else "Unlock",
                                width=320,
                                height=50,
                                on_click=on_login,
                            ),
                            ft.Text(
                                "Note: Password cannot be reset or changed. Loss of password means permanent loss of encrypted data (Seed phrases).",
                                size=11,
                                italic=True,
                                color=ft.Colors.ERROR,
                                text_align=ft.TextAlign.CENTER,
                                width=320,
                            ),
                        ]),
                        horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                        spacing=30,
                    ),
                    padding=40,
                    width=400,
                )
            )
        ],
    )
