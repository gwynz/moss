import asyncio
import flet as ft

from mosses.profiles.index._proxy_test import test_proxy_tcp


async def test_proxy_connectivity(proxy_dict: dict) -> tuple[bool, str]:
    """Helper for the Proxy Manager pool list."""
    return await test_proxy_tcp(
        proxy_dict.get("proxy_type", "HTTP"),
        proxy_dict.get("proxy_host", ""),
        int(proxy_dict.get("proxy_port", 0))
    )
