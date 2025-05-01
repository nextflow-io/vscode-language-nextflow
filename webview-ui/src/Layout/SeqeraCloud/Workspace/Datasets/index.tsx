import { useEffect } from "react";
import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import { getDatasetURL } from "../../utils";

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
            <Button
              href={getDatasetURL(dataset, selectedWorkspace)}
              key={dataset.id}
              fullWidth
              alt
              className="mb-1"
            >
              <div className={styles.item}>
                <span className={styles.name}>{dataset.name}</span>
              </div>
            </Button>
          ))}
        </>
      ) : (
        <div className="px-2 small">None found for current workspace</div>
      )}
    </div>
  );
};

export default Datasets;
