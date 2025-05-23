import { AuthenticationSession, ExtensionContext } from "vscode";
import { jwtExpired } from "./AuthProvider/utils/jwt";
import fetch from "node-fetch";

import { SESSIONS_SECRET_KEY } from "./AuthProvider";
import { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } from "../constants";

type SessionWithRefresh = AuthenticationSession & { refreshToken?: string };
type Auth0TokenResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

const getAccessToken = async (
  context: ExtensionContext
): Promise<string | undefined> => {
  const sessionsStr = await context.secrets.get(SESSIONS_SECRET_KEY);
  const sessions = sessionsStr ? JSON.parse(sessionsStr) : [];
  const session = sessions[0] as SessionWithRefresh;
  let token = session?.accessToken;

  // Check if token is expired
  if (token && jwtExpired(token)) {
    // 🟢 Token expired, try to refresh
    const refreshToken = session.refreshToken;
    if (refreshToken) {
      try {
        const data = new URLSearchParams([
          ["grant_type", "refresh_token"],
          ["client_id", AUTH0_CLIENT_ID],
          ["client_secret", AUTH0_CLIENT_SECRET],
          ["refresh_token", refreshToken]
        ]);
        const response = await fetch(
          `https://seqera-development.eu.auth0.com/oauth/token`,
          {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            body: data.toString()
          }
        );
        const tokens = (await response.json()) as Auth0TokenResponse;
        if (tokens.access_token) {
          // 🟢 Refreshed access token
          // Update the session object
          const updatedSession: SessionWithRefresh = {
            ...session,
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token || session.refreshToken
          };
          // Save updated session
          await context.secrets.store(
            SESSIONS_SECRET_KEY,
            JSON.stringify([updatedSession])
          );
          token = tokens.access_token;
        }
      } catch (err) {
        console.log("🟢 Failed to refresh token", err);
        // Optionally: clear session or prompt re-login
      }
    }
  }
  return token;
};

export default getAccessToken;
