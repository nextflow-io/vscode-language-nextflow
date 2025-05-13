import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import generateTest from "./generateTest";
import generateValidation from "./generateValidation";
import { appendToFile } from "./utils";

function getTestPath(filePath: string): string {
  const dirName = path.dirname(filePath);
  const testDir = path.join(dirName, "tests");
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }
  const baseName = path.basename(filePath);
  return path.join(testDir, baseName.replace(".nf", ".nf.test"));
}

async function createTest(filePath: string, token: string): Promise<boolean> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Creating nf-test",
      cancellable: false
    },
    async (progress) => {
      try {
        progress.report({ message: "Reading file contents" });
        const content = fs.readFileSync(filePath, "utf8");
        const testPath = getTestPath(filePath);
        const uri = vscode.Uri.file(testPath);

        // Create new file
        progress.report({ message: "Creating test file" });
        const createEdit = new vscode.WorkspaceEdit();
        createEdit.createFile(uri, { ignoreIfExists: true });
        const createSuccess = await vscode.workspace.applyEdit(createEdit);
        if (!createSuccess) {
          vscode.window.showErrorMessage("Failed to create test file");
          return false;
        }

        // Open the file
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);

        // Generate test code
        progress.report({ message: "Generating code (streaming to file)" });
        let generatedContent = "";
        await generateTest(content, token, async (chunk) => {
          generatedContent += chunk;
          await appendToFile(uri, document, editor, generatedContent);
        });

        // Save
        await document.save();

        // Validate & fix the test
        progress.report({ message: "Validating test file" });
        await generateValidation(generatedContent, token, async (chunk) => {
          generatedContent += chunk;
          await appendToFile(uri, document, editor, generatedContent);
        });

        // Save
        await document.save();

        vscode.window.showInformationMessage(`nf-test created: ${testPath}`);

        return true;
      } catch (error: any) {
        const isAuthError =
          error?.message?.includes("401") ||
          error?.message?.includes("Unauthorized");

        if (isAuthError) {
          return handleAuthError();
        } else {
          vscode.window.showErrorMessage(
            `Failed to generate nf-test: ${error?.message}`
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

export default createTest;
