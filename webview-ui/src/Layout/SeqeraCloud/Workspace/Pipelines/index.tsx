import { useEffect } from "react";
import { getLaunchURL, getWorkflowURL, relativeTime } from "../../utils";
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
      <FilterForProject showAddButton />
      {hasPipelines ? (
        <>
          {pipelines.map((pipeline) => (
            <ListItem
              flex
              key={pipeline.pipelineId}
              href={getWorkflowURL(pipeline)}
            >
              <div>
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
              </div>
              <div>
                <a
                  className="codicon codicon-play listItem-iconButton"
                  href={getLaunchURL(pipeline)}
                  title="Launch in Seqera Cloud"
                  target="_blank"
                />
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
