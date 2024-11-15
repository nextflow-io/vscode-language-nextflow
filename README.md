# Nextflow extension for Visual Studio Code

VS Code extension for [Nextflow](https://www.nextflow.io/) that provides language support for scripts and config files, using the [Nextflow language server](https://github.com/nextflow-io/language-server).

![nextflow vscode extension](images/vscode-nextflow.png)

Read the [blog post](https://seqera.io/blog/modernizing-nextflow-developer-experience/) and the [docs](https://nextflow.io/docs/latest/vscode.html) for more information.

See also:

- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=nextflow.nextflow)
- [Open VSX Registry](https://www.open-vsx.org/extension/nextflow/nextflow)

## Features

The following language features are currently supported:

- syntax highlighting
- code navigation (outline, go to definition, find references)
- completion
- diagnostics (errors, warnings)
- formatting
- hover hints
- rename
- DAG preview for workflows

## Requirements

The language server requires Java 17 or later.

## Development

Clone this repository:

```bash
git clone https://github.com/nextflow-io/vscode-language-nextflow
```

Clone the language server into this repository:

```bash
cd vscode-language-nextflow
git clone https://github.com/nextflow-io/language-server
```

Build the extension:

```bash
./gradlew build
```

From VS Code, you can press `F5` to launch a new VS Code window with the extension loaded.

Alternatively, you can install the extension into your environment (reload required):

```bash
./gradlew install
```

## Publishing

Update the extension version number in `package.json` and `.vscode/launch.json`, then run the "Deploy Extension" action to publish the extension to the VSCode marketplace and Open VSX.

## Contributing

Contributions are welcome. Feel free to fork [this repository](https://github.com/nextflow-io/vscode-language-nextflow) and open a pull request to propose changes.

## Useful links

* https://manual.macromates.com/en/language_grammars
* https://code.visualstudio.com/docs/extensions/publish-extension
* https://code.visualstudio.com/docs/extensions/yocode
* https://code.visualstudio.com/docs/extensionAPI/extension-manifest

**Enjoy!**
