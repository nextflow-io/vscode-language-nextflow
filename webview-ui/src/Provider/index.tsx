import { createContext, useContext, useEffect, useState } from "react";

import { FileNode as FileNodeType } from "./types";
const vscode = (window as any).acquireVsCodeApi?.();

const NextflowContext = createContext({});

type Props = {
  children: React.ReactNode;
};

const NextflowProvider = ({ children }: Props) => {
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

  function openFile(name: string) {
    const file = getFile(name);
    if (!file) return;
    vscode.postMessage({ command: "openFile", filePath: file.filePath });
  }

  function getFile(name: string) {
    return files.find((file) => file.name === name);
  }

  return (
    <NextflowContext.Provider value={{ files, openFile, getFile }}>
      {children}
    </NextflowContext.Provider>
  );
};

interface NextflowContextType {
  files: FileNodeType[];
  openFile: (filePath: string) => void;
  getFile: (name: string) => FileNodeType | undefined;
}

const useProvider = () => useContext(NextflowContext) as NextflowContextType;

export { useProvider };

export default NextflowProvider;
