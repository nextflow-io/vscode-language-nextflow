import { SEQERA_PLATFORM_URL } from "../../../../../../src/constants";
import Button from "../../../../components/Button";
import { useTowerContext } from "../../../../Context";
import { getPipelineURL } from "../../utils";
import styles from "./styles.module.css";
import pipelineIcon from "../../../../images/pipeline.svg";
import seqeraLogo from "../../../../images/seqera.svg";
import WorkspaceSelector from "./WorkspaceSelector";

const Toolbar = () => {
  const { userInfo, repoInfo } = useTowerContext();

  const username = userInfo?.user?.userName || "unknown";

  return (
    <>
      <WorkspaceSelector />
      <div className={styles.toolbar}>
        {!!repoInfo && (
          <Button href={getPipelineURL(repoInfo)} subtle>
            <img
              src={pipelineIcon}
              style={{ height: 12, opacity: 0.6 }}
              className="mr-2"
            />
            {`${repoInfo.owner}/${repoInfo.name}`}
          </Button>
        )}
        <Button href={`${SEQERA_PLATFORM_URL}`} subtle2 description="Launchpad">
          <img src={seqeraLogo} style={{ height: 13, opacity: 1 }} />
        </Button>
        <Button href="https://seqera.io/ask-ai" subtle2 icon="codicon-hubot" />
        <Button
          href={`${SEQERA_PLATFORM_URL}/profile`}
          description={username}
          icon="codicon-account"
          subtle2
        />
        <Button
          href="https://docs.seqera.io"
          icon="codicon-question"
          description="Docs"
          subtle2
        />
      </div>
    </>
  );
};

export default Toolbar;
