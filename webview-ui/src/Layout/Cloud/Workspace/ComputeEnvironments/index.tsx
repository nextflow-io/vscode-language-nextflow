import { getComputeEnvURL } from "../../utils";
import { useTowerContext } from "../../../../Context";
import styles from "./styles.module.css";

const ComputeEnvironments = () => {
  const { workspaces, computeEnvs } = useTowerContext();

  return (
    <section>
      <h4>Compute Environments</h4>
      {computeEnvs?.length ? (
        <>
          {computeEnvs?.map((computeEnv) => (
            <div className={styles.row} key={computeEnv.id}>
              <a href={getComputeEnvURL(workspaces, computeEnv)}>
                {computeEnv.name}
              </a>
            </div>
          ))}
        </>
      ) : (
        <div>No compute environments found</div>
      )}
    </section>
  );
};

export default ComputeEnvironments;
