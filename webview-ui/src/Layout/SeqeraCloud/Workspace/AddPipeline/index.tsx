import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";
import Input from "../../../../components/Input";

import type {
  AddPipelineFormData,
  ComputeEnv,
  HubPipeline
} from "../../../../Context/types";
import ComputeEnvSelector from "./ComputeEnvSelector";

const AddPipeline = () => {
  const { fetchHubPipelines, hubPipelines, repoInfo, workspaceId } =
    useTowerContext();
  const [defaults, setDefaults] = useState<HubPipeline | null>(null);
  const [selectedComputeEnv, setSelectedComputeEnv] =
    useState<ComputeEnv | null>(null);

  const [formData, setFormData] = useState<AddPipelineFormData>({
    name: "",
    description: "",
    url: "",
    workspaceId: "",
    launch_config: {
      name: "",
      id: 0
    }
  });

  useEffect(() => {
    if (!workspaceId) return;
    setFormData((prev) => ({
      ...prev,
      workspaceId: `${workspaceId}`
    }));
  }, [workspaceId]);

  useEffect(() => {
    if (!repoInfo?.url) return;
    if (!hubPipelines?.length) return;
    const found = hubPipelines?.find(
      (pipeline) => pipeline.url === repoInfo.url
    );
    if (!found) return;
    setDefaults(found);
  }, [repoInfo, hubPipelines]);

  useEffect(() => {
    if (!defaults) return;
    console.log("Setting defaults", defaults);
    setFormData((prev) => ({
      ...prev,
      name: defaults.name,
      description: defaults.description,
      url: defaults.url,
      launch_config: defaults.launch_config
    }));
  }, [defaults]);

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
        className="mb-2"
        label="Pipeline name"
        value={formData.name}
        onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
      />
      <Input
        className="mb-2"
        label="Pipeline description"
        value={formData.description}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, description: value }))
        }
      />
      <Input
        label="Pipeline URL"
        value={formData.url}
        onChange={(value) => setFormData((prev) => ({ ...prev, url: value }))}
      />
      <Input
        textarea
        lines={30}
        label="Launch config"
        value={JSON.stringify(formData.launch_config, null, 2)}
        onChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            launch_config: { ...prev.launch_config, name: value }
          }))
        }
      />
    </div>
  );
};

export default AddPipeline;
