// Generated from src/grammar/NextflowConfigParser.g4 by ANTLR 4.9.0-SNAPSHOT


    import { GroovyParser } from './GroovyParser';




import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { NextflowConfigParserListener } from "./NextflowConfigParserListener";
import { NextflowConfigParserVisitor } from "./NextflowConfigParserVisitor";


export class NextflowConfigParser extends Parser {
	public static readonly StringLiteral = 1;
	public static readonly GStringBegin = 2;
	public static readonly GStringEnd = 3;
	public static readonly GStringPart = 4;
	public static readonly GStringPathPart = 5;
	public static readonly RollBackOne = 6;
	public static readonly AS = 7;
	public static readonly DEF = 8;
	public static readonly IN = 9;
	public static readonly TRAIT = 10;
	public static readonly THREADSAFE = 11;
	public static readonly VAR = 12;
	public static readonly BuiltInPrimitiveType = 13;
	public static readonly ABSTRACT = 14;
	public static readonly ASSERT = 15;
	public static readonly BREAK = 16;
	public static readonly YIELD = 17;
	public static readonly CASE = 18;
	public static readonly CATCH = 19;
	public static readonly CLASS = 20;
	public static readonly CONST = 21;
	public static readonly CONTINUE = 22;
	public static readonly DEFAULT = 23;
	public static readonly DO = 24;
	public static readonly ELSE = 25;
	public static readonly ENUM = 26;
	public static readonly EXTENDS = 27;
	public static readonly FINAL = 28;
	public static readonly FINALLY = 29;
	public static readonly FOR = 30;
	public static readonly IF = 31;
	public static readonly GOTO = 32;
	public static readonly IMPLEMENTS = 33;
	public static readonly IMPORT = 34;
	public static readonly INSTANCEOF = 35;
	public static readonly INTERFACE = 36;
	public static readonly NATIVE = 37;
	public static readonly NEW = 38;
	public static readonly NON_SEALED = 39;
	public static readonly PACKAGE = 40;
	public static readonly PERMITS = 41;
	public static readonly PRIVATE = 42;
	public static readonly PROTECTED = 43;
	public static readonly PUBLIC = 44;
	public static readonly RECORD = 45;
	public static readonly RETURN = 46;
	public static readonly SEALED = 47;
	public static readonly STATIC = 48;
	public static readonly STRICTFP = 49;
	public static readonly SUPER = 50;
	public static readonly SWITCH = 51;
	public static readonly SYNCHRONIZED = 52;
	public static readonly THIS = 53;
	public static readonly THROW = 54;
	public static readonly THROWS = 55;
	public static readonly TRANSIENT = 56;
	public static readonly TRY = 57;
	public static readonly VOID = 58;
	public static readonly VOLATILE = 59;
	public static readonly WHILE = 60;
	public static readonly IntegerLiteral = 61;
	public static readonly FloatingPointLiteral = 62;
	public static readonly BooleanLiteral = 63;
	public static readonly NullLiteral = 64;
	public static readonly RANGE_INCLUSIVE = 65;
	public static readonly RANGE_EXCLUSIVE_LEFT = 66;
	public static readonly RANGE_EXCLUSIVE_RIGHT = 67;
	public static readonly RANGE_EXCLUSIVE_FULL = 68;
	public static readonly SPREAD_DOT = 69;
	public static readonly SAFE_DOT = 70;
	public static readonly SAFE_INDEX = 71;
	public static readonly SAFE_CHAIN_DOT = 72;
	public static readonly ELVIS = 73;
	public static readonly METHOD_POINTER = 74;
	public static readonly METHOD_REFERENCE = 75;
	public static readonly REGEX_FIND = 76;
	public static readonly REGEX_MATCH = 77;
	public static readonly POWER = 78;
	public static readonly POWER_ASSIGN = 79;
	public static readonly SPACESHIP = 80;
	public static readonly IDENTICAL = 81;
	public static readonly NOT_IDENTICAL = 82;
	public static readonly ARROW = 83;
	public static readonly NOT_INSTANCEOF = 84;
	public static readonly NOT_IN = 85;
	public static readonly LPAREN = 86;
	public static readonly RPAREN = 87;
	public static readonly LBRACE = 88;
	public static readonly RBRACE = 89;
	public static readonly LBRACK = 90;
	public static readonly RBRACK = 91;
	public static readonly SEMI = 92;
	public static readonly COMMA = 93;
	public static readonly DOT = 94;
	public static readonly ASSIGN = 95;
	public static readonly GT = 96;
	public static readonly LT = 97;
	public static readonly NOT = 98;
	public static readonly BITNOT = 99;
	public static readonly QUESTION = 100;
	public static readonly COLON = 101;
	public static readonly EQUAL = 102;
	public static readonly LE = 103;
	public static readonly GE = 104;
	public static readonly NOTEQUAL = 105;
	public static readonly AND = 106;
	public static readonly OR = 107;
	public static readonly INC = 108;
	public static readonly DEC = 109;
	public static readonly ADD = 110;
	public static readonly SUB = 111;
	public static readonly MUL = 112;
	public static readonly DIV = 113;
	public static readonly BITAND = 114;
	public static readonly BITOR = 115;
	public static readonly XOR = 116;
	public static readonly MOD = 117;
	public static readonly ADD_ASSIGN = 118;
	public static readonly SUB_ASSIGN = 119;
	public static readonly MUL_ASSIGN = 120;
	public static readonly DIV_ASSIGN = 121;
	public static readonly AND_ASSIGN = 122;
	public static readonly OR_ASSIGN = 123;
	public static readonly XOR_ASSIGN = 124;
	public static readonly MOD_ASSIGN = 125;
	public static readonly LSHIFT_ASSIGN = 126;
	public static readonly RSHIFT_ASSIGN = 127;
	public static readonly URSHIFT_ASSIGN = 128;
	public static readonly ELVIS_ASSIGN = 129;
	public static readonly CapitalizedIdentifier = 130;
	public static readonly Identifier = 131;
	public static readonly AT = 132;
	public static readonly ELLIPSIS = 133;
	public static readonly WS = 134;
	public static readonly NL = 135;
	public static readonly SH_COMMENT = 136;
	public static readonly UNEXPECTED_CHAR = 137;
	public static readonly INCLUDECONF = 138;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_nfconfigStatement = 1;
	public static readonly RULE_nfincludeStatement = 2;
	public static readonly RULE_nfassignment = 3;
	public static readonly RULE_nfconfigPathExpression = 4;
	public static readonly RULE_nfblock = 5;
	public static readonly RULE_nfblockStatement = 6;
	public static readonly RULE_nfselector = 7;
	public static readonly RULE_scriptStatements = 8;
	public static readonly RULE_scriptStatement = 9;
	public static readonly RULE_packageDeclaration = 10;
	public static readonly RULE_importDeclaration = 11;
	public static readonly RULE_typeDeclaration = 12;
	public static readonly RULE_modifier = 13;
	public static readonly RULE_modifiersOpt = 14;
	public static readonly RULE_modifiers = 15;
	public static readonly RULE_classOrInterfaceModifiersOpt = 16;
	public static readonly RULE_classOrInterfaceModifiers = 17;
	public static readonly RULE_classOrInterfaceModifier = 18;
	public static readonly RULE_variableModifier = 19;
	public static readonly RULE_variableModifiersOpt = 20;
	public static readonly RULE_variableModifiers = 21;
	public static readonly RULE_typeParameters = 22;
	public static readonly RULE_typeParameter = 23;
	public static readonly RULE_typeBound = 24;
	public static readonly RULE_typeList = 25;
	public static readonly RULE_classDeclaration = 26;
	public static readonly RULE_classBody = 27;
	public static readonly RULE_enumConstants = 28;
	public static readonly RULE_enumConstant = 29;
	public static readonly RULE_classBodyDeclaration = 30;
	public static readonly RULE_memberDeclaration = 31;
	public static readonly RULE_methodDeclaration = 32;
	public static readonly RULE_compactConstructorDeclaration = 33;
	public static readonly RULE_methodName = 34;
	public static readonly RULE_returnType = 35;
	public static readonly RULE_fieldDeclaration = 36;
	public static readonly RULE_variableDeclarators = 37;
	public static readonly RULE_variableDeclarator = 38;
	public static readonly RULE_variableDeclaratorId = 39;
	public static readonly RULE_variableInitializer = 40;
	public static readonly RULE_variableInitializers = 41;
	public static readonly RULE_emptyDims = 42;
	public static readonly RULE_emptyDimsOpt = 43;
	public static readonly RULE_standardType = 44;
	public static readonly RULE_type = 45;
	public static readonly RULE_classOrInterfaceType = 46;
	public static readonly RULE_generalClassOrInterfaceType = 47;
	public static readonly RULE_standardClassOrInterfaceType = 48;
	public static readonly RULE_primitiveType = 49;
	public static readonly RULE_typeArguments = 50;
	public static readonly RULE_typeArgument = 51;
	public static readonly RULE_annotatedQualifiedClassName = 52;
	public static readonly RULE_qualifiedClassNameList = 53;
	public static readonly RULE_formalParameters = 54;
	public static readonly RULE_formalParameterList = 55;
	public static readonly RULE_thisFormalParameter = 56;
	public static readonly RULE_formalParameter = 57;
	public static readonly RULE_methodBody = 58;
	public static readonly RULE_qualifiedName = 59;
	public static readonly RULE_qualifiedNameElement = 60;
	public static readonly RULE_qualifiedNameElements = 61;
	public static readonly RULE_qualifiedClassName = 62;
	public static readonly RULE_qualifiedStandardClassName = 63;
	public static readonly RULE_literal = 64;
	public static readonly RULE_gstring = 65;
	public static readonly RULE_gstringValue = 66;
	public static readonly RULE_gstringPath = 67;
	public static readonly RULE_lambdaExpression = 68;
	public static readonly RULE_standardLambdaExpression = 69;
	public static readonly RULE_lambdaParameters = 70;
	public static readonly RULE_standardLambdaParameters = 71;
	public static readonly RULE_lambdaBody = 72;
	public static readonly RULE_closure = 73;
	public static readonly RULE_closureOrLambdaExpression = 74;
	public static readonly RULE_blockStatementsOpt = 75;
	public static readonly RULE_blockStatements = 76;
	public static readonly RULE_annotationsOpt = 77;
	public static readonly RULE_annotation = 78;
	public static readonly RULE_elementValues = 79;
	public static readonly RULE_annotationName = 80;
	public static readonly RULE_elementValuePairs = 81;
	public static readonly RULE_elementValuePair = 82;
	public static readonly RULE_elementValuePairName = 83;
	public static readonly RULE_elementValue = 84;
	public static readonly RULE_elementValueArrayInitializer = 85;
	public static readonly RULE_block = 86;
	public static readonly RULE_blockStatement = 87;
	public static readonly RULE_localVariableDeclaration = 88;
	public static readonly RULE_variableDeclaration = 89;
	public static readonly RULE_typeNamePairs = 90;
	public static readonly RULE_typeNamePair = 91;
	public static readonly RULE_variableNames = 92;
	public static readonly RULE_conditionalStatement = 93;
	public static readonly RULE_ifElseStatement = 94;
	public static readonly RULE_switchStatement = 95;
	public static readonly RULE_loopStatement = 96;
	public static readonly RULE_continueStatement = 97;
	public static readonly RULE_breakStatement = 98;
	public static readonly RULE_yieldStatement = 99;
	public static readonly RULE_tryCatchStatement = 100;
	public static readonly RULE_assertStatement = 101;
	public static readonly RULE_statement = 102;
	public static readonly RULE_catchClause = 103;
	public static readonly RULE_catchType = 104;
	public static readonly RULE_finallyBlock = 105;
	public static readonly RULE_resources = 106;
	public static readonly RULE_resourceList = 107;
	public static readonly RULE_resource = 108;
	public static readonly RULE_switchBlockStatementGroup = 109;
	public static readonly RULE_switchLabel = 110;
	public static readonly RULE_forControl = 111;
	public static readonly RULE_enhancedForControl = 112;
	public static readonly RULE_classicalForControl = 113;
	public static readonly RULE_forInit = 114;
	public static readonly RULE_forUpdate = 115;
	public static readonly RULE_castParExpression = 116;
	public static readonly RULE_parExpression = 117;
	public static readonly RULE_expressionInPar = 118;
	public static readonly RULE_expressionList = 119;
	public static readonly RULE_expressionListElement = 120;
	public static readonly RULE_enhancedStatementExpression = 121;
	public static readonly RULE_statementExpression = 122;
	public static readonly RULE_postfixExpression = 123;
	public static readonly RULE_switchExpression = 124;
	public static readonly RULE_switchBlockStatementExpressionGroup = 125;
	public static readonly RULE_switchExpressionLabel = 126;
	public static readonly RULE_expression = 127;
	public static readonly RULE_castOperandExpression = 128;
	public static readonly RULE_commandExpression = 129;
	public static readonly RULE_commandArgument = 130;
	public static readonly RULE_pathExpression = 131;
	public static readonly RULE_pathElement = 132;
	public static readonly RULE_namePart = 133;
	public static readonly RULE_dynamicMemberName = 134;
	public static readonly RULE_indexPropertyArgs = 135;
	public static readonly RULE_namedPropertyArgs = 136;
	public static readonly RULE_primary = 137;
	public static readonly RULE_namedPropertyArgPrimary = 138;
	public static readonly RULE_namedArgPrimary = 139;
	public static readonly RULE_commandPrimary = 140;
	public static readonly RULE_list = 141;
	public static readonly RULE_map = 142;
	public static readonly RULE_mapEntryList = 143;
	public static readonly RULE_namedPropertyArgList = 144;
	public static readonly RULE_mapEntry = 145;
	public static readonly RULE_namedPropertyArg = 146;
	public static readonly RULE_namedArg = 147;
	public static readonly RULE_mapEntryLabel = 148;
	public static readonly RULE_namedPropertyArgLabel = 149;
	public static readonly RULE_namedArgLabel = 150;
	public static readonly RULE_creator = 151;
	public static readonly RULE_dim = 152;
	public static readonly RULE_arrayInitializer = 153;
	public static readonly RULE_anonymousInnerClassDeclaration = 154;
	public static readonly RULE_createdName = 155;
	public static readonly RULE_nonWildcardTypeArguments = 156;
	public static readonly RULE_typeArgumentsOrDiamond = 157;
	public static readonly RULE_arguments = 158;
	public static readonly RULE_argumentList = 159;
	public static readonly RULE_enhancedArgumentListInPar = 160;
	public static readonly RULE_firstArgumentListElement = 161;
	public static readonly RULE_argumentListElement = 162;
	public static readonly RULE_enhancedArgumentListElement = 163;
	public static readonly RULE_stringLiteral = 164;
	public static readonly RULE_className = 165;
	public static readonly RULE_identifier = 166;
	public static readonly RULE_builtInType = 167;
	public static readonly RULE_keywords = 168;
	public static readonly RULE_rparen = 169;
	public static readonly RULE_nls = 170;
	public static readonly RULE_sep = 171;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "nfconfigStatement", "nfincludeStatement", "nfassignment", 
		"nfconfigPathExpression", "nfblock", "nfblockStatement", "nfselector", 
		"scriptStatements", "scriptStatement", "packageDeclaration", "importDeclaration", 
		"typeDeclaration", "modifier", "modifiersOpt", "modifiers", "classOrInterfaceModifiersOpt", 
		"classOrInterfaceModifiers", "classOrInterfaceModifier", "variableModifier", 
		"variableModifiersOpt", "variableModifiers", "typeParameters", "typeParameter", 
		"typeBound", "typeList", "classDeclaration", "classBody", "enumConstants", 
		"enumConstant", "classBodyDeclaration", "memberDeclaration", "methodDeclaration", 
		"compactConstructorDeclaration", "methodName", "returnType", "fieldDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"variableInitializers", "emptyDims", "emptyDimsOpt", "standardType", "type", 
		"classOrInterfaceType", "generalClassOrInterfaceType", "standardClassOrInterfaceType", 
		"primitiveType", "typeArguments", "typeArgument", "annotatedQualifiedClassName", 
		"qualifiedClassNameList", "formalParameters", "formalParameterList", "thisFormalParameter", 
		"formalParameter", "methodBody", "qualifiedName", "qualifiedNameElement", 
		"qualifiedNameElements", "qualifiedClassName", "qualifiedStandardClassName", 
		"literal", "gstring", "gstringValue", "gstringPath", "lambdaExpression", 
		"standardLambdaExpression", "lambdaParameters", "standardLambdaParameters", 
		"lambdaBody", "closure", "closureOrLambdaExpression", "blockStatementsOpt", 
		"blockStatements", "annotationsOpt", "annotation", "elementValues", "annotationName", 
		"elementValuePairs", "elementValuePair", "elementValuePairName", "elementValue", 
		"elementValueArrayInitializer", "block", "blockStatement", "localVariableDeclaration", 
		"variableDeclaration", "typeNamePairs", "typeNamePair", "variableNames", 
		"conditionalStatement", "ifElseStatement", "switchStatement", "loopStatement", 
		"continueStatement", "breakStatement", "yieldStatement", "tryCatchStatement", 
		"assertStatement", "statement", "catchClause", "catchType", "finallyBlock", 
		"resources", "resourceList", "resource", "switchBlockStatementGroup", 
		"switchLabel", "forControl", "enhancedForControl", "classicalForControl", 
		"forInit", "forUpdate", "castParExpression", "parExpression", "expressionInPar", 
		"expressionList", "expressionListElement", "enhancedStatementExpression", 
		"statementExpression", "postfixExpression", "switchExpression", "switchBlockStatementExpressionGroup", 
		"switchExpressionLabel", "expression", "castOperandExpression", "commandExpression", 
		"commandArgument", "pathExpression", "pathElement", "namePart", "dynamicMemberName", 
		"indexPropertyArgs", "namedPropertyArgs", "primary", "namedPropertyArgPrimary", 
		"namedArgPrimary", "commandPrimary", "list", "map", "mapEntryList", "namedPropertyArgList", 
		"mapEntry", "namedPropertyArg", "namedArg", "mapEntryLabel", "namedPropertyArgLabel", 
		"namedArgLabel", "creator", "dim", "arrayInitializer", "anonymousInnerClassDeclaration", 
		"createdName", "nonWildcardTypeArguments", "typeArgumentsOrDiamond", "arguments", 
		"argumentList", "enhancedArgumentListInPar", "firstArgumentListElement", 
		"argumentListElement", "enhancedArgumentListElement", "stringLiteral", 
		"className", "identifier", "builtInType", "keywords", "rparen", "nls", 
		"sep",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'includeConfig'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "StringLiteral", "GStringBegin", "GStringEnd", "GStringPart", 
		"GStringPathPart", "RollBackOne", "AS", "DEF", "IN", "TRAIT", "THREADSAFE", 
		"VAR", "BuiltInPrimitiveType", "ABSTRACT", "ASSERT", "BREAK", "YIELD", 
		"CASE", "CATCH", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INTERFACE", "NATIVE", "NEW", "NON_SEALED", "PACKAGE", 
		"PERMITS", "PRIVATE", "PROTECTED", "PUBLIC", "RECORD", "RETURN", "SEALED", 
		"STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", 
		"THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "IntegerLiteral", 
		"FloatingPointLiteral", "BooleanLiteral", "NullLiteral", "RANGE_INCLUSIVE", 
		"RANGE_EXCLUSIVE_LEFT", "RANGE_EXCLUSIVE_RIGHT", "RANGE_EXCLUSIVE_FULL", 
		"SPREAD_DOT", "SAFE_DOT", "SAFE_INDEX", "SAFE_CHAIN_DOT", "ELVIS", "METHOD_POINTER", 
		"METHOD_REFERENCE", "REGEX_FIND", "REGEX_MATCH", "POWER", "POWER_ASSIGN", 
		"SPACESHIP", "IDENTICAL", "NOT_IDENTICAL", "ARROW", "NOT_INSTANCEOF", 
		"NOT_IN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "NOT", "BITNOT", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
		"SUB", "MUL", "DIV", "BITAND", "BITOR", "XOR", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
		"MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
		"LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ELVIS_ASSIGN", "CapitalizedIdentifier", 
		"Identifier", "AT", "ELLIPSIS", "WS", "NL", "SH_COMMENT", "UNEXPECTED_CHAR", 
		"INCLUDECONF",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(NextflowConfigParser._LITERAL_NAMES, NextflowConfigParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return NextflowConfigParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "NextflowConfigParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return NextflowConfigParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return NextflowConfigParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	    private inSwitchExpressionLevel = 0;
	    static MODIFIER_SET = new Set<Number|undefined>([
	        GroovyParser.DEF,
	        GroovyParser.VAR,
	        GroovyParser.NATIVE,
	        GroovyParser.SYNCHRONIZED,
	        GroovyParser.TRANSIENT,
	        GroovyParser.VOLATILE,
	        GroovyParser.PUBLIC,
	        GroovyParser.PROTECTED,
	        GroovyParser.PRIVATE,
	        GroovyParser.STATIC,
	        GroovyParser.ABSTRACT,
	        GroovyParser.SEALED,
	        GroovyParser.NON_SEALED,
	        GroovyParser.FINAL,
	        GroovyParser.STRICTFP,
	        GroovyParser.DEFAULT
	    ]);

	    @Override
	    public getSyntaxErrorSource() {
	        return 1;
	    }

	    @Override
	    public getErrorLine() {
	        let token = this._input.LT(-1);
	        if (token === undefined) {
	            return -1;
	        }

	        return token.line;
	    }

	    @Override
	    public getErrorColumn() {
	        let token = this._input.LT(-1);
	        if (token === undefined) {
	            return -1;
	        }

	        let length = token.text?.length;

	        if (length === undefined) {
	            length = 0;
	        }

	        return token.charPositionInLine + 1 + length;
	    }

	    public static isInvalidMethodDeclaration(ts: TokenStream) {
	        let tokenType = ts.LT(1).type;

	        return (tokenType === GroovyParser.Identifier || tokenType === GroovyParser.CapitalizedIdentifier || tokenType === GroovyParser.StringLiteral || tokenType === GroovyParser.YIELD)
	                && ts.LT(2).type === GroovyParser.LPAREN;
	    }

	    public static isInvalidLocalVariableDeclaration(ts: TokenStream) {
	        let index = 2;
	        let token: Token|undefined = undefined;
	        let tokenType: number| undefined = undefined;
	        let tokenType2 = ts.LT(index).type;
	        let tokenType3: number|undefined = undefined;

	        if (GroovyParser.DOT === tokenType2) {
	            let tokeTypeN = tokenType2;

	            do {
	                index = index + 2;
	                tokeTypeN = ts.LT(index).type;
	            } while (GroovyParser.DOT === tokeTypeN);

	            if (GroovyParser.LT === tokeTypeN || GroovyParser.LBRACK === tokeTypeN) {
	                return false;
	            }

	            index = index - 1;
	            tokenType2 = ts.LT(index + 1).type;
	        } else {
	            index = 1;
	        }

	        token = ts.LT(index);
	        tokenType = token.type;
	        tokenType3 = ts.LT(index + 2).type;
	        let nextCodePointorundef = token.text?.codePointAt(0);
	        let nextCodePoint = 0;

	        if (nextCodePointorundef !== undefined) {
	            nextCodePoint = nextCodePointorundef;
	        }

	        return // VOID == tokenType ||
	            !( tokenType === GroovyParser.BuiltInPrimitiveType || GroovyParser.MODIFIER_SET.has(tokenType))
	                && String.fromCodePoint(nextCodePoint).toUpperCase() !== String.fromCodePoint(nextCodePoint)
	                && String.fromCodePoint(nextCodePoint) !== '@'
	                && !(GroovyParser.ASSIGN === tokenType3 || (GroovyParser.LT === tokenType2 || GroovyParser.LBRACK === tokenType2));
	    }

	    public static isFollowingArgumentsOrClosure(context:ExpressionContext) {
	        if (context instanceof PostfixExprAltContext) {
	            let peacChildren = (context as PostfixExprAltContext).children;

	            if (peacChildren === undefined || peacChildren.length === 0) {
	                throw "Unexpected structure of expression context: " + context;
	            }
	            let peacChild = peacChildren[0];
	            if (!(peacChild instanceof PostfixExpressionContext)) {
	                throw "Unexpected structure of expression context: " + context;
	            }
	            let pecChildren = (peacChild as PostfixExpressionContext).children;

	            if (pecChildren === undefined || pecChildren.length === 0) {
	                throw "Unexpected structure of expression context: " + context;
	            }
	            let pecChild = pecChildren[0];

	            if (!(pecChild instanceof PathExpressionContext)) {
	                throw "Unexpected structure of expression context: " + context;
	            }
	            let pec = pecChild as PathExpressionContext;

	            let t = pec.t;

	            return (2 === t || 3 === t);
	        }

	        return false;
	    }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(NextflowConfigParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NextflowConfigParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.nls();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.StringLiteral) | (1 << NextflowConfigParser.AS) | (1 << NextflowConfigParser.DEF) | (1 << NextflowConfigParser.IN) | (1 << NextflowConfigParser.TRAIT) | (1 << NextflowConfigParser.VAR) | (1 << NextflowConfigParser.BuiltInPrimitiveType) | (1 << NextflowConfigParser.ABSTRACT) | (1 << NextflowConfigParser.YIELD) | (1 << NextflowConfigParser.CLASS) | (1 << NextflowConfigParser.DEFAULT) | (1 << NextflowConfigParser.ENUM) | (1 << NextflowConfigParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowConfigParser.IMPORT - 34)) | (1 << (NextflowConfigParser.INTERFACE - 34)) | (1 << (NextflowConfigParser.NATIVE - 34)) | (1 << (NextflowConfigParser.NON_SEALED - 34)) | (1 << (NextflowConfigParser.PACKAGE - 34)) | (1 << (NextflowConfigParser.PERMITS - 34)) | (1 << (NextflowConfigParser.PRIVATE - 34)) | (1 << (NextflowConfigParser.PROTECTED - 34)) | (1 << (NextflowConfigParser.PUBLIC - 34)) | (1 << (NextflowConfigParser.RECORD - 34)) | (1 << (NextflowConfigParser.SEALED - 34)) | (1 << (NextflowConfigParser.STATIC - 34)) | (1 << (NextflowConfigParser.STRICTFP - 34)) | (1 << (NextflowConfigParser.SYNCHRONIZED - 34)) | (1 << (NextflowConfigParser.TRANSIENT - 34)) | (1 << (NextflowConfigParser.VOID - 34)) | (1 << (NextflowConfigParser.VOLATILE - 34)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (NextflowConfigParser.LBRACK - 90)) | (1 << (NextflowConfigParser.LT - 90)) | (1 << (NextflowConfigParser.QUESTION - 90)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowConfigParser.CapitalizedIdentifier - 130)) | (1 << (NextflowConfigParser.Identifier - 130)) | (1 << (NextflowConfigParser.AT - 130)) | (1 << (NextflowConfigParser.INCLUDECONF - 130)))) !== 0)) {
				{
				{
				this.state = 345;
				this.nfconfigStatement();
				}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 351;
			this.match(NextflowConfigParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfconfigStatement(): NfconfigStatementContext {
		let _localctx: NfconfigStatementContext = new NfconfigStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, NextflowConfigParser.RULE_nfconfigStatement);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 353;
				this.nfincludeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 354;
				this.nfassignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 355;
				this.nfblock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 356;
				this.methodDeclaration(3,9);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfincludeStatement(): NfincludeStatementContext {
		let _localctx: NfincludeStatementContext = new NfincludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, NextflowConfigParser.RULE_nfincludeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.match(NextflowConfigParser.INCLUDECONF);
			this.state = 360;
			this.expression(0);
			this.state = 361;
			this.sep();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfassignment(): NfassignmentContext {
		let _localctx: NfassignmentContext = new NfassignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, NextflowConfigParser.RULE_nfassignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.nfconfigPathExpression();
			this.state = 364;
			this.match(NextflowConfigParser.ASSIGN);
			this.state = 365;
			this.statementExpression();
			this.state = 366;
			this.sep();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfconfigPathExpression(): NfconfigPathExpressionContext {
		let _localctx: NfconfigPathExpressionContext = new NfconfigPathExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, NextflowConfigParser.RULE_nfconfigPathExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(NextflowConfigParser.Identifier);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.DOT) {
				{
				{
				this.state = 369;
				this.match(NextflowConfigParser.DOT);
				this.state = 370;
				this.match(NextflowConfigParser.Identifier);
				}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfblock(): NfblockContext {
		let _localctx: NfblockContext = new NfblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, NextflowConfigParser.RULE_nfblock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(NextflowConfigParser.Identifier);
			this.state = 377;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 378;
			this.nls();
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 379;
					this.nfblockStatement();
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 385;
			this.nls();
			this.state = 386;
			this.match(NextflowConfigParser.RBRACE);
			this.state = 387;
			this.nls();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfblockStatement(): NfblockStatementContext {
		let _localctx: NfblockStatementContext = new NfblockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, NextflowConfigParser.RULE_nfblockStatement);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 389;
				this.nfassignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 390;
				this.nfblock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 391;
				this.nfselector();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 392;
				this.nfincludeStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nfselector(): NfselectorContext {
		let _localctx: NfselectorContext = new NfselectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, NextflowConfigParser.RULE_nfselector);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(NextflowConfigParser.Identifier);
			this.state = 396;
			this.match(NextflowConfigParser.COLON);
			this.state = 397;
			this.expression(0);
			this.state = 398;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 399;
			this.nls();
			this.state = 403;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 400;
					this.nfassignment();
					}
					}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 406;
			this.nls();
			this.state = 407;
			this.match(NextflowConfigParser.RBRACE);
			this.state = 408;
			this.nls();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scriptStatements(): ScriptStatementsContext {
		let _localctx: ScriptStatementsContext = new ScriptStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, NextflowConfigParser.RULE_scriptStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.scriptStatement();
			this.state = 416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 411;
					this.sep();
					this.state = 412;
					this.scriptStatement();
					}
					}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.SEMI || _la === NextflowConfigParser.NL) {
				{
				this.state = 419;
				this.sep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scriptStatement(): ScriptStatementContext {
		let _localctx: ScriptStatementContext = new ScriptStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, NextflowConfigParser.RULE_scriptStatement);
		try {
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 422;
				this.importDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
				this.typeDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 424;
				if (!( !GroovyParser.isInvalidMethodDeclaration(this._input) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isInvalidMethodDeclaration(this._input) ");
				}
				this.state = 425;
				this.methodDeclaration(3, 9);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 426;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, NextflowConfigParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.annotationsOpt();
			this.state = 430;
			this.match(NextflowConfigParser.PACKAGE);
			this.state = 431;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, NextflowConfigParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.annotationsOpt();
			this.state = 434;
			this.match(NextflowConfigParser.IMPORT);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.STATIC) {
				{
				this.state = 435;
				this.match(NextflowConfigParser.STATIC);
				}
			}

			this.state = 438;
			this.qualifiedName();
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.DOT:
				{
				this.state = 439;
				this.match(NextflowConfigParser.DOT);
				this.state = 440;
				this.match(NextflowConfigParser.MUL);
				}
				break;
			case NextflowConfigParser.AS:
				{
				this.state = 441;
				this.match(NextflowConfigParser.AS);
				this.state = 442;
				_localctx._alias = this.identifier();
				}
				break;
			case NextflowConfigParser.EOF:
			case NextflowConfigParser.SEMI:
			case NextflowConfigParser.NL:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, NextflowConfigParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.classOrInterfaceModifiersOpt();
			this.state = 446;
			this.classDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, NextflowConfigParser.RULE_modifier);
		let _la: number;
		try {
			this.state = 450;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
			case NextflowConfigParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 448;
				this.classOrInterfaceModifier();
				}
				break;
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.NATIVE:
			case NextflowConfigParser.SYNCHRONIZED:
			case NextflowConfigParser.TRANSIENT:
			case NextflowConfigParser.VOLATILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 449;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === NextflowConfigParser.DEF || _la === NextflowConfigParser.VAR || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (NextflowConfigParser.NATIVE - 37)) | (1 << (NextflowConfigParser.SYNCHRONIZED - 37)) | (1 << (NextflowConfigParser.TRANSIENT - 37)) | (1 << (NextflowConfigParser.VOLATILE - 37)))) !== 0))) {
					_localctx._m = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifiersOpt(): ModifiersOptContext {
		let _localctx: ModifiersOptContext = new ModifiersOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, NextflowConfigParser.RULE_modifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this.modifiers();
				this.state = 453;
				this.nls();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifiers(): ModifiersContext {
		let _localctx: ModifiersContext = new ModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, NextflowConfigParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.modifier();
			this.state = 463;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 458;
					this.nls();
					this.state = 459;
					this.modifier();
					}
					}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifiersOpt(): ClassOrInterfaceModifiersOptContext {
		let _localctx: ClassOrInterfaceModifiersOptContext = new ClassOrInterfaceModifiersOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, NextflowConfigParser.RULE_classOrInterfaceModifiersOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 466;
				this.classOrInterfaceModifiers();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NextflowConfigParser.NL) {
					{
					{
					this.state = 467;
					this.match(NextflowConfigParser.NL);
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext {
		let _localctx: ClassOrInterfaceModifiersContext = new ClassOrInterfaceModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, NextflowConfigParser.RULE_classOrInterfaceModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.classOrInterfaceModifier();
			this.state = 481;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 476;
					this.nls();
					this.state = 477;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 483;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, NextflowConfigParser.RULE_classOrInterfaceModifier);
		let _la: number;
		try {
			this.state = 486;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 484;
				this.annotation();
				}
				break;
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 485;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.ABSTRACT) | (1 << NextflowConfigParser.DEFAULT) | (1 << NextflowConfigParser.FINAL))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (NextflowConfigParser.NON_SEALED - 39)) | (1 << (NextflowConfigParser.PRIVATE - 39)) | (1 << (NextflowConfigParser.PROTECTED - 39)) | (1 << (NextflowConfigParser.PUBLIC - 39)) | (1 << (NextflowConfigParser.SEALED - 39)) | (1 << (NextflowConfigParser.STATIC - 39)) | (1 << (NextflowConfigParser.STRICTFP - 39)))) !== 0))) {
					_localctx._m = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, NextflowConfigParser.RULE_variableModifier);
		let _la: number;
		try {
			this.state = 490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 488;
				this.annotation();
				}
				break;
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 489;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.DEF) | (1 << NextflowConfigParser.VAR) | (1 << NextflowConfigParser.ABSTRACT) | (1 << NextflowConfigParser.FINAL))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (NextflowConfigParser.PRIVATE - 42)) | (1 << (NextflowConfigParser.PROTECTED - 42)) | (1 << (NextflowConfigParser.PUBLIC - 42)) | (1 << (NextflowConfigParser.STATIC - 42)) | (1 << (NextflowConfigParser.STRICTFP - 42)))) !== 0))) {
					_localctx._m = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifiersOpt(): VariableModifiersOptContext {
		let _localctx: VariableModifiersOptContext = new VariableModifiersOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, NextflowConfigParser.RULE_variableModifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 492;
				this.variableModifiers();
				this.state = 493;
				this.nls();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifiers(): VariableModifiersContext {
		let _localctx: VariableModifiersContext = new VariableModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, NextflowConfigParser.RULE_variableModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.variableModifier();
			this.state = 503;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 498;
					this.nls();
					this.state = 499;
					this.variableModifier();
					}
					}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, NextflowConfigParser.RULE_typeParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(NextflowConfigParser.LT);
			this.state = 507;
			this.nls();
			this.state = 508;
			this.typeParameter();
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 509;
					this.match(NextflowConfigParser.COMMA);
					this.state = 510;
					this.nls();
					this.state = 511;
					this.typeParameter();
					}
					}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 518;
			this.nls();
			this.state = 519;
			this.match(NextflowConfigParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, NextflowConfigParser.RULE_typeParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.annotationsOpt();
			this.state = 522;
			this.className();
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 523;
				this.match(NextflowConfigParser.EXTENDS);
				this.state = 524;
				this.nls();
				this.state = 525;
				this.typeBound();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, NextflowConfigParser.RULE_typeBound);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.type();
			this.state = 536;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 530;
					this.match(NextflowConfigParser.BITAND);
					this.state = 531;
					this.nls();
					this.state = 532;
					this.type();
					}
					}
				}
				this.state = 538;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, NextflowConfigParser.RULE_typeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.type();
			this.state = 546;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 540;
					this.match(NextflowConfigParser.COMMA);
					this.state = 541;
					this.nls();
					this.state = 542;
					this.type();
					}
					}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, NextflowConfigParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.CLASS:
				{
				this.state = 549;
				this.match(NextflowConfigParser.CLASS);
				 _localctx.t =  0; 
				}
				break;
			case NextflowConfigParser.INTERFACE:
				{
				this.state = 551;
				this.match(NextflowConfigParser.INTERFACE);
				 _localctx.t =  1; 
				}
				break;
			case NextflowConfigParser.ENUM:
				{
				this.state = 553;
				this.match(NextflowConfigParser.ENUM);
				 _localctx.t =  2; 
				}
				break;
			case NextflowConfigParser.AT:
				{
				this.state = 555;
				this.match(NextflowConfigParser.AT);
				this.state = 556;
				this.match(NextflowConfigParser.INTERFACE);
				 _localctx.t =  3; 
				}
				break;
			case NextflowConfigParser.TRAIT:
				{
				this.state = 558;
				this.match(NextflowConfigParser.TRAIT);
				 _localctx.t =  4; 
				}
				break;
			case NextflowConfigParser.RECORD:
				{
				this.state = 560;
				this.match(NextflowConfigParser.RECORD);
				 _localctx.t =  5; 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 564;
			this.identifier();
			this.state = 568;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 565;
				this.nls();
				this.state = 566;
				this.typeParameters();
				}
				break;
			}
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.nls();
				this.state = 571;
				this.formalParameters();
				}
				break;
			}
			this.state = 580;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 575;
				this.nls();
				this.state = 576;
				this.match(NextflowConfigParser.EXTENDS);
				this.state = 577;
				this.nls();
				this.state = 578;
				_localctx._scs = this.typeList();
				}
				break;
			}
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 582;
				this.nls();
				this.state = 583;
				this.match(NextflowConfigParser.IMPLEMENTS);
				this.state = 584;
				this.nls();
				this.state = 585;
				_localctx._is = this.typeList();
				}
				break;
			}
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 589;
				this.nls();
				this.state = 590;
				this.match(NextflowConfigParser.PERMITS);
				this.state = 591;
				this.nls();
				this.state = 592;
				_localctx._ps = this.typeList();
				}
				break;
			}
			this.state = 596;
			this.nls();
			this.state = 597;
			this.classBody(_localctx.t);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(t: number): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state, t);
		this.enterRule(_localctx, 54, NextflowConfigParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 600;
			this.nls();
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 601;
				if (!( 2 == _localctx.t )) {
					throw this.createFailedPredicateException(" 2 == $t ");
				}
				this.state = 602;
				this.enumConstants();
				this.state = 606;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 603;
					this.nls();
					this.state = 604;
					this.match(NextflowConfigParser.COMMA);
					}
					break;
				}
				this.state = 609;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 608;
					this.sep();
					}
					break;
				}
				}
				break;

			case 2:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.StringLiteral) | (1 << NextflowConfigParser.AS) | (1 << NextflowConfigParser.DEF) | (1 << NextflowConfigParser.IN) | (1 << NextflowConfigParser.TRAIT) | (1 << NextflowConfigParser.VAR) | (1 << NextflowConfigParser.BuiltInPrimitiveType) | (1 << NextflowConfigParser.ABSTRACT) | (1 << NextflowConfigParser.YIELD) | (1 << NextflowConfigParser.CLASS) | (1 << NextflowConfigParser.DEFAULT) | (1 << NextflowConfigParser.ENUM) | (1 << NextflowConfigParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowConfigParser.IMPORT - 34)) | (1 << (NextflowConfigParser.INTERFACE - 34)) | (1 << (NextflowConfigParser.NATIVE - 34)) | (1 << (NextflowConfigParser.NON_SEALED - 34)) | (1 << (NextflowConfigParser.PACKAGE - 34)) | (1 << (NextflowConfigParser.PERMITS - 34)) | (1 << (NextflowConfigParser.PRIVATE - 34)) | (1 << (NextflowConfigParser.PROTECTED - 34)) | (1 << (NextflowConfigParser.PUBLIC - 34)) | (1 << (NextflowConfigParser.RECORD - 34)) | (1 << (NextflowConfigParser.SEALED - 34)) | (1 << (NextflowConfigParser.STATIC - 34)) | (1 << (NextflowConfigParser.STRICTFP - 34)) | (1 << (NextflowConfigParser.SYNCHRONIZED - 34)) | (1 << (NextflowConfigParser.TRANSIENT - 34)) | (1 << (NextflowConfigParser.VOID - 34)) | (1 << (NextflowConfigParser.VOLATILE - 34)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (NextflowConfigParser.LBRACE - 88)) | (1 << (NextflowConfigParser.LBRACK - 88)) | (1 << (NextflowConfigParser.LT - 88)) | (1 << (NextflowConfigParser.QUESTION - 88)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowConfigParser.CapitalizedIdentifier - 130)) | (1 << (NextflowConfigParser.Identifier - 130)) | (1 << (NextflowConfigParser.AT - 130)))) !== 0)) {
				{
				this.state = 614;
				this.classBodyDeclaration(_localctx.t);
				this.state = 620;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 615;
						this.sep();
						this.state = 616;
						this.classBodyDeclaration(_localctx.t);
						}
						}
					}
					this.state = 622;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				}
				}
			}

			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.SEMI || _la === NextflowConfigParser.NL) {
				{
				this.state = 625;
				this.sep();
				}
			}

			this.state = 628;
			this.match(NextflowConfigParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, NextflowConfigParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.enumConstant();
			this.state = 638;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 631;
					this.nls();
					this.state = 632;
					this.match(NextflowConfigParser.COMMA);
					this.state = 633;
					this.nls();
					this.state = 634;
					this.enumConstant();
					}
					}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, NextflowConfigParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.annotationsOpt();
			this.state = 642;
			this.identifier();
			this.state = 644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 643;
				this.arguments();
				}
				break;
			}
			this.state = 647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 646;
				this.anonymousInnerClassDeclaration(1);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(t: number): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localctx, 60, NextflowConfigParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowConfigParser.STATIC) {
					{
					this.state = 649;
					this.match(NextflowConfigParser.STATIC);
					this.state = 650;
					this.nls();
					}
				}

				this.state = 653;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 654;
				this.memberDeclaration(_localctx.t);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(t: number): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localctx, 62, NextflowConfigParser.RULE_memberDeclaration);
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 657;
				this.methodDeclaration(0, _localctx.t);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 658;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 659;
				this.modifiersOpt();
				this.state = 662;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 660;
					this.classDeclaration();
					}
					break;

				case 2:
					{
					this.state = 661;
					this.compactConstructorDeclaration();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(t: number,ct: number): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state, t, ct);
		this.enterRule(_localctx, 64, NextflowConfigParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.modifiersOpt();
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.LT) {
				{
				this.state = 667;
				this.typeParameters();
				}
			}

			this.state = 673;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 670;
				this.returnType(_localctx.ct);
				this.state = 671;
				this.nls();
				}
				break;
			}
			this.state = 675;
			this.methodName();
			this.state = 676;
			this.formalParameters();
			this.state = 693;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 677;
				this.match(NextflowConfigParser.DEFAULT);
				this.state = 678;
				this.nls();
				this.state = 679;
				this.elementValue();
				}
				break;

			case 2:
				{
				this.state = 686;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 681;
					this.nls();
					this.state = 682;
					this.match(NextflowConfigParser.THROWS);
					this.state = 683;
					this.nls();
					this.state = 684;
					this.qualifiedClassNameList();
					}
					break;
				}
				this.state = 691;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 688;
					this.nls();
					this.state = 689;
					this.methodBody();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		let _localctx: CompactConstructorDeclarationContext = new CompactConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, NextflowConfigParser.RULE_compactConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.methodName();
			this.state = 696;
			this.nls();
			this.state = 697;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, NextflowConfigParser.RULE_methodName);
		try {
			this.state = 701;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AS:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 699;
				this.identifier();
				}
				break;
			case NextflowConfigParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 700;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnType(ct: number): ReturnTypeContext {
		let _localctx: ReturnTypeContext = new ReturnTypeContext(this._ctx, this.state, ct);
		this.enterRule(_localctx, 70, NextflowConfigParser.RULE_returnType);
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.standardType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.match(NextflowConfigParser.VOID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, NextflowConfigParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.variableDeclaration(1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, NextflowConfigParser.RULE_variableDeclarators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.variableDeclarator();
			this.state = 716;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 710;
					this.match(NextflowConfigParser.COMMA);
					this.state = 711;
					this.nls();
					this.state = 712;
					this.variableDeclarator();
					}
					}
				}
				this.state = 718;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, NextflowConfigParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.variableDeclaratorId();
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 720;
				this.nls();
				this.state = 721;
				this.match(NextflowConfigParser.ASSIGN);
				this.state = 722;
				this.nls();
				this.state = 723;
				this.variableInitializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, NextflowConfigParser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, NextflowConfigParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.enhancedStatementExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializers(): VariableInitializersContext {
		let _localctx: VariableInitializersContext = new VariableInitializersContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, NextflowConfigParser.RULE_variableInitializers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.variableInitializer();
			this.state = 739;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 732;
					this.nls();
					this.state = 733;
					this.match(NextflowConfigParser.COMMA);
					this.state = 734;
					this.nls();
					this.state = 735;
					this.variableInitializer();
					}
					}
				}
				this.state = 741;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 742;
			this.nls();
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 743;
				this.match(NextflowConfigParser.COMMA);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyDims(): EmptyDimsContext {
		let _localctx: EmptyDimsContext = new EmptyDimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, NextflowConfigParser.RULE_emptyDims);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 746;
					this.annotationsOpt();
					this.state = 747;
					this.match(NextflowConfigParser.LBRACK);
					this.state = 748;
					this.match(NextflowConfigParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyDimsOpt(): EmptyDimsOptContext {
		let _localctx: EmptyDimsOptContext = new EmptyDimsOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, NextflowConfigParser.RULE_emptyDimsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 754;
				this.emptyDims();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standardType(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, NextflowConfigParser.RULE_standardType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.annotationsOpt();
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.BuiltInPrimitiveType:
				{
				this.state = 758;
				this.primitiveType();
				}
				break;
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				{
				this.state = 759;
				this.standardClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 762;
			this.emptyDimsOpt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, NextflowConfigParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.annotationsOpt();
			this.state = 770;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.BuiltInPrimitiveType:
			case NextflowConfigParser.VOID:
				{
				this.state = 767;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NextflowConfigParser.BuiltInPrimitiveType:
					{
					this.state = 765;
					this.primitiveType();
					}
					break;
				case NextflowConfigParser.VOID:
					{
					this.state = 766;
					this.match(NextflowConfigParser.VOID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				{
				this.state = 769;
				this.generalClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 772;
			this.emptyDimsOpt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, NextflowConfigParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 774;
				this.qualifiedClassName();
				}
				break;

			case 2:
				{
				this.state = 775;
				this.qualifiedStandardClassName();
				}
				break;
			}
			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.LT) {
				{
				this.state = 778;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalClassOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, NextflowConfigParser.RULE_generalClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.qualifiedClassName();
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 782;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standardClassOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, NextflowConfigParser.RULE_standardClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.qualifiedStandardClassName();
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 786;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, NextflowConfigParser.RULE_primitiveType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(NextflowConfigParser.BuiltInPrimitiveType);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, NextflowConfigParser.RULE_typeArguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.match(NextflowConfigParser.LT);
			this.state = 792;
			this.nls();
			this.state = 793;
			this.typeArgument();
			this.state = 800;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 794;
					this.match(NextflowConfigParser.COMMA);
					this.state = 795;
					this.nls();
					this.state = 796;
					this.typeArgument();
					}
					}
				}
				this.state = 802;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			this.state = 803;
			this.nls();
			this.state = 804;
			this.match(NextflowConfigParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, NextflowConfigParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 815;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 806;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 807;
				this.annotationsOpt();
				this.state = 808;
				this.match(NextflowConfigParser.QUESTION);
				this.state = 813;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 809;
					_la = this._input.LA(1);
					if (!(_la === NextflowConfigParser.EXTENDS || _la === NextflowConfigParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 810;
					this.nls();
					this.state = 811;
					this.type();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotatedQualifiedClassName(): AnnotatedQualifiedClassNameContext {
		let _localctx: AnnotatedQualifiedClassNameContext = new AnnotatedQualifiedClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, NextflowConfigParser.RULE_annotatedQualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.annotationsOpt();
			this.state = 818;
			this.qualifiedClassName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedClassNameList(): QualifiedClassNameListContext {
		let _localctx: QualifiedClassNameListContext = new QualifiedClassNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, NextflowConfigParser.RULE_qualifiedClassNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.annotatedQualifiedClassName();
			this.state = 827;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 821;
					this.match(NextflowConfigParser.COMMA);
					this.state = 822;
					this.nls();
					this.state = 823;
					this.annotatedQualifiedClassName();
					}
					}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, NextflowConfigParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.AS) | (1 << NextflowConfigParser.DEF) | (1 << NextflowConfigParser.IN) | (1 << NextflowConfigParser.TRAIT) | (1 << NextflowConfigParser.VAR) | (1 << NextflowConfigParser.BuiltInPrimitiveType) | (1 << NextflowConfigParser.ABSTRACT) | (1 << NextflowConfigParser.YIELD) | (1 << NextflowConfigParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowConfigParser.IMPORT - 34)) | (1 << (NextflowConfigParser.PACKAGE - 34)) | (1 << (NextflowConfigParser.PERMITS - 34)) | (1 << (NextflowConfigParser.PRIVATE - 34)) | (1 << (NextflowConfigParser.PROTECTED - 34)) | (1 << (NextflowConfigParser.PUBLIC - 34)) | (1 << (NextflowConfigParser.RECORD - 34)) | (1 << (NextflowConfigParser.STATIC - 34)) | (1 << (NextflowConfigParser.STRICTFP - 34)) | (1 << (NextflowConfigParser.VOID - 34)))) !== 0) || _la === NextflowConfigParser.LBRACK || _la === NextflowConfigParser.QUESTION || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowConfigParser.CapitalizedIdentifier - 130)) | (1 << (NextflowConfigParser.Identifier - 130)) | (1 << (NextflowConfigParser.AT - 130)) | (1 << (NextflowConfigParser.ELLIPSIS - 130)))) !== 0)) {
				{
				this.state = 831;
				this.formalParameterList();
				}
			}

			this.state = 834;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, NextflowConfigParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 836;
				this.formalParameter();
				}
				break;

			case 2:
				{
				this.state = 837;
				this.thisFormalParameter();
				}
				break;
			}
			this.state = 846;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 840;
					this.match(NextflowConfigParser.COMMA);
					this.state = 841;
					this.nls();
					this.state = 842;
					this.formalParameter();
					}
					}
				}
				this.state = 848;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thisFormalParameter(): ThisFormalParameterContext {
		let _localctx: ThisFormalParameterContext = new ThisFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, NextflowConfigParser.RULE_thisFormalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.type();
			this.state = 850;
			this.match(NextflowConfigParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, NextflowConfigParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 852;
			this.variableModifiersOpt();
			this.state = 854;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 853;
				this.type();
				}
				break;
			}
			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.ELLIPSIS) {
				{
				this.state = 856;
				this.match(NextflowConfigParser.ELLIPSIS);
				}
			}

			this.state = 859;
			this.variableDeclaratorId();
			this.state = 865;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 860;
				this.nls();
				this.state = 861;
				this.match(NextflowConfigParser.ASSIGN);
				this.state = 862;
				this.nls();
				this.state = 863;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, NextflowConfigParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, NextflowConfigParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.qualifiedNameElement();
			this.state = 874;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 870;
					this.match(NextflowConfigParser.DOT);
					this.state = 871;
					this.qualifiedNameElement();
					}
					}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameElement(): QualifiedNameElementContext {
		let _localctx: QualifiedNameElementContext = new QualifiedNameElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, NextflowConfigParser.RULE_qualifiedNameElement);
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 877;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 878;
				this.match(NextflowConfigParser.DEF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 879;
				this.match(NextflowConfigParser.IN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 880;
				this.match(NextflowConfigParser.AS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 881;
				this.match(NextflowConfigParser.TRAIT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameElements(): QualifiedNameElementsContext {
		let _localctx: QualifiedNameElementsContext = new QualifiedNameElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, NextflowConfigParser.RULE_qualifiedNameElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 884;
					this.qualifiedNameElement();
					this.state = 885;
					this.match(NextflowConfigParser.DOT);
					}
					}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedClassName(): QualifiedClassNameContext {
		let _localctx: QualifiedClassNameContext = new QualifiedClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, NextflowConfigParser.RULE_qualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.qualifiedNameElements();
			this.state = 893;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedStandardClassName(): QualifiedStandardClassNameContext {
		let _localctx: QualifiedStandardClassNameContext = new QualifiedStandardClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, NextflowConfigParser.RULE_qualifiedStandardClassName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this.qualifiedNameElements();
			this.state = 896;
			this.className();
			this.state = 901;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 897;
					this.match(NextflowConfigParser.DOT);
					this.state = 898;
					this.className();
					}
					}
				}
				this.state = 903;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, NextflowConfigParser.RULE_literal);
		try {
			this.state = 909;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.IntegerLiteral:
				_localctx = new IntegerLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 904;
				this.match(NextflowConfigParser.IntegerLiteral);
				}
				break;
			case NextflowConfigParser.FloatingPointLiteral:
				_localctx = new FloatingPointLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 905;
				this.match(NextflowConfigParser.FloatingPointLiteral);
				}
				break;
			case NextflowConfigParser.StringLiteral:
				_localctx = new StringLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 906;
				this.stringLiteral();
				}
				break;
			case NextflowConfigParser.BooleanLiteral:
				_localctx = new BooleanLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 907;
				this.match(NextflowConfigParser.BooleanLiteral);
				}
				break;
			case NextflowConfigParser.NullLiteral:
				_localctx = new NullLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 908;
				this.match(NextflowConfigParser.NullLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gstring(): GstringContext {
		let _localctx: GstringContext = new GstringContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, NextflowConfigParser.RULE_gstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 911;
			this.match(NextflowConfigParser.GStringBegin);
			this.state = 912;
			this.gstringValue();
			this.state = 917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.GStringPart) {
				{
				{
				this.state = 913;
				this.match(NextflowConfigParser.GStringPart);
				this.state = 914;
				this.gstringValue();
				}
				}
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 920;
			this.match(NextflowConfigParser.GStringEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gstringValue(): GstringValueContext {
		let _localctx: GstringValueContext = new GstringValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, NextflowConfigParser.RULE_gstringValue);
		try {
			this.state = 924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AS:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 922;
				this.gstringPath();
				}
				break;
			case NextflowConfigParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 923;
				this.closure();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gstringPath(): GstringPathContext {
		let _localctx: GstringPathContext = new GstringPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, NextflowConfigParser.RULE_gstringPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.identifier();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.GStringPathPart) {
				{
				{
				this.state = 927;
				this.match(NextflowConfigParser.GStringPathPart);
				}
				}
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): StandardLambdaExpressionContext {
		let _localctx: StandardLambdaExpressionContext = new StandardLambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, NextflowConfigParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			this.lambdaParameters();
			this.state = 934;
			this.nls();
			this.state = 935;
			this.match(NextflowConfigParser.ARROW);
			this.state = 936;
			this.nls();
			this.state = 937;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standardLambdaExpression(): StandardLambdaExpressionContext {
		let _localctx: StandardLambdaExpressionContext = new StandardLambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, NextflowConfigParser.RULE_standardLambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.standardLambdaParameters();
			this.state = 940;
			this.nls();
			this.state = 941;
			this.match(NextflowConfigParser.ARROW);
			this.state = 942;
			this.nls();
			this.state = 943;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): StandardLambdaParametersContext {
		let _localctx: StandardLambdaParametersContext = new StandardLambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, NextflowConfigParser.RULE_lambdaParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this.formalParameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standardLambdaParameters(): StandardLambdaParametersContext {
		let _localctx: StandardLambdaParametersContext = new StandardLambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, NextflowConfigParser.RULE_standardLambdaParameters);
		try {
			this.state = 949;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 947;
				this.formalParameters();
				}
				break;
			case NextflowConfigParser.AS:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 948;
				this.variableDeclaratorId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, NextflowConfigParser.RULE_lambdaBody);
		try {
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 951;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 952;
				this.statementExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closure(): ClosureContext {
		let _localctx: ClosureContext = new ClosureContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, NextflowConfigParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 956;
				this.nls();
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.AS) | (1 << NextflowConfigParser.DEF) | (1 << NextflowConfigParser.IN) | (1 << NextflowConfigParser.TRAIT) | (1 << NextflowConfigParser.VAR) | (1 << NextflowConfigParser.BuiltInPrimitiveType) | (1 << NextflowConfigParser.ABSTRACT) | (1 << NextflowConfigParser.YIELD) | (1 << NextflowConfigParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowConfigParser.IMPORT - 34)) | (1 << (NextflowConfigParser.PACKAGE - 34)) | (1 << (NextflowConfigParser.PERMITS - 34)) | (1 << (NextflowConfigParser.PRIVATE - 34)) | (1 << (NextflowConfigParser.PROTECTED - 34)) | (1 << (NextflowConfigParser.PUBLIC - 34)) | (1 << (NextflowConfigParser.RECORD - 34)) | (1 << (NextflowConfigParser.STATIC - 34)) | (1 << (NextflowConfigParser.STRICTFP - 34)) | (1 << (NextflowConfigParser.VOID - 34)))) !== 0) || _la === NextflowConfigParser.LBRACK || _la === NextflowConfigParser.QUESTION || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowConfigParser.CapitalizedIdentifier - 130)) | (1 << (NextflowConfigParser.Identifier - 130)) | (1 << (NextflowConfigParser.AT - 130)) | (1 << (NextflowConfigParser.ELLIPSIS - 130)))) !== 0)) {
					{
					this.state = 957;
					this.formalParameterList();
					this.state = 958;
					this.nls();
					}
				}

				this.state = 962;
				this.match(NextflowConfigParser.ARROW);
				}
				break;
			}
			this.state = 967;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 966;
				this.sep();
				}
				break;
			}
			this.state = 969;
			this.blockStatementsOpt();
			this.state = 970;
			this.match(NextflowConfigParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		let _localctx: ClosureOrLambdaExpressionContext = new ClosureOrLambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, NextflowConfigParser.RULE_closureOrLambdaExpression);
		try {
			this.state = 974;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.closure();
				}
				break;
			case NextflowConfigParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 973;
				this.lambdaExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatementsOpt(): BlockStatementsOptContext {
		let _localctx: BlockStatementsOptContext = new BlockStatementsOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, NextflowConfigParser.RULE_blockStatementsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 976;
				this.blockStatements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let _localctx: BlockStatementsContext = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, NextflowConfigParser.RULE_blockStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			this.blockStatement();
			this.state = 985;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 980;
					this.sep();
					this.state = 981;
					this.blockStatement();
					}
					}
				}
				this.state = 987;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 989;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 988;
				this.sep();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationsOpt(): AnnotationsOptContext {
		let _localctx: AnnotationsOptContext = new AnnotationsOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, NextflowConfigParser.RULE_annotationsOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.AT) {
				{
				this.state = 991;
				this.annotation();
				this.state = 997;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 992;
						this.nls();
						this.state = 993;
						this.annotation();
						}
						}
					}
					this.state = 999;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				}
				this.state = 1000;
				this.nls();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, NextflowConfigParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.match(NextflowConfigParser.AT);
			this.state = 1005;
			this.annotationName();
			this.state = 1013;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 1006;
				this.nls();
				this.state = 1007;
				this.match(NextflowConfigParser.LPAREN);
				this.state = 1009;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 1008;
					this.elementValues();
					}
					break;
				}
				this.state = 1011;
				this.rparen();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValues(): ElementValuesContext {
		let _localctx: ElementValuesContext = new ElementValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, NextflowConfigParser.RULE_elementValues);
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1015;
				this.elementValuePairs();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1016;
				this.elementValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationName(): AnnotationNameContext {
		let _localctx: AnnotationNameContext = new AnnotationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, NextflowConfigParser.RULE_annotationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.qualifiedClassName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, NextflowConfigParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1021;
			this.elementValuePair();
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.COMMA) {
				{
				{
				this.state = 1022;
				this.match(NextflowConfigParser.COMMA);
				this.state = 1023;
				this.elementValuePair();
				}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, NextflowConfigParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this.elementValuePairName();
			this.state = 1030;
			this.nls();
			this.state = 1031;
			this.match(NextflowConfigParser.ASSIGN);
			this.state = 1032;
			this.nls();
			this.state = 1033;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairName(): ElementValuePairNameContext {
		let _localctx: ElementValuePairNameContext = new ElementValuePairNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, NextflowConfigParser.RULE_elementValuePairName);
		try {
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1036;
				this.keywords();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, NextflowConfigParser.RULE_elementValue);
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.elementValueArrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1041;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, NextflowConfigParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(NextflowConfigParser.LBRACK);
			this.state = 1056;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1045;
				this.elementValue();
				this.state = 1050;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1046;
						this.match(NextflowConfigParser.COMMA);
						this.state = 1047;
						this.elementValue();
						}
						}
					}
					this.state = 1052;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				}
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowConfigParser.COMMA) {
					{
					this.state = 1053;
					this.match(NextflowConfigParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 1058;
			this.match(NextflowConfigParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, NextflowConfigParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1060;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1061;
				this.sep();
				}
				break;
			}
			this.state = 1064;
			this.blockStatementsOpt();
			this.state = 1065;
			this.match(NextflowConfigParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, NextflowConfigParser.RULE_blockStatement);
		try {
			this.state = 1069;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1067;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1068;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, NextflowConfigParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			if (!( !GroovyParser.isInvalidLocalVariableDeclaration(this._input) )) {
				throw this.createFailedPredicateException(" !GroovyParser.isInvalidLocalVariableDeclaration(this._input) ");
			}
			this.state = 1072;
			this.variableDeclaration(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(t: number): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localctx, 178, NextflowConfigParser.RULE_variableDeclaration);
		try {
			this.state = 1091;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1074;
				this.modifiers();
				this.state = 1075;
				this.nls();
				this.state = 1086;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NextflowConfigParser.AS:
				case NextflowConfigParser.DEF:
				case NextflowConfigParser.IN:
				case NextflowConfigParser.TRAIT:
				case NextflowConfigParser.VAR:
				case NextflowConfigParser.BuiltInPrimitiveType:
				case NextflowConfigParser.YIELD:
				case NextflowConfigParser.IMPORT:
				case NextflowConfigParser.PACKAGE:
				case NextflowConfigParser.PERMITS:
				case NextflowConfigParser.RECORD:
				case NextflowConfigParser.VOID:
				case NextflowConfigParser.LBRACK:
				case NextflowConfigParser.QUESTION:
				case NextflowConfigParser.CapitalizedIdentifier:
				case NextflowConfigParser.Identifier:
				case NextflowConfigParser.AT:
					{
					this.state = 1077;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
					case 1:
						{
						this.state = 1076;
						this.type();
						}
						break;
					}
					this.state = 1079;
					this.variableDeclarators();
					}
					break;
				case NextflowConfigParser.LPAREN:
					{
					this.state = 1080;
					this.typeNamePairs();
					this.state = 1081;
					this.nls();
					this.state = 1082;
					this.match(NextflowConfigParser.ASSIGN);
					this.state = 1083;
					this.nls();
					this.state = 1084;
					this.variableInitializer();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1088;
				this.type();
				this.state = 1089;
				this.variableDeclarators();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNamePairs(): TypeNamePairsContext {
		let _localctx: TypeNamePairsContext = new TypeNamePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, NextflowConfigParser.RULE_typeNamePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1094;
			this.typeNamePair();
			this.state = 1099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.COMMA) {
				{
				{
				this.state = 1095;
				this.match(NextflowConfigParser.COMMA);
				this.state = 1096;
				this.typeNamePair();
				}
				}
				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1102;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNamePair(): TypeNamePairContext {
		let _localctx: TypeNamePairContext = new TypeNamePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, NextflowConfigParser.RULE_typeNamePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1104;
				this.type();
				}
				break;
			}
			this.state = 1107;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableNames(): VariableNamesContext {
		let _localctx: VariableNamesContext = new VariableNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, NextflowConfigParser.RULE_variableNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1110;
			this.variableDeclaratorId();
			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1111;
				this.match(NextflowConfigParser.COMMA);
				this.state = 1112;
				this.variableDeclaratorId();
				}
				}
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === NextflowConfigParser.COMMA);
			this.state = 1117;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalStatement(): ConditionalStatementContext {
		let _localctx: ConditionalStatementContext = new ConditionalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, NextflowConfigParser.RULE_conditionalStatement);
		try {
			this.state = 1121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1119;
				this.ifElseStatement();
				}
				break;
			case NextflowConfigParser.SWITCH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1120;
				this.switchStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseStatement(): IfElseStatementContext {
		let _localctx: IfElseStatementContext = new IfElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, NextflowConfigParser.RULE_ifElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this.match(NextflowConfigParser.IF);
			this.state = 1124;
			this.expressionInPar();
			this.state = 1125;
			this.nls();
			this.state = 1126;
			_localctx._tb = this.statement();
			this.state = 1135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1129;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 1127;
					this.nls();
					}
					break;

				case 2:
					{
					this.state = 1128;
					this.sep();
					}
					break;
				}
				this.state = 1131;
				this.match(NextflowConfigParser.ELSE);
				this.state = 1132;
				this.nls();
				this.state = 1133;
				_localctx._fb = this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, NextflowConfigParser.RULE_switchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this.match(NextflowConfigParser.SWITCH);
			this.state = 1138;
			this.expressionInPar();
			this.state = 1139;
			this.nls();
			this.state = 1140;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 1141;
			this.nls();
			this.state = 1149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.CASE || _la === NextflowConfigParser.DEFAULT) {
				{
				this.state = 1143;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1142;
						this.switchBlockStatementGroup();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1145;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1147;
				this.nls();
				}
			}

			this.state = 1151;
			this.match(NextflowConfigParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, NextflowConfigParser.RULE_loopStatement);
		try {
			this.state = 1172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.FOR:
				_localctx = new ForStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1153;
				this.match(NextflowConfigParser.FOR);
				this.state = 1154;
				this.match(NextflowConfigParser.LPAREN);
				this.state = 1155;
				this.forControl();
				this.state = 1156;
				this.rparen();
				this.state = 1157;
				this.nls();
				this.state = 1158;
				this.statement();
				}
				break;
			case NextflowConfigParser.WHILE:
				_localctx = new WhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1160;
				this.match(NextflowConfigParser.WHILE);
				this.state = 1161;
				this.expressionInPar();
				this.state = 1162;
				this.nls();
				this.state = 1163;
				this.statement();
				}
				break;
			case NextflowConfigParser.DO:
				_localctx = new DoWhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1165;
				this.match(NextflowConfigParser.DO);
				this.state = 1166;
				this.nls();
				this.state = 1167;
				this.statement();
				this.state = 1168;
				this.nls();
				this.state = 1169;
				this.match(NextflowConfigParser.WHILE);
				this.state = 1170;
				this.expressionInPar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, NextflowConfigParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this.match(NextflowConfigParser.CONTINUE);
			this.state = 1176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1175;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, NextflowConfigParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1178;
			this.match(NextflowConfigParser.BREAK);
			this.state = 1180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1179;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, NextflowConfigParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1182;
			this.match(NextflowConfigParser.YIELD);
			this.state = 1183;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchStatement(): TryCatchStatementContext {
		let _localctx: TryCatchStatementContext = new TryCatchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, NextflowConfigParser.RULE_tryCatchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this.match(NextflowConfigParser.TRY);
			this.state = 1187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1186;
				this.resources();
				}
				break;
			}
			this.state = 1189;
			this.nls();
			this.state = 1190;
			this.block();
			this.state = 1196;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1191;
					this.nls();
					this.state = 1192;
					this.catchClause();
					}
					}
				}
				this.state = 1198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			}
			this.state = 1202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1199;
				this.nls();
				this.state = 1200;
				this.finallyBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, NextflowConfigParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1204;
			this.match(NextflowConfigParser.ASSERT);
			this.state = 1205;
			_localctx._ce = this.expression(0);
			this.state = 1211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1206;
				this.nls();
				this.state = 1207;
				_la = this._input.LA(1);
				if (!(_la === NextflowConfigParser.COMMA || _la === NextflowConfigParser.COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1208;
				this.nls();
				this.state = 1209;
				_localctx._me = this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, NextflowConfigParser.RULE_statement);
		try {
			this.state = 1241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				_localctx = new BlockStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1213;
				this.block();
				}
				break;

			case 2:
				_localctx = new ConditionalStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1214;
				this.conditionalStatement();
				}
				break;

			case 3:
				_localctx = new LoopStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1215;
				this.loopStatement();
				}
				break;

			case 4:
				_localctx = new TryCatchStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1216;
				this.tryCatchStatement();
				}
				break;

			case 5:
				_localctx = new SynchronizedStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1217;
				this.match(NextflowConfigParser.SYNCHRONIZED);
				this.state = 1218;
				this.expressionInPar();
				this.state = 1219;
				this.nls();
				this.state = 1220;
				this.block();
				}
				break;

			case 6:
				_localctx = new ReturnStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1222;
				this.match(NextflowConfigParser.RETURN);
				this.state = 1224;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1223;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new ThrowStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1226;
				this.match(NextflowConfigParser.THROW);
				this.state = 1227;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new BreakStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1228;
				this.breakStatement();
				}
				break;

			case 9:
				_localctx = new ContinueStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1229;
				this.continueStatement();
				}
				break;

			case 10:
				_localctx = new YieldStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1230;
				if (!( this.inSwitchExpressionLevel > 0 )) {
					throw this.createFailedPredicateException(" this.inSwitchExpressionLevel > 0 ");
				}
				this.state = 1231;
				this.yieldStatement();
				}
				break;

			case 11:
				_localctx = new LabeledStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1232;
				this.identifier();
				this.state = 1233;
				this.match(NextflowConfigParser.COLON);
				this.state = 1234;
				this.nls();
				this.state = 1235;
				this.statement();
				}
				break;

			case 12:
				_localctx = new AssertStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1237;
				this.assertStatement();
				}
				break;

			case 13:
				_localctx = new LocalVariableDeclarationStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1238;
				this.localVariableDeclaration();
				}
				break;

			case 14:
				_localctx = new ExpressionStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1239;
				this.statementExpression();
				}
				break;

			case 15:
				_localctx = new EmptyStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1240;
				this.match(NextflowConfigParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, NextflowConfigParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.match(NextflowConfigParser.CATCH);
			this.state = 1244;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1245;
			this.variableModifiersOpt();
			this.state = 1247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1246;
				this.catchType();
				}
				break;
			}
			this.state = 1249;
			this.identifier();
			this.state = 1250;
			this.rparen();
			this.state = 1251;
			this.nls();
			this.state = 1252;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, NextflowConfigParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this.qualifiedClassName();
			this.state = 1259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.BITOR) {
				{
				{
				this.state = 1255;
				this.match(NextflowConfigParser.BITOR);
				this.state = 1256;
				this.qualifiedClassName();
				}
				}
				this.state = 1261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, NextflowConfigParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.match(NextflowConfigParser.FINALLY);
			this.state = 1263;
			this.nls();
			this.state = 1264;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, NextflowConfigParser.RULE_resources);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1267;
			this.nls();
			this.state = 1268;
			this.resourceList();
			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.SEMI || _la === NextflowConfigParser.NL) {
				{
				this.state = 1269;
				this.sep();
				}
			}

			this.state = 1272;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		let _localctx: ResourceListContext = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, NextflowConfigParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this.resource();
			this.state = 1280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1275;
					this.sep();
					this.state = 1276;
					this.resource();
					}
					}
				}
				this.state = 1282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, NextflowConfigParser.RULE_resource);
		try {
			this.state = 1285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1283;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1284;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, NextflowConfigParser.RULE_switchBlockStatementGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.switchLabel();
			this.state = 1293;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1288;
					this.nls();
					this.state = 1289;
					this.switchLabel();
					}
					}
				}
				this.state = 1295;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
			}
			this.state = 1296;
			this.nls();
			this.state = 1297;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, NextflowConfigParser.RULE_switchLabel);
		try {
			this.state = 1305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1299;
				this.match(NextflowConfigParser.CASE);
				this.state = 1300;
				this.expression(0);
				this.state = 1301;
				this.match(NextflowConfigParser.COLON);
				}
				break;
			case NextflowConfigParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1303;
				this.match(NextflowConfigParser.DEFAULT);
				this.state = 1304;
				this.match(NextflowConfigParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, NextflowConfigParser.RULE_forControl);
		try {
			this.state = 1309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1307;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1308;
				this.classicalForControl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, NextflowConfigParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.variableModifiersOpt();
			this.state = 1313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1312;
				this.type();
				}
				break;
			}
			this.state = 1315;
			this.variableDeclaratorId();
			this.state = 1316;
			_la = this._input.LA(1);
			if (!(_la === NextflowConfigParser.IN || _la === NextflowConfigParser.COLON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1317;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classicalForControl(): ClassicalForControlContext {
		let _localctx: ClassicalForControlContext = new ClassicalForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, NextflowConfigParser.RULE_classicalForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1319;
				this.forInit();
				}
				break;
			}
			this.state = 1322;
			this.match(NextflowConfigParser.SEMI);
			this.state = 1324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1323;
				this.expression(0);
				}
				break;
			}
			this.state = 1326;
			this.match(NextflowConfigParser.SEMI);
			this.state = 1328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1327;
				this.forUpdate();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, NextflowConfigParser.RULE_forInit);
		try {
			this.state = 1332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1330;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1331;
				this.expressionList(false);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, NextflowConfigParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1334;
			this.expressionList(false);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castParExpression(): CastParExpressionContext {
		let _localctx: CastParExpressionContext = new CastParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, NextflowConfigParser.RULE_castParExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1336;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1337;
			this.type();
			this.state = 1338;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, NextflowConfigParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1340;
			this.expressionInPar();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionInPar(): ExpressionInParContext {
		let _localctx: ExpressionInParContext = new ExpressionInParContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, NextflowConfigParser.RULE_expressionInPar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1343;
			this.enhancedStatementExpression();
			this.state = 1344;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(canSpread: boolean): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state, canSpread);
		this.enterRule(_localctx, 238, NextflowConfigParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.expressionListElement(_localctx.canSpread);
			this.state = 1353;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1347;
					this.match(NextflowConfigParser.COMMA);
					this.state = 1348;
					this.nls();
					this.state = 1349;
					this.expressionListElement(_localctx.canSpread);
					}
					}
				}
				this.state = 1355;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionListElement(canSpread: boolean): ExpressionListElementContext {
		let _localctx: ExpressionListElementContext = new ExpressionListElementContext(this._ctx, this.state, canSpread);
		this.enterRule(_localctx, 240, NextflowConfigParser.RULE_expressionListElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1356;
				this.match(NextflowConfigParser.MUL);
				}
				break;
			}
			this.state = 1359;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		let _localctx: EnhancedStatementExpressionContext = new EnhancedStatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, NextflowConfigParser.RULE_enhancedStatementExpression);
		try {
			this.state = 1363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1361;
				this.statementExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1362;
				this.standardLambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, NextflowConfigParser.RULE_statementExpression);
		try {
			_localctx = new CommandExprAltContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1365;
			this.commandExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, NextflowConfigParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			this.pathExpression();
			this.state = 1369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1368;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === NextflowConfigParser.INC || _la === NextflowConfigParser.DEC)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		let _localctx: SwitchExpressionContext = new SwitchExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, NextflowConfigParser.RULE_switchExpression);

		    this.inSwitchExpressionLevel++;

		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.match(NextflowConfigParser.SWITCH);
			this.state = 1372;
			this.expressionInPar();
			this.state = 1373;
			this.nls();
			this.state = 1374;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 1375;
			this.nls();
			this.state = 1379;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1376;
					this.switchBlockStatementExpressionGroup();
					}
					}
				}
				this.state = 1381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			}
			this.state = 1382;
			this.nls();
			this.state = 1383;
			this.match(NextflowConfigParser.RBRACE);
			}
			this._ctx._stop = this._input.tryLT(-1);

			    this.inSwitchExpressionLevel--;

		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementExpressionGroup(): SwitchBlockStatementExpressionGroupContext {
		let _localctx: SwitchBlockStatementExpressionGroupContext = new SwitchBlockStatementExpressionGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, NextflowConfigParser.RULE_switchBlockStatementExpressionGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1385;
					this.switchExpressionLabel();
					this.state = 1386;
					this.nls();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1392;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchExpressionLabel(): SwitchExpressionLabelContext {
		let _localctx: SwitchExpressionLabelContext = new SwitchExpressionLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, NextflowConfigParser.RULE_switchExpressionLabel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.CASE:
				{
				this.state = 1394;
				this.match(NextflowConfigParser.CASE);
				this.state = 1395;
				this.expressionList(true);
				}
				break;
			case NextflowConfigParser.DEFAULT:
				{
				this.state = 1396;
				this.match(NextflowConfigParser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1399;
			_localctx._ac = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === NextflowConfigParser.ARROW || _la === NextflowConfigParser.COLON)) {
				_localctx._ac = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 254;
		this.enterRecursionRule(_localctx, 254, NextflowConfigParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				_localctx = new CastExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1402;
				this.castParExpression();
				this.state = 1403;
				this.castOperandExpression();
				}
				break;

			case 2:
				{
				_localctx = new PostfixExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1405;
				this.postfixExpression();
				}
				break;

			case 3:
				{
				_localctx = new SwitchExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1406;
				this.switchExpression();
				}
				break;

			case 4:
				{
				_localctx = new UnaryNotExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1407;
				_la = this._input.LA(1);
				if (!(_la === NextflowConfigParser.NOT || _la === NextflowConfigParser.BITNOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1408;
				this.nls();
				this.state = 1409;
				this.expression(18);
				}
				break;

			case 5:
				{
				_localctx = new UnaryAddExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1411;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (NextflowConfigParser.INC - 108)) | (1 << (NextflowConfigParser.DEC - 108)) | (1 << (NextflowConfigParser.ADD - 108)) | (1 << (NextflowConfigParser.SUB - 108)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1412;
				this.expression(16);
				}
				break;

			case 6:
				{
				_localctx = new MultipleAssignmentExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1413;
				(_localctx as MultipleAssignmentExprAltContext)._left = this.variableNames();
				this.state = 1414;
				this.nls();
				this.state = 1415;
				(_localctx as MultipleAssignmentExprAltContext)._op = this.match(NextflowConfigParser.ASSIGN);
				this.state = 1416;
				this.nls();
				this.state = 1417;
				(_localctx as MultipleAssignmentExprAltContext)._right = this.statementExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1531;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1529;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1421;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1422;
						(_localctx as PowerExprAltContext)._op = this.match(NextflowConfigParser.POWER);
						this.state = 1423;
						this.nls();
						this.state = 1424;
						(_localctx as PowerExprAltContext)._right = this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1426;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1427;
						this.nls();
						this.state = 1428;
						(_localctx as MultiplicativeExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (NextflowConfigParser.MUL - 112)) | (1 << (NextflowConfigParser.DIV - 112)) | (1 << (NextflowConfigParser.MOD - 112)))) !== 0))) {
							(_localctx as MultiplicativeExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1429;
						this.nls();
						this.state = 1430;
						(_localctx as MultiplicativeExprAltContext)._right = this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1432;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1433;
						(_localctx as AdditiveExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowConfigParser.ADD || _la === NextflowConfigParser.SUB)) {
							(_localctx as AdditiveExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1434;
						this.nls();
						this.state = 1435;
						(_localctx as AdditiveExprAltContext)._right = this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new ShiftExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ShiftExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1437;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1438;
						this.nls();
						this.state = 1449;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowConfigParser.GT:
						case NextflowConfigParser.LT:
							{
							this.state = 1446;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
							case 1:
								{
								this.state = 1439;
								(_localctx as ShiftExprAltContext)._dlOp = this.match(NextflowConfigParser.LT);
								this.state = 1440;
								this.match(NextflowConfigParser.LT);
								}
								break;

							case 2:
								{
								this.state = 1441;
								(_localctx as ShiftExprAltContext)._tgOp = this.match(NextflowConfigParser.GT);
								this.state = 1442;
								this.match(NextflowConfigParser.GT);
								this.state = 1443;
								this.match(NextflowConfigParser.GT);
								}
								break;

							case 3:
								{
								this.state = 1444;
								(_localctx as ShiftExprAltContext)._dgOp = this.match(NextflowConfigParser.GT);
								this.state = 1445;
								this.match(NextflowConfigParser.GT);
								}
								break;
							}
							}
							break;
						case NextflowConfigParser.RANGE_INCLUSIVE:
						case NextflowConfigParser.RANGE_EXCLUSIVE_LEFT:
						case NextflowConfigParser.RANGE_EXCLUSIVE_RIGHT:
						case NextflowConfigParser.RANGE_EXCLUSIVE_FULL:
							{
							this.state = 1448;
							(_localctx as ShiftExprAltContext)._rangeOp = this._input.LT(1);
							_la = this._input.LA(1);
							if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (NextflowConfigParser.RANGE_INCLUSIVE - 65)) | (1 << (NextflowConfigParser.RANGE_EXCLUSIVE_LEFT - 65)) | (1 << (NextflowConfigParser.RANGE_EXCLUSIVE_RIGHT - 65)) | (1 << (NextflowConfigParser.RANGE_EXCLUSIVE_FULL - 65)))) !== 0))) {
								(_localctx as ShiftExprAltContext)._rangeOp = this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1451;
						this.nls();
						this.state = 1452;
						(_localctx as ShiftExprAltContext)._right = this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1454;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1455;
						this.nls();
						this.state = 1456;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowConfigParser.IN || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (NextflowConfigParser.NOT_IN - 85)) | (1 << (NextflowConfigParser.GT - 85)) | (1 << (NextflowConfigParser.LT - 85)) | (1 << (NextflowConfigParser.LE - 85)) | (1 << (NextflowConfigParser.GE - 85)))) !== 0))) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1457;
						this.nls();
						this.state = 1458;
						(_localctx as RelationalExprAltContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1460;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1461;
						this.nls();
						this.state = 1462;
						(_localctx as EqualityExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (NextflowConfigParser.SPACESHIP - 80)) | (1 << (NextflowConfigParser.IDENTICAL - 80)) | (1 << (NextflowConfigParser.NOT_IDENTICAL - 80)) | (1 << (NextflowConfigParser.EQUAL - 80)) | (1 << (NextflowConfigParser.NOTEQUAL - 80)))) !== 0))) {
							(_localctx as EqualityExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1463;
						this.nls();
						this.state = 1464;
						(_localctx as EqualityExprAltContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RegexExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RegexExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1466;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1467;
						this.nls();
						this.state = 1468;
						(_localctx as RegexExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowConfigParser.REGEX_FIND || _la === NextflowConfigParser.REGEX_MATCH)) {
							(_localctx as RegexExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1469;
						this.nls();
						this.state = 1470;
						(_localctx as RegexExprAltContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new AndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1472;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1473;
						this.nls();
						this.state = 1474;
						(_localctx as AndExprAltContext)._op = this.match(NextflowConfigParser.BITAND);
						this.state = 1475;
						this.nls();
						this.state = 1476;
						(_localctx as AndExprAltContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ExclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1478;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1479;
						this.nls();
						this.state = 1480;
						(_localctx as ExclusiveOrExprAltContext)._op = this.match(NextflowConfigParser.XOR);
						this.state = 1481;
						this.nls();
						this.state = 1482;
						(_localctx as ExclusiveOrExprAltContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new InclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1484;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1485;
						this.nls();
						this.state = 1486;
						(_localctx as InclusiveOrExprAltContext)._op = this.match(NextflowConfigParser.BITOR);
						this.state = 1487;
						this.nls();
						this.state = 1488;
						(_localctx as InclusiveOrExprAltContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1490;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1491;
						this.nls();
						this.state = 1492;
						(_localctx as LogicalAndExprAltContext)._op = this.match(NextflowConfigParser.AND);
						this.state = 1493;
						this.nls();
						this.state = 1494;
						(_localctx as LogicalAndExprAltContext)._right = this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1496;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1497;
						this.nls();
						this.state = 1498;
						(_localctx as LogicalOrExprAltContext)._op = this.match(NextflowConfigParser.OR);
						this.state = 1499;
						this.nls();
						this.state = 1500;
						(_localctx as LogicalOrExprAltContext)._right = this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ConditionalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConditionalExprAltContext)._con = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1502;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1503;
						this.nls();
						this.state = 1513;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowConfigParser.QUESTION:
							{
							this.state = 1504;
							this.match(NextflowConfigParser.QUESTION);
							this.state = 1505;
							this.nls();
							this.state = 1506;
							(_localctx as ConditionalExprAltContext)._tb = this.expression(0);
							this.state = 1507;
							this.nls();
							this.state = 1508;
							this.match(NextflowConfigParser.COLON);
							this.state = 1509;
							this.nls();
							}
							break;
						case NextflowConfigParser.ELVIS:
							{
							this.state = 1511;
							this.match(NextflowConfigParser.ELVIS);
							this.state = 1512;
							this.nls();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1515;
						(_localctx as ConditionalExprAltContext)._fb = this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1517;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1518;
						this.nls();
						this.state = 1519;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowConfigParser.AS || _la === NextflowConfigParser.INSTANCEOF || _la === NextflowConfigParser.NOT_INSTANCEOF)) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1520;
						this.nls();
						this.state = 1521;
						this.type();
						}
						break;

					case 15:
						{
						_localctx = new AssignmentExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignmentExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowConfigParser.RULE_expression);
						this.state = 1523;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1524;
						this.nls();
						this.state = 1525;
						(_localctx as AssignmentExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowConfigParser.POWER_ASSIGN || _la === NextflowConfigParser.ASSIGN || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (NextflowConfigParser.ADD_ASSIGN - 118)) | (1 << (NextflowConfigParser.SUB_ASSIGN - 118)) | (1 << (NextflowConfigParser.MUL_ASSIGN - 118)) | (1 << (NextflowConfigParser.DIV_ASSIGN - 118)) | (1 << (NextflowConfigParser.AND_ASSIGN - 118)) | (1 << (NextflowConfigParser.OR_ASSIGN - 118)) | (1 << (NextflowConfigParser.XOR_ASSIGN - 118)) | (1 << (NextflowConfigParser.MOD_ASSIGN - 118)) | (1 << (NextflowConfigParser.LSHIFT_ASSIGN - 118)) | (1 << (NextflowConfigParser.RSHIFT_ASSIGN - 118)) | (1 << (NextflowConfigParser.URSHIFT_ASSIGN - 118)) | (1 << (NextflowConfigParser.ELVIS_ASSIGN - 118)))) !== 0))) {
							(_localctx as AssignmentExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1526;
						this.nls();
						this.state = 1527;
						(_localctx as AssignmentExprAltContext)._right = this.enhancedStatementExpression();
						}
						break;
					}
					}
				}
				this.state = 1533;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castOperandExpression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, NextflowConfigParser.RULE_castOperandExpression);
		let _la: number;
		try {
			this.state = 1544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				_localctx = new CastExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1534;
				this.castParExpression();
				this.state = 1535;
				this.castOperandExpression();
				}
				break;

			case 2:
				_localctx = new PostfixExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1537;
				this.postfixExpression();
				}
				break;

			case 3:
				_localctx = new UnaryNotExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1538;
				_la = this._input.LA(1);
				if (!(_la === NextflowConfigParser.NOT || _la === NextflowConfigParser.BITNOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1539;
				this.nls();
				this.state = 1540;
				this.castOperandExpression();
				}
				break;

			case 4:
				_localctx = new UnaryAddExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1542;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (NextflowConfigParser.INC - 108)) | (1 << (NextflowConfigParser.DEC - 108)) | (1 << (NextflowConfigParser.ADD - 108)) | (1 << (NextflowConfigParser.SUB - 108)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1543;
				this.castOperandExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandExpression(): CommandExpressionContext {
		let _localctx: CommandExpressionContext = new CommandExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, NextflowConfigParser.RULE_commandExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1546;
			_localctx._expression = this.expression(0);
			this.state = 1550;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1547;
				if (!( !GroovyParser.isFollowingArgumentsOrClosure(_localctx._expression) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isFollowingArgumentsOrClosure($expression.ctx) ");
				}
				this.state = 1548;
				this.argumentList();
				}
				break;

			case 2:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 1555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1552;
					this.commandArgument();
					}
					}
				}
				this.state = 1557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandArgument(): CommandArgumentContext {
		let _localctx: CommandArgumentContext = new CommandArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, NextflowConfigParser.RULE_commandArgument);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.commandPrimary();
			this.state = 1565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1560;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1559;
						this.pathElement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1562;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				{
				this.state = 1564;
				this.argumentList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathExpression(): PathExpressionContext {
		let _localctx: PathExpressionContext = new PathExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, NextflowConfigParser.RULE_pathExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1567;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1568;
				if (!( this._input.LT(2).type == GroovyParser.DOT )) {
					throw this.createFailedPredicateException(" this._input.LT(2).type == GroovyParser.DOT ");
				}
				this.state = 1569;
				this.match(NextflowConfigParser.STATIC);
				}
				break;
			}
			this.state = 1577;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1572;
					_localctx._pathElement = this.pathElement();
					 _localctx.t =  _localctx._pathElement.t; 
					}
					}
				}
				this.state = 1579;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathElement(): PathElementContext {
		let _localctx: PathElementContext = new PathElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, NextflowConfigParser.RULE_pathElement);
		let _la: number;
		try {
			this.state = 1616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1580;
				this.nls();
				this.state = 1605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
				case 1:
					{
					this.state = 1581;
					this.match(NextflowConfigParser.DOT);
					this.state = 1582;
					this.nls();
					this.state = 1583;
					this.match(NextflowConfigParser.NEW);
					this.state = 1584;
					this.creator(1);
					 _localctx.t =  6; 
					}
					break;

				case 2:
					{
					this.state = 1597;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case NextflowConfigParser.SPREAD_DOT:
					case NextflowConfigParser.SAFE_DOT:
					case NextflowConfigParser.SAFE_CHAIN_DOT:
					case NextflowConfigParser.DOT:
						{
						this.state = 1587;
						_la = this._input.LA(1);
						if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (NextflowConfigParser.SPREAD_DOT - 69)) | (1 << (NextflowConfigParser.SAFE_DOT - 69)) | (1 << (NextflowConfigParser.SAFE_CHAIN_DOT - 69)) | (1 << (NextflowConfigParser.DOT - 69)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1588;
						this.nls();
						this.state = 1591;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowConfigParser.AT:
							{
							this.state = 1589;
							this.match(NextflowConfigParser.AT);
							}
							break;
						case NextflowConfigParser.LT:
							{
							this.state = 1590;
							this.nonWildcardTypeArguments();
							}
							break;
						case NextflowConfigParser.StringLiteral:
						case NextflowConfigParser.GStringBegin:
						case NextflowConfigParser.AS:
						case NextflowConfigParser.DEF:
						case NextflowConfigParser.IN:
						case NextflowConfigParser.TRAIT:
						case NextflowConfigParser.THREADSAFE:
						case NextflowConfigParser.VAR:
						case NextflowConfigParser.BuiltInPrimitiveType:
						case NextflowConfigParser.ABSTRACT:
						case NextflowConfigParser.ASSERT:
						case NextflowConfigParser.BREAK:
						case NextflowConfigParser.YIELD:
						case NextflowConfigParser.CASE:
						case NextflowConfigParser.CATCH:
						case NextflowConfigParser.CLASS:
						case NextflowConfigParser.CONST:
						case NextflowConfigParser.CONTINUE:
						case NextflowConfigParser.DEFAULT:
						case NextflowConfigParser.DO:
						case NextflowConfigParser.ELSE:
						case NextflowConfigParser.ENUM:
						case NextflowConfigParser.EXTENDS:
						case NextflowConfigParser.FINAL:
						case NextflowConfigParser.FINALLY:
						case NextflowConfigParser.FOR:
						case NextflowConfigParser.IF:
						case NextflowConfigParser.GOTO:
						case NextflowConfigParser.IMPLEMENTS:
						case NextflowConfigParser.IMPORT:
						case NextflowConfigParser.INSTANCEOF:
						case NextflowConfigParser.INTERFACE:
						case NextflowConfigParser.NATIVE:
						case NextflowConfigParser.NEW:
						case NextflowConfigParser.NON_SEALED:
						case NextflowConfigParser.PACKAGE:
						case NextflowConfigParser.PERMITS:
						case NextflowConfigParser.PRIVATE:
						case NextflowConfigParser.PROTECTED:
						case NextflowConfigParser.PUBLIC:
						case NextflowConfigParser.RECORD:
						case NextflowConfigParser.RETURN:
						case NextflowConfigParser.SEALED:
						case NextflowConfigParser.STATIC:
						case NextflowConfigParser.STRICTFP:
						case NextflowConfigParser.SUPER:
						case NextflowConfigParser.SWITCH:
						case NextflowConfigParser.SYNCHRONIZED:
						case NextflowConfigParser.THIS:
						case NextflowConfigParser.THROW:
						case NextflowConfigParser.THROWS:
						case NextflowConfigParser.TRANSIENT:
						case NextflowConfigParser.TRY:
						case NextflowConfigParser.VOID:
						case NextflowConfigParser.VOLATILE:
						case NextflowConfigParser.WHILE:
						case NextflowConfigParser.BooleanLiteral:
						case NextflowConfigParser.NullLiteral:
						case NextflowConfigParser.LPAREN:
						case NextflowConfigParser.CapitalizedIdentifier:
						case NextflowConfigParser.Identifier:
							break;
						default:
							break;
						}
						}
						break;
					case NextflowConfigParser.METHOD_POINTER:
						{
						this.state = 1593;
						this.match(NextflowConfigParser.METHOD_POINTER);
						this.state = 1594;
						this.nls();
						}
						break;
					case NextflowConfigParser.METHOD_REFERENCE:
						{
						this.state = 1595;
						this.match(NextflowConfigParser.METHOD_REFERENCE);
						this.state = 1596;
						this.nls();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1599;
					this.namePart();
					 _localctx.t =  1; 
					}
					break;

				case 3:
					{
					this.state = 1602;
					this.closureOrLambdaExpression();
					 _localctx.t =  3; 
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1607;
				this.arguments();
				 _localctx.t =  2; 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1610;
				this.indexPropertyArgs();
				 _localctx.t =  4; 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1613;
				this.namedPropertyArgs();
				 _localctx.t =  5; 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namePart(): NamePartContext {
		let _localctx: NamePartContext = new NamePartContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, NextflowConfigParser.RULE_namePart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1618;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 1619;
				this.stringLiteral();
				}
				break;

			case 3:
				{
				this.state = 1620;
				this.dynamicMemberName();
				}
				break;

			case 4:
				{
				this.state = 1621;
				this.keywords();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicMemberName(): DynamicMemberNameContext {
		let _localctx: DynamicMemberNameContext = new DynamicMemberNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, NextflowConfigParser.RULE_dynamicMemberName);
		try {
			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1624;
				this.parExpression();
				}
				break;
			case NextflowConfigParser.GStringBegin:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1625;
				this.gstring();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexPropertyArgs(): IndexPropertyArgsContext {
		let _localctx: IndexPropertyArgsContext = new IndexPropertyArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, NextflowConfigParser.RULE_indexPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			_la = this._input.LA(1);
			if (!(_la === NextflowConfigParser.SAFE_INDEX || _la === NextflowConfigParser.LBRACK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1629;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1632;
			this.match(NextflowConfigParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedPropertyArgs(): NamedPropertyArgsContext {
		let _localctx: NamedPropertyArgsContext = new NamedPropertyArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, NextflowConfigParser.RULE_namedPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1634;
			_la = this._input.LA(1);
			if (!(_la === NextflowConfigParser.SAFE_INDEX || _la === NextflowConfigParser.LBRACK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.GStringBegin:
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.THREADSAFE:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.BuiltInPrimitiveType:
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.ASSERT:
			case NextflowConfigParser.BREAK:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.CASE:
			case NextflowConfigParser.CATCH:
			case NextflowConfigParser.CLASS:
			case NextflowConfigParser.CONST:
			case NextflowConfigParser.CONTINUE:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.DO:
			case NextflowConfigParser.ELSE:
			case NextflowConfigParser.ENUM:
			case NextflowConfigParser.EXTENDS:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.FINALLY:
			case NextflowConfigParser.FOR:
			case NextflowConfigParser.IF:
			case NextflowConfigParser.GOTO:
			case NextflowConfigParser.IMPLEMENTS:
			case NextflowConfigParser.IMPORT:
			case NextflowConfigParser.INSTANCEOF:
			case NextflowConfigParser.INTERFACE:
			case NextflowConfigParser.NATIVE:
			case NextflowConfigParser.NEW:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PACKAGE:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.RETURN:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
			case NextflowConfigParser.SUPER:
			case NextflowConfigParser.SWITCH:
			case NextflowConfigParser.SYNCHRONIZED:
			case NextflowConfigParser.THIS:
			case NextflowConfigParser.THROW:
			case NextflowConfigParser.THROWS:
			case NextflowConfigParser.TRANSIENT:
			case NextflowConfigParser.TRY:
			case NextflowConfigParser.VOID:
			case NextflowConfigParser.VOLATILE:
			case NextflowConfigParser.WHILE:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
			case NextflowConfigParser.LPAREN:
			case NextflowConfigParser.MUL:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				{
				this.state = 1635;
				this.namedPropertyArgList();
				}
				break;
			case NextflowConfigParser.COLON:
				{
				this.state = 1636;
				this.match(NextflowConfigParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1639;
			this.match(NextflowConfigParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, NextflowConfigParser.RULE_primary);
		try {
			this.state = 1658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1641;
				this.identifier();
				this.state = 1643;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
				case 1:
					{
					this.state = 1642;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1645;
				this.literal();
				}
				break;

			case 3:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1646;
				this.gstring();
				}
				break;

			case 4:
				_localctx = new NewPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1647;
				this.match(NextflowConfigParser.NEW);
				this.state = 1648;
				this.nls();
				this.state = 1649;
				this.creator(0);
				}
				break;

			case 5:
				_localctx = new ThisPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1651;
				this.match(NextflowConfigParser.THIS);
				}
				break;

			case 6:
				_localctx = new SuperPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1652;
				this.match(NextflowConfigParser.SUPER);
				}
				break;

			case 7:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1653;
				this.parExpression();
				}
				break;

			case 8:
				_localctx = new ClosureOrLambdaExpressionPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1654;
				this.closureOrLambdaExpression();
				}
				break;

			case 9:
				_localctx = new ListPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1655;
				this.list();
				}
				break;

			case 10:
				_localctx = new MapPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1656;
				this.map();
				}
				break;

			case 11:
				_localctx = new BuiltInTypePrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1657;
				this.builtInType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedPropertyArgPrimary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, NextflowConfigParser.RULE_namedPropertyArgPrimary);
		try {
			this.state = 1664;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AS:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1660;
				this.identifier();
				}
				break;
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1661;
				this.literal();
				}
				break;
			case NextflowConfigParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1662;
				this.gstring();
				}
				break;
			case NextflowConfigParser.LPAREN:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1663;
				this.parExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArgPrimary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, NextflowConfigParser.RULE_namedArgPrimary);
		try {
			this.state = 1669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AS:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1666;
				this.identifier();
				}
				break;
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1667;
				this.literal();
				}
				break;
			case NextflowConfigParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1668;
				this.gstring();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandPrimary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, NextflowConfigParser.RULE_commandPrimary);
		try {
			this.state = 1674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.AS:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1671;
				this.identifier();
				}
				break;
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1672;
				this.literal();
				}
				break;
			case NextflowConfigParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1673;
				this.gstring();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, NextflowConfigParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.match(NextflowConfigParser.LBRACK);
			this.state = 1678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1677;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.COMMA) {
				{
				this.state = 1680;
				this.match(NextflowConfigParser.COMMA);
				}
			}

			this.state = 1683;
			this.match(NextflowConfigParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, NextflowConfigParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1685;
			this.match(NextflowConfigParser.LBRACK);
			this.state = 1691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.GStringBegin:
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.THREADSAFE:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.BuiltInPrimitiveType:
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.ASSERT:
			case NextflowConfigParser.BREAK:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.CASE:
			case NextflowConfigParser.CATCH:
			case NextflowConfigParser.CLASS:
			case NextflowConfigParser.CONST:
			case NextflowConfigParser.CONTINUE:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.DO:
			case NextflowConfigParser.ELSE:
			case NextflowConfigParser.ENUM:
			case NextflowConfigParser.EXTENDS:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.FINALLY:
			case NextflowConfigParser.FOR:
			case NextflowConfigParser.IF:
			case NextflowConfigParser.GOTO:
			case NextflowConfigParser.IMPLEMENTS:
			case NextflowConfigParser.IMPORT:
			case NextflowConfigParser.INSTANCEOF:
			case NextflowConfigParser.INTERFACE:
			case NextflowConfigParser.NATIVE:
			case NextflowConfigParser.NEW:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PACKAGE:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.RETURN:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
			case NextflowConfigParser.SUPER:
			case NextflowConfigParser.SWITCH:
			case NextflowConfigParser.SYNCHRONIZED:
			case NextflowConfigParser.THIS:
			case NextflowConfigParser.THROW:
			case NextflowConfigParser.THROWS:
			case NextflowConfigParser.TRANSIENT:
			case NextflowConfigParser.TRY:
			case NextflowConfigParser.VOID:
			case NextflowConfigParser.VOLATILE:
			case NextflowConfigParser.WHILE:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
			case NextflowConfigParser.LPAREN:
			case NextflowConfigParser.LBRACE:
			case NextflowConfigParser.LBRACK:
			case NextflowConfigParser.MUL:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				{
				this.state = 1686;
				this.mapEntryList();
				this.state = 1688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowConfigParser.COMMA) {
					{
					this.state = 1687;
					this.match(NextflowConfigParser.COMMA);
					}
				}

				}
				break;
			case NextflowConfigParser.COLON:
				{
				this.state = 1690;
				this.match(NextflowConfigParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1693;
			this.match(NextflowConfigParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapEntryList(): MapEntryListContext {
		let _localctx: MapEntryListContext = new MapEntryListContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, NextflowConfigParser.RULE_mapEntryList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1695;
			this.mapEntry();
			this.state = 1700;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1696;
					this.match(NextflowConfigParser.COMMA);
					this.state = 1697;
					this.mapEntry();
					}
					}
				}
				this.state = 1702;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedPropertyArgList(): MapEntryListContext {
		let _localctx: MapEntryListContext = new MapEntryListContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, NextflowConfigParser.RULE_namedPropertyArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1703;
			this.namedPropertyArg();
			this.state = 1708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowConfigParser.COMMA) {
				{
				{
				this.state = 1704;
				this.match(NextflowConfigParser.COMMA);
				this.state = 1705;
				this.namedPropertyArg();
				}
				}
				this.state = 1710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapEntry(): MapEntryContext {
		let _localctx: MapEntryContext = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, NextflowConfigParser.RULE_mapEntry);
		try {
			this.state = 1721;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.GStringBegin:
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.THREADSAFE:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.BuiltInPrimitiveType:
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.ASSERT:
			case NextflowConfigParser.BREAK:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.CASE:
			case NextflowConfigParser.CATCH:
			case NextflowConfigParser.CLASS:
			case NextflowConfigParser.CONST:
			case NextflowConfigParser.CONTINUE:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.DO:
			case NextflowConfigParser.ELSE:
			case NextflowConfigParser.ENUM:
			case NextflowConfigParser.EXTENDS:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.FINALLY:
			case NextflowConfigParser.FOR:
			case NextflowConfigParser.IF:
			case NextflowConfigParser.GOTO:
			case NextflowConfigParser.IMPLEMENTS:
			case NextflowConfigParser.IMPORT:
			case NextflowConfigParser.INSTANCEOF:
			case NextflowConfigParser.INTERFACE:
			case NextflowConfigParser.NATIVE:
			case NextflowConfigParser.NEW:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PACKAGE:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.RETURN:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
			case NextflowConfigParser.SUPER:
			case NextflowConfigParser.SWITCH:
			case NextflowConfigParser.SYNCHRONIZED:
			case NextflowConfigParser.THIS:
			case NextflowConfigParser.THROW:
			case NextflowConfigParser.THROWS:
			case NextflowConfigParser.TRANSIENT:
			case NextflowConfigParser.TRY:
			case NextflowConfigParser.VOID:
			case NextflowConfigParser.VOLATILE:
			case NextflowConfigParser.WHILE:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
			case NextflowConfigParser.LPAREN:
			case NextflowConfigParser.LBRACE:
			case NextflowConfigParser.LBRACK:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1711;
				this.mapEntryLabel();
				this.state = 1712;
				this.match(NextflowConfigParser.COLON);
				this.state = 1713;
				this.nls();
				this.state = 1714;
				this.expression(0);
				}
				break;
			case NextflowConfigParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1716;
				this.match(NextflowConfigParser.MUL);
				this.state = 1717;
				this.match(NextflowConfigParser.COLON);
				this.state = 1718;
				this.nls();
				this.state = 1719;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedPropertyArg(): MapEntryContext {
		let _localctx: MapEntryContext = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, NextflowConfigParser.RULE_namedPropertyArg);
		try {
			this.state = 1733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.GStringBegin:
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.THREADSAFE:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.BuiltInPrimitiveType:
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.ASSERT:
			case NextflowConfigParser.BREAK:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.CASE:
			case NextflowConfigParser.CATCH:
			case NextflowConfigParser.CLASS:
			case NextflowConfigParser.CONST:
			case NextflowConfigParser.CONTINUE:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.DO:
			case NextflowConfigParser.ELSE:
			case NextflowConfigParser.ENUM:
			case NextflowConfigParser.EXTENDS:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.FINALLY:
			case NextflowConfigParser.FOR:
			case NextflowConfigParser.IF:
			case NextflowConfigParser.GOTO:
			case NextflowConfigParser.IMPLEMENTS:
			case NextflowConfigParser.IMPORT:
			case NextflowConfigParser.INSTANCEOF:
			case NextflowConfigParser.INTERFACE:
			case NextflowConfigParser.NATIVE:
			case NextflowConfigParser.NEW:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PACKAGE:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.RETURN:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
			case NextflowConfigParser.SUPER:
			case NextflowConfigParser.SWITCH:
			case NextflowConfigParser.SYNCHRONIZED:
			case NextflowConfigParser.THIS:
			case NextflowConfigParser.THROW:
			case NextflowConfigParser.THROWS:
			case NextflowConfigParser.TRANSIENT:
			case NextflowConfigParser.TRY:
			case NextflowConfigParser.VOID:
			case NextflowConfigParser.VOLATILE:
			case NextflowConfigParser.WHILE:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
			case NextflowConfigParser.LPAREN:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1723;
				this.namedPropertyArgLabel();
				this.state = 1724;
				this.match(NextflowConfigParser.COLON);
				this.state = 1725;
				this.nls();
				this.state = 1726;
				this.expression(0);
				}
				break;
			case NextflowConfigParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1728;
				this.match(NextflowConfigParser.MUL);
				this.state = 1729;
				this.match(NextflowConfigParser.COLON);
				this.state = 1730;
				this.nls();
				this.state = 1731;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArg(): MapEntryContext {
		let _localctx: MapEntryContext = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, NextflowConfigParser.RULE_namedArg);
		try {
			this.state = 1745;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.StringLiteral:
			case NextflowConfigParser.GStringBegin:
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.THREADSAFE:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.BuiltInPrimitiveType:
			case NextflowConfigParser.ABSTRACT:
			case NextflowConfigParser.ASSERT:
			case NextflowConfigParser.BREAK:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.CASE:
			case NextflowConfigParser.CATCH:
			case NextflowConfigParser.CLASS:
			case NextflowConfigParser.CONST:
			case NextflowConfigParser.CONTINUE:
			case NextflowConfigParser.DEFAULT:
			case NextflowConfigParser.DO:
			case NextflowConfigParser.ELSE:
			case NextflowConfigParser.ENUM:
			case NextflowConfigParser.EXTENDS:
			case NextflowConfigParser.FINAL:
			case NextflowConfigParser.FINALLY:
			case NextflowConfigParser.FOR:
			case NextflowConfigParser.IF:
			case NextflowConfigParser.GOTO:
			case NextflowConfigParser.IMPLEMENTS:
			case NextflowConfigParser.IMPORT:
			case NextflowConfigParser.INSTANCEOF:
			case NextflowConfigParser.INTERFACE:
			case NextflowConfigParser.NATIVE:
			case NextflowConfigParser.NEW:
			case NextflowConfigParser.NON_SEALED:
			case NextflowConfigParser.PACKAGE:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.PRIVATE:
			case NextflowConfigParser.PROTECTED:
			case NextflowConfigParser.PUBLIC:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.RETURN:
			case NextflowConfigParser.SEALED:
			case NextflowConfigParser.STATIC:
			case NextflowConfigParser.STRICTFP:
			case NextflowConfigParser.SUPER:
			case NextflowConfigParser.SWITCH:
			case NextflowConfigParser.SYNCHRONIZED:
			case NextflowConfigParser.THIS:
			case NextflowConfigParser.THROW:
			case NextflowConfigParser.THROWS:
			case NextflowConfigParser.TRANSIENT:
			case NextflowConfigParser.TRY:
			case NextflowConfigParser.VOID:
			case NextflowConfigParser.VOLATILE:
			case NextflowConfigParser.WHILE:
			case NextflowConfigParser.IntegerLiteral:
			case NextflowConfigParser.FloatingPointLiteral:
			case NextflowConfigParser.BooleanLiteral:
			case NextflowConfigParser.NullLiteral:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1735;
				this.namedArgLabel();
				this.state = 1736;
				this.match(NextflowConfigParser.COLON);
				this.state = 1737;
				this.nls();
				this.state = 1738;
				this.expression(0);
				}
				break;
			case NextflowConfigParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1740;
				this.match(NextflowConfigParser.MUL);
				this.state = 1741;
				this.match(NextflowConfigParser.COLON);
				this.state = 1742;
				this.nls();
				this.state = 1743;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapEntryLabel(): MapEntryLabelContext {
		let _localctx: MapEntryLabelContext = new MapEntryLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, NextflowConfigParser.RULE_mapEntryLabel);
		try {
			this.state = 1749;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1747;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1748;
				this.primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedPropertyArgLabel(): MapEntryLabelContext {
		let _localctx: MapEntryLabelContext = new MapEntryLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, NextflowConfigParser.RULE_namedPropertyArgLabel);
		try {
			this.state = 1753;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1751;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1752;
				this.namedPropertyArgPrimary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArgLabel(): MapEntryLabelContext {
		let _localctx: MapEntryLabelContext = new MapEntryLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, NextflowConfigParser.RULE_namedArgLabel);
		try {
			this.state = 1757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1755;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1756;
				this.namedArgPrimary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(t: number): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state, t);
		this.enterRule(_localctx, 302, NextflowConfigParser.RULE_creator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1759;
			this.createdName();
			this.state = 1775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				{
				this.state = 1760;
				this.nls();
				this.state = 1761;
				this.arguments();
				this.state = 1763;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1762;
					this.anonymousInnerClassDeclaration(0);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1766;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1765;
						this.dim();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1768;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1773;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1770;
					this.nls();
					this.state = 1771;
					this.arrayInitializer();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dim(): DimContext {
		let _localctx: DimContext = new DimContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, NextflowConfigParser.RULE_dim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.annotationsOpt();
			this.state = 1778;
			this.match(NextflowConfigParser.LBRACK);
			this.state = 1780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1779;
				this.expression(0);
				}
				break;
			}
			this.state = 1782;
			this.match(NextflowConfigParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, NextflowConfigParser.RULE_arrayInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this.match(NextflowConfigParser.LBRACE);
			this.state = 1785;
			this.nls();
			this.state = 1789;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1786;
				this.variableInitializers();
				this.state = 1787;
				this.nls();
				}
				break;
			}
			this.state = 1791;
			this.match(NextflowConfigParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymousInnerClassDeclaration(t: number): AnonymousInnerClassDeclarationContext {
		let _localctx: AnonymousInnerClassDeclarationContext = new AnonymousInnerClassDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localctx, 308, NextflowConfigParser.RULE_anonymousInnerClassDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1793;
			this.classBody(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, NextflowConfigParser.RULE_createdName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795;
			this.annotationsOpt();
			this.state = 1801;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowConfigParser.BuiltInPrimitiveType:
				{
				this.state = 1796;
				this.primitiveType();
				}
				break;
			case NextflowConfigParser.AS:
			case NextflowConfigParser.DEF:
			case NextflowConfigParser.IN:
			case NextflowConfigParser.TRAIT:
			case NextflowConfigParser.VAR:
			case NextflowConfigParser.YIELD:
			case NextflowConfigParser.PERMITS:
			case NextflowConfigParser.RECORD:
			case NextflowConfigParser.CapitalizedIdentifier:
			case NextflowConfigParser.Identifier:
				{
				this.state = 1797;
				this.qualifiedClassName();
				this.state = 1799;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1798;
					this.typeArgumentsOrDiamond();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, NextflowConfigParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1803;
			this.match(NextflowConfigParser.LT);
			this.state = 1804;
			this.nls();
			this.state = 1805;
			this.typeList();
			this.state = 1806;
			this.nls();
			this.state = 1807;
			this.match(NextflowConfigParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, NextflowConfigParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1812;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1809;
				this.match(NextflowConfigParser.LT);
				this.state = 1810;
				this.match(NextflowConfigParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1811;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, NextflowConfigParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1814;
			this.match(NextflowConfigParser.LPAREN);
			this.state = 1816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				{
				this.state = 1815;
				this.enhancedArgumentListInPar();
				}
				break;
			}
			this.state = 1819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowConfigParser.COMMA) {
				{
				this.state = 1818;
				this.match(NextflowConfigParser.COMMA);
				}
			}

			this.state = 1821;
			this.rparen();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): EnhancedArgumentListInParContext {
		let _localctx: EnhancedArgumentListInParContext = new EnhancedArgumentListInParContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, NextflowConfigParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1823;
			this.firstArgumentListElement();
			this.state = 1830;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1824;
					this.match(NextflowConfigParser.COMMA);
					this.state = 1825;
					this.nls();
					this.state = 1826;
					this.argumentListElement();
					}
					}
				}
				this.state = 1832;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		let _localctx: EnhancedArgumentListInParContext = new EnhancedArgumentListInParContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, NextflowConfigParser.RULE_enhancedArgumentListInPar);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this.enhancedArgumentListElement();
			this.state = 1840;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1834;
					this.match(NextflowConfigParser.COMMA);
					this.state = 1835;
					this.nls();
					this.state = 1836;
					this.enhancedArgumentListElement();
					}
					}
				}
				this.state = 1842;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public firstArgumentListElement(): EnhancedArgumentListElementContext {
		let _localctx: EnhancedArgumentListElementContext = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, NextflowConfigParser.RULE_firstArgumentListElement);
		try {
			this.state = 1845;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1843;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1844;
				this.namedArg();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentListElement(): EnhancedArgumentListElementContext {
		let _localctx: EnhancedArgumentListElementContext = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, NextflowConfigParser.RULE_argumentListElement);
		try {
			this.state = 1849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1847;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1848;
				this.namedPropertyArg();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedArgumentListElement(): EnhancedArgumentListElementContext {
		let _localctx: EnhancedArgumentListElementContext = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, NextflowConfigParser.RULE_enhancedArgumentListElement);
		try {
			this.state = 1854;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1851;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1852;
				this.standardLambdaExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1853;
				this.namedPropertyArg();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, NextflowConfigParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1856;
			this.match(NextflowConfigParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public className(): ClassNameContext {
		let _localctx: ClassNameContext = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, NextflowConfigParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1858;
			this.match(NextflowConfigParser.CapitalizedIdentifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, NextflowConfigParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1860;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowConfigParser.AS) | (1 << NextflowConfigParser.IN) | (1 << NextflowConfigParser.TRAIT) | (1 << NextflowConfigParser.VAR) | (1 << NextflowConfigParser.YIELD))) !== 0) || _la === NextflowConfigParser.PERMITS || _la === NextflowConfigParser.RECORD || _la === NextflowConfigParser.CapitalizedIdentifier || _la === NextflowConfigParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtInType(): BuiltInTypeContext {
		let _localctx: BuiltInTypeContext = new BuiltInTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, NextflowConfigParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1862;
			_la = this._input.LA(1);
			if (!(_la === NextflowConfigParser.BuiltInPrimitiveType || _la === NextflowConfigParser.VOID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywords(): KeywordsContext {
		let _localctx: KeywordsContext = new KeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, NextflowConfigParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1864;
			_la = this._input.LA(1);
			if (!(((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (NextflowConfigParser.AS - 7)) | (1 << (NextflowConfigParser.DEF - 7)) | (1 << (NextflowConfigParser.IN - 7)) | (1 << (NextflowConfigParser.TRAIT - 7)) | (1 << (NextflowConfigParser.THREADSAFE - 7)) | (1 << (NextflowConfigParser.VAR - 7)) | (1 << (NextflowConfigParser.BuiltInPrimitiveType - 7)) | (1 << (NextflowConfigParser.ABSTRACT - 7)) | (1 << (NextflowConfigParser.ASSERT - 7)) | (1 << (NextflowConfigParser.BREAK - 7)) | (1 << (NextflowConfigParser.YIELD - 7)) | (1 << (NextflowConfigParser.CASE - 7)) | (1 << (NextflowConfigParser.CATCH - 7)) | (1 << (NextflowConfigParser.CLASS - 7)) | (1 << (NextflowConfigParser.CONST - 7)) | (1 << (NextflowConfigParser.CONTINUE - 7)) | (1 << (NextflowConfigParser.DEFAULT - 7)) | (1 << (NextflowConfigParser.DO - 7)) | (1 << (NextflowConfigParser.ELSE - 7)) | (1 << (NextflowConfigParser.ENUM - 7)) | (1 << (NextflowConfigParser.EXTENDS - 7)) | (1 << (NextflowConfigParser.FINAL - 7)) | (1 << (NextflowConfigParser.FINALLY - 7)) | (1 << (NextflowConfigParser.FOR - 7)) | (1 << (NextflowConfigParser.IF - 7)) | (1 << (NextflowConfigParser.GOTO - 7)) | (1 << (NextflowConfigParser.IMPLEMENTS - 7)) | (1 << (NextflowConfigParser.IMPORT - 7)) | (1 << (NextflowConfigParser.INSTANCEOF - 7)) | (1 << (NextflowConfigParser.INTERFACE - 7)) | (1 << (NextflowConfigParser.NATIVE - 7)) | (1 << (NextflowConfigParser.NEW - 7)))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (NextflowConfigParser.NON_SEALED - 39)) | (1 << (NextflowConfigParser.PACKAGE - 39)) | (1 << (NextflowConfigParser.PERMITS - 39)) | (1 << (NextflowConfigParser.PRIVATE - 39)) | (1 << (NextflowConfigParser.PROTECTED - 39)) | (1 << (NextflowConfigParser.PUBLIC - 39)) | (1 << (NextflowConfigParser.RECORD - 39)) | (1 << (NextflowConfigParser.RETURN - 39)) | (1 << (NextflowConfigParser.SEALED - 39)) | (1 << (NextflowConfigParser.STATIC - 39)) | (1 << (NextflowConfigParser.STRICTFP - 39)) | (1 << (NextflowConfigParser.SUPER - 39)) | (1 << (NextflowConfigParser.SWITCH - 39)) | (1 << (NextflowConfigParser.SYNCHRONIZED - 39)) | (1 << (NextflowConfigParser.THIS - 39)) | (1 << (NextflowConfigParser.THROW - 39)) | (1 << (NextflowConfigParser.THROWS - 39)) | (1 << (NextflowConfigParser.TRANSIENT - 39)) | (1 << (NextflowConfigParser.TRY - 39)) | (1 << (NextflowConfigParser.VOID - 39)) | (1 << (NextflowConfigParser.VOLATILE - 39)) | (1 << (NextflowConfigParser.WHILE - 39)) | (1 << (NextflowConfigParser.BooleanLiteral - 39)) | (1 << (NextflowConfigParser.NullLiteral - 39)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rparen(): RparenContext {
		let _localctx: RparenContext = new RparenContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, NextflowConfigParser.RULE_rparen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this.match(NextflowConfigParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nls(): NlsContext {
		let _localctx: NlsContext = new NlsContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, NextflowConfigParser.RULE_nls);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1868;
					this.match(NextflowConfigParser.NL);
					}
					}
				}
				this.state = 1873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sep(): SepContext {
		let _localctx: SepContext = new SepContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, NextflowConfigParser.RULE_sep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1875;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1874;
					_la = this._input.LA(1);
					if (!(_la === NextflowConfigParser.SEMI || _la === NextflowConfigParser.NL)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1877;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.scriptStatement_sempred(_localctx as ScriptStatementContext, predIndex);

		case 27:
			return this.classBody_sempred(_localctx as ClassBodyContext, predIndex);

		case 88:
			return this.localVariableDeclaration_sempred(_localctx as LocalVariableDeclarationContext, predIndex);

		case 102:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 127:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 129:
			return this.commandExpression_sempred(_localctx as CommandExpressionContext, predIndex);

		case 131:
			return this.pathExpression_sempred(_localctx as PathExpressionContext, predIndex);
		}
		return true;
	}
	private scriptStatement_sempred(_localctx: ScriptStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  !GroovyParser.isInvalidMethodDeclaration(this._input) ;
		}
		return true;
	}
	private classBody_sempred(_localctx: ClassBodyContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  2 == _localctx.t ;
		}
		return true;
	}
	private localVariableDeclaration_sempred(_localctx: LocalVariableDeclarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  !GroovyParser.isInvalidLocalVariableDeclaration(this._input) ;
		}
		return true;
	}
	private statement_sempred(_localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return  this.inSwitchExpressionLevel > 0 ;
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 17);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);

		case 13:
			return this.precpred(this._ctx, 6);

		case 14:
			return this.precpred(this._ctx, 5);

		case 15:
			return this.precpred(this._ctx, 4);

		case 16:
			return this.precpred(this._ctx, 3);

		case 17:
			return this.precpred(this._ctx, 12);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private commandExpression_sempred(_localctx: CommandExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return  !GroovyParser.isFollowingArgumentsOrClosure(_localctx._expression) ;
		}
		return true;
	}
	private pathExpression_sempred(_localctx: PathExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return  this._input.LT(2).type == GroovyParser.DOT ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8C\u075A\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x03\x02\x03\x02" +
		"\x07\x02\u015D\n\x02\f\x02\x0E\x02\u0160\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\u0168\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06\u0176\n\x06\f\x06\x0E\x06\u0179\v\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\u017F\n\x07\f\x07\x0E\x07\u0182\v\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\b\u018C\n\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x07\t\u0194\n\t\f\t\x0E\t\u0197\v\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u01A1\n\n\f\n\x0E\n\u01A4\v\n\x03" +
		"\n\x05\n\u01A7\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u01AE\n\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\u01B7\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x05\r\u01BE\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05" +
		"\x0F\u01C5\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u01CA\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u01D0\n\x11\f\x11\x0E\x11\u01D3\v\x11\x03" +
		"\x12\x03\x12\x07\x12\u01D7\n\x12\f\x12\x0E\x12\u01DA\v\x12\x05\x12\u01DC" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01E2\n\x13\f\x13\x0E\x13" +
		"\u01E5\v\x13\x03\x14\x03\x14\x05\x14\u01E9\n\x14\x03\x15\x03\x15\x05\x15" +
		"\u01ED\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01F2\n\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\u01F8\n\x17\f\x17\x0E\x17\u01FB\v\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0204\n\x18\f" +
		"\x18\x0E\x18\u0207\v\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u0212\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\u0219\n\x1A\f\x1A\x0E\x1A\u021C\v\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0223\n\x1B\f\x1B\x0E\x1B\u0226\v" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0235\n\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u023B\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0240" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0247\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u024E\n\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0255\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0261\n\x1D" +
		"\x03\x1D\x05\x1D\u0264\n\x1D\x03\x1D\x05\x1D\u0267\n\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x07\x1D\u026D\n\x1D\f\x1D\x0E\x1D\u0270\v\x1D\x05\x1D" +
		"\u0272\n\x1D\x03\x1D\x05\x1D\u0275\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u027F\n\x1E\f\x1E\x0E\x1E\u0282" +
		"\v\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0287\n\x1F\x03\x1F\x05\x1F\u028A" +
		"\n\x1F\x03 \x03 \x05 \u028E\n \x03 \x03 \x05 \u0292\n \x03!\x03!\x03!" +
		"\x03!\x03!\x05!\u0299\n!\x05!\u029B\n!\x03\"\x03\"\x05\"\u029F\n\"\x03" +
		"\"\x03\"\x03\"\x05\"\u02A4\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x05\"\u02B1\n\"\x03\"\x03\"\x03\"\x05\"\u02B6" +
		"\n\"\x05\"\u02B8\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x05$\u02C0\n$\x03%" +
		"\x03%\x05%\u02C4\n%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u02CD" +
		"\n\'\f\'\x0E\'\u02D0\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u02D8\n(\x03" +
		")\x03)\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u02E4\n+\f+\x0E+\u02E7" +
		"\v+\x03+\x03+\x05+\u02EB\n+\x03,\x03,\x03,\x03,\x06,\u02F1\n,\r,\x0E," +
		"\u02F2\x03-\x05-\u02F6\n-\x03.\x03.\x03.\x05.\u02FB\n.\x03.\x03.\x03/" +
		"\x03/\x03/\x05/\u0302\n/\x03/\x05/\u0305\n/\x03/\x03/\x030\x030\x050\u030B" +
		"\n0\x030\x050\u030E\n0\x031\x031\x051\u0312\n1\x032\x032\x052\u0316\n" +
		"2\x033\x033\x034\x034\x034\x034\x034\x034\x034\x074\u0321\n4\f4\x0E4\u0324" +
		"\v4\x034\x034\x034\x035\x035\x035\x035\x035\x035\x035\x055\u0330\n5\x05" +
		"5\u0332\n5\x036\x036\x036\x037\x037\x037\x037\x037\x077\u033C\n7\f7\x0E" +
		"7\u033F\v7\x038\x038\x058\u0343\n8\x038\x038\x039\x039\x059\u0349\n9\x03" +
		"9\x039\x039\x039\x079\u034F\n9\f9\x0E9\u0352\v9\x03:\x03:\x03:\x03;\x03" +
		";\x05;\u0359\n;\x03;\x05;\u035C\n;\x03;\x03;\x03;\x03;\x03;\x03;\x05;" +
		"\u0364\n;\x03<\x03<\x03=\x03=\x03=\x07=\u036B\n=\f=\x0E=\u036E\v=\x03" +
		">\x03>\x03>\x03>\x03>\x05>\u0375\n>\x03?\x03?\x03?\x07?\u037A\n?\f?\x0E" +
		"?\u037D\v?\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x07A\u0386\nA\fA\x0EA\u0389" +
		"\vA\x03B\x03B\x03B\x03B\x03B\x05B\u0390\nB\x03C\x03C\x03C\x03C\x07C\u0396" +
		"\nC\fC\x0EC\u0399\vC\x03C\x03C\x03D\x03D\x05D\u039F\nD\x03E\x03E\x07E" +
		"\u03A3\nE\fE\x0EE\u03A6\vE\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03H\x03H\x03I\x03I\x05I\u03B8\nI\x03J\x03J\x05J\u03BC" +
		"\nJ\x03K\x03K\x03K\x03K\x03K\x05K\u03C3\nK\x03K\x03K\x05K\u03C7\nK\x03" +
		"K\x05K\u03CA\nK\x03K\x03K\x03K\x03L\x03L\x05L\u03D1\nL\x03M\x05M\u03D4" +
		"\nM\x03N\x03N\x03N\x03N\x07N\u03DA\nN\fN\x0EN\u03DD\vN\x03N\x05N\u03E0" +
		"\nN\x03O\x03O\x03O\x03O\x07O\u03E6\nO\fO\x0EO\u03E9\vO\x03O\x03O\x05O" +
		"\u03ED\nO\x03P\x03P\x03P\x03P\x03P\x05P\u03F4\nP\x03P\x03P\x05P\u03F8" +
		"\nP\x03Q\x03Q\x05Q\u03FC\nQ\x03R\x03R\x03S\x03S\x03S\x07S\u0403\nS\fS" +
		"\x0ES\u0406\vS\x03T\x03T\x03T\x03T\x03T\x03T\x03U\x03U\x05U\u0410\nU\x03" +
		"V\x03V\x03V\x05V\u0415\nV\x03W\x03W\x03W\x03W\x07W\u041B\nW\fW\x0EW\u041E" +
		"\vW\x03W\x05W\u0421\nW\x05W\u0423\nW\x03W\x03W\x03X\x03X\x05X\u0429\n" +
		"X\x03X\x03X\x03X\x03Y\x03Y\x05Y\u0430\nY\x03Z\x03Z\x03Z\x03[\x03[\x03" +
		"[\x05[\u0438\n[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u0441\n[\x03[" +
		"\x03[\x03[\x05[\u0446\n[\x03\\\x03\\\x03\\\x03\\\x07\\\u044C\n\\\f\\\x0E" +
		"\\\u044F\v\\\x03\\\x03\\\x03]\x05]\u0454\n]\x03]\x03]\x03^\x03^\x03^\x03" +
		"^\x06^\u045C\n^\r^\x0E^\u045D\x03^\x03^\x03_\x03_\x05_\u0464\n_\x03`\x03" +
		"`\x03`\x03`\x03`\x03`\x05`\u046C\n`\x03`\x03`\x03`\x03`\x05`\u0472\n`" +
		"\x03a\x03a\x03a\x03a\x03a\x03a\x06a\u047A\na\ra\x0Ea\u047B\x03a\x03a\x05" +
		"a\u0480\na\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u0497\nb\x03c\x03" +
		"c\x05c\u049B\nc\x03d\x03d\x05d\u049F\nd\x03e\x03e\x03e\x03f\x03f\x05f" +
		"\u04A6\nf\x03f\x03f\x03f\x03f\x03f\x07f\u04AD\nf\ff\x0Ef\u04B0\vf\x03" +
		"f\x03f\x03f\x05f\u04B5\nf\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u04BE" +
		"\ng\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x05h\u04CB" +
		"\nh\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03" +
		"h\x03h\x05h\u04DC\nh\x03i\x03i\x03i\x03i\x05i\u04E2\ni\x03i\x03i\x03i" +
		"\x03i\x03i\x03j\x03j\x03j\x07j\u04EC\nj\fj\x0Ej\u04EF\vj\x03k\x03k\x03" +
		"k\x03k\x03l\x03l\x03l\x03l\x05l\u04F9\nl\x03l\x03l\x03m\x03m\x03m\x03" +
		"m\x07m\u0501\nm\fm\x0Em\u0504\vm\x03n\x03n\x05n\u0508\nn\x03o\x03o\x03" +
		"o\x03o\x07o\u050E\no\fo\x0Eo\u0511\vo\x03o\x03o\x03o\x03p\x03p\x03p\x03" +
		"p\x03p\x03p\x05p\u051C\np\x03q\x03q\x05q\u0520\nq\x03r\x03r\x05r\u0524" +
		"\nr\x03r\x03r\x03r\x03r\x03s\x05s\u052B\ns\x03s\x03s\x05s\u052F\ns\x03" +
		"s\x03s\x05s\u0533\ns\x03t\x03t\x05t\u0537\nt\x03u\x03u\x03v\x03v\x03v" +
		"\x03v\x03w\x03w\x03x\x03x\x03x\x03x\x03y\x03y\x03y\x03y\x03y\x07y\u054A" +
		"\ny\fy\x0Ey\u054D\vy\x03z\x05z\u0550\nz\x03z\x03z\x03{\x03{\x05{\u0556" +
		"\n{\x03|\x03|\x03}\x03}\x05}\u055C\n}\x03~\x03~\x03~\x03~\x03~\x03~\x07" +
		"~\u0564\n~\f~\x0E~\u0567\v~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x06" +
		"\x7F\u056F\n\x7F\r\x7F\x0E\x7F\u0570\x03\x7F\x03\x7F\x03\x80\x03\x80\x03" +
		"\x80\x05\x80\u0578\n\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u058E\n\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u05A9\n\x81\x03\x81" +
		"\x05\x81\u05AC\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x05\x81\u05EC\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x07\x81\u05FC\n\x81\f\x81\x0E\x81\u05FF\v\x81\x03\x82\x03\x82\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u060B" +
		"\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0611\n\x83\x03\x83\x07" +
		"\x83\u0614\n\x83\f\x83\x0E\x83\u0617\v\x83\x03\x84\x03\x84\x06\x84\u061B" +
		"\n\x84\r\x84\x0E\x84\u061C\x03\x84\x05\x84\u0620\n\x84\x03\x85\x03\x85" +
		"\x03\x85\x05\x85\u0625\n\x85\x03\x85\x03\x85\x03\x85\x07\x85\u062A\n\x85" +
		"\f\x85\x0E\x85\u062D\v\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u063A\n\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x05\x86\u0640\n\x86\x03\x86\x03\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x05\x86\u0648\n\x86\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0653\n\x86\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x05\x87\u0659\n\x87\x03\x88\x03\x88\x05\x88\u065D" +
		"\n\x88\x03\x89\x03\x89\x05\x89\u0661\n\x89\x03\x89\x03\x89\x03\x8A\x03" +
		"\x8A\x03\x8A\x05\x8A\u0668\n\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x05\x8B" +
		"\u066E\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u067D\n\x8B\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0683\n\x8C\x03\x8D\x03\x8D\x03\x8D\x05" +
		"\x8D\u0688\n\x8D\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u068D\n\x8E\x03\x8F\x03" +
		"\x8F\x05\x8F\u0691\n\x8F\x03\x8F\x05\x8F\u0694\n\x8F\x03\x8F\x03\x8F\x03" +
		"\x90\x03\x90\x03\x90\x05\x90\u069B\n\x90\x03\x90\x05\x90\u069E\n\x90\x03" +
		"\x90\x03\x90\x03\x91\x03\x91\x03\x91\x07\x91\u06A5\n\x91\f\x91\x0E\x91" +
		"\u06A8\v\x91\x03\x92\x03\x92\x03\x92\x07\x92\u06AD\n\x92\f\x92\x0E\x92" +
		"\u06B0\v\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03" +
		"\x93\x03\x93\x03\x93\x05\x93\u06BC\n\x93\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u06C8\n\x94\x03" +
		"\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03" +
		"\x95\x05\x95\u06D4\n\x95\x03\x96\x03\x96\x05\x96\u06D8\n\x96\x03\x97\x03" +
		"\x97\x05\x97\u06DC\n\x97\x03\x98\x03\x98\x05\x98\u06E0\n\x98\x03\x99\x03" +
		"\x99\x03\x99\x03\x99\x05\x99\u06E6\n\x99\x03\x99\x06\x99\u06E9\n\x99\r" +
		"\x99\x0E\x99\u06EA\x03\x99\x03\x99\x03\x99\x05\x99\u06F0\n\x99\x05\x99" +
		"\u06F2\n\x99\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u06F7\n\x9A\x03\x9A\x03\x9A" +
		"\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0700\n\x9B\x03\x9B\x03" +
		"\x9B\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u070A\n\x9D" +
		"\x05\x9D\u070C\n\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
		"\x9F\x03\x9F\x03\x9F\x05\x9F\u0717\n\x9F\x03\xA0\x03\xA0\x05\xA0\u071B" +
		"\n\xA0\x03\xA0\x05\xA0\u071E\n\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03" +
		"\xA1\x03\xA1\x03\xA1\x07\xA1\u0727\n\xA1\f\xA1\x0E\xA1\u072A\v\xA1\x03" +
		"\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x07\xA2\u0731\n\xA2\f\xA2\x0E\xA2" +
		"\u0734\v\xA2\x03\xA3\x03\xA3\x05\xA3\u0738\n\xA3\x03\xA4\x03\xA4\x05\xA4" +
		"\u073C\n\xA4\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0741\n\xA5\x03\xA6\x03\xA6" +
		"\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB" +
		"\x03\xAB\x03\xAC\x07\xAC\u0750\n\xAC\f\xAC\x0E\xAC\u0753\v\xAC\x03\xAD" +
		"\x06\xAD\u0756\n\xAD\r\xAD\x0E\xAD\u0757\x03\xAD\x02\x02\x03\u0100\xAE" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
		"\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118" +
		"\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126" +
		"\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134" +
		"\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142" +
		"\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150" +
		"\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\x02\x1A\b\x02\n\n\x0E\x0E" +
		"\'\'66::==\b\x02\x10\x10\x19\x19\x1E\x1E)),.13\b\x02\n\n\x0E\x0E\x10\x10" +
		"\x1E\x1E,.23\x04\x02\x1D\x1D44\x04\x02__gg\x04\x02\v\vgg\x03\x02no\x04" +
		"\x02UUgg\x03\x02de\x03\x02nq\x04\x02rsww\x03\x02pq\x03\x02CF\x06\x02\v" +
		"\vWWbcij\x05\x02RThhkk\x03\x02NO\x05\x02\t\t%%VV\x05\x02QQaax\x83\x05" +
		"\x02GHJJ``\x04\x02II\\\\\t\x02\t\t\v\f\x0E\x0E\x13\x13++//\x84\x85\x04" +
		"\x02\x0F\x0F<<\x04\x02\t>AB\x04\x02^^\x89\x89\x02\u07C1\x02\u015A\x03" +
		"\x02\x02\x02\x04\u0167\x03\x02\x02\x02\x06\u0169\x03\x02\x02\x02\b\u016D" +
		"\x03\x02\x02\x02\n\u0172\x03\x02\x02\x02\f\u017A\x03\x02\x02\x02\x0E\u018B" +
		"\x03\x02\x02\x02\x10\u018D\x03\x02\x02\x02\x12\u019C\x03\x02\x02\x02\x14" +
		"\u01AD\x03\x02\x02\x02\x16\u01AF\x03\x02\x02\x02\x18\u01B3\x03\x02\x02" +
		"\x02\x1A\u01BF\x03\x02\x02\x02\x1C\u01C4\x03\x02\x02\x02\x1E\u01C9\x03" +
		"\x02\x02\x02 \u01CB\x03\x02\x02\x02\"\u01DB\x03\x02\x02\x02$\u01DD\x03" +
		"\x02\x02\x02&\u01E8\x03\x02\x02\x02(\u01EC\x03\x02\x02\x02*\u01F1\x03" +
		"\x02\x02\x02,\u01F3\x03\x02\x02\x02.\u01FC\x03\x02\x02\x020\u020B\x03" +
		"\x02\x02\x022\u0213\x03\x02\x02\x024\u021D\x03\x02\x02\x026\u0234\x03" +
		"\x02\x02\x028\u0259\x03\x02\x02\x02:\u0278\x03\x02\x02\x02<\u0283\x03" +
		"\x02\x02\x02>\u0291\x03\x02\x02\x02@\u029A\x03\x02\x02\x02B\u029C\x03" +
		"\x02\x02\x02D\u02B9\x03\x02\x02\x02F\u02BF\x03\x02\x02\x02H\u02C3\x03" +
		"\x02\x02\x02J\u02C5\x03\x02\x02\x02L\u02C7\x03\x02\x02\x02N\u02D1\x03" +
		"\x02\x02\x02P\u02D9\x03\x02\x02\x02R\u02DB\x03\x02\x02\x02T\u02DD\x03" +
		"\x02\x02\x02V\u02F0\x03\x02\x02\x02X\u02F5\x03\x02\x02\x02Z\u02F7\x03" +
		"\x02\x02\x02\\\u02FE\x03\x02\x02\x02^\u030A\x03\x02\x02\x02`\u030F\x03" +
		"\x02\x02\x02b\u0313\x03\x02\x02\x02d\u0317\x03\x02\x02\x02f\u0319\x03" +
		"\x02\x02\x02h\u0331\x03\x02\x02\x02j\u0333\x03\x02\x02\x02l\u0336\x03" +
		"\x02\x02\x02n\u0340\x03\x02\x02\x02p\u0348\x03\x02\x02\x02r\u0353\x03" +
		"\x02\x02\x02t\u0356\x03\x02\x02\x02v\u0365\x03\x02\x02\x02x\u0367\x03" +
		"\x02\x02\x02z\u0374\x03\x02\x02\x02|\u037B\x03\x02\x02\x02~\u037E\x03" +
		"\x02\x02\x02\x80\u0381\x03\x02\x02\x02\x82\u038F\x03\x02\x02\x02\x84\u0391" +
		"\x03\x02\x02\x02\x86\u039E\x03\x02\x02\x02\x88\u03A0\x03\x02\x02\x02\x8A" +
		"\u03A7\x03\x02\x02\x02\x8C\u03AD\x03\x02\x02\x02\x8E\u03B3\x03\x02\x02" +
		"\x02\x90\u03B7\x03\x02\x02\x02\x92\u03BB\x03\x02\x02\x02\x94\u03BD\x03" +
		"\x02\x02\x02\x96\u03D0\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x98\u03D3\x03\x02\x02\x02\x9A\u03D5\x03\x02\x02\x02\x9C\u03EC" +
		"\x03\x02\x02\x02\x9E\u03EE\x03\x02\x02\x02\xA0\u03FB\x03\x02\x02\x02\xA2" +
		"\u03FD\x03\x02\x02\x02\xA4\u03FF\x03\x02\x02\x02\xA6\u0407\x03\x02\x02" +
		"\x02\xA8\u040F\x03\x02\x02\x02\xAA\u0414\x03\x02\x02\x02\xAC\u0416\x03" +
		"\x02\x02\x02\xAE\u0426\x03\x02\x02\x02\xB0\u042F\x03\x02\x02\x02\xB2\u0431" +
		"\x03\x02\x02\x02\xB4\u0445\x03\x02\x02\x02\xB6\u0447\x03\x02\x02\x02\xB8" +
		"\u0453\x03\x02\x02\x02\xBA\u0457\x03\x02\x02\x02\xBC\u0463\x03\x02\x02" +
		"\x02\xBE\u0465\x03\x02\x02\x02\xC0\u0473\x03\x02\x02\x02\xC2\u0496\x03" +
		"\x02\x02\x02\xC4\u0498\x03\x02\x02\x02\xC6\u049C\x03\x02\x02\x02\xC8\u04A0" +
		"\x03\x02\x02\x02\xCA\u04A3\x03\x02\x02\x02\xCC\u04B6\x03\x02\x02\x02\xCE" +
		"\u04DB\x03\x02\x02\x02\xD0\u04DD\x03\x02\x02\x02\xD2\u04E8\x03\x02\x02" +
		"\x02\xD4\u04F0\x03\x02\x02\x02\xD6\u04F4\x03\x02\x02\x02\xD8\u04FC\x03" +
		"\x02\x02\x02\xDA\u0507\x03\x02\x02\x02\xDC\u0509\x03\x02\x02\x02\xDE\u051B" +
		"\x03\x02\x02\x02\xE0\u051F\x03\x02\x02\x02\xE2\u0521\x03\x02\x02\x02\xE4" +
		"\u052A\x03\x02\x02\x02\xE6\u0536\x03\x02\x02\x02\xE8\u0538\x03\x02\x02" +
		"\x02\xEA\u053A\x03\x02\x02\x02\xEC\u053E\x03\x02\x02\x02\xEE\u0540\x03" +
		"\x02\x02\x02\xF0\u0544\x03\x02\x02\x02\xF2\u054F\x03\x02\x02\x02\xF4\u0555" +
		"\x03\x02\x02\x02\xF6\u0557\x03\x02\x02\x02\xF8\u0559\x03\x02\x02\x02\xFA" +
		"\u055D\x03\x02\x02\x02\xFC\u056E\x03\x02\x02\x02\xFE\u0577\x03\x02\x02" +
		"\x02\u0100\u058D\x03\x02\x02\x02\u0102\u060A\x03\x02\x02\x02\u0104\u060C" +
		"\x03\x02\x02\x02\u0106\u0618\x03\x02\x02\x02\u0108\u0624\x03\x02\x02\x02" +
		"\u010A\u0652\x03\x02\x02\x02\u010C\u0658\x03\x02\x02\x02\u010E\u065C\x03" +
		"\x02\x02\x02\u0110\u065E\x03\x02\x02\x02\u0112\u0664\x03\x02\x02\x02\u0114" +
		"\u067C\x03\x02\x02\x02\u0116\u0682\x03\x02\x02\x02\u0118\u0687\x03\x02" +
		"\x02\x02\u011A\u068C\x03\x02\x02\x02\u011C\u068E\x03\x02\x02\x02\u011E" +
		"\u0697\x03\x02\x02\x02\u0120\u06A1\x03\x02\x02\x02\u0122\u06A9\x03\x02" +
		"\x02\x02\u0124\u06BB\x03\x02\x02\x02\u0126\u06C7\x03\x02\x02\x02\u0128" +
		"\u06D3\x03\x02\x02\x02\u012A\u06D7\x03\x02\x02\x02\u012C\u06DB\x03\x02" +
		"\x02\x02\u012E\u06DF\x03\x02\x02\x02\u0130\u06E1\x03\x02\x02\x02\u0132" +
		"\u06F3\x03\x02\x02\x02\u0134\u06FA\x03\x02\x02\x02\u0136\u0703\x03\x02" +
		"\x02\x02\u0138\u0705\x03\x02\x02\x02\u013A\u070D\x03\x02\x02\x02\u013C" +
		"\u0716\x03\x02\x02\x02\u013E\u0718\x03\x02\x02\x02\u0140\u0721\x03\x02" +
		"\x02\x02\u0142\u072B\x03\x02\x02\x02\u0144\u0737\x03\x02\x02\x02\u0146" +
		"\u073B\x03\x02\x02\x02\u0148\u0740\x03\x02\x02\x02\u014A\u0742\x03\x02" +
		"\x02\x02\u014C\u0744\x03\x02\x02\x02\u014E\u0746\x03\x02\x02\x02\u0150" +
		"\u0748\x03\x02\x02\x02\u0152\u074A\x03\x02\x02\x02\u0154\u074C\x03\x02" +
		"\x02\x02\u0156\u0751\x03\x02\x02\x02\u0158\u0755\x03\x02\x02\x02\u015A" +
		"\u015E\x05\u0156\xAC\x02\u015B\u015D\x05\x04\x03\x02\u015C\u015B\x03\x02" +
		"\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u0161\x03\x02\x02\x02\u0160\u015E\x03\x02" +
		"\x02\x02\u0161\u0162\x07\x02\x02\x03\u0162\x03\x03\x02\x02\x02\u0163\u0168" +
		"\x05\x06\x04\x02\u0164\u0168\x05\b\x05\x02\u0165\u0168\x05\f\x07\x02\u0166" +
		"\u0168\x05B\"\x02\u0167\u0163\x03\x02\x02\x02\u0167\u0164\x03\x02\x02" +
		"\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\x05" +
		"\x03\x02\x02\x02\u0169\u016A\x07\x8C\x02\x02\u016A\u016B\x05\u0100\x81" +
		"\x02\u016B\u016C\x05\u0158\xAD\x02\u016C\x07\x03\x02\x02\x02\u016D\u016E" +
		"\x05\n\x06\x02\u016E\u016F\x07a\x02\x02\u016F\u0170\x05\xF6|\x02\u0170" +
		"\u0171\x05\u0158\xAD\x02\u0171\t\x03\x02\x02\x02\u0172\u0177\x07\x85\x02" +
		"\x02\u0173\u0174\x07`\x02\x02\u0174\u0176\x07\x85\x02\x02\u0175\u0173" +
		"\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02" +
		"\u0177\u0178\x03\x02\x02\x02\u0178\v\x03\x02\x02\x02\u0179\u0177\x03\x02" +
		"\x02\x02\u017A\u017B\x07\x85\x02\x02\u017B\u017C\x07Z\x02\x02\u017C\u0180" +
		"\x05\u0156\xAC\x02\u017D\u017F\x05\x0E\b\x02\u017E\u017D\x03\x02\x02\x02" +
		"\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03" +
		"\x02\x02\x02\u0181\u0183\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183" +
		"\u0184\x05\u0156\xAC\x02\u0184\u0185\x07[\x02\x02\u0185\u0186\x05\u0156" +
		"\xAC\x02\u0186\r\x03\x02\x02\x02\u0187\u018C\x05\b\x05\x02\u0188\u018C" +
		"\x05\f\x07\x02\u0189\u018C\x05\x10\t\x02\u018A\u018C\x05\x06\x04\x02\u018B" +
		"\u0187\x03\x02\x02\x02\u018B\u0188\x03\x02\x02\x02\u018B\u0189\x03\x02" +
		"\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C\x0F\x03\x02\x02\x02\u018D\u018E" +
		"\x07\x85\x02\x02\u018E\u018F\x07g\x02\x02\u018F\u0190\x05\u0100\x81\x02" +
		"\u0190\u0191\x07Z\x02\x02\u0191\u0195\x05\u0156\xAC\x02\u0192\u0194\x05" +
		"\b\x05\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195" +
		"\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0198\x03\x02" +
		"\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x05\u0156\xAC\x02\u0199" +
		"\u019A\x07[\x02\x02\u019A\u019B\x05\u0156\xAC\x02\u019B\x11\x03\x02\x02" +
		"\x02\u019C\u01A2\x05\x14\v\x02\u019D\u019E\x05\u0158\xAD\x02\u019E\u019F" +
		"\x05\x14\v\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u019D\x03\x02\x02\x02" +
		"\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03" +
		"\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5" +
		"\u01A7\x05\u0158\xAD\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02" +
		"\x02\x02\u01A7\x13\x03\x02\x02\x02\u01A8\u01AE\x05\x18\r\x02\u01A9\u01AE" +
		"\x05\x1A\x0E\x02\u01AA\u01AB\x06\v\x02\x02\u01AB\u01AE\x05B\"\x02\u01AC" +
		"\u01AE\x05\xCEh\x02\u01AD\u01A8\x03\x02\x02\x02\u01AD\u01A9\x03\x02\x02" +
		"\x02\u01AD\u01AA\x03\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE\x15" +
		"\x03\x02\x02\x02\u01AF\u01B0\x05\x9CO\x02\u01B0\u01B1\x07*\x02\x02\u01B1" +
		"\u01B2\x05x=\x02\u01B2\x17\x03\x02\x02\x02\u01B3\u01B4\x05\x9CO\x02\u01B4" +
		"\u01B6\x07$\x02\x02\u01B5\u01B7\x072\x02\x02\u01B6\u01B5\x03\x02\x02\x02" +
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BD\x05" +
		"x=\x02\u01B9\u01BA\x07`\x02\x02\u01BA\u01BE\x07r\x02\x02\u01BB\u01BC\x07" +
		"\t\x02\x02\u01BC\u01BE\x05\u014E\xA8\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD" +
		"\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\x19\x03\x02\x02" +
		"\x02\u01BF\u01C0\x05\"\x12\x02\u01C0\u01C1\x056\x1C\x02\u01C1\x1B\x03" +
		"\x02\x02\x02\u01C2\u01C5\x05&\x14\x02\u01C3\u01C5\t\x02\x02\x02\u01C4" +
		"\u01C2\x03\x02\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5\x1D\x03\x02\x02" +
		"\x02\u01C6\u01C7\x05 \x11\x02\u01C7\u01C8\x05\u0156\xAC\x02\u01C8\u01CA" +
		"\x03\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\x1F\x03\x02\x02\x02\u01CB\u01D1\x05\x1C\x0F\x02\u01CC\u01CD\x05" +
		"\u0156\xAC\x02\u01CD\u01CE\x05\x1C\x0F\x02\u01CE\u01D0\x03\x02\x02\x02" +
		"\u01CF\u01CC\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03" +
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2!\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D4\u01D8\x05$\x13\x02\u01D5\u01D7\x07\x89\x02" +
		"\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6" +
		"\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
		"\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01D4\x03\x02\x02\x02\u01DB\u01DC\x03" +
		"\x02\x02\x02\u01DC#\x03\x02\x02\x02\u01DD\u01E3\x05&\x14\x02\u01DE\u01DF" +
		"\x05\u0156\xAC\x02\u01DF\u01E0\x05&\x14\x02\u01E0\u01E2\x03\x02\x02\x02" +
		"\u01E1\u01DE\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03" +
		"\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4%\x03\x02\x02\x02\u01E5" +
		"\u01E3\x03\x02\x02\x02\u01E6\u01E9\x05\x9EP\x02\u01E7\u01E9\t\x03\x02" +
		"\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\'\x03" +
		"\x02\x02\x02\u01EA\u01ED\x05\x9EP\x02\u01EB\u01ED\t\x04\x02\x02\u01EC" +
		"\u01EA\x03\x02\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED)\x03\x02\x02" +
		"\x02\u01EE\u01EF\x05,\x17\x02\u01EF\u01F0\x05\u0156\xAC\x02\u01F0\u01F2" +
		"\x03\x02\x02\x02\u01F1\u01EE\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02" +
		"\u01F2+\x03\x02\x02\x02\u01F3\u01F9\x05(\x15\x02\u01F4\u01F5\x05\u0156" +
		"\xAC\x02\u01F5\u01F6\x05(\x15\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01F4" +
		"\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02" +
		"\u01F9\u01FA\x03\x02\x02\x02\u01FA-\x03\x02\x02\x02\u01FB\u01F9\x03\x02" +
		"\x02\x02\u01FC\u01FD\x07c\x02\x02\u01FD\u01FE\x05\u0156\xAC\x02\u01FE" +
		"\u0205\x050\x19\x02\u01FF\u0200\x07_\x02\x02\u0200\u0201\x05\u0156\xAC" +
		"\x02\u0201\u0202\x050\x19\x02\u0202\u0204\x03\x02\x02\x02\u0203\u01FF" +
		"\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02" +
		"\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0205\x03" +
		"\x02\x02\x02\u0208\u0209\x05\u0156\xAC\x02\u0209\u020A\x07b\x02\x02\u020A" +
		"/\x03\x02\x02\x02\u020B\u020C\x05\x9CO\x02\u020C\u0211\x05\u014C\xA7\x02" +
		"\u020D\u020E\x07\x1D\x02\x02\u020E\u020F\x05\u0156\xAC\x02\u020F\u0210" +
		"\x052\x1A\x02\u0210\u0212\x03\x02\x02\x02\u0211\u020D\x03\x02\x02\x02" +
		"\u0211\u0212\x03\x02\x02\x02\u02121\x03\x02\x02\x02\u0213\u021A\x05\\" +
		"/\x02\u0214\u0215\x07t\x02\x02\u0215\u0216\x05\u0156\xAC\x02\u0216\u0217" +
		"\x05\\/\x02\u0217\u0219\x03\x02\x02\x02\u0218\u0214\x03\x02\x02\x02\u0219" +
		"\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02" +
		"\x02\x02\u021B3\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0224" +
		"\x05\\/\x02\u021E\u021F\x07_\x02\x02\u021F\u0220\x05\u0156\xAC\x02\u0220" +
		"\u0221\x05\\/\x02\u0221\u0223\x03\x02\x02\x02\u0222\u021E\x03\x02\x02" +
		"\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225" +
		"\x03\x02\x02\x02\u02255\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227" +
		"\u0228\x07\x16\x02\x02\u0228\u0235\b\x1C\x01\x02\u0229\u022A\x07&\x02" +
		"\x02\u022A\u0235\b\x1C\x01\x02\u022B\u022C\x07\x1C\x02\x02\u022C\u0235" +
		"\b\x1C\x01\x02\u022D\u022E\x07\x86\x02\x02\u022E\u022F\x07&\x02\x02\u022F" +
		"\u0235\b\x1C\x01\x02\u0230\u0231\x07\f\x02\x02\u0231\u0235\b\x1C\x01\x02" +
		"\u0232\u0233\x07/\x02\x02\u0233\u0235\b\x1C\x01\x02\u0234\u0227\x03\x02" +
		"\x02\x02\u0234\u0229\x03\x02\x02\x02\u0234\u022B\x03\x02\x02\x02\u0234" +
		"\u022D\x03\x02\x02\x02\u0234\u0230\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u023A\x05\u014E\xA8\x02\u0237" +
		"\u0238\x05\u0156\xAC\x02\u0238\u0239\x05.\x18\x02\u0239\u023B\x03\x02" +
		"\x02\x02\u023A\u0237\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		"\u023F\x03\x02\x02\x02\u023C\u023D\x05\u0156\xAC\x02\u023D\u023E\x05n" +
		"8\x02\u023E\u0240\x03\x02\x02\x02\u023F\u023C\x03\x02\x02\x02\u023F\u0240" +
		"\x03\x02\x02\x02\u0240\u0246\x03\x02\x02\x02\u0241\u0242\x05\u0156\xAC" +
		"\x02\u0242\u0243\x07\x1D\x02\x02\u0243\u0244\x05\u0156\xAC\x02\u0244\u0245" +
		"\x054\x1B\x02\u0245\u0247\x03\x02\x02\x02\u0246\u0241\x03\x02\x02\x02" +
		"\u0246\u0247\x03\x02\x02\x02\u0247\u024D\x03\x02\x02\x02\u0248\u0249\x05" +
		"\u0156\xAC\x02\u0249\u024A\x07#\x02\x02\u024A\u024B\x05\u0156\xAC\x02" +
		"\u024B\u024C\x054\x1B\x02\u024C\u024E\x03\x02\x02\x02\u024D\u0248\x03" +
		"\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0254\x03\x02\x02\x02\u024F" +
		"\u0250\x05\u0156\xAC\x02\u0250\u0251\x07+\x02\x02\u0251\u0252\x05\u0156" +
		"\xAC\x02\u0252\u0253\x054\x1B\x02\u0253\u0255\x03\x02\x02\x02\u0254\u024F" +
		"\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02" +
		"\u0256\u0257\x05\u0156\xAC\x02\u0257\u0258\x058\x1D\x02\u02587\x03\x02" +
		"\x02\x02\u0259\u025A\x07Z\x02\x02\u025A\u0266\x05\u0156\xAC\x02\u025B" +
		"\u025C\x06\x1D\x03\x03\u025C\u0260\x05:\x1E\x02\u025D\u025E\x05\u0156" +
		"\xAC\x02\u025E\u025F\x07_\x02\x02\u025F\u0261\x03\x02\x02\x02\u0260\u025D" +
		"\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263\x03\x02\x02\x02" +
		"\u0262\u0264\x05\u0158\xAD\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264" +
		"\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02" +
		"\u0266\u025B\x03\x02\x02\x02\u0266\u0265\x03\x02\x02\x02\u0267\u0271\x03" +
		"\x02\x02\x02\u0268\u026E\x05> \x02\u0269\u026A\x05\u0158\xAD\x02\u026A" +
		"\u026B\x05> \x02\u026B\u026D\x03\x02\x02\x02\u026C\u0269\x03\x02\x02\x02" +
		"\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03" +
		"\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271" +
		"\u0268\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x03\x02" +
		"\x02\x02\u0273\u0275\x05\u0158\xAD\x02\u0274\u0273\x03\x02\x02\x02\u0274" +
		"\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x07[\x02" +
		"\x02\u02779\x03\x02\x02\x02\u0278\u0280\x05<\x1F\x02\u0279\u027A\x05\u0156" +
		"\xAC\x02\u027A\u027B\x07_\x02\x02\u027B\u027C\x05\u0156\xAC\x02\u027C" +
		"\u027D\x05<\x1F\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0279\x03\x02\x02" +
		"\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281" +
		"\x03\x02\x02\x02\u0281;\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283" +
		"\u0284\x05\x9CO\x02\u0284\u0286\x05\u014E\xA8\x02\u0285\u0287\x05\u013E" +
		"\xA0\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287" +
		"\u0289\x03\x02\x02\x02\u0288\u028A\x05\u0136\x9C\x02\u0289\u0288\x03\x02" +
		"\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A=\x03\x02\x02\x02\u028B\u028C" +
		"\x072\x02\x02\u028C\u028E\x05\u0156\xAC\x02\u028D\u028B\x03\x02\x02\x02" +
		"\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0292\x05" +
		"\xAEX\x02\u0290\u0292\x05@!\x02\u0291\u028D\x03\x02\x02\x02\u0291\u0290" +
		"\x03\x02\x02\x02\u0292?\x03\x02\x02\x02\u0293\u029B\x05B\"\x02\u0294\u029B" +
		"\x05J&\x02\u0295\u0298\x05\x1E\x10\x02\u0296\u0299\x056\x1C\x02\u0297" +
		"\u0299\x05D#\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0297\x03\x02\x02\x02" +
		"\u0299\u029B\x03\x02\x02\x02\u029A\u0293\x03\x02\x02\x02\u029A\u0294\x03" +
		"\x02\x02\x02\u029A\u0295\x03\x02\x02\x02\u029BA\x03\x02\x02\x02\u029C" +
		"\u029E\x05\x1E\x10\x02\u029D\u029F\x05.\x18\x02\u029E\u029D\x03\x02\x02" +
		"\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A3\x03\x02\x02\x02\u02A0\u02A1" +
		"\x05H%\x02\u02A1\u02A2\x05\u0156\xAC\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3" +
		"\u02A0\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A5\x03\x02" +
		"\x02\x02\u02A5\u02A6\x05F$\x02\u02A6\u02B7\x05n8\x02\u02A7\u02A8\x07\x19" +
		"\x02\x02\u02A8\u02A9\x05\u0156\xAC\x02\u02A9\u02AA\x05\xAAV\x02\u02AA" +
		"\u02B8\x03\x02\x02\x02\u02AB\u02AC\x05\u0156\xAC\x02\u02AC\u02AD\x079" +
		"\x02\x02\u02AD\u02AE\x05\u0156\xAC\x02\u02AE\u02AF\x05l7\x02\u02AF\u02B1" +
		"\x03\x02\x02\x02\u02B0\u02AB\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02" +
		"\u02B1\u02B5\x03\x02\x02\x02\u02B2\u02B3\x05\u0156\xAC\x02\u02B3\u02B4" +
		"\x05v<\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02B2\x03\x02\x02\x02\u02B5" +
		"\u02B6\x03\x02\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7\u02A7\x03\x02" +
		"\x02\x02\u02B7\u02B0\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8" +
		"C\x03\x02\x02\x02\u02B9\u02BA\x05F$\x02\u02BA\u02BB\x05\u0156\xAC\x02" +
		"\u02BB\u02BC\x05v<\x02\u02BCE\x03\x02\x02\x02\u02BD\u02C0\x05\u014E\xA8" +
		"\x02\u02BE\u02C0\x05\u014A\xA6\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF\u02BE" +
		"\x03\x02\x02\x02\u02C0G\x03\x02\x02\x02\u02C1\u02C4\x05Z.\x02\u02C2\u02C4" +
		"\x07<\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C2\x03\x02\x02\x02" +
		"\u02C4I\x03\x02\x02\x02\u02C5\u02C6\x05\xB4[\x02\u02C6K\x03\x02\x02\x02" +
		"\u02C7\u02CE\x05N(\x02\u02C8\u02C9\x07_\x02\x02\u02C9\u02CA\x05\u0156" +
		"\xAC\x02\u02CA\u02CB\x05N(\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02C8" +
		"\x03\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02" +
		"\u02CE\u02CF\x03\x02\x02\x02\u02CFM\x03\x02\x02\x02\u02D0\u02CE\x03\x02" +
		"\x02\x02\u02D1\u02D7\x05P)\x02\u02D2\u02D3\x05\u0156\xAC\x02\u02D3\u02D4" +
		"\x07a\x02\x02\u02D4\u02D5\x05\u0156\xAC\x02\u02D5\u02D6\x05R*\x02\u02D6" +
		"\u02D8\x03\x02\x02\x02\u02D7\u02D2\x03\x02\x02\x02\u02D7\u02D8\x03\x02" +
		"\x02\x02\u02D8O\x03\x02\x02\x02\u02D9\u02DA\x05\u014E\xA8\x02\u02DAQ\x03" +
		"\x02\x02\x02\u02DB\u02DC\x05\xF4{\x02\u02DCS\x03\x02\x02\x02\u02DD\u02E5" +
		"\x05R*\x02\u02DE\u02DF\x05\u0156\xAC\x02\u02DF\u02E0\x07_\x02\x02\u02E0" +
		"\u02E1\x05\u0156\xAC\x02\u02E1\u02E2\x05R*\x02\u02E2\u02E4\x03\x02\x02" +
		"\x02\u02E3\u02DE\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3" +
		"\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02" +
		"\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EA\x05\u0156\xAC\x02\u02E9\u02EB" +
		"\x07_\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02" +
		"\u02EBU\x03\x02\x02\x02\u02EC\u02ED\x05\x9CO\x02\u02ED\u02EE\x07\\\x02" +
		"\x02\u02EE\u02EF\x07]\x02\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0\u02EC" +
		"\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02" +
		"\u02F2\u02F3\x03\x02\x02\x02\u02F3W\x03\x02\x02\x02\u02F4\u02F6\x05V," +
		"\x02\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6Y\x03" +
		"\x02\x02\x02\u02F7\u02FA\x05\x9CO\x02\u02F8\u02FB\x05d3\x02\u02F9\u02FB" +
		"\x05b2\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FB" +
		"\u02FC\x03\x02\x02\x02\u02FC\u02FD\x05X-\x02\u02FD[\x03\x02\x02\x02\u02FE" +
		"\u0304\x05\x9CO\x02\u02FF\u0302\x05d3\x02\u0300\u0302\x07<\x02\x02\u0301" +
		"\u02FF\x03\x02\x02\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0305\x03\x02" +
		"\x02\x02\u0303\u0305\x05`1\x02\u0304\u0301\x03\x02\x02\x02\u0304\u0303" +
		"\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0307\x05X-\x02\u0307" +
		"]\x03\x02\x02\x02\u0308\u030B\x05~@\x02\u0309\u030B\x05\x80A\x02\u030A" +
		"\u0308\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B\u030D\x03\x02" +
		"\x02\x02\u030C\u030E\x05f4\x02\u030D\u030C\x03\x02\x02\x02\u030D\u030E" +
		"\x03\x02\x02\x02\u030E_\x03\x02\x02\x02\u030F\u0311\x05~@\x02\u0310\u0312" +
		"\x05f4\x02\u0311\u0310\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
		"a\x03\x02\x02\x02\u0313\u0315\x05\x80A\x02\u0314\u0316\x05f4\x02\u0315" +
		"\u0314\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316c\x03\x02\x02" +
		"\x02\u0317\u0318\x07\x0F\x02\x02\u0318e\x03\x02\x02\x02\u0319\u031A\x07" +
		"c\x02\x02\u031A\u031B\x05\u0156\xAC\x02\u031B\u0322\x05h5\x02\u031C\u031D" +
		"\x07_\x02\x02\u031D\u031E\x05\u0156\xAC\x02\u031E\u031F\x05h5\x02\u031F" +
		"\u0321\x03\x02\x02\x02\u0320\u031C\x03\x02\x02\x02\u0321\u0324\x03\x02" +
		"\x02\x02\u0322\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
		"\u0325\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0326\x05\u0156" +
		"\xAC\x02\u0326\u0327\x07b\x02\x02\u0327g\x03\x02\x02\x02\u0328\u0332\x05" +
		"\\/\x02\u0329\u032A\x05\x9CO\x02\u032A\u032F\x07f\x02\x02\u032B\u032C" +
		"\t\x05\x02\x02\u032C\u032D\x05\u0156\xAC\x02\u032D\u032E\x05\\/\x02\u032E" +
		"\u0330\x03\x02\x02\x02\u032F\u032B\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330\u0332\x03\x02\x02\x02\u0331\u0328\x03\x02\x02\x02\u0331" +
		"\u0329\x03\x02\x02\x02\u0332i\x03\x02\x02\x02\u0333\u0334\x05\x9CO\x02" +
		"\u0334\u0335\x05~@\x02\u0335k\x03\x02\x02\x02\u0336\u033D\x05j6\x02\u0337" +
		"\u0338\x07_\x02\x02\u0338\u0339\x05\u0156\xAC\x02\u0339\u033A\x05j6\x02" +
		"\u033A\u033C\x03\x02\x02\x02\u033B\u0337\x03\x02\x02\x02\u033C\u033F\x03" +
		"\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E" +
		"m\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0342\x07X\x02\x02" +
		"\u0341\u0343\x05p9\x02\u0342\u0341\x03\x02\x02\x02\u0342\u0343\x03\x02" +
		"\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x05\u0154\xAB\x02\u0345" +
		"o\x03\x02\x02\x02\u0346\u0349\x05t;\x02\u0347\u0349\x05r:\x02\u0348\u0346" +
		"\x03\x02\x02\x02\u0348\u0347\x03\x02\x02\x02\u0349\u0350\x03\x02\x02\x02" +
		"\u034A\u034B\x07_\x02\x02\u034B\u034C\x05\u0156\xAC\x02\u034C\u034D\x05" +
		"t;\x02\u034D\u034F\x03\x02\x02\x02\u034E\u034A\x03\x02\x02\x02\u034F\u0352" +
		"\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02" +
		"\u0351q\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0354\x05\\" +
		"/\x02\u0354\u0355\x077\x02\x02\u0355s\x03\x02\x02\x02\u0356\u0358\x05" +
		"*\x16\x02\u0357\u0359\x05\\/\x02\u0358\u0357\x03\x02\x02\x02\u0358\u0359" +
		"\x03\x02\x02\x02\u0359\u035B\x03\x02\x02\x02\u035A\u035C\x07\x87\x02\x02" +
		"\u035B\u035A\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x03" +
		"\x02\x02\x02\u035D\u0363\x05P)\x02\u035E\u035F\x05\u0156\xAC\x02\u035F" +
		"\u0360\x07a\x02\x02\u0360\u0361\x05\u0156\xAC\x02\u0361\u0362\x05\u0100" +
		"\x81\x02\u0362\u0364\x03\x02\x02\x02\u0363\u035E\x03\x02\x02\x02\u0363" +
		"\u0364\x03\x02\x02\x02\u0364u\x03\x02\x02\x02\u0365\u0366\x05\xAEX\x02" +
		"\u0366w\x03\x02\x02\x02\u0367\u036C\x05z>\x02\u0368\u0369\x07`\x02\x02" +
		"\u0369\u036B\x05z>\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036E\x03\x02" +
		"\x02\x02\u036C\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D" +
		"y\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0375\x05\u014E\xA8" +
		"\x02\u0370\u0375\x07\n\x02\x02\u0371\u0375\x07\v\x02\x02\u0372\u0375\x07" +
		"\t\x02\x02\u0373\u0375\x07\f\x02\x02\u0374\u036F\x03\x02\x02\x02\u0374" +
		"\u0370\x03\x02\x02\x02\u0374\u0371\x03\x02\x02\x02\u0374\u0372\x03\x02" +
		"\x02\x02\u0374\u0373\x03\x02\x02\x02\u0375{\x03\x02\x02\x02\u0376\u0377" +
		"\x05z>\x02\u0377\u0378\x07`\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379" +
		"\u0376\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02" +
		"\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C}\x03\x02\x02\x02\u037D\u037B" +
		"\x03\x02\x02\x02\u037E\u037F\x05|?\x02\u037F\u0380\x05\u014E\xA8\x02\u0380" +
		"\x7F\x03\x02\x02\x02\u0381\u0382\x05|?\x02\u0382\u0387\x05\u014C\xA7\x02" +
		"\u0383\u0384\x07`\x02\x02\u0384\u0386\x05\u014C\xA7\x02\u0385\u0383\x03" +
		"\x02\x02\x02\u0386\u0389\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0387" +
		"\u0388\x03\x02\x02\x02\u0388\x81\x03\x02\x02\x02\u0389\u0387\x03\x02\x02" +
		"\x02\u038A\u0390\x07?\x02\x02\u038B\u0390\x07@\x02\x02\u038C\u0390\x05" +
		"\u014A\xA6\x02\u038D\u0390\x07A\x02\x02\u038E\u0390\x07B\x02\x02\u038F" +
		"\u038A\x03\x02\x02\x02\u038F\u038B\x03\x02\x02\x02\u038F\u038C\x03\x02" +
		"\x02\x02\u038F\u038D\x03\x02\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390" +
		"\x83\x03\x02\x02\x02\u0391\u0392\x07\x04\x02\x02\u0392\u0397\x05\x86D" +
		"\x02\u0393\u0394\x07\x06\x02\x02\u0394\u0396\x05\x86D\x02\u0395\u0393" +
		"\x03\x02\x02\x02\u0396\u0399\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02" +
		"\u0397\u0398\x03\x02\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399\u0397\x03" +
		"\x02\x02\x02\u039A\u039B\x07\x05\x02\x02\u039B\x85\x03\x02\x02\x02\u039C" +
		"\u039F\x05\x88E\x02\u039D\u039F\x05\x94K\x02\u039E\u039C\x03\x02\x02\x02" +
		"\u039E\u039D\x03\x02\x02\x02\u039F\x87\x03\x02\x02\x02\u03A0\u03A4\x05" +
		"\u014E\xA8\x02\u03A1\u03A3\x07\x07\x02\x02\u03A2\u03A1\x03\x02\x02\x02" +
		"\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03" +
		"\x02\x02\x02\u03A5\x89\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A7" +
		"\u03A8\x05\x8EH\x02\u03A8\u03A9\x05\u0156\xAC\x02\u03A9\u03AA\x07U\x02" +
		"\x02\u03AA\u03AB\x05\u0156\xAC\x02\u03AB\u03AC\x05\x92J\x02\u03AC\x8B" +
		"\x03\x02\x02\x02\u03AD\u03AE\x05\x90I\x02\u03AE\u03AF\x05\u0156\xAC\x02" +
		"\u03AF\u03B0\x07U\x02\x02\u03B0\u03B1\x05\u0156\xAC\x02\u03B1\u03B2\x05" +
		"\x92J\x02\u03B2\x8D\x03\x02\x02\x02\u03B3\u03B4\x05n8\x02\u03B4\x8F\x03" +
		"\x02\x02\x02\u03B5\u03B8\x05n8\x02\u03B6\u03B8\x05P)\x02\u03B7\u03B5\x03" +
		"\x02\x02\x02\u03B7\u03B6\x03\x02\x02\x02\u03B8\x91\x03\x02\x02\x02\u03B9" +
		"\u03BC\x05\xAEX\x02\u03BA\u03BC\x05\xF6|\x02\u03BB\u03B9\x03\x02\x02\x02" +
		"\u03BB\u03BA\x03\x02\x02\x02\u03BC\x93\x03\x02\x02\x02\u03BD\u03C6\x07" +
		"Z\x02\x02\u03BE\u03C2\x05\u0156\xAC\x02\u03BF\u03C0\x05p9\x02\u03C0\u03C1" +
		"\x05\u0156\xAC\x02\u03C1\u03C3\x03\x02\x02\x02\u03C2\u03BF\x03\x02\x02" +
		"\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C5" +
		"\x07U\x02\x02\u03C5\u03C7\x03\x02\x02\x02\u03C6\u03BE\x03\x02\x02\x02" +
		"\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C9\x03\x02\x02\x02\u03C8\u03CA\x05" +
		"\u0158\xAD\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
		"\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CC\x05\x98M\x02\u03CC\u03CD\x07" +
		"[\x02\x02\u03CD\x95\x03\x02\x02\x02\u03CE\u03D1\x05\x94K\x02\u03CF\u03D1" +
		"\x05\x8AF\x02";
	private static readonly _serializedATNSegment2: string =
		"\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\x97\x03" +
		"\x02\x02\x02\u03D2\u03D4\x05\x9AN\x02\u03D3\u03D2\x03\x02\x02\x02\u03D3" +
		"\u03D4\x03\x02\x02\x02\u03D4\x99\x03\x02\x02\x02\u03D5\u03DB\x05\xB0Y" +
		"\x02\u03D6\u03D7\x05\u0158\xAD\x02\u03D7\u03D8\x05\xB0Y\x02\u03D8\u03DA" +
		"\x03\x02\x02\x02\u03D9\u03D6\x03\x02\x02\x02\u03DA\u03DD\x03\x02\x02\x02" +
		"\u03DB\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DF\x03" +
		"\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DE\u03E0\x05\u0158\xAD\x02" +
		"\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\x9B\x03" +
		"\x02\x02\x02\u03E1\u03E7\x05\x9EP\x02\u03E2\u03E3\x05\u0156\xAC\x02\u03E3" +
		"\u03E4\x05\x9EP\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03E2\x03\x02\x02" +
		"\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8" +
		"\x03\x02\x02\x02\u03E8\u03EA\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02" +
		"\u03EA\u03EB\x05\u0156\xAC\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03E1" +
		"\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\x9D\x03\x02\x02\x02" +
		"\u03EE\u03EF\x07\x86\x02\x02\u03EF\u03F7\x05\xA2R\x02\u03F0\u03F1\x05" +
		"\u0156\xAC\x02\u03F1\u03F3\x07X\x02\x02\u03F2\u03F4\x05\xA0Q\x02\u03F3" +
		"\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x03\x02" +
		"\x02\x02\u03F5\u03F6\x05\u0154\xAB\x02\u03F6\u03F8\x03\x02\x02\x02\u03F7" +
		"\u03F0\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\x9F\x03\x02\x02" +
		"\x02\u03F9\u03FC\x05\xA4S\x02\u03FA\u03FC\x05\xAAV\x02\u03FB\u03F9\x03" +
		"\x02\x02\x02\u03FB\u03FA\x03\x02\x02\x02\u03FC\xA1\x03\x02\x02\x02\u03FD" +
		"\u03FE\x05~@\x02\u03FE\xA3\x03\x02\x02\x02\u03FF\u0404\x05\xA6T\x02\u0400" +
		"\u0401\x07_\x02\x02\u0401\u0403\x05\xA6T\x02\u0402\u0400\x03\x02\x02\x02" +
		"\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03" +
		"\x02\x02\x02\u0405\xA5\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0407" +
		"\u0408\x05\xA8U\x02\u0408\u0409\x05\u0156\xAC\x02\u0409\u040A\x07a\x02" +
		"\x02\u040A\u040B\x05\u0156\xAC\x02\u040B\u040C\x05\xAAV\x02\u040C\xA7" +
		"\x03\x02\x02\x02\u040D\u0410\x05\u014E\xA8\x02\u040E\u0410\x05\u0152\xAA" +
		"\x02\u040F\u040D\x03\x02\x02\x02\u040F\u040E\x03\x02\x02\x02\u0410\xA9" +
		"\x03\x02\x02\x02\u0411\u0415\x05\xACW\x02\u0412\u0415\x05\x9EP\x02\u0413" +
		"\u0415\x05\u0100\x81\x02\u0414\u0411\x03\x02\x02\x02\u0414\u0412\x03\x02" +
		"\x02\x02\u0414\u0413\x03\x02\x02\x02\u0415\xAB\x03\x02\x02\x02\u0416\u0422" +
		"\x07\\\x02\x02\u0417\u041C\x05\xAAV\x02\u0418\u0419\x07_\x02\x02\u0419" +
		"\u041B\x05\xAAV\x02\u041A\u0418\x03\x02\x02\x02\u041B\u041E\x03\x02\x02" +
		"\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u0420" +
		"\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0421\x07_\x02\x02" +
		"\u0420\u041F\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0423\x03" +
		"\x02\x02\x02\u0422\u0417\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423" +
		"\u0424\x03\x02\x02\x02\u0424\u0425\x07]\x02\x02\u0425\xAD\x03\x02\x02" +
		"\x02\u0426\u0428\x07Z\x02\x02\u0427\u0429\x05\u0158\xAD\x02\u0428\u0427" +
		"\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02" +
		"\u042A\u042B\x05\x98M\x02\u042B\u042C\x07[\x02\x02\u042C\xAF\x03\x02\x02" +
		"\x02\u042D\u0430\x05\xB2Z\x02\u042E\u0430\x05\xCEh\x02\u042F\u042D\x03" +
		"\x02\x02\x02\u042F\u042E\x03\x02\x02\x02\u0430\xB1\x03\x02\x02\x02\u0431" +
		"\u0432\x06Z\x04\x02\u0432\u0433\x05\xB4[\x02\u0433\xB3\x03\x02\x02\x02" +
		"\u0434\u0435\x05 \x11\x02\u0435\u0440\x05\u0156\xAC\x02\u0436\u0438\x05" +
		"\\/\x02\u0437\u0436\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438" +
		"\u0439\x03\x02\x02\x02\u0439\u0441\x05L\'\x02\u043A\u043B\x05\xB6\\\x02" +
		"\u043B\u043C\x05\u0156\xAC\x02\u043C\u043D\x07a\x02\x02\u043D\u043E\x05" +
		"\u0156\xAC\x02\u043E\u043F\x05R*\x02\u043F\u0441\x03\x02\x02\x02\u0440" +
		"\u0437\x03\x02\x02\x02\u0440\u043A\x03\x02\x02\x02\u0441\u0446\x03\x02" +
		"\x02\x02\u0442\u0443\x05\\/\x02\u0443\u0444\x05L\'\x02\u0444\u0446\x03" +
		"\x02\x02\x02\u0445\u0434\x03\x02\x02\x02\u0445\u0442\x03\x02\x02\x02\u0446" +
		"\xB5\x03\x02\x02\x02\u0447\u0448\x07X\x02\x02\u0448\u044D\x05\xB8]\x02" +
		"\u0449\u044A\x07_\x02\x02\u044A\u044C\x05\xB8]\x02\u044B\u0449\x03\x02" +
		"\x02\x02\u044C\u044F\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02\u044D" +
		"\u044E\x03\x02\x02\x02\u044E\u0450\x03\x02\x02\x02\u044F\u044D\x03\x02" +
		"\x02\x02\u0450\u0451\x05\u0154\xAB\x02\u0451\xB7\x03\x02\x02\x02\u0452" +
		"\u0454\x05\\/\x02\u0453\u0452\x03\x02\x02\x02\u0453\u0454\x03\x02\x02" +
		"\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0456\x05P)\x02\u0456\xB9\x03\x02" +
		"\x02\x02\u0457\u0458\x07X\x02\x02\u0458\u045B\x05P)\x02\u0459\u045A\x07" +
		"_\x02\x02\u045A\u045C\x05P)\x02\u045B\u0459\x03\x02\x02\x02\u045C\u045D" +
		"\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02" +
		"\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x05\u0154\xAB\x02\u0460\xBB\x03" +
		"\x02\x02\x02\u0461\u0464\x05\xBE`\x02\u0462\u0464\x05\xC0a\x02\u0463\u0461" +
		"\x03\x02\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\xBD\x03\x02\x02\x02" +
		"\u0465\u0466\x07!\x02\x02\u0466\u0467\x05\xEEx\x02\u0467\u0468\x05\u0156" +
		"\xAC\x02\u0468\u0471\x05\xCEh\x02\u0469\u046C\x05\u0156\xAC\x02\u046A" +
		"\u046C\x05\u0158\xAD\x02\u046B\u0469\x03\x02\x02\x02\u046B\u046A\x03\x02" +
		"\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x07\x1B\x02\x02\u046E" +
		"\u046F\x05\u0156\xAC\x02\u046F\u0470\x05\xCEh\x02\u0470\u0472\x03\x02" +
		"\x02\x02\u0471\u046B\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472" +
		"\xBF\x03\x02\x02\x02\u0473\u0474\x075\x02\x02\u0474\u0475\x05\xEEx\x02" +
		"\u0475\u0476\x05\u0156\xAC\x02\u0476\u0477\x07Z\x02\x02\u0477\u047F\x05" +
		"\u0156\xAC\x02\u0478\u047A\x05\xDCo\x02\u0479\u0478\x03\x02\x02\x02\u047A" +
		"\u047B\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02\u047B\u047C\x03\x02" +
		"\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x05\u0156\xAC\x02\u047E" +
		"\u0480\x03\x02\x02\x02\u047F\u0479\x03\x02\x02\x02\u047F\u0480\x03\x02" +
		"\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\u0482\x07[\x02\x02\u0482\xC1" +
		"\x03\x02\x02\x02\u0483\u0484\x07 \x02\x02\u0484\u0485\x07X\x02\x02\u0485" +
		"\u0486\x05\xE0q\x02\u0486\u0487\x05\u0154\xAB\x02\u0487\u0488\x05\u0156" +
		"\xAC\x02\u0488\u0489\x05\xCEh\x02\u0489\u0497\x03\x02\x02\x02\u048A\u048B" +
		"\x07>\x02\x02\u048B\u048C\x05\xEEx\x02\u048C\u048D\x05\u0156\xAC\x02\u048D" +
		"\u048E\x05\xCEh\x02\u048E\u0497\x03\x02\x02\x02\u048F\u0490\x07\x1A\x02" +
		"\x02\u0490\u0491\x05\u0156\xAC\x02\u0491\u0492\x05\xCEh\x02\u0492\u0493" +
		"\x05\u0156\xAC\x02\u0493\u0494\x07>\x02\x02\u0494\u0495\x05\xEEx\x02\u0495" +
		"\u0497\x03\x02\x02\x02\u0496\u0483\x03\x02\x02\x02\u0496\u048A\x03\x02" +
		"\x02\x02\u0496\u048F\x03\x02\x02\x02\u0497\xC3\x03\x02\x02\x02\u0498\u049A" +
		"\x07\x18\x02\x02\u0499\u049B\x05\u014E\xA8\x02\u049A\u0499\x03\x02\x02" +
		"\x02\u049A\u049B\x03\x02\x02\x02\u049B\xC5\x03\x02\x02\x02\u049C\u049E" +
		"\x07\x12\x02\x02\u049D\u049F\x05\u014E\xA8\x02\u049E\u049D\x03\x02\x02" +
		"\x02\u049E\u049F\x03\x02\x02\x02\u049F\xC7\x03\x02\x02\x02\u04A0\u04A1" +
		"\x07\x13\x02\x02\u04A1\u04A2\x05\u0100\x81\x02\u04A2\xC9\x03\x02\x02\x02" +
		"\u04A3\u04A5\x07;\x02\x02\u04A4\u04A6\x05\xD6l\x02\u04A5\u04A4\x03\x02" +
		"\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7" +
		"\u04A8\x05\u0156\xAC\x02\u04A8\u04AE\x05\xAEX\x02\u04A9\u04AA\x05\u0156" +
		"\xAC\x02\u04AA\u04AB\x05\xD0i\x02\u04AB\u04AD\x03\x02\x02\x02\u04AC\u04A9" +
		"\x03\x02\x02\x02\u04AD\u04B0\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02" +
		"\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B4\x03\x02\x02\x02\u04B0\u04AE\x03" +
		"\x02\x02\x02\u04B1\u04B2\x05\u0156\xAC\x02\u04B2\u04B3\x05\xD4k\x02\u04B3" +
		"\u04B5\x03\x02\x02\x02\u04B4\u04B1\x03\x02\x02\x02\u04B4\u04B5\x03\x02" +
		"\x02\x02\u04B5\xCB\x03\x02\x02\x02\u04B6\u04B7\x07\x11\x02\x02\u04B7\u04BD" +
		"\x05\u0100\x81\x02\u04B8\u04B9\x05\u0156\xAC\x02\u04B9\u04BA\t\x06\x02" +
		"\x02\u04BA\u04BB\x05\u0156\xAC\x02\u04BB\u04BC\x05\u0100\x81\x02\u04BC" +
		"\u04BE\x03\x02\x02\x02\u04BD\u04B8\x03\x02\x02\x02\u04BD\u04BE\x03\x02" +
		"\x02\x02\u04BE\xCD\x03\x02\x02\x02\u04BF\u04DC\x05\xAEX\x02\u04C0\u04DC" +
		"\x05\xBC_\x02\u04C1\u04DC\x05\xC2b\x02\u04C2\u04DC\x05\xCAf\x02\u04C3" +
		"\u04C4\x076\x02\x02\u04C4\u04C5\x05\xEEx\x02\u04C5\u04C6\x05\u0156\xAC" +
		"\x02\u04C6\u04C7\x05\xAEX\x02\u04C7\u04DC\x03\x02\x02\x02\u04C8\u04CA" +
		"\x070\x02\x02\u04C9\u04CB\x05\u0100\x81\x02\u04CA\u04C9\x03\x02\x02\x02" +
		"\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04DC\x03\x02\x02\x02\u04CC\u04CD\x07" +
		"8\x02\x02\u04CD\u04DC\x05\u0100\x81\x02\u04CE\u04DC\x05\xC6d\x02\u04CF" +
		"\u04DC\x05\xC4c\x02\u04D0\u04D1\x06h\x05\x02\u04D1\u04DC\x05\xC8e\x02" +
		"\u04D2\u04D3\x05\u014E\xA8\x02\u04D3\u04D4\x07g\x02\x02\u04D4\u04D5\x05" +
		"\u0156\xAC\x02\u04D5\u04D6\x05\xCEh\x02\u04D6\u04DC\x03\x02\x02\x02\u04D7" +
		"\u04DC\x05\xCCg\x02\u04D8\u04DC\x05\xB2Z\x02\u04D9\u04DC\x05\xF6|\x02" +
		"\u04DA\u04DC\x07^\x02\x02\u04DB\u04BF\x03\x02\x02\x02\u04DB\u04C0\x03" +
		"\x02\x02\x02\u04DB\u04C1\x03\x02\x02\x02\u04DB\u04C2\x03\x02\x02\x02\u04DB" +
		"\u04C3\x03\x02\x02\x02\u04DB\u04C8\x03\x02\x02\x02\u04DB\u04CC\x03\x02" +
		"\x02\x02\u04DB\u04CE\x03\x02\x02\x02\u04DB\u04CF\x03\x02\x02\x02\u04DB" +
		"\u04D0\x03\x02\x02\x02\u04DB\u04D2\x03\x02\x02\x02\u04DB\u04D7\x03\x02" +
		"\x02\x02\u04DB\u04D8\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB" +
		"\u04DA\x03\x02\x02\x02\u04DC\xCF\x03\x02\x02\x02\u04DD\u04DE\x07\x15\x02" +
		"\x02\u04DE\u04DF\x07X\x02\x02\u04DF\u04E1\x05*\x16\x02\u04E0\u04E2\x05" +
		"\xD2j\x02\u04E1\u04E0\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2" +
		"\u04E3\x03\x02\x02\x02\u04E3\u04E4\x05\u014E\xA8\x02\u04E4\u04E5\x05\u0154" +
		"\xAB\x02\u04E5\u04E6\x05\u0156\xAC\x02\u04E6\u04E7\x05\xAEX\x02\u04E7" +
		"\xD1\x03\x02\x02\x02\u04E8\u04ED\x05~@\x02\u04E9\u04EA\x07u\x02\x02\u04EA" +
		"\u04EC\x05~@\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC\u04EF\x03\x02\x02\x02" +
		"\u04ED\u04EB\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\xD3\x03" +
		"\x02\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04F0\u04F1\x07\x1F\x02\x02\u04F1" +
		"\u04F2\x05\u0156\xAC\x02\u04F2\u04F3\x05\xAEX\x02\u04F3\xD5\x03\x02\x02" +
		"\x02\u04F4\u04F5\x07X\x02\x02\u04F5\u04F6\x05\u0156\xAC\x02\u04F6\u04F8" +
		"\x05\xD8m\x02\u04F7\u04F9\x05\u0158\xAD\x02\u04F8\u04F7\x03\x02\x02\x02" +
		"\u04F8\u04F9\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FB\x05" +
		"\u0154\xAB\x02\u04FB\xD7\x03\x02\x02\x02\u04FC\u0502\x05\xDAn\x02\u04FD" +
		"\u04FE\x05\u0158\xAD\x02\u04FE\u04FF\x05\xDAn\x02\u04FF\u0501\x03\x02" +
		"\x02\x02\u0500\u04FD\x03\x02\x02\x02\u0501\u0504\x03\x02\x02\x02\u0502" +
		"\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\xD9\x03\x02\x02" +
		"\x02\u0504\u0502\x03\x02\x02\x02\u0505\u0508\x05\xB2Z\x02\u0506\u0508" +
		"\x05\u0100\x81\x02\u0507\u0505\x03\x02\x02\x02\u0507\u0506\x03\x02\x02" +
		"\x02\u0508\xDB\x03\x02\x02\x02\u0509\u050F\x05\xDEp\x02\u050A\u050B\x05" +
		"\u0156\xAC\x02\u050B\u050C\x05\xDEp\x02\u050C\u050E\x03\x02\x02\x02\u050D" +
		"\u050A\x03\x02\x02\x02\u050E\u0511\x03\x02\x02\x02\u050F\u050D\x03\x02" +
		"\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0512\x03\x02\x02\x02\u0511" +
		"\u050F\x03\x02\x02\x02\u0512\u0513\x05\u0156\xAC\x02\u0513\u0514\x05\x9A" +
		"N\x02\u0514\xDD\x03\x02\x02\x02\u0515\u0516\x07\x14\x02\x02\u0516\u0517" +
		"\x05\u0100\x81\x02\u0517\u0518\x07g\x02\x02\u0518\u051C\x03\x02\x02\x02" +
		"\u0519\u051A\x07\x19\x02\x02\u051A\u051C\x07g\x02\x02\u051B\u0515\x03" +
		"\x02\x02\x02\u051B\u0519\x03\x02\x02\x02\u051C\xDF\x03\x02\x02\x02\u051D" +
		"\u0520\x05\xE2r\x02\u051E\u0520\x05\xE4s\x02\u051F\u051D\x03\x02\x02\x02" +
		"\u051F\u051E\x03\x02\x02\x02\u0520\xE1\x03\x02\x02\x02\u0521\u0523\x05" +
		"*\x16\x02\u0522\u0524\x05\\/\x02\u0523\u0522\x03\x02\x02\x02\u0523\u0524" +
		"\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0526\x05P)\x02\u0526" +
		"\u0527\t\x07\x02\x02\u0527\u0528\x05\u0100\x81\x02\u0528\xE3\x03\x02\x02" +
		"\x02\u0529\u052B\x05\xE6t\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B" +
		"\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u052E\x07^\x02\x02" +
		"\u052D\u052F\x05\u0100\x81\x02\u052E\u052D\x03\x02\x02\x02\u052E\u052F" +
		"\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0532\x07^\x02\x02" +
		"\u0531\u0533\x05\xE8u\x02\u0532\u0531\x03\x02\x02\x02\u0532\u0533\x03" +
		"\x02\x02\x02\u0533\xE5\x03\x02\x02\x02\u0534\u0537\x05\xB2Z\x02\u0535" +
		"\u0537\x05\xF0y\x02\u0536\u0534\x03\x02\x02\x02\u0536\u0535\x03\x02\x02" +
		"\x02\u0537\xE7\x03\x02\x02\x02\u0538\u0539\x05\xF0y\x02\u0539\xE9\x03" +
		"\x02\x02\x02\u053A\u053B\x07X\x02\x02\u053B\u053C\x05\\/\x02\u053C\u053D" +
		"\x05\u0154\xAB\x02\u053D\xEB\x03\x02\x02\x02\u053E\u053F\x05\xEEx\x02" +
		"\u053F\xED\x03\x02\x02\x02\u0540\u0541\x07X\x02\x02\u0541\u0542\x05\xF4" +
		"{\x02\u0542\u0543\x05\u0154\xAB\x02\u0543\xEF\x03\x02\x02\x02\u0544\u054B" +
		"\x05\xF2z\x02\u0545\u0546\x07_\x02\x02\u0546\u0547\x05\u0156\xAC\x02\u0547" +
		"\u0548\x05\xF2z\x02\u0548\u054A\x03\x02\x02\x02\u0549\u0545\x03\x02\x02" +
		"\x02\u054A\u054D\x03\x02\x02\x02\u054B\u0549\x03\x02\x02\x02\u054B\u054C" +
		"\x03\x02\x02\x02\u054C\xF1\x03\x02\x02\x02\u054D\u054B\x03\x02\x02\x02" +
		"\u054E\u0550\x07r\x02\x02\u054F\u054E\x03\x02\x02\x02\u054F\u0550\x03" +
		"\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0552\x05\u0100\x81\x02" +
		"\u0552\xF3\x03\x02\x02\x02\u0553\u0556\x05\xF6|\x02\u0554\u0556\x05\x8C" +
		"G\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0554\x03\x02\x02\x02\u0556\xF5" +
		"\x03\x02\x02\x02\u0557\u0558\x05\u0104\x83\x02\u0558\xF7\x03\x02\x02\x02" +
		"\u0559\u055B\x05\u0108\x85\x02\u055A\u055C\t\b\x02\x02\u055B\u055A\x03" +
		"\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\xF9\x03\x02\x02\x02\u055D" +
		"\u055E\x075\x02\x02\u055E\u055F\x05\xEEx\x02\u055F\u0560\x05\u0156\xAC" +
		"\x02\u0560\u0561\x07Z\x02\x02\u0561\u0565\x05\u0156\xAC\x02\u0562\u0564" +
		"\x05\xFC\x7F\x02\u0563\u0562\x03\x02\x02\x02\u0564\u0567\x03\x02\x02\x02" +
		"\u0565\u0563\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0568\x03" +
		"\x02\x02\x02\u0567\u0565\x03\x02\x02\x02\u0568\u0569\x05\u0156\xAC\x02" +
		"\u0569\u056A\x07[\x02\x02\u056A\xFB\x03\x02\x02\x02\u056B\u056C\x05\xFE" +
		"\x80\x02\u056C\u056D\x05\u0156\xAC\x02\u056D\u056F\x03\x02\x02\x02\u056E" +
		"\u056B\x03\x02\x02\x02\u056F\u0570\x03\x02\x02\x02\u0570\u056E\x03\x02" +
		"\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572" +
		"\u0573\x05\x9AN\x02\u0573\xFD\x03\x02\x02\x02\u0574\u0575\x07\x14\x02" +
		"\x02\u0575\u0578\x05\xF0y\x02\u0576\u0578\x07\x19\x02\x02\u0577\u0574" +
		"\x03\x02\x02\x02\u0577\u0576\x03\x02\x02\x02\u0578\u0579\x03\x02\x02\x02" +
		"\u0579\u057A\t\t\x02\x02\u057A\xFF\x03\x02\x02\x02\u057B\u057C\b\x81\x01" +
		"\x02\u057C\u057D\x05\xEAv\x02\u057D\u057E\x05\u0102\x82\x02\u057E\u058E" +
		"\x03\x02\x02\x02\u057F\u058E\x05\xF8}\x02\u0580\u058E\x05\xFA~\x02\u0581" +
		"\u0582\t\n\x02\x02\u0582\u0583\x05\u0156\xAC\x02\u0583\u0584\x05\u0100" +
		"\x81\x14\u0584\u058E\x03\x02\x02\x02\u0585\u0586\t\v\x02\x02\u0586\u058E" +
		"\x05\u0100\x81\x12\u0587\u0588\x05\xBA^\x02\u0588\u0589\x05\u0156\xAC" +
		"\x02\u0589\u058A\x07a\x02\x02\u058A\u058B\x05\u0156\xAC\x02\u058B\u058C" +
		"\x05\xF6|\x02\u058C\u058E\x03\x02\x02\x02\u058D\u057B\x03\x02\x02\x02" +
		"\u058D\u057F\x03\x02\x02\x02\u058D\u0580\x03\x02\x02\x02\u058D\u0581\x03" +
		"\x02\x02\x02\u058D\u0585\x03\x02\x02\x02\u058D\u0587\x03\x02\x02\x02\u058E" +
		"\u05FD\x03\x02\x02\x02\u058F\u0590\f\x13\x02\x02\u0590\u0591\x07P\x02" +
		"\x02\u0591\u0592\x05\u0156\xAC\x02\u0592\u0593\x05\u0100\x81\x14\u0593" +
		"\u05FC\x03\x02\x02\x02\u0594\u0595\f\x11\x02\x02\u0595\u0596\x05\u0156" +
		"\xAC\x02\u0596\u0597\t\f\x02\x02\u0597\u0598\x05\u0156\xAC\x02\u0598\u0599" +
		"\x05\u0100\x81\x12\u0599\u05FC\x03\x02\x02\x02\u059A\u059B\f\x10\x02\x02" +
		"\u059B\u059C\t\r\x02\x02\u059C\u059D\x05\u0156\xAC\x02\u059D\u059E\x05" +
		"\u0100\x81\x11\u059E\u05FC\x03\x02\x02\x02\u059F\u05A0\f\x0F\x02\x02\u05A0" +
		"\u05AB\x05\u0156\xAC\x02\u05A1\u05A2\x07c\x02\x02\u05A2\u05A9\x07c\x02" +
		"\x02\u05A3\u05A4\x07b\x02\x02\u05A4\u05A5\x07b\x02\x02\u05A5\u05A9\x07" +
		"b\x02\x02\u05A6\u05A7\x07b\x02\x02\u05A7\u05A9\x07b\x02\x02\u05A8\u05A1" +
		"\x03\x02\x02\x02\u05A8\u05A3\x03\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02" +
		"\u05A9\u05AC\x03\x02\x02\x02\u05AA\u05AC\t\x0E\x02\x02\u05AB\u05A8\x03" +
		"\x02\x02\x02\u05AB\u05AA\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD" +
		"\u05AE\x05\u0156\xAC\x02\u05AE\u05AF\x05\u0100\x81\x10\u05AF\u05FC\x03" +
		"\x02\x02\x02\u05B0\u05B1\f\r\x02\x02\u05B1\u05B2\x05\u0156\xAC\x02\u05B2" +
		"\u05B3\t\x0F\x02\x02\u05B3\u05B4\x05\u0156\xAC\x02\u05B4\u05B5\x05\u0100" +
		"\x81\x0E\u05B5\u05FC\x03\x02\x02\x02\u05B6\u05B7\f\f\x02\x02\u05B7\u05B8" +
		"\x05\u0156\xAC\x02\u05B8\u05B9\t\x10\x02\x02\u05B9\u05BA\x05\u0156\xAC" +
		"\x02\u05BA\u05BB\x05\u0100\x81\r\u05BB\u05FC\x03\x02\x02\x02\u05BC\u05BD" +
		"\f\v\x02\x02\u05BD\u05BE\x05\u0156\xAC\x02\u05BE\u05BF\t\x11\x02\x02\u05BF" +
		"\u05C0\x05\u0156\xAC\x02\u05C0\u05C1\x05\u0100\x81\f\u05C1\u05FC\x03\x02" +
		"\x02\x02\u05C2\u05C3\f\n\x02\x02\u05C3\u05C4\x05\u0156\xAC\x02\u05C4\u05C5" +
		"\x07t\x02\x02\u05C5\u05C6\x05\u0156\xAC\x02\u05C6\u05C7\x05\u0100\x81" +
		"\v\u05C7\u05FC\x03\x02\x02\x02\u05C8\u05C9\f\t\x02\x02\u05C9\u05CA\x05" +
		"\u0156\xAC\x02\u05CA\u05CB\x07v\x02\x02\u05CB\u05CC\x05\u0156\xAC\x02" +
		"\u05CC\u05CD\x05\u0100\x81\n\u05CD\u05FC\x03\x02\x02\x02\u05CE\u05CF\f" +
		"\b\x02\x02\u05CF\u05D0\x05\u0156\xAC\x02\u05D0\u05D1\x07u\x02\x02\u05D1" +
		"\u05D2\x05\u0156\xAC\x02\u05D2\u05D3\x05\u0100\x81\t\u05D3\u05FC\x03\x02" +
		"\x02\x02\u05D4\u05D5\f\x07\x02\x02\u05D5\u05D6\x05\u0156\xAC\x02\u05D6" +
		"\u05D7\x07l\x02\x02\u05D7\u05D8\x05\u0156\xAC\x02\u05D8\u05D9\x05\u0100" +
		"\x81\b\u05D9\u05FC\x03\x02\x02\x02\u05DA\u05DB\f\x06\x02\x02\u05DB\u05DC" +
		"\x05\u0156\xAC\x02\u05DC\u05DD\x07m\x02\x02\u05DD\u05DE\x05\u0156\xAC" +
		"\x02\u05DE\u05DF\x05\u0100\x81\x07\u05DF\u05FC\x03\x02\x02\x02\u05E0\u05E1" +
		"\f\x05\x02\x02\u05E1\u05EB\x05\u0156\xAC\x02\u05E2\u05E3\x07f\x02\x02" +
		"\u05E3\u05E4\x05\u0156\xAC\x02\u05E4\u05E5\x05\u0100\x81\x02\u05E5\u05E6" +
		"\x05\u0156\xAC\x02\u05E6\u05E7\x07g\x02\x02\u05E7\u05E8\x05\u0156\xAC" +
		"\x02\u05E8\u05EC\x03\x02\x02\x02\u05E9\u05EA\x07K\x02\x02\u05EA\u05EC" +
		"\x05\u0156\xAC\x02\u05EB\u05E2\x03\x02\x02\x02\u05EB\u05E9\x03\x02\x02" +
		"\x02\u05EC\u05ED\x03\x02\x02\x02\u05ED\u05EE\x05\u0100\x81\x05\u05EE\u05FC" +
		"\x03\x02\x02\x02\u05EF\u05F0\f\x0E\x02\x02\u05F0\u05F1\x05\u0156\xAC\x02" +
		"\u05F1\u05F2\t\x12\x02\x02\u05F2\u05F3\x05\u0156\xAC\x02\u05F3\u05F4\x05" +
		"\\/\x02\u05F4\u05FC\x03\x02\x02\x02\u05F5\u05F6\f\x03\x02\x02\u05F6\u05F7" +
		"\x05\u0156\xAC\x02\u05F7\u05F8\t\x13\x02\x02\u05F8\u05F9\x05\u0156\xAC" +
		"\x02\u05F9\u05FA\x05\xF4{\x02\u05FA\u05FC\x03\x02\x02\x02\u05FB\u058F" +
		"\x03\x02\x02\x02\u05FB\u0594\x03\x02\x02\x02\u05FB\u059A\x03\x02\x02\x02" +
		"\u05FB\u059F\x03\x02\x02\x02\u05FB\u05B0\x03\x02\x02\x02\u05FB\u05B6\x03" +
		"\x02\x02\x02\u05FB\u05BC\x03\x02\x02\x02\u05FB\u05C2\x03\x02\x02\x02\u05FB" +
		"\u05C8\x03\x02\x02\x02\u05FB\u05CE\x03\x02\x02\x02\u05FB\u05D4\x03\x02" +
		"\x02\x02\u05FB\u05DA\x03\x02\x02\x02\u05FB\u05E0\x03\x02\x02\x02\u05FB" +
		"\u05EF\x03\x02\x02\x02\u05FB\u05F5\x03\x02\x02\x02\u05FC\u05FF\x03\x02" +
		"\x02\x02\u05FD\u05FB\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02\x02\u05FE" +
		"\u0101\x03\x02\x02\x02\u05FF\u05FD\x03\x02\x02\x02\u0600\u0601\x05\xEA" +
		"v\x02\u0601\u0602\x05\u0102\x82\x02\u0602\u060B\x03\x02\x02\x02\u0603" +
		"\u060B\x05\xF8}\x02\u0604\u0605\t\n\x02\x02\u0605\u0606\x05\u0156\xAC" +
		"\x02\u0606\u0607\x05\u0102\x82\x02\u0607\u060B\x03\x02\x02\x02\u0608\u0609" +
		"\t\v\x02\x02\u0609\u060B\x05\u0102\x82\x02\u060A\u0600\x03\x02\x02\x02" +
		"\u060A\u0603\x03\x02\x02\x02\u060A\u0604\x03\x02\x02\x02\u060A\u0608\x03" +
		"\x02\x02\x02\u060B\u0103\x03\x02\x02\x02\u060C\u0610\x05\u0100\x81\x02" +
		"\u060D\u060E\x06\x83\x15\x03\u060E\u0611\x05\u0140\xA1\x02\u060F\u0611" +
		"\x03\x02\x02\x02\u0610\u060D\x03\x02\x02\x02\u0610\u060F\x03\x02\x02\x02" +
		"\u0611\u0615\x03\x02\x02\x02\u0612\u0614\x05\u0106\x84\x02\u0613\u0612" +
		"\x03\x02\x02\x02\u0614\u0617\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02" +
		"\u0615\u0616\x03\x02\x02\x02\u0616\u0105\x03\x02\x02\x02\u0617\u0615\x03" +
		"\x02\x02\x02\u0618\u061F\x05\u011A\x8E\x02\u0619\u061B\x05\u010A\x86\x02" +
		"\u061A\u0619\x03\x02\x02\x02\u061B\u061C\x03\x02\x02\x02\u061C\u061A\x03" +
		"\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u0620\x03\x02\x02\x02\u061E" +
		"\u0620\x05\u0140\xA1\x02\u061F\u061A\x03\x02\x02\x02\u061F\u061E\x03\x02" +
		"\x02\x02\u061F\u0620\x03\x02\x02\x02\u0620\u0107\x03\x02\x02\x02\u0621" +
		"\u0625\x05\u0114\x8B\x02\u0622\u0623\x06\x85\x16\x02\u0623\u0625\x072" +
		"\x02\x02\u0624\u0621\x03\x02\x02\x02\u0624\u0622\x03\x02\x02\x02\u0625" +
		"\u062B\x03\x02\x02\x02\u0626\u0627\x05\u010A\x86\x02\u0627\u0628\b\x85" +
		"\x01\x02\u0628\u062A\x03\x02\x02\x02\u0629\u0626\x03\x02\x02\x02\u062A" +
		"\u062D\x03\x02\x02\x02\u062B\u0629\x03\x02\x02\x02\u062B\u062C\x03\x02" +
		"\x02\x02\u062C\u0109\x03\x02\x02\x02\u062D\u062B\x03\x02\x02\x02\u062E" +
		"\u0647\x05\u0156\xAC\x02\u062F\u0630\x07`\x02\x02\u0630\u0631\x05\u0156" +
		"\xAC\x02\u0631\u0632\x07(\x02\x02\u0632\u0633\x05\u0130\x99\x02\u0633" +
		"\u0634\b\x86\x01\x02\u0634\u0648\x03\x02\x02\x02\u0635\u0636\t\x14\x02" +
		"\x02\u0636\u0639\x05\u0156\xAC\x02\u0637\u063A\x07\x86\x02\x02\u0638\u063A" +
		"\x05\u013A\x9E\x02\u0639\u0637\x03\x02\x02\x02\u0639\u0638\x03\x02\x02" +
		"\x02\u0639\u063A\x03\x02\x02\x02\u063A\u0640\x03\x02\x02\x02\u063B\u063C" +
		"\x07L\x02\x02\u063C\u0640\x05\u0156\xAC\x02\u063D\u063E\x07M\x02\x02\u063E" +
		"\u0640\x05\u0156\xAC\x02\u063F\u0635\x03\x02\x02\x02\u063F\u063B\x03\x02" +
		"\x02\x02\u063F\u063D\x03\x02\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641" +
		"\u0642\x05\u010C\x87\x02\u0642\u0643\b\x86\x01\x02\u0643\u0648\x03\x02" +
		"\x02\x02\u0644\u0645\x05\x96L\x02\u0645\u0646\b\x86\x01\x02\u0646\u0648" +
		"\x03\x02\x02\x02\u0647\u062F\x03\x02\x02\x02\u0647\u063F\x03\x02\x02\x02" +
		"\u0647\u0644\x03\x02\x02\x02\u0648\u0653\x03\x02\x02\x02\u0649\u064A\x05" +
		"\u013E\xA0\x02\u064A\u064B\b\x86\x01\x02\u064B\u0653\x03\x02\x02\x02\u064C" +
		"\u064D\x05\u0110\x89\x02\u064D\u064E\b\x86\x01\x02\u064E\u0653\x03\x02" +
		"\x02\x02\u064F\u0650\x05\u0112\x8A\x02\u0650\u0651\b\x86\x01\x02\u0651" +
		"\u0653\x03\x02\x02\x02\u0652\u062E\x03\x02\x02\x02\u0652\u0649\x03\x02" +
		"\x02\x02\u0652\u064C\x03\x02\x02\x02\u0652\u064F\x03\x02\x02\x02\u0653" +
		"\u010B\x03\x02\x02\x02\u0654\u0659\x05\u014E\xA8\x02\u0655\u0659\x05\u014A" +
		"\xA6\x02\u0656\u0659\x05\u010E\x88\x02\u0657\u0659\x05\u0152\xAA\x02\u0658" +
		"\u0654\x03\x02\x02\x02\u0658\u0655\x03\x02\x02\x02\u0658\u0656\x03\x02" +
		"\x02\x02\u0658\u0657\x03\x02\x02\x02\u0659\u010D\x03\x02\x02\x02\u065A" +
		"\u065D\x05\xECw\x02\u065B\u065D\x05\x84C\x02\u065C\u065A\x03\x02\x02\x02" +
		"\u065C\u065B\x03\x02\x02\x02\u065D\u010F\x03\x02\x02\x02\u065E\u0660\t" +
		"\x15\x02\x02\u065F\u0661\x05\xF0y\x02\u0660\u065F\x03\x02\x02\x02\u0660" +
		"\u0661\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0663\x07]\x02" +
		"\x02\u0663\u0111\x03\x02\x02\x02\u0664\u0667\t\x15\x02\x02\u0665\u0668" +
		"\x05\u0122\x92\x02\u0666\u0668\x07g\x02\x02\u0667\u0665\x03\x02\x02\x02" +
		"\u0667\u0666\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\u066A\x07" +
		"]\x02\x02\u066A\u0113\x03\x02\x02\x02\u066B\u066D\x05\u014E\xA8\x02\u066C" +
		"\u066E\x05f4\x02\u066D\u066C\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02" +
		"\u066E\u067D\x03\x02\x02\x02\u066F\u067D\x05\x82B\x02\u0670\u067D\x05" +
		"\x84C\x02\u0671\u0672\x07(\x02\x02\u0672\u0673\x05\u0156\xAC\x02\u0673" +
		"\u0674\x05\u0130\x99\x02\u0674\u067D\x03\x02\x02\x02\u0675\u067D\x077" +
		"\x02\x02\u0676\u067D\x074\x02\x02\u0677\u067D\x05\xECw\x02\u0678\u067D" +
		"\x05\x96L\x02\u0679\u067D\x05\u011C\x8F\x02\u067A\u067D\x05\u011E\x90" +
		"\x02\u067B\u067D\x05\u0150\xA9\x02\u067C\u066B\x03\x02\x02\x02\u067C\u066F" +
		"\x03\x02\x02\x02\u067C\u0670\x03\x02\x02\x02\u067C\u0671\x03\x02\x02\x02" +
		"\u067C\u0675\x03\x02\x02\x02\u067C\u0676\x03\x02\x02\x02\u067C\u0677\x03" +
		"\x02\x02\x02\u067C\u0678\x03\x02\x02\x02\u067C\u0679\x03\x02\x02\x02\u067C" +
		"\u067A\x03\x02\x02\x02\u067C\u067B\x03\x02\x02\x02\u067D\u0115\x03\x02" +
		"\x02\x02\u067E\u0683\x05\u014E\xA8\x02\u067F\u0683\x05\x82B\x02\u0680" +
		"\u0683\x05\x84C\x02\u0681\u0683\x05\xECw\x02\u0682\u067E\x03\x02\x02\x02" +
		"\u0682\u067F\x03\x02\x02\x02\u0682\u0680\x03\x02\x02\x02\u0682\u0681\x03" +
		"\x02\x02\x02\u0683\u0117\x03\x02\x02\x02\u0684\u0688\x05\u014E\xA8\x02" +
		"\u0685\u0688\x05\x82B\x02\u0686\u0688\x05\x84C\x02\u0687\u0684\x03\x02" +
		"\x02\x02\u0687\u0685\x03\x02\x02\x02\u0687\u0686\x03\x02\x02\x02\u0688" +
		"\u0119";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0689\u068D\x05\u014E\xA8\x02\u068A\u068D\x05\x82B\x02" +
		"\u068B\u068D\x05\x84C\x02\u068C\u0689\x03\x02\x02\x02\u068C\u068A\x03" +
		"\x02\x02\x02\u068C\u068B\x03\x02\x02\x02\u068D\u011B\x03\x02\x02\x02\u068E" +
		"\u0690\x07\\\x02\x02\u068F\u0691\x05\xF0y\x02\u0690\u068F\x03\x02\x02" +
		"\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0693\x03\x02\x02\x02\u0692\u0694" +
		"\x07_\x02\x02\u0693\u0692\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02" +
		"\u0694\u0695\x03\x02\x02\x02\u0695\u0696\x07]\x02\x02\u0696\u011D\x03" +
		"\x02\x02\x02\u0697\u069D\x07\\\x02\x02\u0698\u069A\x05\u0120\x91\x02\u0699" +
		"\u069B\x07_\x02\x02\u069A\u0699\x03\x02\x02\x02\u069A\u069B\x03\x02\x02" +
		"\x02\u069B\u069E\x03\x02\x02\x02\u069C\u069E\x07g\x02\x02\u069D\u0698" +
		"\x03\x02\x02\x02\u069D\u069C\x03\x02\x02\x02\u069E\u069F\x03\x02\x02\x02" +
		"\u069F\u06A0\x07]\x02\x02\u06A0\u011F\x03\x02\x02\x02\u06A1\u06A6\x05" +
		"\u0124\x93\x02\u06A2\u06A3\x07_\x02\x02\u06A3\u06A5\x05\u0124\x93\x02" +
		"\u06A4\u06A2\x03\x02\x02\x02\u06A5\u06A8\x03\x02\x02\x02\u06A6\u06A4\x03" +
		"\x02\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7\u0121\x03\x02\x02\x02\u06A8" +
		"\u06A6\x03\x02\x02\x02\u06A9\u06AE\x05\u0126\x94\x02\u06AA\u06AB\x07_" +
		"\x02\x02\u06AB\u06AD\x05\u0126\x94\x02\u06AC\u06AA\x03\x02\x02\x02\u06AD" +
		"\u06B0\x03\x02\x02\x02\u06AE\u06AC\x03\x02\x02\x02\u06AE\u06AF\x03\x02" +
		"\x02\x02\u06AF\u0123\x03\x02\x02\x02\u06B0\u06AE\x03\x02\x02\x02\u06B1" +
		"\u06B2\x05\u012A\x96\x02\u06B2\u06B3\x07g\x02\x02\u06B3\u06B4\x05\u0156" +
		"\xAC\x02\u06B4\u06B5\x05\u0100\x81\x02\u06B5\u06BC\x03\x02\x02\x02\u06B6" +
		"\u06B7\x07r\x02\x02\u06B7\u06B8\x07g\x02\x02\u06B8\u06B9\x05\u0156\xAC" +
		"\x02\u06B9\u06BA\x05\u0100\x81\x02\u06BA\u06BC\x03\x02\x02\x02\u06BB\u06B1" +
		"\x03\x02\x02\x02\u06BB\u06B6\x03\x02\x02\x02\u06BC\u0125\x03\x02\x02\x02" +
		"\u06BD\u06BE\x05\u012C\x97\x02\u06BE\u06BF\x07g\x02\x02\u06BF\u06C0\x05" +
		"\u0156\xAC\x02\u06C0\u06C1\x05\u0100\x81\x02\u06C1\u06C8\x03\x02\x02\x02" +
		"\u06C2\u06C3\x07r\x02\x02\u06C3\u06C4\x07g\x02\x02\u06C4\u06C5\x05\u0156" +
		"\xAC\x02\u06C5\u06C6\x05\u0100\x81\x02\u06C6\u06C8\x03\x02\x02\x02\u06C7" +
		"\u06BD\x03\x02\x02\x02\u06C7\u06C2\x03\x02\x02\x02\u06C8\u0127\x03\x02" +
		"\x02\x02\u06C9\u06CA\x05\u012E\x98\x02\u06CA\u06CB\x07g\x02\x02\u06CB" +
		"\u06CC\x05\u0156\xAC\x02\u06CC\u06CD\x05\u0100\x81\x02\u06CD\u06D4\x03" +
		"\x02\x02\x02\u06CE\u06CF\x07r\x02\x02\u06CF\u06D0\x07g\x02\x02\u06D0\u06D1" +
		"\x05\u0156\xAC\x02\u06D1\u06D2\x05\u0100\x81\x02\u06D2\u06D4\x03\x02\x02" +
		"\x02\u06D3\u06C9\x03\x02\x02\x02\u06D3\u06CE\x03\x02\x02\x02\u06D4\u0129" +
		"\x03\x02\x02\x02\u06D5\u06D8\x05\u0152\xAA\x02\u06D6\u06D8\x05\u0114\x8B" +
		"\x02\u06D7\u06D5\x03\x02\x02\x02\u06D7\u06D6\x03\x02\x02\x02\u06D8\u012B" +
		"\x03\x02\x02\x02\u06D9\u06DC\x05\u0152\xAA\x02\u06DA\u06DC\x05\u0116\x8C" +
		"\x02\u06DB\u06D9\x03\x02\x02\x02\u06DB\u06DA\x03\x02\x02\x02\u06DC\u012D" +
		"\x03\x02\x02\x02\u06DD\u06E0\x05\u0152\xAA\x02\u06DE\u06E0\x05\u0118\x8D" +
		"\x02\u06DF\u06DD\x03\x02\x02\x02\u06DF\u06DE\x03\x02\x02\x02\u06E0\u012F" +
		"\x03\x02\x02\x02\u06E1\u06F1\x05\u0138\x9D\x02\u06E2\u06E3\x05\u0156\xAC" +
		"\x02\u06E3\u06E5\x05\u013E\xA0\x02\u06E4\u06E6\x05\u0136\x9C\x02\u06E5" +
		"\u06E4\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06F2\x03\x02" +
		"\x02\x02\u06E7\u06E9\x05\u0132\x9A\x02\u06E8\u06E7\x03\x02\x02\x02\u06E9" +
		"\u06EA\x03\x02\x02\x02\u06EA\u06E8\x03\x02\x02\x02\u06EA\u06EB\x03\x02" +
		"\x02\x02\u06EB\u06EF\x03\x02\x02\x02\u06EC\u06ED\x05\u0156\xAC\x02\u06ED" +
		"\u06EE\x05\u0134\x9B\x02\u06EE\u06F0\x03\x02\x02\x02\u06EF\u06EC\x03\x02" +
		"\x02\x02\u06EF\u06F0\x03\x02\x02\x02\u06F0\u06F2\x03\x02\x02\x02\u06F1" +
		"\u06E2\x03\x02\x02\x02\u06F1\u06E8\x03\x02\x02\x02\u06F2\u0131\x03\x02" +
		"\x02\x02\u06F3\u06F4\x05\x9CO\x02\u06F4\u06F6\x07\\\x02\x02\u06F5\u06F7" +
		"\x05\u0100\x81\x02\u06F6\u06F5\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02" +
		"\x02\u06F7\u06F8\x03\x02\x02\x02\u06F8\u06F9\x07]\x02\x02\u06F9\u0133" +
		"\x03\x02\x02\x02\u06FA\u06FB\x07Z\x02\x02\u06FB\u06FF\x05\u0156\xAC\x02" +
		"\u06FC\u06FD\x05T+\x02\u06FD\u06FE\x05\u0156\xAC\x02\u06FE\u0700\x03\x02" +
		"\x02\x02\u06FF\u06FC\x03\x02\x02\x02\u06FF\u0700\x03\x02\x02\x02\u0700" +
		"\u0701\x03\x02\x02\x02\u0701\u0702\x07[\x02\x02\u0702\u0135\x03\x02\x02" +
		"\x02\u0703\u0704\x058\x1D\x02\u0704\u0137\x03\x02\x02\x02\u0705\u070B" +
		"\x05\x9CO\x02\u0706\u070C\x05d3\x02\u0707\u0709\x05~@\x02\u0708\u070A" +
		"\x05\u013C\x9F\x02\u0709\u0708\x03\x02\x02\x02\u0709\u070A\x03\x02\x02" +
		"\x02\u070A\u070C\x03\x02\x02\x02\u070B\u0706\x03\x02\x02\x02\u070B\u0707" +
		"\x03\x02\x02\x02\u070C\u0139\x03\x02\x02\x02\u070D\u070E\x07c\x02\x02" +
		"\u070E\u070F\x05\u0156\xAC\x02\u070F\u0710\x054\x1B\x02\u0710\u0711\x05" +
		"\u0156\xAC\x02\u0711\u0712\x07b\x02\x02\u0712\u013B\x03\x02\x02\x02\u0713" +
		"\u0714\x07c\x02\x02\u0714\u0717\x07b\x02\x02\u0715\u0717\x05f4\x02\u0716" +
		"\u0713\x03\x02\x02\x02\u0716\u0715\x03\x02\x02\x02\u0717\u013D\x03\x02" +
		"\x02\x02\u0718\u071A\x07X\x02\x02\u0719\u071B\x05\u0142\xA2\x02\u071A" +
		"\u0719\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B\u071D\x03\x02" +
		"\x02\x02\u071C\u071E\x07_\x02\x02\u071D\u071C\x03\x02\x02\x02\u071D\u071E" +
		"\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02\u071F\u0720\x05\u0154\xAB" +
		"\x02\u0720\u013F\x03\x02\x02\x02\u0721\u0728\x05\u0144\xA3\x02\u0722\u0723" +
		"\x07_\x02\x02\u0723\u0724\x05\u0156\xAC\x02\u0724\u0725\x05\u0146\xA4" +
		"\x02\u0725\u0727\x03\x02\x02\x02\u0726\u0722\x03\x02\x02\x02\u0727\u072A" +
		"\x03\x02\x02\x02\u0728\u0726\x03\x02\x02\x02\u0728\u0729\x03\x02\x02\x02" +
		"\u0729\u0141\x03\x02\x02\x02\u072A\u0728\x03\x02\x02\x02\u072B\u0732\x05" +
		"\u0148\xA5\x02\u072C\u072D\x07_\x02\x02\u072D\u072E\x05\u0156\xAC\x02" +
		"\u072E\u072F\x05\u0148\xA5\x02\u072F\u0731\x03\x02\x02\x02\u0730\u072C" +
		"\x03\x02\x02\x02\u0731\u0734\x03\x02\x02\x02\u0732\u0730\x03\x02\x02\x02" +
		"\u0732\u0733\x03\x02\x02\x02\u0733\u0143\x03\x02\x02\x02\u0734\u0732\x03" +
		"\x02\x02\x02\u0735\u0738\x05\xF2z\x02\u0736\u0738\x05\u0128\x95\x02\u0737" +
		"\u0735\x03\x02\x02\x02\u0737\u0736\x03\x02\x02\x02\u0738\u0145\x03\x02" +
		"\x02\x02\u0739\u073C\x05\xF2z\x02\u073A\u073C\x05\u0126\x94\x02\u073B" +
		"\u0739\x03\x02\x02\x02\u073B\u073A\x03\x02\x02\x02\u073C\u0147\x03\x02" +
		"\x02\x02\u073D\u0741\x05\xF2z\x02\u073E\u0741\x05\x8CG\x02\u073F\u0741" +
		"\x05\u0126\x94\x02\u0740\u073D\x03\x02\x02\x02\u0740\u073E\x03\x02\x02" +
		"\x02\u0740\u073F\x03\x02\x02\x02\u0741\u0149\x03\x02\x02\x02\u0742\u0743" +
		"\x07\x03\x02\x02\u0743\u014B\x03\x02\x02\x02\u0744\u0745\x07\x84\x02\x02" +
		"\u0745\u014D\x03\x02\x02\x02\u0746\u0747\t\x16\x02\x02\u0747\u014F\x03" +
		"\x02\x02\x02\u0748\u0749\t\x17\x02\x02\u0749\u0151\x03\x02\x02\x02\u074A" +
		"\u074B\t\x18\x02\x02\u074B\u0153\x03\x02\x02\x02\u074C\u074D\x07Y\x02" +
		"\x02\u074D\u0155\x03\x02\x02\x02\u074E\u0750\x07\x89\x02\x02\u074F\u074E" +
		"\x03\x02\x02\x02\u0750\u0753\x03\x02\x02\x02\u0751\u074F\x03\x02\x02\x02" +
		"\u0751\u0752\x03\x02\x02\x02\u0752\u0157\x03\x02\x02\x02\u0753\u0751\x03" +
		"\x02\x02\x02\u0754\u0756\t\x19\x02\x02\u0755\u0754\x03\x02\x02\x02\u0756" +
		"\u0757\x03\x02\x02\x02\u0757\u0755\x03\x02\x02\x02\u0757\u0758\x03\x02" +
		"\x02\x02\u0758\u0159\x03\x02\x02\x02\xCA\u015E\u0167\u0177\u0180\u018B" +
		"\u0195\u01A2\u01A6\u01AD\u01B6\u01BD\u01C4\u01C9\u01D1\u01D8\u01DB\u01E3" +
		"\u01E8\u01EC\u01F1\u01F9\u0205\u0211\u021A\u0224\u0234\u023A\u023F\u0246" +
		"\u024D\u0254\u0260\u0263\u0266\u026E\u0271\u0274\u0280\u0286\u0289\u028D" +
		"\u0291\u0298\u029A\u029E\u02A3\u02B0\u02B5\u02B7\u02BF\u02C3\u02CE\u02D7" +
		"\u02E5\u02EA\u02F2\u02F5\u02FA\u0301\u0304\u030A\u030D\u0311\u0315\u0322" +
		"\u032F\u0331\u033D\u0342\u0348\u0350\u0358\u035B\u0363\u036C\u0374\u037B" +
		"\u0387\u038F\u0397\u039E\u03A4\u03B7\u03BB\u03C2\u03C6\u03C9\u03D0\u03D3" +
		"\u03DB\u03DF\u03E7\u03EC\u03F3\u03F7\u03FB\u0404\u040F\u0414\u041C\u0420" +
		"\u0422\u0428\u042F\u0437\u0440\u0445\u044D\u0453\u045D\u0463\u046B\u0471" +
		"\u047B\u047F\u0496\u049A\u049E\u04A5\u04AE\u04B4\u04BD\u04CA\u04DB\u04E1" +
		"\u04ED\u04F8\u0502\u0507\u050F\u051B\u051F\u0523\u052A\u052E\u0532\u0536" +
		"\u054B\u054F\u0555\u055B\u0565\u0570\u0577\u058D\u05A8\u05AB\u05EB\u05FB" +
		"\u05FD\u060A\u0610\u0615\u061C\u061F\u0624\u062B\u0639\u063F\u0647\u0652" +
		"\u0658\u065C\u0660\u0667\u066D\u067C\u0682\u0687\u068C\u0690\u0693\u069A" +
		"\u069D\u06A6\u06AE\u06BB\u06C7\u06D3\u06D7\u06DB\u06DF\u06E5\u06EA\u06EF" +
		"\u06F1\u06F6\u06FF\u0709\u070B\u0716\u071A\u071D\u0728\u0732\u0737\u073B" +
		"\u0740\u0751\u0757";
	public static readonly _serializedATN: string = Utils.join(
		[
			NextflowConfigParser._serializedATNSegment0,
			NextflowConfigParser._serializedATNSegment1,
			NextflowConfigParser._serializedATNSegment2,
			NextflowConfigParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NextflowConfigParser.__ATN) {
			NextflowConfigParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NextflowConfigParser._serializedATN));
		}

		return NextflowConfigParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public EOF(): TerminalNode { return this.getToken(NextflowConfigParser.EOF, 0); }
	public nfconfigStatement(): NfconfigStatementContext[];
	public nfconfigStatement(i: number): NfconfigStatementContext;
	public nfconfigStatement(i?: number): NfconfigStatementContext | NfconfigStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NfconfigStatementContext);
		} else {
			return this.getRuleContext(i, NfconfigStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfconfigStatementContext extends ParserRuleContext {
	public nfincludeStatement(): NfincludeStatementContext | undefined {
		return this.tryGetRuleContext(0, NfincludeStatementContext);
	}
	public nfassignment(): NfassignmentContext | undefined {
		return this.tryGetRuleContext(0, NfassignmentContext);
	}
	public nfblock(): NfblockContext | undefined {
		return this.tryGetRuleContext(0, NfblockContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfconfigStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfconfigStatement) {
			listener.enterNfconfigStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfconfigStatement) {
			listener.exitNfconfigStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfconfigStatement) {
			return visitor.visitNfconfigStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfincludeStatementContext extends ParserRuleContext {
	public INCLUDECONF(): TerminalNode { return this.getToken(NextflowConfigParser.INCLUDECONF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public sep(): SepContext {
		return this.getRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfincludeStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfincludeStatement) {
			listener.enterNfincludeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfincludeStatement) {
			listener.exitNfincludeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfincludeStatement) {
			return visitor.visitNfincludeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfassignmentContext extends ParserRuleContext {
	public nfconfigPathExpression(): NfconfigPathExpressionContext {
		return this.getRuleContext(0, NfconfigPathExpressionContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(NextflowConfigParser.ASSIGN, 0); }
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	public sep(): SepContext {
		return this.getRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfassignment; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfassignment) {
			listener.enterNfassignment(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfassignment) {
			listener.exitNfassignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfassignment) {
			return visitor.visitNfassignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfconfigPathExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.Identifier);
		} else {
			return this.getToken(NextflowConfigParser.Identifier, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.DOT);
		} else {
			return this.getToken(NextflowConfigParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfconfigPathExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfconfigPathExpression) {
			listener.enterNfconfigPathExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfconfigPathExpression) {
			listener.exitNfconfigPathExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfconfigPathExpression) {
			return visitor.visitNfconfigPathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfblockContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(NextflowConfigParser.Identifier, 0); }
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public nfblockStatement(): NfblockStatementContext[];
	public nfblockStatement(i: number): NfblockStatementContext;
	public nfblockStatement(i?: number): NfblockStatementContext | NfblockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NfblockStatementContext);
		} else {
			return this.getRuleContext(i, NfblockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfblock; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfblock) {
			listener.enterNfblock(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfblock) {
			listener.exitNfblock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfblock) {
			return visitor.visitNfblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfblockStatementContext extends ParserRuleContext {
	public nfassignment(): NfassignmentContext | undefined {
		return this.tryGetRuleContext(0, NfassignmentContext);
	}
	public nfblock(): NfblockContext | undefined {
		return this.tryGetRuleContext(0, NfblockContext);
	}
	public nfselector(): NfselectorContext | undefined {
		return this.tryGetRuleContext(0, NfselectorContext);
	}
	public nfincludeStatement(): NfincludeStatementContext | undefined {
		return this.tryGetRuleContext(0, NfincludeStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfblockStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfblockStatement) {
			listener.enterNfblockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfblockStatement) {
			listener.exitNfblockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfblockStatement) {
			return visitor.visitNfblockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NfselectorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(NextflowConfigParser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(NextflowConfigParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public nfassignment(): NfassignmentContext[];
	public nfassignment(i: number): NfassignmentContext;
	public nfassignment(i?: number): NfassignmentContext | NfassignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NfassignmentContext);
		} else {
			return this.getRuleContext(i, NfassignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nfselector; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNfselector) {
			listener.enterNfselector(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNfselector) {
			listener.exitNfselector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNfselector) {
			return visitor.visitNfselector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptStatementsContext extends ParserRuleContext {
	public scriptStatement(): ScriptStatementContext[];
	public scriptStatement(i: number): ScriptStatementContext;
	public scriptStatement(i?: number): ScriptStatementContext | ScriptStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScriptStatementContext);
		} else {
			return this.getRuleContext(i, ScriptStatementContext);
		}
	}
	public sep(): SepContext[];
	public sep(i: number): SepContext;
	public sep(i?: number): SepContext | SepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext(i, SepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_scriptStatements; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterScriptStatements) {
			listener.enterScriptStatements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitScriptStatements) {
			listener.exitScriptStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitScriptStatements) {
			return visitor.visitScriptStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptStatementContext extends ParserRuleContext {
	public importDeclaration(): ImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ImportDeclarationContext);
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_scriptStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterScriptStatement) {
			listener.enterScriptStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitScriptStatement) {
			listener.exitScriptStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitScriptStatement) {
			return visitor.visitScriptStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public PACKAGE(): TerminalNode { return this.getToken(NextflowConfigParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public _alias!: IdentifierContext;
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public IMPORT(): TerminalNode { return this.getToken(NextflowConfigParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MUL, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classOrInterfaceModifiersOpt(): ClassOrInterfaceModifiersOptContext {
		return this.getRuleContext(0, ClassOrInterfaceModifiersOptContext);
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getRuleContext(0, ClassDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public _m!: Token;
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VOLATILE, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEF, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_modifier; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifiersOptContext extends ParserRuleContext {
	public modifiers(): ModifiersContext | undefined {
		return this.tryGetRuleContext(0, ModifiersContext);
	}
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_modifiersOpt; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterModifiersOpt) {
			listener.enterModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitModifiersOpt) {
			listener.exitModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitModifiersOpt) {
			return visitor.visitModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifiersContext extends ParserRuleContext {
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_modifiers; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitModifiers) {
			return visitor.visitModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifiersOptContext extends ParserRuleContext {
	public classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifiersContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.NL);
		} else {
			return this.getToken(NextflowConfigParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classOrInterfaceModifiersOpt; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassOrInterfaceModifiersOpt) {
			listener.enterClassOrInterfaceModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassOrInterfaceModifiersOpt) {
			listener.exitClassOrInterfaceModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifiersOpt) {
			return visitor.visitClassOrInterfaceModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifiersContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classOrInterfaceModifiers; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassOrInterfaceModifiers) {
			listener.enterClassOrInterfaceModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassOrInterfaceModifiers) {
			listener.exitClassOrInterfaceModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifiers) {
			return visitor.visitClassOrInterfaceModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public _m!: Token;
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ABSTRACT, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SEALED, 0); }
	public NON_SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NON_SEALED, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STRICTFP, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public _m!: Token;
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.FINAL, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEF, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VAR, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ABSTRACT, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifiersOptContext extends ParserRuleContext {
	public variableModifiers(): VariableModifiersContext | undefined {
		return this.tryGetRuleContext(0, VariableModifiersContext);
	}
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableModifiersOpt; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableModifiersOpt) {
			listener.enterVariableModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableModifiersOpt) {
			listener.exitVariableModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableModifiersOpt) {
			return visitor.visitVariableModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifiersContext extends ParserRuleContext {
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableModifiers; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableModifiers) {
			listener.enterVariableModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableModifiers) {
			listener.exitVariableModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableModifiers) {
			return visitor.visitVariableModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NextflowConfigParser.LT, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(NextflowConfigParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public className(): ClassNameContext {
		return this.getRuleContext(0, ClassNameContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.EXTENDS, 0); }
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.BITAND);
		} else {
			return this.getToken(NextflowConfigParser.BITAND, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeList; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public t: number | undefined;
	public _scs!: TypeListContext;
	public _is!: TypeListContext;
	public _ps!: TypeListContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CLASS, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.INTERFACE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ENUM, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AT, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRAIT, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RECORD, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IMPLEMENTS, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PERMITS, 0); }
	public typeList(): TypeListContext[];
	public typeList(i: number): TypeListContext;
	public typeList(i?: number): TypeListContext | TypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeListContext);
		} else {
			return this.getRuleContext(i, TypeListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public t: number;
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	public sep(): SepContext[];
	public sep(i: number): SepContext;
	public sep(i?: number): SepContext | SepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext(i, SepContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classBody; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public anonymousInnerClassDeclaration(): AnonymousInnerClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnonymousInnerClassDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public t: number;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STATIC, 0); }
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public t: number;
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public modifiersOpt(): ModifiersOptContext | undefined {
		return this.tryGetRuleContext(0, ModifiersOptContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, CompactConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public t: number;
	public ct: number;
	public modifiersOpt(): ModifiersOptContext {
		return this.getRuleContext(0, ModifiersOptContext);
	}
	public methodName(): MethodNameContext {
		return this.getRuleContext(0, MethodNameContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.THROWS, 0); }
	public qualifiedClassNameList(): QualifiedClassNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedClassNameListContext);
	}
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number, ct: number) {
		super(parent, invokingState);
		this.t = t;
		this.ct = ct;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompactConstructorDeclarationContext extends ParserRuleContext {
	public methodName(): MethodNameContext {
		return this.getRuleContext(0, MethodNameContext);
	}
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_compactConstructorDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCompactConstructorDeclaration) {
			listener.enterCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCompactConstructorDeclaration) {
			listener.exitCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCompactConstructorDeclaration) {
			return visitor.visitCompactConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_methodName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	public ct: number;
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, ct: number) {
		super(parent, invokingState);
		this.ct = ct;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_returnType; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitReturnType) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getRuleContext(0, EnhancedStatementExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializersContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableInitializers; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableInitializers) {
			listener.enterVariableInitializers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableInitializers) {
			listener.exitVariableInitializers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializers) {
			return visitor.visitVariableInitializers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyDimsContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext[];
	public annotationsOpt(i: number): AnnotationsOptContext;
	public annotationsOpt(i?: number): AnnotationsOptContext | AnnotationsOptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationsOptContext);
		} else {
			return this.getRuleContext(i, AnnotationsOptContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.LBRACK);
		} else {
			return this.getToken(NextflowConfigParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.RBRACK);
		} else {
			return this.getToken(NextflowConfigParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_emptyDims; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEmptyDims) {
			listener.enterEmptyDims(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEmptyDims) {
			listener.exitEmptyDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEmptyDims) {
			return visitor.visitEmptyDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyDimsOptContext extends ParserRuleContext {
	public emptyDims(): EmptyDimsContext | undefined {
		return this.tryGetRuleContext(0, EmptyDimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_emptyDimsOpt; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEmptyDimsOpt) {
			listener.enterEmptyDimsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEmptyDimsOpt) {
			listener.exitEmptyDimsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEmptyDimsOpt) {
			return visitor.visitEmptyDimsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}




export class TypeContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public emptyDimsOpt(): EmptyDimsOptContext {
		return this.getRuleContext(0, EmptyDimsOptContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_type; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public qualifiedClassName(): QualifiedClassNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedClassNameContext);
	}
	public qualifiedStandardClassName(): QualifiedStandardClassNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedStandardClassNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}






export class PrimitiveTypeContext extends ParserRuleContext {
	public BuiltInPrimitiveType(): TerminalNode { return this.getToken(NextflowConfigParser.BuiltInPrimitiveType, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NextflowConfigParser.LT, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(NextflowConfigParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public annotationsOpt(): AnnotationsOptContext | undefined {
		return this.tryGetRuleContext(0, AnnotationsOptContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.QUESTION, 0); }
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotatedQualifiedClassNameContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getRuleContext(0, QualifiedClassNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_annotatedQualifiedClassName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAnnotatedQualifiedClassName) {
			listener.enterAnnotatedQualifiedClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAnnotatedQualifiedClassName) {
			listener.exitAnnotatedQualifiedClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAnnotatedQualifiedClassName) {
			return visitor.visitAnnotatedQualifiedClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedClassNameListContext extends ParserRuleContext {
	public annotatedQualifiedClassName(): AnnotatedQualifiedClassNameContext[];
	public annotatedQualifiedClassName(i: number): AnnotatedQualifiedClassNameContext;
	public annotatedQualifiedClassName(i?: number): AnnotatedQualifiedClassNameContext | AnnotatedQualifiedClassNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotatedQualifiedClassNameContext);
		} else {
			return this.getRuleContext(i, AnnotatedQualifiedClassNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_qualifiedClassNameList; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterQualifiedClassNameList) {
			listener.enterQualifiedClassNameList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitQualifiedClassNameList) {
			listener.exitQualifiedClassNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitQualifiedClassNameList) {
			return visitor.visitQualifiedClassNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public thisFormalParameter(): ThisFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, ThisFormalParameterContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThisFormalParameterContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public THIS(): TerminalNode { return this.getToken(NextflowConfigParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_thisFormalParameter; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterThisFormalParameter) {
			listener.enterThisFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitThisFormalParameter) {
			listener.exitThisFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitThisFormalParameter) {
			return visitor.visitThisFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public variableModifiersOpt(): VariableModifiersOptContext {
		return this.getRuleContext(0, VariableModifiersOptContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ELLIPSIS, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public qualifiedNameElement(): QualifiedNameElementContext[];
	public qualifiedNameElement(i: number): QualifiedNameElementContext;
	public qualifiedNameElement(i?: number): QualifiedNameElementContext | QualifiedNameElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameElementContext);
		} else {
			return this.getRuleContext(i, QualifiedNameElementContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.DOT);
		} else {
			return this.getToken(NextflowConfigParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameElementContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AS, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_qualifiedNameElement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterQualifiedNameElement) {
			listener.enterQualifiedNameElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitQualifiedNameElement) {
			listener.exitQualifiedNameElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameElement) {
			return visitor.visitQualifiedNameElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameElementsContext extends ParserRuleContext {
	public qualifiedNameElement(): QualifiedNameElementContext[];
	public qualifiedNameElement(i: number): QualifiedNameElementContext;
	public qualifiedNameElement(i?: number): QualifiedNameElementContext | QualifiedNameElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameElementContext);
		} else {
			return this.getRuleContext(i, QualifiedNameElementContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.DOT);
		} else {
			return this.getToken(NextflowConfigParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_qualifiedNameElements; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterQualifiedNameElements) {
			listener.enterQualifiedNameElements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitQualifiedNameElements) {
			listener.exitQualifiedNameElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameElements) {
			return visitor.visitQualifiedNameElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedClassNameContext extends ParserRuleContext {
	public qualifiedNameElements(): QualifiedNameElementsContext {
		return this.getRuleContext(0, QualifiedNameElementsContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_qualifiedClassName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterQualifiedClassName) {
			listener.enterQualifiedClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitQualifiedClassName) {
			listener.exitQualifiedClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitQualifiedClassName) {
			return visitor.visitQualifiedClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedStandardClassNameContext extends ParserRuleContext {
	public qualifiedNameElements(): QualifiedNameElementsContext {
		return this.getRuleContext(0, QualifiedNameElementsContext);
	}
	public className(): ClassNameContext[];
	public className(i: number): ClassNameContext;
	public className(i?: number): ClassNameContext | ClassNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassNameContext);
		} else {
			return this.getRuleContext(i, ClassNameContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.DOT);
		} else {
			return this.getToken(NextflowConfigParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_qualifiedStandardClassName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterQualifiedStandardClassName) {
			listener.enterQualifiedStandardClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitQualifiedStandardClassName) {
			listener.exitQualifiedStandardClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitQualifiedStandardClassName) {
			return visitor.visitQualifiedStandardClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralAltContext extends LiteralContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(NextflowConfigParser.IntegerLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterIntegerLiteralAlt) {
			listener.enterIntegerLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitIntegerLiteralAlt) {
			listener.exitIntegerLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteralAlt) {
			return visitor.visitIntegerLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatingPointLiteralAltContext extends LiteralContext {
	public FloatingPointLiteral(): TerminalNode { return this.getToken(NextflowConfigParser.FloatingPointLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterFloatingPointLiteralAlt) {
			listener.enterFloatingPointLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitFloatingPointLiteralAlt) {
			listener.exitFloatingPointLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointLiteralAlt) {
			return visitor.visitFloatingPointLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralAltContext extends LiteralContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterStringLiteralAlt) {
			listener.enterStringLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitStringLiteralAlt) {
			listener.exitStringLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralAlt) {
			return visitor.visitStringLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralAltContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(NextflowConfigParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBooleanLiteralAlt) {
			listener.enterBooleanLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBooleanLiteralAlt) {
			listener.exitBooleanLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralAlt) {
			return visitor.visitBooleanLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralAltContext extends LiteralContext {
	public NullLiteral(): TerminalNode { return this.getToken(NextflowConfigParser.NullLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNullLiteralAlt) {
			listener.enterNullLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNullLiteralAlt) {
			listener.exitNullLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNullLiteralAlt) {
			return visitor.visitNullLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GstringContext extends ParserRuleContext {
	public GStringBegin(): TerminalNode { return this.getToken(NextflowConfigParser.GStringBegin, 0); }
	public gstringValue(): GstringValueContext[];
	public gstringValue(i: number): GstringValueContext;
	public gstringValue(i?: number): GstringValueContext | GstringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GstringValueContext);
		} else {
			return this.getRuleContext(i, GstringValueContext);
		}
	}
	public GStringEnd(): TerminalNode { return this.getToken(NextflowConfigParser.GStringEnd, 0); }
	public GStringPart(): TerminalNode[];
	public GStringPart(i: number): TerminalNode;
	public GStringPart(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.GStringPart);
		} else {
			return this.getToken(NextflowConfigParser.GStringPart, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_gstring; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterGstring) {
			listener.enterGstring(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitGstring) {
			listener.exitGstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitGstring) {
			return visitor.visitGstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GstringValueContext extends ParserRuleContext {
	public gstringPath(): GstringPathContext | undefined {
		return this.tryGetRuleContext(0, GstringPathContext);
	}
	public closure(): ClosureContext | undefined {
		return this.tryGetRuleContext(0, ClosureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_gstringValue; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterGstringValue) {
			listener.enterGstringValue(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitGstringValue) {
			listener.exitGstringValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitGstringValue) {
			return visitor.visitGstringValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GstringPathContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public GStringPathPart(): TerminalNode[];
	public GStringPathPart(i: number): TerminalNode;
	public GStringPathPart(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.GStringPathPart);
		} else {
			return this.getToken(NextflowConfigParser.GStringPathPart, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_gstringPath; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterGstringPath) {
			listener.enterGstringPath(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitGstringPath) {
			listener.exitGstringPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitGstringPath) {
			return visitor.visitGstringPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}




export class StandardLambdaExpressionContext extends ParserRuleContext {
	public standardLambdaParameters(): StandardLambdaParametersContext {
		return this.getRuleContext(0, StandardLambdaParametersContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ARROW(): TerminalNode { return this.getToken(NextflowConfigParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_standardLambdaExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterStandardLambdaExpression) {
			listener.enterStandardLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitStandardLambdaExpression) {
			listener.exitStandardLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitStandardLambdaExpression) {
			return visitor.visitStandardLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}




export class StandardLambdaParametersContext extends ParserRuleContext {
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_standardLambdaParameters; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterStandardLambdaParameters) {
			listener.enterStandardLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitStandardLambdaParameters) {
			listener.exitStandardLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitStandardLambdaParameters) {
			return visitor.visitStandardLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public statementExpression(): StatementExpressionContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(0, BlockStatementsOptContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ARROW, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_closure; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClosure) {
			listener.enterClosure(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClosure) {
			listener.exitClosure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClosure) {
			return visitor.visitClosure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureOrLambdaExpressionContext extends ParserRuleContext {
	public closure(): ClosureContext | undefined {
		return this.tryGetRuleContext(0, ClosureContext);
	}
	public standardLambdaExpression(): StandardLambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, StandardLambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_closureOrLambdaExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClosureOrLambdaExpression) {
			listener.enterClosureOrLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClosureOrLambdaExpression) {
			listener.exitClosureOrLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClosureOrLambdaExpression) {
			return visitor.visitClosureOrLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsOptContext extends ParserRuleContext {
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_blockStatementsOpt; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBlockStatementsOpt) {
			listener.enterBlockStatementsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBlockStatementsOpt) {
			listener.exitBlockStatementsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBlockStatementsOpt) {
			return visitor.visitBlockStatementsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	public sep(): SepContext[];
	public sep(i: number): SepContext;
	public sep(i?: number): SepContext | SepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext(i, SepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_blockStatements; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationsOptContext extends ParserRuleContext {
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_annotationsOpt; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAnnotationsOpt) {
			listener.enterAnnotationsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAnnotationsOpt) {
			listener.exitAnnotationsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAnnotationsOpt) {
			return visitor.visitAnnotationsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(NextflowConfigParser.AT, 0); }
	public annotationName(): AnnotationNameContext {
		return this.getRuleContext(0, AnnotationNameContext);
	}
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LPAREN, 0); }
	public rparen(): RparenContext | undefined {
		return this.tryGetRuleContext(0, RparenContext);
	}
	public elementValues(): ElementValuesContext | undefined {
		return this.tryGetRuleContext(0, ElementValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_annotation; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuesContext extends ParserRuleContext {
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_elementValues; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterElementValues) {
			listener.enterElementValues(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitElementValues) {
			listener.exitElementValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitElementValues) {
			return visitor.visitElementValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationNameContext extends ParserRuleContext {
	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getRuleContext(0, QualifiedClassNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_annotationName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAnnotationName) {
			listener.enterAnnotationName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAnnotationName) {
			listener.exitAnnotationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAnnotationName) {
			return visitor.visitAnnotationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public elementValuePairName(): ElementValuePairNameContext {
		return this.getRuleContext(0, ElementValuePairNameContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ASSIGN(): TerminalNode { return this.getToken(NextflowConfigParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public keywords(): KeywordsContext | undefined {
		return this.tryGetRuleContext(0, KeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_elementValuePairName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterElementValuePairName) {
			listener.enterElementValuePairName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitElementValuePairName) {
			listener.exitElementValuePairName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairName) {
			return visitor.visitElementValuePairName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACK, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(0, BlockStatementsOptContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_block; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public t: number;
	public modifiers(): ModifiersContext | undefined {
		return this.tryGetRuleContext(0, ModifiersContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public variableDeclarators(): VariableDeclaratorsContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorsContext);
	}
	public typeNamePairs(): TypeNamePairsContext | undefined {
		return this.tryGetRuleContext(0, TypeNamePairsContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNamePairsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public typeNamePair(): TypeNamePairContext[];
	public typeNamePair(i: number): TypeNamePairContext;
	public typeNamePair(i?: number): TypeNamePairContext | TypeNamePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNamePairContext);
		} else {
			return this.getRuleContext(i, TypeNamePairContext);
		}
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeNamePairs; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeNamePairs) {
			listener.enterTypeNamePairs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeNamePairs) {
			listener.exitTypeNamePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeNamePairs) {
			return visitor.visitTypeNamePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNamePairContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeNamePair; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeNamePair) {
			listener.enterTypeNamePair(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeNamePair) {
			listener.exitTypeNamePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeNamePair) {
			return visitor.visitTypeNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNamesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext[];
	public variableDeclaratorId(i: number): VariableDeclaratorIdContext;
	public variableDeclaratorId(i?: number): VariableDeclaratorIdContext | VariableDeclaratorIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorIdContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorIdContext);
		}
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_variableNames; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterVariableNames) {
			listener.enterVariableNames(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitVariableNames) {
			listener.exitVariableNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitVariableNames) {
			return visitor.visitVariableNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalStatementContext extends ParserRuleContext {
	public ifElseStatement(): IfElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfElseStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_conditionalStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitConditionalStatement) {
			return visitor.visitConditionalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseStatementContext extends ParserRuleContext {
	public _tb!: StatementContext;
	public _fb!: StatementContext;
	public IF(): TerminalNode { return this.getToken(NextflowConfigParser.IF, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ELSE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_ifElseStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterIfElseStatement) {
			listener.enterIfElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitIfElseStatement) {
			listener.exitIfElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitIfElseStatement) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(NextflowConfigParser.SWITCH, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_loopStatement; }
	public copyFrom(ctx: LoopStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ForStmtAltContext extends LoopStatementContext {
	public FOR(): TerminalNode { return this.getToken(NextflowConfigParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public forControl(): ForControlContext {
		return this.getRuleContext(0, ForControlContext);
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: LoopStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterForStmtAlt) {
			listener.enterForStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitForStmtAlt) {
			listener.exitForStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitForStmtAlt) {
			return visitor.visitForStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStmtAltContext extends LoopStatementContext {
	public WHILE(): TerminalNode { return this.getToken(NextflowConfigParser.WHILE, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: LoopStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterWhileStmtAlt) {
			listener.enterWhileStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitWhileStmtAlt) {
			listener.exitWhileStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitWhileStmtAlt) {
			return visitor.visitWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoWhileStmtAltContext extends LoopStatementContext {
	public DO(): TerminalNode { return this.getToken(NextflowConfigParser.DO, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(NextflowConfigParser.WHILE, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	constructor(ctx: LoopStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterDoWhileStmtAlt) {
			listener.enterDoWhileStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitDoWhileStmtAlt) {
			listener.exitDoWhileStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStmtAlt) {
			return visitor.visitDoWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(NextflowConfigParser.CONTINUE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(NextflowConfigParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(NextflowConfigParser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(NextflowConfigParser.TRY, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public resources(): ResourcesContext | undefined {
		return this.tryGetRuleContext(0, ResourcesContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_tryCatchStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTryCatchStatement) {
			listener.enterTryCatchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTryCatchStatement) {
			listener.exitTryCatchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTryCatchStatement) {
			return visitor.visitTryCatchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public _ce!: ExpressionContext;
	public _me!: ExpressionContext;
	public ASSERT(): TerminalNode { return this.getToken(NextflowConfigParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class BlockStmtAltContext extends StatementContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBlockStmtAlt) {
			listener.enterBlockStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBlockStmtAlt) {
			listener.exitBlockStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBlockStmtAlt) {
			return visitor.visitBlockStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalStmtAltContext extends StatementContext {
	public conditionalStatement(): ConditionalStatementContext {
		return this.getRuleContext(0, ConditionalStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterConditionalStmtAlt) {
			listener.enterConditionalStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitConditionalStmtAlt) {
			listener.exitConditionalStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitConditionalStmtAlt) {
			return visitor.visitConditionalStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LoopStmtAltContext extends StatementContext {
	public loopStatement(): LoopStatementContext {
		return this.getRuleContext(0, LoopStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLoopStmtAlt) {
			listener.enterLoopStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLoopStmtAlt) {
			listener.exitLoopStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLoopStmtAlt) {
			return visitor.visitLoopStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryCatchStmtAltContext extends StatementContext {
	public tryCatchStatement(): TryCatchStatementContext {
		return this.getRuleContext(0, TryCatchStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTryCatchStmtAlt) {
			listener.enterTryCatchStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTryCatchStmtAlt) {
			listener.exitTryCatchStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTryCatchStmtAlt) {
			return visitor.visitTryCatchStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SynchronizedStmtAltContext extends StatementContext {
	public SYNCHRONIZED(): TerminalNode { return this.getToken(NextflowConfigParser.SYNCHRONIZED, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSynchronizedStmtAlt) {
			listener.enterSynchronizedStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSynchronizedStmtAlt) {
			listener.exitSynchronizedStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStmtAlt) {
			return visitor.visitSynchronizedStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtAltContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(NextflowConfigParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterReturnStmtAlt) {
			listener.enterReturnStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitReturnStmtAlt) {
			listener.exitReturnStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitReturnStmtAlt) {
			return visitor.visitReturnStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThrowStmtAltContext extends StatementContext {
	public THROW(): TerminalNode { return this.getToken(NextflowConfigParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterThrowStmtAlt) {
			listener.enterThrowStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitThrowStmtAlt) {
			listener.exitThrowStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitThrowStmtAlt) {
			return visitor.visitThrowStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BreakStmtAltContext extends StatementContext {
	public breakStatement(): BreakStatementContext {
		return this.getRuleContext(0, BreakStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBreakStmtAlt) {
			listener.enterBreakStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBreakStmtAlt) {
			listener.exitBreakStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBreakStmtAlt) {
			return visitor.visitBreakStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContinueStmtAltContext extends StatementContext {
	public continueStatement(): ContinueStatementContext {
		return this.getRuleContext(0, ContinueStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterContinueStmtAlt) {
			listener.enterContinueStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitContinueStmtAlt) {
			listener.exitContinueStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitContinueStmtAlt) {
			return visitor.visitContinueStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YieldStmtAltContext extends StatementContext {
	public yieldStatement(): YieldStatementContext {
		return this.getRuleContext(0, YieldStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterYieldStmtAlt) {
			listener.enterYieldStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitYieldStmtAlt) {
			listener.exitYieldStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitYieldStmtAlt) {
			return visitor.visitYieldStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LabeledStmtAltContext extends StatementContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(NextflowConfigParser.COLON, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLabeledStmtAlt) {
			listener.enterLabeledStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLabeledStmtAlt) {
			listener.exitLabeledStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLabeledStmtAlt) {
			return visitor.visitLabeledStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssertStmtAltContext extends StatementContext {
	public assertStatement(): AssertStatementContext {
		return this.getRuleContext(0, AssertStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAssertStmtAlt) {
			listener.enterAssertStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAssertStmtAlt) {
			listener.exitAssertStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAssertStmtAlt) {
			return visitor.visitAssertStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalVariableDeclarationStmtAltContext extends StatementContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLocalVariableDeclarationStmtAlt) {
			listener.enterLocalVariableDeclarationStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLocalVariableDeclarationStmtAlt) {
			listener.exitLocalVariableDeclarationStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStmtAlt) {
			return visitor.visitLocalVariableDeclarationStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionStmtAltContext extends StatementContext {
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterExpressionStmtAlt) {
			listener.enterExpressionStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitExpressionStmtAlt) {
			listener.exitExpressionStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmtAlt) {
			return visitor.visitExpressionStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyStmtAltContext extends StatementContext {
	public SEMI(): TerminalNode { return this.getToken(NextflowConfigParser.SEMI, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEmptyStmtAlt) {
			listener.enterEmptyStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEmptyStmtAlt) {
			listener.exitEmptyStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmtAlt) {
			return visitor.visitEmptyStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(NextflowConfigParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public variableModifiersOpt(): VariableModifiersOptContext {
		return this.getRuleContext(0, VariableModifiersOptContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchType(): CatchTypeContext | undefined {
		return this.tryGetRuleContext(0, CatchTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedClassName(): QualifiedClassNameContext[];
	public qualifiedClassName(i: number): QualifiedClassNameContext;
	public qualifiedClassName(i?: number): QualifiedClassNameContext | QualifiedClassNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedClassNameContext);
		} else {
			return this.getRuleContext(i, QualifiedClassNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.BITOR);
		} else {
			return this.getToken(NextflowConfigParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_catchType; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(NextflowConfigParser.FINALLY, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public resourceList(): ResourceListContext {
		return this.getRuleContext(0, ResourceListContext);
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_resources; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public sep(): SepContext[];
	public sep(i: number): SepContext;
	public sep(i?: number): SepContext | SepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext(i, SepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_resourceList; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_resource; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(NextflowConfigParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public classicalForControl(): ClassicalForControlContext | undefined {
		return this.tryGetRuleContext(0, ClassicalForControlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_forControl; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public variableModifiersOpt(): VariableModifiersOptContext {
		return this.getRuleContext(0, VariableModifiersOptContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COLON, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassicalForControlContext extends ParserRuleContext {
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.SEMI);
		} else {
			return this.getToken(NextflowConfigParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_classicalForControl; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassicalForControl) {
			listener.enterClassicalForControl(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassicalForControl) {
			listener.exitClassicalForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassicalForControl) {
			return visitor.visitClassicalForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_forInit; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_castParExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCastParExpression) {
			listener.enterCastParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCastParExpression) {
			listener.exitCastParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCastParExpression) {
			return visitor.visitCastParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionInParContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getRuleContext(0, EnhancedStatementExpressionContext);
	}
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_expressionInPar; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterExpressionInPar) {
			listener.enterExpressionInPar(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitExpressionInPar) {
			listener.exitExpressionInPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitExpressionInPar) {
			return visitor.visitExpressionInPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public canSpread: boolean;
	public expressionListElement(): ExpressionListElementContext[];
	public expressionListElement(i: number): ExpressionListElementContext;
	public expressionListElement(i?: number): ExpressionListElementContext | ExpressionListElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListElementContext);
		} else {
			return this.getRuleContext(i, ExpressionListElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListElementContext extends ParserRuleContext {
	public canSpread: boolean;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_expressionListElement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterExpressionListElement) {
			listener.enterExpressionListElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitExpressionListElement) {
			listener.exitExpressionListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitExpressionListElement) {
			return visitor.visitExpressionListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedStatementExpressionContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionContext);
	}
	public standardLambdaExpression(): StandardLambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, StandardLambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_enhancedStatementExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEnhancedStatementExpression) {
			listener.enterEnhancedStatementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEnhancedStatementExpression) {
			listener.exitEnhancedStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEnhancedStatementExpression) {
			return visitor.visitEnhancedStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_statementExpression; }
	public copyFrom(ctx: StatementExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CommandExprAltContext extends StatementExpressionContext {
	public commandExpression(): CommandExpressionContext {
		return this.getRuleContext(0, CommandExpressionContext);
	}
	constructor(ctx: StatementExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCommandExprAlt) {
			listener.enterCommandExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCommandExprAlt) {
			listener.exitCommandExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCommandExprAlt) {
			return visitor.visitCommandExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public pathExpression(): PathExpressionContext {
		return this.getRuleContext(0, PathExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(NextflowConfigParser.SWITCH, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public switchBlockStatementExpressionGroup(): SwitchBlockStatementExpressionGroupContext[];
	public switchBlockStatementExpressionGroup(i: number): SwitchBlockStatementExpressionGroupContext;
	public switchBlockStatementExpressionGroup(i?: number): SwitchBlockStatementExpressionGroupContext | SwitchBlockStatementExpressionGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementExpressionGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementExpressionGroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_switchExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchExpression) {
			listener.enterSwitchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchExpression) {
			listener.exitSwitchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpression) {
			return visitor.visitSwitchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementExpressionGroupContext extends ParserRuleContext {
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	public switchExpressionLabel(): SwitchExpressionLabelContext[];
	public switchExpressionLabel(i: number): SwitchExpressionLabelContext;
	public switchExpressionLabel(i?: number): SwitchExpressionLabelContext | SwitchExpressionLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchExpressionLabelContext);
		} else {
			return this.getRuleContext(i, SwitchExpressionLabelContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_switchBlockStatementExpressionGroup; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchBlockStatementExpressionGroup) {
			listener.enterSwitchBlockStatementExpressionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchBlockStatementExpressionGroup) {
			listener.exitSwitchBlockStatementExpressionGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementExpressionGroup) {
			return visitor.visitSwitchBlockStatementExpressionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionLabelContext extends ParserRuleContext {
	public _ac!: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CASE, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEFAULT, 0); }
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ARROW, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_switchExpressionLabel; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchExpressionLabel) {
			listener.enterSwitchExpressionLabel(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchExpressionLabel) {
			listener.exitSwitchExpressionLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpressionLabel) {
			return visitor.visitSwitchExpressionLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CastExprAltContext extends ExpressionContext {
	public castParExpression(): CastParExpressionContext {
		return this.getRuleContext(0, CastParExpressionContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCastExprAlt) {
			listener.enterCastExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCastExprAlt) {
			listener.exitCastExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCastExprAlt) {
			return visitor.visitCastExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostfixExprAltContext extends ExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPostfixExprAlt) {
			listener.enterPostfixExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPostfixExprAlt) {
			listener.exitPostfixExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPostfixExprAlt) {
			return visitor.visitPostfixExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SwitchExprAltContext extends ExpressionContext {
	public switchExpression(): SwitchExpressionContext {
		return this.getRuleContext(0, SwitchExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSwitchExprAlt) {
			listener.enterSwitchExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSwitchExprAlt) {
			listener.exitSwitchExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSwitchExprAlt) {
			return visitor.visitSwitchExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryNotExprAltContext extends ExpressionContext {
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public BITNOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.BITNOT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterUnaryNotExprAlt) {
			listener.enterUnaryNotExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitUnaryNotExprAlt) {
			listener.exitUnaryNotExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitUnaryNotExprAlt) {
			return visitor.visitUnaryNotExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POWER(): TerminalNode { return this.getToken(NextflowConfigParser.POWER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPowerExprAlt) {
			listener.enterPowerExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPowerExprAlt) {
			listener.exitPowerExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPowerExprAlt) {
			return visitor.visitPowerExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryAddExprAltContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterUnaryAddExprAlt) {
			listener.enterUnaryAddExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitUnaryAddExprAlt) {
			listener.exitUnaryAddExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitUnaryAddExprAlt) {
			return visitor.visitUnaryAddExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMultiplicativeExprAlt) {
			listener.enterMultiplicativeExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMultiplicativeExprAlt) {
			listener.exitMultiplicativeExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExprAlt) {
			return visitor.visitMultiplicativeExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAdditiveExprAlt) {
			listener.enterAdditiveExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAdditiveExprAlt) {
			listener.exitAdditiveExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExprAlt) {
			return visitor.visitAdditiveExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _dlOp!: Token;
	public _tgOp!: Token;
	public _dgOp!: Token;
	public _rangeOp!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.LT);
		} else {
			return this.getToken(NextflowConfigParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.GT);
		} else {
			return this.getToken(NextflowConfigParser.GT, i);
		}
	}
	public RANGE_INCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RANGE_INCLUSIVE, 0); }
	public RANGE_EXCLUSIVE_LEFT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RANGE_EXCLUSIVE_LEFT, 0); }
	public RANGE_EXCLUSIVE_RIGHT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RANGE_EXCLUSIVE_RIGHT, 0); }
	public RANGE_EXCLUSIVE_FULL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RANGE_EXCLUSIVE_FULL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterShiftExprAlt) {
			listener.enterShiftExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitShiftExprAlt) {
			listener.exitShiftExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitShiftExprAlt) {
			return visitor.visitShiftExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AS, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.INSTANCEOF, 0); }
	public NOT_INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NOT_INSTANCEOF, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IN, 0); }
	public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NOT_IN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterRelationalExprAlt) {
			listener.enterRelationalExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitRelationalExprAlt) {
			listener.exitRelationalExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitRelationalExprAlt) {
			return visitor.visitRelationalExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IDENTICAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IDENTICAL, 0); }
	public NOT_IDENTICAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NOT_IDENTICAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NOTEQUAL, 0); }
	public SPACESHIP(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SPACESHIP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEqualityExprAlt) {
			listener.enterEqualityExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEqualityExprAlt) {
			listener.exitEqualityExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEqualityExprAlt) {
			return visitor.visitEqualityExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RegexExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public REGEX_FIND(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.REGEX_FIND, 0); }
	public REGEX_MATCH(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.REGEX_MATCH, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterRegexExprAlt) {
			listener.enterRegexExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitRegexExprAlt) {
			listener.exitRegexExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitRegexExprAlt) {
			return visitor.visitRegexExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITAND(): TerminalNode { return this.getToken(NextflowConfigParser.BITAND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAndExprAlt) {
			listener.enterAndExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAndExprAlt) {
			listener.exitAndExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAndExprAlt) {
			return visitor.visitAndExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExclusiveOrExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public XOR(): TerminalNode { return this.getToken(NextflowConfigParser.XOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterExclusiveOrExprAlt) {
			listener.enterExclusiveOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitExclusiveOrExprAlt) {
			listener.exitExclusiveOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExprAlt) {
			return visitor.visitExclusiveOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InclusiveOrExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITOR(): TerminalNode { return this.getToken(NextflowConfigParser.BITOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterInclusiveOrExprAlt) {
			listener.enterInclusiveOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitInclusiveOrExprAlt) {
			listener.exitInclusiveOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExprAlt) {
			return visitor.visitInclusiveOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(NextflowConfigParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLogicalAndExprAlt) {
			listener.enterLogicalAndExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLogicalAndExprAlt) {
			listener.exitLogicalAndExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExprAlt) {
			return visitor.visitLogicalAndExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(NextflowConfigParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLogicalOrExprAlt) {
			listener.enterLogicalOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLogicalOrExprAlt) {
			listener.exitLogicalOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExprAlt) {
			return visitor.visitLogicalOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalExprAltContext extends ExpressionContext {
	public _con!: ExpressionContext;
	public _tb!: ExpressionContext;
	public _fb!: ExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.QUESTION, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COLON, 0); }
	public ELVIS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ELVIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterConditionalExprAlt) {
			listener.enterConditionalExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitConditionalExprAlt) {
			listener.exitConditionalExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitConditionalExprAlt) {
			return visitor.visitConditionalExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultipleAssignmentExprAltContext extends ExpressionContext {
	public _left!: VariableNamesContext;
	public _op!: Token;
	public _right!: StatementExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public variableNames(): VariableNamesContext {
		return this.getRuleContext(0, VariableNamesContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(NextflowConfigParser.ASSIGN, 0); }
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMultipleAssignmentExprAlt) {
			listener.enterMultipleAssignmentExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMultipleAssignmentExprAlt) {
			listener.exitMultipleAssignmentExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMultipleAssignmentExprAlt) {
			return visitor.visitMultipleAssignmentExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: EnhancedStatementExpressionContext;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getRuleContext(0, EnhancedStatementExpressionContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MOD_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.POWER_ASSIGN, 0); }
	public ELVIS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ELVIS_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAssignmentExprAlt) {
			listener.enterAssignmentExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAssignmentExprAlt) {
			listener.exitAssignmentExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExprAlt) {
			return visitor.visitAssignmentExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}




export class CommandExpressionContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext | undefined {
		return this.tryGetRuleContext(0, EnhancedArgumentListInParContext);
	}
	public commandArgument(): CommandArgumentContext[];
	public commandArgument(i: number): CommandArgumentContext;
	public commandArgument(i?: number): CommandArgumentContext | CommandArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandArgumentContext);
		} else {
			return this.getRuleContext(i, CommandArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_commandExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCommandExpression) {
			listener.enterCommandExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCommandExpression) {
			listener.exitCommandExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCommandExpression) {
			return visitor.visitCommandExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandArgumentContext extends ParserRuleContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext | undefined {
		return this.tryGetRuleContext(0, EnhancedArgumentListInParContext);
	}
	public pathElement(): PathElementContext[];
	public pathElement(i: number): PathElementContext;
	public pathElement(i?: number): PathElementContext | PathElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathElementContext);
		} else {
			return this.getRuleContext(i, PathElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_commandArgument; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCommandArgument) {
			listener.enterCommandArgument(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCommandArgument) {
			listener.exitCommandArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCommandArgument) {
			return visitor.visitCommandArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathExpressionContext extends ParserRuleContext {
	public t: number | undefined;
	public _pathElement!: PathElementContext;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STATIC, 0); }
	public pathElement(): PathElementContext[];
	public pathElement(i: number): PathElementContext;
	public pathElement(i?: number): PathElementContext | PathElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathElementContext);
		} else {
			return this.getRuleContext(i, PathElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_pathExpression; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPathExpression) {
			listener.enterPathExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPathExpression) {
			listener.exitPathExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPathExpression) {
			return visitor.visitPathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathElementContext extends ParserRuleContext {
	public t: number | undefined;
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DOT, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NEW, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public namePart(): NamePartContext | undefined {
		return this.tryGetRuleContext(0, NamePartContext);
	}
	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClosureOrLambdaExpressionContext);
	}
	public METHOD_POINTER(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.METHOD_POINTER, 0); }
	public METHOD_REFERENCE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.METHOD_REFERENCE, 0); }
	public SPREAD_DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SPREAD_DOT, 0); }
	public SAFE_DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SAFE_DOT, 0); }
	public SAFE_CHAIN_DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SAFE_CHAIN_DOT, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public indexPropertyArgs(): IndexPropertyArgsContext | undefined {
		return this.tryGetRuleContext(0, IndexPropertyArgsContext);
	}
	public namedPropertyArgs(): NamedPropertyArgsContext | undefined {
		return this.tryGetRuleContext(0, NamedPropertyArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_pathElement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterPathElement) {
			listener.enterPathElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitPathElement) {
			listener.exitPathElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitPathElement) {
			return visitor.visitPathElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamePartContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public dynamicMemberName(): DynamicMemberNameContext | undefined {
		return this.tryGetRuleContext(0, DynamicMemberNameContext);
	}
	public keywords(): KeywordsContext | undefined {
		return this.tryGetRuleContext(0, KeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_namePart; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNamePart) {
			listener.enterNamePart(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNamePart) {
			listener.exitNamePart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNamePart) {
			return visitor.visitNamePart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicMemberNameContext extends ParserRuleContext {
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public gstring(): GstringContext | undefined {
		return this.tryGetRuleContext(0, GstringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_dynamicMemberName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterDynamicMemberName) {
			listener.enterDynamicMemberName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitDynamicMemberName) {
			listener.exitDynamicMemberName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitDynamicMemberName) {
			return visitor.visitDynamicMemberName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexPropertyArgsContext extends ParserRuleContext {
	public RBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACK, 0); }
	public SAFE_INDEX(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SAFE_INDEX, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LBRACK, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_indexPropertyArgs; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterIndexPropertyArgs) {
			listener.enterIndexPropertyArgs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitIndexPropertyArgs) {
			listener.exitIndexPropertyArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitIndexPropertyArgs) {
			return visitor.visitIndexPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedPropertyArgsContext extends ParserRuleContext {
	public RBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACK, 0); }
	public SAFE_INDEX(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SAFE_INDEX, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_namedPropertyArgs; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNamedPropertyArgs) {
			listener.enterNamedPropertyArgs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNamedPropertyArgs) {
			listener.exitNamedPropertyArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNamedPropertyArgs) {
			return visitor.visitNamedPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierPrmrAltContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterIdentifierPrmrAlt) {
			listener.enterIdentifierPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitIdentifierPrmrAlt) {
			listener.exitIdentifierPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPrmrAlt) {
			return visitor.visitIdentifierPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralPrmrAltContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterLiteralPrmrAlt) {
			listener.enterLiteralPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitLiteralPrmrAlt) {
			listener.exitLiteralPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitLiteralPrmrAlt) {
			return visitor.visitLiteralPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GstringPrmrAltContext extends PrimaryContext {
	public gstring(): GstringContext {
		return this.getRuleContext(0, GstringContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterGstringPrmrAlt) {
			listener.enterGstringPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitGstringPrmrAlt) {
			listener.exitGstringPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitGstringPrmrAlt) {
			return visitor.visitGstringPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewPrmrAltContext extends PrimaryContext {
	public NEW(): TerminalNode { return this.getToken(NextflowConfigParser.NEW, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public creator(): CreatorContext {
		return this.getRuleContext(0, CreatorContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNewPrmrAlt) {
			listener.enterNewPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNewPrmrAlt) {
			listener.exitNewPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNewPrmrAlt) {
			return visitor.visitNewPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisPrmrAltContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(NextflowConfigParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterThisPrmrAlt) {
			listener.enterThisPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitThisPrmrAlt) {
			listener.exitThisPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitThisPrmrAlt) {
			return visitor.visitThisPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperPrmrAltContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(NextflowConfigParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSuperPrmrAlt) {
			listener.enterSuperPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSuperPrmrAlt) {
			listener.exitSuperPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSuperPrmrAlt) {
			return visitor.visitSuperPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenPrmrAltContext extends PrimaryContext {
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterParenPrmrAlt) {
			listener.enterParenPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitParenPrmrAlt) {
			listener.exitParenPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitParenPrmrAlt) {
			return visitor.visitParenPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClosureOrLambdaExpressionPrmrAltContext extends PrimaryContext {
	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		return this.getRuleContext(0, ClosureOrLambdaExpressionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClosureOrLambdaExpressionPrmrAlt) {
			listener.enterClosureOrLambdaExpressionPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClosureOrLambdaExpressionPrmrAlt) {
			listener.exitClosureOrLambdaExpressionPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClosureOrLambdaExpressionPrmrAlt) {
			return visitor.visitClosureOrLambdaExpressionPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListPrmrAltContext extends PrimaryContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterListPrmrAlt) {
			listener.enterListPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitListPrmrAlt) {
			listener.exitListPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitListPrmrAlt) {
			return visitor.visitListPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MapPrmrAltContext extends PrimaryContext {
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMapPrmrAlt) {
			listener.enterMapPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMapPrmrAlt) {
			listener.exitMapPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMapPrmrAlt) {
			return visitor.visitMapPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BuiltInTypePrmrAltContext extends PrimaryContext {
	public builtInType(): BuiltInTypeContext {
		return this.getRuleContext(0, BuiltInTypeContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBuiltInTypePrmrAlt) {
			listener.enterBuiltInTypePrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBuiltInTypePrmrAlt) {
			listener.exitBuiltInTypePrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBuiltInTypePrmrAlt) {
			return visitor.visitBuiltInTypePrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}








export class ListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACK, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_list; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_map; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapEntryListContext extends ParserRuleContext {
	public mapEntry(): MapEntryContext[];
	public mapEntry(i: number): MapEntryContext;
	public mapEntry(i?: number): MapEntryContext | MapEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapEntryContext);
		} else {
			return this.getRuleContext(i, MapEntryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_mapEntryList; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMapEntryList) {
			listener.enterMapEntryList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMapEntryList) {
			listener.exitMapEntryList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMapEntryList) {
			return visitor.visitMapEntryList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}




export class MapEntryContext extends ParserRuleContext {
	public mapEntryLabel(): MapEntryLabelContext | undefined {
		return this.tryGetRuleContext(0, MapEntryLabelContext);
	}
	public COLON(): TerminalNode { return this.getToken(NextflowConfigParser.COLON, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_mapEntry; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMapEntry) {
			listener.enterMapEntry(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMapEntry) {
			listener.exitMapEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMapEntry) {
			return visitor.visitMapEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}






export class MapEntryLabelContext extends ParserRuleContext {
	public keywords(): KeywordsContext | undefined {
		return this.tryGetRuleContext(0, KeywordsContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_mapEntryLabel; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterMapEntryLabel) {
			listener.enterMapEntryLabel(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitMapEntryLabel) {
			listener.exitMapEntryLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitMapEntryLabel) {
			return visitor.visitMapEntryLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}






export class CreatorContext extends ParserRuleContext {
	public t: number;
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public anonymousInnerClassDeclaration(): AnonymousInnerClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnonymousInnerClassDeclarationContext);
	}
	public dim(): DimContext[];
	public dim(i: number): DimContext;
	public dim(i?: number): DimContext | DimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimContext);
		} else {
			return this.getRuleContext(i, DimContext);
		}
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_creator; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_dim; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterDim) {
			listener.enterDim(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitDim) {
			listener.exitDim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitDim) {
			return visitor.visitDim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowConfigParser.RBRACE, 0); }
	public variableInitializers(): VariableInitializersContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymousInnerClassDeclarationContext extends ParserRuleContext {
	public t: number;
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_anonymousInnerClassDeclaration; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterAnonymousInnerClassDeclaration) {
			listener.enterAnonymousInnerClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitAnonymousInnerClassDeclaration) {
			listener.exitAnonymousInnerClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitAnonymousInnerClassDeclaration) {
			return visitor.visitAnonymousInnerClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public qualifiedClassName(): QualifiedClassNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedClassNameContext);
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_createdName; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NextflowConfigParser.LT, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(NextflowConfigParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.LPAREN, 0); }
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext | undefined {
		return this.tryGetRuleContext(0, EnhancedArgumentListInParContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_arguments; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}




export class EnhancedArgumentListInParContext extends ParserRuleContext {
	public enhancedArgumentListElement(): EnhancedArgumentListElementContext[];
	public enhancedArgumentListElement(i: number): EnhancedArgumentListElementContext;
	public enhancedArgumentListElement(i?: number): EnhancedArgumentListElementContext | EnhancedArgumentListElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnhancedArgumentListElementContext);
		} else {
			return this.getRuleContext(i, EnhancedArgumentListElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.COMMA);
		} else {
			return this.getToken(NextflowConfigParser.COMMA, i);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_enhancedArgumentListInPar; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEnhancedArgumentListInPar) {
			listener.enterEnhancedArgumentListInPar(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEnhancedArgumentListInPar) {
			listener.exitEnhancedArgumentListInPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEnhancedArgumentListInPar) {
			return visitor.visitEnhancedArgumentListInPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}






export class EnhancedArgumentListElementContext extends ParserRuleContext {
	public expressionListElement(): ExpressionListElementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListElementContext);
	}
	public mapEntry(): MapEntryContext | undefined {
		return this.tryGetRuleContext(0, MapEntryContext);
	}
	public standardLambdaExpression(): StandardLambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, StandardLambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_enhancedArgumentListElement; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterEnhancedArgumentListElement) {
			listener.enterEnhancedArgumentListElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitEnhancedArgumentListElement) {
			listener.exitEnhancedArgumentListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitEnhancedArgumentListElement) {
			return visitor.visitEnhancedArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(NextflowConfigParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public CapitalizedIdentifier(): TerminalNode { return this.getToken(NextflowConfigParser.CapitalizedIdentifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_className; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.Identifier, 0); }
	public CapitalizedIdentifier(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CapitalizedIdentifier, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VAR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IN, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRAIT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AS, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.YIELD, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PERMITS, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RECORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_identifier; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltInTypeContext extends ParserRuleContext {
	public BuiltInPrimitiveType(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.BuiltInPrimitiveType, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_builtInType; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterBuiltInType) {
			listener.enterBuiltInType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitBuiltInType) {
			listener.exitBuiltInType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitBuiltInType) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.AS, 0); }
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ASSERT, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.BREAK, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.CONTINUE, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEF, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DEFAULT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.EXTENDS, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.FOR, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IF, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IMPLEMENTS, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IMPORT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.IN, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.INSTANCEOF, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.INTERFACE, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NATIVE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NEW, 0); }
	public NON_SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NON_SEALED, 0); }
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PACKAGE, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PERMITS, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RECORD, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.RETURN, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SEALED, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.STRICTFP, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SWITCH, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.SYNCHRONIZED, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.THROW, 0); }
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.THROWS, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRANSIENT, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRAIT, 0); }
	public THREADSAFE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.THREADSAFE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.TRY, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VAR, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VOLATILE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.WHILE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.YIELD, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.BooleanLiteral, 0); }
	public BuiltInPrimitiveType(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.BuiltInPrimitiveType, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.VOID, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(NextflowConfigParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_keywords; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RparenContext extends ParserRuleContext {
	public RPAREN(): TerminalNode { return this.getToken(NextflowConfigParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_rparen; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterRparen) {
			listener.enterRparen(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitRparen) {
			listener.exitRparen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitRparen) {
			return visitor.visitRparen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NlsContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.NL);
		} else {
			return this.getToken(NextflowConfigParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_nls; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterNls) {
			listener.enterNls(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitNls) {
			listener.exitNls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitNls) {
			return visitor.visitNls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SepContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.NL);
		} else {
			return this.getToken(NextflowConfigParser.NL, i);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowConfigParser.SEMI);
		} else {
			return this.getToken(NextflowConfigParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowConfigParser.RULE_sep; }
	// @Override
	public enterRule(listener: NextflowConfigParserListener): void {
		if (listener.enterSep) {
			listener.enterSep(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowConfigParserListener): void {
		if (listener.exitSep) {
			listener.exitSep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowConfigParserVisitor<Result>): Result {
		if (visitor.visitSep) {
			return visitor.visitSep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


