import { useEffect } from "react";
import { useTowerContext } from "../../../../Context";
import { getDatasetURL } from "../../utils";
import ListItem from "../../../../components/ListItem";

const Datasets = () => {
  const { datasets, selectedWorkspace, fetchDatasets, workspaceId } =
    useTowerContext();

  useEffect(() => fetchDatasets(workspaceId), [workspaceId]);

  if (!datasets?.length)
    return <div className="px-2 small">None found for current workspace</div>;

  return <>
    {datasets?.map((dataset) => (
      <ListItem
        icon="table"
        href={getDatasetURL(dataset, selectedWorkspace)}
        key={dataset.id}
        alt
      >
        <span className="listItem-name">{dataset.name}</span>
      </ListItem>
    ))}
  </>;
};

export default Datasets;
