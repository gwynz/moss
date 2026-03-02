import asyncio
import flet as ft

from services import profile_repo as repo
from services import wallet_repo
from services import pydoll_engine
from services import browser_engine as engine
from utils.crypto import decrypt_string

name = "Task Manager"

def moss():
    return TaskManager()

@ft.component
def TaskManager():
    profiles, set_profiles = ft.use_state([])
    selected_ids, set_selected_ids = ft.use_state(set())
    running_status, set_running_status = ft.use_state({}) # pid -> status string
    is_executing, set_is_executing = ft.use_state(False)
    selected_task, set_selected_task = ft.use_state("Import Metamask Task")

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

        set_is_executing(True)
        set_running_status({})

        pids = list(selected_ids)

        for pid in pids:
            if not is_executing: # TODO: Support cancellation
                pass

            profile = next((p for p in profiles if p["id"] == pid), None)
            if not profile:
                continue

            update_status(pid, "Starting...")

            try:
                # 1. Fetch fresh profile data to get linked wallet ID
                fresh = await repo.get_profile(pid)
                if not fresh:
                    update_status(pid, "Profile not found")
                    continue

                w_id = fresh.get("wallet_id")
                if not w_id:
                    update_status(pid, "Failed: No wallet linked")
                    continue

                # 2. Get wallet seed
                wallet = await wallet_repo.get_wallet(w_id, decrypt_seed=True)
                if not wallet or not wallet.get("seed"):
                    update_status(pid, "Failed: Wallet seed missing")
                    continue

                # 3. Preparation for MetaMask automation
                update_status(pid, "Launching browser...")
                # Force automation settings (not saved to DB, just for runtime)
                fresh["tool_type"] = "pydoll"
                fresh["ext_metamask"] = True

                # Launch via pydoll
                context, tab = await pydoll_engine.launch(fresh)
                if not context:
                    update_status(pid, "Failed: Browser launch error")
                    continue

                # Register in global engine so it can be closed by user if needed
                engine._running_contexts[pid] = context
                await repo.set_running(pid, True)

                # 4. Decrypt MetaMask password
                mm_pass_enc = fresh.get("metamask_password")
                mm_pass = decrypt_string(mm_pass_enc) if mm_pass_enc else "Password123!"

                # 5. Execute Automation
                update_status(pid, "Importing MetaMask...")
                await pydoll_engine.import_metamask_wallet(
                    tab,
                    seed_phrase=wallet["seed"],
                    password=mm_pass,
                )

                # 6. Close browser after task completion
                update_status(pid, "Closing browser...")
                await engine.close_profile(pid)

                update_status(pid, "Done")

            except Exception as e:
                update_status(pid, f"Error: {str(e)}")

            # Optional: Add a small delay between profile starts
            await asyncio.sleep(1)

        set_is_executing(False)

    # --- UI Components ---

    if not profiles:
        return ft.Column(
            [
                ft.Text("Task Manager", size=24, weight=ft.FontWeight.BOLD),
                ft.Divider(),
                ft.Container(
                    content=ft.Column(
                        [
                            ft.Icon(ft.Icons.PERSON_OFF_OUTLINED, size=48, color=ft.Colors.GREY_500),
                            ft.Text("No profiles available to run tasks.", color=ft.Colors.GREY_500),
                        ],
                        horizontal_alignment=ft.CrossAxisAlignment.CENTER,
                    ),
                    alignment=ft.Alignment.CENTER,
                    padding=40,
                ),
            ],
            expand=True,
        )

    profile_rows = []
    for p in profiles:
        pid = p["id"]
        status = running_status.get(pid, "")

        profile_rows.append(
            ft.DataRow(
                cells=[
                    ft.DataCell(
                        ft.Checkbox(
                            value=pid in selected_ids,
                            on_change=lambda _, pid=pid: toggle_select(pid),
                            disabled=is_executing
                        )
                    ),
                    ft.DataCell(ft.Text(p["name"])),
                    ft.DataCell(ft.Text(p.get("browser_engine", "chrome").upper(), size=12)),
                    ft.DataCell(
                        ft.Text(
                            status,
                            color=ft.Colors.GREEN if status == "Done" else (ft.Colors.RED if "Error" in status or "Failed" in status else ft.Colors.BLUE),
                            italic=True,
                            size=12
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
                    disabled=is_executing or not selected_ids
                ),
            ]
        ),
        ft.Divider(),
        ft.Row(
            [
                ft.Dropdown(
                    label="Select Task",
                    value=selected_task,
                    options=[ft.DropdownOption("Import Metamask Task")],
                    width=300,
                    on_select=lambda e: set_selected_task(e.control.value),
                    disabled=is_executing
                ),
                ft.VerticalDivider(),
                ft.TextButton("Select All", on_click=select_all, disabled=is_executing),
                ft.TextButton("Clear Selection", on_click=select_none, disabled=is_executing),
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
                                ft.DataColumn(label=ft.Text("Engine")),
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
