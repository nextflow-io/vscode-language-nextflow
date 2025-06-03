import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";
import Input from "../../../../components/Input";

import type {
  AddPipelineFormData,
  HubPipeline
} from "../../../../Context/types";

const AddPipeline = () => {
  const { fetchHubPipelines, hubPipelines, repoInfo } = useTowerContext();
  const [selectedHubPipeline, setSelectedHubPipeline] =
    useState<HubPipeline | null>(null);

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
    if (!repoInfo?.url) return;
    if (!hubPipelines?.length) return;
    const foundHubPipeline = hubPipelines?.find((pipeline) => {
      console.log("pipeline", pipeline.url, repoInfo.url);
      return pipeline.url === repoInfo.url;
    });
    console.log("foundHubPipeline", foundHubPipeline);
    if (foundHubPipeline) {
      setSelectedHubPipeline(foundHubPipeline);
    }
  }, [repoInfo, hubPipelines]);

  useEffect(() => {
    if (!selectedHubPipeline) return;
    setFormData((prev) => ({
      ...prev,
      name: selectedHubPipeline.name,
      description: selectedHubPipeline.description,
      url: selectedHubPipeline.url,
      launch_config: selectedHubPipeline.launch_config
    }));
  }, [selectedHubPipeline]);

  useEffect(() => {
    if (hubPipelines?.length) return;
    fetchHubPipelines();
  }, [hubPipelines]);

  return (
    <div>
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
        label="Workspace ID"
        value={formData.workspaceId}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, workspaceId: value }))
        }
      />
    </div>
  );
};

export default AddPipeline;
