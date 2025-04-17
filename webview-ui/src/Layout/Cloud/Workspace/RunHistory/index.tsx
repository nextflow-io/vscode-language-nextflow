import { useTowerContext } from "../../../../Context";
import {
  getRunHistoryURL,
  relativeTime,
  getRuntimeMinutes,
  getStatusIcon
} from "./utils";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useState } from "react";

const RunHistory = () => {
  const { workspaces, selectedWorkspace, history } = useTowerContext();
  const [displayCount, setDisplayCount] = useState(10);

  const workspace = workspaces?.find(
    (ws) => ws.workspaceId === selectedWorkspace
  );

  const displayedHistory = history?.slice(0, displayCount) || [];
  const hasMore = history && history.length > displayCount;

  return (
    <div>
      <h4>Run History</h4>
      {!!displayedHistory.length && (
        <>
          {displayedHistory.map((workflow) => (
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
                    {relativeTime(workflow.dateCreated)}
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
          {hasMore && (
            <Button
              onClick={() => setDisplayCount((prev) => prev + 10)}
              fullWidth
              bare
              small
              className="mt-2"
            >
              Show More
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default RunHistory;
