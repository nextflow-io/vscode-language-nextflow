export type BuildId = string;

export type Platform = "linux/amd64" | "linux/arm64";

export type ImageType = "docker" | "singularity";

export type PackageResult = {
  name: string;
  source: "conda" | "pip";
  name_similarity?: number;
  name_distance?: number;
  summary?: string;
  latest_version?: string;
  selected_version?: string;
  versions?: string[];
  channel?: string;
  supports_arm?: boolean;
  download_count?: number;
  favorite_count?: number;
};

export type WaveResponse = {
  buildId: BuildId;
  cached?: boolean;
  containerImage?: string;
  containerToken?: string;
  expiration?: string;
  freeze?: boolean;
  targetImage?: string;
};

export type BuildStatus = {
  duration: number;
  id: BuildId;
  startTime: string;
  status: "PENDING" | "COMPLETED";
  succeeded: boolean;
};

export type BuildDetails = {
  buildId: BuildId;
  condaFile: string;
  digest: string;
  dockerFile: string;
  duration: number;
  exitStatus: number;
  format: string;
  offsetId: string;
  platform: string;
  requestIp: string;
  scanId: string;
  startTime: string;
  targetImage: string;
};

export type WaveBuild = WaveResponse & {
  status?: BuildStatus;
  details?: BuildDetails;
  singularityLink?: string;
  error?: string;
  logs?: string;
};
