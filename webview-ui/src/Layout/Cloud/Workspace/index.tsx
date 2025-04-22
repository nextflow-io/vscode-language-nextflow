import { useTowerContext } from "../../../Context";
import Toolbar from "./Toolbar";
import RunHistory from "./RunHistory";
import Pipelines from "./Pipelines";
import Datasets from "./Datasets";
import DataLinks from "./DataLinks";
const Workspace = () => {
  const { error } = useTowerContext();
  return (
    <>
      {error && (
        <section>
          <p>Error:{error}</p>
        </section>
      )}
      <Toolbar />
      <section>
        <Pipelines />
        <RunHistory />
        <Datasets />
        <DataLinks />
      </section>
    </>
  );
};

export default Workspace;
