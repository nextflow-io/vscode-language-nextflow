import { useTowerContext } from "../../../Context";
import UserInfo from "./UserInfo";
import RunHistory from "./RunHistory";
import WorkspaceSelector from "./WorkspaceSelector";
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
      <UserInfo />
      <WorkspaceSelector />
      <section>
        <Pipelines />
        <RunHistory />
      </section>
    </>
  );
};

export default Workspace;
