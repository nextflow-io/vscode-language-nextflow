import {
  Organization,
  Pipeline,
  PipelinesResponse,
  RepoInfo,
  Workflow,
  RunsResponse,
  Workspace,
  ComputeEnv
} from "../types";

export function getOrganizations(
  orgsAndWorkspaces?: Organization[]
): Organization[] {
  if (!orgsAndWorkspaces) return [];
  return orgsAndWorkspaces.filter((w) => !w.workspaceId);
}

export function filterComputeEnvs(
  computeEnvs: ComputeEnv[] | undefined,
  workspace: Workspace | undefined
): ComputeEnv[] {
  if (!computeEnvs) return [];
  if (!workspace) return computeEnvs;
  return (
    computeEnvs?.filter((ce) => ce.workspaceName === workspace.workspaceName) ||
    []
  );
}

export function getWorkspaces(
  orgsAndWorkspaces?: Workspace[],
  orgId?: string | number
): Workspace[] {
  if (!orgsAndWorkspaces) return [];
  const workspaces = orgsAndWorkspaces.filter((w) => !!w.workspaceId);
  if (orgId) {
    return workspaces.filter((w) => w.orgId === orgId);
  }
  return workspaces;
}

export function filterPipelines(
  pipelines: PipelinesResponse | undefined,
  repoInfo: RepoInfo | undefined,
  shouldFilter: boolean
): Pipeline[] {
  let items = pipelines?.pipelines || [];
  items = items.sort(
    (a, b) =>
      new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );
  if (!shouldFilter || !repoInfo) return items;
  return items.filter((w) => w.repository === repoInfo.url);
}

export function filterRuns(
  runs: RunsResponse | undefined,
  repoInfo: RepoInfo | undefined,
  shouldFilter: boolean
): Workflow[] {
  let items = runs?.workflows?.map(({ workflow }) => workflow) || [];
  items = items.sort((a, b) => {
    // Starred first
    if (a.starred !== b.starred) {
      return a.starred ? -1 : 1;
    }
    // Ordered by dateCreated
    return (
      new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    );
  });

  if (!shouldFilter || !repoInfo) {
    return items;
  }

  // Filter items not related to the repo's repository
  return items.filter((w) => w.repository === repoInfo.url);
}
