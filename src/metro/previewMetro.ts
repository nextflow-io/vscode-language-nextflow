import * as path from "path";
import * as vscode from "vscode";

import {
  NfMetroNotFoundError,
  showNfMetroNotFound
} from "./findNfMetro";
import { logMetroMessage } from "./outputChannel";
import { openMetroWebview } from "./openMetroWebview";
import { renderFromDag } from "./renderFromDag";
import type { TrackEvent } from "../telemetry";

async function fetchDagContent(
  uri: string,
  name?: string
): Promise<string | undefined> {
  const res: { result?: string; error?: string } | undefined =
    await vscode.commands.executeCommand("nextflow.server.previewDag", uri, name);

  if (!res?.result) {
    vscode.window.showErrorMessage(res?.error ?? "Failed to render DAG preview.");
    return undefined;
  }

  return res.result;
}

export async function previewMetro(
  context: vscode.ExtensionContext,
  uri?: string,
  name?: string,
  trackEvent?: TrackEvent
): Promise<void> {
  const docUri = uri ?? vscode.window.activeTextEditor?.document.uri.toString();
  if (!docUri) {
    return;
  }

  const dagContent = await fetchDagContent(docUri, name);
  if (!dagContent) {
    return;
  }

  const title = name ?? path.basename(docUri, path.extname(docUri));

  try {
    await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: "Rendering metro map..."
      },
      async () => {
        const { outputPath, format } = await renderFromDag(
          dagContent,
          title,
          context
        );
        await openMetroWebview(
          `${title} metro map`,
          outputPath,
          format,
          trackEvent,
          "previewMetro"
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
}
