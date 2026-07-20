#!/usr/bin/env bash
set -euo pipefail

# Capture a realistic Seqera Dark preview using VS Code and sample files from
# https://github.com/microsoft/vscode-theme-tester
#
# Prerequisites:
#   - VS Code at /tmp/VSCode-linux-x64/bin/code (or on PATH as `code`)
#   - vscode-theme-tester cloned to /tmp/vscode-theme-tester
#   - nextflow.vsix at $ROOT/build/nextflow.vsix (npm run package)
#   - Xvfb, xdotool, ffmpeg

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXT_DIR="/tmp/vscode-preview/ext"
DATA_DIR="/tmp/vscode-preview/data"
WORKSPACE="/tmp/theme-playground"
THEME_TESTER="/tmp/vscode-theme-tester"
DISPLAY_NUM=99
export DISPLAY=":${DISPLAY_NUM}"

CODE="${CODE:-/tmp/VSCode-linux-x64/bin/code}"
if [[ ! -x "$CODE" ]]; then
  CODE="$(command -v code)"
fi

if [[ ! -d "$THEME_TESTER/testData" ]]; then
  echo "Missing $THEME_TESTER — clone https://github.com/microsoft/vscode-theme-tester" >&2
  exit 1
fi

pkill -f "VSCode-linux-x64" 2>/dev/null || true
sleep 1
rm -rf /tmp/vscode-preview
mkdir -p "$EXT_DIR" "$DATA_DIR/User" "$WORKSPACE"
cp "$SCRIPT_DIR/vscode-preview-settings.json" "$DATA_DIR/User/settings.json"
cp -r "$THEME_TESTER/testData/"* "$WORKSPACE/"

if ! pgrep -f "Xvfb :${DISPLAY_NUM}" >/dev/null; then
  Xvfb ":${DISPLAY_NUM}" -screen 0 1920x1080x24 >/tmp/xvfb.log 2>&1 &
  sleep 2
fi

cleanup() {
  pkill -f "VSCode-linux-x64" 2>/dev/null || true
}
trap cleanup EXIT

"$CODE" --extensions-dir "$EXT_DIR" --user-data-dir "$DATA_DIR" \
  --install-extension "$ROOT/build/nextflow.vsix" >/tmp/install-nextflow.log 2>&1

"$CODE" --extensions-dir "$EXT_DIR" --user-data-dir "$DATA_DIR" \
  "$WORKSPACE" >/tmp/code-open.log 2>&1 &

sleep 18

xdotool search --name "Visual Studio Code" windowactivate --sync 2>/dev/null || true
sleep 1

# Dismiss overlays
for _ in 1 2 3; do
  xdotool key --clearmodifiers Escape 2>/dev/null || true
  sleep 0.5
done
xdotool key --clearmodifiers Tab Tab Tab Return 2>/dev/null || true
sleep 2

# Open main.nf via quick open
xdotool key --clearmodifiers ctrl+p
sleep 1
xdotool type --delay 10 "main.nf"
sleep 0.5
xdotool key Return
sleep 4

# Show explorer
xdotool key --clearmodifiers ctrl+shift+e
sleep 1

# Hide chat / auxiliary bar
xdotool key --clearmodifiers ctrl+shift+p
sleep 0.8
xdotool type --delay 8 "View: Close Secondary Side Bar"
sleep 0.5
xdotool key Return
sleep 2

ffmpeg -y -f x11grab -video_size 1920x1080 -i "${DISPLAY}" -frames:v 1 "$ROOT/images/seqera-dark-theme.png" >/tmp/screenshot.log 2>&1
ls -la "$ROOT/images/seqera-dark-theme.png"
