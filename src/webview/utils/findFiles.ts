import * as fs from "fs";
import * as path from "path";

async function findAllFiles(
  dir: string,
  found: string[] = [],
  extension: string
): Promise<string[]> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".git"].includes(entry.name)) {
      await findAllFiles(p, found, extension);
    } else if (entry.isFile() && entry.name.endsWith(extension)) {
      found.push(p);
    }
  }
  return found;
}

export async function findAllNfFiles(
  dir: string,
  found: string[] = []
): Promise<string[]> {
  return findAllFiles(dir, found, ".nf");
}

export async function findAllTestFiles(
  dir: string,
  found: string[] = []
): Promise<string[]> {
  return findAllFiles(dir, found, ".nf.test");
}
