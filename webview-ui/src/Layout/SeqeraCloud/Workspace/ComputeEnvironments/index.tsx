import { useEffect } from "react";
import { getComputeEnvURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import ListItem from "../../../../components/ListItem";

const ComputeEnvironments = () => {
  const { workspaces, computeEnvs, fetchComputeEnvs, workspaceId } =
    useTowerContext();

  useEffect(() => fetchComputeEnvs(workspaceId), [workspaceId]);

  return (
    <section>
      {computeEnvs?.length ? (
        <>
          {computeEnvs?.map((computeEnv) => (
            <ListItem
              href={getComputeEnvURL(workspaces, computeEnv)}
              key={computeEnv.id}
            >
              <span className="listItem-name">{computeEnv.name}</span>
            </ListItem>
          ))}
        </>
      ) : (
        <div>No compute environments found</div>
      )}
    </section>
  );
};

export default ComputeEnvironments;
