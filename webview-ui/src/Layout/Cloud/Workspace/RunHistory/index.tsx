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
import FilterForProject from "../FilterForProject";

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
            <a
              href={getRunHistoryURL(workspace, workflow)}
              key={workflow.id}
              className={styles.item}
            >
              <div className={styles.header}>
                <span className={styles.name}>{workflow.runName}</span>
                <div className={styles.metadata}>{workflow.projectName}</div>
              </div>
              <div className={styles.footer}>
                <div className={clsx(styles.status, styles[workflow.status])}>
                  <i
                    className={clsx(
                      "codicon",
                      `codicon-${getStatusIcon(workflow.status)}`
                    )}
                  />
                  {workflow.status}
                  {!!workflow.complete && ` (${getRuntimeMinutes(workflow)}m)`}
                </div>
                <div className={styles.date}>
                  {relativeTime(workflow.dateCreated)}
                </div>
              </div>
            </a>
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
