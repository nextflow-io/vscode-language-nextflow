/// <reference types="vite/client" />

export {};

declare global {
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
}
