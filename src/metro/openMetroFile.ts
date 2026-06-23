import * as fs from "fs/promises";
import * as path from "path";
import * as vscode from "vscode";

import { detectMetroFile } from "./detectMetroFile";
import {
  NfMetroNotFoundError,
  showNfMetroNotFound
} from "./findNfMetro";
import { findMetroOutputs } from "./findMetroOutputs";
import { logMetroMessage } from "./outputChannel";
import { openMetroWebview } from "./openMetroWebview";
import { renderMetroFile } from "./renderFromDag";
import type { TrackEvent } from "../telemetry";

async function previewMetroArtifact(
  filePath: string,
  context: vscode.ExtensionContext,
  trackEvent?: TrackEvent
): Promise<void> {
  const content = await fs.readFile(filePath, "utf8");
  const ext = path.extname(filePath);
  const kind = detectMetroFile(content, ext);

  if (!kind) {
    vscode.window.showErrorMessage("This file does not appear to be an nf-metro output.");
    return;
  }

  const title = path.basename(filePath);

  if (kind === "mmd") {
    try {
      await vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: "Rendering metro map..."
        },
        async () => {
          const { outputPath, format } = await renderMetroFile(
            filePath,
            context,
            path.basename(filePath, ext)
          );
          await openMetroWebview(
            title,
            outputPath,
            format,
            trackEvent,
            "openMetroFile"
          );
        }
      );
    } catch (error) {
      if (error instanceof NfMetroNotFoundError) {
        showNfMetroNotFound();
        return;
      }

      const message = error instanceof Error ? error.message : String(error);
      logMetroMessage(message);
      vscode.window.showErrorMessage(`Failed to render metro map: ${message}`);
    }
    return;
  }

  await openMetroWebview(title, filePath, kind, trackEvent, "openMetroFile");
}

export async function openMetroFile(
  context: vscode.ExtensionContext,
  uri?: vscode.Uri,
  trackEvent?: TrackEvent
): Promise<void> {
  const fileUri = uri ?? vscode.window.activeTextEditor?.document.uri;
  if (!fileUri) {
    return;
  }

  await previewMetroArtifact(fileUri.fsPath, context, trackEvent);
}

export async function findAndOpenMetroOutputs(
  context: vscode.ExtensionContext,
  trackEvent?: TrackEvent
): Promise<void> {
  const outputs = await findMetroOutputs();
  if (outputs.length === 0) {
    vscode.window.showInformationMessage(
      "No nf-metro outputs found in common pipeline output directories."
    );
    return;
  }

  const selection = await vscode.window.showQuickPick(
    outputs.map((filePath) => ({
      label: path.basename(filePath),
      description: path.dirname(filePath),
      filePath
    })),
    {
      placeHolder: "Select an nf-metro output to preview"
    }
  );

  if (!selection) {
    return;
  }

  await previewMetroArtifact(selection.filePath, context, trackEvent);
}
