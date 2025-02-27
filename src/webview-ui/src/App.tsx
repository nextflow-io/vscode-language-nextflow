import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function sendMessageToExtension() {
    // The "vscode" object is only defined inside a real VS Code webview.
    // For local dev, you'll want a fallback or do `if (window.acquireVsCodeApi) {...}`
    const vscode = window.acquireVsCodeApi ? window.acquireVsCodeApi() : null;
    if (vscode) {
      vscode.postMessage({ command: "myCommand", data: "Hello from React" });
    }
  }

  return (
    <div>
      <h1>Hello from React</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={sendMessageToExtension}>Send VSCode Message</button>
    </div>
  );
}

export default App;
