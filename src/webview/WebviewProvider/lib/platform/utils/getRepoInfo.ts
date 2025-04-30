import { ExtensionContext } from "vscode";
import * as vscode from "vscode";

import { RepoInfo } from "../types";

function handleUpdate(context: ExtensionContext, repoInfo: RepoInfo) {
  const vsCodeState = context.workspaceState;
  vsCodeState.update("repoInfo", repoInfo);
}

async function getRepoInfo(
  context: ExtensionContext
): Promise<RepoInfo | undefined> {
  try {
    const wsState = context.workspaceState;
    const savedState = wsState.get("repoInfo") as RepoInfo | undefined;
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

    const repository = git.repositories[0];
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

    handleUpdate(context, repoInfo);
    return repoInfo;
  } catch (error) {
    console.error("Error getting repo info:", error);
    return undefined;
  }
}

export default getRepoInfo;
