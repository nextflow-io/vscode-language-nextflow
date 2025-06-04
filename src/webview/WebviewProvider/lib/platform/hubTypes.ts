export type AddPipelineRequest = {
  name: string;
  description: string;
  launch: LaunchConfig;
};

export type LaunchConfig = {
  workspaceId: string;
  computeEnvId: string;
  workDir: string;
  pipeline: string;
};

export type Pipeline = {
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
