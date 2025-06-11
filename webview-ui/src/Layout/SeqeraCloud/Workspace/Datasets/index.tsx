import { useEffect } from "react";
import { useTowerContext } from "../../../../Context";
import { getDatasetURL } from "../../utils";
import ListItem from "../../../../components/ListItem";

const Datasets = () => {
  const { datasets, selectedWorkspace, fetchDatasets, workspaceId } =
    useTowerContext();

  const hasDatasets = !!datasets?.length;

  useEffect(() => fetchDatasets(workspaceId), [workspaceId]);

  if (!hasDatasets)
    return <div className="px-2 small">None found for current workspace</div>;

  return (
    <>
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
    </>
  );
};

export default Datasets;
