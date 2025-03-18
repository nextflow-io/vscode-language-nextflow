import Button from "../../components/Button";
import { useWorkspaceContext, useTowerContext } from "../../Context";

import styles from "./styles.module.css";

const UserInfo = () => {
  const { login } = useWorkspaceContext();
  const { workspaces, userInfo } = useTowerContext();

  console.log("🟣 userInfo", userInfo);
  return (
    <div className={styles.userInfo}>
      {!userInfo ? (
        <Button onClick={login}>Login to Seqera Platform</Button>
      ) : (
        <div>
          <div className={styles.userInfo}>
            User: {userInfo.user.userName}
            <br />
            Email: {userInfo.user.email}
          </div>
          <div>
            <p>Workspaces</p>
            {workspaces.map((workspace) => (
              <div key={workspace.orgId}>{workspace.orgName}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
