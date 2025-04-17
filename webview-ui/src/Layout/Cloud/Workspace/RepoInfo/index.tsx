import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import { getPipelineURL } from "../../utils";

const RepoInfo = () => {
  const { repoInfo } = useTowerContext();
  if (!repoInfo?.url) return null;

  return (
    <div className="p-2">
      <Button
        href={getPipelineURL(repoInfo)}
        subtle
        fullWidth
        icon="codicon-info"
      >
        {`${repoInfo.owner}/${repoInfo.name}`}
      </Button>
    </div>
  );
};

export default RepoInfo;
