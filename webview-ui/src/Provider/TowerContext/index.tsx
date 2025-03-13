import { createContext, useContext, useEffect, useState } from "react";

import fetchWorkspaces from "./fetchWorkspaces";
import fetchcomputeEnvs from "./fetchComputeEnvs";
import addPipeline from "./addPipeline";
import parseResponse from "./parseResponse";
import { baseURL, apiURL } from "./constants";

import {
  WorkspaceID,
  Workspace,
  ComputeEnv,
  PipelineResponse,
  UserProfile,
  Pipeline,
  FormData
} from "./types";
import { useProvider } from "..";
import fetchUserInfo from "./fetchUserInfo";

const TowerContext = createContext<TowerContextType>(null as any);

type Props = {
  children: React.ReactNode;
};

const TowerProvider: React.FC<Props> = ({ children }) => {
  const { session } = useProvider();

  const [refreshKey, setRefreshKey] = useState(0);
  const [userInfo, setUserInfo] = useState<UserProfile | null>(null);
  const [orgsAndWorkspaces, setOrgsAndWorkspaces] = useState<Workspace[]>([]);
  const [workspaceChanged, setWorkspaceChanged] = useState<boolean>(false);
  const [computeEnvs, setComputeEnvs] = useState<ComputeEnv[]>([]);
  const [selectedOrg, setSelectedOrg] = useState<string>("");
  const [selectedWorkspace, setSelectedWorkspace] = useState<WorkspaceID>(null);
  const [selectedComputeEnv, setSelectedComputeEnv] = useState<string | null>(
    null
  );
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const userID = userInfo?.user?.id;
  const workspaces = getWorkspaces();
  const organizations = getOrganizations();

  function getOrganizations(): Workspace[] {
    const defaultOrg = {
      orgId: "",
      orgName: "User"
    };
    const orgs = orgsAndWorkspaces.filter((w) => !w.workspaceId);
    return [defaultOrg, ...orgs];
  }

  function getWorkspaces(): Workspace[] {
    const defaultWorkspace = {
      orgId: "",
      orgName: "User",
      workspaceId: "",
      workspaceName: "Personal Workspace"
    };
    const isPersonal = selectedOrg === "";
    if (isPersonal) return [defaultWorkspace];
    const workspaces = orgsAndWorkspaces.filter((w) => !!w.workspaceId);
    return workspaces.filter((w) => `${w.orgId}` === `${selectedOrg}`);
  }

  async function handleFetchWorkspaces(userID: number) {
    setIsLoading(true);
    const workspaces = await fetchWorkspaces(session, userID);
    setIsLoading(false);
    if (!workspaces || !workspaces.length) return;
    setOrgsAndWorkspaces(workspaces);
    const id = workspaces[0]?.workspaceId;
    if (id) setSelectedWorkspace(String(id));
  }

  async function handleFetchComputeEnvs(workspace: WorkspaceID) {
    setIsLoading(true);
    let envs = await fetchcomputeEnvs(session, workspace);
    envs = envs?.computeEnvs;
    setIsLoading(false);
    if (!envs || !envs.length) envs = [];
    setComputeEnvs(envs);
    setSelectedComputeEnv(envs[0]?.id);
  }

  async function handleAddPipeline(
    pipeline: Pipeline,
    formData: FormData
  ): Promise<PipelineResponse | undefined> {
    const env = computeEnvs.find((env) => env.id === selectedComputeEnv);
    try {
      setError("");
      setResponseMessage("");
      setIsAdding(true);
      const res = await addPipeline(
        session,
        pipeline,
        selectedWorkspace,
        env,
        formData
      );
      setIsAdding(false);
      const result = await parseResponse(res);
      if (result.error) setError(result.error);
      if (result.message) setResponseMessage(result.message);
      if (result.data) return result.data;
    } catch (error: any) {
      setIsAdding(false);
      console.error(">> handleAddPipeline", error);
      setError(error?.message);
    }
  }

  async function handleFetchUserInfo(): Promise<UserProfile | null> {
    const userInfo = await fetchUserInfo(session);
    if (userInfo) {
      setUserInfo(userInfo);
      return userInfo;
    }
    console.error("Failed to fetch userInfo");
    return null;
  }

  function refresh() {
    setRefreshKey(refreshKey + 1);
  }

  useEffect(() => {
    // console.log(">> userInfo", userInfo);
    // console.log(">> workspaces", workspaces);
    // console.log(">> computeEnvs", computeEnvs);
  }, [userInfo, workspaces, computeEnvs]);

  useEffect(() => {
    async function handleFetch() {
      const userInfo = await handleFetchUserInfo();
      if (!userInfo) return;
      await handleFetchWorkspaces(userInfo.user.id);
      await handleFetchComputeEnvs(selectedWorkspace);
    }
    handleFetch();
  }, [refreshKey, session]);

  useEffect(() => {
    const ws = getWorkspaces()?.find(
      (org) => `${org.orgId}` === `${selectedOrg}`
    );
    setSelectedWorkspace(ws?.workspaceId || "");
  }, [selectedOrg]);

  useEffect(() => {
    if (!userID) return;
    if (!workspaceChanged) {
      setWorkspaceChanged(true);
      return;
    }
    if (!workspaces.length) return;
    handleFetchComputeEnvs(selectedWorkspace);
    setError("");
    setResponseMessage("");
  }, [selectedWorkspace, userID]);

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
  userInfo: UserProfile | null;
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
