import { AddPipelineResponse } from "../../../../../../../src/webview/WebviewProvider/lib/platform/types";
import Button from "../../../../../components/Button";
import { getEditURL } from "../../../utils";

type Props = {
  responseBody: AddPipelineResponse | null;
};

const SuccessPage = ({ responseBody }: Props) => {
  console.log(responseBody);
  console.log(getEditURL(responseBody as AddPipelineResponse));
  return (
    <div>
      <div className="mb-2">Pipeline added to your launchpad</div>
      {responseBody && (
        <Button icon="link-external" href={getEditURL(responseBody)}>
          Inspect on Seqera Cloud
        </Button>
      )}
    </div>
  );
};

export default SuccessPage;
