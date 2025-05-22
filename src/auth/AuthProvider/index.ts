import {
  authentication as vscodeAuth,
  AuthenticationProvider,
  AuthenticationProviderAuthenticationSessionsChangeEvent as ChangeEvent,
  AuthenticationSession,
  Disposable,
  env,
  EventEmitter,
  ExtensionContext,
  ProgressLocation,
  Uri,
  window,
  WebviewView
} from "vscode";
import { v4 as uuid } from "uuid";
import { PromiseAdapter, promiseFromEvent } from "./utils/promiseFromEvent";
import fetch from "node-fetch";
import { fetchUserInfo } from "../../webview/WebviewProvider/lib/platform/utils";
import UriEventHandler from "./utils/UriEventHandler";
import { ExchangePromise } from "./types";

const TYPE = `auth0`;
const NAME = `Auth0`;
const CLIENT_ID = `7PJnvIXiXK3HkQR43c4zBf3bWuxISp9W`;
const AUTH0_DOMAIN = `seqera-development.eu.auth0.com`;
export const SESSIONS_SECRET_KEY = `${TYPE}.sessions`;

const CLIENT_SECRET =
  "tZ3N8vHuvpLQlzdGEhel4Vz5DeluNNyTtid-2jFBdDiXmIGNbX9yhjDmQ2Pg6VT-";
// TODO: Use a prod Auth0 app secret set via env variable
// TODO: This value will be rolled up into the built extension anyway - is this okay?

type ResponseAuth0 = {
  access_token: string;
  refresh_token?: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
  id_token: string;
};

type UserInfoAuth0 = {
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

class AuthProvider implements AuthenticationProvider, Disposable {
  private eventEmitter = new EventEmitter<ChangeEvent>();
  private currentInstance: Disposable;
  private pendingIDs: string[] = [];
  private promises = new Map<string, ExchangePromise>();
  private uriHandler = new UriEventHandler();
  private webviewView!: WebviewView["webview"];

  constructor(private readonly context: ExtensionContext) {
    const { registerAuthenticationProvider: register } = vscodeAuth;
    const options = { supportsMultipleAccounts: false };
    const authInstance = register(TYPE, NAME, this, options);
    const uriHandler = window.registerUriHandler(this.uriHandler);
    this.currentInstance = Disposable.from(authInstance, uriHandler);
  }

  get onDidChangeSessions() {
    return this.eventEmitter.event;
  }

  get redirectUri() {
    const publisher = this.context.extension.packageJSON.publisher;
    const name = this.context.extension.packageJSON.name;
    return `vscode://${publisher}.${name}`;
  }

  public async getSessions(): Promise<AuthenticationSession[]> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (!allSessions) return [];
    return JSON.parse(allSessions) as AuthenticationSession[];
  }

  public async createSession(scopes: string[]): Promise<AuthenticationSession> {
    try {
      var token: string = "";
      if (CLIENT_SECRET) {
        // Note: for getting a refresh token, we need to use this "code" flow.
        // Use the Auth0 app's secret, and ensure "Allow Offline Access" is enabled.
        const code = await this.startLogin(scopes, "code");
        if (!code) throw new Error(`Auth0 login failure (code flow)`);
        const auth0Response = await this.fetchAuth0Tokens(code);
        token = auth0Response.access_token;
      } else {
        token = await this.startLogin(scopes, "token");
        if (!token) throw new Error(`Auth0 login failure (token flow)`);
      }
      const { email, name, nickname } = await this.fetchUserInfoAuth0(token);
      const userInfo = await fetchUserInfo(token);

      const session: AuthenticationSession = {
        id: uuid(),
        accessToken: token,
        account: {
          label: name + "(seqera: " + nickname + " )",
          id: email
        },
        scopes: []
      };

      await this.context.secrets.store(
        SESSIONS_SECRET_KEY,
        JSON.stringify([session])
      );

      this.eventEmitter.fire({
        added: [session],
        removed: [],
        changed: []
      });

      return session;
    } catch (e) {
      window.showErrorMessage(`Sign in failed: ${e}`);
      throw e;
    }
  }

  public async removeSession(sessionId: string): Promise<void> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (allSessions) {
      let sessions = JSON.parse(allSessions) as AuthenticationSession[];
      const sessionIdx = sessions.findIndex((s) => s.id === sessionId);
      const session = sessions[sessionIdx];
      sessions.splice(sessionIdx, 1);

      await this.context.secrets.store(
        SESSIONS_SECRET_KEY,
        JSON.stringify(sessions)
      );

      if (session) {
        this.eventEmitter.fire({
          added: [],
          removed: [session],
          changed: []
        });
      }
    }
  }

  public async dispose() {
    this.currentInstance.dispose();
  }

  private async startLogin(scopes: string[] = [], response_type: string) {
    return await window.withProgress<string>(
      {
        location: ProgressLocation.Notification,
        title: "Signing in to Auth0...",
        cancellable: true
      },
      async (_, token) => {
        const stateId = uuid();

        this.pendingIDs.push(stateId);

        const scopeString = scopes.join(" ");

        if (!scopes.includes("openid")) {
          scopes.push("openid");
        }
        if (!scopes.includes("profile")) {
          scopes.push("profile");
        }
        if (!scopes.includes("email")) {
          scopes.push("email");
        }
        if (!scopes.includes("offline_access")) {
          scopes.push("offline_access");
        }

        console.log("🟠 login scopes", scopes);

        const searchParams = new URLSearchParams([
          ["response_type", response_type],
          ["client_id", CLIENT_ID],
          ["redirect_uri", this.redirectUri],
          ["state", stateId],
          ["scope", scopes.join(" ")],
          ["audience", "platform"],
          ["prompt", "login"]
        ]);
        const uri = Uri.parse(
          `https://${AUTH0_DOMAIN}/authorize?${searchParams.toString()}`
        );
        await env.openExternal(uri);

        let codeExchangePromise = this.promises.get(scopeString);
        if (!codeExchangePromise) {
          codeExchangePromise = promiseFromEvent(
            this.uriHandler.event,
            this.handleUri(scopes)
          );
          this.promises.set(scopeString, codeExchangePromise);
        }

        try {
          return await Promise.race([
            codeExchangePromise.promise,
            new Promise<string>((_, reject) =>
              setTimeout(() => reject("Cancelled"), 60000)
            ),
            promiseFromEvent<any, any>(
              token.onCancellationRequested,
              (_, __, reject) => {
                reject("User Cancelled");
              }
            ).promise
          ]);
        } finally {
          this.pendingIDs = this.pendingIDs.filter((n) => n !== stateId);
          codeExchangePromise?.cancel.fire();
          this.promises.delete(scopeString);
        }
      }
    );
  }

  private handleUri: (
    scopes: readonly string[]
  ) => PromiseAdapter<Uri, string> =
    (scopes) => async (uri, resolve, reject) => {
      const queryString = uri.query || uri.fragment;
      const query = new URLSearchParams(queryString);
      const accessToken = query.get("code") || query.get("access_token");
      const state = query.get("state");

      console.log("🟠 queryString", queryString);
      console.log("🟠 query", query);
      console.log("🟠 scopes", scopes);
      console.log("🟠 state", state);

      if (!accessToken) {
        reject(new Error("No token"));
        return;
      }
      if (!state) {
        reject(new Error("No state"));
        return;
      }

      if (!this.pendingIDs.some((n) => n === state)) {
        reject(new Error("State not found"));
        return;
      }

      resolve(accessToken);
    };

  private async fetchAuth0Tokens(code: string): Promise<ResponseAuth0> {
    const data = new URLSearchParams([
      ["grant_type", "authorization_code"],
      ["client_id", CLIENT_ID],
      ["client_secret", CLIENT_SECRET],
      ["code", code],
      ["redirect_uri", this.redirectUri]
    ]);
    const auth = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
      method: `POST`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: data.toString()
    });
    const res = (await auth.json()) as ResponseAuth0;
    return res;
  }

  private async fetchUserInfoAuth0(token: string): Promise<UserInfoAuth0> {
    const response = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const res = (await response.json()) as UserInfoAuth0;
    return res;
  }

  public setWebview(webview: any) {
    this.webviewView = webview;
  }
}

export default AuthProvider;
