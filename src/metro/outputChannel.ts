import * as vscode from "vscode";

const CHANNEL_NAME = "Nextflow Metro";

let outputChannel: vscode.OutputChannel | undefined;

export function getMetroOutputChannel(): vscode.OutputChannel {
  if (!outputChannel) {
    outputChannel = vscode.window.createOutputChannel(CHANNEL_NAME);
  }
  return outputChannel;
}

export function logMetroMessage(message: string): void {
  getMetroOutputChannel().appendLine(message);
}
