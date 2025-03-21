import clsx from "clsx";
import Button from "../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../Context";
import { formatTime } from "./utils";

import styles from "./styles.module.css";

const UserInfo = () => {
  const { login } = useWorkspaceContext();
  const {
    workspaces,
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
            {tokenExpired && (
              <div>
                <p>Token expired: {formatTime(tokenExpiry)}</p>
              </div>
            )}
            <div>
              <p>Has token: {hasToken ? "Yes" : "No"}</p>
            </div>
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
            <br />
            Token expires: {formatTime(tokenExpiry)}
            <br />
            Has token: {hasToken ? "Yes" : "No"}
          </div>
          <div className={styles.section}>
            <Button href="https://seqera.io/ask-ai">Talk to Seqera AI</Button>
          </div>
          <div className={styles.section}>
            <p>Workspaces</p>
            {workspaces?.map((workspace) => (
              <div key={workspace.orgId}>{workspace.orgName}</div>
            ))}
          </div>
          <div className={styles.section}>
            <p>Compute Envs</p>
            {computeEnvs?.map((computeEnv) => (
              <div key={computeEnv.id}>{computeEnv.name}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
