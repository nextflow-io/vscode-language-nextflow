export interface ProcessInfo {
  name: string;
  type: "process" | "subworkflow";
  hasTest: boolean;
  testFilePath?: string;
}

export interface PipelineNode {
  fileName: string;
  filePath: string;
  processes: ProcessInfo[];
  children: PipelineNode[];
}
