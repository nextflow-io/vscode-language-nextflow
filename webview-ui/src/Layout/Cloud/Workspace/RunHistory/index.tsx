import { useEffect, useState } from "react";
import clsx from "clsx";

import { useTowerContext } from "../../../../Context";
import {
  getRunHistoryURL,
  relativeTime,
  getRuntimeMinutes,
  getStatusIcon
} from "./utils";
import Button from "../../../../components/Button";
import FilterForProject from "../../_shared/FilterForProject";

import styles from "./styles.module.css";

const RunHistory = () => {
  const {
    selectedWorkspace: workspace,
    history,
    useLocalContext,
    repoInfo,
    fetchHistory,
    workspaceId
  } = useTowerContext();
  const [displayCount, setDisplayCount] = useState(5);

  const hasHistory = !!history?.length;
  const displayedHistory = history?.slice(0, displayCount) || [];
  const hasMore = hasHistory && history.length > displayCount;

  useEffect(() => fetchHistory(workspaceId), [workspaceId]);

  return (
    <div>
      <FilterForProject />
      {hasHistory ? (
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
              onClick={() => setDisplayCount((prev) => prev + 5)}
              className="block text-right"
              fullWidth
              bare
              small
            >
              Show More
            </Button>
          )}
        </>
      ) : (
        <>
          {useLocalContext && repoInfo ? (
            <div className="px-2 small">
              No runs found for {repoInfo?.name} in current workspace
            </div>
          ) : (
            <div className="px-2 small">No runs found in current workspace</div>
          )}
        </>
      )}
    </div>
  );
};

export default RunHistory;
