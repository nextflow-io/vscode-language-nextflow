import { randomBytes } from "crypto";
import { PostHog } from "posthog-node";
import * as vscode from "vscode";

import { showPage } from "./utils/showPage";

export type TrackEvent = (
  eventName: string,
  properties?: { [key: string]: any }
) => void;

const POSTHOG_API_KEY = "phc_pCt2zPQylp5x5dEKMB3TLM2hKBp7aLajUBgAfysPnpd";
const POSTHOG_API_HOST = "https://eu.i.posthog.com";

let posthogClient: PostHog | undefined;

export function activateTelemetry(context: vscode.ExtensionContext) {
  // Prompt for telemetry consent on the first time
  const hasPromptedConsent = context.globalState.get("hasPromptedConsent");
  if (!hasPromptedConsent) {
    promptTelemetryConsent().then(() => {
      context.globalState.update("hasPromptedConsent", true);
    });
  }

  // Create event tracker
  const trackEvent = createTrackEvent(context);

  // Track consent if accepted
  trackEvent("telemetryConsent", {
    accepted: true
  });

  // Track environment info
  const osPlatform = process.platform;
  const vscodeVersion = vscode.version;
  const extensionVersion = context.extension.packageJSON.version ?? "unknown";

  trackEvent("extensionActivated", {
    extensionVersion,
    vscodeVersion,
    osPlatform
  });

  // Track file open events
  const trackFileOpens = vscode.workspace.onDidOpenTextDocument((document) => {
    const fileName = document.fileName.toLowerCase();
    const fileType = 
      fileName.endsWith(".nf.test") ? ".nf.test"
      : fileName.endsWith(".nf") ? ".nf"
      : fileName.endsWith(".config") ? ".config"
      : undefined;
    if (fileType) {
      trackEvent("fileOpened", { fileType });
    }
  });
  context.subscriptions.push(trackFileOpens);

  return trackEvent;
}

async function promptTelemetryConsent(): Promise<void> {
  const choice = await vscode.window.showInformationMessage(
    "Nextflow: Enable telemetry to help us improve the extension?",
    "Yes",
    "No",
    "More info"
  );
  const config = vscode.workspace.getConfiguration("nextflow");

  if (choice === "Yes") {
    await config.update("telemetry.enabled", true);
  } else if (choice === "No") {
    await config.update("telemetry.enabled", false);
  } else if (choice === "More info") {
    showPage();
    await sleep(3000);
    await promptTelemetryConsent();
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createTrackEvent(context: vscode.ExtensionContext) {
  return async (eventName: string, properties = {}) => {
    // skip if telemetry is disabled
    if (!isTelemetryEnabled()) return;

    // create posthog client if needed
    if (!posthogClient) {
      posthogClient = new PostHog(POSTHOG_API_KEY, { host: POSTHOG_API_HOST });
    }

    // send telemtry event
    try {
      posthogClient.capture({
        distinctId: getUserId(context),
        event: eventName,
        properties: {
          ...properties,
          time: new Date().toISOString()
        }
      });
    } catch (err) {
      console.error("Failed to send telemetry event", err);
    }
  };
}

function isTelemetryEnabled(): boolean {
    const globalTelemetryLevel = vscode.workspace
      .getConfiguration("telemetry")
      .get<string>("telemetryLevel", "all");
    const enabled = vscode.workspace
      .getConfiguration("nextflow")
      .get<boolean>("telemetry.enabled", false);
    return globalTelemetryLevel !== "off" && enabled;
}

function getUserId(context: vscode.ExtensionContext): string {
  let anonId = context.globalState.get<string>("anonId");
  if (!anonId) {
    anonId = randomBytes(6).toString("hex");
    context.globalState.update("anonId", anonId);
  }
  return anonId;
}

export function deactivateTelemetry(context: vscode.ExtensionContext): Thenable<void> {
  if (!isTelemetryEnabled() || !posthogClient) {
    return Promise.resolve();
  }
  posthogClient.capture({
    distinctId: getUserId(context),
    event: "extensionDeactivated"
  });
  return posthogClient.shutdown();
}
