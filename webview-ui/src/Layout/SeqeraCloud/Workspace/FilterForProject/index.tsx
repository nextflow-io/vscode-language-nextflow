import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";
import { useTowerContext, useWorkspaceContext } from "../../../../Context";

const FilterForProject = ({ showAddButton = false }) => {
  const { repoInfo, useLocalContext, setUseLocalContext } = useTowerContext();
  const { setSelectedView } = useWorkspaceContext();

  if (!repoInfo) return null;

  return (
    <div className="flex items-center justify-between mb-2 pb-2">
      <Checkbox checked={useLocalContext} onChange={setUseLocalContext}>
        Filter for {repoInfo.name}
      </Checkbox>
      {showAddButton && (
        <Button
          onClick={() => setSelectedView("add-pipeline")}
          icon="codicon-add"
          subtle2
          small
        >
          Add Pipeline
        </Button>
      )}
    </div>
  );
};

export default FilterForProject;
