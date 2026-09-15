const { build } = require("esbuild");
const { copy } = require("esbuild-plugin-copy");

const production = process.argv.includes("--production");

async function main() {
  const files = {
    "images/**": "./images",
    "snippets/**": "./snippets",
    "syntaxes/**": "./syntaxes",
    "CHANGELOG.md": "./CHANGELOG.md",
    "LICENSE.md": "./LICENSE.md",
    "README.md": "./README.md",
    "language-configuration.json": "./language-configuration.json",
    "package.json": "./package.json",
    "node_modules/mermaid/dist/mermaid.min.js": "media"
  };
  // The webview: a browser bundle, built from its own tsconfig so that the
  // @shared/* alias resolves.
  await build({
    entryPoints: ["src/ui/main.tsx"],
    bundle: true,
    format: "esm",
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    platform: "browser",
    outdir: "build/ui/assets",
    entryNames: "ui",
    assetNames: "[name]",
    loader: { ".ttf": "file" },
    tsconfig: "tsconfig.ui.json",
    logLevel: "silent"
  });

  // The extension host: a Node bundle, plus everything else that ships.
  await build({
    entryPoints: ["src/extension.ts"],
    bundle: true,
    format: "cjs",
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    platform: "node",
    outfile: "build/extension.js",
    external: ["vscode"],
    logLevel: "silent",
    plugins: [
      copy({
        assets: Object.entries(files).map(([from, to]) => {
          return { from, to };
        })
      })
    ]
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
