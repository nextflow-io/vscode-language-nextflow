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

export function parseBody(content: string): FileInfo | null {
  // Workflow
  let rx = /^\s*workflow\s+(\w+)/gm;
  let m: RegExpExecArray | null;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "workflow", hasTest: false };
  }

  // Process
  rx = /^\s*process\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "process", hasTest: false };
  }

  // Subworkflow
  rx = /^\s*subworkflow\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "subworkflow", hasTest: false };
  }

  // Nextflow Workflow
  rx = /^\s*nextflow\s+workflow\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "nextflow_workflow", hasTest: false };
  }

  // Nextflow Process
  rx = /^\s*nextflow\s+process\s+(\w+)/gm;
  if ((m = rx.exec(content)) !== null) {
    return { name: m[1], type: "nextflow_process", hasTest: false };
  }

  return null;
}
