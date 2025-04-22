import { useEffect } from "react";
import Button from "../../../../components/Button";
import { getWorkflowURL, relativeTime } from "../../utils";
import { useTowerContext } from "../../../../Context";
import workflowIcon from "../../../../images/workflow.svg";

import styles from "./styles.module.css";

const Pipelines = () => {
  const {
    useLocalContext,
    setUseLocalContext,
    pipelines,
    repoInfo,
    fetchPipelines,
    workspaceId
  } = useTowerContext();
  const hasPipelines = !!pipelines?.length;

  useEffect(() => fetchPipelines(workspaceId), [workspaceId]);

  return (
    <div>
      <div className="flex items-center mb-2 pb-2">
        {!!repoInfo?.name && (
          <Button
            onClick={() => setUseLocalContext(!useLocalContext)}
            icon={useLocalContext ? "codicon-check" : "codicon-close"}
            active={useLocalContext}
            small
            alt
          >
            Filter for {repoInfo.name}
          </Button>
        )}
      </div>
      {hasPipelines ? (
        <>
          {pipelines.map((pipeline) => (
            <a href={getWorkflowURL(pipeline)} className={styles.item}>
              <div className="flex items-center">
                <img
                  src={workflowIcon}
                  className="mr-2"
                  style={{ height: 12, opacity: 0.8 }}
                />
                {pipeline.name}
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
