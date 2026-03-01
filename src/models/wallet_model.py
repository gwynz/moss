from dataclasses import dataclass, field
from typing import Optional
import flet as ft


@ft.observable
@dataclass
class WalletManagerModel:
    wallets: list[dict] = field(default_factory=list)
    filtered_wallets: list[dict] = field(default_factory=list)
    form_mode: str = "list"  # "list", "add", "edit"
    editing_wallet_id: Optional[str] = None
    editing_wallet: dict = field(default_factory=dict)
    search_query: str = ""
    error_message: str = ""
    is_loading: bool = True
    # Set of wallet IDs with revealed seeds
    revealed_seeds: set[str] = field(default_factory=set)

    page: int = 1
    page_size: int = 12
    total_pages: int = 1

    def set_wallets(self, wallets: list[dict]):
        self.wallets = wallets
        self.page = 1
        self._apply_filter()

    def set_search(self, query: str):
        self.search_query = query
        self.page = 1
        self._apply_filter()

    def set_page(self, page: int):
        if 1 <= page <= self.total_pages:
            self.page = page

    @property
    def paged_wallets(self):
        start = (self.page - 1) * self.page_size
        end = start + self.page_size
        return self.filtered_wallets[start:end]

    def _apply_filter(self):
        q = self.search_query.lower().strip()
        if not q:
            self.filtered_wallets = list(self.wallets)
        else:
            self.filtered_wallets = [
                w for w in self.wallets
                if q in w.get("name", "").lower()
                or q in w.get("public_address", "").lower()
                or q in w.get("note", "").lower()
            ]

        import math
        self.total_pages = max(1, math.ceil(
            len(self.filtered_wallets) / self.page_size))
        if self.page > self.total_pages:
            self.page = self.total_pages

    def start_add(self):
        self.form_mode = "add"
        self.editing_wallet_id = None
        self.editing_wallet = {
            "name": "",
            "note": "",
            "public_address": "",
            "seed": "",
            "seed_type": "12 words"
        }

    def start_edit(self, wallet: dict):
        self.form_mode = "edit"
        self.editing_wallet_id = wallet["id"]
        self.editing_wallet = dict(wallet)

    def back_to_list(self):
        self.form_mode = "list"
        self.editing_wallet_id = None
        self.editing_wallet = {}

    def toggle_seed_reveal(self, wallet_id: str):
        if wallet_id in self.revealed_seeds:
            self.revealed_seeds.remove(wallet_id)
        else:
            self.revealed_seeds.add(wallet_id)
        self.revealed_seeds = set(self.revealed_seeds)
