import { useEffect, useState } from "react";

import styles from "./styles.module.css";

type FileInfo = {
  name: string;
  type: "process" | "subworkflow";
  hasTest: boolean;
  testFilePath?: string;
};

type FileNode = {
  fileName: string;
  filePath: string;
  processes: FileInfo[];
  children: FileNode[];
};

// Initialize vscode api once at module level
const vscode = (window as any).acquireVsCodeApi?.();

// A small recursive component to render a node
function FileNodeView({
  node,
  onOpenFile
}: {
  node: FileNode;
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
        <FileNodeView
          key={child.filePath}
          node={child}
          onOpenFile={onOpenFile}
        />
      ))}
    </div>
  );
}

const TreeView = () => {
  const [pipeline, setPipeline] = useState<FileNode[]>([]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.command === "findFiles") {
        setPipeline(message.data || []);
        console.log("🟢 Seqera", message.data);
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
        <FileNodeView
          key={node.filePath}
          node={node}
          onOpenFile={sendMessageToExtension}
        />
      ))}
    </div>
  );
};

export default TreeView;
