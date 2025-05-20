import {
  authentication,
  AuthenticationProvider,
  AuthenticationProviderAuthenticationSessionsChangeEvent,
  AuthenticationSession,
  Disposable,
  env,
  EventEmitter,
  ExtensionContext,
  ProgressLocation,
  Uri,
  window
} from "vscode";
import { v4 as uuid } from "uuid";
import { PromiseAdapter, promiseFromEvent } from "./utils/promiseFromEvent";
import fetch from "node-fetch";
import { fetchUserInfo } from "../../webview/WebviewProvider/lib/platform/utils";
import UriEventHandler from "./utils/UriEventHandler";

export const AUTH_TYPE = `auth0`;
const AUTH_NAME = `Auth0`;
const CLIENT_ID = `7PJnvIXiXK3HkQR43c4zBf3bWuxISp9W`;
var CLIENT_SECRET =
  "tZ3N8vHuvpLQlzdGEhel4Vz5DeluNNyTtid-2jFBdDiXmIGNbX9yhjDmQ2Pg6VT-";
const AUTH0_DOMAIN = `seqera-development.eu.auth0.com`;
export const SESSIONS_SECRET_KEY = `${AUTH_TYPE}.sessions`;

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

class Auth0AuthenticationProvider
  implements AuthenticationProvider, Disposable
{
  private _sessionChangeEmitter =
    new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
  private _disposable: Disposable;
  private _pendingStates: string[] = [];
  private _codeExchangePromises = new Map<
    string,
    { promise: Promise<string>; cancel: EventEmitter<void> }
  >();
  private _uriHandler = new UriEventHandler();
  private webviewView: string | undefined;

  constructor(private readonly context: ExtensionContext) {
    this._disposable = Disposable.from(
      authentication.registerAuthenticationProvider(
        AUTH_TYPE,
        AUTH_NAME,
        // @ts-ignore
        this,
        { supportsMultipleAccounts: false }
      ),
      window.registerUriHandler(this._uriHandler)
    );
  }

  get onDidChangeSessions() {
    return this._sessionChangeEmitter.event;
  }

  get redirectUri() {
    const publisher = this.context.extension.packageJSON.publisher;
    const name = this.context.extension.packageJSON.name;
    return `vscode://${publisher}.${name}`;
  }

  // @ts-ignore
  public async getSessions(
    scopes?: string[]
  ): Promise<readonly AuthenticationSession[]> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (allSessions) {
      return Object.freeze(JSON.parse(allSessions) as AuthenticationSession[]);
    }
    return [];
  }

  public async createSession(scopes: string[]): Promise<AuthenticationSession> {
    try {
      var token: string = "";
      if (CLIENT_SECRET) {
        // Note: for getting a refresh token, we need to use this "code" flow.
        // Use the Auth0 app's secret, and ensure "Allow Offline Access" is enabled.
        const code = await this.startLogin(scopes, "code");
        console.log("🟢 code", code);
        if (!code) throw new Error(`Auth0 login failure (code flow)`);
        const auth0Response = await this.fetchAuth0Tokens(code);
        token = auth0Response.access_token;
      } else {
        token = await this.startLogin(scopes, "token");
        if (!token) throw new Error(`Auth0 login failure (token flow)`);
      }
      const { email, name, nickname } = await this.fetchUserInfoAuth0(token);
      const userInfo = await fetchUserInfo(token);
      console.log("🉑 userInfo", userInfo);

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

      this._sessionChangeEmitter.fire({
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
        this._sessionChangeEmitter.fire({
          added: [],
          removed: [session],
          changed: []
        });
      }
    }
  }

  public async dispose() {
    this._disposable.dispose();
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

        this._pendingStates.push(stateId);

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

        let codeExchangePromise = this._codeExchangePromises.get(scopeString);
        if (!codeExchangePromise) {
          codeExchangePromise = promiseFromEvent(
            this._uriHandler.event,
            this.handleUri(scopes)
          );
          this._codeExchangePromises.set(scopeString, codeExchangePromise);
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
          this._pendingStates = this._pendingStates.filter(
            (n) => n !== stateId
          );
          codeExchangePromise?.cancel.fire();
          this._codeExchangePromises.delete(scopeString);
        }
      }
    );
  }

  private handleUri: (
    scopes: readonly string[]
  ) => PromiseAdapter<Uri, string> =
    (scopes) => async (uri, resolve, reject) => {
      const query = uri.query
        ? new URLSearchParams(uri.query)
        : new URLSearchParams(uri.fragment);
      const accessToken = query.get("code") || query.get("access_token");
      const state = query.get("state");

      if (!accessToken) {
        reject(new Error("No token"));
        return;
      }
      if (!state) {
        reject(new Error("No state"));
        return;
      }

      if (!this._pendingStates.some((n) => n === state)) {
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

export default Auth0AuthenticationProvider;
