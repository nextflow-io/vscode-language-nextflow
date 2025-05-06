import { createContext, useContext, useEffect, useState } from "react";

import { TestCreation, TreeNode } from "./types";

const WorkspaceContext = createContext<WorkspaceContextType>({
  nodes: [],
  findChildren: () => [],
  openFile: () => {},
  selectedItems: [],
  selectItem: () => {},
  isSelected: () => false,
  viewID: "",
  login: () => {},
  openChat: () => {},
  isCursor: false,
  selectedView: "pipelines",
  setSelectedView: () => {},
  getRepoInfo: () => {},
  refresh: () => {},
  createTest: () => {},
  testCreation: {}
});

interface WorkspaceContextType {
  nodes: TreeNode[];
  findChildren: (node: TreeNode) => TreeNode[];
  openFile: (filePath: string, line: number) => void;
  selectedItems: string[];
  selectItem: (name: string) => void;
  isSelected: (name: string) => boolean;
  viewID: string;
  login: () => void;
  openChat: () => void;
  isCursor: boolean;
  selectedView: string;
  setSelectedView: (view: string) => void;
  getRepoInfo: () => void;
  refresh: () => void;
  createTest: (filePath: string) => void;
  testCreation: TestCreation;
}

type Props = {
  children: React.ReactNode;
  vscode: any;
  viewID: string;
  isCursor: boolean;
};

const WorkspaceProvider = ({ children, vscode, viewID, isCursor }: Props) => {
  const state = vscode.getState();

  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [testCreation, setCreatingTest] = useState<
    WorkspaceContextType["testCreation"]
  >({});
  const [selectedItems, setSelectedItems] = useState<string[]>(
    state?.selectedItems || []
  );
  const [selectedView, setSelectedView] = useState<string>("runs");

  useEffect(() => {
    vscode.setState({ selectedItems });
  }, [selectedItems]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.nodes) setNodes(message.nodes);
      if (message.testCreated) {
        const data = message.testCreated;
        setCreatingTest({
          filePath: data.filePath,
          successful: data.successful,
          finished: true
        });
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

  function findChildren(node: TreeNode): TreeNode[] {
    if (!node.children)
      return [];
    return node.children.flatMap((call) => (
      nodes.filter((n) => n.path === call.path && n.name === call.name)
    ));
  }

  function openFile(filePath: string, line: number) {
    vscode.postMessage({ command: "openFile", path: filePath, line: line });
  }

  function login() {
    vscode.postMessage({ command: "login" });
  }

  function openChat() {
    vscode.postMessage({ command: "openChat" });
  }

  function getRepoInfo() {
    vscode.postMessage({ command: "getRepoInfo" });
  }

  function refresh() {
    console.log("🟠 refresh");
    vscode.postMessage({ command: "refresh" });
  }

  function createTest(filePath: string) {
    setCreatingTest({
      filePath,
      finished: false
    });
    vscode.postMessage({ command: "createTest", filePath });
  }

  return (
    <WorkspaceContext.Provider
      value={{
        nodes,
        findChildren,
        openFile,
        openChat,
        selectedItems,
        selectItem,
        isSelected,
        login,
        viewID,
        isCursor,
        selectedView,
        setSelectedView,
        getRepoInfo,
        refresh,
        createTest,
        testCreation
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

const useWorkspaceContext = () => useContext(WorkspaceContext);

export { useWorkspaceContext };

export default WorkspaceProvider;
