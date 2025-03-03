import { useProvider } from "../Provider";
import FileNode from "./FileNode";

type Props = {
  name: string;
  type: "workflow" | "process";
};

const FileTree = ({ name, type }: Props) => {
  const { files } = useProvider();
  const filteredFiles = files.filter((f) => f.type === type);

  return (
    <div>
      <h2>{name}</h2>
      {filteredFiles.map((node) => (
        <FileNode key={node.filePath} node={node} />
      ))}
    </div>
  );
};

export default FileTree;
