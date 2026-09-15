# Contributing

Contributions are welcome. Fork [this repository](https://github.com/nextflow-io/vscode-language-nextflow) and open a pull request to propose changes. Consider submitting an [issue](https://github.com/nextflow-io/vscode-language-nextflow/issues/new) to discuss any proposed changes with the maintainers before submitting a pull request.

## Development

Clone this repository:

```bash
git clone https://github.com/nextflow-io/vscode-language-nextflow
cd vscode-language-nextflow
```

Install dependencies:

```bash
npm install
```

If you need to edit the language server, clone the repository and build it:

```bash
git clone https://github.com/nextflow-io/language-server ../language-server
make server
```

Finally, in VS Code or Cursor, press `F5` to build the extension and launch a new workspace with the extension loaded (alternatively you can run `Debug: Start Debugging` from the command palette).

Alternatively, you can build and run the extension from the command line:

```bash
make test
```

## Project structure

The extension is two programs that run in different places and talk to each other
over `postMessage`.

```
src/
  extension.ts        entry point
  auth/               Seqera Cloud login
  languageServer/     language server client
  nextflowLog/        .nextflow.log highlighting and filtering
  telemetry/
  webview/            extension side of the webviews
  shared/             the only code both sides import
  ui/                 the webviews themselves, a React app
```

Everything outside `src/ui` runs in the extension host, which is a Node process
with the `vscode` module available. `src/ui` runs in a sandboxed browser iframe
where it is not. That boundary is the reason for most of what follows.

`src/shared` holds what both sides need, currently the Seqera URL constants and
the Platform API types. It must stay free of both `vscode` and Node, since it is
compiled for two runtimes. The UI reaches it through the `@shared/*` alias, which
is declared twice, in `vite.config.mts` for bundling and in `tsconfig.ui.json` for
type checking. Both have to agree.

A webview cannot import `vscode` no matter how the project is arranged. To reach
the extension host, including for logging, post a message and handle it in
`WebviewProvider`.

## How the build works

Two bundlers, because there are two targets:

- **esbuild** (`esbuild.js`) bundles `src/extension.ts` to CommonJS for Node, with
  `vscode` left external because the runtime injects it.
- **Vite** (`vite.config.mts`) builds `src/ui` for the browser, emitting the HTML,
  hashed assets and the font into a top-level `dist/`.

Their inputs never overlap, so they do not conflict. Nothing imports `src/ui` from
the extension side, so esbuild never walks into it.

`npm run package` runs both, assembles everything into `build/`, and runs `vsce`
from in there. That last part is worth knowing: **what ships is the copy list in
`esbuild.js`**, not a `.vscodeignore`. Adding a file to the extension
means adding it to that list.

Type checking is also split, and `npm run check-types` runs both halves:

| Config             | Covers                      | Notes                                  |
| ------------------ | --------------------------- | -------------------------------------- |
| `tsconfig.json`    | `src`, excluding `src/ui`   | No DOM lib. The exclusion is required. |
| `tsconfig.ui.json` | `src/ui`, `vite.config.mts` | DOM lib, stricter unused-symbol rules. |

`src/shared` is compiled by both, so it has to satisfy the stricter of each
setting. An error there may be reported by the config you are not editing.

### Scripts

| Command               | What it does                                                   |
| --------------------- | -------------------------------------------------------------- |
| `npm run compile`     | Type check, build the UI, bundle the extension into `build/`.  |
| `npm run package`     | The above, minified, plus a `.vsix`.                           |
| `npm run check-types` | Both tsconfigs.                                                |
| `npm run lint`        | ESLint over `src/ui`.                                          |
| `npm run ui-dev`      | Vite dev server for the UI, on its own with no extension host. |
| `npm run test:syntax` | Syntax highlighting tests for the TextMate grammars.           |

`npm run ui-watch` rebuilds `dist/` but does not copy into `build/`, so a running
Extension Development Host will not pick the changes up. Use `npm run compile` and
restart.

## Publishing

1. Update the extension version number in `package.json`.
2. Update the changelog in `CHANGELOG.md`.
3. Make a release commit e.g. "Release 1.0.0".
4. Create a release in GitHub e.g. "v1.0.0".
5. Run the "Publish Extension" action to publish the extension to the Visual Studio Marketplace and Open VSX Registry.

## Additional resources

- https://manual.macromates.com/en/language_grammars
- https://code.visualstudio.com/docs/extensions/publish-extension
- https://code.visualstudio.com/docs/extensions/yocode
- https://code.visualstudio.com/docs/extensionAPI/extension-manifest
