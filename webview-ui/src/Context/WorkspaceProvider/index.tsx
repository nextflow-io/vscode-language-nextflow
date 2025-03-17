import { createContext, useContext, useEffect, useState } from "react";

import { FileNode as FileNodeType } from "./types";
import { sortFiles } from "./utils";
import { AuthenticationSession } from "vscode";
const vscode = (window as any).acquireVsCodeApi?.();

const WorkspaceContext = createContext<WorkspaceContextType>({
  files: [],
  tests: [],
  session: null,
  openFile: () => {},
  getFile: () => undefined,
  getTest: () => undefined,
  selectedItems: [],
  selectItem: () => {},
  isSelected: () => false,
  viewType: null,
  testCount: 0,
  login: () => {}
});

type ViewType = "workflows" | "processes" | "userInfo" | null;

interface WorkspaceContextType {
  files: FileNodeType[];
  tests: FileNodeType[];
  session: AuthenticationSession | null;
  openFile: (file: FileNodeType, isTest?: boolean) => void;
  getFile: (name: string) => FileNodeType | undefined;
  getTest: (name: string) => FileNodeType | undefined;
  selectedItems: string[];
  selectItem: (name: string) => void;
  isSelected: (name: string) => boolean;
  viewType: ViewType;
  testCount: number;
  login: () => void;
}

type Props = {
  children: React.ReactNode;
};

const NextflowProvider = ({ children }: Props) => {
  const state = vscode.getState();

  const [testCount, setTestCount] = useState(0);
  const [viewType, setViewType] = useState<ViewType>(state?.viewType || null);
  const [files, setFiles] = useState<FileNodeType[]>(state?.files || []);
  const [tests, setTests] = useState<FileNodeType[]>(state?.tests || []);
  const [session, setSession] = useState<AuthenticationSession | null>(
    state?.session || null
  );
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
    vscode.setState({ session });
  }, [session]);

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
      console.log(">> message", message);
      if (message.command === "setViewData") {
        setFiles(sortFiles(message.fileTree?.files || []));
        setTests(sortFiles(message.fileTree?.tests || []));
        setViewType(message.viewType);
        setSession(message.session);
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

  return (
    <WorkspaceContext.Provider
      value={{
        files,
        tests,
        session,
        openFile,
        getFile,
        getTest,
        selectedItems,
        selectItem,
        isSelected,
        viewType,
        testCount,
        login
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

const useWorkspaceContext = () => useContext(WorkspaceContext);

export { useWorkspaceContext };

export default NextflowProvider;
