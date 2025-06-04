import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";
import Input from "../../../../components/Input";

import type { ComputeEnv, AddPipelineRequest } from "../../../../Context/types";
import ComputeEnvSelector from "./ComputeEnvSelector";

const initialState: AddPipelineRequest = {
  name: "",
  description: "",
  launch: {
    workspaceId: "",
    computeEnvId: "",
    workDir: "",
    pipeline: ""
  }
};

const AddPipeline = () => {
  const { fetchHubPipelines, hubPipelines, repoInfo, workspaceId } =
    useTowerContext();
  const [selectedComputeEnv, setSelectedComputeEnv] =
    useState<ComputeEnv | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pipelineAdded, setPipelineAdded] = useState(false);
  const [addedPipeline, setAddedPipeline] = useState<any>(null);
  const [requestBody, setRequestBody] =
    useState<AddPipelineRequest>(initialState);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { data } = event;
      if (data.pipelineAdded) {
        setPipelineAdded(data.pipelineAdded);
        setAddedPipeline(data.responseBody);
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
    setRequestBody({
      name: found.name,
      description: found.description,
      launch: {
        ...found.launch_config,
        pipeline: found.url
      }
    });
  }, [repoInfo, hubPipelines]);

  useEffect(() => {
    if (hubPipelines?.length) return;
    fetchHubPipelines();
  }, [hubPipelines]);

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
        textarea
        lines={30}
        label="Launch config"
        value={JSON.stringify(requestBody.launch, null, 2)}
        onChange={(value) =>
          setRequestBody((prev) => ({
            ...prev,
            launch: { ...prev.launch, name: value }
          }))
        }
      />
    </div>
  );
};

export default AddPipeline;
