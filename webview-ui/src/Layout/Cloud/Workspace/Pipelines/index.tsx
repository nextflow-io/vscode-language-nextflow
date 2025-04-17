import Button from "../../../../components/Button";
import { getWorkflowURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import workflowIcon from "../../../../images/workflow.svg";

const Pipelines = () => {
  const { useLocalContext, setUseLocalContext, pipelines, repoInfo } =
    useTowerContext();
  return (
    <div>
      <div className="flex items-center mb-2 pb-2">
        <h4 className="flex-auto mt-0 mb-0">Workflows</h4>
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
      {!!pipelines && (
        <>
          {pipelines.map((pipeline) => (
            <Button
              href={getWorkflowURL(pipeline)}
              alt
              fullWidth
              className="mb-1"
            >
              <img
                src={workflowIcon}
                className="mr-2"
                style={{ height: 12, opacity: 0.8 }}
              />
              {pipeline.name}
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default Pipelines;
