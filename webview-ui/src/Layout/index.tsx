import { useEffect } from "react";
import { useWorkspaceContext } from "../Context";
import Processes from "./Processes";
import UserPanel from "./UserPanel";
import Workflows from "./Workflows";

const Layout = () => {
  const { viewID, refresh, files } = useWorkspaceContext();

  useEffect(() => {
    // Hacky fix for empty file state we get sometimes
    if (!["workflows", "processes"].includes(viewID)) return;
    if (files.length) return;
    setTimeout(refresh, 2000);
  }, []);

  if (viewID === "userInfo") return <UserPanel />;
  if (viewID === "workflows") return <Workflows />;
  if (viewID === "processes") return <Processes />;
  return null;
};

export default Layout;
