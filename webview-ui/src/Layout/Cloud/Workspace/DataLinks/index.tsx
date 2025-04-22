import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import { getDataLinkURL } from "../../utils";

const DataLinks = () => {
  const {
    dataLinks,
    selectedWorkspace: workspace,
    fetchDataLinks,
    workspaceId
  } = useTowerContext();
  const [displayCount, setDisplayCount] = useState(5);

  const hasDataLinks = !!dataLinks?.length;
  const displayedDataLinks = dataLinks?.slice(0, displayCount) || [];
  const hasMore = hasDataLinks && dataLinks.length > displayCount;

  useEffect(() => fetchDataLinks(workspaceId), [workspaceId]);

  return (
    <div>
      {hasDataLinks ? (
        <>
          {displayedDataLinks?.map((dataLink) => (
            <Button
              href={getDataLinkURL(dataLink, workspace)}
              key={dataLink.id}
              fullWidth
              alt
              className="mb-1"
            >
              <div className={styles.item}>
                <span className={styles.name}>{dataLink.name}</span>
              </div>
            </Button>
          ))}
          {hasMore && (
            <Button
              onClick={() => setDisplayCount((prev) => prev + 5)}
              className="block text-right"
              fullWidth
              bare
              small
            >
              Show more
            </Button>
          )}
        </>
      ) : (
        <div className="px-2 small">None found for current workspace</div>
      )}
    </div>
  );
};

export default DataLinks;
