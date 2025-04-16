import * as vscode from "vscode";
import fetchHistory from "./WebviewProvider/lib/platform/utils/fetchHistory";
import type { Workflow } from "./WebviewProvider/lib/platform/utils/types";
import getAccessToken from "../auth/getAccessToken";

interface PlatformData {
  workspaces: Array<{
    orgName: string;
    workspaceName: string;
    workspaceId: string;
  }>;
}

export class WorkspaceSelectorItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly workspaceId: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState = vscode
      .TreeItemCollapsibleState.None
  ) {
    super(label, collapsibleState);
    this.tooltip = label;
    this.command = {
      command: "nextflow.seqera.selectWorkspace",
      title: "Select Workspace",
      arguments: [workspaceId]
    };
  }
}

export class WorkflowItem extends vscode.TreeItem {
  constructor(
    public readonly workflow: Workflow,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState = vscode
      .TreeItemCollapsibleState.None
  ) {
    super(workflow.runName, collapsibleState);
    this.tooltip = `${workflow.runName} - ${workflow.status}`;
    this.description = workflow.status;

    // Set icon based on workflow status
    switch (workflow.status) {
      case "RUNNING":
        this.iconPath = new vscode.ThemeIcon("play");
        break;
      case "SUCCEEDED":
        this.iconPath = new vscode.ThemeIcon("check");
        break;
      case "FAILED":
        this.iconPath = new vscode.ThemeIcon("error");
        break;
      case "CANCELLED":
        this.iconPath = new vscode.ThemeIcon("circle-slash");
        break;
      default:
        this.iconPath = new vscode.ThemeIcon("clock");
    }
  }
}

class HistoryProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    vscode.TreeItem | undefined | null | void
  > = new vscode.EventEmitter<vscode.TreeItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<
    vscode.TreeItem | undefined | null | void
  > = this._onDidChangeTreeData.event;

  private accessToken: string | undefined;
  private workflows: Workflow[] = [];
  private selectedWorkspaceId: string | undefined;

  constructor(private context: vscode.ExtensionContext) {
    // Get initial access token
    this.getAccessToken();

    // Initialize workspace selection
    this.initializeWorkspaceSelection();
  }

  private async initializeWorkspaceSelection() {
    const platformData = this.context.workspaceState.get(
      "platformData"
    ) as PlatformData;
    if (platformData?.workspaces?.length > 0) {
      this.selectedWorkspaceId = platformData.workspaces[0].workspaceId;
      this.refresh();
    }
  }

  private async getAccessToken() {
    try {
      this.accessToken = await getAccessToken(this.context);
      if (this.accessToken) {
        await this.refresh();
      }
    } catch (error) {
      console.error("🟢 Error getting access token:", error);
    }
  }

  refresh(): void {
    if (this.accessToken && this.selectedWorkspaceId) {
      this.fetchHistory();
    } else {
      this.workflows = [];
      this._onDidChangeTreeData.fire();
    }
  }

  private async fetchHistory() {
    try {
      const response = await fetchHistory(
        this.accessToken!,
        parseInt(this.selectedWorkspaceId!)
      );
      this.workflows = response.workflows.map((w) => w.workflow);
      this._onDidChangeTreeData.fire();
    } catch (error) {
      console.error("🟢 Error fetching workflows:", error);
      this.workflows = [];
      this._onDidChangeTreeData.fire();
    }
  }

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
    if (element) {
      if (element instanceof WorkspaceSelectorItem) {
        return Promise.resolve([]);
      }
      return Promise.resolve([]);
    } else {
      const platformData = this.context.workspaceState.get(
        "platformData"
      ) as PlatformData;
      const items: vscode.TreeItem[] = [];

      // Add workspace selector
      if (platformData?.workspaces) {
        const workspaceItems = platformData.workspaces.map(
          (workspace) =>
            new WorkspaceSelectorItem(
              `${workspace.orgName} / ${workspace.workspaceName}`,
              workspace.workspaceId
            )
        );
        items.push(...workspaceItems);
      }

      // Add a separator
      items.push(new vscode.TreeItem("", vscode.TreeItemCollapsibleState.None));

      // Add workflow items
      const workflowItems = this.workflows.map(
        (workflow) => new WorkflowItem(workflow)
      );
      items.push(...workflowItems);

      return Promise.resolve(items);
    }
  }

  // Add method to update selected workspace
  updateWorkspace(workspaceId: string) {
    this.selectedWorkspaceId = workspaceId;
    this.refresh();
  }
}

export default HistoryProvider;
