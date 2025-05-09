import { SEQERA_PLATFORM_URL } from "../../../../../src/constants";
import Button from "../../../components/Button";
import { useTowerContext, useWorkspaceContext } from "../../../Context";
import pipelineIcon from "../../../images/pipeline.svg";
import seqeraLogo from "../../../images/seqera.svg";
import WorkspaceSelector from "./WorkspaceSelector";
import Select from "../../../components/Select";
import aiIcon from "../../../images/ai.svg";

import styles from "./styles.module.css";

const Toolbar = () => {
  const { userInfo, repoInfo, isAuthenticated } = useTowerContext();
  const { selectedView, setSelectedView } = useWorkspaceContext();
  const username = userInfo?.user?.userName || "unknown";
  const url = repoInfo?.url;
  const isGithub = url?.includes("github.com");

  return (
    <>
      <div className={styles.toolbar}>
        {!!repoInfo && (
          <Button href={url} subtle>
            {isGithub ? (
              <i className="codicon codicon-github mr-2" />
            ) : (
              <img
                src={pipelineIcon}
                style={{ height: 12, opacity: 0.6 }}
                className="mr-2"
              />
            )}
            {`${repoInfo.owner}/${repoInfo.name}`}
          </Button>
        )}
        <Button href={`${SEQERA_PLATFORM_URL}`} subtle2 description="Launchpad">
          <img src={seqeraLogo} style={{ height: 13, opacity: 1 }} />
          {!repoInfo && <span className="ml-2">Launchpad</span>}
        </Button>
        <Button href="https://seqera.io/ask-ai" subtle2 description="Seqera AI">
          <img src={aiIcon} style={{ height: 13, opacity: 1 }} />
        </Button>
        {isAuthenticated && (
          <Button
            href={`${SEQERA_PLATFORM_URL}/profile`}
            description={username}
            icon="codicon-account"
            subtle2
          />
        )}
        <Button
          href="https://docs.seqera.io"
          icon="codicon-question"
          description="Docs"
          subtle2
        />
      </div>
      {isAuthenticated && (
        <>
          <WorkspaceSelector />
          <div className="px-2">
            <Select
              options={[
                { label: "Run History", value: "runs" },
                { label: "Pipelines", value: "pipelines" },
                { label: "Datasets", value: "datasets" },
                { label: "Data Buckets", value: "data-links" },
                { label: "Compute Environments", value: "compute-environments" }
              ]}
              value={selectedView}
              onChange={(value) => setSelectedView(value as string)}
              alt
            />
          </div>
        </>
      )}
    </>
  );
};

export default Toolbar;
