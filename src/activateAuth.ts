import { authentication, commands, window } from "vscode";
const { getSession, onDidChangeSessions } = authentication;

import AuthProvider from "./AuthProvider";

import type { ExtensionContext } from "vscode";

export async function activateAuth(context: ExtensionContext) {
  const authProvider = new AuthProvider(context);

  const handleLogin = async () =>
    await getSession("auth0", [], {
      forceNewSession: true
    });

  const handleSessionChange = async () => showWelcomeMessage();

  const handleLogout = async () => {
    const session = await getSession("auth0", []);
    if (!session) return;
    await authProvider.removeSession(session.id);
  };

  const { registerCommand } = commands;
  const loginCommand = registerCommand("nextflow.login", handleLogin);
  const logoutCommand = registerCommand("nextflow.logout", handleLogout);
  const sessionChange = onDidChangeSessions(handleSessionChange);

  context.subscriptions.push(authProvider);
  context.subscriptions.push(loginCommand);
  context.subscriptions.push(logoutCommand);
  context.subscriptions.push(sessionChange);
}

const showWelcomeMessage = async () => {
  const session = await getSession("auth0", []);
  let msg = "Logged out from Seqera Platform";
  if (session) msg = `Logged in to Seqera Platform: ${session.account.label}`;
  window.showInformationMessage(msg);
};
