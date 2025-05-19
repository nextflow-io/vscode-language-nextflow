import { AuthenticationSession, ExtensionContext } from "vscode";

import { SESSIONS_SECRET_KEY } from "./AuthProvider";

const getAccessToken = async (
  context: ExtensionContext
): Promise<string | undefined> => {
  const sessionsStr = await context.secrets.get(SESSIONS_SECRET_KEY);
  const sessions = sessionsStr ? JSON.parse(sessionsStr) : [];
  const session = sessions[0] as AuthenticationSession;
  const token = session?.accessToken;
  return token;
};

export default getAccessToken;
