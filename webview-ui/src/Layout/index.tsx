import { useEffect, useRef } from "react";
import { useWorkspaceContext, useTowerContext } from "../Context";
import Processes from "./Processes";
import Cloud from "./Cloud";
import Workflows from "./Workflows";

const Layout = () => {
  const { viewID, files } = useWorkspaceContext();
  const { refresh } = useTowerContext();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Hacky fix for empty file state we get sometimes
    // TODO: find out why this is happening
    if (!["workflows", "processes"].includes(viewID)) return;
    if (!files.length) {
      timeoutRef.current = setTimeout(refresh, 1000);
    } else {
      const ref = timeoutRef.current;
      if (ref) clearTimeout(ref);
      timeoutRef.current = null;
    }
  }, [files]);

  if (viewID === "userInfo") return <Cloud />;
  if (viewID === "workflows") return <Workflows />;
  if (viewID === "processes") return <Processes />;
  return null;
};

export default Layout;
