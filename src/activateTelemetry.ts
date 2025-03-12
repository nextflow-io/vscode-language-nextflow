import { randomBytes } from "crypto";
import { PostHog } from "posthog-node";
import * as vscode from "vscode";

import promptForTelemetryConsent from "./utils/promptForTelemetryConsent";

export type TrackEvent = (
  eventName: string,
  properties?: { [key: string]: any }
) => void;

const key = "phc_pCt2zPQylp5x5dEKMB3TLM2hKBp7aLajUBgAfysPnpd";
const host = "https://eu.i.posthog.com";

let posthogClient: PostHog | undefined;
let hasGlobalConsent = false;
let userConsentState: "accepted" | "declined" | undefined;
let hasUserAccepted = false;
let consentChanged = false;

export async function activateTelemetry(
  context: vscode.ExtensionContext
): Promise<TrackEvent> {
  // Get config & basic info
  const config = vscode.workspace.getConfiguration("telemetry");
  const vscodeVersion = vscode.version;
  const osPlatform = process.platform;
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  const extensionVersion = extension?.packageJSON.version ?? "unknown";

  // Get consent state
  hasGlobalConsent = config.get<boolean>("enableTelemetry", true);
  userConsentState = context.globalState.get("telemetryConsent");
  hasUserAccepted = userConsentState === "accepted";

  // Add command to update consent
  const updateConsent = vscode.commands.registerCommand(
    "nextflow.updateTelemetryConsent",
    () => {
      context.globalState.update("telemetryConsent", undefined);
      promptForTelemetryConsent(context);
    }
  );
  context.subscriptions.push(updateConsent);

  // If declined already, return a noop
  if (!hasGlobalConsent) return () => {};

  // If unknown, show the prompt
  if (!userConsentState) {
    const consentGiven = await promptForTelemetryConsent(context);
    hasUserAccepted = consentGiven === true;
    consentChanged = true;
  }

  // If declined, return a noop
  if (!hasUserAccepted) return () => {};

  // Otherwise proceed with tracking
  posthogClient = new PostHog(key, { host });
  const trackEvent = createTrackEvent(context);

  // Track consent change
  if (consentChanged) {
    trackEvent("telemetryConsent", {
      accepted: hasUserAccepted
    });
  }

  // Track extension activation
  trackEvent("extensionActivated", {
    extensionVersion,
    vscodeVersion,
    osPlatform
  });

  // Track file open
  const fileOpenEvent = vscode.workspace.onDidOpenTextDocument(() => {
    trackEvent("fileOpened");
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
          time: new Date().toISOString()
        }
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

export function deactivateTelemetry(context: vscode.ExtensionContext): Thenable<void> {
  if (!hasUserAccepted || !posthogClient) {
    return Promise.resolve();
  }
  posthogClient.capture({
    distinctId: getUserID(context),
    event: "extensionDeactivated"
  });
  return posthogClient.shutdown();
}
