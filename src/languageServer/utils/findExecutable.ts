import * as cp from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as semver from "semver";
import * as vscode from "vscode";

function isFile(javaPath: string): boolean {
  return fs.existsSync(javaPath) && fs.statSync(javaPath).isFile();
}

export function findExecutable(executableFile: string): string | null {
  if (!("PATH" in process.env)) {
    return null;
  }
  const paths = (process.env.PATH as string).split(path.delimiter);
  for (const dir of paths) {
    const filePath = path.join(dir, executableFile);
    if (isFile(filePath)) {
      return filePath;
    }
  }
  return null;
}

export function findJava(): string | null {
  const executableFile: string =
    process["platform"] === "win32" ? "java.exe" : "java";

  const settingsJavaHome = vscode.workspace
    .getConfiguration("nextflow")
    .get<string>("java.home");
  if (settingsJavaHome) {
    const javaPath = path.join(settingsJavaHome, "bin", executableFile);
    if (isFile(javaPath)) {
      return javaPath;
    }
    return null;
  }

  if ("JAVA_HOME" in process.env) {
    const javaHome = process.env.JAVA_HOME as string;
    const javaPath = path.join(javaHome, "bin", executableFile);
    if (isFile(javaPath)) {
      return javaPath;
    }
  }

  return findExecutable(executableFile);
}

export function checkJavaVersion(javaPath: string): boolean {
  const output = cp.execSync(`"${javaPath}" -version 2>&1`, {
    encoding: "utf8"
  });
  const match = output.match(/version "(.*?)"/);
  if (!match || match.length < 2) {
    throw new Error("Could not parse Java version");
  }

  const versionString = match[1];
  const version = versionString.startsWith("1.")
    ? versionString.replace(/^1\./, "") // e.g. "1.8.0" → "8.0"
    : versionString;

  const coerced = semver.coerce(version);
  if (!coerced) {
    throw new Error(`Invalid Java version format: ${coerced}`);
  }

  return semver.gte(coerced, "17.0.0");
}
