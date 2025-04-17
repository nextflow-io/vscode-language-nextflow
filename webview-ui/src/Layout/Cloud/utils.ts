import { Workspace, ComputeEnv, RepoInfo, Pipeline } from "../../Context/types";
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

export function getWorkflowURL(pipeline: Pipeline) {
  return `${SEQERA_PLATFORM_URL}/orgs/${pipeline.orgName}/workspaces/${pipeline.workspaceName}/launchpad/${pipeline.pipelineId}`;
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const isCurrentYear = date.getFullYear() === now.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  };

  if (!isCurrentYear) {
    options.year = "numeric";
  }

  return date.toLocaleString("en-US", options);
};

export const relativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  console.log("diffInSeconds", diffInSeconds);

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  // For dates older than a week, fall back to the existing formatDate function
  return formatDate(dateString);
};
