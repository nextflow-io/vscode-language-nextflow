import { SEQERA_PLATFORM_URL } from "../../../../../../src/constants";
import Button from "../../../../components/Button";
import { useTowerContext } from "../../../../Context";
import styles from "./styles.module.css";

const UserInfo = () => {
  const { userInfo } = useTowerContext();

  const username = userInfo?.user?.userName || "unknown";

  return (
    <div className={styles.toolbar}>
      <Button
        href={`${SEQERA_PLATFORM_URL}/profile`}
        description={username}
        icon="codicon-account"
      />
      <Button href={`${SEQERA_PLATFORM_URL}`} icon="codicon-cloud">
        Dashboard
      </Button>
      <Button href="https://seqera.io/ask-ai" icon="codicon-hubot">
        Ask AI
      </Button>
      <Button
        href="https://docs.seqera.io"
        icon="codicon-question"
        description="Docs"
      />
    </div>
  );
};

export default UserInfo;
