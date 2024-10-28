# Nextflow extension for Visual Studio Code

This extension provides [Nextflow](https://www.nextflow.io/) language support for Visual Studio Code. 

## Features

It provides syntax highlighting for the Nextflow language and quick shortcuts for common code snippets.

![Nextflow syntax highlighting](images/vscode-nextflow.png)

## Local development 

Clone the project repository: 

```bash
git clone https://github.com/nextflow-io/vscode-language-nextflow
```

Change to the project directory and launch VS Code: 

```bash
cd vscode-language-nextflow
code .
```

Build the extension:

```bash
./gradlew build
```

You can press `F5` to launch a new VS Code window with the extension loaded. Alternatively, you can execute "Extension: Install from VSIX..." from the command pallete to install the extension into your environment (reload required).

## Publishing 

Update the extension version number in the `package.json` file, then use the command: 

```bash
vsce publish
```

Refer to the VS Code [documentation](https://code.visualstudio.com/docs/extensions/publish-extension) for more information.

## Contribution 

Contributions are greatly appreciated. Please fork [this repository](https://github.com/nextflow-io/vscode-language-nextflow), open a pull request to add snippets, make grammar tweaks, fix issues, etc.

## Useful links 

* https://manual.macromates.com/en/language_grammars
* https://code.visualstudio.com/docs/extensions/yocode
* https://code.visualstudio.com/docs/extensionAPI/extension-manifest
* https://marketplace.visualstudio.com/items?itemName=nextflow.nextflow

**Enjoy!**
