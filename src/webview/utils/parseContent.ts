import * as fs from "fs";
import * as path from "path";

import { ProcessInfo } from "../types";

export function parseIncludes(content: string, base: string): string[] {
  const rx = /include\s*\{?[^\}]*\}?\s*from\s+['"]([^'"]+)['"]/gm;
  const result: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = rx.exec(content)) !== null) {
    let rel = m[1];
    if (!rel.endsWith(".nf")) rel += ".nf";
    const abs = path.resolve(path.dirname(base), rel);
    if (fs.existsSync(abs)) result.push(abs);
  }
  return result;
}

export function parseProcesses(content: string): ProcessInfo[] {
  const out: ProcessInfo[] = [];
  let rx = /^\s*process\s+(\w+)/gm;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(content)) !== null) {
    out.push({ name: m[1], type: "process", hasTest: false });
  }
  rx = /^\s*subworkflow\s+(\w+)/gm;
  while ((m = rx.exec(content)) !== null) {
    out.push({ name: m[1], type: "subworkflow", hasTest: false });
  }
  return out;
}
