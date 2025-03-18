import { createContext, useContext, useEffect, useState } from "react";

import { baseURL, apiURL } from "./constants";

import {
  WorkspaceID,
  Workspace,
  ComputeEnv,
  PipelineResponse,
  UserInfo,
  Pipeline,
  FormData
} from "./types";

const TowerContext = createContext<TowerContextType>(null as any);

type Props = {
  children: React.ReactNode;
  vscode: any;
};

const TowerProvider: React.FC<Props> = ({ children, vscode }) => {
  const state = vscode.getState();

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<WorkspaceID>(null);
  const [selectedComputeEnv, setSelectedComputeEnv] = useState<string | null>(
    null
  );
  const [selectedOrg, setSelectedOrg] = useState<string>("");

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    state?.authState || false
  );

  const [towerData, setTowerData] = useState<any>(state?.towerData || {});
  const { userInfo, workspaces, computeEnvs, organizations } = towerData;

  useEffect(() => {
    vscode.setState({ towerData });
  }, [towerData]);

  useEffect(() => {
    vscode.setState({ authState: isAuthenticated });
  }, [isAuthenticated]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      const { towerData, authState, getAuthState } = message;
      console.log(">> message", message);
      if (authState) setIsAuthenticated(authState);
      if (towerData) setTowerData(towerData);
      if (getAuthState) fetchAuthState();
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    fetchAuthState();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setTowerData({});
      return;
    }
    fetchTowerData();
  }, [isAuthenticated]);

  function fetchAuthState() {
    console.log("🟠 fetchAuthState");
    vscode.postMessage({ command: "fetchAuthState" });
  }

  function fetchTowerData() {
    vscode.postMessage({ command: "fetchTowerData" });
  }

  function handleAddPipeline(
    pipeline: Pipeline,
    formData: FormData
  ): Promise<PipelineResponse | undefined> {
    console.log(">> pipeline", pipeline);
    console.log(">> formData", formData);
    return Promise.resolve(undefined);
  }

  function refresh() {
    setIsLoading(true);
    setIsAdding(false);
    setError(null);
    setResponseMessage(null);
  }

  return (
    <TowerContext.Provider
      value={{
        responseMessage,
        setResponseMessage,
        error,
        setError,
        isLoading,
        isAdding,
        userInfo,
        addPipeline: handleAddPipeline,
        selectedWorkspace,
        setSelectedWorkspace,
        selectedComputeEnv,
        setSelectedComputeEnv,
        computeEnvs,
        workspaces,
        organizations,
        selectedOrg,
        setSelectedOrg,
        baseURL,
        apiURL,
        refresh
      }}
    >
      {children}
    </TowerContext.Provider>
  );
};

type TowerContextType = {
  responseMessage: string | null;
  error: string | null;
  setError: (n: string) => void;
  isLoading: boolean;
  isAdding: boolean;
  setResponseMessage: (n: string) => void;
  userInfo: UserInfo | null;
  addPipeline: (
    pipeline: Pipeline,
    formData: FormData
  ) => Promise<PipelineResponse | undefined>;
  selectedWorkspace: WorkspaceID;
  setSelectedWorkspace: (n: WorkspaceID) => void;
  selectedComputeEnv: string | null;
  setSelectedComputeEnv: (n: string) => void;
  computeEnvs: ComputeEnv[];
  workspaces: Workspace[];
  organizations: Workspace[];
  setSelectedOrg: (n: string) => void;
  selectedOrg: string;
  baseURL: string;
  apiURL: string;
  refresh: () => void;
};

const useTowerContext = () => {
  return useContext(TowerContext);
};

export { TowerProvider as default, useTowerContext };
