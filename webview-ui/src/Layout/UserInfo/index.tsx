import Button from "../../components/Button";
import { useWorkspaceContext } from "../../Context";
import styles from "./styles.module.css";
const UserInfo = () => {
  const { login, session } = useWorkspaceContext();

  return (
    <div className={styles.userInfo}>
      {!session ? (
        <Button onClick={login}>Login to Seqera Platform</Button>
      ) : (
        <div>
          <p>{session?.account?.label}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
