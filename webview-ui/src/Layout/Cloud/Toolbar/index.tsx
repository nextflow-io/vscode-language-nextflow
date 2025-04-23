import { SEQERA_PLATFORM_URL } from "../../../../../src/constants";
import Button from "../../../components/Button";
import { useTowerContext, useWorkspaceContext } from "../../../Context";
import { getPipelineURL } from "../utils";
import styles from "./styles.module.css";
import pipelineIcon from "../../../images/pipeline.svg";
import seqeraLogo from "../../../images/seqera.svg";
import WorkspaceSelector from "./WorkspaceSelector";
import Select from "../../../components/Select";
import aiIcon from "../../../images/ai.svg";
const Toolbar = () => {
  const { userInfo, repoInfo, isAuthenticated } = useTowerContext();
  const { selectedView, setSelectedView } = useWorkspaceContext();
  const username = userInfo?.user?.userName || "unknown";

  return (
    <>
      <div className={styles.toolbar}>
        {!!repoInfo && (
          <Button
            href={getPipelineURL(repoInfo)}
            subtle
            className={styles.primaryButton}
          >
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
          {!repoInfo && <span className="ml-2">Launchpad</span>}
        </Button>
        <Button href="https://seqera.io/ask-ai" subtle2>
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
                { label: "Pipelines", value: "pipelines" },
                { label: "Run History", value: "runs" },
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
