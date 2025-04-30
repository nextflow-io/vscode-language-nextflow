import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import FileList from "../../components/FileList";
import FileTree from "../../components/FileTree";
import Input from "../../components/Input";
import Select from "../../components/Select";
import styles from "./styles.module.css";

type View = "tree" | "list";

const Workflows = () => {
  const [view, setView] = useState<View>("tree");
  const { nodes } = useWorkspaceContext();
  const [search, setSearch] = useState("");

  const entryNodes = view === "tree"
    ? nodes.filter((n) => n.name === "<entry>")
    : nodes;

  const filteredNodes = view === "list" && search
    ? nodes.filter((n) => n.name.toLowerCase().includes(search.toLowerCase()))
    : nodes;

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
          value={view}
          onChange={(value) => setView(value as View)}
        />
      </div>
      {view === "tree" ? (
        !entryNodes.length
          ? <section className="cozy">No entry workflows found</section>
          : <FileTree nodes={entryNodes} searchTerm={search} />
      ) : (
        !filteredNodes.length
          ? <section className="cozy">No processes or workflows found</section>
          : <FileList nodes={filteredNodes} />
      )}
    </>
  );
};

export default Workflows;
