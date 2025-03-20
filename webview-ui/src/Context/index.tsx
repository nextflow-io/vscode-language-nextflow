import WorkspaceProvider, { useWorkspaceContext } from "./WorkspaceProvider";
import TowerProvider, { useTowerContext } from "./TowerProvider";
import { getVscode } from "./utils";
import { useState } from "react";
import { useEffect } from "react";

const vscode = getVscode();

type Props = {
  children: React.ReactNode;
};

export type AuthState = {
  hasToken?: boolean;
  tokenExpired?: boolean;
  tokenExpiry?: number;
  isAuthenticated?: boolean;
  error?: string;
};

type viewID = "workflows" | "processes" | "userInfo" | null;

const Context = ({ children }: Props) => {
  const state = vscode.getState();
  const [viewID, setViewID] = useState<viewID>(state?.viewID || null);
  const [authState, setAuthState] = useState<AuthState>(state?.authState || {});

  useEffect(() => {
    vscode.setState({ authState });
  }, [authState]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("🟠 handleMessage", event.data);
      const { data } = event;
      if (data.viewID) setViewID(data.viewID);
      if (data.authState) setAuthState(data.authState);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <WorkspaceProvider vscode={vscode} viewID={viewID}>
      {viewID === "userInfo" ? (
        <TowerProvider vscode={vscode} authState={authState}>
          {children}
        </TowerProvider>
      ) : (
        <>{children}</>
      )}
    </WorkspaceProvider>
  );
};

export { useWorkspaceContext, useTowerContext };

export default Context;
