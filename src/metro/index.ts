import * as vscode from "vscode";

import { findAndOpenMetroOutputs, openMetroFile } from "./openMetroFile";
import { getMetroOutputChannel } from "./outputChannel";
import { previewMetro } from "./previewMetro";
import type { TrackEvent } from "../telemetry";

export function activateMetro(
  context: vscode.ExtensionContext,
  trackEvent: TrackEvent
): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "nextflow.previewMetro",
      (uri?: string, name?: string) => previewMetro(context, uri, name, trackEvent)
    ),
    vscode.commands.registerCommand(
      "nextflow.openMetroFile",
      (uri?: vscode.Uri) => openMetroFile(context, uri, trackEvent)
    ),
    vscode.commands.registerCommand("nextflow.findMetroOutputs", () =>
      findAndOpenMetroOutputs(context, trackEvent)
    ),
    getMetroOutputChannel()
  );
}
