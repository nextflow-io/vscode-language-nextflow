import { useEffect, useState } from "react";

// Type definitions for your pipeline data
interface PipelineFile {
  filePath: string;
  processes: string[];
  includes: string[];
}

function App() {
  // State for storing the pipeline tree data
  const [pipelineTree, setPipelineTree] = useState<PipelineFile[]>([]);

  useEffect(() => {
    // Acquire the VS Code API if it exists (in a real webview)
    const vscode = (window as any).acquireVsCodeApi
      ? (window as any).acquireVsCodeApi()
      : null;

    // Listener for messages coming from the extension
    function handleMessage(event: MessageEvent) {
      console.log("🟣 handleMessage:", event);
      const { command, data } = event.data;
      if (command === "initPipelineTree") {
        // The extension has sent us the pipeline data, so store it in state
        setPipelineTree(data);
      }
    }

    // Attach the listener
    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Pipeline Tree</h1>
      {pipelineTree.length === 0 && <p>No pipeline data yet.</p>}
      {pipelineTree.length > 0 && (
        <ul>
          {pipelineTree.map((fileObj) => (
            <li key={fileObj.filePath}>
              <strong>{fileObj.filePath}</strong>
              <div>
                <em>Includes:</em> {fileObj.includes.join(", ") || "None"}
              </div>
              <div>
                <em>Processes:</em> {fileObj.processes.join(", ") || "None"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
