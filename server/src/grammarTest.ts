import "./grammar/GroovyParser";
import "./grammar/GroovyLexer";
import "./grammar/GroovyParserVisitor";
import { ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { GroovyLexer } from './grammar/GroovyLexer';
import { GroovyParser } from './grammar/GroovyParser';
import { Override } from 'antlr4ts/Decorators';
import { CodeCompletionCore } from 'antlr4-c3';
import { groupEnd } from 'console';
import { ParseTreeMatch } from 'antlr4ts/tree/pattern/ParseTreeMatch';

class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    @Override
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}


const inputstream = CharStreams.fromString("aws");
const lexer = new GroovyLexer(inputstream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new GroovyParser(tokenStream);
const errorListener = new ErrorListener();
parser.addErrorListener(errorListener);

const core = new CodeCompletionCore(parser);
core.ignoredTokens = new Set<number>([
	GroovyLexer.RANGE_EXCLUSIVE_FULL,
	GroovyLexer.SPREAD_DOT,
	GroovyLexer.SAFE_DOT,
	GroovyLexer.SAFE_INDEX,
	GroovyLexer.SAFE_CHAIN_DOT,
	GroovyLexer.ELVIS,
	GroovyLexer.METHOD_POINTER,
	GroovyLexer.METHOD_REFERENCE,
	GroovyLexer.REGEX_FIND,
	GroovyLexer.REGEX_MATCH,
	GroovyLexer.POWER,
	GroovyLexer.POWER_ASSIGN,
	GroovyLexer.SPACESHIP,
	GroovyLexer.IDENTICAL,
	GroovyLexer.NOT_IDENTICAL,
	GroovyLexer.ARROW,
	GroovyLexer.LPAREN,
	GroovyLexer.RPAREN,
	GroovyLexer.LBRACE,
	GroovyLexer.RBRACE,
	GroovyLexer.LBRACK,
	GroovyLexer.RBRACK,
	GroovyLexer.SEMI,
	GroovyLexer.COMMA,
	GroovyLexer.DOT,
	GroovyLexer.ASSIGN,
	GroovyLexer.GT,
	GroovyLexer.LT,
	GroovyLexer.NOT,
	GroovyLexer.BITNOT,
	GroovyLexer.QUESTION,
	GroovyLexer.COLON,
	GroovyLexer.EQUAL,
	GroovyLexer.LE,
	GroovyLexer.GE,
	GroovyLexer.NOTEQUAL,
	GroovyLexer.AND,
	GroovyLexer.OR,
	GroovyLexer.INC,
	GroovyLexer.DEC,
	GroovyLexer.ADD,
	GroovyLexer.SUB,
	GroovyLexer.MUL,
	GroovyLexer.DIV,
	GroovyLexer.BITAND,
	GroovyLexer.BITOR,
	GroovyLexer.XOR,
	GroovyLexer.MOD,
	GroovyLexer.ADD_ASSIGN,
	GroovyLexer.SUB_ASSIGN,
	GroovyLexer.MUL_ASSIGN,
	GroovyLexer.DIV_ASSIGN,
	GroovyLexer.AND_ASSIGN,
	GroovyLexer.OR_ASSIGN,
	GroovyLexer.XOR_ASSIGN,
	GroovyLexer.MOD_ASSIGN,
	GroovyLexer.LSHIFT_ASSIGN,
	GroovyLexer.RSHIFT_ASSIGN,
	GroovyLexer.URSHIFT_ASSIGN,
	GroovyLexer.ELVIS_ASSIGN
]);
const candidates = core.collectCandidates(6);

for (const x of candidates.tokens.keys()) {
	console.log(x);
	console.log(GroovyLexer._LITERAL_NAMES[x]);
}

for (let x=1; x < GroovyParser._SYMBOLIC_NAMES.length; ++x) {
	if (!core.ignoredTokens.has(x)) {
		console.log("[ GroovyParser." + GroovyParser._SYMBOLIC_NAMES[x] + " , { label: \"" + GroovyParser._LITERAL_NAMES[x]?.replace(/'/gi,"") + "\", data: GroovyParser." + GroovyParser._SYMBOLIC_NAMES[x] + "} ],");
	} 
} 