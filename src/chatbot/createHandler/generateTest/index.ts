// Handler not in use yet

import * as vscode from "vscode";
import { ChatReference } from "../../types";
import generateTestFile from "./generateTestFile";

export async function generateTest(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream
): Promise<void> {
  // TODO: if empty prompt, request "explain" or "generate" commands
  try {
    const userPromptDetails = request.prompt;
    const fileReference = request.references?.[0];
    const hasReference = !!fileReference;

    function hasValidReference(reference: ChatReference): boolean {
      return true;
    }

    console.log("🟢 request.prompt", request.prompt);
    console.log("🟢 fileReference", fileReference);

    if (hasReference && hasValidReference(fileReference)) {
      const { uri } = fileReference.value as any;
      const fileName = uri.fsPath.split("/").pop() || "";
      const processInfo = {
        name: fileName.replace(".nf", "").toUpperCase(),
        filePath: uri.fsPath,
      };
      await generateTestFile(processInfo);
    } else {
      stream.progress(`No valid reference found`);
      return;
    }

    stream.progress(`Test file generated!`);
    return;
  } catch (err) {
    stream.progress(`Something went wrong generating the test: ${err}`);
    return;
  }
}
