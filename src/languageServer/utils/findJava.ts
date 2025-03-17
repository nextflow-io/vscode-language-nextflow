import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export function findJava(): string | null {
  const executableFile: string = (process["platform"] === "win32")
    ? "java.exe"
    : "java";

  const settingsJavaHome = vscode.workspace
    .getConfiguration("nextflow")
    .get<string>("java.home");
  if (settingsJavaHome) {
    const javaPath = path.join(settingsJavaHome, "bin", executableFile);
    if (validate(javaPath)) {
      return javaPath;
    }
    return null;
  }

  if ("JAVA_HOME" in process.env) {
    const javaHome = process.env.JAVA_HOME as string;
    const javaPath = path.join(javaHome, "bin", executableFile);
    if (validate(javaPath)) {
      return javaPath;
    }
  }

  if ("PATH" in process.env) {
    const PATH = process.env.PATH as string;
    const paths = PATH.split(path.delimiter);
    const pathCount = paths.length;
    for (let i = 0; i < pathCount; i++) {
      const javaPath = path.join(paths[i], executableFile);
      if (validate(javaPath)) {
        return javaPath;
      }
    }
  }

  return null;
}

function validate(javaPath: string): boolean {
  return fs.existsSync(javaPath) && fs.statSync(javaPath).isFile();
}
