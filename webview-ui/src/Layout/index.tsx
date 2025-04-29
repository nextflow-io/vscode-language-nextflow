import { useEffect, useRef, useState } from "react";
import { useWorkspaceContext } from "../Context";
import Processes from "./Processes";
import Cloud from "./Cloud";
import Workflows from "./Workflows";
import Modules from "./Modules";

const Layout = () => {
  const { viewID, files, refresh } = useWorkspaceContext();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Hacky fix for empty file state we get sometimes
    // TODO: find out why this is happening
    if (!["workflows", "processes"].includes(viewID)) return;
    if (!files.length && retryCount < 2) {
      timeoutRef.current = setTimeout(() => {
        refresh();
        setRetryCount((prev) => prev + 1);
      }, 1000);
    } else {
      const ref = timeoutRef.current;
      if (ref) clearTimeout(ref);
      timeoutRef.current = null;
    }
  }, [files, retryCount]);

  if (viewID === "userInfo") return <Cloud />;
  if (viewID === "workflows") return <Workflows />;
  if (viewID === "processes") return <Processes />;
  if (viewID === "modules") return <Modules />;
  return null;
};

export default Layout;
