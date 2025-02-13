import * as vscode from "vscode";
import { ChatReference } from "../types";

/**
 * Reads the entire contents of a file from a given URI.
 * @param uri The vscode.Uri to read.
 * @returns The file content in a string, or an empty string if an error occurred.
 */
async function readFileContents(uri: vscode.Uri): Promise<string> {
  try {
    const document = await vscode.workspace.openTextDocument(uri);
    return document.getText();
  } catch (error) {
    console.error(`Error reading file ${uri.fsPath}:`, error);
    return "";
  }
}

/**
 * Retrieves file paths from the entire workspace.
 * In the future, you might add filtering (by file extension, by folder, etc.),
 * or limit the number of files for performance reasons.
 *
 * @returns Promise resolving to an array of vscode.Uri representing all files in the workspace.
 */
async function getAllWorkspaceFiles(): Promise<vscode.Uri[]> {
  const allUris: vscode.Uri[] = [];
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (!workspaceFolders) {
    return allUris;
  }

  // For each workspace folder, use `vscode.workspace.findFiles`
  // to get all file URIs. Adjust the glob pattern if you want
  // to filter certain files or directories.
  for (const folder of workspaceFolders) {
    const uris = await vscode.workspace.findFiles(
      new vscode.RelativePattern(folder, "**/*")
    );
    allUris.push(...uris);
  }

  return allUris;
}

/**
 * Builds context from referenced files in a chat request.
 * If no references are provided (or you decide to always include them),
 * you can optionally gather all workspace files as a fallback.
 *
 * @param references Array of ChatReference objects containing file URIs or viewport data
 * @returns Promise resolving to a string containing the formatted file contents
 */
export async function getFileContext(
  references: readonly ChatReference[]
): Promise<string> {
  // If references are empty, you can either return a message or fallback to retrieving entire workspace:
  if (!references || references.length === 0) {
    // Uncomment below if you want to gather entire workspace as a fallback:
    // return getEntireWorkspaceContext();

    return "No files attached";
  }

  // Map each reference to a promise that resolves to formatted file contents
  const fileContentsPromises = references.map(async (ref) => {
    let content = "";

    try {
      if (ref.id === "vscode.implicit.viewport") {
        // Visible editor content (viewport references)
        const value = ref.value as { uri: vscode.Uri };
        content = await readFileContents(value.uri);
        return formatFileContent(value.uri.fsPath, content);
      } else {
        // Direct file URI references
        const uri = ref.value as vscode.Uri;
        content = await readFileContents(uri);
        return formatFileContent(uri.fsPath, content);
      }
    } catch (error) {
      console.error(`Error processing reference ${ref.id}:`, error);
      return "";
    }
  });

  try {
    const contents = await Promise.all(fileContentsPromises);
    const merged = contents.filter(Boolean).join("\n");
    return merged || "No files attached";
  } catch (error) {
    console.error("Error processing files:", error);
    return "Error processing files";
  }
}

/**
 * Helper to wrap file path and contents in the desired markup
 */
function formatFileContent(path: string, fileText: string): string {
  return `<open_file>\n${path}\n${fileText}\n</open_file>`;
}

/**
 * Example: Gathering entire workspace context (all files).
 * This is just one approach. You might want to:
 *  - Use a maximum limit of files or total size (for performance).
 *  - Filter out certain files by extension or folder.
 */
export async function getEntireWorkspaceContext(): Promise<string> {
  try {
    const allUris = await getAllWorkspaceFiles();
    if (!allUris.length) {
      return "No files found in workspace.";
    }

    // Potentially limit files if you don't want to read the entire workspace:
    // allUris = allUris.slice(0, SOME_MAX_FILES);

    const contentPromises = allUris.map(async (uri) => {
      const fileText = await readFileContents(uri);
      if (!fileText) {
        return "";
      }
      return formatFileContent(uri.fsPath, fileText);
    });

    const allContents = await Promise.all(contentPromises);
    const merged = allContents.filter(Boolean).join("\n");
    console.log(`🟢 Has context for ${allContents.length} files`);
    return merged || "No file contents found in workspace.";
  } catch (error) {
    console.error("Error gathering workspace context:", error);
    return "Error gathering workspace context.";
  }
}
