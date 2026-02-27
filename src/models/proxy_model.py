from dataclasses import dataclass, field
import flet as ft


@ft.observable
@dataclass
class ProxyManagerModel:
    proxies: list = field(default_factory=list)
    filtered_proxies: list = field(default_factory=list)
    form_mode: str = "list"  # "list", "add", "edit"
    editing_proxy_id: str | None = None
    editing_proxy: dict = field(default_factory=dict)
    search_query: str = ""
    test_results: dict = field(default_factory=dict)  # proxy_id -> status_text
    error_message: str = ""
    is_loading: bool = True

    def set_proxies(self, proxies: list):
        self.proxies = proxies
        self._apply_filter()

    def set_search(self, query: str):
        self.search_query = query
        self._apply_filter()

    def _apply_filter(self):
        q = self.search_query.lower().strip()
        if not q:
            self.filtered_proxies = list(self.proxies)
        else:
            self.filtered_proxies = [
                p for p in self.proxies
                if q in p.get("name", "").lower()
                or q in p.get("proxy_host", "").lower()
                or q in p.get("notes", "").lower()
            ]

    def start_add(self):
        self.form_mode = "add"
        self.editing_proxy_id = None
        self.editing_proxy = {
            "name": "",
            "notes": "",
            "proxy_type": "HTTP",
            "proxy_host": "",
            "proxy_port": "8080",
            "proxy_username": "",
            "proxy_password": ""
        }

    def start_edit(self, proxy: dict):
        self.form_mode = "edit"
        self.editing_proxy_id = proxy["id"]
        self.editing_proxy = dict(proxy)

    def back_to_list(self):
        self.form_mode = "list"
        self.editing_proxy_id = None
        self.editing_proxy = {}

    def set_test_result(self, proxy_id: str, status: str):
        self.test_results = {**self.test_results, proxy_id: status}
