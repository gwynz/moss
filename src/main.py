import logging

import flet as ft

from components.app import App
from diagnostics import diagnostics
from models.moss import Moss


logging.basicConfig(level=logging.INFO)


moss = Moss()

if __name__ == "__main__":
    def main(page: ft.Page):
        page.title = "Moss"
        page.window_icon = "logo.png"
        diagnostics.enable_for_page(page)
        page.render_views(lambda: App(moss))

    ft.run(main, assets_dir="assets")
