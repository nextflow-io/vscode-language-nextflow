import * as vscode from "vscode";
import showWelcomePage from "./showPage";

async function promptForTelemetryConsent(
  context: vscode.ExtensionContext
): Promise<boolean | undefined> {
  const choice = await vscode.window.showInformationMessage(
    "Nextflow: Allow telemetry to help us improve the extension?",
    "Yes",
    "No",
    "More info"
  );

  if (choice === "Yes") {
    context.globalState.update("telemetryConsent", "accepted");
    return true;
  } else if (choice === "No") {
    context.globalState.update("telemetryConsent", "declined");
    return false;
  } else if (choice === "More info") {
    showWelcomePage();
    return await promptForTelemetryConsent(context);
  } else {
    return undefined;
  }
}

export default promptForTelemetryConsent;
