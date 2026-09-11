import * as os from "os";
import * as path from "path";

export function getCandidateNfMetroPaths(): string[] {
  const home = os.homedir();
  const candidates = ["nf-metro"];

  if (process.platform === "win32") {
    candidates.push(
      path.join(home, "AppData", "Roaming", "Python", "Scripts", "nf-metro.exe"),
      path.join(home, ".local", "bin", "nf-metro.exe")
    );
  } else {
    candidates.push(
      path.join(home, ".local", "bin", "nf-metro"),
      "/usr/local/bin/nf-metro",
      path.join(home, "miniconda3", "bin", "nf-metro"),
      path.join(home, "anaconda3", "bin", "nf-metro"),
      path.join(home, "micromamba", "bin", "nf-metro")
    );
  }

  return candidates;
}
