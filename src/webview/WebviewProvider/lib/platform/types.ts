export type RepoInfo = {
  url: string;
  name: string;
  owner: string;
};

export type TowerConfig = {
  accessToken?: string;
  isEnterprise?: boolean;
  url?: string;
  apiURL?: string;
};

export type LaunchConfig = {
  name?: string;
  id?: number;
  nf_files_in_root?: string[];
  description?: string;
};

export type ComputeEnv = {
  id: string;
  name: string;
  platform: string;
  status: string;
  workDir: string;
  credentialsId: string;
  workspaceName: string;
};

export type WorkspaceID = number | string | null;

export type Workspace = {
  orgId: number | string;
  orgName: string;
  orgLogoUrl?: string | null;
  workspaceId?: WorkspaceID;
  workspaceName?: string | null;
  workspaceFullName?: string | null;
  visibility?: string | null;
  roles?: string[];
};

export type Organization = {
  orgId: number | string;
  orgName: string;
  orgLogoUrl?: string | null;
  workspaceId?: WorkspaceID;
  workspaceName?: string | null;
  workspaceFullName?: string | null;
  visibility?: string | null;
  roles?: string[];
};

export type Pipeline = {
  pipelineId: number;
  name: string;
  description: string;
  icon: string | null;
  repository: string;
  userId: number;
  userName: string;
  userFirstName: string | null;
  userLastName: string | null;
  orgId: number | null;
  orgName: string | null;
  workspaceId: WorkspaceID;
  workspaceName: string | null;
  visibility: string | null;
  deleted: boolean;
  lastUpdated: string;
  optimizationId: string | null;
  optimizationTargets: string;
  optimizationStatus: string | null;
  labels: string | null;
  computeEnv: ComputeEnv | null;
  launch_config: LaunchConfig | null;
  url?: string;
};

export type PipelineResponse = {
  message?: string;
  detail?: string;
  pipeline?: Pipeline;
};

export type PipelinesResponse = {
  pipelines: Pipeline[];
  totalSize: number;
};

export type User = {
  id: number;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  organization?: string;
  description?: string;
  avatar?: string;
  avatarId?: string;
  notification?: string;
  termsOfUseConsent: boolean;
  marketingConsent: boolean;
  lastAccess: string;
  dateCreated: string;
  lastUpdated: string;
  deleted: boolean;
  trusted: boolean;
  options: {
    githubToken?: string;
    maxRuns?: number;
    hubspotId?: number;
  };
};

export type UserInfo = {
  user?: User;
  needConsent?: boolean;
  defaultWorkspaceId?: number;
  enforceMessageLimit?: boolean;
};

export type UserInfoResponse = UserInfo & { message?: string };

export type FormData = {
  name: string;
  description: string;
};

export type WorkflowStatus =
  | "SUBMITTED"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED"
  | "UNKNOWN";

export type WorkflowManifest = {
  nextflowVersion: string;
  defaultBranch: string;
  version: string;
  homePage: string;
  gitmodules: string;
  description: string;
  name: string;
  mainScript: string;
  author: string;
  icon: string;
};

export type WorkflowNextflow = {
  version: string;
  build: string;
  timestamp: string;
};

export type WorkflowStats = {
  computeTimeFmt: string;
  cachedCount: number;
  failedCount: number;
  ignoredCount: number;
  succeedCount: number;
  cachedCountFmt: string;
  succeedCountFmt: string;
  failedCountFmt: string;
  ignoredCountFmt: string;
  cachedPct: number;
  failedPct: number;
  succeedPct: number;
  ignoredPct: number;
  cachedDuration: number;
  failedDuration: number;
  succeedDuration: number;
};

export type WorkflowProgressMetrics = {
  pending: number;
  submitted: number;
  running: number;
  succeeded: number;
  failed: number;
  cached: number;
  memoryEfficiency: number;
  cpuEfficiency: number;
  cpus: number;
  cpuTime: number;
  cpuLoad: number;
  memoryRss: number;
  memoryReq: number;
  readBytes: number;
  writeBytes: number;
  volCtxSwitch: number;
  invCtxSwitch: number;
  loadTasks: number;
  loadCpus: number;
  loadMemory: number;
  peakCpus: number;
  peakTasks: number;
  peakMemory: number;
  dateCreated: string;
  lastUpdated: string;
};

export type WorkflowProgress = {
  workflowProgress: WorkflowProgressMetrics & {
    cost: number;
    executors: string[];
  };
  processesProgress: (WorkflowProgressMetrics & {
    process: string;
  })[];
  totalProcesses: number;
};

export type WorkflowLabel = {
  id: number;
  name: string;
  value: string;
  resource: boolean;
  isDefault: boolean;
};

export type Workflow = {
  messages: string[];
  id: string;
  ownerId: number;
  submit: string;
  start: string;
  complete: string;
  dateCreated: string;
  lastUpdated: string;
  runName: string;
  sessionId: string;
  profile: string;
  workDir: string;
  commitId: string;
  userName: string;
  scriptId: string;
  revision: string;
  commandLine: string;
  projectName: string;
  scriptName: string;
  launchId: string;
  status: WorkflowStatus;
  requiresAttention: boolean;
  configFiles: string[];
  params: Record<string, unknown>;
  configText: string;
  manifest: WorkflowManifest;
  nextflow: WorkflowNextflow;
  stats: WorkflowStats;
  errorMessage: string;
  errorReport: string;
  deleted: boolean;
  projectDir: string;
  homeDir: string;
  container: string;
  repository: string;
  containerEngine: string;
  scriptFile: string;
  launchDir: string;
  duration: number;
  exitStatus: number;
  resume: boolean;
  success: boolean;
  progress: WorkflowProgress;
  orgId: number;
  orgName: string;
  workspaceId: number;
  workspaceName: string;
  labels: WorkflowLabel[];
  starred: boolean;
  optimized: boolean;
};

export type RunsResponse = {
  workflows: {
    workflow: Workflow;
  }[];
  totalSize: number;
};

export interface Dataset {
  id: string;
  name: string;
  description: string | null;
  mediaType: string;
  deleted: boolean;
  dateCreated: string;
  lastUpdated: string;
}

export interface DataLinkCredential {
  id: string;
  name: string;
  provider: string;
}

export interface DataLink {
  id: string;
  name: string;
  description: string | null;
  resourceRef: string;
  type: string;
  provider: string;
  region: string;
  credentials: DataLinkCredential[];
  publicAccessible: boolean;
  hidden: boolean;
  status: string;
  message: string | null;
}

export type DataLinksResponse = {
  dataLinks?: DataLink[];
  totalSize?: number;
  message?: string;
};
