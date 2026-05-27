import * as vscode from "vscode";

import { activateDecorate } from "./decorate";
import { activateExplorerDecoration } from "./explorerDecoration";
import { activateFilter } from "./filter";

export function activateNextflowLog(context: vscode.ExtensionContext): void {
  activateDecorate(context);
  activateFilter(context);
  activateExplorerDecoration(context);
}
