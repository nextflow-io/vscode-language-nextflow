// Tokenizes snippets with the real TextMate engine and asserts which scopes apply.
// Run with: npm run test:syntax

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const oniguruma = require("vscode-oniguruma");
const vsctm = require("vscode-textmate");

const GRAMMARS = {
  "source.nextflow": "nextflow.tmLanguage.json",
  "source.nextflow-groovy": "groovy.tmLanguage.json"
};

// [ snippet, scope prefix, target ]
// target = substring whose every token must carry the scope,
//          or false = the scope must not appear anywhere in the snippet.
const CASES = [
  // --- comments -----------------------------------------------------------
  ["x = 1 // comment", "comment.line.double-slash", "// comment"],
  ["x = 1 /* comment */", "comment.block", "comment"],
  ["x = 1 /**/", "comment.block.empty", "/**/"],
  ["/* one\ntwo */", "comment.block", "two"],

  // --- constants ----------------------------------------------------------
  ["x = MAX_SIZE", "constant.other", "MAX_SIZE"],
  ["x = true", "constant.language", "true"],
  ["x = false", "constant.language", "false"],
  ["x = null", "constant.language", "null"],

  // --- numbers ------------------------------------------------------------
  ["x = 42", "constant.numeric", "42"],
  ["x = 0xFF", "constant.numeric", "0xFF"],
  ["x = 1.5e-3", "constant.numeric", "1.5e-3"],
  ["x = 10L", "constant.numeric", "10L"],

  // --- strings ------------------------------------------------------------
  ["x = 'foo'", "string.quoted.single", "foo"],
  ['x = "foo"', "string.quoted.double", "foo"],
  ["x = '''foo'''", "string.quoted.single.multiline", "foo"],
  ['x = """foo"""', "string.quoted.double.multiline", "foo"],
  ["x = '''a\nb'''", "string.quoted.single.multiline", "b"],
  ['x = """a\nb"""', "string.quoted.double.multiline", "b"],
  ['x = "a\\nb"', "constant.character.escape", "\\n"],
  ["x = 'a\\'b'", "constant.character.escape", "\\'"],
  ['x = "$foo"', "variable.other.interpolated", "$f"],
  ['x = "$foo.bar"', "keyword.other.dereference", "."],
  // note: the grammar does not highlight groovy code inside ${...}
  ['x = "${ 1 + 2 }"', "source.groovy.embedded.source", "${"],

  // --- slashy strings / division ------------------------------------------
  [
    'publishDir { file(params.output_dir) / "QC/${step}/multiqc/" }',
    "string.regexp",
    false
  ],
  ["file('foo') / 'bar.txt' // hello?", "string.regexp", false],
  ["file('foo') / 'bar.txt'", "keyword.operator.arithmetic", "/"],
  ["x = a / b", "string.regexp", false],
  ["x = a/b", "string.regexp", false],
  ["x = ['a', 'b'] / 2", "string.regexp", false],
  ["def re = /foo\\d+/", "string.regexp", "/foo"],
  ["if( it =~ /bar/ ) x", "string.regexp", "/bar/"],
  ["x.split(/\\t/)", "string.regexp", "/\\t/"],
  ["x = ~/foo/", "string.regexp", "/foo/"],
  ["x = /a\\/b/", "constant.character.escape", "\\/"],
  ['x = ~"foo"', "string.regexp.compiled", '~"'],

  // --- keywords: language -------------------------------------------------
  ["try { x() }", "keyword.control.exception", "try"],
  ["catch( e ) { x() }", "keyword.control.exception", "catch"],
  ["throw new Exception()", "keyword.control.exception", "throw"],
  ["if( x ) y()", "keyword.control", "if"],
  ["else y()", "keyword.control", "else"],
  ["return x", "keyword.control", "return"],
  ["assert x == 1", "meta.declaration.assertion", "assert"],
  ["x = new Foo()", "keyword.control.new", "new"],

  // --- keywords: operators ------------------------------------------------
  ["x = y as int", "keyword.operator.as", "as"],
  ["x = 'a' in list", "keyword.operator.in", "in"],
  ["x = a ?: b", "keyword.operator.elvis", "?:"],
  ["x = 1..10", "keyword.operator.range", ".."],
  ["x = list.collect { it -> it }", "keyword.operator", "->"],
  ["ch << 1", "keyword.operator.leftshift", "<<"],
  ["x = a.b", "keyword.operator.navigation", "."],
  ["x = a?.b", "keyword.operator.safe-navigation", "?."],
  ["x = a ? b : c", "meta.evaluation.ternary", "?"],
  ["x = a ? b : c", "keyword.operator.ternary", ":"],
  ["x = a ==~ /b/", "keyword.operator.match", "==~"],
  ["x = a =~ /b/", "keyword.operator.find", "=~"],
  ["x = a instanceof Path", "keyword.operator.instanceof", "instanceof"],
  ["x = a >= b", "keyword.operator.comparison", ">="],
  ["x = 1", "keyword.operator.assignment", "="],
  ["x++", "keyword.operator.increment-decrement", "++"],
  ["x = a + b", "keyword.operator.arithmetic", "+"],
  ["x = a && b", "keyword.operator.logical", "&&"],
  ["x = !a", "keyword.operator.logical", "!"],

  // --- types --------------------------------------------------------------
  ["def x = 1", "storage.type.def", "def"],
  ["int x = 1", "storage.type.primitive", "int"],
  ["boolean x = true", "storage.type.primitive", "boolean"],
  ["x = Channel.of(1)", "storage.type", "Channel"],
  ["List<String> x = []", "storage.type.generic", "List"],
  ["x = java.nio.file.Path.of('a')", "storage.type", "java.nio.file.Path"],

  // --- variables / values -------------------------------------------------
  ["def foo = 1", "meta.definition.variable", "foo"],
  ["def foo = 1", "meta.definition.variable.name", "foo"],
  ["int COUNT = 1", "constant.variable", "COUNT"],
  ["x = [a: 1]", "constant.other.key", "a"],
  ["x = [a: 1]", "punctuation.definition.seperator.key-value", ":"],
  ["x = [1, 2]", "meta.structure", "1"],
  ["x = [1, 2]", "punctuation.definition.separator", ","],
  ["foo(1, 2)", "meta.method-call", "1"],
  ["foo(1, 2)", "meta.method.groovy", "foo"],
  ["foo(1, 2)", "punctuation.definition.method-parameters.begin", "("],
  ["foo(1, 2)", "punctuation.definition.seperator.parameter", ","],
  ["x = { a, b -> a }", "meta.closure.parameters", "a"],
  ["x = { a, b -> a }", "meta.closure.parameter", "b"],
  ["x = { a, b -> a }", "variable.parameter.method", "a"],
  ["x = { a = 1 -> a }", "meta.parameter.default", "1"],

  // --- nextflow: declarations ---------------------------------------------
  ["include { FOO } from './foo.nf'", "keyword.nextflow", "include"],
  ["include { FOO } from './foo.nf'", "keyword.nextflow", "from"],
  ["include { FOO } from './foo.nf'", "string.quoted.single", "./foo.nf"],

  ["process FOO {\n  script:\n  'echo hi'\n}", "keyword.nextflow", "process"],
  [
    "process FOO {\n  script:\n  'echo hi'\n}",
    "entity.name.function.nextflow",
    "FOO"
  ],
  [
    "process FOO {\n  script:\n  'echo hi'\n}",
    "constant.block.nextflow",
    "script:"
  ],
  [
    "process FOO {\n  input:\n  path infile\n}",
    "constant.block.nextflow",
    "input:"
  ],
  [
    "process FOO {\n  output:\n  tuple val(x), path('*.txt')\n}",
    "entity.name.function.nextflow",
    "tuple"
  ],
  [
    "process FOO {\n  when:\n  x > 1\n  exec:\n  y = 2\n}",
    "constant.block.nextflow",
    "when:"
  ],
  ["process FOO {\n  shell:\n  'x'\n}", "constant.block.nextflow", "shell:"],
  ["process FOO {\n  script:\n  'echo hi'\n}", "process.nextflow", "process"],

  ["workflow {\n  FOO()\n}", "keyword.nextflow", "workflow"],
  [
    "workflow NAME {\n  main:\n  FOO()\n}",
    "entity.name.function.nextflow",
    "NAME"
  ],
  [
    "workflow NAME {\n  take:\n  ch\n  main:\n  FOO(ch)\n  emit:\n  out = FOO.out\n}",
    "constant.block.nextflow",
    "take:"
  ],
  [
    "workflow {\n  publish:\n  x >> 'y'\n}",
    "constant.block.nextflow",
    "publish:"
  ],
  ["workflow {\n  FOO()\n}", "workflow.nextflow", "workflow"],

  ["params {\n  input = 'x'\n}", "keyword.nextflow", "params"],
  ["params {\n  input = 'x'\n}", "params.nextflow", "params"],
  ["output {\n  'foo' { path 'bar' }\n}", "keyword.nextflow", "output"],
  ["output {\n  'foo' { path 'bar' }\n}", "output.nextflow", "output"],

  ["record Foo {\n  String bar\n}", "keyword.nextflow", "record"],
  ["record Foo {\n  String bar\n}", "storage.type", "Foo"],
  ["record Foo {\n  String bar\n}", "record.nextflow", "record"],
  ["enum Color {\n  RED,\n  GREEN\n}", "keyword.nextflow", "enum"],
  ["enum Color {\n  RED,\n  GREEN\n}", "storage.type", "Color"],
  ["enum Color {\n  RED,\n  GREEN\n}", "constant.enum.name", "RED"],

  ["def foo(a, b) {\n  a + b\n}", "entity.name.function.nextflow", "foo"],
  ["def foo(a, b) {\n  a + b\n}", "meta.definition.method", "foo"],
  ["def foo(a, b) {\n  a + b\n}", "variable.parameter.method", "a"],
  ["def foo(a = 1) {\n  a\n}", "meta.parameter.default", "1"],
  ["def foo(a, b) {\n  a + b\n}", "meta.method.body", "+"],
  ["String foo() {\n  'x'\n}", "meta.method.return-type", "String"]
];

function tokenize(grammar, snippet) {
  let stack = vsctm.INITIAL;
  const out = [];
  let offset = 0;
  for (const line of snippet.split("\n")) {
    const result = grammar.tokenizeLine(line, stack);
    stack = result.ruleStack;
    for (const t of result.tokens) {
      out.push({
        start: offset + t.startIndex,
        end: offset + t.endIndex,
        text: line.slice(t.startIndex, t.endIndex),
        scopes: t.scopes
      });
    }
    offset += line.length + 1; // + newline
  }
  return out;
}

async function main() {
  const wasm = fs.readFileSync(
    require.resolve("vscode-oniguruma/release/onig.wasm")
  );
  const onigLib = oniguruma.loadWASM(wasm).then(() => ({
    createOnigScanner: (patterns) => new oniguruma.OnigScanner(patterns),
    createOnigString: (s) => new oniguruma.OnigString(s)
  }));
  const registry = new vsctm.Registry({
    onigLib,
    loadGrammar: (scope) => {
      const file = GRAMMARS[scope];
      if (!file) return Promise.resolve(null);
      const raw = fs.readFileSync(path.join(__dirname, file), "utf8");
      return Promise.resolve(vsctm.parseRawGrammar(raw, file));
    }
  });

  const grammar = await registry.loadGrammar("source.nextflow");
  let failed = 0;
  for (const [snippet, scope, target] of CASES) {
    const tokens = tokenize(grammar, snippet);
    const hasScope = (t) => t.scopes.some((s) => s.startsWith(scope));
    let actual;
    if (target === false) {
      actual = !tokens.some(hasScope);
    } else {
      const at = snippet.indexOf(target);
      assert.notStrictEqual(at, -1, `bad case: ${target} not in ${snippet}`);
      const covering = tokens.filter(
        (t) => t.start < at + target.length && t.end > at
      );
      actual = covering.length > 0 && covering.every(hasScope);
    }
    const label = `${JSON.stringify(snippet)} -> ${scope} ${
      target === false ? "absent" : `on ${JSON.stringify(target)}`
    }`;
    if (actual) {
      console.log(`ok ${label}`);
    } else {
      failed++;
      console.log(`FAIL ${label}`);
      for (const t of tokens) {
        console.log(`  ${JSON.stringify(t.text)} ${t.scopes.join(" ")}`);
      }
    }
  }
  assert.strictEqual(failed, 0, `${failed}/${CASES.length} cases failed`);
  console.log(`${CASES.length} cases passed`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
