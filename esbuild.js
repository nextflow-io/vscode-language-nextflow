const { build } = require('esbuild');
const { copy } = require('esbuild-plugin-copy');
const path = require('path');

const production = process.argv.includes('--production');

async function main() {
  const files = {
    'images/**': 'images',
    'snippets/**': 'snippets',
    'syntaxes/**': 'syntaxes',
    'CHANGELOG.md': 'CHANGELOG.md',
    'LICENSE.md': 'LICENSE.md',
    'README.md': 'README.md',
    'language-configuration.json': 'language-configuration.json',
    'package.json': 'package.json',
    'language-server/build/libs/language-server-all.jar': 'bin/language-server-all.jar',
    'node_modules/mermaid/dist/mermaid.min.js': 'media/mermaid.min.js'
  };

  await build({
    entryPoints: ['src/extension.ts'],
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
        resolveFrom: 'cwd',
        assets: Object.entries(files).map(([from, to]) => ({
          from,
          to: path.join('build', to)
        }))
      })
    ]
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
