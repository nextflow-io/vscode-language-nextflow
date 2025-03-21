import { ExtensionContext, WebviewView } from "vscode";
import getAccessToken from "./getAccessToken";
import fetchUserInfo from "./utils/fetchUserInfo";
import fetchWorkspaces from "./utils/fetchWorkspaces";
import fetchComputeEnvs from "./utils/fetchComputeEnvs";
import debounce from "../../../utils/debounce";

const fetchPlatformData = async (
  context: ExtensionContext,
  viewID: string,
  view?: WebviewView
): Promise<any> => {
  const token = await getAccessToken(context);
  console.log("🟣 fetchPlatformData", token);
  if (!token) {
    throw new Error("No token found");
  }
  const userInfo = await fetchUserInfo(token);
  if (!userInfo) {
    throw new Error("Could not fetch user info");
  }
  const workspaces = await fetchWorkspaces(token, userInfo.user.id);
  const computeEnvs = await fetchComputeEnvs(token, userInfo.user.id);
  const towerData = {
    userInfo,
    workspaces,
    computeEnvs
  };
  view?.webview.postMessage({
    command: "setPlatformData",
    viewID,
    towerData
  });
};

const debouncedFetchPlatformData = debounce(fetchPlatformData, 100);

export default debouncedFetchPlatformData;
