import { ExtensionContext } from "vscode";
import * as path from "path";
import * as vscode from "vscode";

import { RepoInfo } from "../types";

function stateKey(folderName?: string) {
  return folderName ? `repoInfo:${folderName}` : "repoInfo";
}

function handleUpdate(
  context: ExtensionContext,
  folderName: string | undefined,
  repoInfo: RepoInfo
) {
  const vsCodeState = context.workspaceState;
  vsCodeState.update(stateKey(folderName), repoInfo);
}

// Find the git repository for the given workspace folder, either the folder
// itself or the closest repository containing it.
function findRepository(repositories: any[], folderName?: string) {
  const folder = vscode.workspace.workspaceFolders?.find(
    (f) => f.name === folderName
  );
  if (!folder) return repositories[0];

  const root = folder.uri.fsPath;
  return repositories
    .filter((repo) => {
      const repoRoot = repo?.rootUri?.fsPath;
      if (!repoRoot) return false;
      return root === repoRoot || root.startsWith(repoRoot + path.sep);
    })
    .sort((a, b) => b.rootUri.fsPath.length - a.rootUri.fsPath.length)[0];
}

async function getRepoInfo(
  context: ExtensionContext,
  folderName?: string
): Promise<RepoInfo | undefined> {
  try {
    const wsState = context.workspaceState;
    const savedState = wsState.get(stateKey(folderName)) as
      | RepoInfo
      | undefined;
    if (savedState) return savedState;

    const extension = vscode.extensions.getExtension("vscode.git");
    if (!extension) {
      return undefined;
    }

    const gitExtension = extension.isActive
      ? extension.exports
      : await extension.activate();
    const git = gitExtension.getAPI(1);

    if (!git?.repositories?.length) {
      return undefined;
    }

    const repository = findRepository(git.repositories, folderName);
    if (!repository) return undefined;

    const remotes = repository?.state?.remotes || repository?.remotes;

    if (!remotes) return undefined;

    const origin = remotes.find(
      (remote: { name: string }) => remote.name === "origin"
    );

    if (!origin) return undefined;

    let url = origin.fetchUrl || origin.pushUrl;
    if (!url) return undefined;

    if (url.startsWith("git@")) {
      url = url.replace("git@github.com:", "https://github.com/");
    }

    url = url.replace(/\.git$/, "");
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return { url, name: "", owner: "" };

    const [, owner, name] = match;

    const repoInfo = {
      url,
      name,
      owner
    };

    handleUpdate(context, folderName, repoInfo);
    return repoInfo;
  } catch (error) {
    console.error("Error getting repo info:", error);
    return undefined;
  }
}

export default getRepoInfo;
