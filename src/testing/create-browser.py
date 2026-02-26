import asyncio

from browserforge.fingerprints import Screen


async def main():
    from camoufox.async_api import AsyncCamoufox
    async with AsyncCamoufox(
        geoip=True,
        proxy={
            'server':  f"{'http'}://{"104.232.209.191"}:{"6149"}",
            'username': 'dhispsox',
            'password': '6tsbqnd7d3fo'
        }
    ) as browser:
        page = await browser.new_page()
        await page.goto("https://www.browserscan.net")

        await asyncio.sleep(100)


if __name__ == "__main__":
    asyncio.run(main())
