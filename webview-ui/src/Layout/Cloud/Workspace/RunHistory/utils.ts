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
