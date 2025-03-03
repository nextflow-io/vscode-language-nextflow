import { createContext, useContext, useEffect, useState } from "react";

import { FileNode as FileNodeType } from "./types";
const vscode = (window as any).acquireVsCodeApi?.();

const NextflowContext = createContext({});

type Props = {
  children: React.ReactNode;
};

const NextflowProvider = ({ children }: Props) => {
  const state = vscode.getState();

  const [files, setFiles] = useState<FileNodeType[]>(state?.files || []);
  const [selectedItems, setSelectedItems] = useState<string[]>(
    state?.selectedItems || []
  );

  useEffect(() => {
    vscode.setState({ files });
  }, [files]);

  useEffect(() => {
    vscode.setState({ selectedItems });
  }, [selectedItems]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.command === "findFiles") {
        setFiles(message.data || []);
        console.log("🟢 message.data", message.data);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function selectItem(name: string) {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  }

  function isSelected(name: string) {
    return selectedItems.includes(name);
  }

  function openFile(name: string) {
    const file = getFile(name);
    if (!file) return;
    vscode.postMessage({ command: "openFile", filePath: file.filePath });
  }

  function getFile(name: string) {
    return files.find((file) => file.name === name);
  }

  return (
    <NextflowContext.Provider
      value={{
        files,
        openFile,
        getFile,
        selectedItems,
        selectItem,
        isSelected
      }}
    >
      {children}
    </NextflowContext.Provider>
  );
};

interface NextflowContextType {
  files: FileNodeType[];
  openFile: (filePath: string) => void;
  getFile: (name: string) => FileNodeType | undefined;
  selectedItems: string[];
  selectItem: (name: string) => void;
  isSelected: (name: string) => boolean;
}

const useProvider = () => useContext(NextflowContext) as NextflowContextType;

export { useProvider };

export default NextflowProvider;
