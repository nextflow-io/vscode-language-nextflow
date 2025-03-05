import { client_id, auth0Domain } from "./constants";

export type Auth0Config = {
  device_code: string;
  user_code: string;
  verification_uri: string;
  verification_uri_complete?: string;
  expires_in: number;
  interval: number;
};

async function getConfig(): Promise<Auth0Config> {
  const configEndpoint = `https://${auth0Domain}/oauth/device/code`;

  const response = await fetch(configEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id,
      scope: "openid email profile",
      audience: "https://seqera-development.eu.auth0.com/api/v2/",
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get auth0 config: ${response.statusText}`);
  }

  const responseBody = await response.json();
  return responseBody as Auth0Config;
}

export default getConfig;
