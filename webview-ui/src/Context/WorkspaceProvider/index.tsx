import { createContext, useContext, useEffect, useState } from "react";

import { FileNode as FileNodeType } from "./types";
import { sortFiles } from "./utils";

const WorkspaceContext = createContext<WorkspaceContextType>({
  files: [],
  tests: [],
  tree: undefined,
  openFile: () => {},
  getFile: () => undefined,
  getTest: () => undefined,
  selectedItems: [],
  selectItem: () => {},
  isSelected: () => false,
  viewID: null,
  testCount: 0,
  login: () => {},
  openChat: () => {},
  isCursor: false
});

interface WorkspaceContextType {
  files: FileNodeType[];
  tests: FileNodeType[];
  tree?: FileNodeType;
  openFile: (file: FileNodeType, isTest?: boolean) => void;
  getFile: (name: string) => FileNodeType | undefined;
  getTest: (name: string) => FileNodeType | undefined;
  selectedItems: string[];
  selectItem: (name: string) => void;
  isSelected: (name: string) => boolean;
  viewID: string | null;
  testCount: number;
  login: () => void;
  openChat: () => void;
  isCursor: boolean;
}

type Props = {
  children: React.ReactNode;
  vscode: any;
  viewID: string | null;
  isCursor: boolean;
};

const WorkspaceProvider = ({ children, vscode, viewID, isCursor }: Props) => {
  const state = vscode.getState();

  const [testCount, setTestCount] = useState(0);
  const [files, setFiles] = useState<FileNodeType[]>([]);
  const [tests, setTests] = useState<FileNodeType[]>([]);
  const [tree, setTree] = useState<FileNodeType | undefined>(undefined);
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
    vscode.setState({ selectedItems });
  }, [selectedItems]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.fileList) {
        const { files, tests } = message.fileList;
        setFiles(sortFiles(files || []));
        setTests(sortFiles(tests || []));
      }
      if (message.tree) {
        setTree(message.tree);
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

  function login() {
    vscode.postMessage({ command: "login" });
  }

  function openChat() {
    vscode.postMessage({ command: "openChat" });
  }

  return (
    <WorkspaceContext.Provider
      value={{
        files,
        tests,
        tree,
        openFile,
        openChat,
        getFile,
        getTest,
        selectedItems,
        selectItem,
        isSelected,
        testCount,
        login,
        viewID,
        isCursor
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

const useWorkspaceContext = () => useContext(WorkspaceContext);

export { useWorkspaceContext };

export default WorkspaceProvider;
