import { useEffect, useState } from "react";

import styles from "./styles.module.css";

type ProcessInfo = {
  name: string;
  type: "process" | "subworkflow";
  hasTest: boolean;
  testFilePath?: string;
};

type PipelineNode = {
  fileName: string;
  filePath: string;
  processes: ProcessInfo[];
  children: PipelineNode[];
};

// Initialize vscode api once at module level
const vscode = (window as any).acquireVsCodeApi?.();

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
    <div className={styles.item}>
      <div className={styles.label} onClick={handleFileClick}>
        {node.fileName}
      </div>

      {/* Processes */}
      {node.processes?.map((proc) => (
        <div key={proc.name} style={{ marginLeft: "1rem" }}>
          <span style={{ color: proc.hasTest ? "green" : "white" }}>
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
    vscode.postMessage({ command: "openFile", filePath });
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
