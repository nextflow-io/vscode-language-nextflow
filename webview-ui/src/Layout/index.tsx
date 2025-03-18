import { useWorkspaceContext } from "../Context";
import FileTree from "./FileTree";
import UserInfo from "./UserInfo";

import styles from "./styles.module.css";

const Layout = () => {
  const { viewID, files, testCount } = useWorkspaceContext();
  const processes = files.filter((f) => f.type === "process");
  const workflows = files.filter((f) => f.type === "workflow");

  const processCount = processes.length;
  let coverage = (testCount / processCount) * 100;
  coverage = Math.round(coverage * 100) / 100;
  let color = "#0dc09d";
  if (coverage < 80) color = "orange";
  if (coverage < 20) color = "red";
  console.log("🟣 viewID", viewID);

  if (viewID === "userInfo") return <UserInfo />;

  if (viewID === "workflows") return <FileTree files={workflows} />;
  if (viewID === "processes")
    return (
      <div>
        <div className={styles.header}>
          Test coverage: <span style={{ color }}>{coverage}%</span>
        </div>
        <FileTree files={processes} />
      </div>
    );
  return null;
};

export default Layout;
