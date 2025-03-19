import { ExtensionContext, WebviewView } from "vscode";
import { getAccessToken } from "..";
import { jwtExpired, decodeJWT } from "../../../AuthProvider/utils/jwt";

const getAuthState = async (
  context: ExtensionContext,
  viewID: string,
  view?: WebviewView
): Promise<{
  hasToken: boolean;
  tokenExpired: boolean;
  tokenExpiry: number;
  isAuthenticated: boolean;
}> => {
  const token = await getAccessToken(context);
  const hasToken = !!token;
  let tokenExpired = false;
  let tokenExpiry: any = 0;
  if (typeof token === "string") {
    const decoded = decodeJWT(token);
    tokenExpiry = decoded.exp;
    tokenExpired = jwtExpired(token);
  }
  const isAuthenticated = hasToken && !tokenExpired;
  if (viewID === "userInfo") {
    view?.webview.postMessage({
      authState: {
        hasToken,
        tokenExpired,
        tokenExpiry,
        isAuthenticated
      }
    });
  }
  return { hasToken, tokenExpired, tokenExpiry, isAuthenticated };
};

export default getAuthState;
