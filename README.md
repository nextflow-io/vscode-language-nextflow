# Nextflow extension for Visual Studio Code

VS Code extension for [Nextflow](https://www.nextflow.io/) that provides language support for scripts and config files, using the [Nextflow language server](https://github.com/nextflow-io/language-server).

![nextflow vscode extension](images/vscode-nextflow.png)

Read the blog posts ([part 1](https://seqera.io/blog/modernizing-nextflow-developer-experience/), [part 2](https://seqera.io/blog/modernizing-nextflow-developer-experience-part-2/)) and the [docs](https://nextflow.io/docs/latest/vscode.html) for more information.

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

Note: Java 1.8 is legacy nomenclature for Java 8 (not to confused with Java 18). https://www.oracle.com/java/technologies/javase/jdk8-naming.html

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

Otherwise, you can simply download a language server release into the following subdirectory:

```bash
mkdir -p language-server/build/libs
wget -P language-server/build/libs https://github.com/nextflow-io/language-server/releases/download/$VERSION/language-server-all.jar
```

Finally, press `F5` to build the extension and launch a new VS Code window with the extension loaded.

## Publishing

1. Update the extension version number in `package.json`.
2. Update the changelog in `CHANGELOG.md`.
3. Run the "Deploy Extension" action to publish the extension to the VSCode marketplace and Open VSX.

## Contributing

Contributions are welcome. Feel free to fork [this repository](https://github.com/nextflow-io/vscode-language-nextflow) and open a pull request to propose changes.

## Useful links

* https://manual.macromates.com/en/language_grammars
* https://code.visualstudio.com/docs/extensions/publish-extension
* https://code.visualstudio.com/docs/extensions/yocode
* https://code.visualstudio.com/docs/extensionAPI/extension-manifest

**Enjoy!**
