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
        {workspaces?.length ? (
          <Select
            options={workspaces.map((ws) => ({
              label: ws.orgName + " / " + ws.workspaceName,
              value: ws.workspaceId as number
            }))}
            value={selectedWorkspace ?? ""}
            onChange={setSelectedWorkspace}
            alt2
          />
        ) : (
          <div>No workspaces found</div>
        )}
        {!!manageURL && (
          <Button href={manageURL} icon="codicon-gear" alt2 className="ml-2" />
        )}
      </div>
    </>
  );
};

export default WorkspaceSelector;
