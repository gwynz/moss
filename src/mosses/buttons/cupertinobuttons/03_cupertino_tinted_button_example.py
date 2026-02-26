import flet as ft

name = "CupertinoTintedButton"


def moss():
    return ft.Column(
        controls=[
            ft.CupertinoTintedButton("CupertinoTintedButton"),
            ft.CupertinoTintedButton("Disabled button", disabled=True),
            ft.CupertinoTintedButton("Button with icon", icon=ft.Icons.ADD),
        ]
    )
