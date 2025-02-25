import * as vscode from "vscode";
import showPage from "./utils/showPage";

function getReadme(): string {
  return vscode.env.appName.includes("Cursor")
    ? "readme-cursor.md"
    : "readme-vscode.md";
}

export function activateReadme(context: vscode.ExtensionContext) {
  // Add command to show readme
  const showReadme = vscode.commands.registerCommand(
    "nextflow.showReadme",
    () => {
      showPage(getReadme());
    }
  );
  context.subscriptions.push(showReadme);

  // Show readme on installation of new version
  const versionKey = "nextflow.version";
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  const currentVersion = extension?.packageJSON.version ?? "unknown";
  const storedVersion = context.globalState.get<string>(versionKey, "");
  if (currentVersion === storedVersion) {
    return;
  }
  context.globalState.update(versionKey, currentVersion);
  showPage(getReadme());
}

export default { activateReadme };
