import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
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
  DataLink,
  WorkspaceID
} from "../types";
import { AuthState } from "..";
import {
  getOrganizations,
  getWorkspaces,
  filterPipelines,
  filterHistory,
  filterComputeEnvs
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
  selectedWorkspace: Workspace | undefined;
  workspaceId: WorkspaceID | undefined;
  setSelectedWorkspace: (n: Workspace) => void;
  selectedComputeEnv: string | null;
  setSelectedComputeEnv: (n: string) => void;
  computeEnvs: ComputeEnv[];
  fetchComputeEnvs: (workspaceId?: WorkspaceID) => void;
  fetchPipelines: (workspaceId?: WorkspaceID) => void;
  fetchDatasets: (workspaceId?: WorkspaceID) => void;
  fetchDataLinks: (workspaceId?: WorkspaceID) => void;
  fetchHistory: (workspaceId?: WorkspaceID) => void;
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

  const [selectedWorkspace, setSelectedWorkspace] = useState<
    Workspace | undefined
  >(undefined);
  const [selectedComputeEnv, setSelectedComputeEnv] = useState<string>("");
  const [selectedOrg, setSelectedOrg] = useState<string>("");
  const [useLocalContext, setUseLocalContext] = useState<boolean>(false);
  const workspaceId = selectedWorkspace?.workspaceId;

  useEffect(() => {
    setSelectedWorkspace(workspaces?.[0]);
  }, [workspaces]);

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

  function fetchHistory(workspaceId?: WorkspaceID) {
    vscode.postMessage({ command: "fetchHistory", workspaceId });
  }

  function fetchPipelines(workspaceId?: WorkspaceID) {
    vscode.postMessage({ command: "fetchPipelines", workspaceId });
  }

  function fetchDatasets(workspaceId?: WorkspaceID) {
    vscode.postMessage({ command: "fetchDatasets", workspaceId });
  }

  function fetchDataLinks(workspaceId?: WorkspaceID) {
    vscode.postMessage({ command: "fetchDataLinks", workspaceId });
  }

  function fetchComputeEnvs(workspaceId?: WorkspaceID) {
    vscode.postMessage({ command: "fetchComputeEnvs", workspaceId });
  }

  function refresh() {
    console.log("🟠 refresh");
    vscode.postMessage({ command: "refresh" });
  }

  return (
    <TowerContext.Provider
      value={{
        useLocalContext,
        setUseLocalContext,
        error: auth.error,
        userInfo,
        selectedWorkspace,
        workspaceId,
        setSelectedWorkspace,
        selectedComputeEnv,
        setSelectedComputeEnv,
        fetchComputeEnvs,
        fetchPipelines,
        fetchDatasets,
        fetchDataLinks,
        fetchHistory,
        history: filterHistory(history, repoInfo, useLocalContext),
        computeEnvs: filterComputeEnvs(computeEnvs, selectedWorkspace),
        pipelines: filterPipelines(pipelines, repoInfo, useLocalContext),
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
