import "./grammar/GroovyParser";
import "./grammar/GroovyLexer";
import "./grammar/GroovyParserVisitor";
import { complete } from './grammarAdapter';

const input = "aws { \ns3Ac";
let labels = complete(input,{textDocument: {uri: ""}, position : { line: 2, character: 4 }});
console.log(labels)