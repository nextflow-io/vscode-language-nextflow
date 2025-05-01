import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import FileList from "../../components/FileList";
import FileNode from "../../components/FileNode";
import Input from "../../components/Input";
import Select from "../../components/Select";
import styles from "./styles.module.css";

type ViewMode = "tree" | "list";

function round(x: number) {
  return Math.round(x * 100) / 100;
}

const Project = () => {
  const { nodes } = useWorkspaceContext();
  const [viewMode, setViewMode] = useState<ViewMode>("tree");
  const [search, setSearch] = useState("");

  const entryNodes = nodes.filter((n) => n.name === "<entry>");

  function testCoverage() {
    const totalCount = nodes.length - entryNodes.length;
    if( totalCount == 0 )
      return <></>;
    const testCount = nodes.filter((n) => n.test !== undefined).length;
    const coverage = round((testCount / totalCount) * 100);
    const color =
      coverage >= 80 ? "#0dc09d" :
      coverage >= 20 ? "orange" :
      "red";
    return (
      <div className={styles.header}>
        Test coverage: <span style={{ color }}>{coverage}%</span>
      </div>
    );
  };

  function treeView() {
    if (entryNodes.length == 0)
      return <section className="cozy">No entry workflows found</section>;
    return (
      <div className={styles.container}>
        {entryNodes.map((node) => (
          <FileNode node={node} searchTerm={search} />
        ))}
      </div>
    );
  };

  function listView() {
    const filteredNodes = search
      ? nodes.filter((n) => n.name.toLowerCase().includes(search.toLowerCase()))
      : nodes.slice();
    filteredNodes.sort((a, b) => a.name.localeCompare(b.name));
    if (filteredNodes.length == 0)
      return <section className="cozy">No processes or workflows found</section>;
    return <FileList nodes={filteredNodes} />;
  };

  return (
    <>
      <div className={styles.filters}>
        <Input
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder="Search processes and workflows"
        />
        <Select
          options={[
            { label: "Tree view", value: "tree" },
            { label: "List view", value: "list" }
          ]}
          value={viewMode}
          onChange={(value) => setViewMode(value as ViewMode)}
        />
      </div>
      {viewMode === "list" && testCoverage()}
      {viewMode === "tree" ? treeView() : listView()}
    </>
  );
};

export default Project;
