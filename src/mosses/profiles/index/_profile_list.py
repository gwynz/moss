import flet as ft

from models.profile_model import ProfileManagerModel
from mosses.profiles.index._profile_card import ProfileCard


@ft.component
def ProfileList(model: ProfileManagerModel, on_run, on_stop, on_edit, on_delete):
    # Use local state for the input field text
    search_val, set_search_val = ft.use_state(model.search_query)

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
        ),
    ]
    return ft.Column(column_controls, spacing=12, expand=True)
