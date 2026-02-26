import flet as ft

name = "CupertinoFilledButton"


def moss():
    return ft.Column(
        controls=[
            ft.CupertinoFilledButton("CupertinoFilledButton"),
            ft.CupertinoFilledButton("Disabled button", disabled=True),
            ft.CupertinoFilledButton("Button with icon", icon=ft.Icons.ADD),
        ]
    )
