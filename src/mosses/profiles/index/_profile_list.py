import flet as ft

from models.profile_model import ProfileManagerModel
from mosses.profiles.index._profile_card import ProfileCard


@ft.component
def ProfileList(model: ProfileManagerModel, on_run, on_stop, on_edit, on_delete):
    def on_search_change(e):
        model.set_search(e.control.value)

    toolbar = ft.Row(
        [
            ft.Text("Profiles", size=20, weight=ft.FontWeight.BOLD, expand=True),
            ft.TextField(
                hint_text="Search profiles...",
                prefix_icon=ft.Icons.SEARCH,
                width=250,
                height=40,
                text_size=13,
                content_padding=ft.padding.only(left=8, right=8, bottom=4),
                on_change=on_search_change,
            ),
            ft.FilledButton(
                "Add Profile",
                icon=ft.Icons.ADD,
                on_click=lambda _: model.start_add(),
            ),
        ],
        alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
        vertical_alignment=ft.CrossAxisAlignment.CENTER,
    )

    profiles = model.filtered_profiles
    if not profiles:
        empty = ft.Container(
            content=ft.Column(
                [
                    ft.Icon(ft.Icons.PERSON_OFF_OUTLINED, size=48, color=ft.Colors.GREY_500),
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
                ],
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
