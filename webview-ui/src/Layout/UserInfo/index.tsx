import Button from "../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../Context";

import styles from "./styles.module.css";

const UserInfo = () => {
  const { login } = useWorkspaceContext();
  const { workspaces, userInfo, tokenExpiry, hasToken } = useTowerContext();
  useTowerContext();

  console.log("🟣 UserInfo", {
    workspaces,
    userInfo,
    tokenExpiry
  });

  let tokenExpired = false;
  if (hasToken) tokenExpired = tokenExpiry < Date.now() / 1000;

  return (
    <div className={styles.userInfo}>
      {!userInfo ? (
        <div>
          {tokenExpired && (
            <div>
              Token expired:{" "}
              {new Date(tokenExpiry * 1000).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
              })}
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
