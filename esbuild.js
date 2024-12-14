const { build } = require('esbuild');
const { copy } = require('esbuild-plugin-copy');

const production = process.argv.includes('--production');

async function main() {
  const files = {
    'images/**': './images',
    'snippets/**': './snippets',
    'syntaxes/**': './syntaxes',
    'CHANGELOG.md': './CHANGELOG.md',
    'LICENSE.md': './LICENSE.md',
    'README.md': './README.md',
    'language-configuration.json': './language-configuration.json',
    'package.json': './package.json',
    'node_modules/mermaid/dist/mermaid.min.js': 'media',
  };
  await build({
    entryPoints: [
      'src/extension.ts'
    ],
    bundle: true,
    format: 'cjs',
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    platform: 'node',
    outfile: 'build/extension.js',
    external: ['vscode'],
    logLevel: 'silent',
    plugins: [
      copy({
        assets: Object.entries(files).map(([from, to]) => {
          return { from, to };
        }),
      }),
    ],
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
