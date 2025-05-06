import { SEQERA_HUB_API_URL } from "../../../../../../constants";
import type {
  ImageType,
  PackageResult,
  Platform,
  WaveBuild,
  WaveResponse
} from "./types";

type StartBuildPayload = {
  packages: {
    type: "CONDA";
    channels: string[];
    entries: string[];
  };
  format?: string;
  containerPlatform?: string;
};

function parsePackagesString(packagesString: string): PackageResult[] {
  return packagesString.split(",").map((pkg) => {
    const [spec, version] = pkg.split("=");
    const [channel, name] = spec.split("::");

    return {
      name,
      source: channel === "pip" ? "pip" : "conda",
      selected_version: version
    };
  });
}

/**
 * Starts a container build process with the specified packages and configuration
 * @param packagesString - String of packages in format "channel::package=version,channel::package=version"
 * @param imageType - Type of container image to build (e.g. "singularity")
 * @param selectedPlatform - Target platform for the container
 * @returns Promise resolving to the build information or error
 */
export async function startBuild(
  packagesString: string,
  imageType?: ImageType,
  selectedPlatform?: Platform
): Promise<WaveBuild> {
  const packages = parsePackagesString(packagesString);

  if (packages.length === 0) {
    throw new Error("No packages added to container");
  }

  console.log("🟢 Starting container build with packages:", packages);

  const url = `${SEQERA_HUB_API_URL}/container`;

  // Collect all required channels, including default ones
  const channels = new Set(["conda-forge", "bioconda"]);
  packages.forEach((p) => {
    if (p.channel && !channels.has(p.channel)) {
      channels.add(p.channel);
    }
  });

  const payload: StartBuildPayload = {
    packages: {
      type: "CONDA",
      channels: Array.from(channels),
      entries: packages.map(
        (p) => `${p.name}${p.selected_version ? `=${p.selected_version}` : ""}`
      )
    }
  };

  if (imageType === "singularity") {
    payload.format = "sif";
  }

  if (selectedPlatform === "linux/arm64") {
    payload.containerPlatform = "arm64";
  }

  console.log("🟢 Build payload:", payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });

    const build = (await response.json()) as WaveResponse;

    if (response.ok) {
      console.log("🟢 Container built:", build);
      return build;
    }

    console.log(
      "🟠 Build request failed:",
      response.status,
      response.statusText
    );
    return { buildId: build.buildId, error: response.statusText };
  } catch (error) {
    console.error("🟠 Error starting build:", error);
    throw new Error(
      `Failed to start container build: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
