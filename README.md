# Moss

Moss is a powerful Flet-based management tool for antidetect browsers, proxies, and web3 wallets. It provides a centralized interface to manage your digital identities and automation workflows.

## Features

- **Antidetect Browser Management**: Configure and launch browser profiles with unique digital fingerprints.
- **Proxy Management**: Seamlessly manage and assign proxies to different browser profiles.
- **Web3 Wallet Management**: Securely manage multiple web3 wallets.
- **Wallet Integration**: Connect wallets to MetaMask browser extensions (coming soon).

## Coming Soon

- **Agent Creation**: Create AI agents to perform automated tasks within the browser.
- **Task Scheduling**: Schedule automated browser tasks.
- **Script Execution**: Run custom scripts directly within the managed browser environments.

## Run the app

### uv (Recommended)

Run as a desktop app:

```bash
uv run flet run
```

Run as a web app:

```bash
uv run flet run --web
```

### Poetry

Install dependencies from `pyproject.toml`:

```bash
poetry install
```

Run as a desktop app:

```bash
poetry run flet run
```

Run as a web app:

```bash
poetry run flet run --web
```

## Build the app

### Android

```bash
flet build apk -v
```

### Windows

```bash
flet build windows -v
```

### macOS

```bash
flet build macos -v
```

### Linux

```bash
flet build linux -v
```
