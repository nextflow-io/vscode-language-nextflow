import * as vscode from "vscode";

import { activateChatbot } from "./chatbot";
import { activateLanguageServer, stopLanguageServer } from "./languageServer";
import { activateWelcomePage } from "./welcomePage";
import { activateTelemetry, deactivateTelemetry } from "./telemetry";
import { activateWebview } from "./webview";
import { activateAuth, AuthProvider } from "./auth";
import { ResourcesProvider } from "./webview/ResourcesProvider";

export function activate(context: vscode.ExtensionContext) {
  const trackEvent = activateTelemetry(context);
  const authProvider = new AuthProvider(context);
  activateAuth(context, authProvider);
  activateChatbot(context, trackEvent);
  activateLanguageServer(context, trackEvent);
  activateWebview(context, authProvider);
  activateWelcomePage(context);

  // Register Resources TreeView
  const resourcesProvider = new ResourcesProvider();
  vscode.window.registerTreeDataProvider('resources', resourcesProvider);
  
  // Register command to open resource URLs
  context.subscriptions.push(
    vscode.commands.registerCommand('nextflow.seqera.openResource', (url: string) => {
      vscode.env.openExternal(vscode.Uri.parse(url));
    })
  );
}

export function deactivate(
  context: vscode.ExtensionContext
): Promise<[void, void]> {
  return Promise.all([deactivateTelemetry(context), stopLanguageServer()]);
}
