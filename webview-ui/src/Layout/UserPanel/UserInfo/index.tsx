import clsx from "clsx";
import Button from "../../../components/Button";
import { useTowerContext } from "../../../Context";
import Select from "../../../components/Select";

import styles from "./styles.module.css";

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
      <div className={styles.section}>
        User: {userInfo?.user?.userName}
        <br />
        Email: {userInfo?.user?.email}
      </div>
      <div className={clsx(styles.section)}>
        <Button href="https://seqera.io/ask-ai">Talk to Seqera AI</Button>
      </div>
      <div className={styles.section}>
        <h3>Workspaces</h3>
        {workspaces?.length ? (
          <Select
            options={workspaces.map((ws) => ({
              label: ws.orgName + ": " + ws.workspaceName,
              value: ws.workspaceId
            }))}
            value={selectedWorkspace}
            onChange={setSelectedWorkspace}
          />
        ) : (
          <div>No workspaces found</div>
        )}
      </div>
      <div className={styles.section}>
        <h3>Compute Environments</h3>
        {computeEnvs?.length ? (
          <>
            {computeEnvs?.map((computeEnv) => (
              <div className={styles.row} key={computeEnv.id}>
                <span>{computeEnv.id}</span>
                <span>{computeEnv.name}</span>
              </div>
            ))}
          </>
        ) : (
          <div>No compute environments found</div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
