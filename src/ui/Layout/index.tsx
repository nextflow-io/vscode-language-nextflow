import { useEffect, useRef, useState } from "react";
import { useWorkspaceContext } from "../Context";
import Project from "./Project";
import SeqeraCloud from "./SeqeraCloud";

const Layout = () => {
  const { viewID, nodes, refresh } = useWorkspaceContext();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Hacky fix for empty file state we get sometimes
    // TODO: find out why this is happening
    if (viewID !== "project") return;
    if (!nodes.length && retryCount <= 2) {
      timeoutRef.current = setTimeout(() => {
        refresh();
        setRetryCount((prev) => prev + 1);
      }, 2000);
    } else {
      const ref = timeoutRef.current;
      if (ref) clearTimeout(ref);
      timeoutRef.current = null;
    }
  }, [nodes, retryCount]);

  if (viewID === "project") return <Project />;
  if (viewID === "seqeraCloud") return <SeqeraCloud />;
  return null;
};

export default Layout;
