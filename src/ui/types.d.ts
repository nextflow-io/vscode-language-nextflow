declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.css";

interface VSCodeApi {
  postMessage: (msg: unknown) => void;
  getState: () => { selectedItems?: string[] } | undefined;
  setState: (state: { selectedItems?: string[] }) => void;
}

interface Window {
  acquireVsCodeApi: () => VSCodeApi;
  vscode: VSCodeApi | undefined;
  initialData: {
    viewID: "project" | "seqeraCloud";
  };
}
