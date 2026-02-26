import flet as ft

name = "CupertinoButton"


def moss():
    return ft.Column(
        controls=[
            ft.CupertinoButton("CupertinoButton"),
            ft.CupertinoButton("Disabled button", disabled=True),
            ft.CupertinoButton("Button with icon", icon=ft.Icons.ADD),
        ]
    )
