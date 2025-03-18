import Button from "../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../Context";

import styles from "./styles.module.css";

const UserInfo = () => {
  const { login } = useWorkspaceContext();
  const { workspaces, userInfo, hasToken, tokenExpired, tokenExpiry } =
    useTowerContext();

  console.log("🟣 UserInfo", {
    workspaces,
    userInfo,
    hasToken,
    tokenExpired,
    tokenExpiry
  });

  return (
    <div className={styles.userInfo}>
      {!userInfo ? (
        <div>
          {tokenExpired && (
            <div>
              Token expired: {new Date(tokenExpiry * 1000).toLocaleString()}
            </div>
          )}
          <Button onClick={login}>Login to Seqera Platform</Button>
        </div>
      ) : (
        <div>
          <div className={styles.userInfo}>
            User: {userInfo.user.userName}
            <br />
            Email: {userInfo.user.email}
            <br />
            Token expires: {tokenExpiry}
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
