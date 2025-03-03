import { useEffect, useState } from "react";

import FileTree from "./FileTree";

import { FileNode as FileNodeType } from "./types";
const vscode = (window as any).acquireVsCodeApi?.();

const Layout = () => {
  const [files, setFiles] = useState<FileNodeType[]>([]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.command === "findFiles") {
        setFiles(message.data || []);
        console.log("🟢 Seqera", message.data);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function openFile(filePath: string) {
    vscode.postMessage({ command: "openFile", filePath });
  }
  return (
    <div>
      <FileTree
        name="Workflows"
        type="workflow"
        files={files}
        openFile={openFile}
      />
    </div>
  );
};

export default Layout;
