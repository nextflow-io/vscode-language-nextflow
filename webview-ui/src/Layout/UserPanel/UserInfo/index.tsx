import { useTowerContext } from "../../../Context";
import Select from "../../../components/Select";

import styles from "./styles.module.css";
import { getComputeEnvURL } from "../utils";

const UserInfo = () => {
  const {
    workspaces,
    selectedWorkspace,
    setSelectedWorkspace,
    userInfo,
    computeEnvs,
    error
  } = useTowerContext();

  return (
    <div>
      {error && (
        <div className={styles.section}>
          <p>Error:{error}</p>
        </div>
      )}
      <section>
        User: {userInfo?.user?.userName}
        <br />
        Email: {userInfo?.user?.email}
      </section>
      <section>
        <h3>Workspaces</h3>
        {workspaces?.length ? (
          <Select
            options={workspaces.map((ws) => ({
              label: ws.orgName + " / " + ws.workspaceName,
              value: ws.workspaceId
            }))}
            value={selectedWorkspace}
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
    </div>
  );
};

export default UserInfo;
