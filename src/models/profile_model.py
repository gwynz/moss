from dataclasses import dataclass, field

import flet as ft


@ft.observable
@dataclass
class ProfileManagerModel:
    profiles: list = field(default_factory=list)
    filtered_profiles: list = field(default_factory=list)
    form_mode: str = "list"  # "list", "add", "edit"
    editing_profile_id: str | None = None
    editing_profile: dict = field(default_factory=dict)
    search_query: str = ""
    is_loading: bool = True
    running_profiles: set = field(default_factory=set)
    error_message: str = ""

    def set_profiles(self, profiles: list):
        self.profiles = profiles
        self._apply_filter()

    def set_search(self, query: str):
        self.search_query = query
        self._apply_filter()

    def _apply_filter(self):
        q = self.search_query.lower().strip()
        if not q:
            self.filtered_profiles = list(self.profiles)
        else:
            self.filtered_profiles = [
                p for p in self.profiles
                if q in p.get("name", "").lower()
                or q in p.get("notes", "").lower()
                or q in p.get("proxy_host", "").lower()
            ]

    def start_add(self):
        self.form_mode = "add"
        self.editing_profile_id = None
        self.editing_profile = {}

    def start_edit(self, profile: dict):
        self.form_mode = "edit"
        self.editing_profile_id = profile["id"]
        self.editing_profile = dict(profile)

    def back_to_list(self):
        self.form_mode = "list"
        self.editing_profile_id = None
        self.editing_profile = {}

    def set_running(self, profile_id: str, running: bool):
        if running:
            self.running_profiles = self.running_profiles | {profile_id}
        else:
            self.running_profiles = self.running_profiles - {profile_id}

    def is_running(self, profile_id: str) -> bool:
        return profile_id in self.running_profiles
