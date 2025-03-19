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
import { AuthState } from "..";

const TowerContext = createContext<TowerContextType>(null as any);

type Props = {
  children: React.ReactNode;
  vscode: any;
  authState: AuthState;
};

type PlatformData = {
  userInfo?: UserInfo;
  workspaces?: Workspace[];
  computeEnvs?: ComputeEnv[];
  organizations?: Workspace[];
};

type TowerContextType = {
  responseMessage: string | null;
  error: string | null;
  setError: (n: string) => void;
  isLoading: boolean;
  isAdding: boolean;
  setResponseMessage: (n: string) => void;
  userInfo?: UserInfo;
  addPipeline: (
    pipeline: Pipeline,
    formData: FormData
  ) => Promise<PipelineResponse | undefined>;
  selectedWorkspace: WorkspaceID;
  setSelectedWorkspace: (n: WorkspaceID) => void;
  selectedComputeEnv: string | null;
  setSelectedComputeEnv: (n: string) => void;
  computeEnvs?: ComputeEnv[];
  workspaces?: Workspace[];
  organizations?: Workspace[];
  setSelectedOrg: (n: string) => void;
  selectedOrg: string;
  baseURL: string;
  apiURL: string;
  refresh: () => void;
  isAuthenticated?: boolean;
  hasToken?: boolean;
  tokenExpired?: boolean;
  tokenExpiry?: number;
};

const TowerProvider: React.FC<Props> = ({ children, vscode, authState }) => {
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

  const [platformData, setPlatformData] = useState<PlatformData>(
    state?.platformData || {}
  );
  const { userInfo, workspaces, computeEnvs, organizations } = platformData;

  const { hasToken, tokenExpired, tokenExpiry, isAuthenticated } = authState;

  useEffect(() => {
    vscode.setState({ platformData });
  }, [platformData]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      const { platformData } = message;
      if (platformData) setPlatformData(platformData);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      // setPlatformData({});
    } else {
      fetchPlatformData();
    }
  }, [isAuthenticated]);

  function fetchPlatformData() {
    vscode.postMessage({ command: "fetchPlatformData" });
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
        refresh,
        isAuthenticated,
        hasToken,
        tokenExpired,
        tokenExpiry
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
