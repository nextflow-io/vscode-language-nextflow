import { useEffect } from "react";
import { useTowerContext } from "../../../../Context";
import { getDatasetURL } from "../../utils";
import ListItem from "../../../../components/ListItem";

const Datasets = () => {
  const { datasets, selectedWorkspace, fetchDatasets, workspaceId } =
    useTowerContext();

  const hasDatasets = !!datasets?.length;

  useEffect(() => fetchDatasets(workspaceId), [workspaceId]);

  return (
    <div>
      {hasDatasets ? (
        <>
          {datasets?.map((dataset) => (
            <ListItem
              href={getDatasetURL(dataset, selectedWorkspace)}
              key={dataset.id}
              alt
            >
              <span className="listItem-name">{dataset.name}</span>
            </ListItem>
          ))}
        </>
      ) : (
        <div className="px-2 small">None found for current workspace</div>
      )}
    </div>
  );
};

export default Datasets;
