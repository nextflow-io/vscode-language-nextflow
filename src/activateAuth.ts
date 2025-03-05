import * as vscode from "vscode";

import { Auth0AuthenticationProvider } from "./auth/Auth0Provider";

export async function activate(context: vscode.ExtensionContext) {
  showWelcomeMessage();

  const handleLogin = async () => {
    const session = await vscode.authentication.getSession("auth0", [], {
      createIfNone: true
    });
    console.log("🟣 Session", session);
  };

  const handleSessionChange = async () => showWelcomeMessage();

  const loginCommand = vscode.commands.registerCommand(
    "nextflow.login",
    handleLogin
  );

  const sessionChange =
    vscode.authentication.onDidChangeSessions(handleSessionChange);

  const authProvider = new Auth0AuthenticationProvider(context);

  context.subscriptions.push(authProvider);
  context.subscriptions.push(loginCommand);
  context.subscriptions.push(sessionChange);
}

const showWelcomeMessage = async () => {
  const session = await vscode.authentication.getSession("auth0", ["profile"], {
    createIfNone: false
  });
  if (!session) return;
  vscode.window.showInformationMessage(
    `Logged in to Seqera: ${session.account.label}`
  );
};
