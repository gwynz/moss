import logging

import flet as ft

from components.app import App
from diagnostics import diagnostics
from models.moss import Moss


logging.basicConfig(level=logging.INFO)


moss = Moss()

if __name__ == "__main__":
    async def main(page: ft.Page):
        page.title = "Moss"
        page.window.icon = "logo.png"

        # Cleanup routine when the window/app is closed
        async def on_disconnect(e):
            from services import browser_engine
            await browser_engine.close_all()

        page.on_disconnect = on_disconnect

        diagnostics.enable_for_page(page)
        page.render_views(lambda: App(moss))

    ft.app(main, assets_dir="assets")
