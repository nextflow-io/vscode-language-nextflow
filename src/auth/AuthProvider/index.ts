import { v4 as uuid } from "uuid";
import {
  authentication as vscodeAuth,
  env,
  window,
  EventEmitter,
  Disposable,
  ProgressLocation,
  Uri
} from "vscode";

import { PromiseAdapter, promiseFromEvent } from "./utils/promiseFromEvent";
import UriEventHandler from "./utils/UriEventHandler";
import { fetchPlatformData } from "../../webview/WebviewProvider/lib";
import { SEQERA_PLATFORM_URL } from "../../constants";

import type {
  AuthenticationProvider,
  AuthenticationProviderAuthenticationSessionsChangeEvent as ChangeEvent,
  AuthenticationSession,
  ExtensionContext,
  WebviewView
} from "vscode";

type ExchangePromise = {
  promise: Promise<string>;
  cancel: EventEmitter<void>;
};

const TYPE = `auth0`;
const NAME = `Seqera Platform`;
const AUTH_ENDPOINT = `${SEQERA_PLATFORM_URL}/oauth/login/auth0?source=vscode`;
export const STORAGE_KEY_NAME = `${TYPE}.sessions`;

class AuthProvider implements AuthenticationProvider, Disposable {
  private uriHandler = new UriEventHandler();
  private eventEmitter = new EventEmitter<ChangeEvent>();
  private currentInstance: Disposable;
  private pendingIDs: string[] = []; // TODO: Does this do anything?
  private promises = new Map<string, ExchangePromise>();
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
    return `${env.uriScheme}://${publisher}.${name}`;
  }

  public async getSessions(): Promise<AuthenticationSession[]> {
    const sessions = await this.context.secrets.get(STORAGE_KEY_NAME);
    if (!sessions) return [];
    return JSON.parse(sessions) as AuthenticationSession[];
  }

  public async createSession(scopes: string[]): Promise<AuthenticationSession> {
    try {
      const accessToken = await this.login(scopes);
      if (!accessToken) {
        throw new Error(`Platform login failure`);
      }

      const data = await fetchPlatformData(
        accessToken,
        this.webviewView,
        this.context
      );
      const { userInfo } = data;
      const account = {
        label: userInfo?.user?.userName || "Undefined",
        id: userInfo?.user?.email || "undefined"
      };

      const session: AuthenticationSession = {
        id: uuid(),
        accessToken,
        account,
        scopes: []
      };

      await this.context.secrets.store(
        STORAGE_KEY_NAME,
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
    const allSessions = await this.context.secrets.get(STORAGE_KEY_NAME);
    if (!allSessions) return;
    let sessions = JSON.parse(allSessions) as AuthenticationSession[];
    const sessionIdx = sessions.findIndex((s) => s.id === sessionId);
    const session = sessions[sessionIdx];
    sessions.splice(sessionIdx, 1);

    await this.context.secrets.store(
      STORAGE_KEY_NAME,
      JSON.stringify(sessions)
    );

    this.webviewView?.postMessage({ authState: {} });
    const vsCodeState = this.context.workspaceState;
    vsCodeState.update("platformData", {});

    if (session) {
      this.eventEmitter.fire({
        added: [],
        removed: [session],
        changed: []
      });
    }
  }

  public async dispose() {
    this.currentInstance.dispose();
  }

  private async login(scopes: string[] = []) {
    return await window.withProgress<string>(
      {
        location: ProgressLocation.Notification,
        title: "Signing in to Seqera Platform...",
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

        const uri = Uri.parse(AUTH_ENDPOINT);
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
      const query = new URLSearchParams(uri.fragment);
      const accessToken = query.get("access_token");

      if (!accessToken) {
        reject(new Error("No token"));
        return;
      }

      resolve(accessToken);
    };

  public setWebview(webview: any) {
    this.webviewView = webview;
  }
}

export default AuthProvider;
