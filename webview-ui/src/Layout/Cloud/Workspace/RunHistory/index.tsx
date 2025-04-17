import { useTowerContext } from "../../../../Context";
import { getRunHistoryURL } from "./utils";
import Button from "../../../../components/Button";
const RunHistory = () => {
  const { workspaces, selectedWorkspace, history } = useTowerContext();

  const workspace = workspaces?.find(
    (ws) => ws.workspaceId === selectedWorkspace
  );

  return (
    <div>
      <h4>Run History</h4>
      {!!history?.length && (
        <>
          {history.map((workflow) => (
            <Button
              href={getRunHistoryURL(workspace, workflow)}
              key={workflow.id}
              fullWidth
              alt
              className="mb-1"
            >
              {workflow.runName}
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default RunHistory;
