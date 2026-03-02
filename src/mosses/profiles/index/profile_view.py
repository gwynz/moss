import asyncio

import flet as ft

from models.profile_model import ProfileManagerModel
from services.db import init_db
from services import profile_repo as repo
from services import browser_engine as engine
from services import wallet_repo
from services import pydoll_engine
from mosses.profiles.index._profile_list import ProfileList
from mosses.profiles.index._profile_form import ProfileForm

name = "Profile Manager"


def moss():
    return ProfileManager()


@ft.component
def ProfileManager():
    model, set_model = ft.use_state(ProfileManagerModel())
    confirm_delete, set_confirm_delete = ft.use_state(None)  # profile dict or None

    async def startup():
        try:
            await init_db()
            profiles = await repo.list_profiles()
            model.set_profiles(profiles)
            # Sync running state from engine
            for p in profiles:
                if engine.is_running(p["id"]):
                    model.set_running(p["id"], True)
        except Exception as e:
            model.error_message = str(e)
        finally:
            model.is_loading = False

    ft.on_mounted(lambda: asyncio.create_task(startup()))

    async def refresh_profiles():
        profiles = await repo.list_profiles()
        model.set_profiles(profiles)

    # --- Actions ---
    async def on_run(profile):
        pid = profile["id"]
        if model.is_starting(pid) or model.is_running(pid):
            return
        model.set_starting(pid, True)
        try:
            fresh = await repo.get_profile(pid)
            if fresh:
                ok = await engine.launch_profile(fresh)
                if ok:
                    model.set_running(pid, True)
                    await refresh_profiles()
        except Exception as e:
            model.error_message = f"Launch failed: {e}"
        finally:
            model.set_starting(pid, False)

    async def on_stop(profile):
        pid = profile["id"]
        try:
            await engine.close_profile(pid)
            model.set_running(pid, False)
            await refresh_profiles()
        except Exception as e:
            model.error_message = f"Stop failed: {e}"

    async def on_import_wallet(profile):
        pid = profile["id"]
        if model.is_starting(pid) or model.is_running(pid):
            return
        model.set_starting(pid, True)
        try:
            fresh = await repo.get_profile(pid)
            if not fresh:
                return

            w_id = fresh.get("wallet_id")
            if not w_id:
                model.error_message = "No wallet linked to this profile. Please edit profile to link a wallet."
                return

            wallet = await wallet_repo.get_wallet(w_id, decrypt_seed=True)

            print(wallet)
            if not wallet or not wallet.get("seed"):
                model.error_message = "Linked wallet not found or seed is empty."
                return

            # Force Pydoll for automation
            fresh["tool_type"] = "pydoll"
            fresh["ext_metamask"] = True

            # Launch and get browser
            from services import pydoll_engine
            from utils.crypto import decrypt_string

            context, tab = await pydoll_engine.launch(fresh)
            print("Browser:", context)
            if context:
                # Register in running contexts so it can be closed normally
                engine._running_contexts[pid] = context
                await repo.set_running(pid, True)
                model.set_running(pid, True)

                # Get stored password or use default
                mm_pass_enc = fresh.get("metamask_password")
                mm_pass = decrypt_string(mm_pass_enc) if mm_pass_enc else "Password123!"

                # Run the automation
                await pydoll_engine.import_metamask_wallet(
                    tab,
                    seed_phrase=wallet["seed"],
                    password=mm_pass,
                )
        except Exception as e:
            model.error_message = f"Wallet import failed: {e}"
        finally:
            model.set_starting(pid, False)
            await refresh_profiles()

    def on_edit(profile):
        model.start_edit(profile)

    def on_delete_request(profile):
        set_confirm_delete(profile)

    async def on_delete_confirm(e):
        profile = confirm_delete
        set_confirm_delete(None)
        if profile:
            await repo.delete_profile(profile["id"])
            await refresh_profiles()

    def on_delete_cancel(e):
        set_confirm_delete(None)

    async def on_save(form_data):
        if model.form_mode == "add":
            name = form_data.pop("name", "Unnamed")
            # Remove keys that aren't DB columns
            form_data.pop("id", None)
            form_data.pop("created_at", None)
            form_data.pop("updated_at", None)
            form_data.pop("last_launched", None)
            form_data.pop("is_running", None)
            await repo.create_profile(name, **form_data)
        elif model.form_mode == "edit" and model.editing_profile_id:
            pid = model.editing_profile_id
            form_data.pop("id", None)
            form_data.pop("created_at", None)
            form_data.pop("updated_at", None)
            form_data.pop("last_launched", None)
            form_data.pop("is_running", None)
            await repo.update_profile(pid, **form_data)
        model.back_to_list()
        await refresh_profiles()

    def on_cancel():
        model.back_to_list()

    # --- Render ---
    if model.is_loading:
        return ft.Container(
            content=ft.Column(
                [
                    ft.ProgressRing(),
                    ft.Text("Loading profiles..."),
                ],
                horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                spacing=16,
            ),
            alignment=ft.Alignment.CENTER,
            expand=True,
        )

    # Delete confirmation dialog
    dialog = ft.AlertDialog(
        modal=True,
        title=ft.Text("Delete Profile"),
        open=True if confirm_delete else False,
        content=ft.Text(f'Delete tis profile"? This cannot be undone.'),
        actions=[
            ft.TextButton("Cancel", on_click=on_delete_cancel),
            ft.FilledButton(
                "Delete",
                on_click=lambda e: asyncio.create_task(on_delete_confirm(e)),
                style=ft.ButtonStyle(bgcolor=ft.Colors.RED),
            ),
        ],
    )

    # Error banner
    error_banner = None

    def dismiss_error(_):
        model.error_message = ""
        set_model(model)
        ft.context.page.update()

    error_banner = ft.Banner(
        open=True if model.error_message else False,
        bgcolor=ft.Colors.ERROR_CONTAINER,
        content=ft.Text(model.error_message),
        actions=[ft.TextButton("Dismiss", on_click=dismiss_error)],
    )

    children = []
    if error_banner:
        children.append(error_banner)

    if model.form_mode == "list":
        children.append(
            ProfileList(
                model=model,
                on_run=lambda p: asyncio.create_task(on_run(p)),
                on_stop=lambda p: asyncio.create_task(on_stop(p)),
                on_edit=on_edit,
                on_delete=on_delete_request,
                on_import_wallet=lambda p: asyncio.create_task(on_import_wallet(p)),
            )
        )
    else:
        children.append(
            ProfileForm(
                profile=model.editing_profile,
                is_edit=(model.form_mode == "edit"),
                on_save=lambda data: asyncio.create_task(on_save(data)),
                on_cancel=on_cancel,
            )
        )

    if dialog:
        children.append(dialog)

    return ft.Container(
        content=ft.Column(children, expand=True, spacing=8),
        padding=16,
        expand=True,
    )
