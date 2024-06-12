import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export default function findJava(): string | null {
  var executableFile: string = "java";
  if (process["platform"] === "win32") {
    executableFile += ".exe";
  }

  let settingsJavaHome = vscode.workspace
    .getConfiguration("nextflow")
    .get("java.home") as string;
  if (settingsJavaHome) {
    let javaPath = path.join(settingsJavaHome, "bin", executableFile);
    if (validate(javaPath)) {
      return javaPath;
    }
    return null;
  }

  if ("JAVA_HOME" in process.env) {
    let javaHome = process.env.JAVA_HOME as string;
    let javaPath = path.join(javaHome, "bin", executableFile);
    if (validate(javaPath)) {
      return javaPath;
    }
  }

  if ("PATH" in process.env) {
    let PATH = process.env.PATH as string;
    let paths = PATH.split(path.delimiter);
    let pathCount = paths.length;
    for (let i = 0; i < pathCount; i++) {
      let javaPath = path.join(paths[i], executableFile);
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
