import WorkspaceProvider, { useWorkspaceContext } from "./WorkspaceProvider";
import TowerProvider, { useTowerContext } from "./TowerProvider";
import { getVscode } from "./utils";

const vscode = getVscode();

type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props) => {
  return (
    <WorkspaceProvider vscode={vscode}>
      <TowerProvider vscode={vscode}>{children}</TowerProvider>
    </WorkspaceProvider>
  );
};

export { useWorkspaceContext, useTowerContext };

export default Context;
