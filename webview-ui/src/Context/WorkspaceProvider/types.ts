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
  line?: number;
}

export interface FileNode {
  name: string;
  fileName: string;
  filePath: string;
  type: Type;
  imports: string[];
  children?: FileNode[];
}
