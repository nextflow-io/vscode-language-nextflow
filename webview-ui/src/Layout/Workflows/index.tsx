import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import FileTree from "../../components/FileTree";
import FileList from "../../components/FileList";
import Select from "../../components/Select";
import Input from "../../components/Input";
import styles from "./styles.module.css";
type View = "tree" | "list";

const Workflows = () => {
  const [view, setView] = useState<View>("tree");
  const { files, tree } = useWorkspaceContext();
  const workflows = files.filter((f) => f.type === "workflow");
  const [search, setSearch] = useState("");

  let filteredWorkflows = workflows;
  if (search) {
    filteredWorkflows = workflows.filter((wf) =>
      wf.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <div className={styles.filters}>
        <Input
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder="Search workflows"
        />
        <Select
          options={[
            { label: "Tree view", value: "tree" },
            { label: "List view", value: "list" }
          ]}
          value={view}
          onChange={(value) => setView(value as View)}
        />
      </div>
      {view === "tree" ? (
        <FileTree tree={tree} searchTerm={search} />
      ) : (
        <FileList files={filteredWorkflows} />
      )}
    </>
  );
};

export default Workflows;
