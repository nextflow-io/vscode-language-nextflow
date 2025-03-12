# Nextflow extension for Visual Studio Code

VS Code extension for [Nextflow](https://www.nextflow.io/) that provides language support for scripts and config files, using the [Nextflow language server](https://github.com/nextflow-io/language-server).

Read the blog posts ([part 1](https://seqera.io/blog/modernizing-nextflow-developer-experience/), [part 2](https://seqera.io/blog/modernizing-nextflow-developer-experience-part-2/)) and the [docs](https://nextflow.io/docs/latest/vscode.html) for more information.

See also:

- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=nextflow.nextflow)
- [Open VSX Registry](https://www.open-vsx.org/extension/nextflow/nextflow)

## Features

### Nextflow language server

![nextflow vscode extension](images/vscode-nextflow.png)

The extension uses the [Nextflow langauge server](https://github.com/nextflow-io/language-server) to provide code intelligence:

- Syntax highlighting
- Code navigation (outline, go to definition, find references)
- Code completion
- Diagnostics (errors, warnings)
- Formatting
- Hover hints
- Rename
- DAG preview for workflows

### Copilot for Nextflow

![VS Code Copilot Extension](images/chat-usage.gif)

The extension includes a GitHub Copilot extension specifically trained for Nextflow development:

- Full support for Nextflow DSL2 syntax
- Context-aware assistance that understands your specific codebase
- Generates code following Nextflow best practices and patterns
- Works with any LLM you have access to (e.g. OpenAI, Anthropic, Google) through Github Copilot (Sonnet 3.5 is recommended by the Seqera team)
- Special commands:
  - `/dsl2` - Convert DSL1 scripts to DSL2
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

- https://manual.macromates.com/en/language_grammars
- https://code.visualstudio.com/docs/extensions/publish-extension
- https://code.visualstudio.com/docs/extensions/yocode
- https://code.visualstudio.com/docs/extensionAPI/extension-manifest

**Enjoy!**

## Telemetry Notice

This extension collects very limited usage data to help us understand which features are most valuable and improve your overall experience. Specifically:

- Commands: When you invoke a command provided by this extension (e.g. openChat, writeTest, etc.), we record that command usage event.
- File Opens: We track when you open a Nextflow file—but not the file name or its contents.
- Environment Info: We collect the operating system type, your VS Code version, and the extension version to diagnose issues and guide future development.
- No Chat Content: We do not capture any text you type into the chat panel.
- No Personal Info: We do not record project names, file paths, or any personally identifiable information.

Respecting User Privacy

- If you have telemetry disabled in your VS Code settings (`"telemetry.enableTelemetry": false`), then no usage data is collected.
- We never collect or transmit your code, chat messages, or other sensitive data.

Our goal is simply to improve the extension by understanding which features are used and on which platforms. For any questions or concerns, feel free to open an issue in our repository. We appreciate your trust and feedback!
