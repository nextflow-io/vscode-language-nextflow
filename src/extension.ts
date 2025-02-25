import * as vscode from "vscode";
import { activateChatbot } from "./activateChatbot";
import {
  activateLanguageServer,
  stopLanguageServer,
} from "./activateLanguageServer";
import { activateReadme } from "./activateReadme";

export function activate(context: vscode.ExtensionContext) {
  activateReadme(context);
  activateChatbot(context);
  activateLanguageServer(context);
}

export function deactivate(): Thenable<void> | undefined {
  return stopLanguageServer();
}
