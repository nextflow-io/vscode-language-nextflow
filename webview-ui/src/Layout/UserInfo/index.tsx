import Button from "../../components/Button";
import { useProvider } from "../../Provider";
import styles from "./styles.module.css";
const UserInfo = () => {
  const { login } = useProvider();

  return (
    <div className={styles.userInfo}>
      <Button onClick={login}>Login to Seqera Platform</Button>
    </div>
  );
};

export default UserInfo;
