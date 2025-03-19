import Button from "../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../Context";
import { formatTime } from "./utils";

import styles from "./styles.module.css";
const UserInfo = () => {
  const { login } = useWorkspaceContext();
  const { workspaces, userInfo, tokenExpiry, hasToken } = useTowerContext();
  useTowerContext();

  let tokenExpired = false;
  if (hasToken) tokenExpired = tokenExpiry < Date.now() / 1000;

  return (
    <div className={styles.userInfo}>
      {!userInfo ? (
        <div>
          {tokenExpired && <div>Token expired: {formatTime(tokenExpiry)}</div>}
          <Button onClick={login}>Login to Seqera Platform</Button>
        </div>
      ) : (
        <div>
          <div className={styles.userInfo}>
            User: {userInfo.user.userName}
            <br />
            Email: {userInfo.user.email}
            <br />
            Token expires: {formatTime(tokenExpiry)}
            <br />
            Has token: {hasToken ? "Yes" : "No"}
          </div>
          <div>
            <p>Workspaces</p>
            {workspaces?.map((workspace) => (
              <div key={workspace.orgId}>{workspace.orgName}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
