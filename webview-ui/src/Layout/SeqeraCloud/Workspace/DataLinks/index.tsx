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

  useEffect(() => fetchDataLinks(workspaceId), [workspaceId]);

  if (!dataLinks?.length)
    return <div className="px-2 small">None found for current workspace</div>

  const displayedDataLinks = dataLinks?.slice(0, displayCount) || [];
  const hasMore = dataLinks.length > displayCount;

  return <>
    {displayedDataLinks?.map((dataLink) => (
      <ListItem
        icon="database"
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
  </>;
};

export default DataLinks;
