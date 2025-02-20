import * as vscode from "vscode";
import showPage from "./utils/showPage";

export function activateReadme(context: vscode.ExtensionContext) {
  // Show on activation
  if (vscode.env.appName.includes("Cursor")) {
    showPage("readme-cursor.md");
  } else {
    showPage("readme-vscode.md");
  }

  // Add command to show the readme
  const showReadme = vscode.commands.registerCommand(
    "nextflow.showReadme",
    () => {
      if (vscode.env.appName.includes("Cursor")) {
        showPage("readme-cursor.md");
      } else {
        showPage("readme-vscode.md");
      }
    }
  );

  context.subscriptions.push(showReadme);
}

export default { activateReadme };
