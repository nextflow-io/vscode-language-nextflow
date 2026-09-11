import * as path from "path";

export function parseOutputDirsFromConfig(
  config: string,
  workspaceRoot: string
): string[] {
  const dirs = new Set<string>([
    path.join(workspaceRoot, "results"),
    path.join(workspaceRoot, "output")
  ]);

  const patterns = [
    /(?:^|\n)\s*outputDir\s*=\s*['"]([^'"]+)['"]/m,
    /(?:^|\n)\s*params\.outdir\s*=\s*['"]([^'"]+)['"]/m,
    /(?:^|\n)\s*outdir\s*=\s*['"]([^'"]+)['"]/m
  ];

  for (const pattern of patterns) {
    const match = config.match(pattern);
    if (match?.[1]) {
      const outdir = match[1];
      dirs.add(path.isAbsolute(outdir) ? outdir : path.join(workspaceRoot, outdir));
    }
  }

  return [...dirs];
}
