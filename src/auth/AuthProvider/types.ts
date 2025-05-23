import { AuthenticationSession, EventEmitter, Uri } from "vscode";
import { PromiseAdapter } from "./utils/promiseFromEvent";

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

export type ExchangePromise = {
  promise: Promise<string>;
  cancel: EventEmitter<void>;
};

export type AuthSession = AuthenticationSession & {
  refreshToken?: string;
};

export type ResponseAuth0 = {
  access_token: string;
  refresh_token?: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
  id_token: string;
};

export type UserInfoAuth0 = {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  nickname: string;
  picture: string;
  preferred_username: string;
  sub: string;
  updated_at: string;
};

export type Auth0LoginType = "code" | "token";
export type OnReturn = PromiseAdapter<Uri, string>;
