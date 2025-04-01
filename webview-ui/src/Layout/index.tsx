import { useWorkspaceContext } from "../Context";
import Processes from "./Processes";
import UserPanel from "./UserPanel";
import Workflows from "./Workflows";

const Layout = () => {
  const { viewID } = useWorkspaceContext();
  if (viewID === "userInfo") return <UserPanel />;
  if (viewID === "workflows") return <Workflows />;
  if (viewID === "processes") return <Processes />;
  return null;
};

export default Layout;
