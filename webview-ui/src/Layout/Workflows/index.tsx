import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import FileTree from "../../components/FileTree";
import FileList from "../../components/FileList";
import styles from "./styles.module.css";
import Select from "../../components/Select";

type View = "tree" | "list";

const Workflows = () => {
  const [view, setView] = useState<View>("tree");
  const { files, tree } = useWorkspaceContext();
  const workflows = files.filter((f) => f.type === "workflow");

  return (
    <>
      <div className={styles.header}>
        <Select
          options={[
            { label: "Import Tree", value: "tree" },
            { label: "Alphabetical", value: "list" }
          ]}
          value={view}
          onChange={(value) => setView(value as View)}
        />
      </div>
      {view === "tree" ? (
        <FileTree tree={tree} />
      ) : (
        <FileList files={workflows} />
      )}
    </>
  );
};

export default Workflows;
