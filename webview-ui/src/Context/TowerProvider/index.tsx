import { createContext, useContext, useEffect, useState } from "react";

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
  error?: string | null;
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
  refresh: () => void;
  isAuthenticated?: boolean;
  hasToken?: boolean;
  tokenExpired?: boolean;
  tokenExpiry?: number;
};

const TowerProvider: React.FC<Props> = ({ children, vscode, authState }) => {
  const state = vscode.getState();

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
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

  const { hasToken, tokenExpired, tokenExpiry, isAuthenticated, error } =
    authState;

  useEffect(() => {
    vscode.setState({ platformData });
  }, [platformData]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("🟠 handleMessage", event.data);
      setPlatformData(event.data);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    console.log("🟠 platformData", platformData);
    if (!isAuthenticated) return;
    // console.log("🟠 fetchPlatformData");
    // fetchPlatformData();
  }, [platformData]);

  // function fetchPlatformData() {
  //   vscode.postMessage({ command: "fetchPlatformData" });
  // }

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
    setResponseMessage(null);
  }

  return (
    <TowerContext.Provider
      value={{
        responseMessage,
        setResponseMessage,
        error,
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
