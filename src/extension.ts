import * as vscode from "vscode";
import activateLanguage, { stopLanguageServer } from "./activateLanguage";
import activateChatbot from "./activateChatbot";

export function activate(context: vscode.ExtensionContext) {
  activateLanguage(context);
  activateChatbot(context);
}

export function deactivate(): Thenable<void> | undefined {
  return stopLanguageServer();
}
