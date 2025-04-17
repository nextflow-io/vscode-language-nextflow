import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import { getDatasetURL } from "../../utils";

const Datasets = () => {
  const { datasets, workspaces, selectedWorkspace } = useTowerContext();

  const workspace = workspaces.find((w) => w.workspaceId === selectedWorkspace);

  return (
    <div>
      <h4>Datasets</h4>
      {!!datasets?.length && (
        <>
          {datasets.map((dataset) => (
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
      )}
    </div>
  );
};

export default Datasets;
