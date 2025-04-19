import { useTowerContext } from "../../../Context";
import Toolbar from "./Toolbar";
import RunHistory from "./RunHistory";
import Pipelines from "./Pipelines";
import Datasets from "./Datasets";

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
      </section>
    </>
  );
};

export default Workspace;
