import "./grammar/GroovyParser";
import "./grammar/GroovyLexer";
import "./grammar/GroovyParserVisitor";
import { complete } from './grammarAdapter';

const input = "aws {\ncl = \"test\"; }";
let labels = complete(input,{textDocument: {uri: ""}, position : { line: 1, character: 2 }});
console.log(labels)