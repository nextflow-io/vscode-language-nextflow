import * as vscode from "vscode";
import { PostHog } from "posthog-node";
import { randomBytes } from "crypto";

export type TrackEvent = (
  eventName: string,
  properties?: { [key: string]: any }
) => void;

const key = "phc_pCt2zPQylp5x5dEKMB3TLM2hKBp7aLajUBgAfysPnpd";
const host = "https://eu.i.posthog.com";

let posthogClient: PostHog | undefined;
let trackingAllowed = false;

export function activateTelemetry(
  context: vscode.ExtensionContext
): TrackEvent {
  const config = vscode.workspace.getConfiguration("telemetry");
  trackingAllowed = config.get<boolean>("enableTelemetry", true);
  const vscodeVersion = vscode.version;
  const osPlatform = process.platform;
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  const extensionVersion = extension?.packageJSON.version ?? "unknown";

  if (!trackingAllowed) return () => {};

  const trackEvent = createTrackEvent(context);

  posthogClient = new PostHog(key, { host });

  trackEvent("extensionActivated", {
    extensionVersion,
    vscodeVersion,
    osPlatform,
  });

  // Track file open events
  // TODO: check privacy rules for vscode extensions (here we're storing the user's full file path)
  const fileOpenEvent = vscode.workspace.onDidOpenTextDocument((document) => {
    const filePath = document.fileName;
    trackEvent("fileOpened", {
      fileName: filePath,
    });
  });

  context.subscriptions.push(fileOpenEvent);

  return trackEvent;
}

function createTrackEvent(context: vscode.ExtensionContext) {
  return async (eventName: string, properties = {}) => {
    try {
      if (!posthogClient) return;
      posthogClient.capture({
        distinctId: getUserID(context),
        event: eventName,
        properties: {
          ...properties,
          time: new Date().toISOString(),
        },
      });
    } catch (err) {
      console.error("Track event failed", err);
    }
  };
}

function getUserID(context: vscode.ExtensionContext): string {
  let anonId = context.globalState.get<string>("anonId");
  if (!anonId) {
    anonId = randomBytes(6).toString("hex");
    context.globalState.update("anonId", anonId);
  }
  return anonId;
}

export function deactivateTelemetry(context: vscode.ExtensionContext) {
  if (trackingAllowed || !posthogClient) return;

  posthogClient.capture({
    distinctId: getUserID(context),
    event: "extensionDeactivated",
  });

  return posthogClient.shutdown();
}
