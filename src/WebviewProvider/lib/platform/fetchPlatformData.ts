import { ExtensionContext, WebviewView } from "vscode";
import getAccessToken from "./getAccessToken";
import fetchUserInfo from "./utils/fetchUserInfo";
import fetchWorkspaces from "./utils/fetchWorkspaces";
import fetchComputeEnvs from "./utils/fetchComputeEnvs";
import debounce from "../../../utils/debounce";

import { Workspace, UserInfoResponse, ComputeEnv } from "./utils/types";
import { jwtExpired } from "../../../AuthProvider/utils/jwt";
import { decodeJWT } from "../../../AuthProvider/utils/jwt";

type PlatformData = {
  userInfo?: UserInfoResponse;
  workspaces?: Workspace[];
  computeEnvs?: ComputeEnv[];
};

const fetchPlatformData = async (
  context: ExtensionContext,
  viewID: string,
  view?: WebviewView
): Promise<{
  viewID: string;
  platformData?: PlatformData;
  authState?: any;
}> => {
  const token = await getAccessToken(context);
  const hasToken = !!token;
  const decoded = decodeJWT(token);
  const tokenExpired = jwtExpired(token);
  const tokenExpiry = decoded?.exp;
  const isAuthenticated = hasToken && !tokenExpired;
  const data = {
    viewID,
    authState: {
      hasToken,
      tokenExpired,
      tokenExpiry,
      isAuthenticated,
      error: ""
    },
    platformData: {}
  };

  if (!hasToken) {
    view?.webview?.postMessage(data);
    return data;
  }

  const userInfo = await fetchUserInfo(token);

  if (!userInfo.user) {
    if (userInfo.message) data.authState.error = userInfo.message;
    view?.webview?.postMessage(data);
    return data;
  }

  const workspaces = await fetchWorkspaces(token, userInfo.user.id);
  const computeEnvs = await fetchComputeEnvs(token, workspaces);

  data.platformData = {
    userInfo,
    workspaces,
    computeEnvs
  };

  view?.webview.postMessage(data);

  return data;
};

const debouncedFetchPlatformData = debounce(fetchPlatformData, 100);

export default debouncedFetchPlatformData;
