
export interface TreeNode {
  name: string;
  type: "process" | "workflow";
  uri: string;
  line: number;
  test?: TestNode;
  children?: CallNode[];
}

export interface TestNode {
  name: string;
  uri: string;
  line: number;
}

export interface CallNode {
  name: string;
  uri: string;
}
