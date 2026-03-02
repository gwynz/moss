import asyncio
import flet as ft

from services import profile_repo as repo
from services import browser_engine as engine
from services import pydoll_engine
from services import task_registry

name = "Task Manager"


def moss():
    return TaskManager()


@ft.component
def TaskManager():
    profiles, set_profiles = ft.use_state([])
    selected_ids, set_selected_ids = ft.use_state(set())
    running_status, set_running_status = ft.use_state({})  # pid -> status string
    is_executing, set_is_executing = ft.use_state(False)
    selected_task_id, set_selected_task_id = ft.use_state(
        task_registry.MetamaskImportTask.id
    )

    async def load_data():
        plist = await repo.list_profiles()
        set_profiles(plist)

    ft.on_mounted(load_data)

    def toggle_select(pid: str):
        new_selected = set(selected_ids)
        if pid in new_selected:
            new_selected.remove(pid)
        else:
            new_selected.add(pid)
        set_selected_ids(new_selected)

    def select_all(_):
        set_selected_ids({p["id"] for p in profiles})

    def select_none(_):
        set_selected_ids(set())

    def update_status(pid, msg):
        new_status = dict(running_status)
        new_status[pid] = msg
        set_running_status(new_status)

    async def run_tasks(_):
        if not selected_ids:
            return

        task = task_registry.get_task(selected_task_id)
        if not task:
            return

        set_is_executing(True)
        set_running_status({})

        pids = list(selected_ids)

        for pid in pids:
            if not is_executing:  # TODO: Support cancellation
                pass

            profile = next((p for p in profiles if p["id"] == pid), None)
            if not profile:
                continue

            # 1. Compatibility Check
            tool = profile.get("tool_type", "camoufox")
            browser = profile.get("browser_engine", "chrome")
            if not task.is_supported(tool, browser):
                update_status(pid, f"Unsupported: {tool}/{browser}")
                continue

            update_status(pid, "Starting...")

            try:
                # 2. Preparation: Apply task-required profile modifications
                mods = task.get_required_profile_modifications(profile)
                if mods:
                    profile.update(mods)

                # 3. Launching
                update_status(pid, "Launching browser...")
                if tool == "pydoll":
                    context, tab = await pydoll_engine.launch(profile)
                else:
                    # Generic engine launch would go here
                    update_status(pid, f"Engine {tool} setup pending refactor")
                    continue

                if not context:
                    update_status(pid, "Failed: Browser launch error")
                    continue

                engine._running_contexts[pid] = context
                await repo.set_running(pid, True)

                # 4. Execute Task from Registry
                update_status(pid, "Executing task...")
                next_note = await task.run(
                    profile, tab, lambda msg: update_status(pid, msg)
                )

                # 5. Save Task Note for chaining
                if next_note:
                    await repo.update_profile(pid, task_note=next_note)

                # 6. Close
                update_status(pid, "Closing browser...")
                await engine.close_profile(pid)

                update_status(pid, "Done")

            except Exception as e:
                update_status(pid, f"Error: {str(e)}")
                # Ensure browser closes on error
                try:
                    await engine.close_profile(pid)
                except:
                    pass

            await asyncio.sleep(1)

        set_is_executing(False)
        await load_data()  # Refresh to show updated task_notes

    # --- UI Components ---

    if not profiles:
        return ft.Column(
            [
                ft.Text("Task Manager", size=24, weight=ft.FontWeight.BOLD),
                ft.Divider(),
                ft.Container(
                    content=ft.Column(
                        [
                            ft.Icon(
                                ft.Icons.PERSON_OFF_OUTLINED,
                                size=48,
                                color=ft.Colors.GREY_500,
                            ),
                            ft.Text(
                                "No profiles available to run tasks.",
                                color=ft.Colors.GREY_500,
                            ),
                        ],
                        horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                    ),
                    alignment=ft.Alignment.CENTER,
                    padding=40,
                ),
            ],
            expand=True,
        )

    task_options = [
        ft.DropdownOption(key=t.id, text=t.name) for t in task_registry.list_tasks()
    ]

    # Get current task for compatibility check in UI
    current_task = task_registry.get_task(selected_task_id)

    profile_rows = []
    for p in profiles:
        pid = p["id"]
        status = running_status.get(pid, "")
        task_note = p.get("task_note", "")

        # Check support
        is_supported = (
            current_task.is_supported(
                p.get("tool_type", "camoufox"), p.get("browser_engine", "chrome")
            )
            if current_task
            else False
        )

        profile_rows.append(
            ft.DataRow(
                cells=[
                    ft.DataCell(
                        ft.Checkbox(
                            value=pid in selected_ids,
                            on_change=lambda _, pid=pid: toggle_select(pid),
                            disabled=is_executing,
                        )
                    ),
                    ft.DataCell(
                        ft.Column(
                            [
                                ft.Text(p["name"]),
                                (
                                    ft.Text(
                                        task_note,
                                        size=10,
                                        color=ft.Colors.GREY_500,
                                        italic=True,
                                    )
                                    if task_note
                                    else ft.Container()
                                ),
                            ],
                            spacing=2,
                            alignment=ft.MainAxisAlignment.CENTER,
                        )
                    ),
                    ft.DataCell(
                        ft.Icon(
                            ft.Icons.CHECK_CIRCLE if is_supported else ft.Icons.CANCEL,
                            color=ft.Colors.GREEN if is_supported else ft.Colors.RED,
                            size=20,
                        )
                    ),
                    ft.DataCell(
                        ft.Text(p.get("tool_type", "camoufox").upper(), size=12)
                    ),
                    ft.DataCell(
                        ft.Text(p.get("browser_engine", "chrome").upper(), size=12)
                    ),
                    ft.DataCell(
                        ft.Text(
                            status,
                            color=(
                                ft.Colors.GREEN
                                if status == "Done"
                                else (
                                    ft.Colors.RED
                                    if "Error" in status or "Failed" in status
                                    else ft.Colors.BLUE
                                )
                            ),
                            italic=True,
                            size=12,
                        )
                    ),
                ]
            )
        )

    column_controls: list[ft.Control] = [
        ft.Row(
            [
                ft.Text("Task Manager", size=24, weight=ft.FontWeight.BOLD),
                ft.Container(expand=True),
                ft.FilledButton(
                    "Start Batch",
                    icon=ft.Icons.PLAY_ARROW,
                    on_click=run_tasks,
                    disabled=is_executing or not selected_ids,
                ),
            ]
        ),
        ft.Divider(),
        ft.Row(
            [
                ft.Dropdown(
                    label="Select Task",
                    value=selected_task_id,
                    options=task_options,
                    width=300,
                    on_select=lambda e: set_selected_task_id(e.control.value),
                    disabled=is_executing,
                ),
                ft.VerticalDivider(),
                ft.TextButton("Select All", on_click=select_all, disabled=is_executing),
                ft.TextButton(
                    "Clear Selection", on_click=select_none, disabled=is_executing
                ),
            ],
            alignment=ft.MainAxisAlignment.START,
        ),
        ft.Card(
            content=ft.Container(
                content=ft.Column(
                    [
                        ft.DataTable(
                            columns=[
                                ft.DataColumn(label=ft.Text("Select")),
                                ft.DataColumn(label=ft.Text("Profile Name")),
                                ft.DataColumn(label=ft.Text("Support Task")),
                                ft.DataColumn(label=ft.Text("Tool Type")),
                                ft.DataColumn(label=ft.Text("Engine Type")),
                                ft.DataColumn(label=ft.Text("Status")),
                            ],
                            rows=profile_rows,
                            heading_row_color="surfacevariant",
                        ),
                    ],
                    scroll=ft.ScrollMode.AUTO,
                    expand=True,
                    horizontal_alignment=ft.CrossAxisAlignment.STRETCH,
                ),
                padding=10,
            ),
            expand=True,
        ),
    ]

    return ft.Column(
        column_controls,
        spacing=20,
        expand=True,
    )
