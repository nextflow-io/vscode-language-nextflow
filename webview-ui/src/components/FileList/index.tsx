import { TreeNode } from "../../Context/WorkspaceProvider/types";
import FileItem from "./FileItem";

type Props = {
  nodes: TreeNode[];
};

const FileList = ({ nodes }: Props) => {
  return (
    <div>
      {nodes.map((node) => (
        <FileItem key={`${node.path}:${node.name}`} node={node} />
      ))}
    </div>
  );
};

export default FileList;
