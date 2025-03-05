import * as vscode from "vscode";
import { platformApiUrl } from "./constants";
import { varNames } from "../auth/constants";

export type User = {
  id: number;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  organization?: string;
  description?: string;
  avatar?: string;
  avatarId?: string;
  notification?: string;
  termsOfUseConsent: boolean;
  marketingConsent: boolean;
  lastAccess: string;
  dateCreated: string;
  lastUpdated: string;
  deleted: boolean;
  trusted: boolean;
  options: {
    githubToken?: string;
    maxRuns?: number;
    hubspotId?: number;
  };
};

export type UserInfo = {
  user: User;
  needConsent: boolean;
  defaultWorkspaceId: number;
};

const fetchUserInfo = async (
  context: vscode.ExtensionContext,
  token: string
): Promise<UserInfo | null> => {
  const accessToken = await context.secrets.get(varNames.accessToken);
  const endpointURL = `${platformApiUrl}/api/user-info`;

  if (!accessToken) {
    console.log("🔴 Seqera: No access token stored");
    return null;
  } else {
    console.log("🟢 Seqera: Access token found, attempting to fetch user info");
  }

  const response = await fetch(endpointURL, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    const json = await response.text();
    console.log("🟣 401", response);
    console.log("🟣 401", json);
    await context.secrets.delete(varNames.accessToken);
    throw new Error("Failed to fetch user info, deleted access token");
  }

  const data = await response.json();
  console.log("🟣", response);
  console.log("🟣", data);
  return data as UserInfo;
};

export default async (
  context: vscode.ExtensionContext,
  token: string
): Promise<UserInfo | null> => {
  try {
    return await fetchUserInfo(context, token);
  } catch (error: any) {
    console.log("🔴 Seqera:", error.message);
    console.error(error);
    return null;
  }
};
