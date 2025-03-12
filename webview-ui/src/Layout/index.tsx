import FileTree from "./FileTree";
import { useProvider } from "../Provider";
import styles from "./styles.module.css";
import UserInfo from "./UserInfo";

const Layout = () => {
  const { viewType, files, testCount } = useProvider();
  const processes = files.filter((f) => f.type === "process");
  const workflows = files.filter((f) => f.type === "workflow");

  const processCount = processes.length;
  let coverage = (testCount / processCount) * 100;
  coverage = Math.round(coverage * 100) / 100;
  let color = "#0dc09d";
  if (coverage < 80) color = "orange";
  if (coverage < 20) color = "red";

  if (viewType === "userInfo") return <UserInfo />;

  if (viewType === "workflows") return <FileTree files={workflows} />;
  if (viewType === "processes")
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
