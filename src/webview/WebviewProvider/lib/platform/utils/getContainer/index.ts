import * as vscode from "vscode";
import * as fs from "fs";
import generateRequirements from "./generateRequirements";
import { startBuild } from "./startBuild";

async function getContainer(filePath: string, token: string): Promise<boolean> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Analyzing project config",
      cancellable: false
    },
    async (progress) => {
      try {
        // Open the original file
        const originalFilePath = vscode.Uri.file(filePath);
        await vscode.workspace.openTextDocument(originalFilePath);

        const content = fs.readFileSync(filePath, "utf8");

        // Find required packages
        progress.report({ message: "Finding required packages" });
        const generatedContent = await generateRequirements(content, token);

        // Start container build
        progress.report({ message: "Starting container build" });
        const buildResult = await startBuild(generatedContent);

        if (buildResult.error) {
          vscode.window.showErrorMessage(
            `Failed to build container: ${buildResult.error}`
          );
          return false;
        }

        // Open the container image URL in the default browser
        if (buildResult.containerImage) {
          const url = buildResult.containerImage;
          await vscode.window.showInputBox({
            value: url,
            prompt: "Container URL",
            ignoreFocusOut: true,
            title: "Wave container built"
          });
        } else {
          vscode.window.showErrorMessage("Failed to get container");
          return false;
        }

        return true;
      } catch (error: any) {
        const isAuthError =
          error?.message?.includes("401") ||
          error?.message?.includes("Unauthorized");

        if (isAuthError) {
          return handleAuthError();
        } else {
          vscode.window.showErrorMessage(
            `Failed to get container: ${error?.message}`
          );
          return false;
        }
      }
    }
  );
}

async function handleAuthError(): Promise<boolean> {
  const loginAction = "Login to Seqera Cloud";
  const result = await vscode.window.showInformationMessage(
    "Authentication required to generate nf-test. Please login to continue.",
    loginAction
  );

  if (result === loginAction) {
    await vscode.commands.executeCommand("nextflow.seqera.login");
  }
  return false;
}

export default getContainer;
