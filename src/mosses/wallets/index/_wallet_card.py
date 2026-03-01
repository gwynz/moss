import flet as ft
import pyperclip
from models.wallet_model import WalletManagerModel
from utils.crypto import decrypt_string


@ft.component
def WalletCard(wallet: dict, is_revealed: bool, on_edit, on_delete, on_toggle_reveal):
    # Memoize decryption, but depend on is_revealed so it updates when toggled
    decrypted_seed = ft.use_memo(
        lambda: decrypt_string(wallet["seed"]) if is_revealed else "",
        [is_revealed]
    )

    def copy_address(e):
        pyperclip.copy(wallet["public_address"])

    def copy_seed(e):
        if is_revealed:
            pyperclip.copy(decrypted_seed)

    # Badge for seed type
    seed_badge = ft.Container(
        content=ft.Text(wallet["seed_type"].upper(), size=9,
                        color=ft.Colors.WHITE, weight=ft.FontWeight.BOLD),
        bgcolor=ft.Colors.BLUE_GREY_700,
        border_radius=4,
        padding=ft.Padding(left=5, top=1, right=5, bottom=1),
    )

    # Address and notes subtext
    details = []
    short_address = f"{wallet['public_address'][:10]}...{wallet['public_address'][-8:]}"
    details.append(ft.Row([
        ft.Text(short_address, size=11, color=ft.Colors.GREY_500,
                font_family="monospace"),
        ft.IconButton(ft.Icons.COPY, icon_size=12, tooltip="Copy Address",
                      on_click=copy_address, height=20, padding=0),
    ], spacing=4))

    if wallet.get("note"):
        details.append(ft.Text(
            wallet["note"], size=11, color=ft.Colors.GREY_500, italic=True, max_lines=1))

    return ft.Container(
        content=ft.Column([
            ft.Row([
                ft.Icon(ft.Icons.WALLET, size=20, color=ft.Colors.GREEN_400),
                ft.Column([
                    ft.Row([
                        ft.Text(wallet["name"], size=14,
                                weight=ft.FontWeight.W_500),
                        seed_badge,
                    ], spacing=8),
                    *details,
                ], spacing=2, expand=True),
                ft.Row([
                    ft.IconButton(
                        icon=ft.Icons.VISIBILITY if not is_revealed else ft.Icons.VISIBILITY_OFF,
                        tooltip="Reveal Seed" if not is_revealed else "Hide Seed",
                        on_click=lambda _: on_toggle_reveal(wallet["id"]),
                        icon_size=20,
                    ),
                    ft.IconButton(ft.Icons.EDIT_OUTLINED, tooltip="Edit",
                                  on_click=lambda _: on_edit(wallet), icon_size=20),
                    ft.IconButton(ft.Icons.DELETE_OUTLINE, tooltip="Delete",
                                  icon_color=ft.Colors.RED_400, on_click=lambda _: on_delete(wallet), icon_size=20),
                ], spacing=0)
            ], vertical_alignment=ft.CrossAxisAlignment.CENTER, spacing=12),

            # Revealed Seed Section (appears below row when toggled)
            ft.Container(
                visible=is_revealed,
                padding=10,
                bgcolor=ft.Colors.with_opacity(0.1, ft.Colors.BLACK),
                border_radius=5,
                content=ft.Column([
                    ft.Row([
                        ft.Text("Seed Phrase", size=10,
                                color=ft.Colors.AMBER_400, weight=ft.FontWeight.BOLD),
                        ft.IconButton(ft.Icons.COPY, icon_size=12,
                                      on_click=copy_seed, tooltip="Copy Seed", height=20, padding=0),
                    ], spacing=4),
                    ft.Text(value=decrypted_seed, size=12,
                            italic=True, selectable=True),
                ], spacing=4)
            )
        ], spacing=10),
        padding=ft.Padding(left=16, top=8, right=16, bottom=8),
        border=ft.Border(
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
            ft.BorderSide(1, ft.Colors.OUTLINE_VARIANT),
        ),
        border_radius=8,
        margin=ft.Margin(left=0, top=0, right=0, bottom=4),
    )
