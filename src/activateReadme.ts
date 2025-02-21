import * as vscode from "vscode";
import showPage from "./utils/showPage";

export function activateReadme(context: vscode.ExtensionContext) {
  // Add command to show readme
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

  // Show readme on installation of new version

  const versionKey = "nextflow.version";
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  const currentVersion = extension?.packageJSON.version ?? "unknown";
  const storedVersion = context.globalState.get<string>(versionKey, "");
  const isCursor = vscode.env.appName.includes("Cursor");
  let readme = "readme-vscode.md";
  if (isCursor) readme = "readme-cursor.md";

  if (currentVersion === storedVersion) return;
  context.globalState.update(versionKey, currentVersion);
  showPage(readme);
}

export default { activateReadme };
