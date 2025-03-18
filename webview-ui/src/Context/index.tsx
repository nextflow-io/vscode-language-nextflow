import WorkspaceProvider, { useWorkspaceContext } from "./WorkspaceProvider";
import TowerProvider, { useTowerContext } from "./TowerProvider";
import { getVscode } from "./utils";
import { useState } from "react";
import { useEffect } from "react";

const vscode = getVscode();

type Props = {
  children: React.ReactNode;
};

type viewID = "workflows" | "processes" | "userInfo" | null;

const Context = ({ children }: Props) => {
  const state = vscode.getState();
  const [viewID, setViewID] = useState<viewID>(state?.viewID || null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("🟣 handleMessage", event.data);
      if (viewID) return;
      const { data } = event;
      if (data.viewID) setViewID(data.viewID);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <WorkspaceProvider vscode={vscode} viewID={viewID}>
      {viewID === "userInfo" ? (
        <TowerProvider vscode={vscode}>{children}</TowerProvider>
      ) : (
        <>{children}</>
      )}
    </WorkspaceProvider>
  );
};

export { useWorkspaceContext, useTowerContext };

export default Context;
