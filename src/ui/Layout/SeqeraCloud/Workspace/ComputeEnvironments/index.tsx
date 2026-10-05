import { useEffect } from "react";
import { getComputeEnvURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import ListItem from "../../../../components/ListItem";

const ComputeEnvironments = () => {
  const { workspaces, computeEnvs, fetchComputeEnvs, workspaceId } =
    useTowerContext();

  useEffect(() => fetchComputeEnvs(workspaceId), [workspaceId]);

  if (!computeEnvs?.length)
    return <div>No compute environments found on current workspace</div>;

  return (
    <>
      {computeEnvs?.map((computeEnv) => (
        <ListItem
          icon="cloud"
          href={getComputeEnvURL(workspaces, computeEnv)}
          key={computeEnv.id}
        >
          <span className="listItem-name">{computeEnv.name}</span>
        </ListItem>
      ))}
    </>
  );
};

export default ComputeEnvironments;
