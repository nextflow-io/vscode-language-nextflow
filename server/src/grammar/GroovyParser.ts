// Generated from server/src/grammar/GroovyParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { GroovyParserListener } from "./GroovyParserListener";
import { GroovyParserVisitor } from "./GroovyParserVisitor";


export class GroovyParser extends Parser {
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
	public static readonly CASE = 17;
	public static readonly CATCH = 18;
	public static readonly CLASS = 19;
	public static readonly CONST = 20;
	public static readonly CONTINUE = 21;
	public static readonly DEFAULT = 22;
	public static readonly DO = 23;
	public static readonly ELSE = 24;
	public static readonly ENUM = 25;
	public static readonly EXTENDS = 26;
	public static readonly FINAL = 27;
	public static readonly FINALLY = 28;
	public static readonly FOR = 29;
	public static readonly IF = 30;
	public static readonly GOTO = 31;
	public static readonly IMPLEMENTS = 32;
	public static readonly IMPORT = 33;
	public static readonly INSTANCEOF = 34;
	public static readonly INTERFACE = 35;
	public static readonly NATIVE = 36;
	public static readonly NEW = 37;
	public static readonly PACKAGE = 38;
	public static readonly PRIVATE = 39;
	public static readonly PROTECTED = 40;
	public static readonly PUBLIC = 41;
	public static readonly RETURN = 42;
	public static readonly STATIC = 43;
	public static readonly STRICTFP = 44;
	public static readonly SUPER = 45;
	public static readonly SWITCH = 46;
	public static readonly SYNCHRONIZED = 47;
	public static readonly THIS = 48;
	public static readonly THROW = 49;
	public static readonly THROWS = 50;
	public static readonly TRANSIENT = 51;
	public static readonly TRY = 52;
	public static readonly VOID = 53;
	public static readonly VOLATILE = 54;
	public static readonly WHILE = 55;
	public static readonly IntegerLiteral = 56;
	public static readonly FloatingPointLiteral = 57;
	public static readonly BooleanLiteral = 58;
	public static readonly NullLiteral = 59;
	public static readonly RANGE_INCLUSIVE = 60;
	public static readonly RANGE_EXCLUSIVE = 61;
	public static readonly SPREAD_DOT = 62;
	public static readonly SAFE_DOT = 63;
	public static readonly SAFE_CHAIN_DOT = 64;
	public static readonly ELVIS = 65;
	public static readonly METHOD_POINTER = 66;
	public static readonly METHOD_REFERENCE = 67;
	public static readonly REGEX_FIND = 68;
	public static readonly REGEX_MATCH = 69;
	public static readonly POWER = 70;
	public static readonly POWER_ASSIGN = 71;
	public static readonly SPACESHIP = 72;
	public static readonly IDENTICAL = 73;
	public static readonly NOT_IDENTICAL = 74;
	public static readonly ARROW = 75;
	public static readonly NOT_INSTANCEOF = 76;
	public static readonly NOT_IN = 77;
	public static readonly LPAREN = 78;
	public static readonly RPAREN = 79;
	public static readonly LBRACE = 80;
	public static readonly RBRACE = 81;
	public static readonly LBRACK = 82;
	public static readonly RBRACK = 83;
	public static readonly SEMI = 84;
	public static readonly COMMA = 85;
	public static readonly DOT = 86;
	public static readonly ASSIGN = 87;
	public static readonly GT = 88;
	public static readonly LT = 89;
	public static readonly NOT = 90;
	public static readonly BITNOT = 91;
	public static readonly QUESTION = 92;
	public static readonly COLON = 93;
	public static readonly EQUAL = 94;
	public static readonly LE = 95;
	public static readonly GE = 96;
	public static readonly NOTEQUAL = 97;
	public static readonly AND = 98;
	public static readonly OR = 99;
	public static readonly INC = 100;
	public static readonly DEC = 101;
	public static readonly ADD = 102;
	public static readonly SUB = 103;
	public static readonly MUL = 104;
	public static readonly DIV = 105;
	public static readonly BITAND = 106;
	public static readonly BITOR = 107;
	public static readonly XOR = 108;
	public static readonly MOD = 109;
	public static readonly ADD_ASSIGN = 110;
	public static readonly SUB_ASSIGN = 111;
	public static readonly MUL_ASSIGN = 112;
	public static readonly DIV_ASSIGN = 113;
	public static readonly AND_ASSIGN = 114;
	public static readonly OR_ASSIGN = 115;
	public static readonly XOR_ASSIGN = 116;
	public static readonly MOD_ASSIGN = 117;
	public static readonly LSHIFT_ASSIGN = 118;
	public static readonly RSHIFT_ASSIGN = 119;
	public static readonly URSHIFT_ASSIGN = 120;
	public static readonly ELVIS_ASSIGN = 121;
	public static readonly CapitalizedIdentifier = 122;
	public static readonly Identifier = 123;
	public static readonly AT = 124;
	public static readonly ELLIPSIS = 125;
	public static readonly WS = 126;
	public static readonly NL = 127;
	public static readonly SH_COMMENT = 128;
	public static readonly UNEXPECTED_CHAR = 129;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_scriptStatements = 1;
	public static readonly RULE_scriptStatement = 2;
	public static readonly RULE_packageDeclaration = 3;
	public static readonly RULE_importDeclaration = 4;
	public static readonly RULE_typeDeclaration = 5;
	public static readonly RULE_modifier = 6;
	public static readonly RULE_modifiersOpt = 7;
	public static readonly RULE_modifiers = 8;
	public static readonly RULE_classOrInterfaceModifiersOpt = 9;
	public static readonly RULE_classOrInterfaceModifiers = 10;
	public static readonly RULE_classOrInterfaceModifier = 11;
	public static readonly RULE_variableModifier = 12;
	public static readonly RULE_variableModifiersOpt = 13;
	public static readonly RULE_variableModifiers = 14;
	public static readonly RULE_typeParameters = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeBound = 17;
	public static readonly RULE_typeList = 18;
	public static readonly RULE_classDeclaration = 19;
	public static readonly RULE_classBody = 20;
	public static readonly RULE_enumConstants = 21;
	public static readonly RULE_enumConstant = 22;
	public static readonly RULE_classBodyDeclaration = 23;
	public static readonly RULE_memberDeclaration = 24;
	public static readonly RULE_methodDeclaration = 25;
	public static readonly RULE_methodName = 26;
	public static readonly RULE_returnType = 27;
	public static readonly RULE_fieldDeclaration = 28;
	public static readonly RULE_variableDeclarators = 29;
	public static readonly RULE_variableDeclarator = 30;
	public static readonly RULE_variableDeclaratorId = 31;
	public static readonly RULE_variableInitializer = 32;
	public static readonly RULE_variableInitializers = 33;
	public static readonly RULE_emptyDims = 34;
	public static readonly RULE_emptyDimsOpt = 35;
	public static readonly RULE_standardType = 36;
	public static readonly RULE_type = 37;
	public static readonly RULE_classOrInterfaceType = 38;
	public static readonly RULE_generalClassOrInterfaceType = 39;
	public static readonly RULE_standardClassOrInterfaceType = 40;
	public static readonly RULE_primitiveType = 41;
	public static readonly RULE_typeArguments = 42;
	public static readonly RULE_typeArgument = 43;
	public static readonly RULE_annotatedQualifiedClassName = 44;
	public static readonly RULE_qualifiedClassNameList = 45;
	public static readonly RULE_formalParameters = 46;
	public static readonly RULE_formalParameterList = 47;
	public static readonly RULE_thisFormalParameter = 48;
	public static readonly RULE_formalParameter = 49;
	public static readonly RULE_methodBody = 50;
	public static readonly RULE_qualifiedName = 51;
	public static readonly RULE_qualifiedNameElement = 52;
	public static readonly RULE_qualifiedNameElements = 53;
	public static readonly RULE_qualifiedClassName = 54;
	public static readonly RULE_qualifiedStandardClassName = 55;
	public static readonly RULE_literal = 56;
	public static readonly RULE_gstring = 57;
	public static readonly RULE_gstringValue = 58;
	public static readonly RULE_gstringPath = 59;
	public static readonly RULE_lambdaExpression = 60;
	public static readonly RULE_standardLambdaExpression = 61;
	public static readonly RULE_lambdaParameters = 62;
	public static readonly RULE_standardLambdaParameters = 63;
	public static readonly RULE_lambdaBody = 64;
	public static readonly RULE_closure = 65;
	public static readonly RULE_closureOrLambdaExpression = 66;
	public static readonly RULE_blockStatementsOpt = 67;
	public static readonly RULE_blockStatements = 68;
	public static readonly RULE_annotationsOpt = 69;
	public static readonly RULE_annotation = 70;
	public static readonly RULE_elementValues = 71;
	public static readonly RULE_annotationName = 72;
	public static readonly RULE_elementValuePairs = 73;
	public static readonly RULE_elementValuePair = 74;
	public static readonly RULE_elementValuePairName = 75;
	public static readonly RULE_elementValue = 76;
	public static readonly RULE_elementValueArrayInitializer = 77;
	public static readonly RULE_block = 78;
	public static readonly RULE_blockStatement = 79;
	public static readonly RULE_localVariableDeclaration = 80;
	public static readonly RULE_variableDeclaration = 81;
	public static readonly RULE_typeNamePairs = 82;
	public static readonly RULE_typeNamePair = 83;
	public static readonly RULE_variableNames = 84;
	public static readonly RULE_conditionalStatement = 85;
	public static readonly RULE_ifElseStatement = 86;
	public static readonly RULE_switchStatement = 87;
	public static readonly RULE_loopStatement = 88;
	public static readonly RULE_continueStatement = 89;
	public static readonly RULE_breakStatement = 90;
	public static readonly RULE_tryCatchStatement = 91;
	public static readonly RULE_assertStatement = 92;
	public static readonly RULE_statement = 93;
	public static readonly RULE_catchClause = 94;
	public static readonly RULE_catchType = 95;
	public static readonly RULE_finallyBlock = 96;
	public static readonly RULE_resources = 97;
	public static readonly RULE_resourceList = 98;
	public static readonly RULE_resource = 99;
	public static readonly RULE_switchBlockStatementGroup = 100;
	public static readonly RULE_switchLabel = 101;
	public static readonly RULE_forControl = 102;
	public static readonly RULE_enhancedForControl = 103;
	public static readonly RULE_classicalForControl = 104;
	public static readonly RULE_forInit = 105;
	public static readonly RULE_forUpdate = 106;
	public static readonly RULE_castParExpression = 107;
	public static readonly RULE_parExpression = 108;
	public static readonly RULE_expressionInPar = 109;
	public static readonly RULE_expressionList = 110;
	public static readonly RULE_expressionListElement = 111;
	public static readonly RULE_enhancedStatementExpression = 112;
	public static readonly RULE_statementExpression = 113;
	public static readonly RULE_postfixExpression = 114;
	public static readonly RULE_expression = 115;
	public static readonly RULE_castOperandExpression = 116;
	public static readonly RULE_commandExpression = 117;
	public static readonly RULE_commandArgument = 118;
	public static readonly RULE_pathExpression = 119;
	public static readonly RULE_pathElement = 120;
	public static readonly RULE_namePart = 121;
	public static readonly RULE_dynamicMemberName = 122;
	public static readonly RULE_indexPropertyArgs = 123;
	public static readonly RULE_namedPropertyArgs = 124;
	public static readonly RULE_primary = 125;
	public static readonly RULE_namedPropertyArgPrimary = 126;
	public static readonly RULE_namedArgPrimary = 127;
	public static readonly RULE_commandPrimary = 128;
	public static readonly RULE_list = 129;
	public static readonly RULE_map = 130;
	public static readonly RULE_mapEntryList = 131;
	public static readonly RULE_namedPropertyArgList = 132;
	public static readonly RULE_mapEntry = 133;
	public static readonly RULE_namedPropertyArg = 134;
	public static readonly RULE_namedArg = 135;
	public static readonly RULE_mapEntryLabel = 136;
	public static readonly RULE_namedPropertyArgLabel = 137;
	public static readonly RULE_namedArgLabel = 138;
	public static readonly RULE_creator = 139;
	public static readonly RULE_dim = 140;
	public static readonly RULE_arrayInitializer = 141;
	public static readonly RULE_anonymousInnerClassDeclaration = 142;
	public static readonly RULE_createdName = 143;
	public static readonly RULE_nonWildcardTypeArguments = 144;
	public static readonly RULE_typeArgumentsOrDiamond = 145;
	public static readonly RULE_arguments = 146;
	public static readonly RULE_argumentList = 147;
	public static readonly RULE_enhancedArgumentList = 148;
	public static readonly RULE_enhancedArgumentListInPar = 149;
	public static readonly RULE_firstArgumentListElement = 150;
	public static readonly RULE_argumentListElement = 151;
	public static readonly RULE_firstEnhancedArgumentListElement = 152;
	public static readonly RULE_enhancedArgumentListElement = 153;
	public static readonly RULE_stringLiteral = 154;
	public static readonly RULE_className = 155;
	public static readonly RULE_identifier = 156;
	public static readonly RULE_builtInType = 157;
	public static readonly RULE_keywords = 158;
	public static readonly RULE_rparen = 159;
	public static readonly RULE_nls = 160;
	public static readonly RULE_sep = 161;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "scriptStatements", "scriptStatement", "packageDeclaration", 
		"importDeclaration", "typeDeclaration", "modifier", "modifiersOpt", "modifiers", 
		"classOrInterfaceModifiersOpt", "classOrInterfaceModifiers", "classOrInterfaceModifier", 
		"variableModifier", "variableModifiersOpt", "variableModifiers", "typeParameters", 
		"typeParameter", "typeBound", "typeList", "classDeclaration", "classBody", 
		"enumConstants", "enumConstant", "classBodyDeclaration", "memberDeclaration", 
		"methodDeclaration", "methodName", "returnType", "fieldDeclaration", "variableDeclarators", 
		"variableDeclarator", "variableDeclaratorId", "variableInitializer", "variableInitializers", 
		"emptyDims", "emptyDimsOpt", "standardType", "type", "classOrInterfaceType", 
		"generalClassOrInterfaceType", "standardClassOrInterfaceType", "primitiveType", 
		"typeArguments", "typeArgument", "annotatedQualifiedClassName", "qualifiedClassNameList", 
		"formalParameters", "formalParameterList", "thisFormalParameter", "formalParameter", 
		"methodBody", "qualifiedName", "qualifiedNameElement", "qualifiedNameElements", 
		"qualifiedClassName", "qualifiedStandardClassName", "literal", "gstring", 
		"gstringValue", "gstringPath", "lambdaExpression", "standardLambdaExpression", 
		"lambdaParameters", "standardLambdaParameters", "lambdaBody", "closure", 
		"closureOrLambdaExpression", "blockStatementsOpt", "blockStatements", 
		"annotationsOpt", "annotation", "elementValues", "annotationName", "elementValuePairs", 
		"elementValuePair", "elementValuePairName", "elementValue", "elementValueArrayInitializer", 
		"block", "blockStatement", "localVariableDeclaration", "variableDeclaration", 
		"typeNamePairs", "typeNamePair", "variableNames", "conditionalStatement", 
		"ifElseStatement", "switchStatement", "loopStatement", "continueStatement", 
		"breakStatement", "tryCatchStatement", "assertStatement", "statement", 
		"catchClause", "catchType", "finallyBlock", "resources", "resourceList", 
		"resource", "switchBlockStatementGroup", "switchLabel", "forControl", 
		"enhancedForControl", "classicalForControl", "forInit", "forUpdate", "castParExpression", 
		"parExpression", "expressionInPar", "expressionList", "expressionListElement", 
		"enhancedStatementExpression", "statementExpression", "postfixExpression", 
		"expression", "castOperandExpression", "commandExpression", "commandArgument", 
		"pathExpression", "pathElement", "namePart", "dynamicMemberName", "indexPropertyArgs", 
		"namedPropertyArgs", "primary", "namedPropertyArgPrimary", "namedArgPrimary", 
		"commandPrimary", "list", "map", "mapEntryList", "namedPropertyArgList", 
		"mapEntry", "namedPropertyArg", "namedArg", "mapEntryLabel", "namedPropertyArgLabel", 
		"namedArgLabel", "creator", "dim", "arrayInitializer", "anonymousInnerClassDeclaration", 
		"createdName", "nonWildcardTypeArguments", "typeArgumentsOrDiamond", "arguments", 
		"argumentList", "enhancedArgumentList", "enhancedArgumentListInPar", "firstArgumentListElement", 
		"argumentListElement", "firstEnhancedArgumentListElement", "enhancedArgumentListElement", 
		"stringLiteral", "className", "identifier", "builtInType", "keywords", 
		"rparen", "nls", "sep",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'as'", "'def'", "'in'", "'trait'", "'threadsafe'", "'var'", undefined, 
		"'abstract'", "'assert'", "'break'", "'case'", "'catch'", "'class'", "'const'", 
		"'continue'", "'default'", "'do'", "'else'", "'enum'", "'extends'", "'final'", 
		"'finally'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'interface'", "'native'", "'new'", "'package'", "'private'", "'protected'", 
		"'public'", "'return'", "'static'", "'strictfp'", "'super'", "'switch'", 
		"'synchronized'", "'this'", "'throw'", "'throws'", "'transient'", "'try'", 
		"'void'", "'volatile'", "'while'", undefined, undefined, undefined, "'null'", 
		"'..'", "'..<'", "'*.'", "'?.'", "'??.'", "'?:'", "'.&'", "'::'", "'=~'", 
		"'==~'", "'**'", "'**='", "'<=>'", "'==='", "'!=='", "'->'", "'!instanceof'", 
		"'!in'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"';'", "','", undefined, "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", 
		"'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", 
		"'-'", "'*'", undefined, "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", 
		"'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'?='", 
		undefined, undefined, "'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "StringLiteral", "GStringBegin", "GStringEnd", "GStringPart", 
		"GStringPathPart", "RollBackOne", "AS", "DEF", "IN", "TRAIT", "THREADSAFE", 
		"VAR", "BuiltInPrimitiveType", "ABSTRACT", "ASSERT", "BREAK", "CASE", 
		"CATCH", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "ELSE", "ENUM", 
		"EXTENDS", "FINAL", "FINALLY", "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", 
		"INSTANCEOF", "INTERFACE", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", 
		"THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", 
		"IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral", "NullLiteral", 
		"RANGE_INCLUSIVE", "RANGE_EXCLUSIVE", "SPREAD_DOT", "SAFE_DOT", "SAFE_CHAIN_DOT", 
		"ELVIS", "METHOD_POINTER", "METHOD_REFERENCE", "REGEX_FIND", "REGEX_MATCH", 
		"POWER", "POWER_ASSIGN", "SPACESHIP", "IDENTICAL", "NOT_IDENTICAL", "ARROW", 
		"NOT_INSTANCEOF", "NOT_IN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", 
		"RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "NOT", "BITNOT", 
		"QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", 
		"DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "XOR", "MOD", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ELVIS_ASSIGN", 
		"CapitalizedIdentifier", "Identifier", "AT", "ELLIPSIS", "WS", "NL", "SH_COMMENT", 
		"UNEXPECTED_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GroovyParser._LITERAL_NAMES, GroovyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GroovyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GroovyParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GroovyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GroovyParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


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

	        return (tokenType === GroovyParser.Identifier || tokenType === GroovyParser.CapitalizedIdentifier || tokenType === GroovyParser.StringLiteral)
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
		this._interp = new ParserATNSimulator(GroovyParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GroovyParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.nls();
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 325;
				this.packageDeclaration();
				this.state = 327;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 326;
					this.sep();
					}
					break;
				}
				}
				break;
			}
			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 331;
				this.scriptStatements();
				}
				break;
			}
			this.state = 334;
			this.match(GroovyParser.EOF);
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
		this.enterRule(_localctx, 2, GroovyParser.RULE_scriptStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.scriptStatement();
			this.state = 342;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 337;
					this.sep();
					this.state = 338;
					this.scriptStatement();
					}
					}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.SEMI || _la === GroovyParser.NL) {
				{
				this.state = 345;
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
		this.enterRule(_localctx, 4, GroovyParser.RULE_scriptStatement);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 348;
				this.importDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 349;
				this.typeDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 350;
				if (!( !GroovyParser.isInvalidMethodDeclaration(this._input) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isInvalidMethodDeclaration(this._input) ");
				}
				this.state = 351;
				this.methodDeclaration(3, 9);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 352;
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
		this.enterRule(_localctx, 6, GroovyParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.annotationsOpt();
			this.state = 356;
			this.match(GroovyParser.PACKAGE);
			this.state = 357;
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
		this.enterRule(_localctx, 8, GroovyParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.annotationsOpt();
			this.state = 360;
			this.match(GroovyParser.IMPORT);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.STATIC) {
				{
				this.state = 361;
				this.match(GroovyParser.STATIC);
				}
			}

			this.state = 364;
			this.qualifiedName();
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.DOT:
				{
				this.state = 365;
				this.match(GroovyParser.DOT);
				this.state = 366;
				this.match(GroovyParser.MUL);
				}
				break;
			case GroovyParser.AS:
				{
				this.state = 367;
				this.match(GroovyParser.AS);
				this.state = 368;
				_localctx._alias = this.identifier();
				}
				break;
			case GroovyParser.EOF:
			case GroovyParser.SEMI:
			case GroovyParser.NL:
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
		this.enterRule(_localctx, 10, GroovyParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.classOrInterfaceModifiersOpt();
			this.state = 372;
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
		this.enterRule(_localctx, 12, GroovyParser.RULE_modifier);
		let _la: number;
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.ABSTRACT:
			case GroovyParser.DEFAULT:
			case GroovyParser.FINAL:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
			case GroovyParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 374;
				this.classOrInterfaceModifier();
				}
				break;
			case GroovyParser.DEF:
			case GroovyParser.VAR:
			case GroovyParser.NATIVE:
			case GroovyParser.SYNCHRONIZED:
			case GroovyParser.TRANSIENT:
			case GroovyParser.VOLATILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 375;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === GroovyParser.DEF || _la === GroovyParser.VAR || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (GroovyParser.NATIVE - 36)) | (1 << (GroovyParser.SYNCHRONIZED - 36)) | (1 << (GroovyParser.TRANSIENT - 36)) | (1 << (GroovyParser.VOLATILE - 36)))) !== 0))) {
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
		this.enterRule(_localctx, 14, GroovyParser.RULE_modifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 378;
				this.modifiers();
				this.state = 379;
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
		this.enterRule(_localctx, 16, GroovyParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.modifier();
			this.state = 389;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 384;
					this.nls();
					this.state = 385;
					this.modifier();
					}
					}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
		this.enterRule(_localctx, 18, GroovyParser.RULE_classOrInterfaceModifiersOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 392;
				this.classOrInterfaceModifiers();
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GroovyParser.NL) {
					{
					{
					this.state = 393;
					this.match(GroovyParser.NL);
					}
					}
					this.state = 398;
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
		this.enterRule(_localctx, 20, GroovyParser.RULE_classOrInterfaceModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.classOrInterfaceModifier();
			this.state = 407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 402;
					this.nls();
					this.state = 403;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 409;
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
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GroovyParser.RULE_classOrInterfaceModifier);
		let _la: number;
		try {
			this.state = 412;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 410;
				this.annotation();
				}
				break;
			case GroovyParser.ABSTRACT:
			case GroovyParser.DEFAULT:
			case GroovyParser.FINAL:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 411;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (GroovyParser.ABSTRACT - 14)) | (1 << (GroovyParser.DEFAULT - 14)) | (1 << (GroovyParser.FINAL - 14)) | (1 << (GroovyParser.PRIVATE - 14)) | (1 << (GroovyParser.PROTECTED - 14)) | (1 << (GroovyParser.PUBLIC - 14)) | (1 << (GroovyParser.STATIC - 14)) | (1 << (GroovyParser.STRICTFP - 14)))) !== 0))) {
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
		this.enterRule(_localctx, 24, GroovyParser.RULE_variableModifier);
		let _la: number;
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 414;
				this.annotation();
				}
				break;
			case GroovyParser.DEF:
			case GroovyParser.VAR:
			case GroovyParser.ABSTRACT:
			case GroovyParser.FINAL:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 415;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GroovyParser.DEF) | (1 << GroovyParser.VAR) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.FINAL))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (GroovyParser.PRIVATE - 39)) | (1 << (GroovyParser.PROTECTED - 39)) | (1 << (GroovyParser.PUBLIC - 39)) | (1 << (GroovyParser.STATIC - 39)) | (1 << (GroovyParser.STRICTFP - 39)))) !== 0))) {
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
		this.enterRule(_localctx, 26, GroovyParser.RULE_variableModifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 418;
				this.variableModifiers();
				this.state = 419;
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
		this.enterRule(_localctx, 28, GroovyParser.RULE_variableModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.variableModifier();
			this.state = 429;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 424;
					this.nls();
					this.state = 425;
					this.variableModifier();
					}
					}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
		this.enterRule(_localctx, 30, GroovyParser.RULE_typeParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(GroovyParser.LT);
			this.state = 433;
			this.nls();
			this.state = 434;
			this.typeParameter();
			this.state = 441;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 435;
					this.match(GroovyParser.COMMA);
					this.state = 436;
					this.nls();
					this.state = 437;
					this.typeParameter();
					}
					}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 444;
			this.nls();
			this.state = 445;
			this.match(GroovyParser.GT);
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
		this.enterRule(_localctx, 32, GroovyParser.RULE_typeParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.className();
			this.state = 452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 448;
				this.match(GroovyParser.EXTENDS);
				this.state = 449;
				this.nls();
				this.state = 450;
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
		this.enterRule(_localctx, 34, GroovyParser.RULE_typeBound);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.type();
			this.state = 461;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 455;
					this.match(GroovyParser.BITAND);
					this.state = 456;
					this.nls();
					this.state = 457;
					this.type();
					}
					}
				}
				this.state = 463;
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GroovyParser.RULE_typeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.type();
			this.state = 471;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 465;
					this.match(GroovyParser.COMMA);
					this.state = 466;
					this.nls();
					this.state = 467;
					this.type();
					}
					}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
		this.enterRule(_localctx, 38, GroovyParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.CLASS:
				{
				this.state = 474;
				this.match(GroovyParser.CLASS);
				 _localctx.t =  0; 
				}
				break;
			case GroovyParser.INTERFACE:
				{
				this.state = 476;
				this.match(GroovyParser.INTERFACE);
				 _localctx.t =  1; 
				}
				break;
			case GroovyParser.ENUM:
				{
				this.state = 478;
				this.match(GroovyParser.ENUM);
				 _localctx.t =  2; 
				}
				break;
			case GroovyParser.AT:
				{
				this.state = 480;
				this.match(GroovyParser.AT);
				this.state = 481;
				this.match(GroovyParser.INTERFACE);
				 _localctx.t =  3; 
				}
				break;
			case GroovyParser.TRAIT:
				{
				this.state = 483;
				this.match(GroovyParser.TRAIT);
				 _localctx.t =  4; 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 487;
			this.identifier();
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 488;
				this.nls();
				this.state = 489;
				this.typeParameters();
				}
				break;
			}
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 493;
				this.nls();
				this.state = 494;
				this.match(GroovyParser.EXTENDS);
				this.state = 495;
				this.nls();
				this.state = 496;
				_localctx._scs = this.typeList();
				}
				break;
			}
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 500;
				this.nls();
				this.state = 501;
				this.match(GroovyParser.IMPLEMENTS);
				this.state = 502;
				this.nls();
				this.state = 503;
				_localctx._is = this.typeList();
				}
				break;
			}
			this.state = 507;
			this.nls();
			this.state = 508;
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
		this.enterRule(_localctx, 40, GroovyParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(GroovyParser.LBRACE);
			this.state = 511;
			this.nls();
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 512;
				if (!( 2 == _localctx.t )) {
					throw this.createFailedPredicateException(" 2 == $t ");
				}
				this.state = 513;
				this.enumConstants();
				this.state = 517;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 514;
					this.nls();
					this.state = 515;
					this.match(GroovyParser.COMMA);
					}
					break;
				}
				this.state = 520;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 519;
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
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GroovyParser.StringLiteral) | (1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.CLASS) | (1 << GroovyParser.DEFAULT) | (1 << GroovyParser.ENUM) | (1 << GroovyParser.FINAL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (GroovyParser.IMPORT - 33)) | (1 << (GroovyParser.INTERFACE - 33)) | (1 << (GroovyParser.NATIVE - 33)) | (1 << (GroovyParser.PACKAGE - 33)) | (1 << (GroovyParser.PRIVATE - 33)) | (1 << (GroovyParser.PROTECTED - 33)) | (1 << (GroovyParser.PUBLIC - 33)) | (1 << (GroovyParser.STATIC - 33)) | (1 << (GroovyParser.STRICTFP - 33)) | (1 << (GroovyParser.SYNCHRONIZED - 33)) | (1 << (GroovyParser.TRANSIENT - 33)) | (1 << (GroovyParser.VOID - 33)) | (1 << (GroovyParser.VOLATILE - 33)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (GroovyParser.LBRACE - 80)) | (1 << (GroovyParser.LBRACK - 80)) | (1 << (GroovyParser.LT - 80)) | (1 << (GroovyParser.QUESTION - 80)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (GroovyParser.CapitalizedIdentifier - 122)) | (1 << (GroovyParser.Identifier - 122)) | (1 << (GroovyParser.AT - 122)))) !== 0)) {
				{
				this.state = 525;
				this.classBodyDeclaration(_localctx.t);
				this.state = 531;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 526;
						this.sep();
						this.state = 527;
						this.classBodyDeclaration(_localctx.t);
						}
						}
					}
					this.state = 533;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				}
			}

			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.SEMI || _la === GroovyParser.NL) {
				{
				this.state = 536;
				this.sep();
				}
			}

			this.state = 539;
			this.match(GroovyParser.RBRACE);
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
		this.enterRule(_localctx, 42, GroovyParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.enumConstant();
			this.state = 549;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 542;
					this.nls();
					this.state = 543;
					this.match(GroovyParser.COMMA);
					this.state = 544;
					this.nls();
					this.state = 545;
					this.enumConstant();
					}
					}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
		this.enterRule(_localctx, 44, GroovyParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.annotationsOpt();
			this.state = 553;
			this.identifier();
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 554;
				this.arguments();
				}
				break;
			}
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 557;
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
		this.enterRule(_localctx, 46, GroovyParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GroovyParser.STATIC) {
					{
					this.state = 560;
					this.match(GroovyParser.STATIC);
					this.state = 561;
					this.nls();
					}
				}

				this.state = 564;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 565;
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
		this.enterRule(_localctx, 48, GroovyParser.RULE_memberDeclaration);
		try {
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this.methodDeclaration(0, _localctx.t);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 569;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 570;
				this.modifiersOpt();
				this.state = 571;
				this.classDeclaration();
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
		this.enterRule(_localctx, 50, GroovyParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.modifiersOpt();
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.LT) {
				{
				this.state = 576;
				this.typeParameters();
				}
			}

			this.state = 582;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 579;
				this.returnType(_localctx.ct);
				this.state = 580;
				this.nls();
				}
				break;
			}
			this.state = 584;
			this.methodName();
			this.state = 585;
			this.formalParameters();
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 586;
				this.match(GroovyParser.DEFAULT);
				this.state = 587;
				this.nls();
				this.state = 588;
				this.elementValue();
				}
				break;

			case 2:
				{
				this.state = 595;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 590;
					this.nls();
					this.state = 591;
					this.match(GroovyParser.THROWS);
					this.state = 592;
					this.nls();
					this.state = 593;
					this.qualifiedClassNameList();
					}
					break;
				}
				this.state = 600;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 597;
					this.nls();
					this.state = 598;
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
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GroovyParser.RULE_methodName);
		try {
			this.state = 606;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.AS:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 604;
				this.identifier();
				}
				break;
			case GroovyParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
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
		this.enterRule(_localctx, 54, GroovyParser.RULE_returnType);
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 608;
				this.standardType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 609;
				this.match(GroovyParser.VOID);
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
		this.enterRule(_localctx, 56, GroovyParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
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
		this.enterRule(_localctx, 58, GroovyParser.RULE_variableDeclarators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.variableDeclarator();
			this.state = 621;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 615;
					this.match(GroovyParser.COMMA);
					this.state = 616;
					this.nls();
					this.state = 617;
					this.variableDeclarator();
					}
					}
				}
				this.state = 623;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 60, GroovyParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.variableDeclaratorId();
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 625;
				this.nls();
				this.state = 626;
				this.match(GroovyParser.ASSIGN);
				this.state = 627;
				this.nls();
				this.state = 628;
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
		this.enterRule(_localctx, 62, GroovyParser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
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
		this.enterRule(_localctx, 64, GroovyParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
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
		this.enterRule(_localctx, 66, GroovyParser.RULE_variableInitializers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.variableInitializer();
			this.state = 644;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 637;
					this.nls();
					this.state = 638;
					this.match(GroovyParser.COMMA);
					this.state = 639;
					this.nls();
					this.state = 640;
					this.variableInitializer();
					}
					}
				}
				this.state = 646;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 647;
			this.nls();
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.match(GroovyParser.COMMA);
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
		this.enterRule(_localctx, 68, GroovyParser.RULE_emptyDims);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 651;
					this.annotationsOpt();
					this.state = 652;
					this.match(GroovyParser.LBRACK);
					this.state = 653;
					this.match(GroovyParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 657;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		this.enterRule(_localctx, 70, GroovyParser.RULE_emptyDimsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 659;
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
		this.enterRule(_localctx, 72, GroovyParser.RULE_standardType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.annotationsOpt();
			this.state = 665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.BuiltInPrimitiveType:
				{
				this.state = 663;
				this.primitiveType();
				}
				break;
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				{
				this.state = 664;
				this.standardClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 667;
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
		this.enterRule(_localctx, 74, GroovyParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.annotationsOpt();
			this.state = 675;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.BuiltInPrimitiveType:
			case GroovyParser.VOID:
				{
				this.state = 672;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GroovyParser.BuiltInPrimitiveType:
					{
					this.state = 670;
					this.primitiveType();
					}
					break;
				case GroovyParser.VOID:
					{
					this.state = 671;
					this.match(GroovyParser.VOID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				{
				this.state = 674;
				this.generalClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 677;
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
		this.enterRule(_localctx, 76, GroovyParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 679;
				this.qualifiedClassName();
				}
				break;

			case 2:
				{
				this.state = 680;
				this.qualifiedStandardClassName();
				}
				break;
			}
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.LT) {
				{
				this.state = 683;
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
		this.enterRule(_localctx, 78, GroovyParser.RULE_generalClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.qualifiedClassName();
			this.state = 688;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 687;
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
		this.enterRule(_localctx, 80, GroovyParser.RULE_standardClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.qualifiedStandardClassName();
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 691;
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
		this.enterRule(_localctx, 82, GroovyParser.RULE_primitiveType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(GroovyParser.BuiltInPrimitiveType);
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
		this.enterRule(_localctx, 84, GroovyParser.RULE_typeArguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(GroovyParser.LT);
			this.state = 697;
			this.nls();
			this.state = 698;
			this.typeArgument();
			this.state = 705;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 699;
					this.match(GroovyParser.COMMA);
					this.state = 700;
					this.nls();
					this.state = 701;
					this.typeArgument();
					}
					}
				}
				this.state = 707;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 708;
			this.nls();
			this.state = 709;
			this.match(GroovyParser.GT);
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
		this.enterRule(_localctx, 86, GroovyParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 711;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 712;
				this.annotationsOpt();
				this.state = 713;
				this.match(GroovyParser.QUESTION);
				this.state = 718;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 714;
					_la = this._input.LA(1);
					if (!(_la === GroovyParser.EXTENDS || _la === GroovyParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 715;
					this.nls();
					this.state = 716;
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
		this.enterRule(_localctx, 88, GroovyParser.RULE_annotatedQualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.annotationsOpt();
			this.state = 723;
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
		this.enterRule(_localctx, 90, GroovyParser.RULE_qualifiedClassNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.annotatedQualifiedClassName();
			this.state = 732;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 726;
					this.match(GroovyParser.COMMA);
					this.state = 727;
					this.nls();
					this.state = 728;
					this.annotatedQualifiedClassName();
					}
					}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
		this.enterRule(_localctx, 92, GroovyParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(GroovyParser.LPAREN);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.FINAL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (GroovyParser.IMPORT - 33)) | (1 << (GroovyParser.PACKAGE - 33)) | (1 << (GroovyParser.PRIVATE - 33)) | (1 << (GroovyParser.PROTECTED - 33)) | (1 << (GroovyParser.PUBLIC - 33)) | (1 << (GroovyParser.STATIC - 33)) | (1 << (GroovyParser.STRICTFP - 33)) | (1 << (GroovyParser.VOID - 33)))) !== 0) || _la === GroovyParser.LBRACK || _la === GroovyParser.QUESTION || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (GroovyParser.CapitalizedIdentifier - 122)) | (1 << (GroovyParser.Identifier - 122)) | (1 << (GroovyParser.AT - 122)) | (1 << (GroovyParser.ELLIPSIS - 122)))) !== 0)) {
				{
				this.state = 736;
				this.formalParameterList();
				}
			}

			this.state = 739;
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
		this.enterRule(_localctx, 94, GroovyParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 741;
				this.formalParameter();
				}
				break;

			case 2:
				{
				this.state = 742;
				this.thisFormalParameter();
				}
				break;
			}
			this.state = 751;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 745;
					this.match(GroovyParser.COMMA);
					this.state = 746;
					this.nls();
					this.state = 747;
					this.formalParameter();
					}
					}
				}
				this.state = 753;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
		this.enterRule(_localctx, 96, GroovyParser.RULE_thisFormalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.type();
			this.state = 755;
			this.match(GroovyParser.THIS);
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
		this.enterRule(_localctx, 98, GroovyParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.variableModifiersOpt();
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 758;
				this.type();
				}
				break;
			}
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.ELLIPSIS) {
				{
				this.state = 761;
				this.match(GroovyParser.ELLIPSIS);
				}
			}

			this.state = 764;
			this.variableDeclaratorId();
			this.state = 770;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 765;
				this.nls();
				this.state = 766;
				this.match(GroovyParser.ASSIGN);
				this.state = 767;
				this.nls();
				this.state = 768;
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
		this.enterRule(_localctx, 100, GroovyParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
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
		this.enterRule(_localctx, 102, GroovyParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this.qualifiedNameElement();
			this.state = 779;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 775;
					this.match(GroovyParser.DOT);
					this.state = 776;
					this.qualifiedNameElement();
					}
					}
				}
				this.state = 781;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
		this.enterRule(_localctx, 104, GroovyParser.RULE_qualifiedNameElement);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 782;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 783;
				this.match(GroovyParser.DEF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 784;
				this.match(GroovyParser.IN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 785;
				this.match(GroovyParser.AS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 786;
				this.match(GroovyParser.TRAIT);
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
		this.enterRule(_localctx, 106, GroovyParser.RULE_qualifiedNameElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 789;
					this.qualifiedNameElement();
					this.state = 790;
					this.match(GroovyParser.DOT);
					}
					}
				}
				this.state = 796;
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
	public qualifiedClassName(): QualifiedClassNameContext {
		let _localctx: QualifiedClassNameContext = new QualifiedClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, GroovyParser.RULE_qualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.qualifiedNameElements();
			this.state = 798;
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
		this.enterRule(_localctx, 110, GroovyParser.RULE_qualifiedStandardClassName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.qualifiedNameElements();
			this.state = 801;
			this.className();
			this.state = 806;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 802;
					this.match(GroovyParser.DOT);
					this.state = 803;
					this.className();
					}
					}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
		this.enterRule(_localctx, 112, GroovyParser.RULE_literal);
		try {
			this.state = 814;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.IntegerLiteral:
				_localctx = new IntegerLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 809;
				this.match(GroovyParser.IntegerLiteral);
				}
				break;
			case GroovyParser.FloatingPointLiteral:
				_localctx = new FloatingPointLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 810;
				this.match(GroovyParser.FloatingPointLiteral);
				}
				break;
			case GroovyParser.StringLiteral:
				_localctx = new StringLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 811;
				this.stringLiteral();
				}
				break;
			case GroovyParser.BooleanLiteral:
				_localctx = new BooleanLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 812;
				this.match(GroovyParser.BooleanLiteral);
				}
				break;
			case GroovyParser.NullLiteral:
				_localctx = new NullLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 813;
				this.match(GroovyParser.NullLiteral);
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
		this.enterRule(_localctx, 114, GroovyParser.RULE_gstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(GroovyParser.GStringBegin);
			this.state = 817;
			this.gstringValue();
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.GStringPart) {
				{
				{
				this.state = 818;
				this.match(GroovyParser.GStringPart);
				this.state = 819;
				this.gstringValue();
				}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 825;
			this.match(GroovyParser.GStringEnd);
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
		this.enterRule(_localctx, 116, GroovyParser.RULE_gstringValue);
		try {
			this.state = 829;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.AS:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 827;
				this.gstringPath();
				}
				break;
			case GroovyParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
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
		this.enterRule(_localctx, 118, GroovyParser.RULE_gstringPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.identifier();
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.GStringPathPart) {
				{
				{
				this.state = 832;
				this.match(GroovyParser.GStringPathPart);
				}
				}
				this.state = 837;
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
		this.enterRule(_localctx, 120, GroovyParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.lambdaParameters();
			this.state = 839;
			this.nls();
			this.state = 840;
			this.match(GroovyParser.ARROW);
			this.state = 841;
			this.nls();
			this.state = 842;
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
		this.enterRule(_localctx, 122, GroovyParser.RULE_standardLambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.standardLambdaParameters();
			this.state = 845;
			this.nls();
			this.state = 846;
			this.match(GroovyParser.ARROW);
			this.state = 847;
			this.nls();
			this.state = 848;
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
		this.enterRule(_localctx, 124, GroovyParser.RULE_lambdaParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
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
		this.enterRule(_localctx, 126, GroovyParser.RULE_standardLambdaParameters);
		try {
			this.state = 854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 852;
				this.formalParameters();
				}
				break;
			case GroovyParser.AS:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 853;
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
		this.enterRule(_localctx, 128, GroovyParser.RULE_lambdaBody);
		try {
			this.state = 858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 856;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 857;
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
		this.enterRule(_localctx, 130, GroovyParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.match(GroovyParser.LBRACE);
			this.state = 869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.nls();
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.FINAL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (GroovyParser.IMPORT - 33)) | (1 << (GroovyParser.PACKAGE - 33)) | (1 << (GroovyParser.PRIVATE - 33)) | (1 << (GroovyParser.PROTECTED - 33)) | (1 << (GroovyParser.PUBLIC - 33)) | (1 << (GroovyParser.STATIC - 33)) | (1 << (GroovyParser.STRICTFP - 33)) | (1 << (GroovyParser.VOID - 33)))) !== 0) || _la === GroovyParser.LBRACK || _la === GroovyParser.QUESTION || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (GroovyParser.CapitalizedIdentifier - 122)) | (1 << (GroovyParser.Identifier - 122)) | (1 << (GroovyParser.AT - 122)) | (1 << (GroovyParser.ELLIPSIS - 122)))) !== 0)) {
					{
					this.state = 862;
					this.formalParameterList();
					this.state = 863;
					this.nls();
					}
				}

				this.state = 867;
				this.match(GroovyParser.ARROW);
				}
				break;
			}
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 871;
				this.sep();
				}
				break;
			}
			this.state = 874;
			this.blockStatementsOpt();
			this.state = 875;
			this.match(GroovyParser.RBRACE);
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
		this.enterRule(_localctx, 132, GroovyParser.RULE_closureOrLambdaExpression);
		try {
			this.state = 879;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 877;
				this.closure();
				}
				break;
			case GroovyParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 878;
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
		this.enterRule(_localctx, 134, GroovyParser.RULE_blockStatementsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 881;
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
		this.enterRule(_localctx, 136, GroovyParser.RULE_blockStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.blockStatement();
			this.state = 890;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 885;
					this.sep();
					this.state = 886;
					this.blockStatement();
					}
					}
				}
				this.state = 892;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 893;
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
		this.enterRule(_localctx, 138, GroovyParser.RULE_annotationsOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.AT) {
				{
				this.state = 896;
				this.annotation();
				this.state = 902;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 897;
						this.nls();
						this.state = 898;
						this.annotation();
						}
						}
					}
					this.state = 904;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				}
				this.state = 905;
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
		this.enterRule(_localctx, 140, GroovyParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this.match(GroovyParser.AT);
			this.state = 910;
			this.annotationName();
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 911;
				this.nls();
				this.state = 912;
				this.match(GroovyParser.LPAREN);
				this.state = 914;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 913;
					this.elementValues();
					}
					break;
				}
				this.state = 916;
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
		this.enterRule(_localctx, 142, GroovyParser.RULE_elementValues);
		try {
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 920;
				this.elementValuePairs();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
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
		this.enterRule(_localctx, 144, GroovyParser.RULE_annotationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
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
		this.enterRule(_localctx, 146, GroovyParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.elementValuePair();
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.COMMA) {
				{
				{
				this.state = 927;
				this.match(GroovyParser.COMMA);
				this.state = 928;
				this.elementValuePair();
				}
				}
				this.state = 933;
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
		this.enterRule(_localctx, 148, GroovyParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.elementValuePairName();
			this.state = 935;
			this.nls();
			this.state = 936;
			this.match(GroovyParser.ASSIGN);
			this.state = 937;
			this.nls();
			this.state = 938;
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
		this.enterRule(_localctx, 150, GroovyParser.RULE_elementValuePairName);
		try {
			this.state = 942;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 940;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 941;
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
		this.enterRule(_localctx, 152, GroovyParser.RULE_elementValue);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 944;
				this.elementValueArrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 945;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 946;
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
		this.enterRule(_localctx, 154, GroovyParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this.match(GroovyParser.LBRACK);
			this.state = 961;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 950;
				this.elementValue();
				this.state = 955;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 951;
						this.match(GroovyParser.COMMA);
						this.state = 952;
						this.elementValue();
						}
						}
					}
					this.state = 957;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				}
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GroovyParser.COMMA) {
					{
					this.state = 958;
					this.match(GroovyParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 963;
			this.match(GroovyParser.RBRACK);
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
		this.enterRule(_localctx, 156, GroovyParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(GroovyParser.LBRACE);
			this.state = 967;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
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
			this.match(GroovyParser.RBRACE);
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
		this.enterRule(_localctx, 158, GroovyParser.RULE_blockStatement);
		try {
			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 973;
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
		this.enterRule(_localctx, 160, GroovyParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			if (!( !GroovyParser.isInvalidLocalVariableDeclaration(this._input) )) {
				throw this.createFailedPredicateException(" !GroovyParser.isInvalidLocalVariableDeclaration(this._input) ");
			}
			this.state = 977;
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
		this.enterRule(_localctx, 162, GroovyParser.RULE_variableDeclaration);
		try {
			this.state = 996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 979;
				this.modifiers();
				this.state = 980;
				this.nls();
				this.state = 991;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GroovyParser.AS:
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.BuiltInPrimitiveType:
				case GroovyParser.IMPORT:
				case GroovyParser.PACKAGE:
				case GroovyParser.VOID:
				case GroovyParser.LBRACK:
				case GroovyParser.QUESTION:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
				case GroovyParser.AT:
					{
					this.state = 982;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
					case 1:
						{
						this.state = 981;
						this.type();
						}
						break;
					}
					this.state = 984;
					this.variableDeclarators();
					}
					break;
				case GroovyParser.LPAREN:
					{
					this.state = 985;
					this.typeNamePairs();
					this.state = 986;
					this.nls();
					this.state = 987;
					this.match(GroovyParser.ASSIGN);
					this.state = 988;
					this.nls();
					this.state = 989;
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
				this.state = 993;
				this.type();
				this.state = 994;
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
		this.enterRule(_localctx, 164, GroovyParser.RULE_typeNamePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(GroovyParser.LPAREN);
			this.state = 999;
			this.typeNamePair();
			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.COMMA) {
				{
				{
				this.state = 1000;
				this.match(GroovyParser.COMMA);
				this.state = 1001;
				this.typeNamePair();
				}
				}
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1007;
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
		this.enterRule(_localctx, 166, GroovyParser.RULE_typeNamePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1009;
				this.type();
				}
				break;
			}
			this.state = 1012;
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
		this.enterRule(_localctx, 168, GroovyParser.RULE_variableNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this.match(GroovyParser.LPAREN);
			this.state = 1015;
			this.variableDeclaratorId();
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1016;
				this.match(GroovyParser.COMMA);
				this.state = 1017;
				this.variableDeclaratorId();
				}
				}
				this.state = 1020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GroovyParser.COMMA);
			this.state = 1022;
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
		this.enterRule(_localctx, 170, GroovyParser.RULE_conditionalStatement);
		try {
			this.state = 1026;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1024;
				this.ifElseStatement();
				}
				break;
			case GroovyParser.SWITCH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1025;
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
		this.enterRule(_localctx, 172, GroovyParser.RULE_ifElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.match(GroovyParser.IF);
			this.state = 1029;
			this.expressionInPar();
			this.state = 1030;
			this.nls();
			this.state = 1031;
			_localctx._tb = this.statement();
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1034;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1032;
					this.nls();
					}
					break;

				case 2:
					{
					this.state = 1033;
					this.sep();
					}
					break;
				}
				this.state = 1036;
				this.match(GroovyParser.ELSE);
				this.state = 1037;
				this.nls();
				this.state = 1038;
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
		this.enterRule(_localctx, 174, GroovyParser.RULE_switchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(GroovyParser.SWITCH);
			this.state = 1043;
			this.expressionInPar();
			this.state = 1044;
			this.nls();
			this.state = 1045;
			this.match(GroovyParser.LBRACE);
			this.state = 1046;
			this.nls();
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.CASE || _la === GroovyParser.DEFAULT) {
				{
				this.state = 1048;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1047;
						this.switchBlockStatementGroup();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1050;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1052;
				this.nls();
				}
			}

			this.state = 1056;
			this.match(GroovyParser.RBRACE);
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
		this.enterRule(_localctx, 176, GroovyParser.RULE_loopStatement);
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.FOR:
				_localctx = new ForStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1058;
				this.match(GroovyParser.FOR);
				this.state = 1059;
				this.match(GroovyParser.LPAREN);
				this.state = 1060;
				this.forControl();
				this.state = 1061;
				this.rparen();
				this.state = 1062;
				this.nls();
				this.state = 1063;
				this.statement();
				}
				break;
			case GroovyParser.WHILE:
				_localctx = new WhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1065;
				this.match(GroovyParser.WHILE);
				this.state = 1066;
				this.expressionInPar();
				this.state = 1067;
				this.nls();
				this.state = 1068;
				this.statement();
				}
				break;
			case GroovyParser.DO:
				_localctx = new DoWhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1070;
				this.match(GroovyParser.DO);
				this.state = 1071;
				this.nls();
				this.state = 1072;
				this.statement();
				this.state = 1073;
				this.nls();
				this.state = 1074;
				this.match(GroovyParser.WHILE);
				this.state = 1075;
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
		this.enterRule(_localctx, 178, GroovyParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this.match(GroovyParser.CONTINUE);
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1080;
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
		this.enterRule(_localctx, 180, GroovyParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.match(GroovyParser.BREAK);
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1084;
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
	public tryCatchStatement(): TryCatchStatementContext {
		let _localctx: TryCatchStatementContext = new TryCatchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, GroovyParser.RULE_tryCatchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.match(GroovyParser.TRY);
			this.state = 1089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1088;
				this.resources();
				}
				break;
			}
			this.state = 1091;
			this.nls();
			this.state = 1092;
			this.block();
			this.state = 1098;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1093;
					this.nls();
					this.state = 1094;
					this.catchClause();
					}
					}
				}
				this.state = 1100;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			this.state = 1104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1101;
				this.nls();
				this.state = 1102;
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
		this.enterRule(_localctx, 184, GroovyParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.match(GroovyParser.ASSERT);
			this.state = 1107;
			_localctx._ce = this.expression(0);
			this.state = 1113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1108;
				this.nls();
				this.state = 1109;
				_la = this._input.LA(1);
				if (!(_la === GroovyParser.COMMA || _la === GroovyParser.COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1110;
				this.nls();
				this.state = 1111;
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
		this.enterRule(_localctx, 186, GroovyParser.RULE_statement);
		try {
			this.state = 1141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				_localctx = new BlockStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1115;
				this.block();
				}
				break;

			case 2:
				_localctx = new ConditionalStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1116;
				this.conditionalStatement();
				}
				break;

			case 3:
				_localctx = new LoopStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1117;
				this.loopStatement();
				}
				break;

			case 4:
				_localctx = new TryCatchStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1118;
				this.tryCatchStatement();
				}
				break;

			case 5:
				_localctx = new SynchronizedStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1119;
				this.match(GroovyParser.SYNCHRONIZED);
				this.state = 1120;
				this.expressionInPar();
				this.state = 1121;
				this.nls();
				this.state = 1122;
				this.block();
				}
				break;

			case 6:
				_localctx = new ReturnStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1124;
				this.match(GroovyParser.RETURN);
				this.state = 1126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1125;
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
				this.state = 1128;
				this.match(GroovyParser.THROW);
				this.state = 1129;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new BreakStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1130;
				this.breakStatement();
				}
				break;

			case 9:
				_localctx = new ContinueStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1131;
				this.continueStatement();
				}
				break;

			case 10:
				_localctx = new LabeledStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1132;
				this.identifier();
				this.state = 1133;
				this.match(GroovyParser.COLON);
				this.state = 1134;
				this.nls();
				this.state = 1135;
				this.statement();
				}
				break;

			case 11:
				_localctx = new AssertStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1137;
				this.assertStatement();
				}
				break;

			case 12:
				_localctx = new LocalVariableDeclarationStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1138;
				this.localVariableDeclaration();
				}
				break;

			case 13:
				_localctx = new ExpressionStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1139;
				this.statementExpression();
				}
				break;

			case 14:
				_localctx = new EmptyStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1140;
				this.match(GroovyParser.SEMI);
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
		this.enterRule(_localctx, 188, GroovyParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			this.match(GroovyParser.CATCH);
			this.state = 1144;
			this.match(GroovyParser.LPAREN);
			this.state = 1145;
			this.variableModifiersOpt();
			this.state = 1147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1146;
				this.catchType();
				}
				break;
			}
			this.state = 1149;
			this.identifier();
			this.state = 1150;
			this.rparen();
			this.state = 1151;
			this.nls();
			this.state = 1152;
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
		this.enterRule(_localctx, 190, GroovyParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			this.qualifiedClassName();
			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.BITOR) {
				{
				{
				this.state = 1155;
				this.match(GroovyParser.BITOR);
				this.state = 1156;
				this.qualifiedClassName();
				}
				}
				this.state = 1161;
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
		this.enterRule(_localctx, 192, GroovyParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			this.match(GroovyParser.FINALLY);
			this.state = 1163;
			this.nls();
			this.state = 1164;
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
		this.enterRule(_localctx, 194, GroovyParser.RULE_resources);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(GroovyParser.LPAREN);
			this.state = 1167;
			this.nls();
			this.state = 1168;
			this.resourceList();
			this.state = 1170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.SEMI || _la === GroovyParser.NL) {
				{
				this.state = 1169;
				this.sep();
				}
			}

			this.state = 1172;
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
		this.enterRule(_localctx, 196, GroovyParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this.resource();
			this.state = 1180;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1175;
					this.sep();
					this.state = 1176;
					this.resource();
					}
					}
				}
				this.state = 1182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
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
		this.enterRule(_localctx, 198, GroovyParser.RULE_resource);
		try {
			this.state = 1185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1183;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
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
		this.enterRule(_localctx, 200, GroovyParser.RULE_switchBlockStatementGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1187;
			this.switchLabel();
			this.state = 1193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1188;
					this.nls();
					this.state = 1189;
					this.switchLabel();
					}
					}
				}
				this.state = 1195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			}
			this.state = 1196;
			this.nls();
			this.state = 1197;
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
		this.enterRule(_localctx, 202, GroovyParser.RULE_switchLabel);
		try {
			this.state = 1205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1199;
				this.match(GroovyParser.CASE);
				this.state = 1200;
				this.expression(0);
				this.state = 1201;
				this.match(GroovyParser.COLON);
				}
				break;
			case GroovyParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1203;
				this.match(GroovyParser.DEFAULT);
				this.state = 1204;
				this.match(GroovyParser.COLON);
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
		this.enterRule(_localctx, 204, GroovyParser.RULE_forControl);
		try {
			this.state = 1209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1207;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1208;
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
		this.enterRule(_localctx, 206, GroovyParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this.variableModifiersOpt();
			this.state = 1213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1212;
				this.type();
				}
				break;
			}
			this.state = 1215;
			this.variableDeclaratorId();
			this.state = 1216;
			_la = this._input.LA(1);
			if (!(_la === GroovyParser.IN || _la === GroovyParser.COLON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1217;
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
		this.enterRule(_localctx, 208, GroovyParser.RULE_classicalForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1219;
				this.forInit();
				}
				break;
			}
			this.state = 1222;
			this.match(GroovyParser.SEMI);
			this.state = 1224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1223;
				this.expression(0);
				}
				break;
			}
			this.state = 1226;
			this.match(GroovyParser.SEMI);
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1227;
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
		this.enterRule(_localctx, 210, GroovyParser.RULE_forInit);
		try {
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1230;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1231;
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
		this.enterRule(_localctx, 212, GroovyParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
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
		this.enterRule(_localctx, 214, GroovyParser.RULE_castParExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.match(GroovyParser.LPAREN);
			this.state = 1237;
			this.type();
			this.state = 1238;
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
		this.enterRule(_localctx, 216, GroovyParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1240;
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
		this.enterRule(_localctx, 218, GroovyParser.RULE_expressionInPar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1242;
			this.match(GroovyParser.LPAREN);
			this.state = 1243;
			this.enhancedStatementExpression();
			this.state = 1244;
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
		this.enterRule(_localctx, 220, GroovyParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.expressionListElement(_localctx.canSpread);
			this.state = 1251;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1247;
					this.match(GroovyParser.COMMA);
					this.state = 1248;
					this.expressionListElement(_localctx.canSpread);
					}
					}
				}
				this.state = 1253;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
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
		this.enterRule(_localctx, 222, GroovyParser.RULE_expressionListElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1254;
				this.match(GroovyParser.MUL);
				}
				break;
			}
			this.state = 1257;
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
		this.enterRule(_localctx, 224, GroovyParser.RULE_enhancedStatementExpression);
		try {
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1259;
				this.statementExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1260;
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
		this.enterRule(_localctx, 226, GroovyParser.RULE_statementExpression);
		try {
			_localctx = new CommandExprAltContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
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
		this.enterRule(_localctx, 228, GroovyParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this.pathExpression();
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1266;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === GroovyParser.INC || _la === GroovyParser.DEC)) {
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
		let _startState: number = 230;
		this.enterRecursionRule(_localctx, 230, GroovyParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				_localctx = new CastExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1270;
				this.castParExpression();
				this.state = 1271;
				this.castOperandExpression();
				}
				break;

			case 2:
				{
				_localctx = new PostfixExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1273;
				this.postfixExpression();
				}
				break;

			case 3:
				{
				_localctx = new UnaryNotExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1274;
				_la = this._input.LA(1);
				if (!(_la === GroovyParser.NOT || _la === GroovyParser.BITNOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1275;
				this.nls();
				this.state = 1276;
				this.expression(18);
				}
				break;

			case 4:
				{
				_localctx = new UnaryAddExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1278;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (GroovyParser.INC - 100)) | (1 << (GroovyParser.DEC - 100)) | (1 << (GroovyParser.ADD - 100)) | (1 << (GroovyParser.SUB - 100)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1279;
				this.expression(16);
				}
				break;

			case 5:
				{
				_localctx = new MultipleAssignmentExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1280;
				(_localctx as MultipleAssignmentExprAltContext)._left = this.variableNames();
				this.state = 1281;
				this.nls();
				this.state = 1282;
				(_localctx as MultipleAssignmentExprAltContext)._op = this.match(GroovyParser.ASSIGN);
				this.state = 1283;
				this.nls();
				this.state = 1284;
				(_localctx as MultipleAssignmentExprAltContext)._right = this.statementExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1398;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1396;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1288;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1289;
						(_localctx as PowerExprAltContext)._op = this.match(GroovyParser.POWER);
						this.state = 1290;
						this.nls();
						this.state = 1291;
						(_localctx as PowerExprAltContext)._right = this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1293;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1294;
						this.nls();
						this.state = 1295;
						(_localctx as MultiplicativeExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (GroovyParser.MUL - 104)) | (1 << (GroovyParser.DIV - 104)) | (1 << (GroovyParser.MOD - 104)))) !== 0))) {
							(_localctx as MultiplicativeExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1296;
						this.nls();
						this.state = 1297;
						(_localctx as MultiplicativeExprAltContext)._right = this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1299;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1300;
						(_localctx as AdditiveExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GroovyParser.ADD || _la === GroovyParser.SUB)) {
							(_localctx as AdditiveExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1301;
						this.nls();
						this.state = 1302;
						(_localctx as AdditiveExprAltContext)._right = this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new ShiftExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ShiftExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1304;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1305;
						this.nls();
						this.state = 1316;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case GroovyParser.GT:
						case GroovyParser.LT:
							{
							this.state = 1313;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
							case 1:
								{
								this.state = 1306;
								(_localctx as ShiftExprAltContext)._dlOp = this.match(GroovyParser.LT);
								this.state = 1307;
								this.match(GroovyParser.LT);
								}
								break;

							case 2:
								{
								this.state = 1308;
								(_localctx as ShiftExprAltContext)._tgOp = this.match(GroovyParser.GT);
								this.state = 1309;
								this.match(GroovyParser.GT);
								this.state = 1310;
								this.match(GroovyParser.GT);
								}
								break;

							case 3:
								{
								this.state = 1311;
								(_localctx as ShiftExprAltContext)._dgOp = this.match(GroovyParser.GT);
								this.state = 1312;
								this.match(GroovyParser.GT);
								}
								break;
							}
							}
							break;
						case GroovyParser.RANGE_INCLUSIVE:
						case GroovyParser.RANGE_EXCLUSIVE:
							{
							this.state = 1315;
							(_localctx as ShiftExprAltContext)._rangeOp = this._input.LT(1);
							_la = this._input.LA(1);
							if (!(_la === GroovyParser.RANGE_INCLUSIVE || _la === GroovyParser.RANGE_EXCLUSIVE)) {
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
						this.state = 1318;
						this.nls();
						this.state = 1319;
						(_localctx as ShiftExprAltContext)._right = this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1321;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1322;
						this.nls();
						this.state = 1323;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GroovyParser.IN || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (GroovyParser.NOT_IN - 77)) | (1 << (GroovyParser.GT - 77)) | (1 << (GroovyParser.LT - 77)) | (1 << (GroovyParser.LE - 77)) | (1 << (GroovyParser.GE - 77)))) !== 0))) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1324;
						this.nls();
						this.state = 1325;
						(_localctx as RelationalExprAltContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1327;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1328;
						this.nls();
						this.state = 1329;
						(_localctx as EqualityExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (GroovyParser.SPACESHIP - 72)) | (1 << (GroovyParser.IDENTICAL - 72)) | (1 << (GroovyParser.NOT_IDENTICAL - 72)) | (1 << (GroovyParser.EQUAL - 72)) | (1 << (GroovyParser.NOTEQUAL - 72)))) !== 0))) {
							(_localctx as EqualityExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1330;
						this.nls();
						this.state = 1331;
						(_localctx as EqualityExprAltContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RegexExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RegexExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1333;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1334;
						this.nls();
						this.state = 1335;
						(_localctx as RegexExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GroovyParser.REGEX_FIND || _la === GroovyParser.REGEX_MATCH)) {
							(_localctx as RegexExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1336;
						this.nls();
						this.state = 1337;
						(_localctx as RegexExprAltContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new AndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1339;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1340;
						this.nls();
						this.state = 1341;
						(_localctx as AndExprAltContext)._op = this.match(GroovyParser.BITAND);
						this.state = 1342;
						this.nls();
						this.state = 1343;
						(_localctx as AndExprAltContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ExclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1345;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1346;
						this.nls();
						this.state = 1347;
						(_localctx as ExclusiveOrExprAltContext)._op = this.match(GroovyParser.XOR);
						this.state = 1348;
						this.nls();
						this.state = 1349;
						(_localctx as ExclusiveOrExprAltContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new InclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1351;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1352;
						this.nls();
						this.state = 1353;
						(_localctx as InclusiveOrExprAltContext)._op = this.match(GroovyParser.BITOR);
						this.state = 1354;
						this.nls();
						this.state = 1355;
						(_localctx as InclusiveOrExprAltContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1357;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1358;
						this.nls();
						this.state = 1359;
						(_localctx as LogicalAndExprAltContext)._op = this.match(GroovyParser.AND);
						this.state = 1360;
						this.nls();
						this.state = 1361;
						(_localctx as LogicalAndExprAltContext)._right = this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1363;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1364;
						this.nls();
						this.state = 1365;
						(_localctx as LogicalOrExprAltContext)._op = this.match(GroovyParser.OR);
						this.state = 1366;
						this.nls();
						this.state = 1367;
						(_localctx as LogicalOrExprAltContext)._right = this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ConditionalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConditionalExprAltContext)._con = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1369;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1370;
						this.nls();
						this.state = 1380;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case GroovyParser.QUESTION:
							{
							this.state = 1371;
							this.match(GroovyParser.QUESTION);
							this.state = 1372;
							this.nls();
							this.state = 1373;
							(_localctx as ConditionalExprAltContext)._tb = this.expression(0);
							this.state = 1374;
							this.nls();
							this.state = 1375;
							this.match(GroovyParser.COLON);
							this.state = 1376;
							this.nls();
							}
							break;
						case GroovyParser.ELVIS:
							{
							this.state = 1378;
							this.match(GroovyParser.ELVIS);
							this.state = 1379;
							this.nls();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1382;
						(_localctx as ConditionalExprAltContext)._fb = this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1384;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1385;
						this.nls();
						this.state = 1386;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GroovyParser.AS || _la === GroovyParser.INSTANCEOF || _la === GroovyParser.NOT_INSTANCEOF)) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1387;
						this.nls();
						this.state = 1388;
						this.type();
						}
						break;

					case 15:
						{
						_localctx = new AssignmentExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignmentExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GroovyParser.RULE_expression);
						this.state = 1390;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1391;
						this.nls();
						this.state = 1392;
						(_localctx as AssignmentExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GroovyParser.POWER_ASSIGN || _la === GroovyParser.ASSIGN || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (GroovyParser.ADD_ASSIGN - 110)) | (1 << (GroovyParser.SUB_ASSIGN - 110)) | (1 << (GroovyParser.MUL_ASSIGN - 110)) | (1 << (GroovyParser.DIV_ASSIGN - 110)) | (1 << (GroovyParser.AND_ASSIGN - 110)) | (1 << (GroovyParser.OR_ASSIGN - 110)) | (1 << (GroovyParser.XOR_ASSIGN - 110)) | (1 << (GroovyParser.MOD_ASSIGN - 110)) | (1 << (GroovyParser.LSHIFT_ASSIGN - 110)) | (1 << (GroovyParser.RSHIFT_ASSIGN - 110)) | (1 << (GroovyParser.URSHIFT_ASSIGN - 110)) | (1 << (GroovyParser.ELVIS_ASSIGN - 110)))) !== 0))) {
							(_localctx as AssignmentExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1393;
						this.nls();
						this.state = 1394;
						(_localctx as AssignmentExprAltContext)._right = this.enhancedStatementExpression();
						}
						break;
					}
					}
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
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
		this.enterRule(_localctx, 232, GroovyParser.RULE_castOperandExpression);
		let _la: number;
		try {
			this.state = 1411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				_localctx = new CastExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1401;
				this.castParExpression();
				this.state = 1402;
				this.castOperandExpression();
				}
				break;

			case 2:
				_localctx = new PostfixExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1404;
				this.postfixExpression();
				}
				break;

			case 3:
				_localctx = new UnaryNotExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1405;
				_la = this._input.LA(1);
				if (!(_la === GroovyParser.NOT || _la === GroovyParser.BITNOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1406;
				this.nls();
				this.state = 1407;
				this.castOperandExpression();
				}
				break;

			case 4:
				_localctx = new UnaryAddExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1409;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (GroovyParser.INC - 100)) | (1 << (GroovyParser.DEC - 100)) | (1 << (GroovyParser.ADD - 100)) | (1 << (GroovyParser.SUB - 100)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1410;
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
		this.enterRule(_localctx, 234, GroovyParser.RULE_commandExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			_localctx._expression = this.expression(0);
			this.state = 1417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1414;
				if (!( !GroovyParser.isFollowingArgumentsOrClosure(_localctx._expression) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isFollowingArgumentsOrClosure($expression.ctx) ");
				}
				this.state = 1415;
				this.argumentList();
				}
				break;

			case 2:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 1422;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1419;
					this.commandArgument();
					}
					}
				}
				this.state = 1424;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
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
		this.enterRule(_localctx, 236, GroovyParser.RULE_commandArgument);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1425;
			this.commandPrimary();
			this.state = 1432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1427;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1426;
						this.pathElement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1429;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				{
				this.state = 1431;
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
		this.enterRule(_localctx, 238, GroovyParser.RULE_pathExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1434;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1435;
				if (!( this._input.LT(2).type == GroovyParser.DOT )) {
					throw this.createFailedPredicateException(" this._input.LT(2).type == GroovyParser.DOT ");
				}
				this.state = 1436;
				this.match(GroovyParser.STATIC);
				}
				break;
			}
			this.state = 1444;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1439;
					_localctx._pathElement = this.pathElement();
					 _localctx.t =  _localctx._pathElement.t; 
					}
					}
				}
				this.state = 1446;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
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
		this.enterRule(_localctx, 240, GroovyParser.RULE_pathElement);
		let _la: number;
		try {
			this.state = 1483;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1447;
				this.nls();
				this.state = 1472;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1448;
					this.match(GroovyParser.DOT);
					this.state = 1449;
					this.nls();
					this.state = 1450;
					this.match(GroovyParser.NEW);
					this.state = 1451;
					this.creator(1);
					 _localctx.t =  6; 
					}
					break;

				case 2:
					{
					this.state = 1464;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GroovyParser.SPREAD_DOT:
					case GroovyParser.SAFE_DOT:
					case GroovyParser.SAFE_CHAIN_DOT:
					case GroovyParser.DOT:
						{
						this.state = 1454;
						_la = this._input.LA(1);
						if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (GroovyParser.SPREAD_DOT - 62)) | (1 << (GroovyParser.SAFE_DOT - 62)) | (1 << (GroovyParser.SAFE_CHAIN_DOT - 62)) | (1 << (GroovyParser.DOT - 62)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1455;
						this.nls();
						this.state = 1458;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case GroovyParser.AT:
							{
							this.state = 1456;
							this.match(GroovyParser.AT);
							}
							break;
						case GroovyParser.LT:
							{
							this.state = 1457;
							this.nonWildcardTypeArguments();
							}
							break;
						case GroovyParser.StringLiteral:
						case GroovyParser.GStringBegin:
						case GroovyParser.AS:
						case GroovyParser.DEF:
						case GroovyParser.IN:
						case GroovyParser.TRAIT:
						case GroovyParser.THREADSAFE:
						case GroovyParser.VAR:
						case GroovyParser.BuiltInPrimitiveType:
						case GroovyParser.ABSTRACT:
						case GroovyParser.ASSERT:
						case GroovyParser.BREAK:
						case GroovyParser.CASE:
						case GroovyParser.CATCH:
						case GroovyParser.CLASS:
						case GroovyParser.CONST:
						case GroovyParser.CONTINUE:
						case GroovyParser.DEFAULT:
						case GroovyParser.DO:
						case GroovyParser.ELSE:
						case GroovyParser.ENUM:
						case GroovyParser.EXTENDS:
						case GroovyParser.FINAL:
						case GroovyParser.FINALLY:
						case GroovyParser.FOR:
						case GroovyParser.IF:
						case GroovyParser.GOTO:
						case GroovyParser.IMPLEMENTS:
						case GroovyParser.IMPORT:
						case GroovyParser.INSTANCEOF:
						case GroovyParser.INTERFACE:
						case GroovyParser.NATIVE:
						case GroovyParser.NEW:
						case GroovyParser.PACKAGE:
						case GroovyParser.PRIVATE:
						case GroovyParser.PROTECTED:
						case GroovyParser.PUBLIC:
						case GroovyParser.RETURN:
						case GroovyParser.STATIC:
						case GroovyParser.STRICTFP:
						case GroovyParser.SUPER:
						case GroovyParser.SWITCH:
						case GroovyParser.SYNCHRONIZED:
						case GroovyParser.THIS:
						case GroovyParser.THROW:
						case GroovyParser.THROWS:
						case GroovyParser.TRANSIENT:
						case GroovyParser.TRY:
						case GroovyParser.VOID:
						case GroovyParser.VOLATILE:
						case GroovyParser.WHILE:
						case GroovyParser.BooleanLiteral:
						case GroovyParser.NullLiteral:
						case GroovyParser.LPAREN:
						case GroovyParser.CapitalizedIdentifier:
						case GroovyParser.Identifier:
							break;
						default:
							break;
						}
						}
						break;
					case GroovyParser.METHOD_POINTER:
						{
						this.state = 1460;
						this.match(GroovyParser.METHOD_POINTER);
						this.state = 1461;
						this.nls();
						}
						break;
					case GroovyParser.METHOD_REFERENCE:
						{
						this.state = 1462;
						this.match(GroovyParser.METHOD_REFERENCE);
						this.state = 1463;
						this.nls();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1466;
					this.namePart();
					 _localctx.t =  1; 
					}
					break;

				case 3:
					{
					this.state = 1469;
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
				this.state = 1474;
				this.arguments();
				 _localctx.t =  2; 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1477;
				this.indexPropertyArgs();
				 _localctx.t =  4; 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1480;
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
		this.enterRule(_localctx, 242, GroovyParser.RULE_namePart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1485;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 1486;
				this.stringLiteral();
				}
				break;

			case 3:
				{
				this.state = 1487;
				this.dynamicMemberName();
				}
				break;

			case 4:
				{
				this.state = 1488;
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
		this.enterRule(_localctx, 244, GroovyParser.RULE_dynamicMemberName);
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1491;
				this.parExpression();
				}
				break;
			case GroovyParser.GStringBegin:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1492;
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
		this.enterRule(_localctx, 246, GroovyParser.RULE_indexPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.QUESTION) {
				{
				this.state = 1495;
				this.match(GroovyParser.QUESTION);
				}
			}

			this.state = 1498;
			this.match(GroovyParser.LBRACK);
			this.state = 1500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1499;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1502;
			this.match(GroovyParser.RBRACK);
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
		this.enterRule(_localctx, 248, GroovyParser.RULE_namedPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.QUESTION) {
				{
				this.state = 1504;
				this.match(GroovyParser.QUESTION);
				}
			}

			this.state = 1507;
			this.match(GroovyParser.LBRACK);
			this.state = 1510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.StringLiteral:
			case GroovyParser.GStringBegin:
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.THREADSAFE:
			case GroovyParser.VAR:
			case GroovyParser.BuiltInPrimitiveType:
			case GroovyParser.ABSTRACT:
			case GroovyParser.ASSERT:
			case GroovyParser.BREAK:
			case GroovyParser.CASE:
			case GroovyParser.CATCH:
			case GroovyParser.CLASS:
			case GroovyParser.CONST:
			case GroovyParser.CONTINUE:
			case GroovyParser.DEFAULT:
			case GroovyParser.DO:
			case GroovyParser.ELSE:
			case GroovyParser.ENUM:
			case GroovyParser.EXTENDS:
			case GroovyParser.FINAL:
			case GroovyParser.FINALLY:
			case GroovyParser.FOR:
			case GroovyParser.IF:
			case GroovyParser.GOTO:
			case GroovyParser.IMPLEMENTS:
			case GroovyParser.IMPORT:
			case GroovyParser.INSTANCEOF:
			case GroovyParser.INTERFACE:
			case GroovyParser.NATIVE:
			case GroovyParser.NEW:
			case GroovyParser.PACKAGE:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.RETURN:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
			case GroovyParser.SUPER:
			case GroovyParser.SWITCH:
			case GroovyParser.SYNCHRONIZED:
			case GroovyParser.THIS:
			case GroovyParser.THROW:
			case GroovyParser.THROWS:
			case GroovyParser.TRANSIENT:
			case GroovyParser.TRY:
			case GroovyParser.VOID:
			case GroovyParser.VOLATILE:
			case GroovyParser.WHILE:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
			case GroovyParser.LPAREN:
			case GroovyParser.LBRACK:
			case GroovyParser.MUL:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				{
				this.state = 1508;
				this.namedPropertyArgList();
				}
				break;
			case GroovyParser.COLON:
				{
				this.state = 1509;
				this.match(GroovyParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1512;
			this.match(GroovyParser.RBRACK);
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
		this.enterRule(_localctx, 250, GroovyParser.RULE_primary);
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1514;
				this.identifier();
				this.state = 1516;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1515;
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
				this.state = 1518;
				this.literal();
				}
				break;

			case 3:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1519;
				this.gstring();
				}
				break;

			case 4:
				_localctx = new NewPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1520;
				this.match(GroovyParser.NEW);
				this.state = 1521;
				this.nls();
				this.state = 1522;
				this.creator(0);
				}
				break;

			case 5:
				_localctx = new ThisPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1524;
				this.match(GroovyParser.THIS);
				}
				break;

			case 6:
				_localctx = new SuperPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1525;
				this.match(GroovyParser.SUPER);
				}
				break;

			case 7:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1526;
				this.parExpression();
				}
				break;

			case 8:
				_localctx = new ClosureOrLambdaExpressionPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1527;
				this.closureOrLambdaExpression();
				}
				break;

			case 9:
				_localctx = new ListPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1528;
				this.list();
				}
				break;

			case 10:
				_localctx = new MapPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1529;
				this.map();
				}
				break;

			case 11:
				_localctx = new BuiltInTypePrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1530;
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
		this.enterRule(_localctx, 252, GroovyParser.RULE_namedPropertyArgPrimary);
		try {
			this.state = 1539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1533;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1534;
				this.literal();
				}
				break;

			case 3:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1535;
				this.gstring();
				}
				break;

			case 4:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1536;
				this.parExpression();
				}
				break;

			case 5:
				_localctx = new ListPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1537;
				this.list();
				}
				break;

			case 6:
				_localctx = new MapPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1538;
				this.map();
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
	public namedArgPrimary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, GroovyParser.RULE_namedArgPrimary);
		try {
			this.state = 1544;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.AS:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1541;
				this.identifier();
				}
				break;
			case GroovyParser.StringLiteral:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1542;
				this.literal();
				}
				break;
			case GroovyParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1543;
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
		this.enterRule(_localctx, 256, GroovyParser.RULE_commandPrimary);
		try {
			this.state = 1549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.AS:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1546;
				this.identifier();
				}
				break;
			case GroovyParser.StringLiteral:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1547;
				this.literal();
				}
				break;
			case GroovyParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1548;
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
		this.enterRule(_localctx, 258, GroovyParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1551;
			this.match(GroovyParser.LBRACK);
			this.state = 1553;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1552;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.COMMA) {
				{
				this.state = 1555;
				this.match(GroovyParser.COMMA);
				}
			}

			this.state = 1558;
			this.match(GroovyParser.RBRACK);
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
		this.enterRule(_localctx, 260, GroovyParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1560;
			this.match(GroovyParser.LBRACK);
			this.state = 1566;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.StringLiteral:
			case GroovyParser.GStringBegin:
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.THREADSAFE:
			case GroovyParser.VAR:
			case GroovyParser.BuiltInPrimitiveType:
			case GroovyParser.ABSTRACT:
			case GroovyParser.ASSERT:
			case GroovyParser.BREAK:
			case GroovyParser.CASE:
			case GroovyParser.CATCH:
			case GroovyParser.CLASS:
			case GroovyParser.CONST:
			case GroovyParser.CONTINUE:
			case GroovyParser.DEFAULT:
			case GroovyParser.DO:
			case GroovyParser.ELSE:
			case GroovyParser.ENUM:
			case GroovyParser.EXTENDS:
			case GroovyParser.FINAL:
			case GroovyParser.FINALLY:
			case GroovyParser.FOR:
			case GroovyParser.IF:
			case GroovyParser.GOTO:
			case GroovyParser.IMPLEMENTS:
			case GroovyParser.IMPORT:
			case GroovyParser.INSTANCEOF:
			case GroovyParser.INTERFACE:
			case GroovyParser.NATIVE:
			case GroovyParser.NEW:
			case GroovyParser.PACKAGE:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.RETURN:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
			case GroovyParser.SUPER:
			case GroovyParser.SWITCH:
			case GroovyParser.SYNCHRONIZED:
			case GroovyParser.THIS:
			case GroovyParser.THROW:
			case GroovyParser.THROWS:
			case GroovyParser.TRANSIENT:
			case GroovyParser.TRY:
			case GroovyParser.VOID:
			case GroovyParser.VOLATILE:
			case GroovyParser.WHILE:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
			case GroovyParser.LPAREN:
			case GroovyParser.LBRACE:
			case GroovyParser.LBRACK:
			case GroovyParser.MUL:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				{
				this.state = 1561;
				this.mapEntryList();
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GroovyParser.COMMA) {
					{
					this.state = 1562;
					this.match(GroovyParser.COMMA);
					}
				}

				}
				break;
			case GroovyParser.COLON:
				{
				this.state = 1565;
				this.match(GroovyParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1568;
			this.match(GroovyParser.RBRACK);
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
		this.enterRule(_localctx, 262, GroovyParser.RULE_mapEntryList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.mapEntry();
			this.state = 1575;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1571;
					this.match(GroovyParser.COMMA);
					this.state = 1572;
					this.mapEntry();
					}
					}
				}
				this.state = 1577;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
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
		this.enterRule(_localctx, 264, GroovyParser.RULE_namedPropertyArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1578;
			this.namedPropertyArg();
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.COMMA) {
				{
				{
				this.state = 1579;
				this.match(GroovyParser.COMMA);
				this.state = 1580;
				this.namedPropertyArg();
				}
				}
				this.state = 1585;
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
		this.enterRule(_localctx, 266, GroovyParser.RULE_mapEntry);
		try {
			this.state = 1596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.StringLiteral:
			case GroovyParser.GStringBegin:
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.THREADSAFE:
			case GroovyParser.VAR:
			case GroovyParser.BuiltInPrimitiveType:
			case GroovyParser.ABSTRACT:
			case GroovyParser.ASSERT:
			case GroovyParser.BREAK:
			case GroovyParser.CASE:
			case GroovyParser.CATCH:
			case GroovyParser.CLASS:
			case GroovyParser.CONST:
			case GroovyParser.CONTINUE:
			case GroovyParser.DEFAULT:
			case GroovyParser.DO:
			case GroovyParser.ELSE:
			case GroovyParser.ENUM:
			case GroovyParser.EXTENDS:
			case GroovyParser.FINAL:
			case GroovyParser.FINALLY:
			case GroovyParser.FOR:
			case GroovyParser.IF:
			case GroovyParser.GOTO:
			case GroovyParser.IMPLEMENTS:
			case GroovyParser.IMPORT:
			case GroovyParser.INSTANCEOF:
			case GroovyParser.INTERFACE:
			case GroovyParser.NATIVE:
			case GroovyParser.NEW:
			case GroovyParser.PACKAGE:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.RETURN:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
			case GroovyParser.SUPER:
			case GroovyParser.SWITCH:
			case GroovyParser.SYNCHRONIZED:
			case GroovyParser.THIS:
			case GroovyParser.THROW:
			case GroovyParser.THROWS:
			case GroovyParser.TRANSIENT:
			case GroovyParser.TRY:
			case GroovyParser.VOID:
			case GroovyParser.VOLATILE:
			case GroovyParser.WHILE:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
			case GroovyParser.LPAREN:
			case GroovyParser.LBRACE:
			case GroovyParser.LBRACK:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1586;
				this.mapEntryLabel();
				this.state = 1587;
				this.match(GroovyParser.COLON);
				this.state = 1588;
				this.nls();
				this.state = 1589;
				this.expression(0);
				}
				break;
			case GroovyParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1591;
				this.match(GroovyParser.MUL);
				this.state = 1592;
				this.match(GroovyParser.COLON);
				this.state = 1593;
				this.nls();
				this.state = 1594;
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
		this.enterRule(_localctx, 268, GroovyParser.RULE_namedPropertyArg);
		try {
			this.state = 1608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.StringLiteral:
			case GroovyParser.GStringBegin:
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.THREADSAFE:
			case GroovyParser.VAR:
			case GroovyParser.BuiltInPrimitiveType:
			case GroovyParser.ABSTRACT:
			case GroovyParser.ASSERT:
			case GroovyParser.BREAK:
			case GroovyParser.CASE:
			case GroovyParser.CATCH:
			case GroovyParser.CLASS:
			case GroovyParser.CONST:
			case GroovyParser.CONTINUE:
			case GroovyParser.DEFAULT:
			case GroovyParser.DO:
			case GroovyParser.ELSE:
			case GroovyParser.ENUM:
			case GroovyParser.EXTENDS:
			case GroovyParser.FINAL:
			case GroovyParser.FINALLY:
			case GroovyParser.FOR:
			case GroovyParser.IF:
			case GroovyParser.GOTO:
			case GroovyParser.IMPLEMENTS:
			case GroovyParser.IMPORT:
			case GroovyParser.INSTANCEOF:
			case GroovyParser.INTERFACE:
			case GroovyParser.NATIVE:
			case GroovyParser.NEW:
			case GroovyParser.PACKAGE:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.RETURN:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
			case GroovyParser.SUPER:
			case GroovyParser.SWITCH:
			case GroovyParser.SYNCHRONIZED:
			case GroovyParser.THIS:
			case GroovyParser.THROW:
			case GroovyParser.THROWS:
			case GroovyParser.TRANSIENT:
			case GroovyParser.TRY:
			case GroovyParser.VOID:
			case GroovyParser.VOLATILE:
			case GroovyParser.WHILE:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
			case GroovyParser.LPAREN:
			case GroovyParser.LBRACK:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1598;
				this.namedPropertyArgLabel();
				this.state = 1599;
				this.match(GroovyParser.COLON);
				this.state = 1600;
				this.nls();
				this.state = 1601;
				this.expression(0);
				}
				break;
			case GroovyParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1603;
				this.match(GroovyParser.MUL);
				this.state = 1604;
				this.match(GroovyParser.COLON);
				this.state = 1605;
				this.nls();
				this.state = 1606;
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
		this.enterRule(_localctx, 270, GroovyParser.RULE_namedArg);
		try {
			this.state = 1620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.StringLiteral:
			case GroovyParser.GStringBegin:
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.THREADSAFE:
			case GroovyParser.VAR:
			case GroovyParser.BuiltInPrimitiveType:
			case GroovyParser.ABSTRACT:
			case GroovyParser.ASSERT:
			case GroovyParser.BREAK:
			case GroovyParser.CASE:
			case GroovyParser.CATCH:
			case GroovyParser.CLASS:
			case GroovyParser.CONST:
			case GroovyParser.CONTINUE:
			case GroovyParser.DEFAULT:
			case GroovyParser.DO:
			case GroovyParser.ELSE:
			case GroovyParser.ENUM:
			case GroovyParser.EXTENDS:
			case GroovyParser.FINAL:
			case GroovyParser.FINALLY:
			case GroovyParser.FOR:
			case GroovyParser.IF:
			case GroovyParser.GOTO:
			case GroovyParser.IMPLEMENTS:
			case GroovyParser.IMPORT:
			case GroovyParser.INSTANCEOF:
			case GroovyParser.INTERFACE:
			case GroovyParser.NATIVE:
			case GroovyParser.NEW:
			case GroovyParser.PACKAGE:
			case GroovyParser.PRIVATE:
			case GroovyParser.PROTECTED:
			case GroovyParser.PUBLIC:
			case GroovyParser.RETURN:
			case GroovyParser.STATIC:
			case GroovyParser.STRICTFP:
			case GroovyParser.SUPER:
			case GroovyParser.SWITCH:
			case GroovyParser.SYNCHRONIZED:
			case GroovyParser.THIS:
			case GroovyParser.THROW:
			case GroovyParser.THROWS:
			case GroovyParser.TRANSIENT:
			case GroovyParser.TRY:
			case GroovyParser.VOID:
			case GroovyParser.VOLATILE:
			case GroovyParser.WHILE:
			case GroovyParser.IntegerLiteral:
			case GroovyParser.FloatingPointLiteral:
			case GroovyParser.BooleanLiteral:
			case GroovyParser.NullLiteral:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1610;
				this.namedArgLabel();
				this.state = 1611;
				this.match(GroovyParser.COLON);
				this.state = 1612;
				this.nls();
				this.state = 1613;
				this.expression(0);
				}
				break;
			case GroovyParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1615;
				this.match(GroovyParser.MUL);
				this.state = 1616;
				this.match(GroovyParser.COLON);
				this.state = 1617;
				this.nls();
				this.state = 1618;
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
		this.enterRule(_localctx, 272, GroovyParser.RULE_mapEntryLabel);
		try {
			this.state = 1624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1622;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1623;
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
		this.enterRule(_localctx, 274, GroovyParser.RULE_namedPropertyArgLabel);
		try {
			this.state = 1628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1626;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1627;
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
		this.enterRule(_localctx, 276, GroovyParser.RULE_namedArgLabel);
		try {
			this.state = 1632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1630;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1631;
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
		this.enterRule(_localctx, 278, GroovyParser.RULE_creator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1634;
			this.createdName();
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1635;
				this.nls();
				this.state = 1636;
				this.arguments();
				this.state = 1638;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
				case 1:
					{
					this.state = 1637;
					this.anonymousInnerClassDeclaration(0);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1641;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1640;
						this.dim();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1643;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1648;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1645;
					this.nls();
					this.state = 1646;
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
		this.enterRule(_localctx, 280, GroovyParser.RULE_dim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this.annotationsOpt();
			this.state = 1653;
			this.match(GroovyParser.LBRACK);
			this.state = 1655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1654;
				this.expression(0);
				}
				break;
			}
			this.state = 1657;
			this.match(GroovyParser.RBRACK);
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
		this.enterRule(_localctx, 282, GroovyParser.RULE_arrayInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1659;
			this.match(GroovyParser.LBRACE);
			this.state = 1660;
			this.nls();
			this.state = 1664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1661;
				this.variableInitializers();
				this.state = 1662;
				this.nls();
				}
				break;
			}
			this.state = 1666;
			this.match(GroovyParser.RBRACE);
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
		this.enterRule(_localctx, 284, GroovyParser.RULE_anonymousInnerClassDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1668;
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
		this.enterRule(_localctx, 286, GroovyParser.RULE_createdName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.annotationsOpt();
			this.state = 1676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GroovyParser.BuiltInPrimitiveType:
				{
				this.state = 1671;
				this.primitiveType();
				}
				break;
			case GroovyParser.AS:
			case GroovyParser.DEF:
			case GroovyParser.IN:
			case GroovyParser.TRAIT:
			case GroovyParser.VAR:
			case GroovyParser.CapitalizedIdentifier:
			case GroovyParser.Identifier:
				{
				this.state = 1672;
				this.qualifiedClassName();
				this.state = 1674;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1673;
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
		this.enterRule(_localctx, 288, GroovyParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1678;
			this.match(GroovyParser.LT);
			this.state = 1679;
			this.nls();
			this.state = 1680;
			this.typeList();
			this.state = 1681;
			this.nls();
			this.state = 1682;
			this.match(GroovyParser.GT);
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
		this.enterRule(_localctx, 290, GroovyParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1687;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1684;
				this.match(GroovyParser.LT);
				this.state = 1685;
				this.match(GroovyParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1686;
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
		this.enterRule(_localctx, 292, GroovyParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1689;
			this.match(GroovyParser.LPAREN);
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1690;
				this.enhancedArgumentListInPar();
				}
				break;
			}
			this.state = 1694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GroovyParser.COMMA) {
				{
				this.state = 1693;
				this.match(GroovyParser.COMMA);
				}
			}

			this.state = 1696;
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
		this.enterRule(_localctx, 294, GroovyParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1698;
			this.firstArgumentListElement();
			this.state = 1705;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1699;
					this.match(GroovyParser.COMMA);
					this.state = 1700;
					this.nls();
					this.state = 1701;
					this.argumentListElement();
					}
					}
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
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
	public enhancedArgumentList(): EnhancedArgumentListInParContext {
		let _localctx: EnhancedArgumentListInParContext = new EnhancedArgumentListInParContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, GroovyParser.RULE_enhancedArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1708;
			this.firstEnhancedArgumentListElement();
			this.state = 1715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GroovyParser.COMMA) {
				{
				{
				this.state = 1709;
				this.match(GroovyParser.COMMA);
				this.state = 1710;
				this.nls();
				this.state = 1711;
				this.enhancedArgumentListElement();
				}
				}
				this.state = 1717;
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
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		let _localctx: EnhancedArgumentListInParContext = new EnhancedArgumentListInParContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, GroovyParser.RULE_enhancedArgumentListInPar);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1718;
			this.enhancedArgumentListElement();
			this.state = 1725;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1719;
					this.match(GroovyParser.COMMA);
					this.state = 1720;
					this.nls();
					this.state = 1721;
					this.enhancedArgumentListElement();
					}
					}
				}
				this.state = 1727;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
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
		this.enterRule(_localctx, 300, GroovyParser.RULE_firstArgumentListElement);
		try {
			this.state = 1730;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1728;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1729;
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
		this.enterRule(_localctx, 302, GroovyParser.RULE_argumentListElement);
		try {
			this.state = 1734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1732;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1733;
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
	public firstEnhancedArgumentListElement(): EnhancedArgumentListElementContext {
		let _localctx: EnhancedArgumentListElementContext = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, GroovyParser.RULE_firstEnhancedArgumentListElement);
		try {
			this.state = 1739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1736;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1737;
				this.standardLambdaExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1738;
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
	public enhancedArgumentListElement(): EnhancedArgumentListElementContext {
		let _localctx: EnhancedArgumentListElementContext = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, GroovyParser.RULE_enhancedArgumentListElement);
		try {
			this.state = 1744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1741;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1742;
				this.standardLambdaExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1743;
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
		this.enterRule(_localctx, 308, GroovyParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1746;
			this.match(GroovyParser.StringLiteral);
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
		this.enterRule(_localctx, 310, GroovyParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1748;
			this.match(GroovyParser.CapitalizedIdentifier);
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
		this.enterRule(_localctx, 312, GroovyParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1750;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR))) !== 0) || _la === GroovyParser.CapitalizedIdentifier || _la === GroovyParser.Identifier)) {
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
		this.enterRule(_localctx, 314, GroovyParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1752;
			_la = this._input.LA(1);
			if (!(_la === GroovyParser.BuiltInPrimitiveType || _la === GroovyParser.VOID)) {
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
		this.enterRule(_localctx, 316, GroovyParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.THREADSAFE) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.ASSERT) | (1 << GroovyParser.BREAK) | (1 << GroovyParser.CASE) | (1 << GroovyParser.CATCH) | (1 << GroovyParser.CLASS) | (1 << GroovyParser.CONST) | (1 << GroovyParser.CONTINUE) | (1 << GroovyParser.DEFAULT) | (1 << GroovyParser.DO) | (1 << GroovyParser.ELSE) | (1 << GroovyParser.ENUM) | (1 << GroovyParser.EXTENDS) | (1 << GroovyParser.FINAL) | (1 << GroovyParser.FINALLY) | (1 << GroovyParser.FOR) | (1 << GroovyParser.IF) | (1 << GroovyParser.GOTO))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GroovyParser.IMPLEMENTS - 32)) | (1 << (GroovyParser.IMPORT - 32)) | (1 << (GroovyParser.INSTANCEOF - 32)) | (1 << (GroovyParser.INTERFACE - 32)) | (1 << (GroovyParser.NATIVE - 32)) | (1 << (GroovyParser.NEW - 32)) | (1 << (GroovyParser.PACKAGE - 32)) | (1 << (GroovyParser.PRIVATE - 32)) | (1 << (GroovyParser.PROTECTED - 32)) | (1 << (GroovyParser.PUBLIC - 32)) | (1 << (GroovyParser.RETURN - 32)) | (1 << (GroovyParser.STATIC - 32)) | (1 << (GroovyParser.STRICTFP - 32)) | (1 << (GroovyParser.SUPER - 32)) | (1 << (GroovyParser.SWITCH - 32)) | (1 << (GroovyParser.SYNCHRONIZED - 32)) | (1 << (GroovyParser.THIS - 32)) | (1 << (GroovyParser.THROW - 32)) | (1 << (GroovyParser.THROWS - 32)) | (1 << (GroovyParser.TRANSIENT - 32)) | (1 << (GroovyParser.TRY - 32)) | (1 << (GroovyParser.VOID - 32)) | (1 << (GroovyParser.VOLATILE - 32)) | (1 << (GroovyParser.WHILE - 32)) | (1 << (GroovyParser.BooleanLiteral - 32)) | (1 << (GroovyParser.NullLiteral - 32)))) !== 0))) {
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
		this.enterRule(_localctx, 318, GroovyParser.RULE_rparen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1756;
			this.match(GroovyParser.RPAREN);
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
		this.enterRule(_localctx, 320, GroovyParser.RULE_nls);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1758;
					this.match(GroovyParser.NL);
					}
					}
				}
				this.state = 1763;
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
	public sep(): SepContext {
		let _localctx: SepContext = new SepContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, GroovyParser.RULE_sep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1764;
					_la = this._input.LA(1);
					if (!(_la === GroovyParser.SEMI || _la === GroovyParser.NL)) {
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
				this.state = 1767;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
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
		case 2:
			return this.scriptStatement_sempred(_localctx as ScriptStatementContext, predIndex);

		case 20:
			return this.classBody_sempred(_localctx as ClassBodyContext, predIndex);

		case 80:
			return this.localVariableDeclaration_sempred(_localctx as LocalVariableDeclarationContext, predIndex);

		case 115:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 117:
			return this.commandExpression_sempred(_localctx as CommandExpressionContext, predIndex);

		case 119:
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
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 10);

		case 9:
			return this.precpred(this._ctx, 9);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 7);

		case 12:
			return this.precpred(this._ctx, 6);

		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);

		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 12);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private commandExpression_sempred(_localctx: CommandExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return  !GroovyParser.isFollowingArgumentsOrClosure(_localctx._expression) ;
		}
		return true;
	}
	private pathExpression_sempred(_localctx: PathExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return  this._input.LT(2).type == GroovyParser.DOT ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x83\u06EC\x04" +
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
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x03\x02\x03\x02" +
		"\x03\x02\x05\x02\u014A\n\x02\x05\x02\u014C\n\x02\x03\x02\x05\x02\u014F" +
		"\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0157\n" +
		"\x03\f\x03\x0E\x03\u015A\v\x03\x03\x03\x05\x03\u015D\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0164\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\u016D\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\u0174\n\x06\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x05\b\u017B\n\b\x03\t\x03\t\x03\t\x05\t\u0180\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\u0186\n\n\f\n\x0E\n\u0189\v\n\x03\v\x03\v\x07\v\u018D\n" +
		"\v\f\v\x0E\v\u0190\v\v\x05\v\u0192\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\u0198" +
		"\n\f\f\f\x0E\f\u019B\v\f\x03\r\x03\r\x05\r\u019F\n\r\x03\x0E\x03\x0E\x05" +
		"\x0E\u01A3\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01A8\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u01AE\n\x10\f\x10\x0E\x10\u01B1\v\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u01BA\n\x11" +
		"\f\x11\x0E\x11\u01BD\v\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\u01C7\n\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\u01CE\n\x13\f\x13\x0E\x13\u01D1\v\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u01D8\n\x14\f\x14\x0E\x14\u01DB\v\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u01E8\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u01EE\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01F5" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01FC\n\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u0208\n\x16\x03\x16\x05\x16\u020B\n\x16\x03\x16\x05\x16\u020E" +
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0214\n\x16\f\x16\x0E\x16" +
		"\u0217\v\x16\x05\x16\u0219\n\x16\x03\x16\x05\x16\u021C\n\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0226\n\x17" +
		"\f\x17\x0E\x17\u0229\v\x17\x03\x18\x03\x18\x03\x18\x05\x18\u022E\n\x18" +
		"\x03\x18\x05\x18\u0231\n\x18\x03\x19\x03\x19\x05\x19\u0235\n\x19\x03\x19" +
		"\x03\x19\x05\x19\u0239\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u0240\n\x1A\x03\x1B\x03\x1B\x05\x1B\u0244\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u0249\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0256\n\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u025B\n\x1B\x05\x1B\u025D\n\x1B\x03\x1C\x03\x1C\x05" +
		"\x1C\u0261\n\x1C\x03\x1D\x03\x1D\x05\x1D\u0265\n\x1D\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u026E\n\x1F\f\x1F\x0E\x1F" +
		"\u0271\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0279\n \x03!\x03!\x03" +
		"\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u0285\n#\f#\x0E#\u0288\v#" +
		"\x03#\x03#\x05#\u028C\n#\x03$\x03$\x03$\x03$\x06$\u0292\n$\r$\x0E$\u0293" +
		"\x03%\x05%\u0297\n%\x03&\x03&\x03&\x05&\u029C\n&\x03&\x03&\x03\'\x03\'" +
		"\x03\'\x05\'\u02A3\n\'\x03\'\x05\'\u02A6\n\'\x03\'\x03\'\x03(\x03(\x05" +
		"(\u02AC\n(\x03(\x05(\u02AF\n(\x03)\x03)\x05)\u02B3\n)\x03*\x03*\x05*\u02B7" +
		"\n*\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u02C2\n,\f,\x0E" +
		",\u02C5\v,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u02D1" +
		"\n-\x05-\u02D3\n-\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x07/\u02DD\n" +
		"/\f/\x0E/\u02E0\v/\x030\x030\x050\u02E4\n0\x030\x030\x031\x031\x051\u02EA" +
		"\n1\x031\x031\x031\x031\x071\u02F0\n1\f1\x0E1\u02F3\v1\x032\x032\x032" +
		"\x033\x033\x053\u02FA\n3\x033\x053\u02FD\n3\x033\x033\x033\x033\x033\x03" +
		"3\x053\u0305\n3\x034\x034\x035\x035\x035\x075\u030C\n5\f5\x0E5\u030F\v" +
		"5\x036\x036\x036\x036\x036\x056\u0316\n6\x037\x037\x037\x077\u031B\n7" +
		"\f7\x0E7\u031E\v7\x038\x038\x038\x039\x039\x039\x039\x079\u0327\n9\f9" +
		"\x0E9\u032A\v9\x03:\x03:\x03:\x03:\x03:\x05:\u0331\n:\x03;\x03;\x03;\x03" +
		";\x07;\u0337\n;\f;\x0E;\u033A\v;\x03;\x03;\x03<\x03<\x05<\u0340\n<\x03" +
		"=\x03=\x07=\u0344\n=\f=\x0E=\u0347\v=\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03A\x03A\x05A\u0359\nA\x03B\x03" +
		"B\x05B\u035D\nB\x03C\x03C\x03C\x03C\x03C\x05C\u0364\nC\x03C\x03C\x05C" +
		"\u0368\nC\x03C\x05C\u036B\nC\x03C\x03C\x03C\x03D\x03D\x05D\u0372\nD\x03" +
		"E\x05E\u0375\nE\x03F\x03F\x03F\x03F\x07F\u037B\nF\fF\x0EF\u037E\vF\x03" +
		"F\x05F\u0381\nF\x03G\x03G\x03G\x03G\x07G\u0387\nG\fG\x0EG\u038A\vG\x03" +
		"G\x03G\x05G\u038E\nG\x03H\x03H\x03H\x03H\x03H\x05H\u0395\nH\x03H\x03H" +
		"\x05H\u0399\nH\x03I\x03I\x05I\u039D\nI\x03J\x03J\x03K\x03K\x03K\x07K\u03A4" +
		"\nK\fK\x0EK\u03A7\vK\x03L\x03L\x03L\x03L\x03L\x03L\x03M\x03M\x05M\u03B1" +
		"\nM\x03N\x03N\x03N\x05N\u03B6\nN\x03O\x03O\x03O\x03O\x07O\u03BC\nO\fO" +
		"\x0EO\u03BF\vO\x03O\x05O\u03C2\nO\x05O\u03C4\nO\x03O\x03O\x03P\x03P\x05" +
		"P\u03CA\nP\x03P\x03P\x03P\x03Q\x03Q\x05Q\u03D1\nQ\x03R\x03R\x03R\x03S" +
		"\x03S\x03S\x05S\u03D9\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u03E2" +
		"\nS\x03S\x03S\x03S\x05S\u03E7\nS\x03T\x03T\x03T\x03T\x07T\u03ED\nT\fT" +
		"\x0ET\u03F0\vT\x03T\x03T\x03U\x05U\u03F5\nU\x03U\x03U\x03V\x03V\x03V\x03" +
		"V\x06V\u03FD\nV\rV\x0EV\u03FE\x03V\x03V\x03W\x03W\x05W\u0405\nW\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x05X\u040D\nX\x03X\x03X\x03X\x03X\x05X\u0413\nX" +
		"\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x06Y\u041B\nY\rY\x0EY\u041C\x03Y\x03Y\x05" +
		"Y\u0421\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0438\nZ\x03[\x03" +
		"[\x05[\u043C\n[\x03\\\x03\\\x05\\\u0440\n\\\x03]\x03]\x05]\u0444\n]\x03" +
		"]\x03]\x03]\x03]\x03]\x07]\u044B\n]\f]\x0E]\u044E\v]\x03]\x03]\x03]\x05" +
		"]\u0453\n]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u045C\n^\x03_\x03_" +
		"\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u0469\n_\x03_\x03_" +
		"\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u0478\n_" +
		"\x03`\x03`\x03`\x03`\x05`\u047E\n`\x03`\x03`\x03`\x03`\x03`\x03a\x03a" +
		"\x03a\x07a\u0488\na\fa\x0Ea\u048B\va\x03b\x03b\x03b\x03b\x03c\x03c\x03" +
		"c\x03c\x05c\u0495\nc\x03c\x03c\x03d\x03d\x03d\x03d\x07d\u049D\nd\fd\x0E" +
		"d\u04A0\vd\x03e\x03e\x05e\u04A4\ne\x03f\x03f\x03f\x03f\x07f\u04AA\nf\f" +
		"f\x0Ef\u04AD\vf\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u04B8" +
		"\ng\x03h\x03h\x05h\u04BC\nh\x03i\x03i\x05i\u04C0\ni\x03i\x03i\x03i\x03" +
		"i\x03j\x05j\u04C7\nj\x03j\x03j\x05j\u04CB\nj\x03j\x03j\x05j\u04CF\nj\x03" +
		"k\x03k\x05k\u04D3\nk\x03l\x03l\x03m\x03m\x03m\x03m\x03n\x03n\x03o\x03" +
		"o\x03o\x03o\x03p\x03p\x03p\x07p\u04E4\np\fp\x0Ep\u04E7\vp\x03q\x05q\u04EA" +
		"\nq\x03q\x03q\x03r\x03r\x05r\u04F0\nr\x03s\x03s\x03t\x03t\x05t\u04F6\n" +
		"t\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x05u\u0509\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x05u\u0524\nu\x03u\x05u\u0527\nu\x03u\x03u\x03u\x03u" +
		"\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x05u\u0567\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x07u\u0577\nu\fu\x0Eu\u057A\vu\x03v\x03v\x03" +
		"v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u0586\nv\x03w\x03w\x03w\x03" +
		"w\x05w\u058C\nw\x03w\x07w\u058F\nw\fw\x0Ew\u0592\vw\x03x\x03x\x06x\u0596" +
		"\nx\rx\x0Ex\u0597\x03x\x05x\u059B\nx\x03y\x03y\x03y\x05y\u05A0\ny\x03" +
		"y\x03y\x03y\x07y\u05A5\ny\fy\x0Ey\u05A8\vy\x03z\x03z\x03z\x03z\x03z\x03" +
		"z\x03z\x03z\x03z\x03z\x03z\x05z\u05B5\nz\x03z\x03z\x03z\x03z\x05z\u05BB" +
		"\nz\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u05C3\nz\x03z\x03z\x03z\x03z\x03" +
		"z\x03z\x03z\x03z\x03z\x05z\u05CE\nz\x03{\x03{\x03{\x03{\x05{\u05D4\n{" +
		"\x03|\x03|\x05|\u05D8\n|\x03}\x05}\u05DB\n}\x03}\x03}\x05}\u05DF\n}\x03" +
		"}\x03}\x03~\x05~\u05E4\n~\x03~\x03~\x03~\x05~\u05E9\n~\x03~\x03~\x03\x7F" +
		"\x03\x7F\x05\x7F\u05EF\n\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u05FE" +
		"\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u0606\n" +
		"\x80\x03\x81\x03\x81\x03\x81\x05\x81\u060B\n\x81\x03\x82\x03\x82\x03\x82" +
		"\x05\x82\u0610\n\x82\x03\x83\x03\x83\x05\x83\u0614\n\x83\x03\x83\x05\x83" +
		"\u0617\n\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x05\x84\u061E\n\x84" +
		"\x03\x84\x05\x84\u0621\n\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x07" +
		"\x85\u0628\n\x85\f\x85\x0E\x85\u062B\v\x85\x03\x86\x03\x86\x03\x86\x07" +
		"\x86\u0630\n\x86\f\x86\x0E\x86\u0633\v\x86\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u063F\n\x87" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x05\x88\u064B\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u0657\n\x89\x03\x8A\x03\x8A" +
		"\x05\x8A\u065B\n\x8A\x03\x8B\x03\x8B\x05\x8B\u065F\n\x8B\x03\x8C\x03\x8C" +
		"\x05\x8C\u0663\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u0669\n\x8D" +
		"\x03\x8D\x06\x8D\u066C\n\x8D\r\x8D\x0E\x8D\u066D\x03\x8D\x03\x8D\x03\x8D" +
		"\x05\x8D\u0673\n\x8D\x05\x8D\u0675\n\x8D\x03\x8E\x03\x8E\x03\x8E\x05\x8E" +
		"\u067A\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05" +
		"\x8F\u0683\n\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x91\x03\x91\x03\x91" +
		"\x03\x91\x05\x91\u068D\n\x91\x05\x91\u068F\n\x91\x03\x92\x03\x92\x03\x92" +
		"\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x93\x05\x93\u069A\n\x93\x03" +
		"\x94\x03\x94\x05\x94\u069E\n\x94\x03\x94\x05\x94\u06A1\n\x94\x03\x94\x03" +
		"\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x07\x95\u06AA\n\x95\f\x95" +
		"\x0E\x95\u06AD\v\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x07\x96\u06B4" +
		"\n\x96\f\x96\x0E\x96\u06B7\v\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97" +
		"\x07\x97\u06BE\n\x97\f\x97\x0E\x97\u06C1\v\x97\x03\x98\x03\x98\x05\x98" +
		"\u06C5\n\x98\x03\x99\x03\x99\x05\x99\u06C9\n\x99\x03\x9A\x03\x9A\x03\x9A" +
		"\x05\x9A\u06CE\n\x9A\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u06D3\n\x9B\x03\x9C" +
		"\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0" +
		"\x03\xA1\x03\xA1\x03\xA2\x07\xA2\u06E2\n\xA2\f\xA2\x0E\xA2\u06E5\v\xA2" +
		"\x03\xA3\x06\xA3\u06E8\n\xA3\r\xA3\x0E\xA3\u06E9\x03\xA3\x02\x02\x03\xE8" +
		"\xA4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
		"\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
		"\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02" +
		"\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02" +
		"\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02" +
		"\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02" +
		"\u0142\x02\u0144\x02\x02\x18\b\x02\n\n\x0E\x0E&&115588\x07\x02\x10\x10" +
		"\x18\x18\x1D\x1D)+-.\b\x02\n\n\x0E\x0E\x10\x10\x1D\x1D)+-.\x04\x02\x1C" +
		"\x1C//\x04\x02WW__\x04\x02\v\v__\x03\x02fg\x03\x02\\]\x03\x02fi\x04\x02" +
		"jkoo\x03\x02hi\x03\x02>?\x06\x02\v\vOOZ[ab\x05\x02JL``cc\x03\x02FG\x05" +
		"\x02\t\t$$NN\x05\x02IIYYp{\x04\x02@BXX\x06\x02\t\t\v\f\x0E\x0E|}\x04\x02" +
		"\x0F\x0F77\x04\x02\t9<=\x04\x02VV\x81\x81\x02\u0754\x02\u0146\x03\x02" +
		"\x02\x02\x04\u0152\x03\x02\x02\x02\x06\u0163\x03\x02\x02\x02\b\u0165\x03" +
		"\x02\x02\x02\n\u0169\x03\x02\x02\x02\f\u0175\x03\x02\x02\x02\x0E\u017A" +
		"\x03\x02\x02\x02\x10\u017F\x03\x02\x02\x02\x12\u0181\x03\x02\x02\x02\x14" +
		"\u0191\x03\x02\x02\x02\x16\u0193\x03\x02\x02\x02\x18\u019E\x03\x02\x02" +
		"\x02\x1A\u01A2\x03\x02\x02\x02\x1C\u01A7\x03\x02\x02\x02\x1E\u01A9\x03" +
		"\x02\x02\x02 \u01B2\x03\x02\x02\x02\"\u01C1\x03\x02\x02\x02$\u01C8\x03" +
		"\x02\x02\x02&\u01D2\x03\x02\x02\x02(\u01E7\x03\x02\x02\x02*\u0200\x03" +
		"\x02\x02\x02,\u021F\x03\x02\x02\x02.\u022A\x03\x02\x02\x020\u0238\x03" +
		"\x02\x02\x022\u023F\x03\x02\x02\x024\u0241\x03\x02\x02\x026\u0260\x03" +
		"\x02\x02\x028\u0264\x03\x02\x02\x02:\u0266\x03\x02\x02\x02<\u0268\x03" +
		"\x02\x02\x02>\u0272\x03\x02\x02\x02@\u027A\x03\x02\x02\x02B\u027C\x03" +
		"\x02\x02\x02D\u027E\x03\x02\x02\x02F\u0291\x03\x02\x02\x02H\u0296\x03" +
		"\x02\x02\x02J\u0298\x03\x02\x02\x02L\u029F\x03\x02\x02\x02N\u02AB\x03" +
		"\x02\x02\x02P\u02B0\x03\x02\x02\x02R\u02B4\x03\x02\x02\x02T\u02B8\x03" +
		"\x02\x02\x02V\u02BA\x03\x02\x02\x02X\u02D2\x03\x02\x02\x02Z\u02D4\x03" +
		"\x02\x02\x02\\\u02D7\x03\x02\x02\x02^\u02E1\x03\x02\x02\x02`\u02E9\x03" +
		"\x02\x02\x02b\u02F4\x03\x02\x02\x02d\u02F7\x03\x02\x02\x02f\u0306\x03" +
		"\x02\x02\x02h\u0308\x03\x02\x02\x02j\u0315\x03\x02\x02\x02l\u031C\x03" +
		"\x02\x02\x02n\u031F\x03\x02\x02\x02p\u0322\x03\x02\x02\x02r\u0330\x03" +
		"\x02\x02\x02t\u0332\x03\x02\x02\x02v\u033F\x03\x02\x02\x02x\u0341\x03" +
		"\x02\x02\x02z\u0348\x03\x02\x02\x02|\u034E\x03\x02\x02\x02~\u0354\x03" +
		"\x02\x02\x02\x80\u0358\x03\x02\x02\x02\x82\u035C\x03\x02\x02\x02\x84\u035E" +
		"\x03\x02\x02\x02\x86\u0371\x03\x02\x02\x02\x88\u0374\x03\x02\x02\x02\x8A" +
		"\u0376\x03\x02\x02\x02\x8C\u038D\x03\x02\x02\x02\x8E\u038F\x03\x02\x02" +
		"\x02\x90\u039C\x03\x02\x02\x02\x92\u039E\x03\x02\x02\x02\x94\u03A0\x03" +
		"\x02\x02\x02\x96\u03A8\x03\x02\x02\x02\x98\u03B0\x03\x02\x02\x02\x9A\u03B5" +
		"\x03\x02\x02\x02\x9C\u03B7\x03\x02\x02\x02\x9E\u03C7\x03\x02\x02\x02\xA0" +
		"\u03D0\x03\x02\x02\x02\xA2\u03D2\x03\x02\x02\x02\xA4\u03E6\x03\x02\x02" +
		"\x02\xA6\u03E8\x03\x02\x02\x02\xA8\u03F4\x03\x02\x02\x02\xAA\u03F8\x03" +
		"\x02\x02\x02\xAC\u0404\x03\x02\x02\x02\xAE\u0406\x03\x02\x02\x02\xB0\u0414" +
		"\x03\x02\x02\x02\xB2\u0437\x03\x02\x02\x02\xB4\u0439\x03\x02\x02\x02\xB6" +
		"\u043D\x03\x02\x02\x02\xB8\u0441\x03\x02\x02\x02\xBA\u0454\x03\x02\x02" +
		"\x02\xBC\u0477\x03\x02\x02\x02\xBE\u0479\x03\x02\x02\x02\xC0\u0484\x03" +
		"\x02\x02\x02\xC2\u048C\x03\x02\x02\x02\xC4\u0490\x03\x02\x02\x02\xC6\u0498" +
		"\x03\x02\x02\x02\xC8\u04A3\x03\x02\x02\x02\xCA\u04A5\x03\x02\x02\x02\xCC" +
		"\u04B7\x03\x02\x02\x02\xCE\u04BB\x03\x02\x02\x02\xD0\u04BD\x03\x02\x02" +
		"\x02\xD2\u04C6\x03\x02\x02\x02\xD4\u04D2\x03\x02\x02\x02\xD6\u04D4\x03" +
		"\x02\x02\x02\xD8\u04D6\x03\x02\x02\x02\xDA\u04DA\x03\x02\x02\x02\xDC\u04DC" +
		"\x03\x02\x02\x02\xDE\u04E0\x03\x02\x02\x02\xE0\u04E9\x03\x02\x02\x02\xE2" +
		"\u04EF\x03\x02\x02\x02\xE4\u04F1\x03\x02\x02\x02\xE6\u04F3\x03\x02\x02" +
		"\x02\xE8\u0508\x03\x02\x02\x02\xEA\u0585\x03\x02\x02\x02\xEC\u0587\x03" +
		"\x02\x02\x02\xEE\u0593\x03\x02\x02\x02\xF0\u059F\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\xF2\u05CD\x03\x02\x02\x02\xF4\u05D3\x03\x02\x02\x02\xF6\u05D7\x03\x02" +
		"\x02\x02\xF8\u05DA\x03\x02\x02\x02\xFA\u05E3\x03\x02\x02\x02\xFC\u05FD" +
		"\x03\x02\x02\x02\xFE\u0605\x03\x02\x02\x02\u0100\u060A\x03\x02\x02\x02" +
		"\u0102\u060F\x03\x02\x02\x02\u0104\u0611\x03\x02\x02\x02\u0106\u061A\x03" +
		"\x02\x02\x02\u0108\u0624\x03\x02\x02\x02\u010A\u062C\x03\x02\x02\x02\u010C" +
		"\u063E\x03\x02\x02\x02\u010E\u064A\x03\x02\x02\x02\u0110\u0656\x03\x02" +
		"\x02\x02\u0112\u065A\x03\x02\x02\x02\u0114\u065E\x03\x02\x02\x02\u0116" +
		"\u0662\x03\x02\x02\x02\u0118\u0664\x03\x02\x02\x02\u011A\u0676\x03\x02" +
		"\x02\x02\u011C\u067D\x03\x02\x02\x02\u011E\u0686\x03\x02\x02\x02\u0120" +
		"\u0688\x03\x02\x02\x02\u0122\u0690\x03\x02\x02\x02\u0124\u0699\x03\x02" +
		"\x02\x02\u0126\u069B\x03\x02\x02\x02\u0128\u06A4\x03\x02\x02\x02\u012A" +
		"\u06AE\x03\x02\x02\x02\u012C\u06B8\x03\x02\x02\x02\u012E\u06C4\x03\x02" +
		"\x02\x02\u0130\u06C8\x03\x02\x02\x02\u0132\u06CD\x03\x02\x02\x02\u0134" +
		"\u06D2\x03\x02\x02\x02\u0136\u06D4\x03\x02\x02\x02\u0138\u06D6\x03\x02" +
		"\x02\x02\u013A\u06D8\x03\x02\x02\x02\u013C\u06DA\x03\x02\x02\x02\u013E" +
		"\u06DC\x03\x02\x02\x02\u0140\u06DE\x03\x02\x02\x02\u0142\u06E3\x03\x02" +
		"\x02\x02\u0144\u06E7\x03\x02\x02\x02\u0146\u014B\x05\u0142\xA2\x02\u0147" +
		"\u0149\x05\b\x05\x02\u0148\u014A\x05\u0144\xA3\x02\u0149\u0148\x03\x02" +
		"\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B" +
		"\u0147\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02" +
		"\x02\x02\u014D\u014F\x05\x04\x03\x02\u014E\u014D\x03\x02\x02\x02\u014E" +
		"\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x07\x02" +
		"\x02\x03\u0151\x03\x03\x02\x02\x02\u0152\u0158\x05\x06\x04\x02\u0153\u0154" +
		"\x05\u0144\xA3\x02\u0154\u0155\x05\x06\x04\x02\u0155\u0157\x03\x02\x02" +
		"\x02\u0156\u0153\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156" +
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02" +
		"\u015A\u0158\x03\x02\x02\x02\u015B\u015D\x05\u0144\xA3\x02\u015C\u015B" +
		"\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\x05\x03\x02\x02\x02" +
		"\u015E\u0164\x05\n\x06\x02\u015F\u0164\x05\f\x07\x02\u0160\u0161\x06\x04" +
		"\x02\x02\u0161\u0164\x054\x1B\x02\u0162\u0164\x05\xBC_\x02\u0163\u015E" +
		"\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0163\u0160\x03\x02\x02\x02" +
		"\u0163\u0162\x03\x02\x02\x02\u0164\x07\x03\x02\x02\x02\u0165\u0166\x05" +
		"\x8CG\x02\u0166\u0167\x07(\x02\x02\u0167\u0168\x05h5\x02\u0168\t\x03\x02" +
		"\x02\x02\u0169\u016A\x05\x8CG\x02\u016A\u016C\x07#\x02\x02\u016B\u016D" +
		"\x07-\x02\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
		"\u016D\u016E\x03\x02\x02\x02\u016E\u0173\x05h5\x02\u016F\u0170\x07X\x02" +
		"\x02\u0170\u0174\x07j\x02\x02\u0171\u0172\x07\t\x02\x02\u0172\u0174\x05" +
		"\u013A\x9E\x02\u0173\u016F\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02" +
		"\u0173\u0174\x03\x02\x02\x02\u0174\v\x03\x02\x02\x02\u0175\u0176\x05\x14" +
		"\v\x02\u0176\u0177\x05(\x15\x02\u0177\r\x03\x02\x02\x02\u0178\u017B\x05" +
		"\x18\r\x02\u0179\u017B\t\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A" +
		"\u0179\x03\x02\x02\x02\u017B\x0F\x03\x02\x02\x02\u017C\u017D\x05\x12\n" +
		"\x02\u017D\u017E\x05\u0142\xA2\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017C" +
		"\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\x11\x03\x02\x02\x02" +
		"\u0181\u0187\x05\x0E\b\x02\u0182\u0183\x05\u0142\xA2\x02\u0183\u0184\x05" +
		"\x0E\b\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0182\x03\x02\x02\x02\u0186" +
		"\u0189\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02" +
		"\x02\x02\u0188\x13\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018E" +
		"\x05\x16\f\x02\u018B\u018D\x07\x81\x02\x02\u018C\u018B\x03\x02\x02\x02" +
		"\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03" +
		"\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191" +
		"\u018A\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\x15\x03\x02\x02" +
		"\x02\u0193\u0199\x05\x18\r\x02\u0194\u0195\x05\u0142\xA2\x02\u0195\u0196" +
		"\x05\x18\r\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0194\x03\x02\x02\x02" +
		"\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03" +
		"\x02\x02\x02\u019A\x17\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C" +
		"\u019F\x05\x8EH\x02\u019D\u019F\t\x03\x02\x02\u019E\u019C\x03\x02\x02" +
		"\x02\u019E\u019D\x03\x02\x02\x02\u019F\x19\x03\x02\x02\x02\u01A0\u01A3" +
		"\x05\x8EH\x02\u01A1\u01A3\t\x04\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
		"\u01A1\x03\x02\x02\x02\u01A3\x1B\x03\x02\x02\x02\u01A4\u01A5\x05\x1E\x10" +
		"\x02\u01A5\u01A6\x05\u0142\xA2\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A4" +
		"\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\x1D\x03\x02\x02\x02" +
		"\u01A9\u01AF\x05\x1A\x0E\x02\u01AA\u01AB\x05\u0142\xA2\x02\u01AB\u01AC" +
		"\x05\x1A\x0E\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AA\x03\x02\x02\x02" +
		"\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03" +
		"\x02\x02\x02\u01B0\x1F\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2" +
		"\u01B3\x07[\x02\x02\u01B3\u01B4\x05\u0142\xA2\x02\u01B4\u01BB\x05\"\x12" +
		"\x02\u01B5\u01B6\x07W\x02\x02\u01B6\u01B7\x05\u0142\xA2\x02\u01B7\u01B8" +
		"\x05\"\x12\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B5\x03\x02\x02\x02" +
		"\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE" +
		"\u01BF\x05\u0142\xA2\x02\u01BF\u01C0\x07Z\x02\x02\u01C0!\x03\x02\x02\x02" +
		"\u01C1\u01C6\x05\u0138\x9D\x02\u01C2\u01C3\x07\x1C\x02\x02\u01C3\u01C4" +
		"\x05\u0142\xA2\x02\u01C4\u01C5\x05$\x13\x02\u01C5\u01C7\x03\x02\x02\x02" +
		"\u01C6\u01C2\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7#\x03\x02" +
		"\x02\x02\u01C8\u01CF\x05L\'\x02\u01C9\u01CA\x07l\x02\x02\u01CA\u01CB\x05" +
		"\u0142\xA2\x02\u01CB\u01CC\x05L\'\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD" +
		"\u01C9\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
		"\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0%\x03\x02\x02\x02\u01D1\u01CF" +
		"\x03\x02\x02\x02\u01D2\u01D9\x05L\'\x02\u01D3\u01D4\x07W\x02\x02\u01D4" +
		"\u01D5\x05\u0142\xA2\x02\u01D5\u01D6\x05L\'\x02\u01D6\u01D8\x03\x02\x02" +
		"\x02\u01D7\u01D3\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7" +
		"\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\'\x03\x02\x02\x02\u01DB" +
		"\u01D9\x03\x02\x02\x02\u01DC\u01DD\x07\x15\x02\x02\u01DD\u01E8\b\x15\x01" +
		"\x02\u01DE\u01DF\x07%\x02\x02\u01DF\u01E8\b\x15\x01\x02\u01E0\u01E1\x07" +
		"\x1B\x02\x02\u01E1\u01E8\b\x15\x01\x02\u01E2\u01E3\x07~\x02\x02\u01E3" +
		"\u01E4\x07%\x02\x02\u01E4\u01E8\b\x15\x01\x02\u01E5\u01E6\x07\f\x02\x02" +
		"\u01E6\u01E8\b\x15\x01\x02\u01E7\u01DC\x03\x02\x02\x02\u01E7\u01DE\x03" +
		"\x02\x02\x02\u01E7\u01E0\x03\x02\x02\x02\u01E7\u01E2\x03\x02\x02\x02\u01E7" +
		"\u01E5\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01ED\x05\u013A" +
		"\x9E\x02\u01EA\u01EB\x05\u0142\xA2\x02\u01EB\u01EC\x05 \x11\x02\u01EC" +
		"\u01EE\x03\x02\x02\x02\u01ED\u01EA\x03\x02\x02\x02\u01ED\u01EE\x03\x02" +
		"\x02\x02\u01EE\u01F4\x03\x02\x02\x02\u01EF\u01F0\x05\u0142\xA2\x02\u01F0" +
		"\u01F1\x07\x1C\x02\x02\u01F1\u01F2\x05\u0142\xA2\x02\u01F2\u01F3\x05&" +
		"\x14\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01EF\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u01FB\x03\x02\x02\x02\u01F6\u01F7\x05\u0142" +
		"\xA2\x02\u01F7\u01F8\x07\"\x02\x02\u01F8\u01F9\x05\u0142\xA2\x02\u01F9" +
		"\u01FA\x05&\x14\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01F6\x03\x02\x02" +
		"\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE" +
		"\x05\u0142\xA2\x02\u01FE\u01FF\x05*\x16\x02\u01FF)\x03\x02\x02\x02\u0200" +
		"\u0201\x07R\x02\x02\u0201\u020D\x05\u0142\xA2\x02\u0202\u0203\x06\x16" +
		"\x03\x03\u0203\u0207\x05,\x17\x02\u0204\u0205\x05\u0142\xA2\x02\u0205" +
		"\u0206\x07W\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0204\x03\x02\x02" +
		"\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u020B" +
		"\x05\u0144\xA3\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02" +
		"\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02\u020D\u0202" +
		"\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E\u0218\x03\x02\x02\x02" +
		"\u020F\u0215\x050\x19\x02\u0210\u0211\x05\u0144\xA3\x02\u0211\u0212\x05" +
		"0\x19\x02\u0212\u0214\x03\x02\x02\x02\u0213\u0210\x03\x02\x02\x02\u0214" +
		"\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02" +
		"\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218" +
		"\u020F\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021B\x03\x02" +
		"\x02\x02\u021A\u021C\x05\u0144\xA3\x02\u021B\u021A\x03\x02\x02\x02\u021B" +
		"\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x07S\x02" +
		"\x02\u021E+\x03\x02\x02\x02\u021F\u0227\x05.\x18\x02\u0220\u0221\x05\u0142" +
		"\xA2\x02\u0221\u0222\x07W\x02\x02\u0222\u0223\x05\u0142\xA2\x02\u0223" +
		"\u0224\x05.\x18\x02\u0224\u0226\x03\x02\x02\x02\u0225\u0220\x03\x02\x02" +
		"\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228" +
		"\x03\x02\x02\x02\u0228-\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A" +
		"\u022B\x05\x8CG\x02\u022B\u022D\x05\u013A\x9E\x02\u022C\u022E\x05\u0126" +
		"\x94\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
		"\u0230\x03\x02\x02\x02\u022F\u0231\x05\u011E\x90\x02\u0230\u022F\x03\x02" +
		"\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231/\x03\x02\x02\x02\u0232\u0233" +
		"\x07-\x02\x02\u0233\u0235\x05\u0142\xA2\x02\u0234\u0232\x03\x02\x02\x02" +
		"\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0239\x05" +
		"\x9EP\x02\u0237\u0239\x052\x1A\x02\u0238\u0234\x03\x02\x02\x02\u0238\u0237" +
		"\x03\x02\x02\x02\u02391\x03\x02\x02\x02\u023A\u0240\x054\x1B\x02\u023B" +
		"\u0240\x05:\x1E\x02\u023C\u023D\x05\x10\t\x02\u023D\u023E\x05(\x15\x02" +
		"\u023E\u0240\x03\x02\x02\x02\u023F\u023A\x03\x02\x02\x02\u023F\u023B\x03" +
		"\x02\x02\x02\u023F\u023C\x03\x02\x02\x02\u02403\x03\x02\x02\x02\u0241" +
		"\u0243\x05\x10\t\x02\u0242\u0244\x05 \x11\x02\u0243\u0242\x03\x02\x02" +
		"\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0248\x03\x02\x02\x02\u0245\u0246" +
		"\x058\x1D\x02\u0246\u0247\x05\u0142\xA2\x02\u0247\u0249\x03\x02\x02\x02" +
		"\u0248\u0245\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024A\x03" +
		"\x02\x02\x02\u024A\u024B\x056\x1C\x02\u024B\u025C\x05^0\x02\u024C\u024D" +
		"\x07\x18\x02\x02\u024D\u024E\x05\u0142\xA2\x02\u024E\u024F\x05\x9AN\x02" +
		"\u024F\u025D\x03\x02\x02\x02\u0250\u0251\x05\u0142\xA2\x02\u0251\u0252" +
		"\x074\x02\x02\u0252\u0253\x05\u0142\xA2\x02\u0253\u0254\x05\\/\x02\u0254" +
		"\u0256\x03\x02\x02\x02\u0255\u0250\x03\x02\x02\x02\u0255\u0256\x03\x02" +
		"\x02\x02\u0256\u025A\x03\x02\x02\x02\u0257\u0258\x05\u0142\xA2\x02\u0258" +
		"\u0259\x05f4\x02\u0259\u025B\x03\x02\x02\x02\u025A\u0257\x03\x02\x02\x02" +
		"\u025A\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u024C\x03" +
		"\x02\x02\x02\u025C\u0255\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"5\x03\x02\x02\x02\u025E\u0261\x05\u013A\x9E\x02\u025F\u0261\x05\u0136" +
		"\x9C\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261" +
		"7\x03\x02\x02\x02\u0262\u0265\x05J&\x02\u0263\u0265\x077\x02\x02\u0264" +
		"\u0262\x03\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u02659\x03\x02\x02" +
		"\x02\u0266\u0267\x05\xA4S\x02\u0267;\x03\x02\x02\x02\u0268\u026F\x05>" +
		" \x02\u0269\u026A\x07W\x02\x02\u026A\u026B\x05\u0142\xA2\x02\u026B\u026C" +
		"\x05> \x02\u026C\u026E\x03\x02\x02\x02\u026D\u0269\x03\x02\x02\x02\u026E" +
		"\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02" +
		"\x02\x02\u0270=\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272\u0278" +
		"\x05@!\x02\u0273\u0274\x05\u0142\xA2\x02\u0274\u0275\x07Y\x02\x02\u0275" +
		"\u0276\x05\u0142\xA2\x02\u0276\u0277\x05B\"\x02\u0277\u0279\x03\x02\x02" +
		"\x02\u0278\u0273\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279?\x03" +
		"\x02\x02\x02\u027A\u027B\x05\u013A\x9E\x02\u027BA\x03\x02\x02\x02\u027C" +
		"\u027D\x05\xE2r\x02\u027DC\x03\x02\x02\x02\u027E\u0286\x05B\"\x02\u027F" +
		"\u0280\x05\u0142\xA2\x02\u0280\u0281\x07W\x02\x02\u0281\u0282\x05\u0142" +
		"\xA2\x02\u0282\u0283\x05B\"\x02\u0283\u0285\x03\x02\x02\x02\u0284\u027F" +
		"\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u0286\x03" +
		"\x02\x02\x02\u0289\u028B\x05\u0142\xA2\x02\u028A\u028C\x07W\x02\x02\u028B" +
		"\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028CE\x03\x02\x02" +
		"\x02\u028D\u028E\x05\x8CG\x02\u028E\u028F\x07T\x02\x02\u028F\u0290\x07" +
		"U\x02\x02\u0290\u0292\x03\x02\x02\x02\u0291\u028D\x03\x02\x02\x02\u0292" +
		"\u0293\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02" +
		"\x02\x02\u0294G\x03\x02\x02\x02\u0295\u0297\x05F$\x02\u0296\u0295\x03" +
		"\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297I\x03\x02\x02\x02\u0298" +
		"\u029B\x05\x8CG\x02\u0299\u029C\x05T+\x02\u029A\u029C\x05R*\x02\u029B" +
		"\u0299\x03\x02\x02\x02\u029B\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02" +
		"\x02\x02\u029D\u029E\x05H%\x02\u029EK\x03\x02\x02\x02\u029F\u02A5\x05" +
		"\x8CG\x02\u02A0\u02A3\x05T+\x02\u02A1\u02A3\x077\x02\x02\u02A2\u02A0\x03" +
		"\x02\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4" +
		"\u02A6\x05P)\x02\u02A5\u02A2\x03\x02\x02\x02\u02A5\u02A4\x03\x02\x02\x02" +
		"\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x05H%\x02\u02A8M\x03\x02\x02" +
		"\x02\u02A9\u02AC\x05n8\x02\u02AA\u02AC\x05p9\x02\u02AB\u02A9\x03\x02\x02" +
		"\x02\u02AB\u02AA\x03\x02\x02\x02\u02AC\u02AE\x03\x02\x02\x02\u02AD\u02AF" +
		"\x05V,\x02\u02AE\u02AD\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF" +
		"O\x03\x02\x02\x02\u02B0\u02B2\x05n8\x02\u02B1\u02B3\x05V,\x02\u02B2\u02B1" +
		"\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3Q\x03\x02\x02\x02\u02B4" +
		"\u02B6\x05p9\x02\u02B5\u02B7\x05V,\x02\u02B6\u02B5\x03\x02\x02\x02\u02B6" +
		"\u02B7\x03\x02\x02\x02\u02B7S\x03\x02\x02\x02\u02B8\u02B9\x07\x0F\x02" +
		"\x02\u02B9U\x03\x02\x02\x02\u02BA\u02BB\x07[\x02\x02\u02BB\u02BC\x05\u0142" +
		"\xA2\x02\u02BC\u02C3\x05X-\x02\u02BD\u02BE\x07W\x02\x02\u02BE\u02BF\x05" +
		"\u0142\xA2\x02\u02BF\u02C0\x05X-\x02\u02C0\u02C2\x03\x02\x02\x02\u02C1" +
		"\u02BD\x03\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02" +
		"\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5" +
		"\u02C3\x03\x02\x02\x02\u02C6\u02C7\x05\u0142\xA2\x02\u02C7\u02C8\x07Z" +
		"\x02\x02\u02C8W\x03\x02\x02\x02\u02C9\u02D3\x05L\'\x02\u02CA\u02CB\x05" +
		"\x8CG\x02\u02CB\u02D0\x07^\x02\x02\u02CC\u02CD\t\x05\x02\x02\u02CD\u02CE" +
		"\x05\u0142\xA2\x02\u02CE\u02CF\x05L\'\x02\u02CF\u02D1\x03\x02\x02\x02" +
		"\u02D0\u02CC\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D3\x03" +
		"\x02\x02\x02\u02D2\u02C9\x03\x02\x02\x02\u02D2\u02CA\x03\x02\x02\x02\u02D3" +
		"Y\x03\x02\x02\x02\u02D4\u02D5\x05\x8CG\x02\u02D5\u02D6\x05n8\x02\u02D6" +
		"[\x03\x02\x02\x02\u02D7\u02DE\x05Z.\x02\u02D8\u02D9\x07W\x02\x02\u02D9" +
		"\u02DA\x05\u0142\xA2\x02\u02DA\u02DB\x05Z.\x02\u02DB\u02DD\x03\x02\x02" +
		"\x02\u02DC\u02D8\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC" +
		"\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF]\x03\x02\x02\x02\u02E0" +
		"\u02DE\x03\x02\x02\x02\u02E1\u02E3\x07P\x02\x02\u02E2\u02E4\x05`1\x02" +
		"\u02E3\u02E2\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5\x03" +
		"\x02\x02\x02\u02E5\u02E6\x05\u0140\xA1\x02\u02E6_\x03\x02\x02\x02\u02E7" +
		"\u02EA\x05d3\x02\u02E8\u02EA\x05b2\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9" +
		"\u02E8\x03\x02\x02\x02\u02EA\u02F1\x03\x02\x02\x02\u02EB\u02EC\x07W\x02" +
		"\x02\u02EC\u02ED\x05\u0142\xA2\x02\u02ED\u02EE\x05d3\x02\u02EE\u02F0\x03" +
		"\x02\x02\x02\u02EF\u02EB\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1" +
		"\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2a\x03\x02\x02" +
		"\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\u02F5\x05L\'\x02\u02F5\u02F6\x07" +
		"2\x02\x02\u02F6c\x03\x02\x02\x02\u02F7\u02F9\x05\x1C\x0F\x02\u02F8\u02FA" +
		"\x05L\'\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA" +
		"\u02FC\x03\x02\x02\x02\u02FB\u02FD\x07\x7F\x02\x02\u02FC\u02FB\x03\x02" +
		"\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE" +
		"\u0304\x05@!\x02\u02FF\u0300\x05\u0142\xA2\x02\u0300\u0301\x07Y\x02\x02" +
		"\u0301\u0302\x05\u0142\xA2\x02\u0302\u0303\x05\xE8u\x02\u0303\u0305\x03" +
		"\x02\x02\x02\u0304\u02FF\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305" +
		"e\x03\x02\x02\x02\u0306\u0307\x05\x9EP\x02\u0307g\x03\x02\x02\x02\u0308" +
		"\u030D\x05j6\x02\u0309\u030A\x07X\x02\x02\u030A\u030C\x05j6\x02\u030B" +
		"\u0309\x03\x02\x02\x02\u030C\u030F\x03\x02\x02\x02\u030D\u030B\x03\x02" +
		"\x02\x02\u030D\u030E\x03\x02\x02\x02\u030Ei\x03\x02\x02\x02\u030F\u030D" +
		"\x03\x02\x02\x02\u0310\u0316\x05\u013A\x9E\x02\u0311\u0316\x07\n\x02\x02" +
		"\u0312\u0316\x07\v\x02\x02\u0313\u0316\x07\t\x02\x02\u0314\u0316\x07\f" +
		"\x02\x02\u0315\u0310\x03\x02\x02\x02\u0315\u0311\x03\x02\x02\x02\u0315" +
		"\u0312\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02" +
		"\x02\x02\u0316k\x03\x02\x02\x02\u0317\u0318\x05j6\x02\u0318\u0319\x07" +
		"X\x02\x02\u0319\u031B\x03\x02\x02\x02\u031A\u0317\x03\x02\x02\x02\u031B" +
		"\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02" +
		"\x02\x02\u031Dm\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0320" +
		"\x05l7\x02\u0320\u0321\x05\u013A\x9E\x02\u0321o\x03\x02\x02\x02\u0322" +
		"\u0323\x05l7\x02\u0323\u0328\x05\u0138\x9D\x02\u0324\u0325\x07X\x02\x02" +
		"\u0325\u0327\x05\u0138\x9D\x02\u0326\u0324\x03\x02\x02\x02\u0327\u032A" +
		"\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02" +
		"\u0329q\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032B\u0331\x07:\x02" +
		"\x02\u032C\u0331\x07;\x02\x02\u032D\u0331\x05\u0136\x9C\x02\u032E\u0331" +
		"\x07<\x02\x02\u032F\u0331\x07=\x02\x02\u0330\u032B\x03\x02\x02\x02\u0330" +
		"\u032C\x03\x02\x02\x02\u0330\u032D\x03\x02\x02\x02\u0330\u032E\x03\x02" +
		"\x02\x02\u0330\u032F\x03\x02\x02\x02\u0331s\x03\x02\x02\x02\u0332\u0333" +
		"\x07\x04\x02\x02\u0333\u0338\x05v<\x02\u0334\u0335\x07\x06\x02\x02\u0335" +
		"\u0337\x05v<\x02\u0336\u0334\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02" +
		"\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x03" +
		"\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033C\x07\x05\x02\x02\u033C" +
		"u\x03\x02\x02\x02\u033D\u0340\x05x=\x02\u033E\u0340\x05\x84C\x02\u033F" +
		"\u033D\x03\x02\x02\x02\u033F\u033E\x03\x02\x02\x02\u0340w\x03\x02\x02" +
		"\x02\u0341\u0345\x05\u013A\x9E\x02\u0342\u0344\x07\x07\x02\x02\u0343\u0342" +
		"\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02" +
		"\u0345\u0346\x03\x02\x02\x02\u0346y\x03\x02\x02\x02\u0347\u0345\x03\x02" +
		"\x02\x02\u0348\u0349\x05~@\x02\u0349\u034A\x05\u0142\xA2\x02\u034A\u034B" +
		"\x07M\x02\x02\u034B\u034C\x05\u0142\xA2\x02\u034C\u034D\x05\x82B\x02\u034D" +
		"{\x03\x02\x02\x02\u034E\u034F\x05\x80A\x02\u034F\u0350\x05\u0142\xA2\x02" +
		"\u0350\u0351\x07M\x02\x02\u0351\u0352\x05\u0142\xA2\x02\u0352\u0353\x05" +
		"\x82B\x02\u0353}\x03\x02\x02\x02\u0354\u0355\x05^0\x02\u0355\x7F\x03\x02" +
		"\x02\x02\u0356\u0359\x05^0\x02\u0357\u0359\x05@!\x02\u0358\u0356\x03\x02" +
		"\x02\x02\u0358\u0357\x03\x02\x02\x02\u0359\x81\x03\x02\x02\x02\u035A\u035D" +
		"\x05\x9EP\x02\u035B\u035D\x05\xE4s\x02\u035C\u035A\x03\x02\x02\x02\u035C" +
		"\u035B\x03\x02\x02\x02\u035D\x83\x03\x02\x02\x02\u035E\u0367\x07R\x02" +
		"\x02\u035F\u0363\x05\u0142\xA2\x02\u0360\u0361\x05`1\x02\u0361\u0362\x05" +
		"\u0142\xA2\x02\u0362\u0364\x03\x02\x02\x02\u0363\u0360\x03\x02\x02\x02" +
		"\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0366\x07" +
		"M\x02\x02\u0366\u0368\x03\x02\x02\x02\u0367\u035F\x03\x02\x02\x02\u0367" +
		"\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369\u036B\x05\u0144" +
		"\xA3\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B" +
		"\u036C\x03\x02\x02\x02\u036C\u036D\x05\x88E\x02\u036D\u036E\x07S\x02\x02" +
		"\u036E\x85\x03\x02\x02\x02\u036F\u0372\x05\x84C\x02\u0370\u0372\x05z>" +
		"\x02\u0371\u036F\x03\x02\x02\x02\u0371\u0370\x03\x02\x02\x02\u0372\x87" +
		"\x03\x02\x02\x02\u0373\u0375\x05\x8AF\x02\u0374\u0373\x03\x02\x02\x02" +
		"\u0374\u0375\x03\x02\x02\x02\u0375\x89\x03\x02\x02\x02\u0376\u037C\x05" +
		"\xA0Q\x02\u0377\u0378\x05\u0144\xA3\x02\u0378\u0379\x05\xA0Q\x02\u0379" +
		"\u037B\x03\x02\x02\x02\u037A\u0377\x03\x02\x02\x02\u037B\u037E\x03\x02" +
		"\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D" +
		"\u0380\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F\u0381\x05\u0144" +
		"\xA3\x02\u0380\u037F\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381" +
		"\x8B\x03\x02\x02\x02\u0382\u0388\x05\x8EH\x02\u0383\u0384\x05\u0142\xA2" +
		"\x02\u0384\u0385\x05\x8EH\x02\u0385\u0387\x03\x02\x02\x02\u0386\u0383" +
		"\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02" +
		"\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02\x02\x02\u038A\u0388\x03" +
		"\x02\x02\x02\u038B\u038C\x05\u0142\xA2\x02\u038C\u038E\x03\x02\x02\x02" +
		"\u038D\u0382\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\x8D\x03" +
		"\x02\x02\x02\u038F\u0390\x07~\x02\x02\u0390\u0398\x05\x92J\x02\u0391\u0392" +
		"\x05\u0142\xA2\x02\u0392\u0394\x07P\x02\x02\u0393\u0395\x05\x90I\x02\u0394" +
		"\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0396\x03\x02" +
		"\x02\x02\u0396\u0397\x05\u0140\xA1\x02\u0397\u0399\x03\x02\x02\x02\u0398" +
		"\u0391\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\x8F\x03\x02\x02" +
		"\x02\u039A\u039D\x05\x94K\x02\u039B\u039D\x05\x9AN\x02\u039C\u039A\x03" +
		"\x02\x02\x02\u039C\u039B\x03\x02\x02\x02\u039D\x91\x03\x02\x02\x02\u039E" +
		"\u039F\x05n8\x02\u039F\x93\x03\x02\x02\x02\u03A0\u03A5\x05\x96L\x02\u03A1" +
		"\u03A2\x07W\x02\x02\u03A2\u03A4\x05\x96L\x02\u03A3\u03A1\x03\x02\x02\x02" +
		"\u03A4\u03A7\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03" +
		"\x02\x02\x02\u03A6\x95\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A8" +
		"\u03A9\x05\x98M\x02\u03A9\u03AA\x05\u0142\xA2\x02\u03AA\u03AB\x07Y\x02" +
		"\x02\u03AB\u03AC\x05\u0142\xA2\x02\u03AC\u03AD\x05\x9AN\x02\u03AD\x97" +
		"\x03\x02\x02\x02\u03AE\u03B1\x05\u013A\x9E\x02\u03AF\u03B1\x05\u013E\xA0" +
		"\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03AF\x03\x02\x02\x02\u03B1\x99" +
		"\x03\x02\x02\x02\u03B2\u03B6\x05\x9CO\x02\u03B3\u03B6\x05\x8EH\x02\u03B4" +
		"\u03B6\x05\xE8u\x02\u03B5\u03B2\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02" +
		"\x02\u03B5\u03B4\x03\x02\x02\x02\u03B6\x9B\x03\x02\x02\x02\u03B7\u03C3" +
		"\x07T\x02\x02\u03B8\u03BD\x05\x9AN\x02\u03B9\u03BA\x07W\x02\x02\u03BA" +
		"\u03BC\x05\x9AN\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02" +
		"\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C1" +
		"\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C2\x07W\x02\x02" +
		"\u03C1\u03C0\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C4\x03" +
		"\x02\x02\x02\u03C3\u03B8\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C5\x03\x02\x02\x02\u03C5\u03C6\x07U\x02\x02\u03C6\x9D\x03\x02\x02" +
		"\x02\u03C7\u03C9\x07R\x02\x02\u03C8\u03CA\x05\u0144\xA3\x02\u03C9\u03C8" +
		"\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02" +
		"\u03CB\u03CC\x05\x88E\x02\u03CC\u03CD\x07S\x02\x02\u03CD\x9F\x03\x02\x02" +
		"\x02\u03CE\u03D1\x05\xA2R\x02\u03CF\u03D1\x05\xBC_\x02\u03D0\u03CE\x03" +
		"\x02\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\xA1\x03\x02\x02\x02\u03D2" +
		"\u03D3\x06R\x04\x02\u03D3\u03D4\x05\xA4S\x02\u03D4\xA3\x03\x02\x02\x02" +
		"\u03D5\u03D6\x05\x12\n\x02\u03D6\u03E1\x05\u0142\xA2\x02\u03D7\u03D9\x05" +
		"L\'\x02\u03D8\u03D7\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9" +
		"\u03DA\x03\x02\x02\x02\u03DA\u03E2\x05<\x1F\x02\u03DB\u03DC\x05\xA6T\x02" +
		"\u03DC\u03DD\x05\u0142\xA2\x02\u03DD\u03DE\x07Y\x02\x02\u03DE\u03DF\x05" +
		"\u0142\xA2\x02\u03DF\u03E0\x05B\"\x02\u03E0\u03E2\x03\x02\x02\x02\u03E1" +
		"\u03D8\x03\x02\x02\x02\u03E1\u03DB\x03\x02\x02\x02\u03E2\u03E7\x03\x02" +
		"\x02\x02\u03E3\u03E4\x05L\'\x02\u03E4\u03E5\x05<\x1F\x02\u03E5\u03E7\x03" +
		"\x02\x02\x02\u03E6\u03D5\x03\x02\x02\x02\u03E6\u03E3\x03\x02\x02\x02\u03E7" +
		"\xA5\x03\x02\x02\x02\u03E8\u03E9\x07P\x02\x02\u03E9\u03EE";
	private static readonly _serializedATNSegment2: string =
		"\x05\xA8U\x02\u03EA\u03EB\x07W\x02\x02\u03EB\u03ED\x05\xA8U\x02\u03EC" +
		"\u03EA\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x03\x02\x02\x02\u03F0" +
		"\u03EE\x03\x02\x02\x02\u03F1\u03F2\x05\u0140\xA1\x02\u03F2\xA7\x03\x02" +
		"\x02\x02\u03F3\u03F5\x05L\'\x02\u03F4\u03F3\x03\x02\x02\x02\u03F4\u03F5" +
		"\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F7\x05@!\x02\u03F7" +
		"\xA9\x03\x02\x02\x02\u03F8\u03F9\x07P\x02\x02\u03F9\u03FC\x05@!\x02\u03FA" +
		"\u03FB\x07W\x02\x02\u03FB\u03FD\x05@!\x02\u03FC\u03FA\x03\x02\x02\x02" +
		"\u03FD\u03FE\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03" +
		"\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0401\x05\u0140\xA1\x02" +
		"\u0401\xAB\x03\x02\x02\x02\u0402\u0405\x05\xAEX\x02\u0403\u0405\x05\xB0" +
		"Y\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0403\x03\x02\x02\x02\u0405\xAD" +
		"\x03\x02\x02\x02\u0406\u0407\x07 \x02\x02\u0407\u0408\x05\xDCo\x02\u0408" +
		"\u0409\x05\u0142\xA2\x02\u0409\u0412\x05\xBC_\x02\u040A\u040D\x05\u0142" +
		"\xA2\x02\u040B\u040D\x05\u0144\xA3\x02\u040C\u040A\x03\x02\x02\x02\u040C" +
		"\u040B\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x07\x1A" +
		"\x02\x02\u040F\u0410\x05\u0142\xA2\x02\u0410\u0411\x05\xBC_\x02\u0411" +
		"\u0413\x03\x02\x02\x02\u0412\u040C\x03\x02\x02\x02\u0412\u0413\x03\x02" +
		"\x02\x02\u0413\xAF\x03\x02\x02\x02\u0414\u0415\x070\x02\x02\u0415\u0416" +
		"\x05\xDCo\x02\u0416\u0417\x05\u0142\xA2\x02\u0417\u0418\x07R\x02\x02\u0418" +
		"\u0420\x05\u0142\xA2\x02\u0419\u041B\x05\xCAf\x02\u041A\u0419\x03\x02" +
		"\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C" +
		"\u041D\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u041F\x05\u0142" +
		"\xA2\x02\u041F\u0421\x03\x02\x02\x02\u0420\u041A\x03\x02\x02\x02\u0420" +
		"\u0421\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0423\x07S\x02" +
		"\x02\u0423\xB1\x03\x02\x02\x02\u0424\u0425\x07\x1F\x02\x02\u0425\u0426" +
		"\x07P\x02\x02\u0426\u0427\x05\xCEh\x02\u0427\u0428\x05\u0140\xA1\x02\u0428" +
		"\u0429\x05\u0142\xA2\x02\u0429\u042A\x05\xBC_\x02\u042A\u0438\x03\x02" +
		"\x02\x02\u042B\u042C\x079\x02\x02\u042C\u042D\x05\xDCo\x02\u042D\u042E" +
		"\x05\u0142\xA2\x02\u042E\u042F\x05\xBC_\x02\u042F\u0438\x03\x02\x02\x02" +
		"\u0430\u0431\x07\x19\x02\x02\u0431\u0432\x05\u0142\xA2\x02\u0432\u0433" +
		"\x05\xBC_\x02\u0433\u0434\x05\u0142\xA2\x02\u0434\u0435\x079\x02\x02\u0435" +
		"\u0436\x05\xDCo\x02\u0436\u0438\x03\x02\x02\x02\u0437\u0424\x03\x02\x02" +
		"\x02\u0437\u042B\x03\x02\x02\x02\u0437\u0430\x03\x02\x02\x02\u0438\xB3" +
		"\x03\x02\x02\x02\u0439\u043B\x07\x17\x02\x02\u043A\u043C\x05\u013A\x9E" +
		"\x02\u043B\u043A\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\xB5" +
		"\x03\x02\x02\x02\u043D\u043F\x07\x12\x02\x02\u043E\u0440\x05\u013A\x9E" +
		"\x02\u043F\u043E\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\xB7" +
		"\x03\x02\x02\x02\u0441\u0443\x076\x02\x02\u0442\u0444\x05\xC4c\x02\u0443" +
		"\u0442\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0445\x03\x02" +
		"\x02\x02\u0445\u0446\x05\u0142\xA2\x02\u0446\u044C\x05\x9EP\x02\u0447" +
		"\u0448\x05\u0142\xA2\x02\u0448\u0449\x05\xBE`\x02\u0449\u044B\x03\x02" +
		"\x02\x02\u044A\u0447\x03\x02\x02\x02\u044B\u044E\x03\x02\x02\x02\u044C" +
		"\u044A\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u0452\x03\x02" +
		"\x02\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0450\x05\u0142\xA2\x02\u0450" +
		"\u0451\x05\xC2b\x02\u0451\u0453\x03\x02\x02\x02\u0452\u044F\x03\x02\x02" +
		"\x02\u0452\u0453\x03\x02\x02\x02\u0453\xB9\x03\x02\x02\x02\u0454\u0455" +
		"\x07\x11\x02\x02\u0455\u045B\x05\xE8u\x02\u0456\u0457\x05\u0142\xA2\x02" +
		"\u0457\u0458\t\x06\x02\x02\u0458\u0459\x05\u0142\xA2\x02\u0459\u045A\x05" +
		"\xE8u\x02\u045A\u045C\x03\x02\x02\x02\u045B\u0456\x03\x02\x02\x02\u045B" +
		"\u045C\x03\x02\x02\x02\u045C\xBB\x03\x02\x02\x02\u045D\u0478\x05\x9EP" +
		"\x02\u045E\u0478\x05\xACW\x02\u045F\u0478\x05\xB2Z\x02\u0460\u0478\x05" +
		"\xB8]\x02\u0461\u0462\x071\x02\x02\u0462\u0463\x05\xDCo\x02\u0463\u0464" +
		"\x05\u0142\xA2\x02\u0464\u0465\x05\x9EP\x02\u0465\u0478\x03\x02\x02\x02" +
		"\u0466\u0468\x07,\x02\x02\u0467\u0469\x05\xE8u\x02\u0468\u0467\x03\x02" +
		"\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u0478\x03\x02\x02\x02\u046A" +
		"\u046B\x073\x02\x02\u046B\u0478\x05\xE8u\x02\u046C\u0478\x05\xB6\\\x02" +
		"\u046D\u0478\x05\xB4[\x02\u046E\u046F\x05\u013A\x9E\x02\u046F\u0470\x07" +
		"_\x02\x02\u0470\u0471\x05\u0142\xA2\x02\u0471\u0472\x05\xBC_\x02\u0472" +
		"\u0478\x03\x02\x02\x02\u0473\u0478\x05\xBA^\x02\u0474\u0478\x05\xA2R\x02" +
		"\u0475\u0478\x05\xE4s\x02\u0476\u0478\x07V\x02\x02\u0477\u045D\x03\x02" +
		"\x02\x02\u0477\u045E\x03\x02\x02\x02\u0477\u045F\x03\x02\x02\x02\u0477" +
		"\u0460\x03\x02\x02\x02\u0477\u0461\x03\x02\x02\x02\u0477\u0466\x03\x02" +
		"\x02\x02\u0477\u046A\x03\x02\x02\x02\u0477\u046C\x03\x02\x02\x02\u0477" +
		"\u046D\x03\x02\x02\x02\u0477\u046E\x03\x02\x02\x02\u0477\u0473\x03\x02" +
		"\x02\x02\u0477\u0474\x03\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0477" +
		"\u0476\x03\x02\x02\x02\u0478\xBD\x03\x02\x02\x02\u0479\u047A\x07\x14\x02" +
		"\x02\u047A\u047B\x07P\x02\x02\u047B\u047D\x05\x1C\x0F\x02\u047C\u047E" +
		"\x05\xC0a\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02" +
		"\u047E\u047F\x03\x02\x02\x02\u047F\u0480\x05\u013A\x9E\x02\u0480\u0481" +
		"\x05\u0140\xA1\x02\u0481\u0482\x05\u0142\xA2\x02\u0482\u0483\x05\x9EP" +
		"\x02\u0483\xBF\x03\x02\x02\x02\u0484\u0489\x05n8\x02\u0485\u0486\x07m" +
		"\x02\x02\u0486\u0488\x05n8\x02\u0487\u0485\x03\x02\x02\x02\u0488\u048B" +
		"\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02" +
		"\u048A\xC1\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C\u048D\x07" +
		"\x1E\x02\x02\u048D\u048E\x05\u0142\xA2\x02\u048E\u048F\x05\x9EP\x02\u048F" +
		"\xC3\x03\x02\x02\x02\u0490\u0491\x07P\x02\x02\u0491\u0492\x05\u0142\xA2" +
		"\x02\u0492\u0494\x05\xC6d\x02\u0493\u0495\x05\u0144\xA3\x02\u0494\u0493" +
		"\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02" +
		"\u0496\u0497\x05\u0140\xA1\x02\u0497\xC5\x03\x02\x02\x02\u0498\u049E\x05" +
		"\xC8e\x02\u0499\u049A\x05\u0144\xA3\x02\u049A\u049B\x05\xC8e\x02\u049B" +
		"\u049D\x03\x02\x02\x02\u049C\u0499\x03\x02\x02\x02\u049D\u04A0\x03\x02" +
		"\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F" +
		"\xC7\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A1\u04A4\x05\xA2R" +
		"\x02\u04A2\u04A4\x05\xE8u\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3\u04A2" +
		"\x03\x02\x02\x02\u04A4\xC9\x03\x02\x02\x02\u04A5\u04AB\x05\xCCg\x02\u04A6" +
		"\u04A7\x05\u0142\xA2\x02\u04A7\u04A8\x05\xCCg\x02\u04A8\u04AA\x03\x02" +
		"\x02\x02\u04A9\u04A6\x03\x02\x02\x02\u04AA\u04AD\x03\x02\x02\x02\u04AB" +
		"\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AE\x03\x02" +
		"\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AE\u04AF\x05\u0142\xA2\x02\u04AF" +
		"\u04B0\x05\x8AF\x02\u04B0\xCB\x03\x02\x02\x02\u04B1\u04B2\x07\x13\x02" +
		"\x02\u04B2\u04B3\x05\xE8u\x02\u04B3\u04B4\x07_\x02\x02\u04B4\u04B8\x03" +
		"\x02\x02\x02\u04B5\u04B6\x07\x18\x02\x02\u04B6\u04B8\x07_\x02\x02\u04B7" +
		"\u04B1\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B8\xCD\x03\x02\x02" +
		"\x02\u04B9\u04BC\x05\xD0i\x02\u04BA\u04BC\x05\xD2j\x02\u04BB\u04B9\x03" +
		"\x02\x02\x02\u04BB\u04BA\x03\x02\x02\x02\u04BC\xCF\x03\x02\x02\x02\u04BD" +
		"\u04BF\x05\x1C\x0F\x02\u04BE\u04C0\x05L\'\x02\u04BF\u04BE\x03\x02\x02" +
		"\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C2" +
		"\x05@!\x02\u04C2\u04C3\t\x07\x02\x02\u04C3\u04C4\x05\xE8u\x02\u04C4\xD1" +
		"\x03\x02\x02\x02\u04C5\u04C7\x05\xD4k\x02\u04C6\u04C5\x03\x02\x02\x02" +
		"\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04CA\x07" +
		"V\x02\x02\u04C9\u04CB\x05\xE8u\x02\u04CA\u04C9\x03\x02\x02\x02\u04CA\u04CB" +
		"\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CE\x07V\x02\x02" +
		"\u04CD\u04CF\x05\xD6l\x02\u04CE\u04CD\x03\x02\x02\x02\u04CE\u04CF\x03" +
		"\x02\x02\x02\u04CF\xD3\x03\x02\x02\x02\u04D0\u04D3\x05\xA2R\x02\u04D1" +
		"\u04D3\x05\xDEp\x02\u04D2\u04D0\x03\x02\x02\x02\u04D2\u04D1\x03\x02\x02" +
		"\x02\u04D3\xD5\x03\x02\x02\x02\u04D4\u04D5\x05\xDEp\x02\u04D5\xD7\x03" +
		"\x02\x02\x02\u04D6\u04D7\x07P\x02\x02\u04D7\u04D8\x05L\'\x02\u04D8\u04D9" +
		"\x05\u0140\xA1\x02\u04D9\xD9\x03\x02\x02\x02\u04DA\u04DB\x05\xDCo\x02" +
		"\u04DB\xDB\x03\x02\x02\x02\u04DC\u04DD\x07P\x02\x02\u04DD\u04DE\x05\xE2" +
		"r\x02\u04DE\u04DF\x05\u0140\xA1\x02\u04DF\xDD\x03\x02\x02\x02\u04E0\u04E5" +
		"\x05\xE0q\x02\u04E1\u04E2\x07W\x02\x02\u04E2\u04E4\x05\xE0q\x02\u04E3" +
		"\u04E1\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E3\x03\x02" +
		"\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\xDF\x03\x02\x02\x02\u04E7\u04E5" +
		"\x03\x02\x02\x02\u04E8\u04EA\x07j\x02\x02\u04E9\u04E8\x03\x02\x02\x02" +
		"\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04EC\x05" +
		"\xE8u\x02\u04EC\xE1\x03\x02\x02\x02\u04ED\u04F0\x05\xE4s\x02\u04EE\u04F0" +
		"\x05|?\x02\u04EF\u04ED\x03\x02\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04F0" +
		"\xE3\x03\x02\x02\x02\u04F1\u04F2\x05\xECw\x02\u04F2\xE5\x03\x02\x02\x02" +
		"\u04F3\u04F5\x05\xF0y\x02\u04F4\u04F6\t\b\x02\x02\u04F5\u04F4\x03\x02" +
		"\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\xE7\x03\x02\x02\x02\u04F7\u04F8" +
		"\bu\x01\x02\u04F8\u04F9\x05\xD8m\x02\u04F9\u04FA\x05\xEAv\x02\u04FA\u0509" +
		"\x03\x02\x02\x02\u04FB\u0509\x05\xE6t\x02\u04FC\u04FD\t\t\x02\x02\u04FD" +
		"\u04FE\x05\u0142\xA2\x02\u04FE\u04FF\x05\xE8u\x14\u04FF\u0509\x03\x02" +
		"\x02\x02\u0500\u0501\t\n\x02\x02\u0501\u0509\x05\xE8u\x12\u0502\u0503" +
		"\x05\xAAV\x02\u0503\u0504\x05\u0142\xA2\x02\u0504\u0505\x07Y\x02\x02\u0505" +
		"\u0506\x05\u0142\xA2\x02\u0506\u0507\x05\xE4s\x02\u0507\u0509\x03\x02" +
		"\x02\x02\u0508\u04F7\x03\x02\x02\x02\u0508\u04FB\x03\x02\x02\x02\u0508" +
		"\u04FC\x03\x02\x02\x02\u0508\u0500\x03\x02\x02\x02\u0508\u0502\x03\x02" +
		"\x02\x02\u0509\u0578\x03\x02\x02\x02\u050A\u050B\f\x13\x02\x02\u050B\u050C" +
		"\x07H\x02\x02\u050C\u050D\x05\u0142\xA2\x02\u050D\u050E\x05\xE8u\x14\u050E" +
		"\u0577\x03\x02\x02\x02\u050F\u0510\f\x11\x02\x02\u0510\u0511\x05\u0142" +
		"\xA2\x02\u0511\u0512\t\v\x02\x02\u0512\u0513\x05\u0142\xA2\x02\u0513\u0514" +
		"\x05\xE8u\x12\u0514\u0577\x03\x02\x02\x02\u0515\u0516\f\x10\x02\x02\u0516" +
		"\u0517\t\f\x02\x02\u0517\u0518\x05\u0142\xA2\x02\u0518\u0519\x05\xE8u" +
		"\x11\u0519\u0577\x03\x02\x02\x02\u051A\u051B\f\x0F\x02\x02\u051B\u0526" +
		"\x05\u0142\xA2\x02\u051C\u051D\x07[\x02\x02\u051D\u0524\x07[\x02\x02\u051E" +
		"\u051F\x07Z\x02\x02\u051F\u0520\x07Z\x02\x02\u0520\u0524\x07Z\x02\x02" +
		"\u0521\u0522\x07Z\x02\x02\u0522\u0524\x07Z\x02\x02\u0523\u051C\x03\x02" +
		"\x02\x02\u0523\u051E\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0524" +
		"\u0527\x03\x02\x02\x02\u0525\u0527\t\r\x02\x02\u0526\u0523\x03\x02\x02" +
		"\x02\u0526\u0525\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u0529" +
		"\x05\u0142\xA2\x02\u0529\u052A\x05\xE8u\x10\u052A\u0577\x03\x02\x02\x02" +
		"\u052B\u052C\f\r\x02\x02\u052C\u052D\x05\u0142\xA2\x02\u052D\u052E\t\x0E" +
		"\x02\x02\u052E\u052F\x05\u0142\xA2\x02\u052F\u0530\x05\xE8u\x0E\u0530" +
		"\u0577\x03\x02\x02\x02\u0531\u0532\f\f\x02\x02\u0532\u0533\x05\u0142\xA2" +
		"\x02\u0533\u0534\t\x0F\x02\x02\u0534\u0535\x05\u0142\xA2\x02\u0535\u0536" +
		"\x05\xE8u\r\u0536\u0577\x03\x02\x02\x02\u0537\u0538\f\v\x02\x02\u0538" +
		"\u0539\x05\u0142\xA2\x02\u0539\u053A\t\x10\x02\x02\u053A\u053B\x05\u0142" +
		"\xA2\x02\u053B\u053C\x05\xE8u\f\u053C\u0577\x03\x02\x02\x02\u053D\u053E" +
		"\f\n\x02\x02\u053E\u053F\x05\u0142\xA2\x02\u053F\u0540\x07l\x02\x02\u0540" +
		"\u0541\x05\u0142\xA2\x02\u0541\u0542\x05\xE8u\v\u0542\u0577\x03\x02\x02" +
		"\x02\u0543\u0544\f\t\x02\x02\u0544\u0545\x05\u0142\xA2\x02\u0545\u0546" +
		"\x07n\x02\x02\u0546\u0547\x05\u0142\xA2\x02\u0547\u0548\x05\xE8u\n\u0548" +
		"\u0577\x03\x02\x02\x02\u0549\u054A\f\b\x02\x02\u054A\u054B\x05\u0142\xA2" +
		"\x02\u054B\u054C\x07m\x02\x02\u054C\u054D\x05\u0142\xA2\x02\u054D\u054E" +
		"\x05\xE8u\t\u054E\u0577\x03\x02\x02\x02\u054F\u0550\f\x07\x02\x02\u0550" +
		"\u0551\x05\u0142\xA2\x02\u0551\u0552\x07d\x02\x02\u0552\u0553\x05\u0142" +
		"\xA2\x02\u0553\u0554\x05\xE8u\b\u0554\u0577\x03\x02\x02\x02\u0555\u0556" +
		"\f\x06\x02\x02\u0556\u0557\x05\u0142\xA2\x02\u0557\u0558\x07e\x02\x02" +
		"\u0558\u0559\x05\u0142\xA2\x02\u0559\u055A\x05\xE8u\x07\u055A\u0577\x03" +
		"\x02\x02\x02\u055B\u055C\f\x05\x02\x02\u055C\u0566\x05\u0142\xA2\x02\u055D" +
		"\u055E\x07^\x02\x02\u055E\u055F\x05\u0142\xA2\x02\u055F\u0560\x05\xE8" +
		"u\x02\u0560\u0561\x05\u0142\xA2\x02\u0561\u0562\x07_\x02\x02\u0562\u0563" +
		"\x05\u0142\xA2\x02\u0563\u0567\x03\x02\x02\x02\u0564\u0565\x07C\x02\x02" +
		"\u0565\u0567\x05\u0142\xA2\x02\u0566\u055D\x03\x02\x02\x02\u0566\u0564" +
		"\x03\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\u0569\x05\xE8u\x05" +
		"\u0569\u0577\x03\x02\x02\x02\u056A\u056B\f\x0E\x02\x02\u056B\u056C\x05" +
		"\u0142\xA2\x02\u056C\u056D\t\x11\x02\x02\u056D\u056E\x05\u0142\xA2\x02" +
		"\u056E\u056F\x05L\'\x02\u056F\u0577\x03\x02\x02\x02\u0570\u0571\f\x03" +
		"\x02\x02\u0571\u0572\x05\u0142\xA2\x02\u0572\u0573\t\x12\x02\x02\u0573" +
		"\u0574\x05\u0142\xA2\x02\u0574\u0575\x05\xE2r\x02\u0575\u0577\x03\x02" +
		"\x02\x02\u0576\u050A\x03\x02\x02\x02\u0576\u050F\x03\x02\x02\x02\u0576" +
		"\u0515\x03\x02\x02\x02\u0576\u051A\x03\x02\x02\x02\u0576\u052B\x03\x02" +
		"\x02\x02\u0576\u0531\x03\x02\x02\x02\u0576\u0537\x03\x02\x02\x02\u0576" +
		"\u053D\x03\x02\x02\x02\u0576\u0543\x03\x02\x02\x02\u0576\u0549\x03\x02" +
		"\x02\x02\u0576\u054F\x03\x02\x02\x02\u0576\u0555\x03\x02\x02\x02\u0576" +
		"\u055B\x03\x02\x02\x02\u0576\u056A\x03\x02\x02\x02\u0576\u0570\x03\x02" +
		"\x02\x02\u0577\u057A\x03\x02\x02\x02\u0578\u0576\x03\x02\x02\x02\u0578" +
		"\u0579\x03\x02\x02\x02\u0579\xE9\x03\x02\x02\x02\u057A\u0578\x03\x02\x02" +
		"\x02\u057B\u057C\x05\xD8m\x02\u057C\u057D\x05\xEAv\x02\u057D\u0586\x03" +
		"\x02\x02\x02\u057E\u0586\x05\xE6t\x02\u057F\u0580\t\t\x02\x02\u0580\u0581" +
		"\x05\u0142\xA2\x02\u0581\u0582\x05\xEAv\x02\u0582\u0586\x03\x02\x02\x02" +
		"\u0583\u0584\t\n\x02\x02\u0584\u0586\x05\xEAv\x02\u0585\u057B\x03\x02" +
		"\x02\x02\u0585\u057E\x03\x02\x02\x02\u0585\u057F\x03\x02\x02\x02\u0585" +
		"\u0583\x03\x02\x02\x02\u0586\xEB\x03\x02\x02\x02\u0587\u058B\x05\xE8u" +
		"\x02\u0588\u0589\x06w\x14\x03\u0589\u058C\x05\u0128\x95\x02\u058A\u058C" +
		"\x03\x02\x02\x02\u058B\u0588\x03\x02\x02\x02\u058B\u058A\x03\x02\x02\x02" +
		"\u058C\u0590\x03\x02\x02\x02\u058D\u058F\x05\xEEx\x02\u058E\u058D\x03" +
		"\x02\x02\x02\u058F\u0592\x03\x02\x02\x02\u0590\u058E\x03\x02\x02\x02\u0590" +
		"\u0591\x03\x02\x02\x02\u0591\xED\x03\x02\x02\x02\u0592\u0590\x03\x02\x02" +
		"\x02\u0593\u059A\x05\u0102\x82\x02\u0594\u0596\x05\xF2z\x02\u0595\u0594" +
		"\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02" +
		"\u0597\u0598\x03\x02\x02\x02\u0598\u059B\x03\x02\x02\x02\u0599\u059B\x05" +
		"\u0128\x95\x02\u059A\u0595\x03\x02\x02\x02\u059A\u0599\x03\x02\x02\x02" +
		"\u059A\u059B\x03\x02\x02\x02\u059B\xEF\x03\x02\x02\x02\u059C\u05A0\x05" +
		"\xFC\x7F\x02\u059D\u059E\x06y\x15\x02\u059E\u05A0\x07-\x02\x02\u059F\u059C" +
		"\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u05A0\u05A6\x03\x02\x02\x02" +
		"\u05A1\u05A2\x05\xF2z\x02\u05A2\u05A3\by\x01\x02\u05A3\u05A5\x03\x02\x02" +
		"\x02\u05A4\u05A1\x03\x02\x02\x02\u05A5\u05A8\x03\x02\x02\x02\u05A6\u05A4" +
		"\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7\xF1\x03\x02\x02\x02" +
		"\u05A8\u05A6\x03\x02\x02\x02\u05A9\u05C2\x05\u0142\xA2\x02\u05AA\u05AB" +
		"\x07X\x02\x02\u05AB\u05AC\x05\u0142\xA2\x02\u05AC\u05AD\x07\'\x02\x02" +
		"\u05AD\u05AE\x05\u0118\x8D\x02\u05AE\u05AF\bz\x01\x02\u05AF\u05C3\x03" +
		"\x02\x02\x02\u05B0\u05B1\t\x13\x02\x02\u05B1\u05B4\x05\u0142\xA2\x02\u05B2" +
		"\u05B5\x07~\x02\x02\u05B3\u05B5\x05\u0122\x92\x02\u05B4\u05B2\x03\x02" +
		"\x02\x02\u05B4\u05B3\x03\x02\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5" +
		"\u05BB\x03\x02\x02\x02\u05B6\u05B7\x07D\x02\x02\u05B7\u05BB\x05\u0142" +
		"\xA2\x02\u05B8\u05B9\x07E\x02\x02\u05B9\u05BB\x05\u0142\xA2\x02\u05BA" +
		"\u05B0\x03\x02\x02\x02\u05BA\u05B6\x03\x02\x02\x02\u05BA\u05B8\x03\x02" +
		"\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BD\x05\xF4{\x02\u05BD\u05BE" +
		"\bz\x01\x02\u05BE\u05C3\x03\x02\x02\x02\u05BF\u05C0\x05\x86D\x02\u05C0" +
		"\u05C1\bz\x01\x02\u05C1\u05C3\x03\x02\x02\x02\u05C2\u05AA\x03\x02\x02" +
		"\x02\u05C2\u05BA\x03\x02\x02\x02\u05C2\u05BF\x03\x02\x02\x02\u05C3\u05CE" +
		"\x03\x02\x02\x02\u05C4\u05C5\x05\u0126\x94\x02\u05C5\u05C6\bz\x01\x02" +
		"\u05C6\u05CE\x03\x02\x02\x02\u05C7\u05C8\x05\xF8}\x02\u05C8\u05C9\bz\x01" +
		"\x02\u05C9\u05CE\x03\x02\x02\x02\u05CA\u05CB\x05\xFA~\x02\u05CB\u05CC" +
		"\bz\x01\x02\u05CC\u05CE\x03\x02\x02\x02\u05CD\u05A9\x03\x02\x02\x02\u05CD" +
		"\u05C4\x03\x02\x02\x02\u05CD\u05C7\x03\x02\x02\x02\u05CD\u05CA\x03\x02" +
		"\x02\x02\u05CE\xF3\x03\x02\x02\x02\u05CF\u05D4\x05\u013A\x9E\x02\u05D0" +
		"\u05D4\x05\u0136\x9C\x02\u05D1\u05D4\x05\xF6|\x02\u05D2\u05D4\x05\u013E" +
		"\xA0\x02\u05D3\u05CF\x03\x02\x02\x02\u05D3\u05D0\x03\x02\x02\x02\u05D3" +
		"\u05D1\x03\x02\x02\x02\u05D3\u05D2\x03\x02\x02\x02\u05D4\xF5\x03\x02\x02" +
		"\x02\u05D5\u05D8\x05\xDAn\x02\u05D6\u05D8\x05t;\x02\u05D7\u05D5\x03\x02" +
		"\x02\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8\xF7\x03\x02\x02\x02\u05D9\u05DB" +
		"\x07^\x02\x02\u05DA\u05D9\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02" +
		"\u05DB\u05DC\x03\x02\x02\x02\u05DC\u05DE\x07T\x02\x02\u05DD\u05DF\x05" +
		"\xDEp\x02\u05DE\u05DD\x03\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF" +
		"\u05E0\x03\x02\x02\x02\u05E0\u05E1\x07U\x02\x02\u05E1\xF9\x03\x02\x02" +
		"\x02\u05E2\u05E4\x07^\x02\x02\u05E3\u05E2\x03\x02\x02\x02\u05E3\u05E4" +
		"\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E8\x07T\x02\x02" +
		"\u05E6\u05E9\x05\u010A\x86\x02\u05E7\u05E9\x07_\x02\x02\u05E8\u05E6\x03" +
		"\x02\x02\x02\u05E8\u05E7\x03\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA" +
		"\u05EB\x07U\x02\x02\u05EB\xFB\x03\x02\x02\x02\u05EC\u05EE\x05\u013A\x9E" +
		"\x02\u05ED\u05EF\x05V,\x02\u05EE\u05ED\x03\x02\x02\x02\u05EE\u05EF\x03" +
		"\x02\x02\x02\u05EF\u05FE\x03\x02\x02\x02\u05F0\u05FE\x05r:\x02\u05F1\u05FE" +
		"\x05t;\x02\u05F2\u05F3\x07\'\x02\x02\u05F3\u05F4\x05\u0142\xA2\x02\u05F4" +
		"\u05F5\x05\u0118\x8D\x02\u05F5\u05FE\x03\x02\x02\x02\u05F6\u05FE\x072" +
		"\x02\x02\u05F7\u05FE\x07/\x02\x02\u05F8\u05FE\x05\xDAn\x02\u05F9\u05FE" +
		"\x05\x86D\x02\u05FA\u05FE\x05\u0104\x83\x02\u05FB\u05FE\x05\u0106\x84" +
		"\x02\u05FC\u05FE\x05\u013C\x9F\x02\u05FD\u05EC\x03\x02\x02\x02\u05FD\u05F0" +
		"\x03\x02\x02\x02\u05FD\u05F1\x03\x02\x02\x02\u05FD\u05F2\x03\x02\x02\x02" +
		"\u05FD\u05F6\x03\x02\x02\x02\u05FD\u05F7\x03\x02\x02\x02\u05FD\u05F8\x03" +
		"\x02\x02\x02\u05FD\u05F9\x03\x02\x02\x02\u05FD\u05FA\x03\x02\x02\x02\u05FD" +
		"\u05FB\x03\x02\x02\x02\u05FD\u05FC\x03\x02\x02\x02\u05FE\xFD\x03\x02\x02" +
		"\x02\u05FF\u0606\x05\u013A\x9E\x02\u0600\u0606\x05r:\x02\u0601\u0606\x05" +
		"t;\x02\u0602\u0606\x05\xDAn\x02\u0603\u0606\x05\u0104\x83\x02\u0604\u0606" +
		"\x05\u0106\x84\x02\u0605\u05FF\x03\x02\x02\x02\u0605\u0600\x03\x02\x02" +
		"\x02\u0605\u0601\x03\x02\x02\x02\u0605\u0602\x03\x02\x02\x02\u0605\u0603" +
		"\x03\x02\x02\x02\u0605\u0604\x03\x02\x02\x02\u0606\xFF\x03\x02\x02\x02" +
		"\u0607\u060B\x05\u013A\x9E\x02\u0608\u060B\x05r:\x02\u0609\u060B\x05t" +
		";\x02\u060A\u0607\x03\x02\x02\x02\u060A\u0608\x03\x02\x02\x02\u060A\u0609" +
		"\x03\x02\x02\x02\u060B\u0101\x03\x02\x02\x02\u060C\u0610\x05\u013A\x9E" +
		"\x02\u060D\u0610\x05r:\x02\u060E\u0610\x05t;\x02\u060F\u060C\x03\x02\x02" +
		"\x02\u060F\u060D\x03\x02\x02\x02\u060F\u060E\x03\x02\x02\x02\u0610\u0103" +
		"\x03\x02\x02\x02\u0611\u0613\x07T\x02\x02\u0612\u0614\x05\xDEp\x02\u0613" +
		"\u0612\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614\u0616\x03\x02" +
		"\x02\x02\u0615\u0617\x07W\x02\x02\u0616\u0615\x03\x02\x02\x02\u0616\u0617" +
		"\x03\x02\x02\x02\u0617\u0618\x03\x02\x02\x02\u0618\u0619\x07U\x02\x02" +
		"\u0619\u0105\x03\x02\x02\x02\u061A\u0620\x07T\x02\x02\u061B\u061D\x05" +
		"\u0108\x85\x02\u061C\u061E\x07W\x02\x02\u061D\u061C\x03\x02\x02\x02\u061D" +
		"\u061E\x03\x02\x02\x02\u061E\u0621\x03\x02\x02\x02\u061F\u0621\x07_\x02" +
		"\x02\u0620\u061B\x03\x02\x02\x02\u0620\u061F\x03\x02\x02\x02\u0621\u0622" +
		"\x03\x02\x02\x02\u0622\u0623\x07U\x02\x02\u0623\u0107\x03\x02\x02\x02" +
		"\u0624\u0629\x05\u010C\x87\x02\u0625\u0626\x07W\x02\x02\u0626\u0628\x05" +
		"\u010C\x87\x02\u0627\u0625\x03\x02\x02\x02\u0628\u062B\x03\x02\x02\x02" +
		"\u0629\u0627\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u0109\x03" +
		"\x02\x02\x02\u062B\u0629\x03\x02\x02\x02\u062C\u0631\x05\u010E\x88\x02" +
		"\u062D\u062E\x07W\x02\x02\u062E\u0630\x05\u010E\x88\x02\u062F\u062D\x03" +
		"\x02\x02\x02\u0630\u0633\x03\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0631" +
		"\u0632\x03\x02\x02\x02\u0632\u010B\x03\x02\x02\x02\u0633\u0631\x03\x02" +
		"\x02\x02\u0634\u0635\x05\u0112\x8A\x02\u0635\u0636\x07_\x02\x02\u0636" +
		"\u0637\x05\u0142\xA2\x02\u0637\u0638\x05\xE8u\x02\u0638\u063F\x03\x02" +
		"\x02\x02\u0639\u063A\x07j\x02\x02\u063A\u063B\x07_\x02\x02\u063B\u063C" +
		"\x05\u0142\xA2\x02\u063C\u063D\x05\xE8u\x02\u063D\u063F\x03\x02\x02\x02" +
		"\u063E\u0634\x03\x02\x02\x02\u063E\u0639\x03\x02\x02\x02\u063F\u010D\x03" +
		"\x02\x02\x02\u0640\u0641\x05\u0114\x8B\x02\u0641\u0642\x07_\x02\x02\u0642" +
		"\u0643\x05\u0142\xA2\x02\u0643\u0644\x05\xE8u\x02\u0644\u064B\x03\x02" +
		"\x02\x02\u0645\u0646\x07j\x02\x02\u0646\u0647\x07_\x02\x02\u0647\u0648" +
		"\x05\u0142\xA2\x02\u0648\u0649\x05\xE8u\x02\u0649\u064B\x03\x02\x02\x02" +
		"\u064A\u0640\x03\x02\x02\x02\u064A\u0645\x03\x02\x02\x02\u064B\u010F\x03" +
		"\x02\x02\x02\u064C\u064D\x05\u0116\x8C\x02\u064D\u064E\x07_\x02\x02\u064E" +
		"\u064F\x05\u0142\xA2\x02\u064F\u0650\x05\xE8u\x02\u0650\u0657\x03\x02" +
		"\x02\x02\u0651\u0652\x07j\x02\x02\u0652\u0653\x07_\x02\x02\u0653\u0654" +
		"\x05\u0142\xA2\x02\u0654\u0655\x05\xE8u\x02\u0655\u0657\x03\x02\x02\x02" +
		"\u0656\u064C\x03\x02\x02\x02\u0656\u0651\x03\x02\x02\x02\u0657\u0111\x03" +
		"\x02\x02\x02\u0658\u065B\x05\u013E\xA0\x02\u0659\u065B\x05\xFC\x7F\x02" +
		"\u065A\u0658\x03\x02\x02\x02\u065A\u0659\x03\x02\x02\x02\u065B\u0113\x03" +
		"\x02\x02\x02\u065C\u065F\x05\u013E\xA0\x02\u065D\u065F\x05\xFE\x80\x02" +
		"\u065E\u065C\x03\x02\x02\x02\u065E\u065D\x03\x02\x02\x02\u065F\u0115\x03" +
		"\x02\x02\x02\u0660\u0663\x05\u013E\xA0\x02\u0661\u0663\x05\u0100\x81\x02" +
		"\u0662\u0660\x03\x02\x02\x02\u0662\u0661\x03\x02\x02\x02\u0663\u0117\x03" +
		"\x02\x02\x02\u0664\u0674\x05\u0120\x91\x02\u0665\u0666\x05\u0142\xA2\x02" +
		"\u0666\u0668\x05\u0126\x94\x02\u0667\u0669\x05\u011E\x90\x02\u0668\u0667" +
		"\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\u0675\x03\x02\x02\x02" +
		"\u066A\u066C\x05\u011A\x8E\x02\u066B\u066A\x03\x02\x02\x02\u066C\u066D" +
		"\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02" +
		"\u066E\u0672\x03\x02\x02\x02\u066F\u0670\x05\u0142\xA2\x02\u0670\u0671" +
		"\x05\u011C\x8F\x02\u0671\u0673\x03\x02\x02\x02\u0672\u066F\x03\x02\x02" +
		"\x02\u0672\u0673\x03\x02\x02\x02\u0673\u0675\x03\x02\x02\x02\u0674\u0665" +
		"\x03\x02\x02\x02\u0674\u066B\x03\x02\x02\x02\u0675\u0119\x03\x02\x02\x02" +
		"\u0676\u0677\x05\x8CG\x02\u0677\u0679\x07T\x02\x02\u0678\u067A\x05\xE8" +
		"u\x02\u0679\u0678\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\u067B" +
		"\x03\x02\x02\x02\u067B\u067C\x07U\x02\x02\u067C\u011B\x03\x02\x02\x02" +
		"\u067D\u067E\x07R\x02\x02\u067E\u0682\x05\u0142\xA2\x02\u067F\u0680\x05" +
		"D#\x02\u0680\u0681\x05\u0142\xA2\x02\u0681\u0683\x03\x02\x02\x02\u0682" +
		"\u067F\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u0684\x03\x02" +
		"\x02\x02\u0684\u0685\x07S\x02\x02\u0685\u011D\x03\x02\x02\x02\u0686\u0687" +
		"\x05*\x16\x02\u0687\u011F\x03\x02\x02\x02\u0688\u068E\x05\x8CG\x02\u0689" +
		"\u068F\x05T+\x02\u068A\u068C\x05n8\x02\u068B\u068D\x05\u0124\x93\x02\u068C" +
		"\u068B\x03\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u068F\x03\x02" +
		"\x02\x02\u068E\u0689\x03\x02\x02\x02\u068E\u068A\x03\x02\x02\x02\u068F" +
		"\u0121\x03\x02\x02\x02\u0690\u0691\x07[\x02\x02\u0691\u0692\x05\u0142" +
		"\xA2\x02\u0692\u0693\x05&\x14\x02\u0693\u0694\x05\u0142\xA2\x02\u0694" +
		"\u0695\x07Z\x02\x02\u0695\u0123\x03\x02\x02\x02\u0696\u0697\x07[\x02\x02" +
		"\u0697\u069A\x07Z\x02\x02\u0698\u069A\x05V,\x02\u0699\u0696\x03\x02\x02" +
		"\x02\u0699\u0698\x03\x02\x02\x02\u069A\u0125\x03\x02\x02\x02\u069B\u069D" +
		"\x07P\x02\x02\u069C\u069E\x05\u012C\x97\x02\u069D\u069C\x03\x02\x02\x02" +
		"\u069D\u069E\x03\x02\x02\x02\u069E\u06A0\x03\x02\x02\x02\u069F\u06A1\x07" +
		"W";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u06A0\u069F\x03\x02\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1" +
		"\u06A2\x03\x02\x02\x02\u06A2\u06A3\x05\u0140\xA1\x02\u06A3\u0127\x03\x02" +
		"\x02\x02\u06A4\u06AB\x05\u012E\x98\x02\u06A5\u06A6\x07W\x02\x02\u06A6" +
		"\u06A7\x05\u0142\xA2\x02\u06A7\u06A8\x05\u0130\x99\x02\u06A8\u06AA\x03" +
		"\x02\x02\x02\u06A9\u06A5\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02\x02\u06AB" +
		"\u06A9\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u0129\x03\x02" +
		"\x02\x02\u06AD\u06AB\x03\x02\x02\x02\u06AE\u06B5\x05\u0132\x9A\x02\u06AF" +
		"\u06B0\x07W\x02\x02\u06B0\u06B1\x05\u0142\xA2\x02\u06B1\u06B2\x05\u0134" +
		"\x9B\x02\u06B2\u06B4\x03\x02\x02\x02\u06B3\u06AF\x03\x02\x02\x02\u06B4" +
		"\u06B7\x03\x02\x02\x02\u06B5\u06B3\x03\x02\x02\x02\u06B5\u06B6\x03\x02" +
		"\x02\x02\u06B6\u012B\x03\x02\x02\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8" +
		"\u06BF\x05\u0134\x9B\x02\u06B9\u06BA\x07W\x02\x02\u06BA\u06BB\x05\u0142" +
		"\xA2\x02\u06BB\u06BC\x05\u0134\x9B\x02\u06BC\u06BE\x03\x02\x02\x02\u06BD" +
		"\u06B9\x03\x02\x02\x02\u06BE\u06C1\x03\x02\x02\x02\u06BF\u06BD\x03\x02" +
		"\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u012D\x03\x02\x02\x02\u06C1" +
		"\u06BF\x03\x02\x02\x02\u06C2\u06C5\x05\xE0q\x02\u06C3\u06C5\x05\u0110" +
		"\x89\x02\u06C4\u06C2\x03\x02\x02\x02\u06C4\u06C3\x03\x02\x02\x02\u06C5" +
		"\u012F\x03\x02\x02\x02\u06C6\u06C9\x05\xE0q\x02\u06C7\u06C9\x05\u010E" +
		"\x88\x02\u06C8\u06C6\x03\x02\x02\x02\u06C8\u06C7\x03\x02\x02\x02\u06C9" +
		"\u0131\x03\x02\x02\x02\u06CA\u06CE\x05\xE0q\x02\u06CB\u06CE\x05|?\x02" +
		"\u06CC\u06CE\x05\u0110\x89\x02\u06CD\u06CA\x03\x02\x02\x02\u06CD\u06CB" +
		"\x03\x02\x02\x02\u06CD\u06CC\x03\x02\x02\x02\u06CE\u0133\x03\x02\x02\x02" +
		"\u06CF\u06D3\x05\xE0q\x02\u06D0\u06D3\x05|?\x02\u06D1\u06D3\x05\u010E" +
		"\x88\x02\u06D2\u06CF\x03\x02\x02\x02\u06D2\u06D0\x03\x02\x02\x02\u06D2" +
		"\u06D1\x03\x02\x02\x02\u06D3\u0135\x03\x02\x02\x02\u06D4\u06D5\x07\x03" +
		"\x02\x02\u06D5\u0137\x03\x02\x02\x02\u06D6\u06D7\x07|\x02\x02\u06D7\u0139" +
		"\x03\x02\x02\x02\u06D8\u06D9\t\x14\x02\x02\u06D9\u013B\x03\x02\x02\x02" +
		"\u06DA\u06DB\t\x15\x02\x02\u06DB\u013D\x03\x02\x02\x02\u06DC\u06DD\t\x16" +
		"\x02\x02\u06DD\u013F\x03\x02\x02\x02\u06DE\u06DF\x07Q\x02\x02\u06DF\u0141" +
		"\x03\x02\x02\x02\u06E0\u06E2\x07\x81\x02\x02\u06E1\u06E0\x03\x02\x02\x02" +
		"\u06E2\u06E5\x03\x02\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E3\u06E4\x03" +
		"\x02\x02\x02\u06E4\u0143\x03\x02\x02\x02\u06E5\u06E3\x03\x02\x02\x02\u06E6" +
		"\u06E8\t\x17\x02\x02\u06E7\u06E6\x03\x02\x02\x02\u06E8\u06E9\x03\x02\x02" +
		"\x02\u06E9\u06E7\x03\x02\x02\x02\u06E9\u06EA\x03\x02\x02\x02\u06EA\u0145" +
		"\x03\x02\x02\x02\xC5\u0149\u014B\u014E\u0158\u015C\u0163\u016C\u0173\u017A" +
		"\u017F\u0187\u018E\u0191\u0199\u019E\u01A2\u01A7\u01AF\u01BB\u01C6\u01CF" +
		"\u01D9\u01E7\u01ED\u01F4\u01FB\u0207\u020A\u020D\u0215\u0218\u021B\u0227" +
		"\u022D\u0230\u0234\u0238\u023F\u0243\u0248\u0255\u025A\u025C\u0260\u0264" +
		"\u026F\u0278\u0286\u028B\u0293\u0296\u029B\u02A2\u02A5\u02AB\u02AE\u02B2" +
		"\u02B6\u02C3\u02D0\u02D2\u02DE\u02E3\u02E9\u02F1\u02F9\u02FC\u0304\u030D" +
		"\u0315\u031C\u0328\u0330\u0338\u033F\u0345\u0358\u035C\u0363\u0367\u036A" +
		"\u0371\u0374\u037C\u0380\u0388\u038D\u0394\u0398\u039C\u03A5\u03B0\u03B5" +
		"\u03BD\u03C1\u03C3\u03C9\u03D0\u03D8\u03E1\u03E6\u03EE\u03F4\u03FE\u0404" +
		"\u040C\u0412\u041C\u0420\u0437\u043B\u043F\u0443\u044C\u0452\u045B\u0468" +
		"\u0477\u047D\u0489\u0494\u049E\u04A3\u04AB\u04B7\u04BB\u04BF\u04C6\u04CA" +
		"\u04CE\u04D2\u04E5\u04E9\u04EF\u04F5\u0508\u0523\u0526\u0566\u0576\u0578" +
		"\u0585\u058B\u0590\u0597\u059A\u059F\u05A6\u05B4\u05BA\u05C2\u05CD\u05D3" +
		"\u05D7\u05DA\u05DE\u05E3\u05E8\u05EE\u05FD\u0605\u060A\u060F\u0613\u0616" +
		"\u061D\u0620\u0629\u0631\u063E\u064A\u0656\u065A\u065E\u0662\u0668\u066D" +
		"\u0672\u0674\u0679\u0682\u068C\u068E\u0699\u069D\u06A0\u06AB\u06B5\u06BF" +
		"\u06C4\u06C8\u06CD\u06D2\u06E3\u06E9";
	public static readonly _serializedATN: string = Utils.join(
		[
			GroovyParser._serializedATNSegment0,
			GroovyParser._serializedATNSegment1,
			GroovyParser._serializedATNSegment2,
			GroovyParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GroovyParser.__ATN) {
			GroovyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GroovyParser._serializedATN));
		}

		return GroovyParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public EOF(): TerminalNode { return this.getToken(GroovyParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public scriptStatements(): ScriptStatementsContext | undefined {
		return this.tryGetRuleContext(0, ScriptStatementsContext);
	}
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
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
	public get ruleIndex(): number { return GroovyParser.RULE_scriptStatements; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterScriptStatements) {
			listener.enterScriptStatements(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitScriptStatements) {
			listener.exitScriptStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_scriptStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterScriptStatement) {
			listener.enterScriptStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitScriptStatement) {
			listener.exitScriptStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public PACKAGE(): TerminalNode { return this.getToken(GroovyParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public IMPORT(): TerminalNode { return this.getToken(GroovyParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MUL, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VOLATILE, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEF, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_modifier; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_modifiersOpt; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterModifiersOpt) {
			listener.enterModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitModifiersOpt) {
			listener.exitModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_modifiers; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.NL);
		} else {
			return this.getToken(GroovyParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_classOrInterfaceModifiersOpt; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceModifiersOpt) {
			listener.enterClassOrInterfaceModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceModifiersOpt) {
			listener.exitClassOrInterfaceModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_classOrInterfaceModifiers; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceModifiers) {
			listener.enterClassOrInterfaceModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceModifiers) {
			listener.exitClassOrInterfaceModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STRICTFP, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.FINAL, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEF, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VAR, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ABSTRACT, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_variableModifiersOpt; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableModifiersOpt) {
			listener.enterVariableModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableModifiersOpt) {
			listener.exitVariableModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_variableModifiers; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableModifiers) {
			listener.enterVariableModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableModifiers) {
			listener.exitVariableModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableModifiers) {
			return visitor.visitVariableModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(GroovyParser.LT, 0); }
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
	public GT(): TerminalNode { return this.getToken(GroovyParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public className(): ClassNameContext {
		return this.getRuleContext(0, ClassNameContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.EXTENDS, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.BITAND);
		} else {
			return this.getToken(GroovyParser.BITAND, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_typeList; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CLASS, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.INTERFACE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ENUM, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AT, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRAIT, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IMPLEMENTS, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public t: number;
	public LBRACE(): TerminalNode { return this.getToken(GroovyParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(GroovyParser.RBRACE, 0); }
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_classBody; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STATIC, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.THROWS, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
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
	public get ruleIndex(): number { return GroovyParser.RULE_methodName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public VOID(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, ct: number) {
		super(parent, invokingState);
		this.ct = ct;
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_returnType; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_variableInitializers; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableInitializers) {
			listener.enterVariableInitializers(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableInitializers) {
			listener.exitVariableInitializers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.LBRACK);
		} else {
			return this.getToken(GroovyParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GroovyParser.RBRACK);
		} else {
			return this.getToken(GroovyParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_emptyDims; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEmptyDims) {
			listener.enterEmptyDims(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEmptyDims) {
			listener.exitEmptyDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_emptyDimsOpt; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEmptyDimsOpt) {
			listener.enterEmptyDimsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEmptyDimsOpt) {
			listener.exitEmptyDimsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public VOID(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_type; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}






export class PrimitiveTypeContext extends ParserRuleContext {
	public BuiltInPrimitiveType(): TerminalNode { return this.getToken(GroovyParser.BuiltInPrimitiveType, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(GroovyParser.LT, 0); }
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
	public GT(): TerminalNode { return this.getToken(GroovyParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.QUESTION, 0); }
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_annotatedQualifiedClassName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotatedQualifiedClassName) {
			listener.enterAnnotatedQualifiedClassName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotatedQualifiedClassName) {
			listener.exitAnnotatedQualifiedClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_qualifiedClassNameList; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedClassNameList) {
			listener.enterQualifiedClassNameList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedClassNameList) {
			listener.exitQualifiedClassNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedClassNameList) {
			return visitor.visitQualifiedClassNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public THIS(): TerminalNode { return this.getToken(GroovyParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_thisFormalParameter; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterThisFormalParameter) {
			listener.enterThisFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitThisFormalParameter) {
			listener.exitThisFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ELLIPSIS, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.DOT);
		} else {
			return this.getToken(GroovyParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public DEF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AS, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_qualifiedNameElement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedNameElement) {
			listener.enterQualifiedNameElement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedNameElement) {
			listener.exitQualifiedNameElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.DOT);
		} else {
			return this.getToken(GroovyParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_qualifiedNameElements; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedNameElements) {
			listener.enterQualifiedNameElements(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedNameElements) {
			listener.exitQualifiedNameElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_qualifiedClassName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedClassName) {
			listener.enterQualifiedClassName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedClassName) {
			listener.exitQualifiedClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.DOT);
		} else {
			return this.getToken(GroovyParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_qualifiedStandardClassName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedStandardClassName) {
			listener.enterQualifiedStandardClassName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedStandardClassName) {
			listener.exitQualifiedStandardClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralAltContext extends LiteralContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(GroovyParser.IntegerLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIntegerLiteralAlt) {
			listener.enterIntegerLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIntegerLiteralAlt) {
			listener.exitIntegerLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteralAlt) {
			return visitor.visitIntegerLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatingPointLiteralAltContext extends LiteralContext {
	public FloatingPointLiteral(): TerminalNode { return this.getToken(GroovyParser.FloatingPointLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFloatingPointLiteralAlt) {
			listener.enterFloatingPointLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFloatingPointLiteralAlt) {
			listener.exitFloatingPointLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStringLiteralAlt) {
			listener.enterStringLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStringLiteralAlt) {
			listener.exitStringLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralAlt) {
			return visitor.visitStringLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralAltContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(GroovyParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBooleanLiteralAlt) {
			listener.enterBooleanLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBooleanLiteralAlt) {
			listener.exitBooleanLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralAlt) {
			return visitor.visitBooleanLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralAltContext extends LiteralContext {
	public NullLiteral(): TerminalNode { return this.getToken(GroovyParser.NullLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNullLiteralAlt) {
			listener.enterNullLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNullLiteralAlt) {
			listener.exitNullLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNullLiteralAlt) {
			return visitor.visitNullLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GstringContext extends ParserRuleContext {
	public GStringBegin(): TerminalNode { return this.getToken(GroovyParser.GStringBegin, 0); }
	public gstringValue(): GstringValueContext[];
	public gstringValue(i: number): GstringValueContext;
	public gstringValue(i?: number): GstringValueContext | GstringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GstringValueContext);
		} else {
			return this.getRuleContext(i, GstringValueContext);
		}
	}
	public GStringEnd(): TerminalNode { return this.getToken(GroovyParser.GStringEnd, 0); }
	public GStringPart(): TerminalNode[];
	public GStringPart(i: number): TerminalNode;
	public GStringPart(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GroovyParser.GStringPart);
		} else {
			return this.getToken(GroovyParser.GStringPart, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_gstring; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstring) {
			listener.enterGstring(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstring) {
			listener.exitGstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_gstringValue; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstringValue) {
			listener.enterGstringValue(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstringValue) {
			listener.exitGstringValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.GStringPathPart);
		} else {
			return this.getToken(GroovyParser.GStringPathPart, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_gstringPath; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstringPath) {
			listener.enterGstringPath(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstringPath) {
			listener.exitGstringPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ARROW(): TerminalNode { return this.getToken(GroovyParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_standardLambdaExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStandardLambdaExpression) {
			listener.enterStandardLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStandardLambdaExpression) {
			listener.exitStandardLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_standardLambdaParameters; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStandardLambdaParameters) {
			listener.enterStandardLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStandardLambdaParameters) {
			listener.exitStandardLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(GroovyParser.LBRACE, 0); }
	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(0, BlockStatementsOptContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(GroovyParser.RBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ARROW, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_closure; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClosure) {
			listener.enterClosure(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClosure) {
			listener.exitClosure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_closureOrLambdaExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClosureOrLambdaExpression) {
			listener.enterClosureOrLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClosureOrLambdaExpression) {
			listener.exitClosureOrLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_blockStatementsOpt; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStatementsOpt) {
			listener.enterBlockStatementsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStatementsOpt) {
			listener.exitBlockStatementsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_blockStatements; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_annotationsOpt; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotationsOpt) {
			listener.enterAnnotationsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotationsOpt) {
			listener.exitAnnotationsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAnnotationsOpt) {
			return visitor.visitAnnotationsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(GroovyParser.AT, 0); }
	public annotationName(): AnnotationNameContext {
		return this.getRuleContext(0, AnnotationNameContext);
	}
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_annotation; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_elementValues; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValues) {
			listener.enterElementValues(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValues) {
			listener.exitElementValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_annotationName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotationName) {
			listener.enterAnnotationName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotationName) {
			listener.exitAnnotationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode { return this.getToken(GroovyParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_elementValuePairName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValuePairName) {
			listener.enterElementValuePairName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValuePairName) {
			listener.exitElementValuePairName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(GroovyParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(GroovyParser.RBRACK, 0); }
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(GroovyParser.LBRACE, 0); }
	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(0, BlockStatementsOptContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(GroovyParser.RBRACE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_block; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ASSIGN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNamePairsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_typeNamePairs; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeNamePairs) {
			listener.enterTypeNamePairs(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeNamePairs) {
			listener.exitTypeNamePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_typeNamePair; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeNamePair) {
			listener.enterTypeNamePair(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeNamePair) {
			listener.exitTypeNamePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeNamePair) {
			return visitor.visitTypeNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNamesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_variableNames; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableNames) {
			listener.enterVariableNames(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableNames) {
			listener.exitVariableNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_conditionalStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public IF(): TerminalNode { return this.getToken(GroovyParser.IF, 0); }
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ELSE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_ifElseStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIfElseStatement) {
			listener.enterIfElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIfElseStatement) {
			listener.exitIfElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIfElseStatement) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(GroovyParser.SWITCH, 0); }
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
	public LBRACE(): TerminalNode { return this.getToken(GroovyParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(GroovyParser.RBRACE, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_loopStatement; }
	public copyFrom(ctx: LoopStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ForStmtAltContext extends LoopStatementContext {
	public FOR(): TerminalNode { return this.getToken(GroovyParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForStmtAlt) {
			listener.enterForStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForStmtAlt) {
			listener.exitForStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitForStmtAlt) {
			return visitor.visitForStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStmtAltContext extends LoopStatementContext {
	public WHILE(): TerminalNode { return this.getToken(GroovyParser.WHILE, 0); }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterWhileStmtAlt) {
			listener.enterWhileStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitWhileStmtAlt) {
			listener.exitWhileStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitWhileStmtAlt) {
			return visitor.visitWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoWhileStmtAltContext extends LoopStatementContext {
	public DO(): TerminalNode { return this.getToken(GroovyParser.DO, 0); }
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
	public WHILE(): TerminalNode { return this.getToken(GroovyParser.WHILE, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	constructor(ctx: LoopStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterDoWhileStmtAlt) {
			listener.enterDoWhileStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitDoWhileStmtAlt) {
			listener.exitDoWhileStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStmtAlt) {
			return visitor.visitDoWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(GroovyParser.CONTINUE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(GroovyParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(GroovyParser.TRY, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_tryCatchStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTryCatchStatement) {
			listener.enterTryCatchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTryCatchStatement) {
			listener.exitTryCatchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ASSERT(): TerminalNode { return this.getToken(GroovyParser.ASSERT, 0); }
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_statement; }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStmtAlt) {
			listener.enterBlockStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStmtAlt) {
			listener.exitBlockStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterConditionalStmtAlt) {
			listener.enterConditionalStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitConditionalStmtAlt) {
			listener.exitConditionalStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLoopStmtAlt) {
			listener.enterLoopStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLoopStmtAlt) {
			listener.exitLoopStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTryCatchStmtAlt) {
			listener.enterTryCatchStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTryCatchStmtAlt) {
			listener.exitTryCatchStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTryCatchStmtAlt) {
			return visitor.visitTryCatchStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SynchronizedStmtAltContext extends StatementContext {
	public SYNCHRONIZED(): TerminalNode { return this.getToken(GroovyParser.SYNCHRONIZED, 0); }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSynchronizedStmtAlt) {
			listener.enterSynchronizedStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSynchronizedStmtAlt) {
			listener.exitSynchronizedStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStmtAlt) {
			return visitor.visitSynchronizedStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtAltContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(GroovyParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterReturnStmtAlt) {
			listener.enterReturnStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitReturnStmtAlt) {
			listener.exitReturnStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitReturnStmtAlt) {
			return visitor.visitReturnStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThrowStmtAltContext extends StatementContext {
	public THROW(): TerminalNode { return this.getToken(GroovyParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterThrowStmtAlt) {
			listener.enterThrowStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitThrowStmtAlt) {
			listener.exitThrowStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBreakStmtAlt) {
			listener.enterBreakStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBreakStmtAlt) {
			listener.exitBreakStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterContinueStmtAlt) {
			listener.enterContinueStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitContinueStmtAlt) {
			listener.exitContinueStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitContinueStmtAlt) {
			return visitor.visitContinueStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LabeledStmtAltContext extends StatementContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(GroovyParser.COLON, 0); }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLabeledStmtAlt) {
			listener.enterLabeledStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLabeledStmtAlt) {
			listener.exitLabeledStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAssertStmtAlt) {
			listener.enterAssertStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAssertStmtAlt) {
			listener.exitAssertStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLocalVariableDeclarationStmtAlt) {
			listener.enterLocalVariableDeclarationStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLocalVariableDeclarationStmtAlt) {
			listener.exitLocalVariableDeclarationStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionStmtAlt) {
			listener.enterExpressionStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionStmtAlt) {
			listener.exitExpressionStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmtAlt) {
			return visitor.visitExpressionStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyStmtAltContext extends StatementContext {
	public SEMI(): TerminalNode { return this.getToken(GroovyParser.SEMI, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEmptyStmtAlt) {
			listener.enterEmptyStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEmptyStmtAlt) {
			listener.exitEmptyStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmtAlt) {
			return visitor.visitEmptyStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(GroovyParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.BITOR);
		} else {
			return this.getToken(GroovyParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_catchType; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(GroovyParser.FINALLY, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_resources; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_resourceList; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_resource; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(GroovyParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_forControl; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COLON, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.SEMI);
		} else {
			return this.getToken(GroovyParser.SEMI, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_classicalForControl; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassicalForControl) {
			listener.enterClassicalForControl(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassicalForControl) {
			listener.exitClassicalForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_forInit; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_castParExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCastParExpression) {
			listener.enterCastParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCastParExpression) {
			listener.exitCastParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionInParContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_expressionInPar; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionInPar) {
			listener.enterExpressionInPar(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionInPar) {
			listener.exitExpressionInPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_expressionListElement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionListElement) {
			listener.enterExpressionListElement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionListElement) {
			listener.exitExpressionListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_enhancedStatementExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedStatementExpression) {
			listener.enterEnhancedStatementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedStatementExpression) {
			listener.exitEnhancedStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_statementExpression; }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandExprAlt) {
			listener.enterCommandExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandExprAlt) {
			listener.exitCommandExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public INC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
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
	public get ruleIndex(): number { return GroovyParser.RULE_expression; }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCastExprAlt) {
			listener.enterCastExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCastExprAlt) {
			listener.exitCastExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPostfixExprAlt) {
			listener.enterPostfixExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPostfixExprAlt) {
			listener.exitPostfixExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPostfixExprAlt) {
			return visitor.visitPostfixExprAlt(this);
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
	public BITNOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.BITNOT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterUnaryNotExprAlt) {
			listener.enterUnaryNotExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitUnaryNotExprAlt) {
			listener.exitUnaryNotExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public POWER(): TerminalNode { return this.getToken(GroovyParser.POWER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPowerExprAlt) {
			listener.enterPowerExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPowerExprAlt) {
			listener.exitPowerExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public INC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterUnaryAddExprAlt) {
			listener.enterUnaryAddExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitUnaryAddExprAlt) {
			listener.exitUnaryAddExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMultiplicativeExprAlt) {
			listener.enterMultiplicativeExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMultiplicativeExprAlt) {
			listener.exitMultiplicativeExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAdditiveExprAlt) {
			listener.enterAdditiveExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAdditiveExprAlt) {
			listener.exitAdditiveExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.LT);
		} else {
			return this.getToken(GroovyParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GroovyParser.GT);
		} else {
			return this.getToken(GroovyParser.GT, i);
		}
	}
	public RANGE_INCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.RANGE_INCLUSIVE, 0); }
	public RANGE_EXCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.RANGE_EXCLUSIVE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterShiftExprAlt) {
			listener.enterShiftExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitShiftExprAlt) {
			listener.exitShiftExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AS, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.INSTANCEOF, 0); }
	public NOT_INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NOT_INSTANCEOF, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.LT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IN, 0); }
	public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NOT_IN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterRelationalExprAlt) {
			listener.enterRelationalExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitRelationalExprAlt) {
			listener.exitRelationalExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public IDENTICAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IDENTICAL, 0); }
	public NOT_IDENTICAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NOT_IDENTICAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NOTEQUAL, 0); }
	public SPACESHIP(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SPACESHIP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEqualityExprAlt) {
			listener.enterEqualityExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEqualityExprAlt) {
			listener.exitEqualityExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public REGEX_FIND(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.REGEX_FIND, 0); }
	public REGEX_MATCH(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.REGEX_MATCH, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterRegexExprAlt) {
			listener.enterRegexExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitRegexExprAlt) {
			listener.exitRegexExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public BITAND(): TerminalNode { return this.getToken(GroovyParser.BITAND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAndExprAlt) {
			listener.enterAndExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAndExprAlt) {
			listener.exitAndExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public XOR(): TerminalNode { return this.getToken(GroovyParser.XOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExclusiveOrExprAlt) {
			listener.enterExclusiveOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExclusiveOrExprAlt) {
			listener.exitExclusiveOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public BITOR(): TerminalNode { return this.getToken(GroovyParser.BITOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterInclusiveOrExprAlt) {
			listener.enterInclusiveOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitInclusiveOrExprAlt) {
			listener.exitInclusiveOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public AND(): TerminalNode { return this.getToken(GroovyParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLogicalAndExprAlt) {
			listener.enterLogicalAndExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLogicalAndExprAlt) {
			listener.exitLogicalAndExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public OR(): TerminalNode { return this.getToken(GroovyParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLogicalOrExprAlt) {
			listener.enterLogicalOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLogicalOrExprAlt) {
			listener.exitLogicalOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.QUESTION, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COLON, 0); }
	public ELVIS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ELVIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterConditionalExprAlt) {
			listener.enterConditionalExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitConditionalExprAlt) {
			listener.exitConditionalExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode { return this.getToken(GroovyParser.ASSIGN, 0); }
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMultipleAssignmentExprAlt) {
			listener.enterMultipleAssignmentExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMultipleAssignmentExprAlt) {
			listener.exitMultipleAssignmentExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MOD_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.POWER_ASSIGN, 0); }
	public ELVIS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ELVIS_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAssignmentExprAlt) {
			listener.enterAssignmentExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAssignmentExprAlt) {
			listener.exitAssignmentExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_commandExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandExpression) {
			listener.enterCommandExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandExpression) {
			listener.exitCommandExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_commandArgument; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandArgument) {
			listener.enterCommandArgument(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandArgument) {
			listener.exitCommandArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STATIC, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_pathExpression; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPathExpression) {
			listener.enterPathExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPathExpression) {
			listener.exitPathExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DOT, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NEW, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public namePart(): NamePartContext | undefined {
		return this.tryGetRuleContext(0, NamePartContext);
	}
	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClosureOrLambdaExpressionContext);
	}
	public METHOD_POINTER(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.METHOD_POINTER, 0); }
	public METHOD_REFERENCE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.METHOD_REFERENCE, 0); }
	public SPREAD_DOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SPREAD_DOT, 0); }
	public SAFE_DOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SAFE_DOT, 0); }
	public SAFE_CHAIN_DOT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SAFE_CHAIN_DOT, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AT, 0); }
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
	public get ruleIndex(): number { return GroovyParser.RULE_pathElement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPathElement) {
			listener.enterPathElement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPathElement) {
			listener.exitPathElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_namePart; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamePart) {
			listener.enterNamePart(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamePart) {
			listener.exitNamePart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_dynamicMemberName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterDynamicMemberName) {
			listener.enterDynamicMemberName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitDynamicMemberName) {
			listener.exitDynamicMemberName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitDynamicMemberName) {
			return visitor.visitDynamicMemberName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexPropertyArgsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(GroovyParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(GroovyParser.RBRACK, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.QUESTION, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_indexPropertyArgs; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIndexPropertyArgs) {
			listener.enterIndexPropertyArgs(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIndexPropertyArgs) {
			listener.exitIndexPropertyArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIndexPropertyArgs) {
			return visitor.visitIndexPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedPropertyArgsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(GroovyParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(GroovyParser.RBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_namedPropertyArgs; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedPropertyArgs) {
			listener.enterNamedPropertyArgs(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedPropertyArgs) {
			listener.exitNamedPropertyArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_primary; }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIdentifierPrmrAlt) {
			listener.enterIdentifierPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIdentifierPrmrAlt) {
			listener.exitIdentifierPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLiteralPrmrAlt) {
			listener.enterLiteralPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLiteralPrmrAlt) {
			listener.exitLiteralPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstringPrmrAlt) {
			listener.enterGstringPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstringPrmrAlt) {
			listener.exitGstringPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitGstringPrmrAlt) {
			return visitor.visitGstringPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewPrmrAltContext extends PrimaryContext {
	public NEW(): TerminalNode { return this.getToken(GroovyParser.NEW, 0); }
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNewPrmrAlt) {
			listener.enterNewPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNewPrmrAlt) {
			listener.exitNewPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNewPrmrAlt) {
			return visitor.visitNewPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisPrmrAltContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(GroovyParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterThisPrmrAlt) {
			listener.enterThisPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitThisPrmrAlt) {
			listener.exitThisPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitThisPrmrAlt) {
			return visitor.visitThisPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperPrmrAltContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(GroovyParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSuperPrmrAlt) {
			listener.enterSuperPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSuperPrmrAlt) {
			listener.exitSuperPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterParenPrmrAlt) {
			listener.enterParenPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitParenPrmrAlt) {
			listener.exitParenPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClosureOrLambdaExpressionPrmrAlt) {
			listener.enterClosureOrLambdaExpressionPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClosureOrLambdaExpressionPrmrAlt) {
			listener.exitClosureOrLambdaExpressionPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterListPrmrAlt) {
			listener.enterListPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitListPrmrAlt) {
			listener.exitListPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapPrmrAlt) {
			listener.enterMapPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapPrmrAlt) {
			listener.exitMapPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBuiltInTypePrmrAlt) {
			listener.enterBuiltInTypePrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBuiltInTypePrmrAlt) {
			listener.exitBuiltInTypePrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBuiltInTypePrmrAlt) {
			return visitor.visitBuiltInTypePrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}








export class ListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(GroovyParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(GroovyParser.RBRACK, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_list; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(GroovyParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(GroovyParser.RBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_map; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_mapEntryList; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapEntryList) {
			listener.enterMapEntryList(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapEntryList) {
			listener.exitMapEntryList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public COLON(): TerminalNode { return this.getToken(GroovyParser.COLON, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_mapEntry; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapEntry) {
			listener.enterMapEntry(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapEntry) {
			listener.exitMapEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_mapEntryLabel; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapEntryLabel) {
			listener.enterMapEntryLabel(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapEntryLabel) {
			listener.exitMapEntryLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_creator; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public LBRACK(): TerminalNode { return this.getToken(GroovyParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(GroovyParser.RBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_dim; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterDim) {
			listener.enterDim(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitDim) {
			listener.exitDim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitDim) {
			return visitor.visitDim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(GroovyParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(GroovyParser.RBRACE, 0); }
	public variableInitializers(): VariableInitializersContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_anonymousInnerClassDeclaration; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnonymousInnerClassDeclaration) {
			listener.enterAnonymousInnerClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnonymousInnerClassDeclaration) {
			listener.exitAnonymousInnerClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_createdName; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(GroovyParser.LT, 0); }
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
	public GT(): TerminalNode { return this.getToken(GroovyParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GroovyParser.LPAREN, 0); }
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext | undefined {
		return this.tryGetRuleContext(0, EnhancedArgumentListInParContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_arguments; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
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
	public get ruleIndex(): number { return GroovyParser.RULE_enhancedArgumentListInPar; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedArgumentListInPar) {
			listener.enterEnhancedArgumentListInPar(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedArgumentListInPar) {
			listener.exitEnhancedArgumentListInPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return GroovyParser.RULE_enhancedArgumentListElement; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedArgumentListElement) {
			listener.enterEnhancedArgumentListElement(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedArgumentListElement) {
			listener.exitEnhancedArgumentListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnhancedArgumentListElement) {
			return visitor.visitEnhancedArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(GroovyParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public CapitalizedIdentifier(): TerminalNode { return this.getToken(GroovyParser.CapitalizedIdentifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_className; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.Identifier, 0); }
	public CapitalizedIdentifier(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CapitalizedIdentifier, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VAR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IN, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRAIT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_identifier; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltInTypeContext extends ParserRuleContext {
	public BuiltInPrimitiveType(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.BuiltInPrimitiveType, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_builtInType; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBuiltInType) {
			listener.enterBuiltInType(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBuiltInType) {
			listener.exitBuiltInType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBuiltInType) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.AS, 0); }
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ASSERT, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.BREAK, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.CONTINUE, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEF, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DEFAULT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.EXTENDS, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.FOR, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IF, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IMPLEMENTS, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IMPORT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.IN, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.INSTANCEOF, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.INTERFACE, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NATIVE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NEW, 0); }
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PACKAGE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.RETURN, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.STRICTFP, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SWITCH, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.SYNCHRONIZED, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.THROW, 0); }
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.THROWS, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRANSIENT, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRAIT, 0); }
	public THREADSAFE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.THREADSAFE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.TRY, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VAR, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VOLATILE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.WHILE, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.BooleanLiteral, 0); }
	public BuiltInPrimitiveType(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.BuiltInPrimitiveType, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.VOID, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(GroovyParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_keywords; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RparenContext extends ParserRuleContext {
	public RPAREN(): TerminalNode { return this.getToken(GroovyParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_rparen; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterRparen) {
			listener.enterRparen(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitRparen) {
			listener.exitRparen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.NL);
		} else {
			return this.getToken(GroovyParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_nls; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNls) {
			listener.enterNls(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNls) {
			listener.exitNls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
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
			return this.getTokens(GroovyParser.NL);
		} else {
			return this.getToken(GroovyParser.NL, i);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GroovyParser.SEMI);
		} else {
			return this.getToken(GroovyParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GroovyParser.RULE_sep; }
	// @Override
	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSep) {
			listener.enterSep(this);
		}
	}
	// @Override
	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSep) {
			listener.exitSep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSep) {
			return visitor.visitSep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


