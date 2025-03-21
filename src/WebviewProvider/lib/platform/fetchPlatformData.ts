import { ExtensionContext, WebviewView } from "vscode";
import getAccessToken from "./getAccessToken";
import fetchUserInfo from "./utils/fetchUserInfo";
import fetchWorkspaces from "./utils/fetchWorkspaces";
import fetchComputeEnvs from "./utils/fetchComputeEnvs";
import debounce from "../../../utils/debounce";

import { Workspace, UserInfoResponse, ComputeEnv } from "./utils/types";
import getAuthState, { AuthState } from "./getAuthState";

type PlatformData = {
  viewID: string;
  authState: AuthState;
  userInfo?: UserInfoResponse;
  workspaces?: Workspace[];
  computeEnvs?: ComputeEnv[];
};

const fetchPlatformData = async (
  accessToken: string,
  viewID: string,
  view?: WebviewView
): Promise<PlatformData> => {
  const authState = await getAuthState(accessToken);

  let data: PlatformData = {
    viewID,
    authState
  };

  if (!accessToken) {
    view?.webview?.postMessage(data);
    return data;
  }

  const userInfo = await fetchUserInfo(accessToken);

  if (!userInfo.user) {
    if (userInfo.message) data.authState.error = userInfo.message;
    view?.webview?.postMessage(data);
    return data;
  }

  const workspaces = await fetchWorkspaces(accessToken, userInfo.user.id);
  const computeEnvs = await fetchComputeEnvs(accessToken, workspaces);

  data = {
    ...data,
    userInfo,
    workspaces,
    computeEnvs
  };

  view?.webview.postMessage(data);

  return data;
};

const debouncedFetchPlatformData = debounce(fetchPlatformData, 100);

export default debouncedFetchPlatformData;
