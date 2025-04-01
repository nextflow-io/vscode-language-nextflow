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
