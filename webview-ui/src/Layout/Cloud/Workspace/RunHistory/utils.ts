import { SEQERA_PLATFORM_URL } from "../../../../../../src/constants";
import {
  Workflow,
  Workspace
} from "../../../../../../src/webview/WebviewProvider/lib/platform/types";

export { formatDate, relativeTime } from "../../utils";

export function getRunURL(
  workspace: Workspace | undefined,
  item: Workflow
) {
  if (!workspace) return "";

  return `${SEQERA_PLATFORM_URL}/orgs/${workspace.orgName}/workspaces/${workspace.workspaceName}/watch/${item.id}`;
}

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
