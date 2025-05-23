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
import UriEventHandler from "./utils/UriEventHandler";
import { ExchangePromise } from "./types";
import {
  fetchPlatformData,
  clearPlatformData
} from "../../webview/WebviewProvider/lib";
import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_SCOPES
} from "../../constants";

const TYPE = `auth0`;
const NAME = `Seqera Cloud`;
const AUTH0_DOMAIN = `seqera-development.eu.auth0.com`;
export const SESSIONS_SECRET_KEY = `${TYPE}.sessions`;

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

type Auth0LoginType = "code" | "token";

type OnReturn = PromiseAdapter<Uri, string>;

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

  public async getSessions(): Promise<AuthenticationSession[]> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (!allSessions) return [];
    return JSON.parse(allSessions) as AuthenticationSession[];
  }

  public async createSession(scopes: string[]): Promise<AuthenticationSession> {
    try {
      let accessToken;

      if (AUTH0_CLIENT_SECRET) {
        // Note: this "code" response type is for allowing token refresh functionality. getting a
        // refresh token, we need to use this "code" flow. Use the Auth0 app's
        // secret, and ensure "Allow Offline Access" is enabled.
        const code = await this.startLogin("code");
        if (!code) throw new Error(`Auth0 login failure (code flow)`);
        const auth0Response = await this.fetchAuth0Tokens(code);
        accessToken = auth0Response.access_token;
      } else {
        accessToken = await this.startLogin("token");
        if (!accessToken) throw new Error(`Auth0 login failure (token flow)`);
      }

      // Login success, now fetch from Seqera Cloud
      const { userInfo } = await fetchPlatformData(
        accessToken,
        this.webviewView,
        this.context
      );
      const user = userInfo?.user;
      if (!user) throw new Error(`User not found`);

      // If that worked, store the vscode session
      const session: AuthenticationSession = {
        id: uuid(),
        accessToken,
        account: {
          label: user?.userName,
          id: user.email
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

      clearPlatformData(this.webviewView, this.context);

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

  get browserCallbackUri() {
    const publisher = this.context.extension.packageJSON.publisher;
    const name = this.context.extension.packageJSON.name;
    return `vscode://${publisher}.${name}`;
  }

  private async openBrowser(type: Auth0LoginType, stateId: string) {
    const searchParams = new URLSearchParams([
      ["response_type", type],
      ["client_id", AUTH0_CLIENT_ID],
      ["redirect_uri", this.browserCallbackUri],
      ["state", stateId],
      ["scope", AUTH0_SCOPES],
      ["audience", "platform"],
      ["prompt", "login"]
    ]);
    const uri = Uri.parse(
      `https://${AUTH0_DOMAIN}/authorize?${searchParams.toString()}`
    );
    await env.openExternal(uri);
  }

  private async startLogin(type: Auth0LoginType) {
    return await window.withProgress(
      {
        location: ProgressLocation.Notification,
        title: "Signing in to Seqera Cloud",
        cancellable: true
      },
      async (_, token) => {
        // Add pending login ID to client
        const stateId = uuid();
        this.pendingIDs.push(stateId);

        await this.openBrowser(type, stateId);

        let codeExchangePromise = this.promises.get(AUTH0_SCOPES);
        if (!codeExchangePromise) {
          codeExchangePromise = promiseFromEvent(
            this.uriHandler.event,
            this.onReturnFromWeb
          );
          this.promises.set(AUTH0_SCOPES, codeExchangePromise);
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
          this.promises.delete(AUTH0_SCOPES);
        }
      }
    );
  }

  private onReturnFromWeb: OnReturn = async (uri, resolve, reject) => {
    const queryString = uri.query || uri.fragment;
    const query = new URLSearchParams(queryString);
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

    if (!this.pendingIDs.some((n) => n === state)) {
      reject(new Error("Pending login not found"));
      return;
    }

    resolve(accessToken);
  };

  private async fetchAuth0Tokens(code: string): Promise<ResponseAuth0> {
    const data = new URLSearchParams([
      ["grant_type", "authorization_code"],
      ["client_id", AUTH0_CLIENT_ID],
      ["client_secret", AUTH0_CLIENT_SECRET],
      ["code", code],
      ["redirect_uri", this.browserCallbackUri]
    ]);
    const auth = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
      method: `POST`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: data.toString()
    });
    const res = (await auth.json()) as ResponseAuth0;
    return res;
  }

  private async fetchAuth0User(token: string): Promise<UserInfoAuth0> {
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
