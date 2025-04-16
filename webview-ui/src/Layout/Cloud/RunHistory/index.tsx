import { useTowerContext } from "../../../Context";
import Select from "../../../components/Select";

import styles from "./styles.module.css";
import { getComputeEnvURL } from "../utils";
import { useEffect } from "react";
import { Workflow } from "../../../Context/types";

const UserInfo = () => {
  const {
    workspaces,
    selectedWorkspace,
    setSelectedWorkspace,
    computeEnvs,
    history,
    repoInfo
  } = useTowerContext();

  const items = history?.workflows.map(({ workflow }) => workflow);
  let itemsForRepo: Workflow[] = [];

  if (repoInfo?.url) {
    itemsForRepo =
      items?.filter((item) => item.repository === repoInfo.url) || [];
  }

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
        {!!itemsForRepo.length && (
          <>
            {itemsForRepo.map((workflow) => (
              <div key={workflow.id}>{workflow.runName}</div>
            ))}
            <hr />
          </>
        )}
        {items?.map((workflow) => (
          <div key={workflow.id}>{workflow.runName}</div>
        ))}
      </section>
    </div>
  );
};

export default UserInfo;
