import { Workspace, ComputeEnv, RepoInfo } from "../../Context/types";
import { SEQERA_PLATFORM_URL } from "../../../../src/constants";

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
  return `${SEQERA_PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/launchpad`;
}

export function getComputeEnvURL(
  workspaces: Workspace[],
  computeEnv: ComputeEnv
) {
  const workspace = workspaces.find(
    (w) => w.workspaceName === computeEnv.workspaceName
  );
  if (!workspace) return "";
  return `${SEQERA_PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/compute-envs/${computeEnv.id}`;
}

export function getPipelineURL(repoInfo: RepoInfo) {
  return `https://seqera.io/pipelines/${repoInfo.name}--${repoInfo.owner}`;
}
