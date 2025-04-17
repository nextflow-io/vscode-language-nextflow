import {
  Organization,
  Pipeline,
  PipelinesResponse,
  RepoInfo,
  Workflow,
  HistoryResponse,
  Workspace
} from "../types";

export function getOrganizations(
  orgsAndWorkspaces?: Organization[]
): Organization[] {
  if (!orgsAndWorkspaces) return [];
  return orgsAndWorkspaces.filter((w) => !w.workspaceId);
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
  const items = pipelines?.pipelines || [];
  if (!shouldFilter || !repoInfo) return items;
  return items.filter((w) => w.repository === repoInfo.url);
}

export function filterHistory(
  history: HistoryResponse | undefined,
  repoInfo: RepoInfo | undefined,
  shouldFilter: boolean
): Workflow[] {
  const items = history?.workflows?.map(({ workflow }) => workflow) || [];
  if (!shouldFilter || !repoInfo) return items;
  return items.filter((w) => w.repository === repoInfo.url);
}
