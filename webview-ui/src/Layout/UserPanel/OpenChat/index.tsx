import Button from "../../../components/Button";
import { useWorkspaceContext } from "../../../Context";

const OpenChat = () => {
  const { openChat, isCursor } = useWorkspaceContext();
  return (
    <div className="flex">
      <Button href="https://seqera.io/ask-ai">
        Go to Seqera AI
        <i className="codicon codicon-link-external ml-2" />
      </Button>
      {!isCursor && (
        <Button onClick={openChat}>
          Open Seqera Copilot
          <i className="codicon codicon-comment-discussion ml-2" />
        </Button>
      )}
    </div>
  );
};

export default OpenChat;
