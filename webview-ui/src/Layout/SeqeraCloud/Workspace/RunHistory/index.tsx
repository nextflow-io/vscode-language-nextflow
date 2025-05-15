import { useEffect, useState } from "react";
import clsx from "clsx";

import { useTowerContext } from "../../../../Context";
import {
  getRunURL,
  relativeTime,
  getRuntimeMinutes,
  getStatusIcon
} from "./utils";
import Button from "../../../../components/Button";
import ErrorReport from "./ErrorReport";
import FilterForProject from "../FilterForProject";
import ListItem from "../../../../components/ListItem";
import styles from "./styles.module.css";

const RunHistory = () => {
  const {
    selectedWorkspace: workspace,
    runs,
    useLocalContext,
    repoInfo,
    fetchRuns,
    workspaceId
  } = useTowerContext();
  const [displayCount, setDisplayCount] = useState(5);

  const hasRuns = !!runs?.length;
  const displayedHistory = runs?.slice(0, displayCount) || [];
  const hasMore = hasRuns && runs.length > displayCount;

  useEffect(() => fetchRuns(workspaceId), [workspaceId]);

  return (
    <div>
      <FilterForProject />
      {hasRuns ? (
        <>
          {displayedHistory.map((workflow) => (
            <ListItem
              key={workflow.id}
              className={styles.item}
              href={getRunURL(workspace, workflow)}
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
              {workflow.status === "FAILED" && (
                <ErrorReport errorReport={workflow.errorReport} />
              )}
            </ListItem>
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
