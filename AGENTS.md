# Olven Studio — Agent Notes

## UI SDK (`@ui-sdk/react` + `@ui-sdk/core`)
Before using or extending UI components in this repository:
- Follow the `ui-sdk` skill if it is installed, and read `node_modules/@ui-sdk/react/docs/llms.txt`.
- To build a new custom primitive, also search `node_modules/@ui-sdk/react/docs/core.md` by heading and read `rendering.md` next to it.
- Import each component from its own entry point (e.g., `@ui-sdk/react/dialog`, `@ui-sdk/react/drawer`, `@ui-sdk/react/tabs`, `@ui-sdk/react/button`, `@ui-sdk/react/toast`). There is no root barrel import.
- Keep `@layer ui-sdk;` declared above `@import "tailwindcss";` in `src/app/globals.css`.

## Design System (Paper — Olven)
All design tokens (`--color-ink`, `--color-bone`, `--color-stone`, `--color-line`, `--color-furnace`, typography, tracking, spacing, zero radius) are defined in `src/app/globals.css` and mirrored to ShadCN semantic tokens.
Official copy reference lives in `copy.md`.
