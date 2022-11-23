import { CodeCompletionCore } from 'antlr4-c3';
import { ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { Override } from 'antlr4ts/Decorators';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TextDocumentPositionParams, CompletionItemKind, CompletionItem, Position, integer } from 'vscode-languageserver';
import { GroovyLexer } from './grammar/GroovyLexer';
import { GroovyParser, AssignmentExprAltContext, PathExpressionContext } from './grammar/GroovyParser';
import { findToken } from './scopeVars';

interface parseNode {
	node: RuleNode | undefined,
	idx: number
};


class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    @Override
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

function computeTokenIndex(parseTree: ParseTree, caretPosition: Position): parseNode | undefined {
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
        return {node: parseTree.parent, idx: parseTree.symbol.tokenIndex};
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

function pathTo(parseTree: RuleNode): Array<RuleNode> {
	if (parseTree.parent === undefined) {
		return Array<RuleNode>();
	} else {
		let retv = pathTo(parseTree.parent);
		retv.push(parseTree);
		parseTree
		return retv;
	}
}

function findParentRule(parseTree: RuleNode | undefined, ruleno: integer): RuleNode | undefined {
	if (parseTree !== undefined) {
		if (parseTree.ruleContext.ruleIndex == ruleno) {
			return parseTree;
		}
		if (parseTree.parent !== undefined) {
				return findParentRule(parseTree.parent, ruleno);
		} 
	} 

	return undefined;
}

function isInsideRule(parseTree: RuleNode | undefined, ruleno: integer): boolean {
	return findParentRule(parseTree, ruleno) !== undefined;
}

function findParentContext<T extends ParserRuleContext>(parseTree: RuleNode | undefined, ctxt: any): T | undefined {
	let rn = findParentRuleOfContext(parseTree,ctxt);
	if (rn) {
		return rn.ruleContext as T;
	}
}

function findParentRuleOfContext(parseTree: RuleNode | undefined, ctxt: any) : RuleNode | undefined {
	if (parseTree !== undefined) {
		if (parseTree.ruleContext instanceof ctxt) {
			return parseTree;
		}
		if (parseTree.parent !== undefined) {
				return findParentRuleOfContext(parseTree.parent, ctxt);
		} 
	}
	return undefined;
}

function isInsideContext(parseTree: RuleNode | undefined,ctxt: any) {
	return findParentContext(parseTree, ctxt) !== undefined;
}


function walkToTerminal(parseTree: ParseTree | undefined) : TerminalNode | undefined {
	if (parseTree) {
		if (parseTree instanceof TerminalNode) {
			return parseTree;
		} else if (parseTree.childCount === 1) {
			return walkToTerminal(parseTree.getChild(0));
		} else {
			return undefined;
		}
	}
	return undefined;
}

function getClosureName(parseTree: RuleNode | undefined) {
	if (parseTree === undefined) {
		return undefined;
	} else {
		let closure_node = findParentRule(parseTree, GroovyParser.RULE_closure);
		if (closure_node === undefined) {
			return undefined;
		} else {
			let path_expression = closure_node.parent?.parent?.parent;
			if (path_expression === undefined || path_expression.ruleContext.ruleIndex !== GroovyParser.RULE_pathExpression) {
				return undefined;
			} else {
				return walkToTerminal(path_expression.getChild(0))?.text;
			}
		}
	}
}

function reachable(from: ParseTree | undefined, to: ParseTree | undefined) : boolean {
	if (from === undefined || to === undefined) {
		return false;
	}
	for (let i=0; i < from.childCount; ++i) {
		let child = from.getChild(i);
		if (child === to) {
			return true;
		} else {
			return reachable(child, to);
		}
	}
	return false;
}

function getTerminalNodes(parseTree: ParseTree | undefined) : Array<TerminalNode> {
	let retval = Array<TerminalNode>();
	if (!parseTree) {
		return retval;
	}
	for (let i = 0; i < parseTree.childCount; ++i ) {
		let childnode = parseTree.getChild(i)
		if (childnode instanceof TerminalNode) {
			retval.push(childnode);
		} else {
			retval.push(...getTerminalNodes(childnode));
		}
	}
	return retval;
}

//expand a literal from a literal node part of a path expression
function expandPathExpression(parseTree: RuleNode | undefined, pos: Position) : string | undefined {
	if (parseTree == undefined || parseTree.ruleContext.ruleIndex !== GroovyParser.RULE_identifier || !isInsideContext(parseTree, PathExpressionContext)) {
		return undefined;
	}
	let path_expression = findParentRuleOfContext(parseTree,PathExpressionContext);
	let tn = getTerminalNodes(path_expression);
	let str = "";

	for (let node of tn) {
		if (node.symbol.text) {
			let start = node.symbol.charPositionInLine;
			let end = start + node.symbol.text.length;
			//symbol is in lines before or same line, but ends before carret
			if (node.symbol.line < pos.line+1 || (node.symbol.line == pos.line+1 && end < pos.character) ) {
				str += node.symbol.text;
			//symbol is on the same line, and ends after carret
			} else if ( node.symbol.line == pos.line+1 && start < pos.character && end >= pos.character) {
				str += node.symbol.text.substring(0,end - pos.character + 2);
			}
		}
	}

	let cname = getClosureName(parseTree);
	let closure = findParentRule(parseTree, GroovyParser.RULE_closure);
	while (cname) {
			str = cname + "." + str;
			closure = findParentRule(closure?.parent, GroovyParser.RULE_closure);
			cname = getClosureName(closure);
	}

	return str;
}

//check if this is a literal is an identifier 
function isConfigValueLiteral(parseTree: RuleNode | undefined) {
	let this_is_an_identifier = parseTree?.ruleContext.ruleIndex == GroovyParser.RULE_identifier;
	return this_is_an_identifier;// && is_left_side_of_assignment;
}

export const complete = function(text: string, carretPosition: TextDocumentPositionParams) : CompletionItem[] {
	const inputstream = CharStreams.fromString(text);
	const lexer = new GroovyLexer(inputstream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new GroovyParser(tokenStream);
	const errorListener = new ErrorListener();
	parser.addErrorListener(errorListener);
	let tree = parser.compilationUnit();
	let token_ptr = computeTokenIndex(tree,carretPosition.position);

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
	
	let tokenIndex = 0;
	const retval: CompletionItem[] = [];

	//console.log(tree.toStringTree(parser));
	let is_known_literal = false;

	if (token_ptr !== undefined) {
		tokenIndex = token_ptr.idx;
		if (isConfigValueLiteral(token_ptr.node)) {
			is_known_literal = true;
			let lit = expandPathExpression(token_ptr.node,carretPosition.position);
			if (lit) {
				let tokens = findToken(lit);
				for (let token of tokens) {
					retval.push(
						{
							label: token.token,
							kind: CompletionItemKind.Field,
							documentation: token.description,
							detail: token.full_token,
							data: token
						}
					)
				}
			}

		}
	}

	if (!is_known_literal) {
		const candidates = core.collectCandidates(tokenIndex,tree);
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
	}
	return retval;
};