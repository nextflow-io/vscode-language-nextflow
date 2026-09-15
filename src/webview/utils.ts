export function isNextflowFile(filePath: string) {
  return filePath.endsWith(".nf") || filePath.endsWith(".nf.test");
}
