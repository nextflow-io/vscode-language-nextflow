import { CodeCompletionCore } from 'antlr4-c3';
import { ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { Override } from 'antlr4ts/Decorators';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TextDocumentPositionParams, CompletionItemKind, Position } from 'vscode-languageserver';
import { GroovyLexer } from './grammar/GroovyLexer';
import { GroovyParser } from './grammar/GroovyParser';

class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    @Override
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

function computeTokenIndex(parseTree: ParseTree, caretPosition: Position): number | undefined {
    if(parseTree instanceof TerminalNode) {
        return computeTokenIndexOfTerminalNode(parseTree, caretPosition);
    } else {
        return computeTokenIndexOfChildNode(parseTree, caretPosition);
    }
}
function computeTokenIndexOfTerminalNode(parseTree: TerminalNode, caretPosition: Position) {
    let start = parseTree.symbol.charPositionInLine;
    let stop = parseTree.symbol.charPositionInLine + parseTree.text.length;
    if (parseTree.symbol.line == (caretPosition.line+1) && start <= (caretPosition.character) && stop >= (caretPosition.character)) {
        return parseTree.symbol.tokenIndex;
    } else {
        return undefined;
    }
}
function computeTokenIndexOfChildNode(parseTree: ParseTree, caretPosition: Position) {
    for (let i = 0; i < parseTree.childCount; i++) {
        let index = computeTokenIndex(parseTree.getChild(i), caretPosition);
        if (index !== undefined) {
            return index;
        }
    }
    return undefined;
}

export const complete = function(text: string, carretPosition: TextDocumentPositionParams) {
	const inputstream = CharStreams.fromString(text);
	const lexer = new GroovyLexer(inputstream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new GroovyParser(tokenStream);
	const errorListener = new ErrorListener();
	parser.addErrorListener(errorListener);
	let tree = parser.nextflow_config();
	let tokenIndex = computeTokenIndex(tree,carretPosition.position);

	const core = new CodeCompletionCore(parser);
	/*core.ignoredTokens = new Set<number>([
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
	]);*/
	
	if (tokenIndex === undefined) {
		tokenIndex = 0;
	}

	const candidates = core.collectCandidates(tokenIndex,tree);
	const retval = [];
	for (const x of candidates.tokens.keys()) {
		let label = parser.vocabulary.getLiteralName(x);
		if (label !== undefined) {
			label = label.replace(/'/gi,"");
			retval.push(
				{
					label: label,
					kind: CompletionItemKind.Keyword,
					data: label
				});
			}
	}
	return retval;
};