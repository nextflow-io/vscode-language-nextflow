import * as fs from "fs";
import * as path from "path";

async function findAllFiles(
  dir: string,
  found: string[] = []
): Promise<string[]> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    const extensions = [".nf", ".nf.test"];
    const isValidExtension = extensions.some((e) => entry.name.endsWith(e));
    if (entry.isDirectory() && !["node_modules", ".git"].includes(entry.name)) {
      await findAllFiles(p, found);
    } else if (entry.isFile() && isValidExtension) {
      found.push(p);
    }
  }
  return found;
}

export { findAllFiles };

// export async function findAllNfFiles(
//   dir: string,
//   found: string[] = []
// ): Promise<string[]> {
//   return findAllFiles(dir, found, ".nf");
// }

// export async function findAllTestFiles(
//   dir: string,
//   found: string[] = []
// ): Promise<string[]> {
//   return findAllFiles(dir, found, ".nf.test");
// }
