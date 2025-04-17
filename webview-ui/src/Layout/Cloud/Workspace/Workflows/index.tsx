import Button from "../../../../components/Button";
import { getWorkflowURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import pipelineIcon from "../../../../images/pipeline.svg";

const Workflows = () => {
  const { useLocalContext, setUseLocalContext, pipelines } = useTowerContext();
  return (
    <div>
      <div className="flex items-center mb-2">
        <h4 className="flex-auto mt-0 mb-0">Workflows</h4>
        <Button
          onClick={() => setUseLocalContext(!useLocalContext)}
          icon={useLocalContext ? "codicon-check" : "codicon-close"}
          active={useLocalContext}
          small
          bare
        >
          Local context
        </Button>
      </div>
      {!!pipelines && (
        <>
          {pipelines.pipelines.map((pipeline) => (
            <Button href={getWorkflowURL(pipeline)} alt fullWidth>
              <img src={pipelineIcon} className="mr-2" />
              {pipeline.name}
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default Workflows;
