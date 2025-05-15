import { useEffect } from "react";
import { getWorkflowURL, relativeTime } from "../../utils";
import { useTowerContext } from "../../../../Context";
import FilterForProject from "../FilterForProject";
import { WorkflowIcon } from "../../../../icons";
import ListItem from "../../../../components/ListItem";

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
            <ListItem key={pipeline.pipelineId} href={getWorkflowURL(pipeline)}>
              <div className="listItem-name">
                <WorkflowIcon
                  className="mr-2"
                  style={{ height: 12, opacity: 0.8 }}
                />
                <label>{pipeline.name}</label>
              </div>
              <div className="listItem-meta">
                Updated: {relativeTime(pipeline.lastUpdated)}
              </div>
            </ListItem>
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
