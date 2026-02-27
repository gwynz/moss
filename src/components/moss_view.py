from typing import cast

import flet as ft

from components.control_view import ControlView
from components.group_view import GroupView
from components.navigation import Navigation
from contexts.route import RouteContext
from models.moss import ControlGroup, Moss
from utils.route import Route


@ft.component
def MossView(moss: Moss):
    route_context = ft.use_context(RouteContext)
    route = Route(route_context.route)
    group_name = route.group if route.group else moss.control_groups[0].name
    control_id = route.control
    group = moss.get_control_group(group_name) if group_name else None
    control = (
        moss.get_control(group_name, control_id)
        if group_name and control_id
        else None
    )

    return ft.Row(
        expand=True,
        controls=cast(
            list[ft.Control],
            [
                Navigation(moss.control_groups, route.group),
                ft.VerticalDivider(width=1),
                (
                    ControlView(control)
                    if control
                    else ControlView(group.controls[0])
                    if group and group.controls and group.controls[0].id == "index"
                    else GroupView(group)
                    if group
                    else ft.Text("Unknown group")
                ),
            ],
        ),
    )
