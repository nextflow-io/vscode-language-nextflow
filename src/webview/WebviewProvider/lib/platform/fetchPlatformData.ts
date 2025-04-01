import { ExtensionContext, WebviewView } from "vscode";
import fetchUserInfo from "./utils/fetchUserInfo";
import fetchWorkspaces from "./utils/fetchWorkspaces";
import fetchComputeEnvs from "./utils/fetchComputeEnvs";
import debounce from "../debounce";

import { Workspace, UserInfoResponse, ComputeEnv } from "./utils/types";
import getAuthState, { AuthState } from "./getAuthState";
import { expired } from "../../../../auth/AuthProvider/utils/jwt";

type PlatformData = {
  viewID: string;
  authState: AuthState;
  userInfo?: UserInfoResponse;
  workspaces?: Workspace[];
  computeEnvs?: ComputeEnv[];
};

function handleUpdate(
  data: PlatformData,
  context: ExtensionContext,
  view: WebviewView["webview"]
) {
  const vsCodeState = context.workspaceState;
  vsCodeState.update("platformData", data);
  view.postMessage(data);
}

const fetchPlatformData = async (
  accessToken: string,
  viewID: string,
  view: WebviewView["webview"],
  context: ExtensionContext,
  refresh?: boolean
): Promise<PlatformData> => {
  const wsState = context.workspaceState;
  const savedState = wsState.get("platformData") as PlatformData | undefined;
  const savedAuth = savedState?.authState as AuthState | undefined;
  let hasExpired = expired(savedAuth?.tokenExpiry);

  if (!hasExpired && !refresh) {
    view.postMessage(savedState);
    return savedState as PlatformData;
  }

  const authState = await getAuthState(accessToken);
  hasExpired = expired(authState?.tokenExpiry);

  let data: PlatformData = {
    viewID,
    authState
  };

  if (hasExpired) {
    handleUpdate(data, context, view);
    return data;
  }

  const userInfo = await fetchUserInfo(accessToken);

  if (!userInfo.user) {
    if (userInfo.message) data.authState.error = userInfo.message;
    handleUpdate(data, context, view);
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

  handleUpdate(data, context, view);

  return data;
};

const debouncedFetchPlatformData = debounce(fetchPlatformData, 100);

export default debouncedFetchPlatformData;
