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

- **Antidetect Browser Management**: Configure and launch browser profiles with unique digital footprints using the **Camoufox** anti-detect engine.
- **Proxy Management**: Seamlessly manage, verify, and assign proxies to specific profiles.
- **Web3 Wallet Management**: Integrated multi-wallet management for blockchain operations.
- **Cross-Platform**: Built with Flet (Flutter), providing a consistent native experience across Windows, macOS, Linux, and Android.

## 🛠️ Installation & Running

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
