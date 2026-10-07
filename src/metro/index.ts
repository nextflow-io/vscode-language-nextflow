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
      // menus pass a Uri (and a context object), code lenses pass strings
      (uri?: string | vscode.Uri, name?: unknown) =>
        previewMetro(
          context,
          uri?.toString(),
          typeof name === "string" ? name : undefined,
          trackEvent
        )
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
