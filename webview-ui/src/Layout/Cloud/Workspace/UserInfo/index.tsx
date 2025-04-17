import { SEQERA_PLATFORM_URL } from "../../../../../../src/constants";
import Button from "../../../../components/Button";
import { useTowerContext } from "../../../../Context";
import { getPipelineURL } from "../../utils";
import styles from "./styles.module.css";
import pipelineIcon from "../../../../images/pipeline.svg";

const UserInfo = () => {
  const { userInfo, repoInfo } = useTowerContext();

  const username = userInfo?.user?.userName || "unknown";

  return (
    <div className={styles.toolbar}>
      {!!repoInfo && (
        <Button href={getPipelineURL(repoInfo)} alt icon="codicon-info">
          {`${repoInfo.name}`}
        </Button>
      )}
      <Button href={`${SEQERA_PLATFORM_URL}`} alt description="Launchpad">
        <img src={pipelineIcon} style={{ height: 14, opacity: 0.8 }} />
      </Button>
      <Button href="https://seqera.io/ask-ai" icon="codicon-hubot" alt />
      <Button
        href={`${SEQERA_PLATFORM_URL}/profile`}
        description={username}
        icon="codicon-account"
        alt
      />
      <Button
        href="https://docs.seqera.io"
        icon="codicon-question"
        description="Docs"
        alt
      />
    </div>
  );
};

export default UserInfo;
