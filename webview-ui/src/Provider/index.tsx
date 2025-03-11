import { createContext, useContext, useEffect, useState } from "react";

import { FileNode as FileNodeType } from "./types";
import { sortFiles } from "./utils";
const vscode = (window as any).acquireVsCodeApi?.();

const NextflowContext = createContext<NextflowContextType>({
  files: [],
  tests: [],
  openFile: () => {},
  getFile: () => undefined,
  getTest: () => undefined,
  selectedItems: [],
  selectItem: () => {},
  isSelected: () => false,
  viewType: null,
  testCount: 0
});

interface NextflowContextType {
  files: FileNodeType[];
  tests: FileNodeType[];
  openFile: (file: FileNodeType, isTest?: boolean) => void;
  getFile: (name: string) => FileNodeType | undefined;
  getTest: (name: string) => FileNodeType | undefined;
  selectedItems: string[];
  selectItem: (name: string) => void;
  isSelected: (name: string) => boolean;
  viewType: "workflows" | "processes" | null;
  testCount: number;
}

type Props = {
  children: React.ReactNode;
};

const NextflowProvider = ({ children }: Props) => {
  const state = vscode.getState();

  const [testCount, setTestCount] = useState(0);
  const [viewType, setViewType] = useState<"workflows" | "processes" | null>(
    state?.viewType || null
  );
  const [files, setFiles] = useState<FileNodeType[]>(state?.files || []);
  const [tests, setTests] = useState<FileNodeType[]>(state?.tests || []);
  const [selectedItems, setSelectedItems] = useState<string[]>(
    state?.selectedItems || []
  );

  useEffect(() => {
    let count = 0;
    for (const file of files) {
      const testFile = getTest(file.name);
      if (testFile) count++;
    }
    setTestCount(count);
  }, [files]);

  useEffect(() => {
    vscode.setState({ files });
  }, [files]);

  useEffect(() => {
    vscode.setState({ tests });
  }, [tests]);

  useEffect(() => {
    vscode.setState({ selectedItems });
  }, [selectedItems]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.command === "findFiles") {
        setFiles(sortFiles(message.data?.files || []));
        setTests(sortFiles(message.data?.tests || []));
        setViewType(message.viewType);
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

  function openFile(file: FileNodeType) {
    if (!file) return;
    vscode.postMessage({ command: "openFile", file });
  }

  function getFile(name: string) {
    return files.find((file) => file.name === name);
  }

  function getTest(name: string) {
    return tests.find((test) => test.name === name);
  }

  return (
    <NextflowContext.Provider
      value={{
        files,
        tests,
        openFile,
        getFile,
        getTest,
        selectedItems,
        selectItem,
        isSelected,
        viewType,
        testCount
      }}
    >
      {children}
    </NextflowContext.Provider>
  );
};

const useProvider = () => useContext(NextflowContext);

export { useProvider };

export default NextflowProvider;
