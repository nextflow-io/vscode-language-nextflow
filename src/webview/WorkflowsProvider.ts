import * as vscode from "vscode";
import fetchWorkflows from "./WebviewProvider/lib/platform/utils/fetchWorkflows";
import type { Workflow } from "./WebviewProvider/lib/platform/utils/types";
import getAccessToken from "../auth/getAccessToken";

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

class WorkflowsProvider implements vscode.TreeDataProvider<WorkflowItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    WorkflowItem | undefined | null | void
  > = new vscode.EventEmitter<WorkflowItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<
    WorkflowItem | undefined | null | void
  > = this._onDidChangeTreeData.event;

  private accessToken: string | undefined;
  private workflows: Workflow[] = [];

  constructor(private context: vscode.ExtensionContext) {
    // Get initial access token
    this.getAccessToken();
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
    if (this.accessToken) {
      this.fetchWorkflows();
    } else {
      this.workflows = [];
      this._onDidChangeTreeData.fire();
    }
  }

  private async fetchWorkflows() {
    try {
      const response = await fetchWorkflows(this.accessToken!, 123);
      this.workflows = response.workflows.map((w) => w.workflow);
      this._onDidChangeTreeData.fire();
    } catch (error) {
      console.error("🟢 Error fetching workflows:", error);
      this.workflows = [];
      this._onDidChangeTreeData.fire();
    }
  }

  getTreeItem(element: WorkflowItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: WorkflowItem): Thenable<WorkflowItem[]> {
    if (element) {
      return Promise.resolve([]);
    } else {
      return Promise.resolve(
        this.workflows.map((workflow) => new WorkflowItem(workflow))
      );
    }
  }
}

export default WorkflowsProvider;
