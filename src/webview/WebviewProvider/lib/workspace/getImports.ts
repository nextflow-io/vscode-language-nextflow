function getImports(content: string): string[] {
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

export default getImports;
