import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import { getPipelineURL } from "../../utils";

const RepoInfo = () => {
  const { repoInfo } = useTowerContext();
  if (!repoInfo?.url) return null;

  return (
    <div className="px-2 pt-2">
      <Button href={getPipelineURL(repoInfo)} alt fullWidth icon="codicon-info">
        {`${repoInfo.owner}/${repoInfo.name}`}
      </Button>
    </div>
  );
};

export default RepoInfo;
