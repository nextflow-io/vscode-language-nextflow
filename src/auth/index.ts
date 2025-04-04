import { authentication, commands, Uri, window } from "vscode";
const { getSession, onDidChangeSessions } = authentication;

import getAccessToken from "./getAccessToken";
import AuthProvider from "./AuthProvider";
import type { ExtensionContext } from "vscode";
import { PLATFORM_URL } from "../constants";

async function activateAuth(
  context: ExtensionContext,
  authProvider: AuthProvider
) {
  const handleLogin = async () =>
    await getSession("auth0", [], {
      forceNewSession: true
    });

  const handleSessionChange = async () => showWelcomeMessage();

  const handleLogout = async () => {
    const sessions = await authProvider.getSessions();
    const session = sessions[0];
    if (!session) return;
    await authProvider.removeSession(session.id);
    commands.executeCommand("setContext", "nextflow.isLoggedIn", false);
  };

  const goToCloud = () => {
    commands.executeCommand("vscode.open", Uri.parse(PLATFORM_URL));
  };

  const { registerCommand } = commands;
  const loginCommand = registerCommand("nextflow.login", handleLogin);
  const logoutCommand = registerCommand("nextflow.logout", handleLogout);
  const goToCloudCommand = registerCommand("nextflow.goToCloud", goToCloud);
  const sessionChange = onDidChangeSessions(handleSessionChange);

  context.subscriptions.push(authProvider);
  context.subscriptions.push(loginCommand);
  context.subscriptions.push(logoutCommand);
  context.subscriptions.push(sessionChange);
  context.subscriptions.push(goToCloudCommand);
}

const showWelcomeMessage = async () => {
  const session = await getSession("auth0", []);
  let msg = "Logged out from Seqera Platform";
  if (session) msg = `Logged in to Seqera Platform: ${session.account.label}`;
  commands.executeCommand("setContext", "nextflow.isLoggedIn", true);
  window.showInformationMessage(msg);
};

export { activateAuth, AuthProvider, getAccessToken };
