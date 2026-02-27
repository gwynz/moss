# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run as desktop app
uv run flet run

# Run as web app
uv run flet run --web

# Build for distribution
flet build apk -v      # Android
flet build windows -v  # Windows
flet build macos -v    # macOS
flet build linux -v    # Linux
```

There is no test suite. The app entry point is `src/main.py` and Flet uses `[tool.flet.app] path = "src"` from `pyproject.toml` to locate it.

## Architecture

**Moss** is a professional management tool for antidetect browsers, proxies, and digital identities. It is built as an interactive browser for internal UI modules ("mosses") using Flet's React-inspired component model (hooks, contexts, observable state).

### Core Architecture Layers

1.  **UI Layer (Flet Hooks)**: Functional components with hooks (`use_state`, `use_memo`, `use_context`).
2.  **State Layer (Observable Models)**: `@ft.observable` + `@dataclass` for reactive state (see `src/models/`).
3.  **Service Layer**:
    *   **Browser Engine**: `AsyncCamoufox` with `browserforge` fingerprints (see `src/services/browser_engine.py`).
    *   **Persistence**: Async SQLite (`aiosqlite`) managed in `src/services/db.py`.
    *   **Repositories**: `profile_repo.py` and `proxy_repo.py` handle data logic.
4.  **Plugin System (Mosses)**: Dynamic discovery of modules in `src/mosses/`.

### Component model

Components are plain Python functions decorated with `@ft.component`. They use hooks:
- `ft.use_state` — local state
- `ft.use_callback` — stable callback identity across renders
- `ft.use_memo` — memoized values
- `ft.use_context` — consume a context
- `ft.on_mounted` / `ft.on_updated` — lifecycle effects

State models use `@ft.observable` + `@dataclass` (see `src/models/app_model.py`). Mutating a field on an observable triggers re-render.

Contexts are created with `ft.create_context(default_value)` (see `src/contexts/`). The two app-wide contexts are `RouteContext` and `ThemeContext`.

### Data flow

```
Moss (model)
  └─ scans src/mosses/<group>/<control>/ at startup via importlib
  └─ builds ControlGroup → ControlItem → MossItem tree

App (component)
  └─ AppModel (observable) — holds route, theme_mode, theme_color
  └─ provides RouteContext + ThemeContext
  └─ renders MossView or DiagnosticsView (route == "/__diag")

MossView
  └─ Navigation (sidebar, groups)
  └─ GroupView (grid of controls) or ControlView (list of mosses)
```

### Routing

Routes follow the pattern `/<group>/<control>`, e.g. `/buttons/button`. The `Route` utility (`src/utils/route.py`) parses these into `.group` and `.control` properties. Navigation is done via `app.navigate(new_route)` which calls `page.push_route`.

### Adding a new moss

1. Create `src/mosses/<group>/<control>/` (group must match a `ControlGroup.name` in `src/models/moss.py`).
2. Add `index.py` with module-level `name: str` and optional `description: str`.
3. Add numbered moss files like `01_my_moss.py`. Each must export:
   - `name: str` — display name
   - `moss()` — callable returning a `ft.Control`

The `Moss` model auto-discovers and imports all moss modules at startup using `importlib`. Files prefixed with `_` are ignored. The numeric prefix (`01_`, `02_`, …) controls display order.

### Adding a new control group

Add a `ControlGroup(name=..., label=..., icon=..., selected_icon=...)` entry to the list in `src/models/moss.py` and create the matching `src/mosses/<name>/` directory.
