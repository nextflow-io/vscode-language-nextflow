import Checkbox from "../../../../components/Checkbox";
import { useTowerContext } from "../../../../Context";

const FilterForProject = () => {
  const { repoInfo, useLocalContext, setUseLocalContext } = useTowerContext();

  if (!repoInfo) return null;

  return (
    <div className="flex items-center mb-2 pb-2">
      <Checkbox checked={useLocalContext} onChange={setUseLocalContext}>
        Filter for {repoInfo.name}
      </Checkbox>
    </div>
  );
};

export default FilterForProject;
