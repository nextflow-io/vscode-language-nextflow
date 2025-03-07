type Type =
  | "workflow"
  | "process"
  | "nextflow_workflow"
  | "nextflow_process"
  | "subworkflow"
  | "test"
  | undefined;

export interface FileInfo {
  name: string;
  type: Type;
  testFilePath?: string;
}

export interface FileNode {
  name: string;
  fileName: string;
  filePath: string;
  type: Type;
  imports: string[];
}
