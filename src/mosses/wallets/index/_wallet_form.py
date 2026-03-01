import flet as ft
from models.wallet_model import WalletManagerModel
from services.wallet_repo import generate_mnemonic


@ft.component
def WalletForm(model: WalletManagerModel, on_save, on_cancel):
    async def handle_save(e):
        page = ft.context.page
        # Basic validation
        if not model.editing_wallet.get("name"):
            sb = ft.SnackBar(ft.Text("Name is required!"))
            page.overlay.append(sb)
            sb.open = True
            page.update()
            return
        if not model.editing_wallet.get("seed"):
            sb = ft.SnackBar(ft.Text("Seed phrase is required!"))
            page.overlay.append(sb)
            sb.open = True
            page.update()
            return
        await on_save()

    def generate_random(e):
        strength = 128 if model.editing_wallet.get(
            "seed_type") == "12 words" else 256
        mnemonic = generate_mnemonic(strength)
        model.editing_wallet = {**model.editing_wallet, "seed": mnemonic}
        ft.context.page.update()

    def handle_change(field, value):
        model.editing_wallet = {**model.editing_wallet, field: value}
        ft.context.page.update()

    is_edit = model.form_mode == "edit"

    form_content = [
        ft.TextField(
            label="Wallet Name",
            value=model.editing_wallet.get("name", ""),
            on_change=lambda e: handle_change("name", e.control.value),
            autofocus=True,
        ),
        ft.TextField(
            label="Note (Optional)",
            value=model.editing_wallet.get("note", ""),
            on_change=lambda e: handle_change("note", e.control.value),
            multiline=True,
            min_lines=1,
            max_lines=3,
        ),
        ft.Dropdown(
            label="Seed Type",
            value=model.editing_wallet.get("seed_type", "12 words"),
            options=[
                ft.dropdown.Option("12 words"),
                ft.dropdown.Option("24 words"),
            ],
            on_select=lambda e: handle_change("seed_type", e.control.value),
            disabled=is_edit,
        ),
        ft.Column(
            spacing=10,
            controls=[
                ft.Row(
                    alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
                    controls=[
                        ft.Text(value="Seed Phrase / Mnemonic", size=14,
                                weight=ft.FontWeight.W_500),
                        ft.TextButton("Generate Random", icon=ft.Icons.REFRESH,
                                      on_click=generate_random) if not is_edit else ft.Container(),
                    ]
                ),
                ft.TextField(
                    value=model.editing_wallet.get("seed", ""),
                    on_change=lambda e: handle_change("seed", e.control.value),
                    multiline=True,
                    min_lines=2,
                    max_lines=5,
                    hint_text="Enter your words separated by spaces...",
                    text_size=13,
                ),
            ]
        )
    ]

    return ft.Container(
        padding=20,
        content=ft.Column([
            ft.Row([
                ft.IconButton(
                    icon=ft.Icons.ARROW_BACK,
                    tooltip="Back to list",
                    on_click=lambda _: on_cancel()
                ),
                ft.Text(
                    "Edit Wallet" if is_edit else "New Wallet",
                    size=20,
                    weight=ft.FontWeight.BOLD,
                    expand=True,
                ),
                ft.FilledButton(
                    "Save",
                    icon=ft.Icons.SAVE,
                    on_click=handle_save
                ),
            ], vertical_alignment=ft.CrossAxisAlignment.CENTER),
            ft.Divider(),
            ft.Column(
                controls=form_content,
                spacing=20,
                scroll=ft.ScrollMode.AUTO,
                expand=True,
            ),
        ], spacing=20, expand=True),
        expand=True,
    )
