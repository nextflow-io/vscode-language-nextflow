import { FileInfo } from "./types";

function parseFile(content: string): FileInfo | null {
  // Helper function to get line number from character index
  const getLineNumber = (text: string, index: number): number => {
    return text.slice(0, index).split("\n").length;
  };

  // Workflow
  let rx = /^\s*workflow\s+(\w+)/gm;
  let m: RegExpExecArray | null;
  if ((m = rx.exec(content)) !== null) {
    return {
      name: m[1],
      type: "workflow",
      line: getLineNumber(content, m.index)
    };
  }

  // Process
  rx = /^\s*process\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return {
      name: m[1],
      type: "process",
      line: getLineNumber(content, m.index) - 1
    };
  }

  // Process test
  rx = /^\s*process\s+"(\w+)"/gm;
  if ((m = rx.exec(content)) !== null) {
    return {
      name: m[1],
      type: "test",
      line: getLineNumber(content, m.index) - 1
    };
  }

  // Workflow test
  rx = /^\s*workflow\s+"(\w+)"/gm;
  if ((m = rx.exec(content)) !== null) {
    return {
      name: m[1],
      type: "test",
      line: getLineNumber(content, m.index) - 1
    };
  }

  return null;
}

export default parseFile;
