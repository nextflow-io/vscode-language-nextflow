import Input from "../../../../../components/Input";
import ComputeEnvSelector from "./ComputeEnvSelector";
import Button from "../../../../../components/Button";
import { ComputeEnv, AddPipelineRequest } from "../../../../../Context/types";
import SuccessPage from "./SuccessPage";
import Spinner from "../../../../../components/Spinner";

type Props = {
  requestBody: AddPipelineRequest;
  setRequestBody: React.Dispatch<React.SetStateAction<AddPipelineRequest>>;
  isLoading: boolean;
  failed: boolean;
  pipelineAdded: boolean;
  setSelectedComputeEnv: (computeEnv: ComputeEnv | null) => void;
  selectedComputeEnv: ComputeEnv | null;
  handleAddPipeline: () => void;
};

const Layout: React.FC<Props> = ({
  isLoading,
  failed,
  pipelineAdded,
  setSelectedComputeEnv,
  selectedComputeEnv,
  requestBody,
  setRequestBody,
  handleAddPipeline
}) => {
  if (pipelineAdded && !failed) {
    return <SuccessPage />;
  }
  return (
    <div>
      <ComputeEnvSelector
        setSelectedComputeEnv={setSelectedComputeEnv}
        selectedComputeEnv={selectedComputeEnv}
      />
      <Input
        label="Work directory"
        value={requestBody.launch.workDir}
        onChange={(value) =>
          setRequestBody((prev) => ({
            ...prev,
            launch: { ...prev.launch, workDir: value }
          }))
        }
      />
      <Input
        className="mb-2"
        label="Pipeline name"
        value={requestBody.name}
        onChange={(value) =>
          setRequestBody((prev) => ({ ...prev, name: value }))
        }
      />
      <Input
        className="mb-2"
        label="Pipeline description"
        value={requestBody.description}
        onChange={(value) =>
          setRequestBody((prev) => ({ ...prev, description: value }))
        }
      />
      <Input
        label="Pipeline URL"
        value={requestBody.launch.pipeline}
        onChange={(value) =>
          setRequestBody((prev) => ({
            ...prev,
            launch: { ...prev.launch, pipeline: value }
          }))
        }
      />
      <Input
        label="Revision"
        value={requestBody.launch.revision}
        onChange={(value) =>
          setRequestBody((prev) => ({
            ...prev,
            launch: { ...prev.launch, revision: value }
          }))
        }
      />
      <div className="mt-2">
        {failed && <div className="mb-2">Failed to add pipeline</div>}
        <div className="flex items-center gap-2">
          <Button onClick={handleAddPipeline} disabled={isLoading}>
            {isLoading ? "Adding pipeline..." : "Add pipeline"}
          </Button>
          {isLoading && <Spinner />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
