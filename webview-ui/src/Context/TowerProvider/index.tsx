import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  Workspace,
  Organization,
  ComputeEnv,
  UserInfo,
  RunsResponse,
  RepoInfo,
  PipelinesResponse,
  Pipeline,
  Workflow,
  Dataset,
  DataLink,
  WorkspaceID,
  HubPipeline,
  AddPipelineRequest
} from "../types";
import { AuthState } from "..";
import {
  getOrganizations,
  getWorkspaces,
  filterPipelines,
  filterRuns,
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
  runs?: RunsResponse;
  repoInfo?: RepoInfo;
  pipelines?: PipelinesResponse;
  datasets?: Dataset[];
  dataLinks?: DataLink[];
  hubPipelines?: HubPipeline[];
};

type TowerContextType = {
  error?: string | null;
  userInfo?: UserInfo;
  runs?: Workflow[];
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
  fetchRuns: (workspaceId?: WorkspaceID) => void;
  workspaces: Workspace[];
  organizations?: Organization[];
  getWorkspaces: (orgId: string | number) => Workspace[];
  setSelectedOrg: (n: string) => void;
  selectedOrg: string;
  isAuthenticated?: boolean;
  hasToken?: boolean;
  tokenExpired?: boolean;
  tokenExpiry?: number;
  repoInfo?: RepoInfo;
  pipelines?: Pipeline[];
  hubPipelines?: HubPipeline[];
  datasets?: Dataset[];
  dataLinks?: DataLink[];
  useLocalContext: boolean;
  setUseLocalContext: (n: boolean) => void;
  addPipeline: (requestBody: AddPipelineRequest) => void;
  fetchHubPipelines: () => void;
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
    runs,
    pipelines,
    datasets,
    dataLinks,
    repoInfo,
    hubPipelines
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

  function fetchRuns(workspaceId?: WorkspaceID) {
    vscode.postMessage({ command: "fetchRuns", workspaceId });
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

  function fetchHubPipelines() {
    vscode.postMessage({ command: "fetchHubPipelines" });
  }

  function addPipeline(requestBody: AddPipelineRequest) {
    vscode.postMessage({ command: "addPipeline", requestBody });
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
        fetchRuns,
        runs: filterRuns(runs, repoInfo, useLocalContext),
        computeEnvs: filterComputeEnvs(computeEnvs, selectedWorkspace),
        pipelines: filterPipelines(pipelines, repoInfo, useLocalContext),
        workspaces,
        getWorkspaces: getOrgWorkspaces,
        organizations,
        selectedOrg,
        setSelectedOrg,
        isAuthenticated: auth.isAuthenticated,
        hasToken: auth.hasToken,
        tokenExpired: auth.tokenExpired,
        tokenExpiry: auth.tokenExpiry,
        repoInfo,
        datasets,
        dataLinks,
        fetchHubPipelines,
        hubPipelines,
        addPipeline
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
