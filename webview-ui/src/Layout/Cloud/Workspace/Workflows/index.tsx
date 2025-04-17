import Button from "../../../../components/Button";
import { getPipelineURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import pipelineIcon from "../../../../images/pipeline.svg";

const Workflows = () => {
  const { repoInfo, useLocalContext, setUseLocalContext } = useTowerContext();
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
      {repoInfo && (
        <Button href={getPipelineURL(repoInfo)} alt fullWidth>
          <img src={pipelineIcon} className="mr-2" />
          {`${repoInfo.owner}/${repoInfo.name}`}
        </Button>
      )}
    </div>
  );
};

export default Workflows;
