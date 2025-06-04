import {
  Workspace,
  ComputeEnv,
  Pipeline,
  Dataset,
  DataLink,
  AddPipelineResponse
} from "../../Context/types";
import { SEQERA_PLATFORM_URL } from "../../../../src/constants";

// Build URLs to Seqera Cloud

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

export function getWorkflowURL(pipeline: Pipeline) {
  return `${SEQERA_PLATFORM_URL}/orgs/${pipeline.orgName}/workspaces/${pipeline.workspaceName}/launchpad/${pipeline.pipelineId}`;
}

export function getLaunchURL(pipeline: Pipeline) {
  return `${SEQERA_PLATFORM_URL}/orgs/${pipeline.orgName}/workspaces/${pipeline.workspaceName}/launchpad/${pipeline.pipelineId}/form/new-form`;
}

export function getEditURL(responseBody: AddPipelineResponse) {
  return `${SEQERA_PLATFORM_URL}/orgs/${responseBody.orgName}/workspaces/${responseBody.workspaceName}/launchpad/${responseBody.pipelineId}/edit`;
}

export function getDatasetURL(dataset: Dataset, workspace?: Workspace) {
  if (!workspace) return "";
  return `${SEQERA_PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/datasets/${dataset.id}`;
}

export function getDataLinkURL(dataLink: DataLink, workspace?: Workspace) {
  const credID = dataLink.credentials?.[0]?.id;
  if (!workspace || !credID) return "";
  return `${SEQERA_PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/data-explorer/${dataLink.id}/browse?credentialsId=${credID}`;
}

// Date formatting

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
  if (diffInDays < 28) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  // Fallback to normal date format
  return formatDate(dateString);
};
