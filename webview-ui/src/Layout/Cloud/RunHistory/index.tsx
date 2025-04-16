import { useTowerContext } from "../../../Context";
import Select from "../../../components/Select";

import styles from "./styles.module.css";
import { getComputeEnvURL } from "../utils";
import { useEffect } from "react";

const UserInfo = () => {
  const {
    workspaces,
    selectedWorkspace,
    setSelectedWorkspace,
    computeEnvs,
    history,
    repoInfo
  } = useTowerContext();

  useEffect(() => {
    if (repoInfo) {
      console.log("🟢 repoInfo", repoInfo);
    }
    if (history) {
      console.log("🟢 history", history);
    }
  }, [history, repoInfo]);

  return (
    <div>
      <section>
        <h3>Workspaces</h3>
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
        <h3>Compute Environments</h3>
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
      <section>
        <h3>Run History</h3>
        {history?.workflows?.map((workflow) => (
          <div key={workflow.workflow.id}>{workflow.workflow.runName}</div>
        ))}
      </section>
    </div>
  );
};

export default UserInfo;
