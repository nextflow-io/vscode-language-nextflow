import { useEffect } from "react";
import { getWorkflowURL, relativeTime } from "../../utils";
import { useTowerContext } from "../../../../Context";
import FilterForProject from "../FilterForProject";
import { WorkflowIcon } from "../../../../icons";
import ListItem from "../../../../components/ListItem";
import { Pipeline } from "../../../../Context/types";

const Pipelines = () => {
  const {
    useLocalContext,
    pipelines,
    repoInfo,
    fetchPipelines,
    workspaceId,
    runPipeline
  } = useTowerContext();
  const hasPipelines = !!pipelines?.length;

  useEffect(() => fetchPipelines(workspaceId), [workspaceId]);

  const handlePlayClick = (e: React.MouseEvent, pipeline: Pipeline) => {
    e.preventDefault();
    e.stopPropagation();
    runPipeline(pipeline.repository, workspaceId!);
  };

  return (
    <div>
      <FilterForProject />
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
                <button
                  className="codicon codicon-play listItem-iconButton"
                  onClick={(e) => handlePlayClick(e, pipeline)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--vscode-button-foreground)",
                    cursor: "pointer",
                    padding: "4px",
                    marginLeft: "8px"
                  }}
                  title="Run pipeline"
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
