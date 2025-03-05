import * as vscode from "vscode";
import startDeviceFlow from "./auth/startDeviceFlow";
import fetchUserInfo from "./tower/fetchUserInfo";
import { varNames } from "./auth/constants";

export async function activateAuth(context: vscode.ExtensionContext) {
  console.log("🟢 Seqera: Activating Auth");

  context.secrets.onDidChange(async (e) => {
    if (e.key === varNames.accessToken) {
      const token = await context.secrets.get(varNames.accessToken);
      if (!token) return;
      const userInfo = await fetchUserInfo(context, token);
    }
  });

  const loginCmd = vscode.commands.registerCommand("nextflow.login", () => {
    startDeviceFlow(context);
  });

  context.subscriptions.push(loginCmd);
}
