import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";

import type {
  ComputeEnv,
  AddPipelineRequest,
  AddPipelineResponse
} from "../../../../Context/types";
import Layout from "./Layout";

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
    addPipeline,
    fetchComputeEnvs,
    computeEnvs
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
  let failed = pipelineAdded && !responseBody;
  const message = responseBody?.message;
  if (message) failed = true;

  useEffect(() => {
    // Fetch hub pipelines
    if (hubPipelines?.length) return;
    fetchHubPipelines();
  }, [hubPipelines]);

  useEffect(() => {
    // Fetch compute environments
    fetchComputeEnvs(workspaceId);
  }, [workspaceId]);

  useEffect(() => {
    // Set default selectedcompute env
    if (!computeEnvs?.length) return;
    if (selectedComputeEnv) return;
    setSelectedComputeEnv(computeEnvs[0]);
  }, [computeEnvs, selectedComputeEnv]);

  useEffect(() => {
    // Set compute env id and work dir on request body
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
    // Set workspace id on request body
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
    // Set repo name and url on request body
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
    // Set Pipeline info found on Seqera Hub on request body
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
    // Handle message from webview
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

  const handleAddPipeline = () => {
    setPipelineAdded(false);
    setResponseBody(null);
    setIsLoading(true);
    addPipeline(requestBody);
  };

  return (
    <Layout
      isLoading={isLoading}
      failed={failed}
      pipelineAdded={pipelineAdded}
      setSelectedComputeEnv={setSelectedComputeEnv}
      selectedComputeEnv={selectedComputeEnv}
      requestBody={requestBody}
      setRequestBody={setRequestBody}
      handleAddPipeline={handleAddPipeline}
      responseBody={responseBody}
      message={message}
    />
  );
};

export default AddPipeline;
