import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import FileList from "../../components/FileList";

import styles from "./styles.module.css";
import Input from "../../components/Input";

const Processes = () => {
  const { files, testCount } = useWorkspaceContext();
  const processes = files.filter((f) => f.type === "process");
  const [search, setSearch] = useState("");

  let filteredProcesses = processes;
  if (search) {
    filteredProcesses = processes.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const processCount = processes.length;
  let coverage = (testCount / processCount) * 100;
  coverage = Math.round(coverage * 100) / 100;
  let color = "#0dc09d";
  if (coverage < 80) color = "orange";
  if (coverage < 20) color = "red";

  if (!processes.length) {
    return <section className="cozy">No processes found</section>;
  }

  return (
    <>
      <div className={styles.filters}>
        <Input
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder="Search processes"
        />
      </div>
      <div className={styles.header}>
        Test coverage: <span style={{ color }}>{coverage}%</span>
      </div>
      <FileList files={filteredProcesses} />
    </>
  );
};

export default Processes;
