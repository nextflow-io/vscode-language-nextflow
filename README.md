# Nextflow extension for Visual Studio Code

VS Code extension for [Nextflow](https://www.nextflow.io/) that provides language support for scripts and config files, using the [Nextflow language server](https://github.com/nextflow-io/language-server).

Read the blog posts ([part 1](https://seqera.io/blog/modernizing-nextflow-developer-experience/), [part 2](https://seqera.io/blog/modernizing-nextflow-developer-experience-part-2/)) and the [docs](https://nextflow.io/docs/latest/vscode.html) for more information.

See also:

- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=nextflow.nextflow)
- [Open VSX Registry](https://www.open-vsx.org/extension/nextflow/nextflow)

## Features

### Nextflow language server

![nextflow vscode extension](images/vscode-nextflow.png)

The extension uses the [Nextflow language server](https://github.com/nextflow-io/language-server) to provide code intelligence:

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

*Note: for custom Java installations such as conda, you might need to set the `nextflow.java.home` extension setting for the extension to find your Java installation.*

## Configuration

The following settings are available:

- `nextflow.debug`: Enable debug logging and debug information in hover hints.

- `nextflow.errorReportingMode`: Set the desired level of error reporting.

- `nextflow.extendedCompletion`: Provide auto-completions from outside the current script. If an external completion is selected, it will be automatically included into the current script.

- `nextflow.files.exclude`: Configure glob patterns for excluding folders from being searched for Nextflow scripts and configuration files.

- `nextflow.formatting.harshilAlignment`: Use the [Harshil Alignment™️](https://nf-co.re/docs/contributing/code_editors_and_styling/harshil_alignment) when formatting Nextflow scripts and config files.

  *Note: not all rules are supported.*

- `nextflow.formatting.maheshForm`: Place process outputs at the end of the process body when formatting Nextflow scripts.

- `nextflow.java.home`: Specifies the folder path to the JDK. Equivalent to the `JAVA_HOME` environment variable, i.e. the Java binary should be located at `$JAVA_HOME/bin/java`. Use this setting if the extension cannot find Java automatically.

- `nextflow.maxCompletionItems`: The maximum number of auto-completions to suggest at a time.

- `nextflow.targetVersion`: Target version of Nextflow to be used by the language server.

- `nextflow.telemetry.enabled`: Enable usage data to be sent to Seqera. See the [welcome page](./src/welcomePage/welcome-vscode.md) for more information about what we do and do not collect.

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
3. Run the "Publish Extension" action to publish the extension to the VSCode marketplace and Open VSX.

## Contributing

Contributions are welcome. Feel free to fork [this repository](https://github.com/nextflow-io/vscode-language-nextflow) and open a pull request to propose changes.

See also:

- https://manual.macromates.com/en/language_grammars
- https://code.visualstudio.com/docs/extensions/publish-extension
- https://code.visualstudio.com/docs/extensions/yocode
- https://code.visualstudio.com/docs/extensionAPI/extension-manifest

## Telemetry notice

We (Seqera) collect limited usage data through this extension to help us understand which features are most valuable and improve your overall experience.

This telemetry is opt-in and can be enabled or disabled at any time by toggling "Nextflow > Telemetry: Enabled" in your VS Code settings.

**Information we collect**

- Commands: We track when you invoke a command provided by this extension (e.g. openChat, writeTest, etc.), but not the contents of that command (e.g. user-supplied arguments).
- File events: We track when you open a Nextflow file, but not the file name or its contents.
- Environment info: We collect your operating system type, VS Code version, and the extension version to help diagnose issues and guide future development.

**Information we do not collect**

- Chat contents: We do not collect any text you enter into the chat panel.
- File contents: We do not collect any source code, file paths, or any other file contents.
- Personal info: We do not collect project names, directory paths, or any personally identifiable information.

If you have any questions or concerns, feel free to open an issue in our repository. We appreciate your trust and feedback!
