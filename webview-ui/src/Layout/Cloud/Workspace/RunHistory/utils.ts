import { SEQERA_PLATFORM_URL } from "../../../../../../src/constants";
import {
  Workflow,
  Workspace
} from "../../../../../../src/webview/WebviewProvider/lib/platform/types";

export function getRunHistoryURL(
  workspace: Workspace | undefined,
  item: Workflow
) {
  if (!workspace) return "";

  return `${SEQERA_PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/watch/${item.id}`;
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

export const getRuntimeMinutes = (workflow: any) => {
  if (!workflow.complete) return null;
  const start = new Date(workflow.dateCreated).getTime();
  const end = new Date(workflow.complete).getTime();
  return Math.round((end - start) / (1000 * 60));
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "SUCCEEDED":
      return "check";
    case "FAILED":
      return "close";
    case "RUNNING":
      return "sync~spin";
    case "CANCELLED":
      return "close";
    default:
      return "square";
  }
};
