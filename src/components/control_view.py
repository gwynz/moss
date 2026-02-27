import flet as ft

from models.moss import ControlItem, MossItem


@ft.component
def Moss(moss: MossItem):
    return ft.Column(
        controls=[
            # ft.Container(
            #     content=ft.Row(
            #         alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
            #         controls=[
            #             ft.Text(
            #                 moss.name,
            #                 theme_style=ft.TextThemeStyle.TITLE_MEDIUM,
            #                 weight=ft.FontWeight.W_500,
            #                 margin=ft.Margin.only(left=5),
            #             ),
            #             ft.IconButton(
            #                 icon=ft.Image(
            #                     src="github-mark.svg",
            #                     width=24,
            #                     height=24,
            #                     color=ft.Colors.ON_SURFACE_VARIANT,
            #                 ),
            #                 url=ft.Url(
            #                     f"https://github.com/flet-dev/moss/blob/main/src/mosses/{moss.file_name}",
            #                     ft.UrlTarget.BLANK,
            #                 ),
            #             ),
            #         ],
            #     ),
            #     bgcolor=ft.Colors.SECONDARY_CONTAINER,
            #     padding=5,
            #     border_radius=5,
            # ),
            ft.Container(
                margin=ft.Margin.only(top=20, bottom=20),
                key=moss.file_name,
                content=moss.moss(),
                clip_behavior=ft.ClipBehavior.NONE,
            )
            if moss.moss
            else ft.Text("No moss available"),
        ],
    )


@ft.component
def MossList(mosses: list[MossItem]):
    return (
        ft.Column(
            expand=True,
            scroll=ft.ScrollMode.AUTO,
            controls=[Moss(moss) for moss in mosses],
        )
        if mosses
        else ft.Text("No mosses available")
    )


@ft.component
def ControlView(control: ControlItem):
    return ft.Column(
        expand=True,
        controls=[
            ft.Text(value=control.name,
                    theme_style=ft.TextThemeStyle.HEADLINE_MEDIUM),
            *(
                [
                    ft.Text(
                        value=control.description,
                        theme_style=ft.TextThemeStyle.BODY_MEDIUM,
                    )
                ]
                if control.description
                else []
            ),
            MossList(control.mosses),
        ],
    )
