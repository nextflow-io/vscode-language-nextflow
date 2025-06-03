import { useTowerContext, useWorkspaceContext } from "../../../Context";
import RunHistory from "./RunHistory";
import Pipelines from "./Pipelines";
import Datasets from "./Datasets";
import DataLinks from "./DataLinks";
import ComputeEnvironments from "./ComputeEnvironments";
import AddPipeline from "./AddPipeline";

const Workspace = () => {
  const { error } = useTowerContext();
  const { selectedView } = useWorkspaceContext();
  return (
    <>
      {error && (
        <section>
          <p>Error:{error}</p>
        </section>
      )}
      <section>
        {selectedView === "runs" && <RunHistory />}
        {selectedView === "pipelines" && <Pipelines />}
        {selectedView === "datasets" && <Datasets />}
        {selectedView === "data-links" && <DataLinks />}
        {selectedView === "compute-environments" && <ComputeEnvironments />}
        {selectedView === "add-pipeline" && <AddPipeline />}
      </section>
    </>
  );
};

export default Workspace;
