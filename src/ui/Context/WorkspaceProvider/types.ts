export interface TreeNode {
  name: string;
  type: "process" | "workflow";
  path: string;
  line: number;
  test?: TestNode;
  children?: CallNode[];
}

export interface TestNode {
  name: string;
  path: string;
  line: number;
}

export interface CallNode {
  name: string;
  path: string;
}

export interface TestCreation {
  filePath?: string;
  successful?: boolean;
  finished?: boolean;
}
