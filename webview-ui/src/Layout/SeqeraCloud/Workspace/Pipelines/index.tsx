import { useEffect } from "react";
import { getWorkflowURL, relativeTime } from "../../utils";
import { useTowerContext } from "../../../../Context";
import workflowIcon from "../../../../images/workflow.svg";
import FilterForProject from "../FilterForProject";
import styles from "./styles.module.css";

const Pipelines = () => {
  const { useLocalContext, pipelines, repoInfo, fetchPipelines, workspaceId } =
    useTowerContext();
  const hasPipelines = !!pipelines?.length;

  useEffect(() => fetchPipelines(workspaceId), [workspaceId]);

  return (
    <div>
      <FilterForProject />
      {hasPipelines ? (
        <>
          {pipelines.map((pipeline) => (
            <a href={getWorkflowURL(pipeline)} className={styles.item}>
              <div className={styles.name}>
                <img
                  src={workflowIcon}
                  className="mr-2"
                  style={{ height: 12, opacity: 0.8 }}
                />
                <label>{pipeline.name}</label>
              </div>
              <div className={styles.meta}>
                Updated: {relativeTime(pipeline.lastUpdated)}
              </div>
            </a>
          ))}
        </>
      ) : (
        <>
          {useLocalContext && repoInfo ? (
            <div className="px-2 small">
              None found for {repoInfo?.name} in current workspace
            </div>
          ) : (
            <div className="px-2 small">None found in current workspace</div>
          )}
        </>
      )}
    </div>
  );
};

export default Pipelines;
