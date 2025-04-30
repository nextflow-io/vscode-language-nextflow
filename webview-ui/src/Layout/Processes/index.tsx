import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import FileList from "../../components/FileList";
import Input from "../../components/Input";
import styles from "./styles.module.css";

function round(x: number) {
  return Math.round(x * 100) / 100;
}

const Processes = () => {
  const { nodes } = useWorkspaceContext();
  const processes = nodes.filter((f) => f.type === "process");
  const [search, setSearch] = useState("");

  const filteredProcesses = search
    ? processes.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : processes;

  const testCount = processes.filter((n) => n.test !== undefined).length;
  const coverage = round((testCount / processes.length) * 100);
  const color =
    coverage >= 80 ? "#0dc09d" :
    coverage >= 20 ? "orange" :
    "red";

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
      <FileList nodes={filteredProcesses} />
    </>
  );
};

export default Processes;
