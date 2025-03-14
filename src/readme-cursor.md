# Nextflow extension for Cursor

## Available commands

Open the command palette and type `Nextflow` to see the following commands:

- Show Welcome Page
- Chat with Seqera
- Convert to DSL2 with Seqera
- Restart language server
- Stop language server

## Language server

The extension will automatically download a language server release based on the "Nextflow > Target Version" extension setting.

## Seqera AI

Cursor does not currently support custom AI functionality.

To fully leverage Seqera workspaces and [Seqera AI](https://ai.seqera.io/), use the VS Code extension.

### Add the `@Nextflow` command to Cursor Chat

In order for Cursor to have access to the Nextflow docs, perform the following steps:

1. Open the chat window
2. Type `@Docs`
3. Click `+ Add new doc`
4. Paste `https://www.nextflow.io/docs/latest/`

Now you will be able to use the `@Nextflow` command in Cursor Chat. The same can be done for MultiQC or other tools.

## Documentation

Read the [Nextflow documentation](https://nextflow.io/docs/latest/vscode.html) for more information about using the Nextflow extension.

## Telemetry

Telemetry is opt-in and can be enabled or disabled at any time. See our [Telemetry notice](https://github.com/nextflow-io/vscode-language-nextflow#telemetry-notice) on the extension page for more information about what we do and do not collect.
