import { useTowerContext } from "../../../../Context";
import Select from "../../../../components/Select";
import { getWorkspaceURL } from "../../utils";
import Button from "../../../../components/Button";

const WorkspaceSelector = () => {
  const { workspaces, selectedWorkspace, setSelectedWorkspace } =
    useTowerContext();

  const currentWorkspace = workspaces?.find(
    (ws) => ws.workspaceId === selectedWorkspace
  );

  let manageURL = "";
  if (currentWorkspace) {
    manageURL = getWorkspaceURL(currentWorkspace);
  }

  return (
    <>
      <div className="flex justify-between p-2">
        <h3 className="flex-auto">Workspace</h3>
        <div className="flex items-center">
          {workspaces?.length ? (
            <Select
              options={workspaces.map((ws) => ({
                label: ws.orgName + " / " + ws.workspaceName,
                value: ws.workspaceId as number
              }))}
              value={selectedWorkspace ?? ""}
              onChange={setSelectedWorkspace}
            />
          ) : (
            <div>No workspaces found</div>
          )}
          {!!manageURL && <Button href={manageURL} icon="codicon-gear" alt />}
        </div>
      </div>
    </>
  );
};

export default WorkspaceSelector;
