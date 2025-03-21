import clsx from "clsx";
import Button from "../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../Context";
import { formatTime, getWorkspaceURL } from "./utils";

import styles from "./styles.module.css";

const UserInfo = () => {
  const { login } = useWorkspaceContext();
  const {
    workspaces,
    organizations,
    userInfo,
    tokenExpiry,
    hasToken,
    computeEnvs,
    error,
    refresh
  } = useTowerContext();

  let tokenExpired = false;
  if (tokenExpiry) tokenExpired = tokenExpiry < Date.now() / 1000;

  return (
    <>
      {!hasToken || tokenExpired ? (
        <div className={clsx(styles.section, styles.centered)}>
          <div>
            {error && (
              <div>
                <p>Error: {error}</p>
              </div>
            )}
            {hasToken && tokenExpired && (
              <div>
                <p>Token expired: {formatTime(tokenExpiry)}</p>
              </div>
            )}
            <Button onClick={login}>Login to Seqera Platform</Button>
          </div>
        </div>
      ) : (
        <div>
          {error && (
            <div className={styles.section}>
              <p>Error:{error}</p>
            </div>
          )}
          <Button onClick={refresh}>Refresh</Button>
          <div className={styles.section}>
            User: {userInfo?.user?.userName}
            <br />
            Email: {userInfo?.user?.email}
          </div>
          <div className={styles.section}>
            <h3>Workspaces</h3>
            {organizations?.length ? (
              <>
                {workspaces?.map((workspace) => (
                  <div key={workspace.orgId} className={styles.row}>
                    <span>{workspace.orgName}</span>
                    <a href={getWorkspaceURL(workspace)}>
                      {workspace.workspaceName}
                    </a>
                  </div>
                ))}
              </>
            ) : (
              <div>No organizations found</div>
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
      )}
      <div className={styles.section}>
        <Button href="https://seqera.io/ask-ai">Talk to Seqera AI</Button>
      </div>
    </>
  );
};

export default UserInfo;
