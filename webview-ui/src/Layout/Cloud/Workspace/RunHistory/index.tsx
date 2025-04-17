import { useTowerContext } from "../../../../Context";
import {
  getRunHistoryURL,
  formatDate,
  getRuntimeMinutes,
  getStatusIcon
} from "./utils";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";

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
              <div className={styles.item}>
                <span className={styles.name}>{workflow.runName}</span>
                <div className={styles.metadata}>
                  <span className={styles.date}>
                    {formatDate(workflow.dateCreated)}
                  </span>
                  <span
                    className={clsx(
                      styles.status,
                      workflow.status === "FAILED" && styles.failed
                    )}
                  >
                    <i
                      className={clsx(
                        "codicon",
                        `codicon-${getStatusIcon(workflow.status)}`
                      )}
                    />
                  </span>
                  {workflow.complete && (
                    <span className={styles.runtime}>
                      {getRuntimeMinutes(workflow)}m
                    </span>
                  )}
                </div>
              </div>
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default RunHistory;
