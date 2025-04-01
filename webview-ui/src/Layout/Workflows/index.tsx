import { useWorkspaceContext } from "../../Context";
import FileTree from "../../components/FileTree";

const Workflows = () => {
  const { files } = useWorkspaceContext();
  const workflows = files.filter((f) => f.type === "workflow");

  return <FileTree files={workflows} />;
};

export default Workflows;
