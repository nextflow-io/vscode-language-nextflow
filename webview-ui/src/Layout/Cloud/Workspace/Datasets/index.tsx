import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import { getDatasetURL } from "../../utils";

const Datasets = () => {
  const { datasets, workspaces, selectedWorkspace } = useTowerContext();

  const workspace = workspaces.find((w) => w.workspaceId === selectedWorkspace);

  const hasDatasets = !!datasets?.length;

  return (
    <div>
      <h4>Datasets</h4>
      {hasDatasets ? (
        <>
          {datasets?.map((dataset) => (
            <Button
              href={getDatasetURL(dataset, workspace)}
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
