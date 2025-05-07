import * as vscode from "vscode";
import * as fs from "fs";
import generateRequirements from "./generateRequirements";
import { startBuild } from "./startBuild";

async function getContainer(filePath: string, token = ""): Promise<boolean> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      cancellable: false
    },
    async (progress) => {
      try {
        // Open the original file
        const originalFilePath = vscode.Uri.file(filePath);
        await vscode.workspace.openTextDocument(originalFilePath);

        const content = fs.readFileSync(filePath, "utf8");

        // Find required packages
        progress.report({ message: "Seqera AI: Finding required packages" });
        const generatedContent = await generateRequirements(content, token);

        // Start container build
        progress.report({ message: "Wave: Starting container build" });
        const buildResult = await startBuild(generatedContent);

        if (buildResult.error) {
          vscode.window.showErrorMessage(
            `Wave: Failed to build container: ${buildResult.error}`
          );
          return false;
        }

        const { buildId, containerImage } = buildResult;

        if (buildId) {
          const buildUrl = `https://wave.seqera.io/view/builds/${buildId}`;
          const openBuildAction = "See details";

          // Show success message
          vscode.window
            .showInformationMessage(
              `Wave: Container built successfully`,
              openBuildAction
            )
            .then((selection) => {
              if (selection === openBuildAction) {
                vscode.env.openExternal(vscode.Uri.parse(buildUrl));
              }
            });

          // Show copy dialog
          await vscode.window.showInputBox({
            value: containerImage,
            prompt: "Cmd+C to copy",
            ignoreFocusOut: true,
            title: "Wave Image URL"
          });
        } else {
          vscode.window.showErrorMessage("Wave: Failed to build container");
          return false;
        }

        return true;
      } catch (error: any) {
        const isAuthError =
          error?.message?.includes("401") ||
          error?.message?.includes("403") ||
          error?.message?.includes("Unauthorized");

        if (isAuthError) {
          return handleAuthError();
        } else {
          vscode.window.showErrorMessage(
            `Wave: Failed to build container: ${error?.message}`
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
