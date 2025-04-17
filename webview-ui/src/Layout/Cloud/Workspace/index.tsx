import { useTowerContext } from "../../../Context";
import UserInfo from "./UserInfo";
import RunHistory from "./RunHistory";
import WorkspaceSelector from "./WorkspaceSelector";

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
      <RunHistory />
    </>
  );
};

export default Workspace;
