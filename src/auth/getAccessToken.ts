import { ExtensionContext } from "vscode";
import { jwtExpired } from "./AuthProvider/utils/jwt";

import { STORAGE_KEY } from "./AuthProvider";
import refreshAccessToken from "./refreshAccessToken";
import { AuthSession } from "./AuthProvider/types";

export type Auth0TokenResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

const getAccessToken = async (
  context: ExtensionContext
): Promise<string | undefined> => {
  const sessionsStr = await context.secrets.get(STORAGE_KEY);
  const sessions = sessionsStr ? JSON.parse(sessionsStr) : [];
  const session = sessions[0] as AuthSession;
  let token = session?.accessToken;

  // Check if token is expired
  if (token && jwtExpired(token)) {
    const newToken = await refreshAccessToken(session, context);
    if (newToken) return newToken;
  }
  return token;
};

export default getAccessToken;
