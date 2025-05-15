import { useEffect, useState } from "react";
import { useTowerContext } from "../../../../Context";
import Button from "../../../../components/Button";
import { getDataLinkURL } from "../../utils";
import ListItem from "../../../../components/ListItem";

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
            <ListItem
              href={getDataLinkURL(dataLink, workspace)}
              key={dataLink.id}
              alt
            >
              <span className="listItem-name">{dataLink.name}</span>
            </ListItem>
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
