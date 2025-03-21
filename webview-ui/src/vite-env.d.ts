/// <reference types="vite/client" />

export {};

declare global {
  interface Window {
    acquireVsCodeApi: () => {
      postMessage: (msg: any) => void;
    };
    vscode: any;
    initialData: {
      viewID: "workflows" | "processes" | "userInfo";
    };
  }
}
