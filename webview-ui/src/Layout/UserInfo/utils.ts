import { Workspace } from "../../Context/types";
import { PLATFORM_URL } from "../../../../src/constants";

export function formatTime(tokenExpiry?: number) {
  if (!tokenExpiry) return "";
  return new Date(tokenExpiry * 1000).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}

export function getWorkspaceURL(workspace: Workspace) {
  return `${PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/launchpad`;
}
