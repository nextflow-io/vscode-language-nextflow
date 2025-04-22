import { useTowerContext } from "../../../../Context";
import Select from "../../../../components/Select";
import { getWorkspaceURL } from "../../utils";
import Button from "../../../../components/Button";

const WorkspaceSelector = () => {
  const {
    workspaces,
    selectedWorkspace: workspace,
    setSelectedWorkspace
  } = useTowerContext();

  let manageURL = "";
  if (workspace) {
    manageURL = getWorkspaceURL(workspace);
  }

  return (
    <>
      <div className="flex justify-between p-2">
        {workspaces?.length ? (
          <Select
            options={workspaces.map((ws) => ({
              label: ws.orgName + "/" + ws.workspaceName,
              value: ws.workspaceId as number
            }))}
            value={workspace?.workspaceId ?? ""}
            icon="seqera"
            onChange={(value) => {
              const workspace = workspaces.find(
                (ws) => ws.workspaceId === value
              );
              if (!workspace) return;
              setSelectedWorkspace(workspace);
            }}
            subtle
          />
        ) : (
          <div>No workspaces found</div>
        )}
        {!!manageURL && (
          <Button
            href={manageURL}
            icon="codicon-gear"
            subtle2
            className="ml-2"
          />
        )}
      </div>
    </>
  );
};

export default WorkspaceSelector;
