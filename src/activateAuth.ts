import { authentication, commands, window } from "vscode";

import AuthProvider from "./auth/AuthProvider";
import type { ExtensionContext } from "vscode";

export async function activateAuth(context: ExtensionContext) {
  const authProvider = new AuthProvider(context);

  const handleLogin = async () => {
    const session = await authentication.getSession("auth0", [], {
      createIfNone: true
    });
    console.log("🟣 handleLogin", session);
  };

  const handleSessionChange = async () => showWelcomeMessage();

  const handleLogout = async () => {
    const session = await authentication.getSession("auth0", []);
    console.log("🟣 handleLogout", session);
    if (!session) return;
    await authProvider.removeSession(session.id);
  };

  const loginCommand = commands.registerCommand("nextflow.login", handleLogin);

  const logoutCommand = commands.registerCommand(
    "nextflow.logout",
    handleLogout
  );

  const sessionChange = authentication.onDidChangeSessions(handleSessionChange);

  context.subscriptions.push(authProvider);
  context.subscriptions.push(loginCommand);
  context.subscriptions.push(logoutCommand);
  context.subscriptions.push(sessionChange);
}

const showWelcomeMessage = async () => {
  const session = await authentication.getSession("auth0", []);
  let msg = "Logged out from Seqera Platform";
  if (session) msg = `Logged in to Seqera Platform: ${session.account.label}`;
  window.showInformationMessage(msg);
};
