import { AuthenticationSession, ExtensionContext } from "vscode";

import { STORAGE_KEY_NAME } from "./AuthProvider";

const getAccessToken = async (
  context: ExtensionContext
): Promise<string | undefined> => {
  const sessionsStr = await context.secrets.get(STORAGE_KEY_NAME);
  const sessions = sessionsStr ? JSON.parse(sessionsStr) : [];
  const session = sessions[0] as AuthenticationSession;
  const token = session?.accessToken;
  return token;
};

export default getAccessToken;
