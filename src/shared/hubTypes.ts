export type HubPipeline = {
  id: number;
  latest_release_at: string;
  description: string;
  watchers: number;
  nextflow_main_lang: boolean;
  nf_files_in_root: string[];
  contributors: number;
  nextflow_code_chars: number;
  nf_files_in_subfolders: string[];
  created_at: string;
  forks: number;
  slugified_name: string;
  url: string;
  main_nf_file: string;
  updated_at: string;
  head_fork: null;
  readme_name: null;
  revision: string;
  alive: boolean;
  last_commit_at: string;
  open_issues: number;
  readme_contains_nextflow: null;
  highlighted: boolean;
  website: string;
  open_prs: number;
  hidden: boolean;
  stars: number;
  default_branch: string;
  name: string;
  languages: {
    Nextflow: number;
    Groovy: number;
    Python: number;
    R: number;
    Perl: number;
    HTML: number;
  };
  owner: string;
  topics: string[];
  launch_config: LaunchConfig;
};

export type LaunchConfig = {
  workspaceId: string;
  computeEnvId: string;
  workDir: string;
  pipeline: string;
  revision: string;
};

export type AddPipelineRequest = {
  name: string;
  description: string;
  launch: LaunchConfig;
};

export type AddPipelineResponse = {
  pipeline?: {
    computeEnv: null;
    deleted: boolean;
    description: string;
    icon: string;
    labels: null;
    lastUpdated: string;
    name: string;
    optimizationId: null;
    optimizationStatus: null;
    optimizationTargets: null;
    orgId: number;
    orgName: string;
    pipelineId: number;
    repository: string;
    userFirstName: string | null;
    userId: number;
    userLastName: string | null;
    userName: string;
    visibility: string;
    workspaceId: number;
    workspaceName: string;
  };
  message?: string;
};
