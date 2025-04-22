import { useEffect, useState } from "react";
import WorkspaceProvider, { useWorkspaceContext } from "./WorkspaceProvider";
import TowerProvider, { useTowerContext } from "./TowerProvider";
import { getVscode } from "./utils";

import {
  UserInfo,
  Workspace,
  ComputeEnv,
  Organization,
  HistoryResponse,
  RepoInfo,
  PipelinesResponse,
  Dataset,
  DataLink
} from "./types";

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

type ViewID = "workflows" | "processes" | "userInfo" | "";

const Context = ({ children }: Props) => {
  const viewID = window.initialData?.viewID as ViewID;
  const isCursor = window.initialData?.isCursor;
  const [authState, setAuthState] = useState<AuthState | undefined>(undefined);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [computeEnvs, setComputeEnvs] = useState<ComputeEnv[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [history, setHistory] = useState<HistoryResponse | undefined>(
    undefined
  );
  const [pipelines, setPipelines] = useState<PipelinesResponse | undefined>(
    undefined
  );
  const [repoInfo, setRepoInfo] = useState<RepoInfo | undefined>(undefined);
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [dataLinks, setDataLinks] = useState<DataLink[]>([]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("🟠 message", event.data);
      const { data } = event;
      if (data.authState) setAuthState(data.authState);
      if (data.userInfo) setUserInfo(data.userInfo);
      if (data.workspaces) setWorkspaces(data.workspaces);
      if (data.computeEnvs) setComputeEnvs(data.computeEnvs);
      if (data.organizations) setOrganizations(data.organizations);
      if (data.history) setHistory(data.history);
      if (data.pipelines) setPipelines(data.pipelines);
      if (data.repoInfo) setRepoInfo(data.repoInfo);
      if (data.datasets) setDatasets(data.datasets);
      if (data.dataLinks) setDataLinks(data.dataLinks);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <WorkspaceProvider vscode={vscode} viewID={viewID} isCursor={isCursor}>
      {viewID === "userInfo" ? (
        <TowerProvider
          vscode={vscode}
          authState={authState}
          platformData={{
            userInfo,
            workspaces,
            computeEnvs,
            organizations,
            history,
            repoInfo,
            pipelines,
            datasets,
            dataLinks
          }}
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
