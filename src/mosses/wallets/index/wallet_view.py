import asyncio
import flet as ft
from models.wallet_model import WalletManagerModel
from services import wallet_repo
from utils.crypto import decrypt_string
from ._wallet_card import WalletCard
from ._wallet_form import WalletForm


def moss():
    return WalletManager()


@ft.component
def WalletManager():
    model, set_model = ft.use_state(WalletManagerModel())
    confirm_delete, set_confirm_delete = ft.use_state(
        None)  # Wallet dict or None

    revealed_seeds, set_revealed_seeds = ft.use_state(set())

    search_val, set_search_val = ft.use_state(model.search_query)

    def on_search_submit(_=None):
        model.set_search(search_val)

    def on_search_change(e):
        set_search_val(e.control.value)

    async def startup():
        model.is_loading = True
        try:
            wallets = await wallet_repo.list_wallets()
            model.set_wallets(wallets)
        except Exception as e:
            model.error_message = str(e)
            print(e)
        finally:
            model.is_loading = False

    ft.on_mounted(lambda: asyncio.create_task(startup()))

    async def refresh_wallets():
        wallets = await wallet_repo.list_wallets()
        model.set_wallets(wallets)

    async def handle_save():
        try:
            if model.form_mode == "add":
                await wallet_repo.create_wallet(
                    name=model.editing_wallet["name"],
                    note=model.editing_wallet["note"],
                    seed=model.editing_wallet["seed"],
                    seed_type=model.editing_wallet["seed_type"]
                )
            elif model.editing_wallet_id:
                await wallet_repo.update_wallet(
                    model.editing_wallet_id,
                    name=model.editing_wallet["name"],
                    note=model.editing_wallet["note"],
                    seed=model.editing_wallet["seed"]
                )
            model.back_to_list()
            await refresh_wallets()
        except Exception as e:
            model.error_message = f"Error: {e}"
  # Trigger re-render

    def on_delete_request(wallet):
        set_confirm_delete(wallet)

    async def on_delete_confirm(e):
        wallet = confirm_delete
        set_confirm_delete(None)
        if wallet:
            await wallet_repo.delete_wallet(wallet["id"])
            await refresh_wallets()

    def handle_toggle_reveal(wid):
        new_revealed_seeds = revealed_seeds.copy()
        if wid in new_revealed_seeds:
            new_revealed_seeds.remove(wid)
        else:
            new_revealed_seeds.add(wid)
        set_revealed_seeds(new_revealed_seeds)  # This triggers re-render

    # --- Render ---
    children = []

    # Error Banner
    if model.error_message:
        children.append(
            ft.Banner(
                bgcolor=ft.Colors.ERROR_CONTAINER,
                content=ft.Text(model.error_message),
                actions=[
                    ft.TextButton("Dismiss", on_click=lambda _: (
                        setattr(model, "error_message", "")))
                ],
                open=True,
            )
        )

    if model.is_loading:
        children.append(
            ft.Container(
                content=ft.Column(
                    [ft.ProgressRing(), ft.Text("Loading Wallets...")],
                    horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                    spacing=16,
                ),
                alignment=ft.Alignment.CENTER,
                expand=True,
            )
        )
    elif model.form_mode == "list":
        # Main List View
        children.append(
            ft.Column(
                expand=True,
                spacing=20,
                controls=[
                    ft.Row(
                        alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
                        vertical_alignment=ft.CrossAxisAlignment.CENTER,
                        controls=[
                            ft.Text("Wallets", size=20,
                                    weight=ft.FontWeight.BOLD, expand=True),
                            ft.TextField(
                                value=search_val,
                                hint_text="Search wallets...",
                                width=250,
                                height=40,
                                text_size=13,
                                content_padding=ft.Padding(
                                    left=8, top=0, right=8, bottom=4),
                                on_change=on_search_change,
                                on_submit=on_search_submit,
                            ),
                            ft.IconButton(
                                icon=ft.Icons.SEARCH,
                                on_click=on_search_submit,
                                tooltip="Search",
                            ),
                            ft.ElevatedButton("Add Wallet", icon=ft.Icons.ADD, on_click=lambda _: (
                                model.start_add())),
                        ],
                    ),
                    ft.Column(
                        expand=True,
                        scroll=ft.ScrollMode.AUTO,
                        controls=[
                            ft.Row(
                                wrap=True,
                                spacing=20,
                                run_spacing=20,
                                controls=[
                                    WalletCard(
                                        w,
                                        # Use separate state
                                        is_revealed=w["id"] in revealed_seeds,
                                        on_edit=lambda w: (
                                            model.start_edit({**w, "seed": decrypt_string(w["seed"])})),
                                        on_delete=on_delete_request,
                                        on_toggle_reveal=handle_toggle_reveal  # Use handler
                                    ) for w in model.paged_wallets
                                ]
                            ) if model.paged_wallets else ft.Container(
                                content=ft.Column([
                                    ft.Icon(
                                        ft.Icons.ACCOUNT_BALANCE_WALLET_OUTLINED, size=100, color=ft.Colors.GREY_800),
                                    ft.Text("No wallets found", size=16,
                                            color=ft.Colors.GREY_500),
                                ], horizontal_alignment=ft.CrossAxisAlignment.CENTER),
                                margin=ft.margin.only(top=100),
                                alignment=ft.Alignment.CENTER,
                            )
                        ]
                    ),
                    # Pagination
                    ft.Row(
                        alignment=ft.MainAxisAlignment.CENTER,
                        controls=[
                            ft.IconButton(ft.Icons.CHEVRON_LEFT, on_click=lambda _: (
                                model.set_page(model.page - 1)), disabled=model.page <= 1),
                            ft.Text(
                                f"Page {model.page} of {model.total_pages}"),
                            ft.IconButton(ft.Icons.CHEVRON_RIGHT, on_click=lambda _: (model.set_page(
                                model.page + 1)), disabled=model.page >= model.total_pages),
                        ],
                        visible=model.total_pages > 1
                    )
                ]
            )
        )
    else:
        # Form View
        children.append(
            WalletForm(
                model=model,
                on_save=lambda: asyncio.create_task(handle_save()),
                on_cancel=lambda: (model.back_to_list())
            )
        )

    # Delete Dialog
    if confirm_delete:
        children.append(
            ft.AlertDialog(
                title=ft.Text("Confirm Delete"),
                content=ft.Text(
                    f"Are you sure you want to delete '{confirm_delete['name']}'?"),
                open=True,
                actions=[
                    ft.TextButton(
                        "Cancel", on_click=lambda _: set_confirm_delete(None)),
                    ft.TextButton("Delete", on_click=lambda e: asyncio.create_task(
                        on_delete_confirm(e)), color=ft.Colors.RED_400),
                ],
            )
        )

    return ft.Container(
        content=ft.Column(children, expand=True, spacing=8),
        padding=16,
        expand=True,
    )
