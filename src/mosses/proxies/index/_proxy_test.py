import asyncio


async def test_proxy_tcp(proxy_type: str, proxy_host: str, proxy_port: int) -> tuple[bool, str]:
    """Core TCP connection test logic."""
    try:
        try:
            _, writer = await asyncio.wait_for(
                asyncio.open_connection(proxy_host, int(proxy_port)),
                timeout=5.0,
            )
            writer.close()
            try:
                await writer.wait_closed()
            except Exception:
                pass
            return True, f"OK — {proxy_type}://{proxy_host}:{proxy_port} reachable"
        except asyncio.TimeoutError:
            return False, "FAIL — Connection timed out"
        except OSError as e:
            return False, f"FAIL — {e}"
    except Exception as e:
        return False, f"Error: {e}"


async def test_proxy_connectivity(proxy_dict: dict) -> tuple[bool, str]:
    """Helper for the Proxy Manager pool list."""
    return await test_proxy_tcp(
        proxy_dict.get("proxy_type", "HTTP"),
        proxy_dict.get("proxy_host", ""),
        int(proxy_dict.get("proxy_port", 0))
    )
