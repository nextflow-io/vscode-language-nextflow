import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  WorkspaceID,
  Workspace,
  Organization,
  ComputeEnv,
  UserInfo,
  HistoryResponse,
  RepoInfo,
  PipelinesResponse,
  Pipeline,
  Workflow,
  Dataset,
  DataLink
} from "../types";
import { AuthState } from "..";
import {
  getOrganizations,
  getWorkspaces,
  filterPipelines,
  filterHistory
} from "./utils";

const TowerContext = createContext<TowerContextType>(null as any);

type Props = {
  children: React.ReactNode;
  authState?: AuthState;
  platformData: PlatformData;
  vscode: any;
};

type PlatformData = {
  userInfo?: UserInfo;
  workspaces: Workspace[];
  computeEnvs: ComputeEnv[];
  organizations: Organization[];
  history?: HistoryResponse;
  repoInfo?: RepoInfo;
  pipelines?: PipelinesResponse;
  datasets?: Dataset[];
  dataLinks?: DataLink[];
};

type TowerContextType = {
  error?: string | null;
  userInfo?: UserInfo;
  history?: Workflow[];
  selectedWorkspace: WorkspaceID;
  setSelectedWorkspace: (n: WorkspaceID) => void;
  selectedComputeEnv: string | null;
  setSelectedComputeEnv: (n: string) => void;
  computeEnvs: ComputeEnv[];
  workspaces: Workspace[];
  organizations?: Organization[];
  getWorkspaces: (orgId: string | number) => Workspace[];
  setSelectedOrg: (n: string) => void;
  selectedOrg: string;
  refresh: () => void;
  isAuthenticated?: boolean;
  hasToken?: boolean;
  tokenExpired?: boolean;
  tokenExpiry?: number;
  repoInfo?: RepoInfo;
  pipelines?: Pipeline[];
  datasets?: Dataset[];
  dataLinks?: DataLink[];
  useLocalContext: boolean;
  setUseLocalContext: (n: boolean) => void;
};

const TowerProvider: React.FC<Props> = ({
  children,
  authState,
  platformData,
  vscode
}) => {
  const {
    userInfo,
    workspaces: orgsAndWorkspaces,
    computeEnvs,
    history,
    pipelines,
    datasets,
    dataLinks,
    repoInfo
  } = platformData;

  const organizations: Organization[] = useMemo(
    () => getOrganizations(orgsAndWorkspaces),
    [orgsAndWorkspaces]
  );

  const workspaces: Workspace[] = useMemo(
    () => getWorkspaces(orgsAndWorkspaces),
    [orgsAndWorkspaces]
  );

  const [visibleEnvs, setVisibleEnvs] = useState<ComputeEnv[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<WorkspaceID>("");
  const [selectedComputeEnv, setSelectedComputeEnv] = useState<string>("");
  const [selectedOrg, setSelectedOrg] = useState<string>("");
  const [useLocalContext, setUseLocalContext] = useState<boolean>(false);

  useEffect(() => {
    setSelectedWorkspace(workspaces[0]?.workspaceId ?? "");
  }, [workspaces]);

  useEffect(() => {
    // Set the compute environments for the selected workspace
    const selected = workspaces.find(
      (w) => w.workspaceId === selectedWorkspace
    );
    const name = selected?.workspaceName;
    if (!name) return;
    setVisibleEnvs(
      computeEnvs?.filter((ce) => ce.workspaceName === name) ?? []
    );
    setSelectedComputeEnv(visibleEnvs[0]?.id ?? "");
  }, [selectedWorkspace]);

  useEffect(() => {
    // Fetch the pipelines & history for the selected workspace
    if (!selectedWorkspace) return;
    fetchPipelines(selectedWorkspace);
    fetchHistory(selectedWorkspace);
    fetchDatasets(selectedWorkspace);
    fetchDataLinks(selectedWorkspace);
  }, [selectedWorkspace]);

  const getOrgWorkspaces = (orgId: string | number) => {
    return getWorkspaces(orgsAndWorkspaces, orgId);
  };

  let auth = authState;
  if (!auth) {
    auth = {
      hasToken: false,
      tokenExpired: false,
      tokenExpiry: 0,
      isAuthenticated: false,
      error: ""
    };
  }

  function fetchHistory(workspaceId: WorkspaceID) {
    vscode.postMessage({ command: "fetchHistory", workspaceId });
  }

  function fetchPipelines(workspaceId: WorkspaceID) {
    vscode.postMessage({ command: "fetchPipelines", workspaceId });
  }

  function fetchDatasets(workspaceId: WorkspaceID) {
    vscode.postMessage({ command: "fetchDatasets", workspaceId });
  }

  function fetchDataLinks(workspaceId: WorkspaceID) {
    vscode.postMessage({ command: "fetchDataLinks", workspaceId });
  }

  function refresh() {
    vscode.postMessage({ command: "refresh" });
  }

  return (
    <TowerContext.Provider
      value={{
        useLocalContext,
        setUseLocalContext,
        error: auth.error,
        userInfo,
        history: filterHistory(history, repoInfo, useLocalContext),
        selectedWorkspace,
        setSelectedWorkspace,
        selectedComputeEnv,
        setSelectedComputeEnv,
        computeEnvs: visibleEnvs,
        workspaces,
        getWorkspaces: getOrgWorkspaces,
        organizations,
        selectedOrg,
        setSelectedOrg,
        refresh,
        isAuthenticated: auth.isAuthenticated,
        hasToken: auth.hasToken,
        tokenExpired: auth.tokenExpired,
        tokenExpiry: auth.tokenExpiry,
        repoInfo,
        pipelines: filterPipelines(pipelines, repoInfo, useLocalContext),
        datasets,
        dataLinks
      }}
    >
      {children}
    </TowerContext.Provider>
  );
};

const useTowerContext = () => {
  return useContext(TowerContext);
};

export { TowerProvider as default, useTowerContext };
