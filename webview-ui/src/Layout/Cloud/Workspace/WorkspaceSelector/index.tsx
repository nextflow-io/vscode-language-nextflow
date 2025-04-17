import { useTowerContext } from "../../../../Context";
import Select from "../../../../components/Select";
import { getComputeEnvURL } from "../../utils";

import styles from "./styles.module.css";

const WorkspaceSelector = () => {
  const { workspaces, computeEnvs, selectedWorkspace, setSelectedWorkspace } =
    useTowerContext();

  return (
    <>
      <section>
        <h3>Seqera Workspace</h3>
        {workspaces?.length ? (
          <Select
            options={workspaces.map((ws) => ({
              label: ws.orgName + " / " + ws.workspaceName,
              value: ws.workspaceId as number
            }))}
            value={selectedWorkspace ?? ""}
            onChange={setSelectedWorkspace}
          />
        ) : (
          <div>No workspaces found</div>
        )}
      </section>
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
    </>
  );
};

export default WorkspaceSelector;
