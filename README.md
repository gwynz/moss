<p align="center">
  <img src="src/assets/logo.png" width="150" alt="Moss Logo">
</p>

<h1 align="center">Moss</h1>

<p align="center">
  <strong>A powerful management tool for antidetect browsers, proxies, and digital identities.</strong>
</p>

---

Moss is a professional Flet-based interface designed to centralize the management of browser profiles, proxies, and Web3 wallets. It provides a secure and organized environment for automation workflows and digital identity management.

## 🚀 Key Features

- **Antidetect Browser Management**: Configure and launch browser profiles with unique digital footprints using multiple engines including **Camoufox**, **ZenDriver**, and **PyDoll**.
- **Multi-Engine Support**: Choose the best core for your needs (Chrome vs. Firefox, Playwright-based vs. Native).
- **Proxy Management**: Seamlessly manage, verify, and assign proxies to specific profiles.
- **Web3 Wallet Management**: Integrated multi-wallet management with pre-configured extensions support.
- **Cross-Platform**: Built with Flet (Flutter), providing a consistent native experience across Windows, macOS, Linux, and Android.

## 🌐 Browser Engines Comparison

Moss supports various browser engines to suit different automation and privacy needs.

| Engine | Core | Based on Playwright? | Integrated Extensions | Integrated Proxy | Downloaded Browser? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Camoufox** | Firefox | **Yes** | Yes (Automatic Added) | Yes (Automatic) | `Enabled` |
| **ZenDriver** | Chrome | **No** | Manual | Manual | `Enabled` |
| **PyDoll** | Chrome | **No** | Yes (Automatic Added) | Yes (Automatic Added) | `Disabled` |
| **Playwright** | Chromium | **Yes** | Yes (Automatic Added) | Yes (Automatic) | `Enabled` |
| **NoDriver** | Chrome | **No** | Manual (Omega) | Yes | `Disabled` |
| **Cloak** | Chrome | **Plan** | Coming Soon | Coming Soon | `Disabled` |

### Usage Notes:
*   **Camoufox**: Best for high-fidelity fingerprinting. It automatically downloads its own patched Firefox binary (`Enabled`).
*   **NoDriver**: Uses an undetected approach without a Webdriver. It supports integrated proxies and uses the system Chrome (`Disabled`). For complex extension management, it is recommended to use manual settings or extensions like **Proxy SwitchyOmega**.
*   **ZenDriver**: Powerful Automation engine. It handles its own browser download (`Enabled`), but currently requires manual setup for extensions and proxies.
*   **Playwright**: Standard automation engine. Downloads Chromium via Playwright command (`Enabled`).
*   **PyDoll**: Lightweight Chrome-based engine. Uses system or manually provided browser binaries (`Disabled`).
*   **Cloak**: Currently in development focusing on advanced Linux-based isolation (`Disabled`).

## 🚀 Installation & Running

<br>

## ⚙️ Technical Architecture

Moss is built using a modern, reactive architecture inspired by React, implemented in Python.

- **Frontend Framework**: [Flet](https://flet.dev) (built on Flutter)
- **Browser Engine**: [Camoufox](https://github.com/ichndata/camoufox) (Anti-detect browser for high-fidelity fingerprinting)
- **Component Model**: Functional components with React-inspired hooks (`use_state`, `use_memo`, `use_context`).
- **State Management**: Observable state patterns using decorators and dataclasses.
- **Dependency Management**: [uv](https://github.com/astral-sh/uv) (for ultra-fast environments) and [Poetry](https://python-poetry.org/).
- **Dynamic Discovery**: Automatic plugin/module discovery using Python's `importlib`.

### Tech Stack

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)
![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)

---

## 🛠️ Installation & Running

### Using [uv](https://github.com/astral-sh/uv) (Recommended)

Run as a desktop application:
```bash
uv run flet run
```

Run as a web application:
```bash
uv run flet run --web
```

### Using Poetry

Install dependencies:
```bash
poetry install
```

Run implementation:
```bash
poetry run flet run
```

## 📦 Building for Distribution

| Platform | Command |
| :--- | :--- |
| **Windows** | `flet build windows -v` |
| **Android** | `flet build apk -v` |
| **macOS** | `flet build macos -v` |
| **Linux** | `flet build linux -v` |

## 🔮 Roadmap

- [ ] **AI Agent Integration**: Create and manage AI agents for browser-based automation.
- [ ] **Advanced Task Scheduling**: Orchestrate complex workflows with precise timing.
- [ ] **Scripting Engine**: Custom Python script execution within isolated browser environments.
- [ ] **Wallet Extension Support**: Deep integration with MetaMask and other browser extensions.

---

<p align="center">
  Built with ❤️ using <a href="https://flet.dev">Flet</a> and <a href="https://python.org">Python</a>.
</p>
