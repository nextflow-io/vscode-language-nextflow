import { useTowerContext } from "../../../../../Context";
import { ComputeEnv } from "../../../../../Context/types";
import Select from "../../../../../components/Select";

type Props = {
  setSelectedComputeEnv: (computeEnv: ComputeEnv) => void;
  selectedComputeEnv: ComputeEnv | null;
};

const ComputeEnvSelector = ({
  setSelectedComputeEnv,
  selectedComputeEnv
}: Props) => {
  const { computeEnvs } = useTowerContext();

  return (
    <div className="mb-2">
      <Select
        alt
        label="Compute Environment"
        options={computeEnvs?.map((computeEnv) => ({
          label: computeEnv.name,
          value: computeEnv.id
        }))}
        value={selectedComputeEnv?.id ?? ""}
        onChange={(value) => {
          const computeEnv = computeEnvs?.find(
            (computeEnv) => computeEnv.id === value
          );
          if (!computeEnv) return;
          setSelectedComputeEnv(computeEnv);
        }}
      />
    </div>
  );
};

export default ComputeEnvSelector;
