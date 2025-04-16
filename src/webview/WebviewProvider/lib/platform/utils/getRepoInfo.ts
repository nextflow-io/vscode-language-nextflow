import * as vscode from "vscode";

interface RepoInfo {
  url: string;
  name: string;
  owner: string;
}

async function getRepoInfo(): Promise<RepoInfo | undefined> {
  try {
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

    const { remotes } = repository;
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

    return {
      url,
      name,
      owner
    };
  } catch (error) {
    console.error("Error getting repo info:", error);
    return undefined;
  }
}

export default getRepoInfo;
