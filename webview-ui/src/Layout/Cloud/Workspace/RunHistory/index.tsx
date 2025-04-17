import { useEffect } from "react";
import { useTowerContext } from "../../../../Context";
import { Workflow } from "../../../../Context/types";

const RunHistory = () => {
  const { history, repoInfo } = useTowerContext();

  const items = history?.workflows.map(({ workflow }) => workflow);
  let itemsForRepo: Workflow[] = [];

  if (repoInfo?.url) {
    itemsForRepo =
      items?.filter((item) => item.repository === repoInfo.url) || [];
  }

  useEffect(() => {
    if (repoInfo) {
      console.log("🟢 repoInfo", repoInfo);
    }
    if (history) {
      console.log("🟢 history", history);
    }
  }, [history, repoInfo]);

  return (
    <section>
      <h3>Run History</h3>
      {!!itemsForRepo.length && (
        <>
          {itemsForRepo.map((workflow) => (
            <div key={workflow.id}>{workflow.runName}</div>
          ))}
          <hr />
        </>
      )}
      {items?.map((workflow) => (
        <div key={workflow.id}>{workflow.runName}</div>
      ))}
    </section>
  );
};

export default RunHistory;
