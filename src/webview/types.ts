type Type =
  | "workflow"
  | "process"
  | "nextflow_workflow"
  | "nextflow_process"
  | "subworkflow"
  | undefined;

export interface FileInfo {
  name: string;
  type: Type;
  hasTest: boolean;
  testFilePath?: string;
}

export interface FileNode {
  name: string;
  fileName: string;
  filePath: string;
  type: Type;
  imports: string[];
}
