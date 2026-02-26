import flet as ft

name = "OutlinedButton"


def moss():
    return ft.Column(
        controls=[
            ft.OutlinedButton(content="Outlined button"),
            ft.OutlinedButton("Disabled button", disabled=True),
            ft.OutlinedButton("Button with icon", icon=ft.Icons.ADD),
        ],
    )
