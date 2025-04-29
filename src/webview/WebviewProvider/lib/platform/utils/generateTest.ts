import * as vscode from "vscode";
import * as fs from "fs";
import { INTERN_API_URL } from "../../../../../constants";

interface Message {
  role: string;
  content: string;
}

interface ChatRequest {
  messages: Message[];
  threadId?: string;
  model?: string;
  tools?: string[];
  system?: string;
}

async function generateNFTest(content: string, token: string): Promise<string> {
  const request: ChatRequest = {
    messages: [
      {
        role: "user",
        content: getUserMessage(content)
      }
    ],
    tools: ["write_file"], // See web/api-assistant/constants.py
    system: systemPrompt
  };

  try {
    const response = await fetch(`${INTERN_API_URL}/chat/v2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the streaming response
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No reader available");
    }

    let fullResponse = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Convert the chunk to text
      const chunk = new TextDecoder().decode(value);

      // Parse the SSE data
      const lines = chunk.split("\n");
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = JSON.parse(line.slice(6));
          if (data.content) {
            fullResponse += data.content;
          }
        }
      }
    }

    return fullResponse;
  } catch (error) {
    console.error("🟢 Error generating nf-test:", error);
    throw error;
  }
}

async function createNFTestFile(filePath: string, token: string) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const nfTest = await generateNFTest(content, token);
    const newFilePath = filePath.replace(".nf", ".test.nf");

    const workspaceEdit = new vscode.WorkspaceEdit();
    const uri = vscode.Uri.file(newFilePath);
    workspaceEdit.createFile(uri, { ignoreIfExists: true });
    workspaceEdit.insert(uri, new vscode.Position(0, 0), nfTest);

    await vscode.workspace.applyEdit(workspaceEdit);
  } catch (error: any) {
    vscode.window.showErrorMessage(
      `Failed to generate nf-test: ${error?.message}`
    );
  }
}

const systemPrompt = `You ONLY output code for nf-tests, nothing else. You do not output any other text such as comments, explanations, or anything else.`;

const getUserMessage = (content: string) => `
Generate an nf-test for the following Nextflow process:

${content}

Please create a complete nf-test that:
1. Tests the basic functionality of this process
2. Verifies input handling and output production
3. Includes appropriate assertions to validate expected behavior
4. Follows nf-test best practices and conventions
5. Contains clear comments explaining the test structure

The test should be compatible with the nf-test framework (https://code.askimed.com/nf-test/) and follow standard Nextflow testing patterns.
`;

export default createNFTestFile;
