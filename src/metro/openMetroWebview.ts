import * as vscode from "vscode";

import { loadMetroWebviewContent } from "./buildMetroWebview";
import type { MetroFormat } from "./types";
import type { TrackEvent } from "../telemetry";

export async function openMetroWebview(
  title: string,
  filePath: string,
  format: MetroFormat,
  trackEvent?: TrackEvent,
  eventName?: string
): Promise<void> {
  const panel = vscode.window.createWebviewPanel(
    "metro-preview",
    title,
    vscode.ViewColumn.Beside,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );

  panel.webview.html = await loadMetroWebviewContent(filePath, format);

  if (trackEvent && eventName) {
    trackEvent(eventName, { format });
  }
}
