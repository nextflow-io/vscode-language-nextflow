import { Organization, Workspace } from "../types";

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
  // const defaultWorkspace = {
  //   orgId: "",
  //   orgName: "User",
  //   workspaceId: null,
  //   workspaceName: "Personal Workspace"
  // } as Workspace;
  const workspaces = orgsAndWorkspaces.filter((w) => !!w.workspaceId);
  if (orgId) {
    return workspaces.filter((w) => w.orgId === orgId);
  }
  return workspaces;
}
