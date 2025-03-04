import FileTree from "./FileTree";
import { useProvider } from "../Provider";
import "./layout.css";

const Layout = () => {
  const { viewType } = useProvider();
  console.log("viewType", viewType);
  if (viewType === "workflows") return <FileTree type="workflow" />;
  if (viewType === "processes") return <FileTree type="process" />;
  return null;
};

export default Layout;
