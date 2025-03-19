import { ExtensionContext, WebviewView } from "vscode";
import { getAccessToken } from "..";
import jwtExpired from "../../../AuthProvider/utils/jwtExpired";
import { jwtDecode } from "jwt-decode";

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
    const decoded = jwtDecode(token);
    tokenExpiry = decoded.exp;
    tokenExpired = jwtExpired(token);
  }
  const isAuthenticated = hasToken && !tokenExpired;
  view?.webview.postMessage({
    viewID,
    authState: {
      hasToken,
      tokenExpired,
      tokenExpiry,
      isAuthenticated
    }
  });
  return { hasToken, tokenExpired, tokenExpiry, isAuthenticated };
};

export default getAuthState;
