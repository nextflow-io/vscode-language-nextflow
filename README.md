# Nextflow extension for Visual Studio Code

VS Code extension for [Nextflow](https://www.nextflow.io/) that provides language support for scripts and config files, using the [Nextflow language server](https://github.com/nextflow-io/language-server).

![nextflow vscode extension](images/vscode-nextflow.png)

Read the blog posts ([part 1](https://seqera.io/blog/modernizing-nextflow-developer-experience/), [part 2](https://seqera.io/blog/modernizing-nextflow-developer-experience-part-2/)) and the [docs](https://nextflow.io/docs/latest/vscode.html) for more information.

See also:

- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=nextflow.nextflow)
- [Open VSX Registry](https://www.open-vsx.org/extension/nextflow/nextflow)

## Features

- Syntax highlighting
- Code navigation (outline, go to definition, find references)
- Code completion
- Diagnostics (errors, warnings)
- Formatting
- Hover hints
- Rename
- DAG preview for workflows
- Chat with Seqera AI

### VS Code Copilot Extension Features

![VS Code Copilot Extension](https://cdn.sanity.io/images/o2y1bt2g/seqera/ce3b8ba1fe529bff2c836e2a243d6a5f57d57d84-1680x1080.gif)

The extension includes an extension to GitHub Copilot specifically trained for Nextflow development:

- Full support for Nextflow DSL2 grammar and syntax
- Context-aware assistance that understands your specific codebase
- Generates code following Nextflow best practices and patterns
- Works with any LLM you have access to, e.g. OpenAI, Anthropic, Google through your Github Copilot. (Sonnet 3.5 is recommended by the Seqera team)
- Special commands:
  - `/dsl2` - Helps convert DSL1 scripts to DSL2 format
  - `/nf-test` - Assists in generating nf-test test cases and improving test coverage

## Requirements

The language server requires Java 17 or later.

## Development

Clone this repository:

```bash
git clone https://github.com/nextflow-io/vscode-language-nextflow
cd vscode-language-nextflow
```

If you need to edit the language server, clone the repository and build it:

```bash
git clone https://github.com/nextflow-io/language-server
make server
```

Finally, press `F5` to build the extension and launch a new VS Code window with the extension loaded.

You will be prompted to enter a path to your Nextflow workspace, which defaults to `../test-workspace` relative to the project directory.

## Publishing

1. Update the extension version number in `package.json`.
2. Update the changelog in `CHANGELOG.md`.
3. Run the "Publish Extension" action to publish the extension to the VSCode marketplace and Open VSX.

## Contributing

Contributions are welcome. Feel free to fork [this repository](https://github.com/nextflow-io/vscode-language-nextflow) and open a pull request to propose changes.

## Useful links

* https://manual.macromates.com/en/language_grammars
* https://code.visualstudio.com/docs/extensions/publish-extension
* https://code.visualstudio.com/docs/extensions/yocode
* https://code.visualstudio.com/docs/extensionAPI/extension-manifest

**Enjoy!**
