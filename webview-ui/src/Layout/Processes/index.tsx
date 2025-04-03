import { useWorkspaceContext } from "../../Context";
import FileList from "../../components/FileList";

import styles from "./styles.module.css";

const Processes = () => {
  const { files, testCount } = useWorkspaceContext();
  const processes = files.filter((f) => f.type === "process");

  const processCount = processes.length;
  let coverage = (testCount / processCount) * 100;
  coverage = Math.round(coverage * 100) / 100;
  let color = "#0dc09d";
  if (coverage < 80) color = "orange";
  if (coverage < 20) color = "red";

  return (
    <div>
      <div className={styles.header}>
        Test coverage: <span style={{ color }}>{coverage}%</span>
      </div>
      <FileList files={processes} />
    </div>
  );
};

export default Processes;
