import Button from "../../../../components/Button";
import { getPipelineURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import pipelineIcon from "../../../../images/pipeline.svg";

const AddedPipelines = () => {
  const { repoInfo } = useTowerContext();
  if (!repoInfo) {
    return null;
  }
  return (
    <div>
      <div className="flex items-center">
        <h4 className="flex-auto">Pipelines</h4>
        <div className="flex items-center">
          <input type="checkbox" checked={true} />
          <span>
            Only {repoInfo.owner}/{repoInfo.name}
          </span>
        </div>
      </div>
      <Button href={getPipelineURL(repoInfo)} alt fullWidth>
        <img src={pipelineIcon} className="mr-2" />
        {`${repoInfo.owner}/${repoInfo.name}`}
      </Button>
    </div>
  );
};

export default AddedPipelines;
