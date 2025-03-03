import { useEffect, useState } from "react";

type ProcessInfo = {
  name: string;
  type: "process" | "subworkflow";
  hasTest: boolean;
  testFilePath?: string;
};

type PipelineNode = {
  filePath: string;
  processes: ProcessInfo[];
  children: PipelineNode[];
};

// A small recursive component to render a node
function PipelineNodeView({
  node,
  onOpenFile
}: {
  node: PipelineNode;
  onOpenFile: (filePath: string) => void;
}) {
  const handleFileClick = () => {
    onOpenFile(node.filePath);
  };

  return (
    <div style={{ marginLeft: "1rem" }}>
      <div
        style={{ fontWeight: "bold", cursor: "pointer" }}
        onClick={handleFileClick}
      >
        {node.filePath}
      </div>

      {/* Processes */}
      {node.processes?.map((proc) => (
        <div key={proc.name} style={{ marginLeft: "1rem" }}>
          <span style={{ color: proc.hasTest ? "green" : "red" }}>
            {proc.type === "subworkflow" ? "Subworkflow" : "Process"}:{" "}
            {proc.name}
          </span>{" "}
          {proc.hasTest ? "✓ Test Found" : "No Test"}
        </div>
      ))}

      {/* Children (included .nf files) */}
      {node.children?.map((child) => (
        <PipelineNodeView
          key={child.filePath}
          node={child}
          onOpenFile={onOpenFile}
        />
      ))}
    </div>
  );
}

const TreeView = () => {
  const [pipeline, setPipeline] = useState<PipelineNode[]>([]);

  useEffect(() => {
    console.log("🟢 Seqera: TreeView mounted");
    // Listen for messages from the extension
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      console.log("🟢 Seqera: message:", message);
      if (message.command === "initPipelineTree") {
        setPipeline(message.data || []);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function sendMessageToExtension(filePath: string) {
    if ((window as any).acquireVsCodeApi) {
      const vscode = (window as any).acquireVsCodeApi();
      vscode.postMessage({ command: "openFile", filePath });
    }
  }

  return (
    <div>
      {pipeline.map((node) => (
        <PipelineNodeView
          key={node.filePath}
          node={node}
          onOpenFile={sendMessageToExtension}
        />
      ))}
    </div>
  );
};

export default TreeView;
