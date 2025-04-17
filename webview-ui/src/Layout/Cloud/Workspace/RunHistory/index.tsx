import { useTowerContext } from "../../../../Context";

const RunHistory = () => {
  const { history } = useTowerContext();

  return (
    <div>
      <h4 className="mt-0">Run History</h4>
      {!!history?.length && (
        <>
          {history.map((workflow) => (
            <div key={workflow.id}>{workflow.runName}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default RunHistory;
