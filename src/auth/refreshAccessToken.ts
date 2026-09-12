// import fetch from "node-fetch";

import { STORAGE_KEY } from "./AuthProvider";
import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN
} from "../constants";
import { Auth0TokenResponse } from "./getAccessToken";
import { ExtensionContext } from "vscode";
import { AuthSession } from "./AuthProvider/types";

const refreshAccessToken = async (
  session: AuthSession,
  context: ExtensionContext
): Promise<string | undefined> => {
  const refreshToken = session.refreshToken;
  if (!refreshToken) return undefined;

  try {
    const data = new URLSearchParams([
      ["grant_type", "refresh_token"],
      ["client_id", AUTH0_CLIENT_ID],
      ["client_secret", AUTH0_CLIENT_SECRET],
      ["refresh_token", refreshToken]
    ]);

    const response = await fetch(`${AUTH0_DOMAIN}/oauth/token`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: data.toString()
    });

    const tokens = (await response.json()) as Auth0TokenResponse;
    const { access_token, refresh_token } = tokens;
    if (!access_token) throw new Error(`No new access token`);

    const updatedSession: AuthSession = {
      ...session,
      accessToken: access_token,
      refreshToken: refresh_token || session.refreshToken
    };
    await context.secrets.store(STORAGE_KEY, JSON.stringify([updatedSession]));
    return access_token;
  } catch (err) {
    console.log("🔴 Failed to refresh token", err);
    return undefined;
  }
  return undefined;
};

export default refreshAccessToken;
