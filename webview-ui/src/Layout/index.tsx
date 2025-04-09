import { useEffect, useRef } from "react";
import { useWorkspaceContext } from "../Context";
import Processes from "./Processes";
import UserPanel from "./UserPanel";
import Workflows from "./Workflows";

const Layout = () => {
  const { viewID, files, refresh } = useWorkspaceContext();
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

  if (viewID === "userInfo") return <UserPanel />;
  if (viewID === "workflows") return <Workflows />;
  if (viewID === "processes") return <Processes />;
  return null;
};

export default Layout;
