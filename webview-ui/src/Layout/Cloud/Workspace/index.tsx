import { useTowerContext } from "../../../Context";
import UserInfo from "./UserInfo";
import RunHistory from "./RunHistory";
import WorkspaceSelector from "./WorkspaceSelector";
import Workflows from "./Workflows";

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
        <Workflows />
        <RunHistory />
      </section>
    </>
  );
};

export default Workspace;
