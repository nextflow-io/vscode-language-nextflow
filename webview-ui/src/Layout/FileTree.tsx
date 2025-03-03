import FileNode from "./FileNode";

import { FileNode as FileNodeType } from "./types";

type Props = {
  name: string;
  type: "workflow" | "process";
  files: FileNodeType[];
  openFile: (filePath: string) => void;
};

const FileTree = ({ name, type, files, openFile }: Props) => {
  const filteredFiles = files.filter((f) => f.type === type);

  return (
    <div>
      <h2>{name}</h2>
      {filteredFiles.map((node) => (
        <FileNode key={node.filePath} node={node} openFile={openFile} />
      ))}
    </div>
  );
};

export default FileTree;
