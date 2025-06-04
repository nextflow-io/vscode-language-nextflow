import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";
import Input from "../../../../components/Input";

import type {
  ComputeEnv,
  AddPipelineRequest,
  AddPipelineResponse
} from "../../../../Context/types";
import ComputeEnvSelector from "./ComputeEnvSelector";
import Button from "../../../../components/Button";

const initialState: AddPipelineRequest = {
  name: "",
  description: "",
  launch: {
    workspaceId: "",
    computeEnvId: "",
    workDir: "",
    pipeline: "",
    revision: ""
  }
};

const AddPipeline = () => {
  const {
    fetchHubPipelines,
    hubPipelines,
    repoInfo,
    workspaceId,
    addPipeline
  } = useTowerContext();
  const [selectedComputeEnv, setSelectedComputeEnv] =
    useState<ComputeEnv | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pipelineAdded, setPipelineAdded] = useState(false);
  const [responseBody, setResponseBody] = useState<AddPipelineResponse | null>(
    null
  );
  const [requestBody, setRequestBody] =
    useState<AddPipelineRequest>(initialState);
  const failed = pipelineAdded && !responseBody;

  useEffect(() => {
    if (!selectedComputeEnv) return;
    setRequestBody((prev) => ({
      ...prev,
      launch: {
        ...prev.launch,
        computeEnvId: selectedComputeEnv.id,
        workDir: selectedComputeEnv.workDir
      }
    }));
  }, [selectedComputeEnv]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { data } = event;
      if (data.pipelineAdded) {
        setIsLoading(false);
        setPipelineAdded(data.pipelineAdded);
        setResponseBody(data.responseBody);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    // Set workspace id
    if (!workspaceId) return;
    setRequestBody((prev) => ({
      ...prev,
      launch: {
        ...prev.launch,
        workspaceId: `${workspaceId}`
      }
    }));
  }, [workspaceId]);

  useEffect(() => {
    // Set repo name and url
    if (!repoInfo?.url) return;
    setRequestBody((prev) => ({
      ...prev,
      name: repoInfo.name,
      launch: {
        ...prev.launch,
        pipeline: repoInfo.url
      }
    }));
  }, [repoInfo]);

  useEffect(() => {
    // Set Pipeline info found on Seqera Hub
    if (!repoInfo?.url) return;
    if (!hubPipelines?.length) return;
    const found = hubPipelines?.find(
      (pipeline) => pipeline.url === repoInfo.url
    );
    if (!found) return;
    setRequestBody((prev) => ({
      name: found.name,
      description: found.description,
      launch: {
        ...prev.launch,
        revision: found.revision,
        pipeline: found.url
      }
    }));
  }, [repoInfo, hubPipelines, workspaceId]);

  useEffect(() => {
    if (hubPipelines?.length) return;
    fetchHubPipelines();
  }, [hubPipelines]);

  const handleAddPipeline = () => {
    setIsLoading(true);
    addPipeline(requestBody);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {failed && <div>Failed to add pipeline</div>}
      {pipelineAdded && !failed && <div>Pipeline added</div>}
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
      <Button onClick={handleAddPipeline}>Add pipeline</Button>
    </div>
  );
};

export default AddPipeline;
