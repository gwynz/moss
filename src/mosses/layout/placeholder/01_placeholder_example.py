import flet as ft

name = "Placeholder moss"


def moss():
    return ft.Placeholder(
        expand=True,
        color=ft.Colors.random(),
    )  # random material color
