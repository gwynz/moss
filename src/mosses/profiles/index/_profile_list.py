import json
import os
import platform
import subprocess
from pathlib import Path
from typing import cast
import flet as ft

from models.profile_model import ProfileManagerModel
from mosses.profiles.index._profile_card import ProfileCard
from services import profile_repo


@ft.component
def ProfileList(model: ProfileManagerModel, on_run, on_stop, on_edit, on_delete):
    # Use local state for the input field text
    search_val, set_search_val = ft.use_state(model.search_query)

    moss_dir = Path.home() / ".moss"
    downloads_dir = Path.home() / "Downloads"
    export_path = downloads_dir / "profiles_export.json"
    import_path = moss_dir / "profiles_import.json"

    async def on_import_click(e: ft.ControlEvent):
        file_picker = ft.FilePicker()

        result = await file_picker.pick_files(
            dialog_title="Select profiles JSON to import",
            allowed_extensions=["json"],
            file_type=ft.FilePickerFileType.CUSTOM,
            allow_multiple=False
        )

        if not result or len(result) == 0 or not result[0].path:
            return

        file_path = Path(result[0].path)
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if not isinstance(data, list):
                    raise ValueError("JSON must be a list of profiles")

                count = await profile_repo.import_profiles(data)

                # Refresh UI
                new_profiles = await profile_repo.list_profiles()
                model.set_profiles(new_profiles)

                def close_dlg():
                    e.page.pop_dialog()

                dialog = ft.AlertDialog(
                    title=ft.Text("Import Success"),
                    content=ft.Text(
                        f"Successfully imported {count} profiles."),
                    actions=[
                        ft.TextButton(
                            "Close", on_click=lambda _: close_dlg()),
                    ],
                    actions_alignment=ft.MainAxisAlignment.END,
                )
                e.page.show_dialog(dialog)
        except Exception as ex:
            e.page.snack_bar = ft.SnackBar(
                ft.Text(f"Import failed: {str(ex)}"), bgcolor=ft.Colors.ERROR
            )
            e.page.update()

    async def on_export_click(e):
        try:
            moss_dir.mkdir(parents=True, exist_ok=True)
            profiles = await profile_repo.list_profiles()
            with open(export_path, "w", encoding="utf-8") as f:
                json.dump(profiles, f, indent=4)

            def close_dlg(_):
                e.control.page.pop_dialog()

            def open_folder(_):
                path_str = str(downloads_dir)
                try:
                    if platform.system() == "Windows":
                        os.startfile(path_str)
                    elif platform.system() == "Darwin":
                        subprocess.run(["open", path_str], check=True)
                    else:
                        subprocess.run(["xdg-open", path_str], check=True)
                except Exception:
                    # Fallback to launch_url if native opening fails
                    folder_url = f"file:///{path_str.replace('\\', '/')}"
                    e.control.page.launch_url(folder_url)
                close_dlg(None)

            content_controls: list[ft.Control] = [
                cast(ft.Control, ft.Text("Profiles exported successfully to:")),
                cast(ft.Control, ft.TextButton(
                    str(export_path),
                    on_click=open_folder,
                )),
            ]

            action_controls: list[ft.Control] = [
                cast(ft.Control, ft.TextButton(
                    "Open Folder", icon=ft.Icons.FOLDER_OPEN, on_click=open_folder)),
                cast(ft.Control, ft.TextButton("Close", on_click=close_dlg)),
            ]

            dialog = ft.AlertDialog(
                title=ft.Text("Export Success"),
                content=ft.Column(
                    controls=content_controls,
                    tight=True,
                    spacing=10,
                ),
                actions=action_controls,
                actions_alignment=ft.MainAxisAlignment.END,
            )

            e.control.page.show_dialog(dialog)

        except Exception as ex:
            e.control.page.snack_bar = ft.SnackBar(
                ft.Text(f"Export failed: {str(ex)}"), bgcolor=ft.Colors.ERROR
            )
            e.control.page.update()

    def on_search_submit(_=None):
        model.set_search(search_val)

    def on_search_change(e):
        set_search_val(e.control.value)

    toolbar_controls: list[ft.Control] = [
        ft.Text("Profiles", size=20, weight=ft.FontWeight.BOLD, expand=True),
        ft.TextField(
            value=search_val,
            hint_text="Search profiles...",
            width=250,
            height=40,
            text_size=13,
            content_padding=ft.Padding(left=8, top=0, right=8, bottom=4),
            on_change=on_search_change,
            on_submit=on_search_submit,
        ),
        ft.IconButton(
            icon=ft.Icons.SEARCH,
            on_click=on_search_submit,
            tooltip="Search",
        ),
        ft.TextButton(
            "Export All",
            icon=ft.Icons.UPLOAD,
            on_click=on_export_click,
        ),
        ft.TextButton(
            "Import All",
            icon=ft.Icons.DOWNLOAD,
            on_click=on_import_click,
        ),
        ft.FilledButton(
            "Add Profile",
            icon=ft.Icons.ADD,
            on_click=lambda _: model.start_add(),
        ),
    ]
    toolbar = ft.Row(
        controls=toolbar_controls,
        alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
        vertical_alignment=ft.CrossAxisAlignment.CENTER,
    )

    profiles = model.filtered_profiles
    if not profiles:
        empty_controls: list[ft.Control] = [
            ft.Icon(ft.Icons.PERSON_OFF_OUTLINED,
                    size=48, color=ft.Colors.GREY_500),
            ft.Text(
                "No profiles yet" if not model.search_query else "No matching profiles",
                size=16,
                color=ft.Colors.GREY_500,
            ),
            ft.Text(
                'Click "Add Profile" to create one' if not model.search_query else "Try a different search term",
                size=13,
                color=ft.Colors.GREY_600,
            ),
        ]
        empty = ft.Container(
            content=ft.Column(
                controls=empty_controls,
                horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                spacing=8,
            ),
            alignment=ft.Alignment.CENTER,
            padding=60,
        )
        return ft.Column([toolbar, empty], spacing=16)

    cards: list[ft.Control] = [
        ProfileCard(
            profile=p,
            model=model,
            on_run=on_run,
            on_stop=on_stop,
            on_edit=on_edit,
            on_delete=on_delete,
        )
        for p in profiles
    ]

    column_controls: list[ft.Control] = [
        toolbar,
        ft.ListView(
            controls=cards,
            spacing=4,
            expand=True,
        )
    ]
    return ft.Column(column_controls, spacing=12, expand=True)
