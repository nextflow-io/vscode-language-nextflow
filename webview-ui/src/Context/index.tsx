import { useEffect, useState } from "react";
import WorkspaceProvider, { useWorkspaceContext } from "./WorkspaceProvider";
import TowerProvider, { useTowerContext } from "./TowerProvider";
import { getVscode } from "./utils";

import { UserInfo, Workspace, ComputeEnv, Organization } from "./types";

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

type ViewID = "workflows" | "processes" | "userInfo" | null;

const Context = ({ children }: Props) => {
  const viewID = window.initialData?.viewID as ViewID;
  const state = vscode.getState();
  const [authState, setAuthState] = useState<AuthState>(state?.authState || {});
  const [userInfo, setUserInfo] = useState<UserInfo>(state?.userInfo || {});
  const [workspaces, setWorkspaces] = useState<Workspace[]>(
    state?.workspaces || []
  );
  const [computeEnvs, setComputeEnvs] = useState<ComputeEnv[]>(
    state?.computeEnvs || []
  );
  const [organizations, setOrganizations] = useState<Organization[]>(
    state?.organizations || []
  );

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("🟠 message", event.data);
      const { data } = event;
      if (data.authState) setAuthState(data.authState);
      if (data.userInfo) setUserInfo(data.userInfo);
      if (data.workspaces) setWorkspaces(data.workspaces);
      if (data.computeEnvs) setComputeEnvs(data.computeEnvs);
      if (data.organizations) setOrganizations(data.organizations);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (viewID !== "userInfo") return;
    vscode.setState({ authState });
  }, [authState]);

  useEffect(() => {
    if (viewID !== "userInfo") return;
    vscode.setState({ userInfo });
  }, [userInfo]);

  useEffect(() => {
    if (viewID !== "userInfo") return;
    vscode.setState({ workspaces });
  }, [workspaces]);

  useEffect(() => {
    if (viewID !== "userInfo") return;
    vscode.setState({ computeEnvs });
  }, [computeEnvs]);

  useEffect(() => {
    if (viewID !== "userInfo") return;
    vscode.setState({ organizations });
  }, [organizations]);

  if (!viewID) return <div>No viewID</div>;

  return (
    <WorkspaceProvider vscode={vscode} viewID={viewID}>
      {viewID === "userInfo" ? (
        <TowerProvider
          vscode={vscode}
          authState={authState}
          platformData={{ userInfo, workspaces, computeEnvs, organizations }}
        >
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
