# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

VS Code extension that provides language support for Nextflow scripts (`.nf`, `.nf.test`) and Nextflow config files (`.config`). It wraps the separate [nextflow-io/language-server](https://github.com/nextflow-io/language-server) (a Java LSP server) and adds custom webview-based views ("Project" and "Seqera Cloud") rendered with React.

Published as `nextflow.nextflow` on the VS Code Marketplace and Open VSX Registry.

## Repo layout — three things in one tree

1. **Extension host code** (`src/`, TypeScript, bundled with esbuild to `build/extension.js`). Runs in the VS Code Node.js host.
2. **Webview UI** (`webview-ui/`, React 19 + Vite). A separate npm project that builds to `webview-ui/dist/` and is loaded as static assets into VS Code webviews.
3. **TextMate grammars and language config** (`syntaxes/`, `language-configuration.json`) for syntax highlighting — independent of the language server.

The Java language server JAR is **not** in this repo. It is downloaded at runtime from GitHub releases into `~/.nextflow/lsp/<version>/` (see `src/languageServer/utils/fetchLanguageServer.ts`). A locally built JAR at `language-server/build/libs/language-server-all.jar` is bundled into `build/bin/` when building non-production (see `esbuild.js`).

## Common commands

```bash
# First-time setup (two separate npm projects)
(cd webview-ui ; npm install)
npm install

# Type-check + build webview-ui + bundle extension -> build/
npm run compile

# Type-check only
npm run check-types

# Webview UI live-reload during development
npm run ui-watch    # rebuilds on change
npm run ui-dev      # standalone Vite dev server (no VS Code)

# Production package -> build/nextflow.vsix
npm run package

# Full release flow (clean + build local LS + package)
make all

# Install built VSIX into local VS Code
make install
```

To debug the extension: open in VS Code and press **F5** (uses `.vscode/launch.json`, runs the `npm: compile` task and launches an Extension Development Host pointed at `build/`).

To develop against a local language server: clone `nextflow-io/language-server` into `./language-server/` and run `make server` — `esbuild.js` will pick up the JAR and bundle it into `build/bin/` in non-production builds, and `fetchLanguageServer.ts` prefers a JAR at `bin/language-server-all.jar` over downloading.

No test suite exists in this repo. Verification is manual via the Extension Development Host.

## Architecture notes

**Entry point** is `src/extension.ts`. `activate()` wires four subsystems in order: telemetry → auth → language server → webviews. Each subsystem's `activate*` function registers its own commands and event listeners.

**Language server lifecycle** (`src/languageServer/index.ts`): finds Java (≥17 required), resolves/downloads the LSP JAR matching the `nextflow.languageVersion` setting, starts a `LanguageClient` from `vscode-languageclient`. Settings changes to `java.home` or `languageVersion` trigger a restart. The client communicates with the server using LSP plus custom commands like `nextflow.server.previewDag`, `nextflow.server.convertPipelineToTyped`, `nextflow.server.convertScriptToTyped`.

**DAG preview** is rendered by asking the language server for Mermaid source (`nextflow.server.previewDag`), then opening a webview panel using a bundled `mermaid.min.js` (copied from `node_modules/mermaid/dist/` by esbuild) — this keeps DAG previews working offline.

**Webviews** (`src/webview/`): two webview-based views (`project`, `seqeraCloud`) plus one tree view (`resources`). Both webviews load the **same** built React app from `webview-ui/dist/`; the `WebviewProvider` injects `window.initialData = { viewID: "..." }` into the HTML so the React app can branch (`src/webview/WebviewProvider/index.ts` → `webview-ui/src/Layout/index.tsx`). Extension ↔ webview communication is via `postMessage` — extension dispatches on `command` strings (`fetchRuns`, `fetchPipelines`, `createTest`, `getContainer`, etc.); webview replies arrive as message events that `webview-ui/src/Context/index.tsx` fans out into React state.

**Auth** (`src/auth/`): registers a custom VS Code `AuthenticationProvider` for Auth0/Seqera Cloud. `getAccessToken` reads the stored session; `jwtExpired` checks expiry. Used by Seqera Cloud webview features (run history, pipelines, datasets, compute envs, Wave container builds, nf-test generation).

**Telemetry** (`src/telemetry/`): opt-in PostHog tracking, prompted on first run. Gated by both the VS Code global `telemetry.telemetryLevel` and the extension's `nextflow.telemetry.enabled`. Tracks command invocations, file-type opens, and environment info — never file contents or paths. See the README "Telemetry notice" section for the user-facing description.

## Conventions

- Prettier with `"trailingComma": "none"` (`.prettierrc`).
- TypeScript strict mode, target es2020, commonjs modules. The root `tsconfig.json` covers `src/` only; `webview-ui/` has its own TS config.
- The two npm projects are intentionally separate: do not hoist `webview-ui` deps into the root `package.json`.
- Extension code must not import from `webview-ui/` (it's a separate bundle loaded as static assets).

## Release process

See `CONTRIBUTING.md`: bump `package.json` version, update `CHANGELOG.md`, commit as "Release X.Y.Z", create a GitHub release `vX.Y.Z`, then run the "Publish Extension" GitHub Action which pushes to both the VS Code Marketplace and Open VSX Registry.
