import WorkspaceProvider, { useWorkspaceContext } from "./WorkspaceProvider";
import TowerProvider, { useTowerContext } from "./TowerProvider";

type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props) => {
  return (
    <WorkspaceProvider>
      <TowerProvider>{children}</TowerProvider>
    </WorkspaceProvider>
  );
};

export { useWorkspaceContext, useTowerContext };

export default Context;
