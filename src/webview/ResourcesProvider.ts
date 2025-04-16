import * as vscode from "vscode";

export class ResourceItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly url?: string,
    public readonly command?: vscode.Command,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState = vscode
      .TreeItemCollapsibleState.None
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}`;

    if (url) {
      this.description = url;
      this.command = {
        command: "nextflow.seqera.openResource",
        title: "Open Resource",
        arguments: [url]
      };
      this.iconPath = new vscode.ThemeIcon("link-external");
    } else if (command) {
      this.command = command;
      this.iconPath = new vscode.ThemeIcon("comment-discussion");
    }
  }
}

class ResourcesProvider implements vscode.TreeDataProvider<ResourceItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    ResourceItem | undefined | null | void
  > = new vscode.EventEmitter<ResourceItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<
    ResourceItem | undefined | null | void
  > = this._onDidChangeTreeData.event;

  private resources = [
    {
      label: "Nextflow Training & Getting Started",
      url: "https://training.nextflow.io/latest/"
    },
    {
      label: "Nextflow Documentation",
      url: "https://nextflow.io/docs/latest/"
    },
    {
      label: "Seqera Feedback Forum",
      url: "https://feedback.seqera.io/"
    },
    {
      label: "Seqera Community Forum",
      url: "https://community.seqera.io/"
    },
    {
      label: "Seqera Cloud Documentation",
      url: "https://docs.seqera.io/"
    },
    {
      label: "Seqera AI",
      url: "https://ai.seqera.io/"
    },
    {
      label: "Open Seqera Copilot",
      command: "nextflow.chatbot.openChat"
    }
  ];

  constructor() {}

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: ResourceItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: ResourceItem): Thenable<ResourceItem[]> {
    if (element) {
      return Promise.resolve([]);
    } else {
      return Promise.resolve(
        this.resources.map((resource) => {
          if (resource.url) {
            return new ResourceItem(resource.label, resource.url);
          } else if (resource.command) {
            return new ResourceItem(resource.label, undefined, {
              command: resource.command,
              title: resource.label,
              arguments: []
            });
          }
          return new ResourceItem(resource.label);
        })
      );
    }
  }
}

export default ResourcesProvider;
