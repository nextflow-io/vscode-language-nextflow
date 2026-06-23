export type MetroTheme = "nfcore" | "light" | "seqera";
export type MetroFormat = "html" | "svg";
export type MetroFileKind = "mmd" | "html" | "svg";

export interface MetroConfig {
  path: string;
  theme: MetroTheme;
  format: MetroFormat;
}

export interface RenderResult {
  outputPath: string;
  format: MetroFormat;
}
