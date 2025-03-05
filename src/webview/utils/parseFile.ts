import { FileInfo } from "../types";

export function getImports(content: string): string[] {
  const rx =
    /include\s*(?:\{\s*([^}\s]+)[^}]*\}|([^{}\s]+))\s*from\s+['"][^'"]+['"]/gm;
  const importSet = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = rx.exec(content)) !== null) {
    const importName = m[1] || m[2];
    if (importName) importSet.add(importName);
  }
  return Array.from(importSet);
}

export function parseFile(content: string): FileInfo | null {
  // Workflow
  let rx = /^\s*workflow\s+(\w+)/gm;
  let m: RegExpExecArray | null;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "workflow" };
  }

  // Test (process directive with quotes)
  rx = /^\s*process\s+"(\w+)"/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "test" };
  }

  // Process
  rx = /^\s*process\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "process" };
  }

  // Subworkflow
  rx = /^\s*subworkflow\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "subworkflow" };
  }

  // Nextflow Workflow
  rx = /^\s*nextflow\s+workflow\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "nextflow_workflow" };
  }

  // Nextflow Process
  rx = /^\s*nextflow\s+process\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "nextflow_process" };
  }

  return null;
}
