import type { Auth0Config } from "./getConfig";
import { client_id, auth0Domain } from "./constants";

type TokenResponse = {
  access_token: string;
  refresh_token?: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
  error?: string;
};

async function fetchToken(config: Auth0Config): Promise<Response> {
  const tokenEndpoint = `https://${auth0Domain}/oauth/token`;
  return await fetch(tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      device_code: config.device_code,
      client_id,
    }),
  });
}

async function pollForToken(
  config: Auth0Config
): Promise<TokenResponse | null> {
  const startTime = Date.now();
  const interval = config.interval * 1000;
  const expiresIn = config.expires_in * 1000;

  console.log("🟢 Seqera: Polling for token");

  while (true) {
    // Sleep a moment
    await new Promise((resolve) => setTimeout(resolve, interval));

    // Attempt to fetch the token
    const response = await fetchToken(config);
    if (!response) continue;

    const responseBody = (await response.json()) as TokenResponse;
    const errorCode = responseBody.error;

    // Return token on success
    if (!errorCode) {
      console.log("🟠 auth0", responseBody);
      return responseBody;
    }

    const isPending = errorCode === "authorization_pending";
    const timeElapsed = Date.now() - startTime;

    // Repeat if pending
    if (isPending) continue;

    // Exit if time exceeded
    if (timeElapsed > expiresIn) {
      throw new Error("Device flow timeout expired.");
    }

    // Otherwise exit
    throw new Error(`Device flow error: ${errorCode}`);
  }
}

export default async (config: Auth0Config): Promise<TokenResponse | null> => {
  try {
    const token = await pollForToken(config);
    return token;
  } catch (error: any) {
    console.log("🔴 Seqera:", error.message);
    console.error(error);
    return null;
  }
};
