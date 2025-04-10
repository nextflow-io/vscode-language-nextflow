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
(cd webview-ui ; npm install)
npm install
```

If you need to edit the language server, clone the repository and build it:

```bash
git clone https://github.com/nextflow-io/language-server
make server
```

Finally, in VS Code or Cursor, press `F5` to build the extension and launch a new workspace with the extension loaded (alternatively you can run `Debug: Start Debugging` from the command palette).

You will be prompted to enter a path to your Nextflow workspace, which defaults to `../test-workspace` relative to the project directory.

Alternatively, you can run the Webview UI with live reload:

```bash
npm run ui-watch
```

## Publishing

1. Update the extension version number in `package.json`.
2. Update the changelog in `CHANGELOG.md`.
3. Run the "Publish Extension" action to publish the extension to the Visual Studio Marketplace and Open VSX Registry.

## Additional resources

- https://manual.macromates.com/en/language_grammars
- https://code.visualstudio.com/docs/extensions/publish-extension
- https://code.visualstudio.com/docs/extensions/yocode
- https://code.visualstudio.com/docs/extensionAPI/extension-manifest
