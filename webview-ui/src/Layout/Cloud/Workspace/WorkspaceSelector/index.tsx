import { useTowerContext } from "../../../../Context";
import Select from "../../../../components/Select";
import { getComputeEnvURL, getPipelineURL, getWorkspaceURL } from "../../utils";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import pipelineIcon from "../../../../images/pipeline.svg";

const WorkspaceSelector = () => {
  const {
    workspaces,
    computeEnvs,
    selectedWorkspace,
    setSelectedWorkspace,
    repoInfo
  } = useTowerContext();

  const currentWorkspace = workspaces?.find(
    (ws) => ws.workspaceId === selectedWorkspace
  );

  let manageURL = "";
  if (currentWorkspace) {
    manageURL = getWorkspaceURL(currentWorkspace);
  }

  return (
    <>
      <h3>Workspace</h3>
      <div className="p-2">
        {repoInfo?.url && (
          <Button href={getPipelineURL(repoInfo)} alt fullWidth>
            <img src={pipelineIcon} className="mr-2" />
            {`${repoInfo.owner}/${repoInfo.name}`}
          </Button>
        )}
      </div>
      <div className="flex justify-between p-2">
        <div>
          {workspaces?.length ? (
            <Select
              options={workspaces.map((ws) => ({
                label: ws.orgName + " / " + ws.workspaceName,
                value: ws.workspaceId as number
              }))}
              value={selectedWorkspace ?? ""}
              onChange={setSelectedWorkspace}
            />
          ) : (
            <div>No workspaces found</div>
          )}
        </div>
        {!!manageURL && <Button href={manageURL} icon="codicon-gear" alt />}
      </div>
      <section>
        <h4>Compute Environments</h4>
        {computeEnvs?.length ? (
          <>
            {computeEnvs?.map((computeEnv) => (
              <div className={styles.row} key={computeEnv.id}>
                <a href={getComputeEnvURL(workspaces, computeEnv)}>
                  {computeEnv.name}
                </a>
              </div>
            ))}
          </>
        ) : (
          <div>No compute environments found</div>
        )}
      </section>
    </>
  );
};

export default WorkspaceSelector;
