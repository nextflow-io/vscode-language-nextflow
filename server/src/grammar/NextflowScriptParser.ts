// Generated from src/grammar/NextflowScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT

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

import { NextflowScriptParserListener } from "./NextflowScriptParserListener";
import { NextflowScriptParserVisitor } from "./NextflowScriptParserVisitor";
import { GroovyParser } from './GroovyParser';


export class NextflowScriptParser extends Parser {
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
	public static readonly INCLUDE = 138;
	public static readonly FROM = 139;
	public static readonly PROCESS = 140;
	public static readonly VAL = 141;
	public static readonly FILE = 142;
	public static readonly ENV = 143;
	public static readonly PATH = 144;
	public static readonly STDIN = 145;
	public static readonly TUPLE = 146;
	public static readonly STDOUT = 147;
	public static readonly WORKFLOW = 148;
	public static readonly TAKE = 149;
	public static readonly MAIN = 150;
	public static readonly EMIT = 151;
	public static readonly INPUT = 152;
	public static readonly OUTPUT = 153;
	public static readonly WHEN = 154;
	public static readonly SCRIPT = 155;
	public static readonly SHELL = 156;
	public static readonly EXEC = 157;
	public static readonly STUB = 158;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_scriptStatement = 1;
	public static readonly RULE_includeStatement = 2;
	public static readonly RULE_includeNames = 3;
	public static readonly RULE_includeName = 4;
	public static readonly RULE_processDef = 5;
	public static readonly RULE_processStatement = 6;
	public static readonly RULE_processDirective = 7;
	public static readonly RULE_processInput = 8;
	public static readonly RULE_processInputType = 9;
	public static readonly RULE_processInputVal = 10;
	public static readonly RULE_processInputEnv = 11;
	public static readonly RULE_processInputFile = 12;
	public static readonly RULE_processInputPath = 13;
	public static readonly RULE_processInputStdin = 14;
	public static readonly RULE_processInputExpr = 15;
	public static readonly RULE_processInputTuple = 16;
	public static readonly RULE_processOutput = 17;
	public static readonly RULE_processOutputType = 18;
	public static readonly RULE_processOutputVal = 19;
	public static readonly RULE_processOutputEnv = 20;
	public static readonly RULE_processOutputFile = 21;
	public static readonly RULE_processOutputPath = 22;
	public static readonly RULE_processOutputStdout = 23;
	public static readonly RULE_processOutputExpr = 24;
	public static readonly RULE_processOutputTuple = 25;
	public static readonly RULE_workflowDef = 26;
	public static readonly RULE_workflowBody = 27;
	public static readonly RULE_scriptStatements = 28;
	public static readonly RULE_packageDeclaration = 29;
	public static readonly RULE_importDeclaration = 30;
	public static readonly RULE_typeDeclaration = 31;
	public static readonly RULE_modifier = 32;
	public static readonly RULE_modifiersOpt = 33;
	public static readonly RULE_modifiers = 34;
	public static readonly RULE_classOrInterfaceModifiersOpt = 35;
	public static readonly RULE_classOrInterfaceModifiers = 36;
	public static readonly RULE_classOrInterfaceModifier = 37;
	public static readonly RULE_variableModifier = 38;
	public static readonly RULE_variableModifiersOpt = 39;
	public static readonly RULE_variableModifiers = 40;
	public static readonly RULE_typeParameters = 41;
	public static readonly RULE_typeParameter = 42;
	public static readonly RULE_typeBound = 43;
	public static readonly RULE_typeList = 44;
	public static readonly RULE_classDeclaration = 45;
	public static readonly RULE_classBody = 46;
	public static readonly RULE_enumConstants = 47;
	public static readonly RULE_enumConstant = 48;
	public static readonly RULE_classBodyDeclaration = 49;
	public static readonly RULE_memberDeclaration = 50;
	public static readonly RULE_methodDeclaration = 51;
	public static readonly RULE_compactConstructorDeclaration = 52;
	public static readonly RULE_methodName = 53;
	public static readonly RULE_returnType = 54;
	public static readonly RULE_fieldDeclaration = 55;
	public static readonly RULE_variableDeclarators = 56;
	public static readonly RULE_variableDeclarator = 57;
	public static readonly RULE_variableDeclaratorId = 58;
	public static readonly RULE_variableInitializer = 59;
	public static readonly RULE_variableInitializers = 60;
	public static readonly RULE_emptyDims = 61;
	public static readonly RULE_emptyDimsOpt = 62;
	public static readonly RULE_standardType = 63;
	public static readonly RULE_type = 64;
	public static readonly RULE_classOrInterfaceType = 65;
	public static readonly RULE_generalClassOrInterfaceType = 66;
	public static readonly RULE_standardClassOrInterfaceType = 67;
	public static readonly RULE_primitiveType = 68;
	public static readonly RULE_typeArguments = 69;
	public static readonly RULE_typeArgument = 70;
	public static readonly RULE_annotatedQualifiedClassName = 71;
	public static readonly RULE_qualifiedClassNameList = 72;
	public static readonly RULE_formalParameters = 73;
	public static readonly RULE_formalParameterList = 74;
	public static readonly RULE_thisFormalParameter = 75;
	public static readonly RULE_formalParameter = 76;
	public static readonly RULE_methodBody = 77;
	public static readonly RULE_qualifiedName = 78;
	public static readonly RULE_qualifiedNameElement = 79;
	public static readonly RULE_qualifiedNameElements = 80;
	public static readonly RULE_qualifiedClassName = 81;
	public static readonly RULE_qualifiedStandardClassName = 82;
	public static readonly RULE_literal = 83;
	public static readonly RULE_gstring = 84;
	public static readonly RULE_gstringValue = 85;
	public static readonly RULE_gstringPath = 86;
	public static readonly RULE_lambdaExpression = 87;
	public static readonly RULE_standardLambdaExpression = 88;
	public static readonly RULE_lambdaParameters = 89;
	public static readonly RULE_standardLambdaParameters = 90;
	public static readonly RULE_lambdaBody = 91;
	public static readonly RULE_closure = 92;
	public static readonly RULE_closureOrLambdaExpression = 93;
	public static readonly RULE_blockStatementsOpt = 94;
	public static readonly RULE_blockStatements = 95;
	public static readonly RULE_annotationsOpt = 96;
	public static readonly RULE_annotation = 97;
	public static readonly RULE_elementValues = 98;
	public static readonly RULE_annotationName = 99;
	public static readonly RULE_elementValuePairs = 100;
	public static readonly RULE_elementValuePair = 101;
	public static readonly RULE_elementValuePairName = 102;
	public static readonly RULE_elementValue = 103;
	public static readonly RULE_elementValueArrayInitializer = 104;
	public static readonly RULE_block = 105;
	public static readonly RULE_blockStatement = 106;
	public static readonly RULE_localVariableDeclaration = 107;
	public static readonly RULE_variableDeclaration = 108;
	public static readonly RULE_typeNamePairs = 109;
	public static readonly RULE_typeNamePair = 110;
	public static readonly RULE_variableNames = 111;
	public static readonly RULE_conditionalStatement = 112;
	public static readonly RULE_ifElseStatement = 113;
	public static readonly RULE_switchStatement = 114;
	public static readonly RULE_loopStatement = 115;
	public static readonly RULE_continueStatement = 116;
	public static readonly RULE_breakStatement = 117;
	public static readonly RULE_yieldStatement = 118;
	public static readonly RULE_tryCatchStatement = 119;
	public static readonly RULE_assertStatement = 120;
	public static readonly RULE_statement = 121;
	public static readonly RULE_catchClause = 122;
	public static readonly RULE_catchType = 123;
	public static readonly RULE_finallyBlock = 124;
	public static readonly RULE_resources = 125;
	public static readonly RULE_resourceList = 126;
	public static readonly RULE_resource = 127;
	public static readonly RULE_switchBlockStatementGroup = 128;
	public static readonly RULE_switchLabel = 129;
	public static readonly RULE_forControl = 130;
	public static readonly RULE_enhancedForControl = 131;
	public static readonly RULE_classicalForControl = 132;
	public static readonly RULE_forInit = 133;
	public static readonly RULE_forUpdate = 134;
	public static readonly RULE_castParExpression = 135;
	public static readonly RULE_parExpression = 136;
	public static readonly RULE_expressionInPar = 137;
	public static readonly RULE_expressionList = 138;
	public static readonly RULE_expressionListElement = 139;
	public static readonly RULE_enhancedStatementExpression = 140;
	public static readonly RULE_statementExpression = 141;
	public static readonly RULE_postfixExpression = 142;
	public static readonly RULE_switchExpression = 143;
	public static readonly RULE_switchBlockStatementExpressionGroup = 144;
	public static readonly RULE_switchExpressionLabel = 145;
	public static readonly RULE_expression = 146;
	public static readonly RULE_castOperandExpression = 147;
	public static readonly RULE_commandExpression = 148;
	public static readonly RULE_commandArgument = 149;
	public static readonly RULE_pathExpression = 150;
	public static readonly RULE_pathElement = 151;
	public static readonly RULE_namePart = 152;
	public static readonly RULE_dynamicMemberName = 153;
	public static readonly RULE_indexPropertyArgs = 154;
	public static readonly RULE_namedPropertyArgs = 155;
	public static readonly RULE_primary = 156;
	public static readonly RULE_namedPropertyArgPrimary = 157;
	public static readonly RULE_namedArgPrimary = 158;
	public static readonly RULE_commandPrimary = 159;
	public static readonly RULE_list = 160;
	public static readonly RULE_map = 161;
	public static readonly RULE_mapEntryList = 162;
	public static readonly RULE_namedPropertyArgList = 163;
	public static readonly RULE_mapEntry = 164;
	public static readonly RULE_namedPropertyArg = 165;
	public static readonly RULE_namedArg = 166;
	public static readonly RULE_mapEntryLabel = 167;
	public static readonly RULE_namedPropertyArgLabel = 168;
	public static readonly RULE_namedArgLabel = 169;
	public static readonly RULE_creator = 170;
	public static readonly RULE_dim = 171;
	public static readonly RULE_arrayInitializer = 172;
	public static readonly RULE_anonymousInnerClassDeclaration = 173;
	public static readonly RULE_createdName = 174;
	public static readonly RULE_nonWildcardTypeArguments = 175;
	public static readonly RULE_typeArgumentsOrDiamond = 176;
	public static readonly RULE_arguments = 177;
	public static readonly RULE_argumentList = 178;
	public static readonly RULE_enhancedArgumentListInPar = 179;
	public static readonly RULE_firstArgumentListElement = 180;
	public static readonly RULE_argumentListElement = 181;
	public static readonly RULE_enhancedArgumentListElement = 182;
	public static readonly RULE_stringLiteral = 183;
	public static readonly RULE_className = 184;
	public static readonly RULE_identifier = 185;
	public static readonly RULE_builtInType = 186;
	public static readonly RULE_keywords = 187;
	public static readonly RULE_rparen = 188;
	public static readonly RULE_nls = 189;
	public static readonly RULE_sep = 190;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "scriptStatement", "includeStatement", "includeNames", 
		"includeName", "processDef", "processStatement", "processDirective", "processInput", 
		"processInputType", "processInputVal", "processInputEnv", "processInputFile", 
		"processInputPath", "processInputStdin", "processInputExpr", "processInputTuple", 
		"processOutput", "processOutputType", "processOutputVal", "processOutputEnv", 
		"processOutputFile", "processOutputPath", "processOutputStdout", "processOutputExpr", 
		"processOutputTuple", "workflowDef", "workflowBody", "scriptStatements", 
		"packageDeclaration", "importDeclaration", "typeDeclaration", "modifier", 
		"modifiersOpt", "modifiers", "classOrInterfaceModifiersOpt", "classOrInterfaceModifiers", 
		"classOrInterfaceModifier", "variableModifier", "variableModifiersOpt", 
		"variableModifiers", "typeParameters", "typeParameter", "typeBound", "typeList", 
		"classDeclaration", "classBody", "enumConstants", "enumConstant", "classBodyDeclaration", 
		"memberDeclaration", "methodDeclaration", "compactConstructorDeclaration", 
		"methodName", "returnType", "fieldDeclaration", "variableDeclarators", 
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
		"breakStatement", "yieldStatement", "tryCatchStatement", "assertStatement", 
		"statement", "catchClause", "catchType", "finallyBlock", "resources", 
		"resourceList", "resource", "switchBlockStatementGroup", "switchLabel", 
		"forControl", "enhancedForControl", "classicalForControl", "forInit", 
		"forUpdate", "castParExpression", "parExpression", "expressionInPar", 
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
		undefined, undefined, undefined, undefined, undefined, "'include'", "'from'", 
		"'process'", "'val'", "'file'", "'env'", "'path'", "'stdin'", "'tuple'", 
		"'stdout'", "'workflow'", "'take:'", "'main:'", "'emit:'", "'input:'", 
		"'output:'", "'when:'", "'script:'", "'shell:'", "'exec:'", "'stub:'",
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
		"INCLUDE", "FROM", "PROCESS", "VAL", "FILE", "ENV", "PATH", "STDIN", "TUPLE", 
		"STDOUT", "WORKFLOW", "TAKE", "MAIN", "EMIT", "INPUT", "OUTPUT", "WHEN", 
		"SCRIPT", "SHELL", "EXEC", "STUB",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(NextflowScriptParser._LITERAL_NAMES, NextflowScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return NextflowScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "NextflowScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return NextflowScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return NextflowScriptParser._serializedATN; }

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
		this._interp = new ParserATNSimulator(NextflowScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NextflowScriptParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.StringLiteral) | (1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.YIELD) | (1 << NextflowScriptParser.CLASS) | (1 << NextflowScriptParser.DEFAULT) | (1 << NextflowScriptParser.ENUM) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowScriptParser.IMPORT - 34)) | (1 << (NextflowScriptParser.INTERFACE - 34)) | (1 << (NextflowScriptParser.NATIVE - 34)) | (1 << (NextflowScriptParser.NON_SEALED - 34)) | (1 << (NextflowScriptParser.PACKAGE - 34)) | (1 << (NextflowScriptParser.PERMITS - 34)) | (1 << (NextflowScriptParser.PRIVATE - 34)) | (1 << (NextflowScriptParser.PROTECTED - 34)) | (1 << (NextflowScriptParser.PUBLIC - 34)) | (1 << (NextflowScriptParser.RECORD - 34)) | (1 << (NextflowScriptParser.SEALED - 34)) | (1 << (NextflowScriptParser.STATIC - 34)) | (1 << (NextflowScriptParser.STRICTFP - 34)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 34)) | (1 << (NextflowScriptParser.TRANSIENT - 34)) | (1 << (NextflowScriptParser.VOID - 34)) | (1 << (NextflowScriptParser.VOLATILE - 34)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (NextflowScriptParser.LBRACK - 90)) | (1 << (NextflowScriptParser.LT - 90)) | (1 << (NextflowScriptParser.QUESTION - 90)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 130)) | (1 << (NextflowScriptParser.Identifier - 130)) | (1 << (NextflowScriptParser.AT - 130)) | (1 << (NextflowScriptParser.INCLUDE - 130)) | (1 << (NextflowScriptParser.PROCESS - 130)) | (1 << (NextflowScriptParser.WORKFLOW - 130)))) !== 0)) {
				{
				{
				this.state = 382;
				this.scriptStatement();
				}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 388;
			this.match(NextflowScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, NextflowScriptParser.RULE_scriptStatement);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.INCLUDE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this.includeStatement();
				}
				break;
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.CLASS:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.ENUM:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.IMPORT:
			case NextflowScriptParser.INTERFACE:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.VOID:
			case NextflowScriptParser.VOLATILE:
			case NextflowScriptParser.LBRACK:
			case NextflowScriptParser.LT:
			case NextflowScriptParser.QUESTION:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 391;
				this.methodDeclaration(1,9);
				}
				break;
			case NextflowScriptParser.PROCESS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.processDef();
				}
				break;
			case NextflowScriptParser.WORKFLOW:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.workflowDef();
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
	public includeStatement(): IncludeStatementContext {
		let _localctx: IncludeStatementContext = new IncludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, NextflowScriptParser.RULE_includeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(NextflowScriptParser.INCLUDE);
			this.state = 397;
			this.includeNames();
			this.state = 398;
			this.match(NextflowScriptParser.FROM);
			this.state = 399;
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
	public includeNames(): IncludeNamesContext {
		let _localctx: IncludeNamesContext = new IncludeNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, NextflowScriptParser.RULE_includeNames);
		let _la: number;
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.includeName();
				}
				break;
			case NextflowScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.match(NextflowScriptParser.LBRACE);
				this.state = 403;
				this.includeName();
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NextflowScriptParser.COMMA) {
					{
					{
					this.state = 404;
					this.match(NextflowScriptParser.COMMA);
					this.state = 405;
					this.includeName();
					}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 411;
				this.match(NextflowScriptParser.RBRACE);
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
	public includeName(): IncludeNameContext {
		let _localctx: IncludeNameContext = new IncludeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, NextflowScriptParser.RULE_includeName);
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 415;
				this.match(NextflowScriptParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 416;
				this.match(NextflowScriptParser.Identifier);
				this.state = 417;
				this.match(NextflowScriptParser.AS);
				this.state = 418;
				this.match(NextflowScriptParser.Identifier);
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
	public processDef(): ProcessDefContext {
		let _localctx: ProcessDefContext = new ProcessDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, NextflowScriptParser.RULE_processDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(NextflowScriptParser.PROCESS);
			this.state = 422;
			this.match(NextflowScriptParser.Identifier);
			this.state = 423;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (NextflowScriptParser.Identifier - 131)) | (1 << (NextflowScriptParser.INPUT - 131)) | (1 << (NextflowScriptParser.OUTPUT - 131)) | (1 << (NextflowScriptParser.WHEN - 131)) | (1 << (NextflowScriptParser.SCRIPT - 131)) | (1 << (NextflowScriptParser.SHELL - 131)) | (1 << (NextflowScriptParser.EXEC - 131)) | (1 << (NextflowScriptParser.STUB - 131)))) !== 0)) {
				{
				{
				this.state = 424;
				this.processStatement();
				}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 430;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processStatement(): ProcessStatementContext {
		let _localctx: ProcessStatementContext = new ProcessStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, NextflowScriptParser.RULE_processStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 432;
				this.processDirective();
				}
				break;
			case NextflowScriptParser.INPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.match(NextflowScriptParser.INPUT);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 434;
					this.processInput();
					}
					}
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (NextflowScriptParser.SUB - 111)) | (1 << (NextflowScriptParser.VAL - 111)) | (1 << (NextflowScriptParser.FILE - 111)))) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & ((1 << (NextflowScriptParser.ENV - 143)) | (1 << (NextflowScriptParser.PATH - 143)) | (1 << (NextflowScriptParser.STDIN - 143)) | (1 << (NextflowScriptParser.TUPLE - 143)))) !== 0));
				}
				break;
			case NextflowScriptParser.OUTPUT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 439;
				this.match(NextflowScriptParser.OUTPUT);
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 440;
					this.processOutput();
					}
					}
					this.state = 443;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (NextflowScriptParser.SUB - 111)) | (1 << (NextflowScriptParser.VAL - 111)) | (1 << (NextflowScriptParser.FILE - 111)))) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & ((1 << (NextflowScriptParser.ENV - 143)) | (1 << (NextflowScriptParser.PATH - 143)) | (1 << (NextflowScriptParser.TUPLE - 143)) | (1 << (NextflowScriptParser.STDOUT - 143)))) !== 0));
				}
				break;
			case NextflowScriptParser.WHEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 445;
				this.match(NextflowScriptParser.WHEN);
				this.state = 446;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.SCRIPT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 447;
				this.match(NextflowScriptParser.SCRIPT);
				this.state = 449;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 448;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 451;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case NextflowScriptParser.SHELL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 453;
				this.match(NextflowScriptParser.SHELL);
				this.state = 455;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 454;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 457;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case NextflowScriptParser.EXEC:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 459;
				this.match(NextflowScriptParser.EXEC);
				this.state = 461;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 460;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 463;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case NextflowScriptParser.STUB:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 465;
				this.match(NextflowScriptParser.STUB);
				this.state = 467;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 466;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 469;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public processDirective(): ProcessDirectiveContext {
		let _localctx: ProcessDirectiveContext = new ProcessDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, NextflowScriptParser.RULE_processDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(NextflowScriptParser.Identifier);
			this.state = 474;
			this.expression(0);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 475;
				this.match(NextflowScriptParser.COMMA);
				this.state = 476;
				this.match(NextflowScriptParser.Identifier);
				this.state = 477;
				this.match(NextflowScriptParser.COLON);
				this.state = 478;
				this.expression(0);
				}
				}
				this.state = 483;
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
	public processInput(): ProcessInputContext {
		let _localctx: ProcessInputContext = new ProcessInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, NextflowScriptParser.RULE_processInput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.SUB:
			case NextflowScriptParser.VAL:
			case NextflowScriptParser.FILE:
			case NextflowScriptParser.ENV:
			case NextflowScriptParser.PATH:
			case NextflowScriptParser.STDIN:
				{
				this.state = 484;
				this.processInputType();
				}
				break;
			case NextflowScriptParser.TUPLE:
				{
				this.state = 485;
				this.processInputExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 488;
				this.match(NextflowScriptParser.COMMA);
				this.state = 489;
				this.match(NextflowScriptParser.Identifier);
				this.state = 490;
				this.match(NextflowScriptParser.COLON);
				this.state = 491;
				this.expression(0);
				}
				}
				this.state = 496;
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
	public processInputType(): ProcessInputTypeContext {
		let _localctx: ProcessInputTypeContext = new ProcessInputTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, NextflowScriptParser.RULE_processInputType);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.VAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.processInputVal();
				}
				break;
			case NextflowScriptParser.ENV:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.processInputEnv();
				}
				break;
			case NextflowScriptParser.FILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
				this.processInputFile();
				}
				break;
			case NextflowScriptParser.PATH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 500;
				this.processInputPath();
				}
				break;
			case NextflowScriptParser.SUB:
			case NextflowScriptParser.STDIN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 501;
				this.processInputStdin();
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
	public processInputVal(): ProcessInputValContext {
		let _localctx: ProcessInputValContext = new ProcessInputValContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, NextflowScriptParser.RULE_processInputVal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(NextflowScriptParser.VAL);
			this.state = 505;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 506;
			this.match(NextflowScriptParser.Identifier);
			this.state = 507;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processInputEnv(): ProcessInputEnvContext {
		let _localctx: ProcessInputEnvContext = new ProcessInputEnvContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, NextflowScriptParser.RULE_processInputEnv);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(NextflowScriptParser.ENV);
			this.state = 510;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 511;
			this.match(NextflowScriptParser.Identifier);
			this.state = 512;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processInputFile(): ProcessInputFileContext {
		let _localctx: ProcessInputFileContext = new ProcessInputFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, NextflowScriptParser.RULE_processInputFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(NextflowScriptParser.FILE);
			this.state = 515;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 516;
			this.expression(0);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 517;
				this.match(NextflowScriptParser.COMMA);
				this.state = 518;
				this.match(NextflowScriptParser.Identifier);
				this.state = 519;
				this.match(NextflowScriptParser.COLON);
				this.state = 520;
				this.expression(0);
				}
				}
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 526;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processInputPath(): ProcessInputPathContext {
		let _localctx: ProcessInputPathContext = new ProcessInputPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, NextflowScriptParser.RULE_processInputPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.match(NextflowScriptParser.PATH);
			this.state = 529;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 530;
			this.expression(0);
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 531;
				this.match(NextflowScriptParser.COMMA);
				this.state = 532;
				this.match(NextflowScriptParser.Identifier);
				this.state = 533;
				this.match(NextflowScriptParser.COLON);
				this.state = 534;
				this.expression(0);
				}
				}
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 540;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processInputStdin(): ProcessInputStdinContext {
		let _localctx: ProcessInputStdinContext = new ProcessInputStdinContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, NextflowScriptParser.RULE_processInputStdin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.SUB || _la === NextflowScriptParser.STDIN)) {
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
	public processInputExpr(): ProcessInputExprContext {
		let _localctx: ProcessInputExprContext = new ProcessInputExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, NextflowScriptParser.RULE_processInputExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.processInputTuple();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processInputTuple(): ProcessInputTupleContext {
		let _localctx: ProcessInputTupleContext = new ProcessInputTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, NextflowScriptParser.RULE_processInputTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(NextflowScriptParser.TUPLE);
			this.state = 547;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 548;
			this.processInputType();
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 549;
				this.match(NextflowScriptParser.COMMA);
				this.state = 550;
				this.processInputType();
				}
				}
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 556;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processOutput(): ProcessOutputContext {
		let _localctx: ProcessOutputContext = new ProcessOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, NextflowScriptParser.RULE_processOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.SUB:
			case NextflowScriptParser.VAL:
			case NextflowScriptParser.FILE:
			case NextflowScriptParser.ENV:
			case NextflowScriptParser.PATH:
			case NextflowScriptParser.STDOUT:
				{
				this.state = 558;
				this.processOutputType();
				}
				break;
			case NextflowScriptParser.TUPLE:
				{
				this.state = 559;
				this.processOutputExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 562;
				this.match(NextflowScriptParser.COMMA);
				this.state = 563;
				this.match(NextflowScriptParser.Identifier);
				this.state = 564;
				this.match(NextflowScriptParser.COLON);
				this.state = 565;
				this.expression(0);
				}
				}
				this.state = 570;
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
	public processOutputType(): ProcessOutputTypeContext {
		let _localctx: ProcessOutputTypeContext = new ProcessOutputTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, NextflowScriptParser.RULE_processOutputType);
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.VAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this.processOutputVal();
				}
				break;
			case NextflowScriptParser.ENV:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 572;
				this.processOutputEnv();
				}
				break;
			case NextflowScriptParser.FILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 573;
				this.processOutputFile();
				}
				break;
			case NextflowScriptParser.PATH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 574;
				this.processOutputPath();
				}
				break;
			case NextflowScriptParser.SUB:
			case NextflowScriptParser.STDOUT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 575;
				this.processOutputStdout();
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
	public processOutputVal(): ProcessOutputValContext {
		let _localctx: ProcessOutputValContext = new ProcessOutputValContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, NextflowScriptParser.RULE_processOutputVal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.match(NextflowScriptParser.VAL);
			this.state = 579;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 580;
			this.match(NextflowScriptParser.Identifier);
			this.state = 581;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processOutputEnv(): ProcessOutputEnvContext {
		let _localctx: ProcessOutputEnvContext = new ProcessOutputEnvContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, NextflowScriptParser.RULE_processOutputEnv);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.match(NextflowScriptParser.ENV);
			this.state = 584;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 585;
			this.match(NextflowScriptParser.Identifier);
			this.state = 586;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processOutputFile(): ProcessOutputFileContext {
		let _localctx: ProcessOutputFileContext = new ProcessOutputFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, NextflowScriptParser.RULE_processOutputFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(NextflowScriptParser.FILE);
			this.state = 589;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 590;
			this.expression(0);
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 591;
				this.match(NextflowScriptParser.COMMA);
				this.state = 592;
				this.match(NextflowScriptParser.Identifier);
				this.state = 593;
				this.match(NextflowScriptParser.COLON);
				this.state = 594;
				this.expression(0);
				}
				}
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 600;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processOutputPath(): ProcessOutputPathContext {
		let _localctx: ProcessOutputPathContext = new ProcessOutputPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, NextflowScriptParser.RULE_processOutputPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(NextflowScriptParser.PATH);
			this.state = 603;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 604;
			this.expression(0);
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 605;
				this.match(NextflowScriptParser.COMMA);
				this.state = 606;
				this.match(NextflowScriptParser.Identifier);
				this.state = 607;
				this.match(NextflowScriptParser.COLON);
				this.state = 608;
				this.expression(0);
				}
				}
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 614;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processOutputStdout(): ProcessOutputStdoutContext {
		let _localctx: ProcessOutputStdoutContext = new ProcessOutputStdoutContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, NextflowScriptParser.RULE_processOutputStdout);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.SUB || _la === NextflowScriptParser.STDOUT)) {
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
	public processOutputExpr(): ProcessOutputExprContext {
		let _localctx: ProcessOutputExprContext = new ProcessOutputExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, NextflowScriptParser.RULE_processOutputExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.processOutputTuple();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processOutputTuple(): ProcessOutputTupleContext {
		let _localctx: ProcessOutputTupleContext = new ProcessOutputTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, NextflowScriptParser.RULE_processOutputTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(NextflowScriptParser.TUPLE);
			this.state = 621;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 622;
			this.processOutputType();
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 623;
				this.match(NextflowScriptParser.COMMA);
				this.state = 624;
				this.processOutputType();
				}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 630;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public workflowDef(): WorkflowDefContext {
		let _localctx: WorkflowDefContext = new WorkflowDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, NextflowScriptParser.RULE_workflowDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(NextflowScriptParser.WORKFLOW);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.Identifier) {
				{
				this.state = 633;
				this.match(NextflowScriptParser.Identifier);
				}
			}

			this.state = 636;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 637;
				this.workflowBody();
				}
				break;

			case 2:
				{
				this.state = 641;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 638;
						this.statement();
						}
						}
					}
					this.state = 643;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				}
				break;
			}
			this.state = 646;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public workflowBody(): WorkflowBodyContext {
		let _localctx: WorkflowBodyContext = new WorkflowBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, NextflowScriptParser.RULE_workflowBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.TAKE) {
				{
				this.state = 648;
				this.match(NextflowScriptParser.TAKE);
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 649;
					this.match(NextflowScriptParser.Identifier);
					}
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === NextflowScriptParser.Identifier);
				}
			}

			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.MAIN) {
				{
				this.state = 656;
				this.match(NextflowScriptParser.MAIN);
				this.state = 658;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 657;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 660;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
			}

			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.EMIT) {
				{
				this.state = 664;
				this.match(NextflowScriptParser.EMIT);
				this.state = 666;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 665;
						this.expression(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 668;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public scriptStatements(): ScriptStatementsContext {
		let _localctx: ScriptStatementsContext = new ScriptStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, NextflowScriptParser.RULE_scriptStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.scriptStatement();
			this.state = 678;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 673;
					this.sep();
					this.state = 674;
					this.scriptStatement();
					}
					}
				}
				this.state = 680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 681;
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
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, NextflowScriptParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.annotationsOpt();
			this.state = 685;
			this.match(NextflowScriptParser.PACKAGE);
			this.state = 686;
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
		this.enterRule(_localctx, 60, NextflowScriptParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.annotationsOpt();
			this.state = 689;
			this.match(NextflowScriptParser.IMPORT);
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.STATIC) {
				{
				this.state = 690;
				this.match(NextflowScriptParser.STATIC);
				}
			}

			this.state = 693;
			this.qualifiedName();
			this.state = 698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.DOT:
				{
				this.state = 694;
				this.match(NextflowScriptParser.DOT);
				this.state = 695;
				this.match(NextflowScriptParser.MUL);
				}
				break;
			case NextflowScriptParser.AS:
				{
				this.state = 696;
				this.match(NextflowScriptParser.AS);
				this.state = 697;
				_localctx._alias = this.identifier();
				}
				break;
			case NextflowScriptParser.EOF:
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
		this.enterRule(_localctx, 62, NextflowScriptParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.classOrInterfaceModifiersOpt();
			this.state = 701;
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
		this.enterRule(_localctx, 64, NextflowScriptParser.RULE_modifier);
		let _la: number;
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.classOrInterfaceModifier();
				}
				break;
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.VOLATILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === NextflowScriptParser.DEF || _la === NextflowScriptParser.VAR || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (NextflowScriptParser.NATIVE - 37)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 37)) | (1 << (NextflowScriptParser.TRANSIENT - 37)) | (1 << (NextflowScriptParser.VOLATILE - 37)))) !== 0))) {
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
		this.enterRule(_localctx, 66, NextflowScriptParser.RULE_modifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 707;
				this.modifiers();
				this.state = 708;
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
		this.enterRule(_localctx, 68, NextflowScriptParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.modifier();
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 713;
					this.nls();
					this.state = 714;
					this.modifier();
					}
					}
				}
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
		this.enterRule(_localctx, 70, NextflowScriptParser.RULE_classOrInterfaceModifiersOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 721;
				this.classOrInterfaceModifiers();
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NextflowScriptParser.NL) {
					{
					{
					this.state = 722;
					this.match(NextflowScriptParser.NL);
					}
					}
					this.state = 727;
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
		this.enterRule(_localctx, 72, NextflowScriptParser.RULE_classOrInterfaceModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.classOrInterfaceModifier();
			this.state = 736;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 731;
					this.nls();
					this.state = 732;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 738;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
		this.enterRule(_localctx, 74, NextflowScriptParser.RULE_classOrInterfaceModifier);
		let _la: number;
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 739;
				this.annotation();
				}
				break;
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 740;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.DEFAULT) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (NextflowScriptParser.NON_SEALED - 39)) | (1 << (NextflowScriptParser.PRIVATE - 39)) | (1 << (NextflowScriptParser.PROTECTED - 39)) | (1 << (NextflowScriptParser.PUBLIC - 39)) | (1 << (NextflowScriptParser.SEALED - 39)) | (1 << (NextflowScriptParser.STATIC - 39)) | (1 << (NextflowScriptParser.STRICTFP - 39)))) !== 0))) {
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
		this.enterRule(_localctx, 76, NextflowScriptParser.RULE_variableModifier);
		let _la: number;
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 743;
				this.annotation();
				}
				break;
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 744;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (NextflowScriptParser.PRIVATE - 42)) | (1 << (NextflowScriptParser.PROTECTED - 42)) | (1 << (NextflowScriptParser.PUBLIC - 42)) | (1 << (NextflowScriptParser.STATIC - 42)) | (1 << (NextflowScriptParser.STRICTFP - 42)))) !== 0))) {
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
		this.enterRule(_localctx, 78, NextflowScriptParser.RULE_variableModifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 747;
				this.variableModifiers();
				this.state = 748;
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
		this.enterRule(_localctx, 80, NextflowScriptParser.RULE_variableModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.variableModifier();
			this.state = 758;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 753;
					this.nls();
					this.state = 754;
					this.variableModifier();
					}
					}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
		this.enterRule(_localctx, 82, NextflowScriptParser.RULE_typeParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(NextflowScriptParser.LT);
			this.state = 762;
			this.nls();
			this.state = 763;
			this.typeParameter();
			this.state = 770;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 764;
					this.match(NextflowScriptParser.COMMA);
					this.state = 765;
					this.nls();
					this.state = 766;
					this.typeParameter();
					}
					}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 773;
			this.nls();
			this.state = 774;
			this.match(NextflowScriptParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 84, NextflowScriptParser.RULE_typeParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.annotationsOpt();
			this.state = 777;
			this.className();
			this.state = 782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 778;
				this.match(NextflowScriptParser.EXTENDS);
				this.state = 779;
				this.nls();
				this.state = 780;
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
		this.enterRule(_localctx, 86, NextflowScriptParser.RULE_typeBound);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.type();
			this.state = 791;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 785;
					this.match(NextflowScriptParser.BITAND);
					this.state = 786;
					this.nls();
					this.state = 787;
					this.type();
					}
					}
				}
				this.state = 793;
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, NextflowScriptParser.RULE_typeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.type();
			this.state = 801;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 795;
					this.match(NextflowScriptParser.COMMA);
					this.state = 796;
					this.nls();
					this.state = 797;
					this.type();
					}
					}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
		this.enterRule(_localctx, 90, NextflowScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.CLASS:
				{
				this.state = 804;
				this.match(NextflowScriptParser.CLASS);
				 _localctx.t =  0; 
				}
				break;
			case NextflowScriptParser.INTERFACE:
				{
				this.state = 806;
				this.match(NextflowScriptParser.INTERFACE);
				 _localctx.t =  1; 
				}
				break;
			case NextflowScriptParser.ENUM:
				{
				this.state = 808;
				this.match(NextflowScriptParser.ENUM);
				 _localctx.t =  2; 
				}
				break;
			case NextflowScriptParser.AT:
				{
				this.state = 810;
				this.match(NextflowScriptParser.AT);
				this.state = 811;
				this.match(NextflowScriptParser.INTERFACE);
				 _localctx.t =  3; 
				}
				break;
			case NextflowScriptParser.TRAIT:
				{
				this.state = 813;
				this.match(NextflowScriptParser.TRAIT);
				 _localctx.t =  4; 
				}
				break;
			case NextflowScriptParser.RECORD:
				{
				this.state = 815;
				this.match(NextflowScriptParser.RECORD);
				 _localctx.t =  5; 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 819;
			this.identifier();
			this.state = 823;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 820;
				this.nls();
				this.state = 821;
				this.typeParameters();
				}
				break;
			}
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 825;
				this.nls();
				this.state = 826;
				this.formalParameters();
				}
				break;
			}
			this.state = 835;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 830;
				this.nls();
				this.state = 831;
				this.match(NextflowScriptParser.EXTENDS);
				this.state = 832;
				this.nls();
				this.state = 833;
				_localctx._scs = this.typeList();
				}
				break;
			}
			this.state = 842;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 837;
				this.nls();
				this.state = 838;
				this.match(NextflowScriptParser.IMPLEMENTS);
				this.state = 839;
				this.nls();
				this.state = 840;
				_localctx._is = this.typeList();
				}
				break;
			}
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 844;
				this.nls();
				this.state = 845;
				this.match(NextflowScriptParser.PERMITS);
				this.state = 846;
				this.nls();
				this.state = 847;
				_localctx._ps = this.typeList();
				}
				break;
			}
			this.state = 851;
			this.nls();
			this.state = 852;
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
		this.enterRule(_localctx, 92, NextflowScriptParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 855;
			this.nls();
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 856;
				if (!( 2 == _localctx.t )) {
					throw this.createFailedPredicateException(" 2 == $t ");
				}
				this.state = 857;
				this.enumConstants();
				this.state = 861;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 858;
					this.nls();
					this.state = 859;
					this.match(NextflowScriptParser.COMMA);
					}
					break;
				}
				this.state = 864;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 863;
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
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.StringLiteral) | (1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.YIELD) | (1 << NextflowScriptParser.CLASS) | (1 << NextflowScriptParser.DEFAULT) | (1 << NextflowScriptParser.ENUM) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowScriptParser.IMPORT - 34)) | (1 << (NextflowScriptParser.INTERFACE - 34)) | (1 << (NextflowScriptParser.NATIVE - 34)) | (1 << (NextflowScriptParser.NON_SEALED - 34)) | (1 << (NextflowScriptParser.PACKAGE - 34)) | (1 << (NextflowScriptParser.PERMITS - 34)) | (1 << (NextflowScriptParser.PRIVATE - 34)) | (1 << (NextflowScriptParser.PROTECTED - 34)) | (1 << (NextflowScriptParser.PUBLIC - 34)) | (1 << (NextflowScriptParser.RECORD - 34)) | (1 << (NextflowScriptParser.SEALED - 34)) | (1 << (NextflowScriptParser.STATIC - 34)) | (1 << (NextflowScriptParser.STRICTFP - 34)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 34)) | (1 << (NextflowScriptParser.TRANSIENT - 34)) | (1 << (NextflowScriptParser.VOID - 34)) | (1 << (NextflowScriptParser.VOLATILE - 34)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (NextflowScriptParser.LBRACE - 88)) | (1 << (NextflowScriptParser.LBRACK - 88)) | (1 << (NextflowScriptParser.LT - 88)) | (1 << (NextflowScriptParser.QUESTION - 88)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 130)) | (1 << (NextflowScriptParser.Identifier - 130)) | (1 << (NextflowScriptParser.AT - 130)))) !== 0)) {
				{
				this.state = 869;
				this.classBodyDeclaration(_localctx.t);
				this.state = 875;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 870;
						this.sep();
						this.state = 871;
						this.classBodyDeclaration(_localctx.t);
						}
						}
					}
					this.state = 877;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				}
				}
			}

			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 880;
				this.sep();
				}
			}

			this.state = 883;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 94, NextflowScriptParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.enumConstant();
			this.state = 893;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 886;
					this.nls();
					this.state = 887;
					this.match(NextflowScriptParser.COMMA);
					this.state = 888;
					this.nls();
					this.state = 889;
					this.enumConstant();
					}
					}
				}
				this.state = 895;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
		this.enterRule(_localctx, 96, NextflowScriptParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 896;
			this.annotationsOpt();
			this.state = 897;
			this.identifier();
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 898;
				this.arguments();
				}
				break;
			}
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 901;
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
		this.enterRule(_localctx, 98, NextflowScriptParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 910;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowScriptParser.STATIC) {
					{
					this.state = 904;
					this.match(NextflowScriptParser.STATIC);
					this.state = 905;
					this.nls();
					}
				}

				this.state = 908;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 909;
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
		this.enterRule(_localctx, 100, NextflowScriptParser.RULE_memberDeclaration);
		try {
			this.state = 919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 912;
				this.methodDeclaration(0, _localctx.t);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 913;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 914;
				this.modifiersOpt();
				this.state = 917;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 915;
					this.classDeclaration();
					}
					break;

				case 2:
					{
					this.state = 916;
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
		this.enterRule(_localctx, 102, NextflowScriptParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
			this.modifiersOpt();
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.LT) {
				{
				this.state = 922;
				this.typeParameters();
				}
			}

			this.state = 928;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this.returnType(_localctx.ct);
				this.state = 926;
				this.nls();
				}
				break;
			}
			this.state = 930;
			this.methodName();
			this.state = 931;
			this.formalParameters();
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 932;
				this.match(NextflowScriptParser.DEFAULT);
				this.state = 933;
				this.nls();
				this.state = 934;
				this.elementValue();
				}
				break;

			case 2:
				{
				this.state = 941;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 936;
					this.nls();
					this.state = 937;
					this.match(NextflowScriptParser.THROWS);
					this.state = 938;
					this.nls();
					this.state = 939;
					this.qualifiedClassNameList();
					}
					break;
				}
				this.state = 946;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 943;
					this.nls();
					this.state = 944;
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
		this.enterRule(_localctx, 104, NextflowScriptParser.RULE_compactConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.methodName();
			this.state = 951;
			this.nls();
			this.state = 952;
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
		this.enterRule(_localctx, 106, NextflowScriptParser.RULE_methodName);
		try {
			this.state = 956;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 954;
				this.identifier();
				}
				break;
			case NextflowScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 955;
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
		this.enterRule(_localctx, 108, NextflowScriptParser.RULE_returnType);
		try {
			this.state = 960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 958;
				this.standardType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 959;
				this.match(NextflowScriptParser.VOID);
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
		this.enterRule(_localctx, 110, NextflowScriptParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
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
		this.enterRule(_localctx, 112, NextflowScriptParser.RULE_variableDeclarators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.variableDeclarator();
			this.state = 971;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 965;
					this.match(NextflowScriptParser.COMMA);
					this.state = 966;
					this.nls();
					this.state = 967;
					this.variableDeclarator();
					}
					}
				}
				this.state = 973;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
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
		this.enterRule(_localctx, 114, NextflowScriptParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 974;
			this.variableDeclaratorId();
			this.state = 980;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 975;
				this.nls();
				this.state = 976;
				this.match(NextflowScriptParser.ASSIGN);
				this.state = 977;
				this.nls();
				this.state = 978;
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
		this.enterRule(_localctx, 116, NextflowScriptParser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
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
		this.enterRule(_localctx, 118, NextflowScriptParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
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
		this.enterRule(_localctx, 120, NextflowScriptParser.RULE_variableInitializers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 986;
			this.variableInitializer();
			this.state = 994;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 987;
					this.nls();
					this.state = 988;
					this.match(NextflowScriptParser.COMMA);
					this.state = 989;
					this.nls();
					this.state = 990;
					this.variableInitializer();
					}
					}
				}
				this.state = 996;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			this.state = 997;
			this.nls();
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 998;
				this.match(NextflowScriptParser.COMMA);
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
		this.enterRule(_localctx, 122, NextflowScriptParser.RULE_emptyDims);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1001;
					this.annotationsOpt();
					this.state = 1002;
					this.match(NextflowScriptParser.LBRACK);
					this.state = 1003;
					this.match(NextflowScriptParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
		this.enterRule(_localctx, 124, NextflowScriptParser.RULE_emptyDimsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 1009;
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
		this.enterRule(_localctx, 126, NextflowScriptParser.RULE_standardType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.annotationsOpt();
			this.state = 1015;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.BuiltInPrimitiveType:
				{
				this.state = 1013;
				this.primitiveType();
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 1014;
				this.standardClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1017;
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
		this.enterRule(_localctx, 128, NextflowScriptParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.annotationsOpt();
			this.state = 1025;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.VOID:
				{
				this.state = 1022;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NextflowScriptParser.BuiltInPrimitiveType:
					{
					this.state = 1020;
					this.primitiveType();
					}
					break;
				case NextflowScriptParser.VOID:
					{
					this.state = 1021;
					this.match(NextflowScriptParser.VOID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 1024;
				this.generalClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1027;
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
		this.enterRule(_localctx, 130, NextflowScriptParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 1029;
				this.qualifiedClassName();
				}
				break;

			case 2:
				{
				this.state = 1030;
				this.qualifiedStandardClassName();
				}
				break;
			}
			this.state = 1034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.LT) {
				{
				this.state = 1033;
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
		this.enterRule(_localctx, 132, NextflowScriptParser.RULE_generalClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.qualifiedClassName();
			this.state = 1038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 1037;
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
		this.enterRule(_localctx, 134, NextflowScriptParser.RULE_standardClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.qualifiedStandardClassName();
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 1041;
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
		this.enterRule(_localctx, 136, NextflowScriptParser.RULE_primitiveType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(NextflowScriptParser.BuiltInPrimitiveType);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 138, NextflowScriptParser.RULE_typeArguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.match(NextflowScriptParser.LT);
			this.state = 1047;
			this.nls();
			this.state = 1048;
			this.typeArgument();
			this.state = 1055;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1049;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1050;
					this.nls();
					this.state = 1051;
					this.typeArgument();
					}
					}
				}
				this.state = 1057;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 1058;
			this.nls();
			this.state = 1059;
			this.match(NextflowScriptParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, NextflowScriptParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 1070;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1061;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1062;
				this.annotationsOpt();
				this.state = 1063;
				this.match(NextflowScriptParser.QUESTION);
				this.state = 1068;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 1064;
					_la = this._input.LA(1);
					if (!(_la === NextflowScriptParser.EXTENDS || _la === NextflowScriptParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1065;
					this.nls();
					this.state = 1066;
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
		this.enterRule(_localctx, 142, NextflowScriptParser.RULE_annotatedQualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.annotationsOpt();
			this.state = 1073;
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
		this.enterRule(_localctx, 144, NextflowScriptParser.RULE_qualifiedClassNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1075;
			this.annotatedQualifiedClassName();
			this.state = 1082;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1076;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1077;
					this.nls();
					this.state = 1078;
					this.annotatedQualifiedClassName();
					}
					}
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
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
		this.enterRule(_localctx, 146, NextflowScriptParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1087;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.YIELD) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowScriptParser.IMPORT - 34)) | (1 << (NextflowScriptParser.PACKAGE - 34)) | (1 << (NextflowScriptParser.PERMITS - 34)) | (1 << (NextflowScriptParser.PRIVATE - 34)) | (1 << (NextflowScriptParser.PROTECTED - 34)) | (1 << (NextflowScriptParser.PUBLIC - 34)) | (1 << (NextflowScriptParser.RECORD - 34)) | (1 << (NextflowScriptParser.STATIC - 34)) | (1 << (NextflowScriptParser.STRICTFP - 34)) | (1 << (NextflowScriptParser.VOID - 34)))) !== 0) || _la === NextflowScriptParser.LBRACK || _la === NextflowScriptParser.QUESTION || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 130)) | (1 << (NextflowScriptParser.Identifier - 130)) | (1 << (NextflowScriptParser.AT - 130)) | (1 << (NextflowScriptParser.ELLIPSIS - 130)))) !== 0)) {
				{
				this.state = 1086;
				this.formalParameterList();
				}
			}

			this.state = 1089;
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
		this.enterRule(_localctx, 148, NextflowScriptParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1091;
				this.formalParameter();
				}
				break;

			case 2:
				{
				this.state = 1092;
				this.thisFormalParameter();
				}
				break;
			}
			this.state = 1101;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1095;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1096;
					this.nls();
					this.state = 1097;
					this.formalParameter();
					}
					}
				}
				this.state = 1103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
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
		this.enterRule(_localctx, 150, NextflowScriptParser.RULE_thisFormalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.type();
			this.state = 1105;
			this.match(NextflowScriptParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 152, NextflowScriptParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			this.variableModifiersOpt();
			this.state = 1109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1108;
				this.type();
				}
				break;
			}
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.ELLIPSIS) {
				{
				this.state = 1111;
				this.match(NextflowScriptParser.ELLIPSIS);
				}
			}

			this.state = 1114;
			this.variableDeclaratorId();
			this.state = 1120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1115;
				this.nls();
				this.state = 1116;
				this.match(NextflowScriptParser.ASSIGN);
				this.state = 1117;
				this.nls();
				this.state = 1118;
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
		this.enterRule(_localctx, 154, NextflowScriptParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
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
		this.enterRule(_localctx, 156, NextflowScriptParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this.qualifiedNameElement();
			this.state = 1129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1125;
					this.match(NextflowScriptParser.DOT);
					this.state = 1126;
					this.qualifiedNameElement();
					}
					}
				}
				this.state = 1131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
		this.enterRule(_localctx, 158, NextflowScriptParser.RULE_qualifiedNameElement);
		try {
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1132;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1133;
				this.match(NextflowScriptParser.DEF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1134;
				this.match(NextflowScriptParser.IN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1135;
				this.match(NextflowScriptParser.AS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1136;
				this.match(NextflowScriptParser.TRAIT);
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
		this.enterRule(_localctx, 160, NextflowScriptParser.RULE_qualifiedNameElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1139;
					this.qualifiedNameElement();
					this.state = 1140;
					this.match(NextflowScriptParser.DOT);
					}
					}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
		this.enterRule(_localctx, 162, NextflowScriptParser.RULE_qualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1147;
			this.qualifiedNameElements();
			this.state = 1148;
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
		this.enterRule(_localctx, 164, NextflowScriptParser.RULE_qualifiedStandardClassName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this.qualifiedNameElements();
			this.state = 1151;
			this.className();
			this.state = 1156;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1152;
					this.match(NextflowScriptParser.DOT);
					this.state = 1153;
					this.className();
					}
					}
				}
				this.state = 1158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
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
		this.enterRule(_localctx, 166, NextflowScriptParser.RULE_literal);
		try {
			this.state = 1164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.IntegerLiteral:
				_localctx = new IntegerLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1159;
				this.match(NextflowScriptParser.IntegerLiteral);
				}
				break;
			case NextflowScriptParser.FloatingPointLiteral:
				_localctx = new FloatingPointLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1160;
				this.match(NextflowScriptParser.FloatingPointLiteral);
				}
				break;
			case NextflowScriptParser.StringLiteral:
				_localctx = new StringLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1161;
				this.stringLiteral();
				}
				break;
			case NextflowScriptParser.BooleanLiteral:
				_localctx = new BooleanLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1162;
				this.match(NextflowScriptParser.BooleanLiteral);
				}
				break;
			case NextflowScriptParser.NullLiteral:
				_localctx = new NullLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1163;
				this.match(NextflowScriptParser.NullLiteral);
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
		this.enterRule(_localctx, 168, NextflowScriptParser.RULE_gstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(NextflowScriptParser.GStringBegin);
			this.state = 1167;
			this.gstringValue();
			this.state = 1172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.GStringPart) {
				{
				{
				this.state = 1168;
				this.match(NextflowScriptParser.GStringPart);
				this.state = 1169;
				this.gstringValue();
				}
				}
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1175;
			this.match(NextflowScriptParser.GStringEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 170, NextflowScriptParser.RULE_gstringValue);
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1177;
				this.gstringPath();
				}
				break;
			case NextflowScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1178;
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
		this.enterRule(_localctx, 172, NextflowScriptParser.RULE_gstringPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			this.identifier();
			this.state = 1185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.GStringPathPart) {
				{
				{
				this.state = 1182;
				this.match(NextflowScriptParser.GStringPathPart);
				}
				}
				this.state = 1187;
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
		this.enterRule(_localctx, 174, NextflowScriptParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.lambdaParameters();
			this.state = 1189;
			this.nls();
			this.state = 1190;
			this.match(NextflowScriptParser.ARROW);
			this.state = 1191;
			this.nls();
			this.state = 1192;
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
		this.enterRule(_localctx, 176, NextflowScriptParser.RULE_standardLambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.standardLambdaParameters();
			this.state = 1195;
			this.nls();
			this.state = 1196;
			this.match(NextflowScriptParser.ARROW);
			this.state = 1197;
			this.nls();
			this.state = 1198;
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
		this.enterRule(_localctx, 178, NextflowScriptParser.RULE_lambdaParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1200;
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
		this.enterRule(_localctx, 180, NextflowScriptParser.RULE_standardLambdaParameters);
		try {
			this.state = 1204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1202;
				this.formalParameters();
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1203;
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
		this.enterRule(_localctx, 182, NextflowScriptParser.RULE_lambdaBody);
		try {
			this.state = 1208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1206;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1207;
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
		this.enterRule(_localctx, 184, NextflowScriptParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1210;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1211;
				this.nls();
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.YIELD) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (NextflowScriptParser.IMPORT - 34)) | (1 << (NextflowScriptParser.PACKAGE - 34)) | (1 << (NextflowScriptParser.PERMITS - 34)) | (1 << (NextflowScriptParser.PRIVATE - 34)) | (1 << (NextflowScriptParser.PROTECTED - 34)) | (1 << (NextflowScriptParser.PUBLIC - 34)) | (1 << (NextflowScriptParser.RECORD - 34)) | (1 << (NextflowScriptParser.STATIC - 34)) | (1 << (NextflowScriptParser.STRICTFP - 34)) | (1 << (NextflowScriptParser.VOID - 34)))) !== 0) || _la === NextflowScriptParser.LBRACK || _la === NextflowScriptParser.QUESTION || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 130)) | (1 << (NextflowScriptParser.Identifier - 130)) | (1 << (NextflowScriptParser.AT - 130)) | (1 << (NextflowScriptParser.ELLIPSIS - 130)))) !== 0)) {
					{
					this.state = 1212;
					this.formalParameterList();
					this.state = 1213;
					this.nls();
					}
				}

				this.state = 1217;
				this.match(NextflowScriptParser.ARROW);
				}
				break;
			}
			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1221;
				this.sep();
				}
				break;
			}
			this.state = 1224;
			this.blockStatementsOpt();
			this.state = 1225;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 186, NextflowScriptParser.RULE_closureOrLambdaExpression);
		try {
			this.state = 1229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1227;
				this.closure();
				}
				break;
			case NextflowScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1228;
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
		this.enterRule(_localctx, 188, NextflowScriptParser.RULE_blockStatementsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1231;
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
		this.enterRule(_localctx, 190, NextflowScriptParser.RULE_blockStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.blockStatement();
			this.state = 1240;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1235;
					this.sep();
					this.state = 1236;
					this.blockStatement();
					}
					}
				}
				this.state = 1242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			}
			this.state = 1244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1243;
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
		this.enterRule(_localctx, 192, NextflowScriptParser.RULE_annotationsOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.AT) {
				{
				this.state = 1246;
				this.annotation();
				this.state = 1252;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1247;
						this.nls();
						this.state = 1248;
						this.annotation();
						}
						}
					}
					this.state = 1254;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
				}
				this.state = 1255;
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
		this.enterRule(_localctx, 194, NextflowScriptParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.match(NextflowScriptParser.AT);
			this.state = 1260;
			this.annotationName();
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1261;
				this.nls();
				this.state = 1262;
				this.match(NextflowScriptParser.LPAREN);
				this.state = 1264;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1263;
					this.elementValues();
					}
					break;
				}
				this.state = 1266;
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
		this.enterRule(_localctx, 196, NextflowScriptParser.RULE_elementValues);
		try {
			this.state = 1272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1270;
				this.elementValuePairs();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1271;
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
		this.enterRule(_localctx, 198, NextflowScriptParser.RULE_annotationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
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
		this.enterRule(_localctx, 200, NextflowScriptParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.elementValuePair();
			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 1277;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1278;
				this.elementValuePair();
				}
				}
				this.state = 1283;
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
		this.enterRule(_localctx, 202, NextflowScriptParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1284;
			this.elementValuePairName();
			this.state = 1285;
			this.nls();
			this.state = 1286;
			this.match(NextflowScriptParser.ASSIGN);
			this.state = 1287;
			this.nls();
			this.state = 1288;
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
		this.enterRule(_localctx, 204, NextflowScriptParser.RULE_elementValuePairName);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1290;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1291;
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
		this.enterRule(_localctx, 206, NextflowScriptParser.RULE_elementValue);
		try {
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1294;
				this.elementValueArrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1295;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1296;
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
		this.enterRule(_localctx, 208, NextflowScriptParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1299;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1300;
				this.elementValue();
				this.state = 1305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1301;
						this.match(NextflowScriptParser.COMMA);
						this.state = 1302;
						this.elementValue();
						}
						}
					}
					this.state = 1307;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				}
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowScriptParser.COMMA) {
					{
					this.state = 1308;
					this.match(NextflowScriptParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 1313;
			this.match(NextflowScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 210, NextflowScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1316;
				this.sep();
				}
				break;
			}
			this.state = 1319;
			this.blockStatementsOpt();
			this.state = 1320;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 212, NextflowScriptParser.RULE_blockStatement);
		try {
			this.state = 1324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1322;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1323;
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
		this.enterRule(_localctx, 214, NextflowScriptParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			if (!( !GroovyParser.isInvalidLocalVariableDeclaration(this._input) )) {
				throw this.createFailedPredicateException(" !GroovyParser.isInvalidLocalVariableDeclaration(this._input) ");
			}
			this.state = 1327;
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
		this.enterRule(_localctx, 216, NextflowScriptParser.RULE_variableDeclaration);
		try {
			this.state = 1346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1329;
				this.modifiers();
				this.state = 1330;
				this.nls();
				this.state = 1341;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NextflowScriptParser.AS:
				case NextflowScriptParser.DEF:
				case NextflowScriptParser.IN:
				case NextflowScriptParser.TRAIT:
				case NextflowScriptParser.VAR:
				case NextflowScriptParser.BuiltInPrimitiveType:
				case NextflowScriptParser.YIELD:
				case NextflowScriptParser.IMPORT:
				case NextflowScriptParser.PACKAGE:
				case NextflowScriptParser.PERMITS:
				case NextflowScriptParser.RECORD:
				case NextflowScriptParser.VOID:
				case NextflowScriptParser.LBRACK:
				case NextflowScriptParser.QUESTION:
				case NextflowScriptParser.CapitalizedIdentifier:
				case NextflowScriptParser.Identifier:
				case NextflowScriptParser.AT:
					{
					this.state = 1332;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						this.state = 1331;
						this.type();
						}
						break;
					}
					this.state = 1334;
					this.variableDeclarators();
					}
					break;
				case NextflowScriptParser.LPAREN:
					{
					this.state = 1335;
					this.typeNamePairs();
					this.state = 1336;
					this.nls();
					this.state = 1337;
					this.match(NextflowScriptParser.ASSIGN);
					this.state = 1338;
					this.nls();
					this.state = 1339;
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
				this.state = 1343;
				this.type();
				this.state = 1344;
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
		this.enterRule(_localctx, 218, NextflowScriptParser.RULE_typeNamePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1349;
			this.typeNamePair();
			this.state = 1354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 1350;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1351;
				this.typeNamePair();
				}
				}
				this.state = 1356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1357;
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
		this.enterRule(_localctx, 220, NextflowScriptParser.RULE_typeNamePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1359;
				this.type();
				}
				break;
			}
			this.state = 1362;
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
		this.enterRule(_localctx, 222, NextflowScriptParser.RULE_variableNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1365;
			this.variableDeclaratorId();
			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1366;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1367;
				this.variableDeclaratorId();
				}
				}
				this.state = 1370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === NextflowScriptParser.COMMA);
			this.state = 1372;
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
		this.enterRule(_localctx, 224, NextflowScriptParser.RULE_conditionalStatement);
		try {
			this.state = 1376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1374;
				this.ifElseStatement();
				}
				break;
			case NextflowScriptParser.SWITCH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1375;
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
		this.enterRule(_localctx, 226, NextflowScriptParser.RULE_ifElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1378;
			this.match(NextflowScriptParser.IF);
			this.state = 1379;
			this.expressionInPar();
			this.state = 1380;
			this.nls();
			this.state = 1381;
			_localctx._tb = this.statement();
			this.state = 1390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1384;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1382;
					this.nls();
					}
					break;

				case 2:
					{
					this.state = 1383;
					this.sep();
					}
					break;
				}
				this.state = 1386;
				this.match(NextflowScriptParser.ELSE);
				this.state = 1387;
				this.nls();
				this.state = 1388;
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
		this.enterRule(_localctx, 228, NextflowScriptParser.RULE_switchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1392;
			this.match(NextflowScriptParser.SWITCH);
			this.state = 1393;
			this.expressionInPar();
			this.state = 1394;
			this.nls();
			this.state = 1395;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1396;
			this.nls();
			this.state = 1404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.CASE || _la === NextflowScriptParser.DEFAULT) {
				{
				this.state = 1398;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1397;
						this.switchBlockStatementGroup();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1400;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1402;
				this.nls();
				}
			}

			this.state = 1406;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 230, NextflowScriptParser.RULE_loopStatement);
		try {
			this.state = 1427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.FOR:
				_localctx = new ForStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1408;
				this.match(NextflowScriptParser.FOR);
				this.state = 1409;
				this.match(NextflowScriptParser.LPAREN);
				this.state = 1410;
				this.forControl();
				this.state = 1411;
				this.rparen();
				this.state = 1412;
				this.nls();
				this.state = 1413;
				this.statement();
				}
				break;
			case NextflowScriptParser.WHILE:
				_localctx = new WhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1415;
				this.match(NextflowScriptParser.WHILE);
				this.state = 1416;
				this.expressionInPar();
				this.state = 1417;
				this.nls();
				this.state = 1418;
				this.statement();
				}
				break;
			case NextflowScriptParser.DO:
				_localctx = new DoWhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1420;
				this.match(NextflowScriptParser.DO);
				this.state = 1421;
				this.nls();
				this.state = 1422;
				this.statement();
				this.state = 1423;
				this.nls();
				this.state = 1424;
				this.match(NextflowScriptParser.WHILE);
				this.state = 1425;
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
		this.enterRule(_localctx, 232, NextflowScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1429;
			this.match(NextflowScriptParser.CONTINUE);
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1430;
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
		this.enterRule(_localctx, 234, NextflowScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1433;
			this.match(NextflowScriptParser.BREAK);
			this.state = 1435;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1434;
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
		this.enterRule(_localctx, 236, NextflowScriptParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			this.match(NextflowScriptParser.YIELD);
			this.state = 1438;
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
		this.enterRule(_localctx, 238, NextflowScriptParser.RULE_tryCatchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1440;
			this.match(NextflowScriptParser.TRY);
			this.state = 1442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1441;
				this.resources();
				}
				break;
			}
			this.state = 1444;
			this.nls();
			this.state = 1445;
			this.block();
			this.state = 1451;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1446;
					this.nls();
					this.state = 1447;
					this.catchClause();
					}
					}
				}
				this.state = 1453;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			}
			this.state = 1457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1454;
				this.nls();
				this.state = 1455;
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
		this.enterRule(_localctx, 240, NextflowScriptParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this.match(NextflowScriptParser.ASSERT);
			this.state = 1460;
			_localctx._ce = this.expression(0);
			this.state = 1466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1461;
				this.nls();
				this.state = 1462;
				_la = this._input.LA(1);
				if (!(_la === NextflowScriptParser.COMMA || _la === NextflowScriptParser.COLON)) {
				this._errHandler.recoverInline(this);
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
		this.enterRule(_localctx, 242, NextflowScriptParser.RULE_statement);
		try {
			this.state = 1496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				_localctx = new BlockStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1468;
				this.block();
				}
				break;

			case 2:
				_localctx = new ConditionalStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1469;
				this.conditionalStatement();
				}
				break;

			case 3:
				_localctx = new LoopStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1470;
				this.loopStatement();
				}
				break;

			case 4:
				_localctx = new TryCatchStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1471;
				this.tryCatchStatement();
				}
				break;

			case 5:
				_localctx = new SynchronizedStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1472;
				this.match(NextflowScriptParser.SYNCHRONIZED);
				this.state = 1473;
				this.expressionInPar();
				this.state = 1474;
				this.nls();
				this.state = 1475;
				this.block();
				}
				break;

			case 6:
				_localctx = new ReturnStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1477;
				this.match(NextflowScriptParser.RETURN);
				this.state = 1479;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1478;
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
				this.state = 1481;
				this.match(NextflowScriptParser.THROW);
				this.state = 1482;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new BreakStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1483;
				this.breakStatement();
				}
				break;

			case 9:
				_localctx = new ContinueStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1484;
				this.continueStatement();
				}
				break;

			case 10:
				_localctx = new YieldStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1485;
				if (!( this.inSwitchExpressionLevel > 0 )) {
					throw this.createFailedPredicateException(" this.inSwitchExpressionLevel > 0 ");
				}
				this.state = 1486;
				this.yieldStatement();
				}
				break;

			case 11:
				_localctx = new LabeledStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1487;
				this.identifier();
				this.state = 1488;
				this.match(NextflowScriptParser.COLON);
				this.state = 1489;
				this.nls();
				this.state = 1490;
				this.statement();
				}
				break;

			case 12:
				_localctx = new AssertStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1492;
				this.assertStatement();
				}
				break;

			case 13:
				_localctx = new LocalVariableDeclarationStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1493;
				this.localVariableDeclaration();
				}
				break;

			case 14:
				_localctx = new ExpressionStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1494;
				this.statementExpression();
				}
				break;

			case 15:
				_localctx = new EmptyStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1495;
				this.match(NextflowScriptParser.SEMI);
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
		this.enterRule(_localctx, 244, NextflowScriptParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1498;
			this.match(NextflowScriptParser.CATCH);
			this.state = 1499;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1500;
			this.variableModifiersOpt();
			this.state = 1502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1501;
				this.catchType();
				}
				break;
			}
			this.state = 1504;
			this.identifier();
			this.state = 1505;
			this.rparen();
			this.state = 1506;
			this.nls();
			this.state = 1507;
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
		this.enterRule(_localctx, 246, NextflowScriptParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this.qualifiedClassName();
			this.state = 1514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.BITOR) {
				{
				{
				this.state = 1510;
				this.match(NextflowScriptParser.BITOR);
				this.state = 1511;
				this.qualifiedClassName();
				}
				}
				this.state = 1516;
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
		this.enterRule(_localctx, 248, NextflowScriptParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1517;
			this.match(NextflowScriptParser.FINALLY);
			this.state = 1518;
			this.nls();
			this.state = 1519;
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
		this.enterRule(_localctx, 250, NextflowScriptParser.RULE_resources);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1521;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1522;
			this.nls();
			this.state = 1523;
			this.resourceList();
			this.state = 1525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 1524;
				this.sep();
				}
			}

			this.state = 1527;
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
		this.enterRule(_localctx, 252, NextflowScriptParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1529;
			this.resource();
			this.state = 1535;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1530;
					this.sep();
					this.state = 1531;
					this.resource();
					}
					}
				}
				this.state = 1537;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
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
		this.enterRule(_localctx, 254, NextflowScriptParser.RULE_resource);
		try {
			this.state = 1540;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1538;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1539;
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
		this.enterRule(_localctx, 256, NextflowScriptParser.RULE_switchBlockStatementGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.switchLabel();
			this.state = 1548;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1543;
					this.nls();
					this.state = 1544;
					this.switchLabel();
					}
					}
				}
				this.state = 1550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			}
			this.state = 1551;
			this.nls();
			this.state = 1552;
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
		this.enterRule(_localctx, 258, NextflowScriptParser.RULE_switchLabel);
		try {
			this.state = 1560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1554;
				this.match(NextflowScriptParser.CASE);
				this.state = 1555;
				this.expression(0);
				this.state = 1556;
				this.match(NextflowScriptParser.COLON);
				}
				break;
			case NextflowScriptParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1558;
				this.match(NextflowScriptParser.DEFAULT);
				this.state = 1559;
				this.match(NextflowScriptParser.COLON);
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
		this.enterRule(_localctx, 260, NextflowScriptParser.RULE_forControl);
		try {
			this.state = 1564;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1562;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1563;
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
		this.enterRule(_localctx, 262, NextflowScriptParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1566;
			this.variableModifiersOpt();
			this.state = 1568;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1567;
				this.type();
				}
				break;
			}
			this.state = 1570;
			this.variableDeclaratorId();
			this.state = 1571;
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.IN || _la === NextflowScriptParser.COLON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1572;
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
		this.enterRule(_localctx, 264, NextflowScriptParser.RULE_classicalForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1574;
				this.forInit();
				}
				break;
			}
			this.state = 1577;
			this.match(NextflowScriptParser.SEMI);
			this.state = 1579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1578;
				this.expression(0);
				}
				break;
			}
			this.state = 1581;
			this.match(NextflowScriptParser.SEMI);
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1582;
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
		this.enterRule(_localctx, 266, NextflowScriptParser.RULE_forInit);
		try {
			this.state = 1587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1585;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1586;
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
		this.enterRule(_localctx, 268, NextflowScriptParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1589;
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
		this.enterRule(_localctx, 270, NextflowScriptParser.RULE_castParExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1592;
			this.type();
			this.state = 1593;
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
		this.enterRule(_localctx, 272, NextflowScriptParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1595;
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
		this.enterRule(_localctx, 274, NextflowScriptParser.RULE_expressionInPar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1597;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1598;
			this.enhancedStatementExpression();
			this.state = 1599;
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
		this.enterRule(_localctx, 276, NextflowScriptParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this.expressionListElement(_localctx.canSpread);
			this.state = 1608;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1602;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1603;
					this.nls();
					this.state = 1604;
					this.expressionListElement(_localctx.canSpread);
					}
					}
				}
				this.state = 1610;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
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
		this.enterRule(_localctx, 278, NextflowScriptParser.RULE_expressionListElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1612;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1611;
				this.match(NextflowScriptParser.MUL);
				}
				break;
			}
			this.state = 1614;
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
		this.enterRule(_localctx, 280, NextflowScriptParser.RULE_enhancedStatementExpression);
		try {
			this.state = 1618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1616;
				this.statementExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1617;
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
		this.enterRule(_localctx, 282, NextflowScriptParser.RULE_statementExpression);
		try {
			_localctx = new CommandExprAltContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1620;
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
		this.enterRule(_localctx, 284, NextflowScriptParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this.pathExpression();
			this.state = 1624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				{
				this.state = 1623;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === NextflowScriptParser.INC || _la === NextflowScriptParser.DEC)) {
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
		this.enterRule(_localctx, 286, NextflowScriptParser.RULE_switchExpression);

		    this.inSwitchExpressionLevel++;

		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1626;
			this.match(NextflowScriptParser.SWITCH);
			this.state = 1627;
			this.expressionInPar();
			this.state = 1628;
			this.nls();
			this.state = 1629;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1630;
			this.nls();
			this.state = 1634;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1631;
					this.switchBlockStatementExpressionGroup();
					}
					}
				}
				this.state = 1636;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			}
			this.state = 1637;
			this.nls();
			this.state = 1638;
			this.match(NextflowScriptParser.RBRACE);
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
		this.enterRule(_localctx, 288, NextflowScriptParser.RULE_switchBlockStatementExpressionGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1640;
					this.switchExpressionLabel();
					this.state = 1641;
					this.nls();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1645;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1647;
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
		this.enterRule(_localctx, 290, NextflowScriptParser.RULE_switchExpressionLabel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.CASE:
				{
				this.state = 1649;
				this.match(NextflowScriptParser.CASE);
				this.state = 1650;
				this.expressionList(true);
				}
				break;
			case NextflowScriptParser.DEFAULT:
				{
				this.state = 1651;
				this.match(NextflowScriptParser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1654;
			_localctx._ac = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.ARROW || _la === NextflowScriptParser.COLON)) {
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
		let _startState: number = 292;
		this.enterRecursionRule(_localctx, 292, NextflowScriptParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				_localctx = new CastExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1657;
				this.castParExpression();
				this.state = 1658;
				this.castOperandExpression();
				}
				break;

			case 2:
				{
				_localctx = new PostfixExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1660;
				this.postfixExpression();
				}
				break;

			case 3:
				{
				_localctx = new SwitchExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1661;
				this.switchExpression();
				}
				break;

			case 4:
				{
				_localctx = new UnaryNotExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1662;
				_la = this._input.LA(1);
				if (!(_la === NextflowScriptParser.NOT || _la === NextflowScriptParser.BITNOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1663;
				this.nls();
				this.state = 1664;
				this.expression(18);
				}
				break;

			case 5:
				{
				_localctx = new UnaryAddExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1666;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (NextflowScriptParser.INC - 108)) | (1 << (NextflowScriptParser.DEC - 108)) | (1 << (NextflowScriptParser.ADD - 108)) | (1 << (NextflowScriptParser.SUB - 108)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1667;
				this.expression(16);
				}
				break;

			case 6:
				{
				_localctx = new MultipleAssignmentExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1668;
				(_localctx as MultipleAssignmentExprAltContext)._left = this.variableNames();
				this.state = 1669;
				this.nls();
				this.state = 1670;
				(_localctx as MultipleAssignmentExprAltContext)._op = this.match(NextflowScriptParser.ASSIGN);
				this.state = 1671;
				this.nls();
				this.state = 1672;
				(_localctx as MultipleAssignmentExprAltContext)._right = this.statementExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1786;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1784;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1676;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1677;
						(_localctx as PowerExprAltContext)._op = this.match(NextflowScriptParser.POWER);
						this.state = 1678;
						this.nls();
						this.state = 1679;
						(_localctx as PowerExprAltContext)._right = this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1681;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1682;
						this.nls();
						this.state = 1683;
						(_localctx as MultiplicativeExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (NextflowScriptParser.MUL - 112)) | (1 << (NextflowScriptParser.DIV - 112)) | (1 << (NextflowScriptParser.MOD - 112)))) !== 0))) {
							(_localctx as MultiplicativeExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1684;
						this.nls();
						this.state = 1685;
						(_localctx as MultiplicativeExprAltContext)._right = this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1687;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1688;
						(_localctx as AdditiveExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.ADD || _la === NextflowScriptParser.SUB)) {
							(_localctx as AdditiveExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1689;
						this.nls();
						this.state = 1690;
						(_localctx as AdditiveExprAltContext)._right = this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new ShiftExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ShiftExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1692;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1693;
						this.nls();
						this.state = 1704;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowScriptParser.GT:
						case NextflowScriptParser.LT:
							{
							this.state = 1701;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
							case 1:
								{
								this.state = 1694;
								(_localctx as ShiftExprAltContext)._dlOp = this.match(NextflowScriptParser.LT);
								this.state = 1695;
								this.match(NextflowScriptParser.LT);
								}
								break;

							case 2:
								{
								this.state = 1696;
								(_localctx as ShiftExprAltContext)._tgOp = this.match(NextflowScriptParser.GT);
								this.state = 1697;
								this.match(NextflowScriptParser.GT);
								this.state = 1698;
								this.match(NextflowScriptParser.GT);
								}
								break;

							case 3:
								{
								this.state = 1699;
								(_localctx as ShiftExprAltContext)._dgOp = this.match(NextflowScriptParser.GT);
								this.state = 1700;
								this.match(NextflowScriptParser.GT);
								}
								break;
							}
							}
							break;
						case NextflowScriptParser.RANGE_INCLUSIVE:
						case NextflowScriptParser.RANGE_EXCLUSIVE_LEFT:
						case NextflowScriptParser.RANGE_EXCLUSIVE_RIGHT:
						case NextflowScriptParser.RANGE_EXCLUSIVE_FULL:
							{
							this.state = 1703;
							(_localctx as ShiftExprAltContext)._rangeOp = this._input.LT(1);
							_la = this._input.LA(1);
							if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (NextflowScriptParser.RANGE_INCLUSIVE - 65)) | (1 << (NextflowScriptParser.RANGE_EXCLUSIVE_LEFT - 65)) | (1 << (NextflowScriptParser.RANGE_EXCLUSIVE_RIGHT - 65)) | (1 << (NextflowScriptParser.RANGE_EXCLUSIVE_FULL - 65)))) !== 0))) {
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
						this.state = 1706;
						this.nls();
						this.state = 1707;
						(_localctx as ShiftExprAltContext)._right = this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1709;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1710;
						this.nls();
						this.state = 1711;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.IN || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (NextflowScriptParser.NOT_IN - 85)) | (1 << (NextflowScriptParser.GT - 85)) | (1 << (NextflowScriptParser.LT - 85)) | (1 << (NextflowScriptParser.LE - 85)) | (1 << (NextflowScriptParser.GE - 85)))) !== 0))) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1712;
						this.nls();
						this.state = 1713;
						(_localctx as RelationalExprAltContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1715;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1716;
						this.nls();
						this.state = 1717;
						(_localctx as EqualityExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (NextflowScriptParser.SPACESHIP - 80)) | (1 << (NextflowScriptParser.IDENTICAL - 80)) | (1 << (NextflowScriptParser.NOT_IDENTICAL - 80)) | (1 << (NextflowScriptParser.EQUAL - 80)) | (1 << (NextflowScriptParser.NOTEQUAL - 80)))) !== 0))) {
							(_localctx as EqualityExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1718;
						this.nls();
						this.state = 1719;
						(_localctx as EqualityExprAltContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RegexExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RegexExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1721;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1722;
						this.nls();
						this.state = 1723;
						(_localctx as RegexExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.REGEX_FIND || _la === NextflowScriptParser.REGEX_MATCH)) {
							(_localctx as RegexExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1724;
						this.nls();
						this.state = 1725;
						(_localctx as RegexExprAltContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new AndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1727;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1728;
						this.nls();
						this.state = 1729;
						(_localctx as AndExprAltContext)._op = this.match(NextflowScriptParser.BITAND);
						this.state = 1730;
						this.nls();
						this.state = 1731;
						(_localctx as AndExprAltContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ExclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1733;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1734;
						this.nls();
						this.state = 1735;
						(_localctx as ExclusiveOrExprAltContext)._op = this.match(NextflowScriptParser.XOR);
						this.state = 1736;
						this.nls();
						this.state = 1737;
						(_localctx as ExclusiveOrExprAltContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new InclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1739;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1740;
						this.nls();
						this.state = 1741;
						(_localctx as InclusiveOrExprAltContext)._op = this.match(NextflowScriptParser.BITOR);
						this.state = 1742;
						this.nls();
						this.state = 1743;
						(_localctx as InclusiveOrExprAltContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1745;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1746;
						this.nls();
						this.state = 1747;
						(_localctx as LogicalAndExprAltContext)._op = this.match(NextflowScriptParser.AND);
						this.state = 1748;
						this.nls();
						this.state = 1749;
						(_localctx as LogicalAndExprAltContext)._right = this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1751;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1752;
						this.nls();
						this.state = 1753;
						(_localctx as LogicalOrExprAltContext)._op = this.match(NextflowScriptParser.OR);
						this.state = 1754;
						this.nls();
						this.state = 1755;
						(_localctx as LogicalOrExprAltContext)._right = this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ConditionalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConditionalExprAltContext)._con = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1757;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1758;
						this.nls();
						this.state = 1768;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowScriptParser.QUESTION:
							{
							this.state = 1759;
							this.match(NextflowScriptParser.QUESTION);
							this.state = 1760;
							this.nls();
							this.state = 1761;
							(_localctx as ConditionalExprAltContext)._tb = this.expression(0);
							this.state = 1762;
							this.nls();
							this.state = 1763;
							this.match(NextflowScriptParser.COLON);
							this.state = 1764;
							this.nls();
							}
							break;
						case NextflowScriptParser.ELVIS:
							{
							this.state = 1766;
							this.match(NextflowScriptParser.ELVIS);
							this.state = 1767;
							this.nls();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1770;
						(_localctx as ConditionalExprAltContext)._fb = this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1772;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1773;
						this.nls();
						this.state = 1774;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.AS || _la === NextflowScriptParser.INSTANCEOF || _la === NextflowScriptParser.NOT_INSTANCEOF)) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1775;
						this.nls();
						this.state = 1776;
						this.type();
						}
						break;

					case 15:
						{
						_localctx = new AssignmentExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignmentExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1778;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1779;
						this.nls();
						this.state = 1780;
						(_localctx as AssignmentExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.POWER_ASSIGN || _la === NextflowScriptParser.ASSIGN || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (NextflowScriptParser.ADD_ASSIGN - 118)) | (1 << (NextflowScriptParser.SUB_ASSIGN - 118)) | (1 << (NextflowScriptParser.MUL_ASSIGN - 118)) | (1 << (NextflowScriptParser.DIV_ASSIGN - 118)) | (1 << (NextflowScriptParser.AND_ASSIGN - 118)) | (1 << (NextflowScriptParser.OR_ASSIGN - 118)) | (1 << (NextflowScriptParser.XOR_ASSIGN - 118)) | (1 << (NextflowScriptParser.MOD_ASSIGN - 118)) | (1 << (NextflowScriptParser.LSHIFT_ASSIGN - 118)) | (1 << (NextflowScriptParser.RSHIFT_ASSIGN - 118)) | (1 << (NextflowScriptParser.URSHIFT_ASSIGN - 118)) | (1 << (NextflowScriptParser.ELVIS_ASSIGN - 118)))) !== 0))) {
							(_localctx as AssignmentExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1781;
						this.nls();
						this.state = 1782;
						(_localctx as AssignmentExprAltContext)._right = this.enhancedStatementExpression();
						}
						break;
					}
					}
				}
				this.state = 1788;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
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
		this.enterRule(_localctx, 294, NextflowScriptParser.RULE_castOperandExpression);
		let _la: number;
		try {
			this.state = 1799;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				_localctx = new CastExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1789;
				this.castParExpression();
				this.state = 1790;
				this.castOperandExpression();
				}
				break;

			case 2:
				_localctx = new PostfixExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1792;
				this.postfixExpression();
				}
				break;

			case 3:
				_localctx = new UnaryNotExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1793;
				_la = this._input.LA(1);
				if (!(_la === NextflowScriptParser.NOT || _la === NextflowScriptParser.BITNOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1794;
				this.nls();
				this.state = 1795;
				this.castOperandExpression();
				}
				break;

			case 4:
				_localctx = new UnaryAddExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1797;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (NextflowScriptParser.INC - 108)) | (1 << (NextflowScriptParser.DEC - 108)) | (1 << (NextflowScriptParser.ADD - 108)) | (1 << (NextflowScriptParser.SUB - 108)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1798;
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
		this.enterRule(_localctx, 296, NextflowScriptParser.RULE_commandExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			_localctx._expression = this.expression(0);
			this.state = 1805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1802;
				if (!( !GroovyParser.isFollowingArgumentsOrClosure(_localctx._expression) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isFollowingArgumentsOrClosure($expression.ctx) ");
				}
				this.state = 1803;
				this.argumentList();
				}
				break;

			case 2:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 1810;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1807;
					this.commandArgument();
					}
					}
				}
				this.state = 1812;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
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
		this.enterRule(_localctx, 298, NextflowScriptParser.RULE_commandArgument);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1813;
			this.commandPrimary();
			this.state = 1820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1815;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1814;
						this.pathElement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1817;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				{
				this.state = 1819;
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
		this.enterRule(_localctx, 300, NextflowScriptParser.RULE_pathExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				{
				this.state = 1822;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1823;
				if (!( this._input.LT(2).type == GroovyParser.DOT )) {
					throw this.createFailedPredicateException(" this._input.LT(2).type == GroovyParser.DOT ");
				}
				this.state = 1824;
				this.match(NextflowScriptParser.STATIC);
				}
				break;
			}
			this.state = 1832;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1827;
					_localctx._pathElement = this.pathElement();
					 _localctx.t =  _localctx._pathElement.t; 
					}
					}
				}
				this.state = 1834;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
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
		this.enterRule(_localctx, 302, NextflowScriptParser.RULE_pathElement);
		let _la: number;
		try {
			this.state = 1871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1835;
				this.nls();
				this.state = 1860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1836;
					this.match(NextflowScriptParser.DOT);
					this.state = 1837;
					this.nls();
					this.state = 1838;
					this.match(NextflowScriptParser.NEW);
					this.state = 1839;
					this.creator(1);
					 _localctx.t =  6; 
					}
					break;

				case 2:
					{
					this.state = 1852;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case NextflowScriptParser.SPREAD_DOT:
					case NextflowScriptParser.SAFE_DOT:
					case NextflowScriptParser.SAFE_CHAIN_DOT:
					case NextflowScriptParser.DOT:
						{
						this.state = 1842;
						_la = this._input.LA(1);
						if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (NextflowScriptParser.SPREAD_DOT - 69)) | (1 << (NextflowScriptParser.SAFE_DOT - 69)) | (1 << (NextflowScriptParser.SAFE_CHAIN_DOT - 69)) | (1 << (NextflowScriptParser.DOT - 69)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1843;
						this.nls();
						this.state = 1846;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowScriptParser.AT:
							{
							this.state = 1844;
							this.match(NextflowScriptParser.AT);
							}
							break;
						case NextflowScriptParser.LT:
							{
							this.state = 1845;
							this.nonWildcardTypeArguments();
							}
							break;
						case NextflowScriptParser.StringLiteral:
						case NextflowScriptParser.GStringBegin:
						case NextflowScriptParser.AS:
						case NextflowScriptParser.DEF:
						case NextflowScriptParser.IN:
						case NextflowScriptParser.TRAIT:
						case NextflowScriptParser.THREADSAFE:
						case NextflowScriptParser.VAR:
						case NextflowScriptParser.BuiltInPrimitiveType:
						case NextflowScriptParser.ABSTRACT:
						case NextflowScriptParser.ASSERT:
						case NextflowScriptParser.BREAK:
						case NextflowScriptParser.YIELD:
						case NextflowScriptParser.CASE:
						case NextflowScriptParser.CATCH:
						case NextflowScriptParser.CLASS:
						case NextflowScriptParser.CONST:
						case NextflowScriptParser.CONTINUE:
						case NextflowScriptParser.DEFAULT:
						case NextflowScriptParser.DO:
						case NextflowScriptParser.ELSE:
						case NextflowScriptParser.ENUM:
						case NextflowScriptParser.EXTENDS:
						case NextflowScriptParser.FINAL:
						case NextflowScriptParser.FINALLY:
						case NextflowScriptParser.FOR:
						case NextflowScriptParser.IF:
						case NextflowScriptParser.GOTO:
						case NextflowScriptParser.IMPLEMENTS:
						case NextflowScriptParser.IMPORT:
						case NextflowScriptParser.INSTANCEOF:
						case NextflowScriptParser.INTERFACE:
						case NextflowScriptParser.NATIVE:
						case NextflowScriptParser.NEW:
						case NextflowScriptParser.NON_SEALED:
						case NextflowScriptParser.PACKAGE:
						case NextflowScriptParser.PERMITS:
						case NextflowScriptParser.PRIVATE:
						case NextflowScriptParser.PROTECTED:
						case NextflowScriptParser.PUBLIC:
						case NextflowScriptParser.RECORD:
						case NextflowScriptParser.RETURN:
						case NextflowScriptParser.SEALED:
						case NextflowScriptParser.STATIC:
						case NextflowScriptParser.STRICTFP:
						case NextflowScriptParser.SUPER:
						case NextflowScriptParser.SWITCH:
						case NextflowScriptParser.SYNCHRONIZED:
						case NextflowScriptParser.THIS:
						case NextflowScriptParser.THROW:
						case NextflowScriptParser.THROWS:
						case NextflowScriptParser.TRANSIENT:
						case NextflowScriptParser.TRY:
						case NextflowScriptParser.VOID:
						case NextflowScriptParser.VOLATILE:
						case NextflowScriptParser.WHILE:
						case NextflowScriptParser.BooleanLiteral:
						case NextflowScriptParser.NullLiteral:
						case NextflowScriptParser.LPAREN:
						case NextflowScriptParser.CapitalizedIdentifier:
						case NextflowScriptParser.Identifier:
							break;
						default:
							break;
						}
						}
						break;
					case NextflowScriptParser.METHOD_POINTER:
						{
						this.state = 1848;
						this.match(NextflowScriptParser.METHOD_POINTER);
						this.state = 1849;
						this.nls();
						}
						break;
					case NextflowScriptParser.METHOD_REFERENCE:
						{
						this.state = 1850;
						this.match(NextflowScriptParser.METHOD_REFERENCE);
						this.state = 1851;
						this.nls();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1854;
					this.namePart();
					 _localctx.t =  1; 
					}
					break;

				case 3:
					{
					this.state = 1857;
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
				this.state = 1862;
				this.arguments();
				 _localctx.t =  2; 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1865;
				this.indexPropertyArgs();
				 _localctx.t =  4; 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1868;
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
		this.enterRule(_localctx, 304, NextflowScriptParser.RULE_namePart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1873;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 1874;
				this.stringLiteral();
				}
				break;

			case 3:
				{
				this.state = 1875;
				this.dynamicMemberName();
				}
				break;

			case 4:
				{
				this.state = 1876;
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
		this.enterRule(_localctx, 306, NextflowScriptParser.RULE_dynamicMemberName);
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1879;
				this.parExpression();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1880;
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
		this.enterRule(_localctx, 308, NextflowScriptParser.RULE_indexPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1883;
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.SAFE_INDEX || _la === NextflowScriptParser.LBRACK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1885;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				{
				this.state = 1884;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1887;
			this.match(NextflowScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 310, NextflowScriptParser.RULE_namedPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1889;
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.SAFE_INDEX || _la === NextflowScriptParser.LBRACK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1892;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.GStringBegin:
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.THREADSAFE:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.ASSERT:
			case NextflowScriptParser.BREAK:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.CASE:
			case NextflowScriptParser.CATCH:
			case NextflowScriptParser.CLASS:
			case NextflowScriptParser.CONST:
			case NextflowScriptParser.CONTINUE:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.DO:
			case NextflowScriptParser.ELSE:
			case NextflowScriptParser.ENUM:
			case NextflowScriptParser.EXTENDS:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.FINALLY:
			case NextflowScriptParser.FOR:
			case NextflowScriptParser.IF:
			case NextflowScriptParser.GOTO:
			case NextflowScriptParser.IMPLEMENTS:
			case NextflowScriptParser.IMPORT:
			case NextflowScriptParser.INSTANCEOF:
			case NextflowScriptParser.INTERFACE:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.NEW:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.RETURN:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.SUPER:
			case NextflowScriptParser.SWITCH:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.THIS:
			case NextflowScriptParser.THROW:
			case NextflowScriptParser.THROWS:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.TRY:
			case NextflowScriptParser.VOID:
			case NextflowScriptParser.VOLATILE:
			case NextflowScriptParser.WHILE:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
			case NextflowScriptParser.LPAREN:
			case NextflowScriptParser.MUL:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 1890;
				this.namedPropertyArgList();
				}
				break;
			case NextflowScriptParser.COLON:
				{
				this.state = 1891;
				this.match(NextflowScriptParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1894;
			this.match(NextflowScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 312, NextflowScriptParser.RULE_primary);
		try {
			this.state = 1913;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1896;
				this.identifier();
				this.state = 1898;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1897;
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
				this.state = 1900;
				this.literal();
				}
				break;

			case 3:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1901;
				this.gstring();
				}
				break;

			case 4:
				_localctx = new NewPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1902;
				this.match(NextflowScriptParser.NEW);
				this.state = 1903;
				this.nls();
				this.state = 1904;
				this.creator(0);
				}
				break;

			case 5:
				_localctx = new ThisPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1906;
				this.match(NextflowScriptParser.THIS);
				}
				break;

			case 6:
				_localctx = new SuperPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1907;
				this.match(NextflowScriptParser.SUPER);
				}
				break;

			case 7:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1908;
				this.parExpression();
				}
				break;

			case 8:
				_localctx = new ClosureOrLambdaExpressionPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1909;
				this.closureOrLambdaExpression();
				}
				break;

			case 9:
				_localctx = new ListPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1910;
				this.list();
				}
				break;

			case 10:
				_localctx = new MapPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1911;
				this.map();
				}
				break;

			case 11:
				_localctx = new BuiltInTypePrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1912;
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
		this.enterRule(_localctx, 314, NextflowScriptParser.RULE_namedPropertyArgPrimary);
		try {
			this.state = 1919;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1915;
				this.identifier();
				}
				break;
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1916;
				this.literal();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1917;
				this.gstring();
				}
				break;
			case NextflowScriptParser.LPAREN:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1918;
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
		this.enterRule(_localctx, 316, NextflowScriptParser.RULE_namedArgPrimary);
		try {
			this.state = 1924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1921;
				this.identifier();
				}
				break;
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1922;
				this.literal();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1923;
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
		this.enterRule(_localctx, 318, NextflowScriptParser.RULE_commandPrimary);
		try {
			this.state = 1929;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1926;
				this.identifier();
				}
				break;
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1927;
				this.literal();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1928;
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
		this.enterRule(_localctx, 320, NextflowScriptParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1931;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				{
				this.state = 1932;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.COMMA) {
				{
				this.state = 1935;
				this.match(NextflowScriptParser.COMMA);
				}
			}

			this.state = 1938;
			this.match(NextflowScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 322, NextflowScriptParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1940;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1946;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.GStringBegin:
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.THREADSAFE:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.ASSERT:
			case NextflowScriptParser.BREAK:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.CASE:
			case NextflowScriptParser.CATCH:
			case NextflowScriptParser.CLASS:
			case NextflowScriptParser.CONST:
			case NextflowScriptParser.CONTINUE:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.DO:
			case NextflowScriptParser.ELSE:
			case NextflowScriptParser.ENUM:
			case NextflowScriptParser.EXTENDS:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.FINALLY:
			case NextflowScriptParser.FOR:
			case NextflowScriptParser.IF:
			case NextflowScriptParser.GOTO:
			case NextflowScriptParser.IMPLEMENTS:
			case NextflowScriptParser.IMPORT:
			case NextflowScriptParser.INSTANCEOF:
			case NextflowScriptParser.INTERFACE:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.NEW:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.RETURN:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.SUPER:
			case NextflowScriptParser.SWITCH:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.THIS:
			case NextflowScriptParser.THROW:
			case NextflowScriptParser.THROWS:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.TRY:
			case NextflowScriptParser.VOID:
			case NextflowScriptParser.VOLATILE:
			case NextflowScriptParser.WHILE:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
			case NextflowScriptParser.LPAREN:
			case NextflowScriptParser.LBRACE:
			case NextflowScriptParser.LBRACK:
			case NextflowScriptParser.MUL:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 1941;
				this.mapEntryList();
				this.state = 1943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowScriptParser.COMMA) {
					{
					this.state = 1942;
					this.match(NextflowScriptParser.COMMA);
					}
				}

				}
				break;
			case NextflowScriptParser.COLON:
				{
				this.state = 1945;
				this.match(NextflowScriptParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1948;
			this.match(NextflowScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 324, NextflowScriptParser.RULE_mapEntryList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1950;
			this.mapEntry();
			this.state = 1955;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1951;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1952;
					this.mapEntry();
					}
					}
				}
				this.state = 1957;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
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
		this.enterRule(_localctx, 326, NextflowScriptParser.RULE_namedPropertyArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1958;
			this.namedPropertyArg();
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 1959;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1960;
				this.namedPropertyArg();
				}
				}
				this.state = 1965;
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
		this.enterRule(_localctx, 328, NextflowScriptParser.RULE_mapEntry);
		try {
			this.state = 1976;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.GStringBegin:
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.THREADSAFE:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.ASSERT:
			case NextflowScriptParser.BREAK:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.CASE:
			case NextflowScriptParser.CATCH:
			case NextflowScriptParser.CLASS:
			case NextflowScriptParser.CONST:
			case NextflowScriptParser.CONTINUE:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.DO:
			case NextflowScriptParser.ELSE:
			case NextflowScriptParser.ENUM:
			case NextflowScriptParser.EXTENDS:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.FINALLY:
			case NextflowScriptParser.FOR:
			case NextflowScriptParser.IF:
			case NextflowScriptParser.GOTO:
			case NextflowScriptParser.IMPLEMENTS:
			case NextflowScriptParser.IMPORT:
			case NextflowScriptParser.INSTANCEOF:
			case NextflowScriptParser.INTERFACE:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.NEW:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.RETURN:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.SUPER:
			case NextflowScriptParser.SWITCH:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.THIS:
			case NextflowScriptParser.THROW:
			case NextflowScriptParser.THROWS:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.TRY:
			case NextflowScriptParser.VOID:
			case NextflowScriptParser.VOLATILE:
			case NextflowScriptParser.WHILE:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
			case NextflowScriptParser.LPAREN:
			case NextflowScriptParser.LBRACE:
			case NextflowScriptParser.LBRACK:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1966;
				this.mapEntryLabel();
				this.state = 1967;
				this.match(NextflowScriptParser.COLON);
				this.state = 1968;
				this.nls();
				this.state = 1969;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1971;
				this.match(NextflowScriptParser.MUL);
				this.state = 1972;
				this.match(NextflowScriptParser.COLON);
				this.state = 1973;
				this.nls();
				this.state = 1974;
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
		this.enterRule(_localctx, 330, NextflowScriptParser.RULE_namedPropertyArg);
		try {
			this.state = 1988;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.GStringBegin:
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.THREADSAFE:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.ASSERT:
			case NextflowScriptParser.BREAK:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.CASE:
			case NextflowScriptParser.CATCH:
			case NextflowScriptParser.CLASS:
			case NextflowScriptParser.CONST:
			case NextflowScriptParser.CONTINUE:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.DO:
			case NextflowScriptParser.ELSE:
			case NextflowScriptParser.ENUM:
			case NextflowScriptParser.EXTENDS:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.FINALLY:
			case NextflowScriptParser.FOR:
			case NextflowScriptParser.IF:
			case NextflowScriptParser.GOTO:
			case NextflowScriptParser.IMPLEMENTS:
			case NextflowScriptParser.IMPORT:
			case NextflowScriptParser.INSTANCEOF:
			case NextflowScriptParser.INTERFACE:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.NEW:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.RETURN:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.SUPER:
			case NextflowScriptParser.SWITCH:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.THIS:
			case NextflowScriptParser.THROW:
			case NextflowScriptParser.THROWS:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.TRY:
			case NextflowScriptParser.VOID:
			case NextflowScriptParser.VOLATILE:
			case NextflowScriptParser.WHILE:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
			case NextflowScriptParser.LPAREN:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1978;
				this.namedPropertyArgLabel();
				this.state = 1979;
				this.match(NextflowScriptParser.COLON);
				this.state = 1980;
				this.nls();
				this.state = 1981;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1983;
				this.match(NextflowScriptParser.MUL);
				this.state = 1984;
				this.match(NextflowScriptParser.COLON);
				this.state = 1985;
				this.nls();
				this.state = 1986;
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
		this.enterRule(_localctx, 332, NextflowScriptParser.RULE_namedArg);
		try {
			this.state = 2000;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.StringLiteral:
			case NextflowScriptParser.GStringBegin:
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.THREADSAFE:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.ASSERT:
			case NextflowScriptParser.BREAK:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.CASE:
			case NextflowScriptParser.CATCH:
			case NextflowScriptParser.CLASS:
			case NextflowScriptParser.CONST:
			case NextflowScriptParser.CONTINUE:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.DO:
			case NextflowScriptParser.ELSE:
			case NextflowScriptParser.ENUM:
			case NextflowScriptParser.EXTENDS:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.FINALLY:
			case NextflowScriptParser.FOR:
			case NextflowScriptParser.IF:
			case NextflowScriptParser.GOTO:
			case NextflowScriptParser.IMPLEMENTS:
			case NextflowScriptParser.IMPORT:
			case NextflowScriptParser.INSTANCEOF:
			case NextflowScriptParser.INTERFACE:
			case NextflowScriptParser.NATIVE:
			case NextflowScriptParser.NEW:
			case NextflowScriptParser.NON_SEALED:
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.RETURN:
			case NextflowScriptParser.SEALED:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.SUPER:
			case NextflowScriptParser.SWITCH:
			case NextflowScriptParser.SYNCHRONIZED:
			case NextflowScriptParser.THIS:
			case NextflowScriptParser.THROW:
			case NextflowScriptParser.THROWS:
			case NextflowScriptParser.TRANSIENT:
			case NextflowScriptParser.TRY:
			case NextflowScriptParser.VOID:
			case NextflowScriptParser.VOLATILE:
			case NextflowScriptParser.WHILE:
			case NextflowScriptParser.IntegerLiteral:
			case NextflowScriptParser.FloatingPointLiteral:
			case NextflowScriptParser.BooleanLiteral:
			case NextflowScriptParser.NullLiteral:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1990;
				this.namedArgLabel();
				this.state = 1991;
				this.match(NextflowScriptParser.COLON);
				this.state = 1992;
				this.nls();
				this.state = 1993;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1995;
				this.match(NextflowScriptParser.MUL);
				this.state = 1996;
				this.match(NextflowScriptParser.COLON);
				this.state = 1997;
				this.nls();
				this.state = 1998;
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
		this.enterRule(_localctx, 334, NextflowScriptParser.RULE_mapEntryLabel);
		try {
			this.state = 2004;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2002;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2003;
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
		this.enterRule(_localctx, 336, NextflowScriptParser.RULE_namedPropertyArgLabel);
		try {
			this.state = 2008;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2006;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2007;
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
		this.enterRule(_localctx, 338, NextflowScriptParser.RULE_namedArgLabel);
		try {
			this.state = 2012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2010;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2011;
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
		this.enterRule(_localctx, 340, NextflowScriptParser.RULE_creator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2014;
			this.createdName();
			this.state = 2030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 2015;
				this.nls();
				this.state = 2016;
				this.arguments();
				this.state = 2018;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 2017;
					this.anonymousInnerClassDeclaration(0);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 2021;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2020;
						this.dim();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2023;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 2028;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
				case 1:
					{
					this.state = 2025;
					this.nls();
					this.state = 2026;
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
		this.enterRule(_localctx, 342, NextflowScriptParser.RULE_dim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2032;
			this.annotationsOpt();
			this.state = 2033;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 2035;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				this.state = 2034;
				this.expression(0);
				}
				break;
			}
			this.state = 2037;
			this.match(NextflowScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 344, NextflowScriptParser.RULE_arrayInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2039;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 2040;
			this.nls();
			this.state = 2044;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 2041;
				this.variableInitializers();
				this.state = 2042;
				this.nls();
				}
				break;
			}
			this.state = 2046;
			this.match(NextflowScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 346, NextflowScriptParser.RULE_anonymousInnerClassDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2048;
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
		this.enterRule(_localctx, 348, NextflowScriptParser.RULE_createdName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2050;
			this.annotationsOpt();
			this.state = 2056;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.BuiltInPrimitiveType:
				{
				this.state = 2051;
				this.primitiveType();
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.YIELD:
			case NextflowScriptParser.PERMITS:
			case NextflowScriptParser.RECORD:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 2052;
				this.qualifiedClassName();
				this.state = 2054;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 2053;
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
		this.enterRule(_localctx, 350, NextflowScriptParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2058;
			this.match(NextflowScriptParser.LT);
			this.state = 2059;
			this.nls();
			this.state = 2060;
			this.typeList();
			this.state = 2061;
			this.nls();
			this.state = 2062;
			this.match(NextflowScriptParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 352, NextflowScriptParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2067;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2064;
				this.match(NextflowScriptParser.LT);
				this.state = 2065;
				this.match(NextflowScriptParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2066;
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
		this.enterRule(_localctx, 354, NextflowScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2069;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 2071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 2070;
				this.enhancedArgumentListInPar();
				}
				break;
			}
			this.state = 2074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.COMMA) {
				{
				this.state = 2073;
				this.match(NextflowScriptParser.COMMA);
				}
			}

			this.state = 2076;
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
		this.enterRule(_localctx, 356, NextflowScriptParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2078;
			this.firstArgumentListElement();
			this.state = 2085;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2079;
					this.match(NextflowScriptParser.COMMA);
					this.state = 2080;
					this.nls();
					this.state = 2081;
					this.argumentListElement();
					}
					}
				}
				this.state = 2087;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
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
		this.enterRule(_localctx, 358, NextflowScriptParser.RULE_enhancedArgumentListInPar);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2088;
			this.enhancedArgumentListElement();
			this.state = 2095;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2089;
					this.match(NextflowScriptParser.COMMA);
					this.state = 2090;
					this.nls();
					this.state = 2091;
					this.enhancedArgumentListElement();
					}
					}
				}
				this.state = 2097;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
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
		this.enterRule(_localctx, 360, NextflowScriptParser.RULE_firstArgumentListElement);
		try {
			this.state = 2100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2098;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2099;
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
		this.enterRule(_localctx, 362, NextflowScriptParser.RULE_argumentListElement);
		try {
			this.state = 2104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2102;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2103;
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
		this.enterRule(_localctx, 364, NextflowScriptParser.RULE_enhancedArgumentListElement);
		try {
			this.state = 2109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2106;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2107;
				this.standardLambdaExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2108;
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
		this.enterRule(_localctx, 366, NextflowScriptParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2111;
			this.match(NextflowScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 368, NextflowScriptParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2113;
			this.match(NextflowScriptParser.CapitalizedIdentifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 370, NextflowScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2115;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.YIELD))) !== 0) || _la === NextflowScriptParser.PERMITS || _la === NextflowScriptParser.RECORD || _la === NextflowScriptParser.CapitalizedIdentifier || _la === NextflowScriptParser.Identifier)) {
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
		this.enterRule(_localctx, 372, NextflowScriptParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2117;
			_la = this._input.LA(1);
			if (!(_la === NextflowScriptParser.BuiltInPrimitiveType || _la === NextflowScriptParser.VOID)) {
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
		this.enterRule(_localctx, 374, NextflowScriptParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2119;
			_la = this._input.LA(1);
			if (!(((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (NextflowScriptParser.AS - 7)) | (1 << (NextflowScriptParser.DEF - 7)) | (1 << (NextflowScriptParser.IN - 7)) | (1 << (NextflowScriptParser.TRAIT - 7)) | (1 << (NextflowScriptParser.THREADSAFE - 7)) | (1 << (NextflowScriptParser.VAR - 7)) | (1 << (NextflowScriptParser.BuiltInPrimitiveType - 7)) | (1 << (NextflowScriptParser.ABSTRACT - 7)) | (1 << (NextflowScriptParser.ASSERT - 7)) | (1 << (NextflowScriptParser.BREAK - 7)) | (1 << (NextflowScriptParser.YIELD - 7)) | (1 << (NextflowScriptParser.CASE - 7)) | (1 << (NextflowScriptParser.CATCH - 7)) | (1 << (NextflowScriptParser.CLASS - 7)) | (1 << (NextflowScriptParser.CONST - 7)) | (1 << (NextflowScriptParser.CONTINUE - 7)) | (1 << (NextflowScriptParser.DEFAULT - 7)) | (1 << (NextflowScriptParser.DO - 7)) | (1 << (NextflowScriptParser.ELSE - 7)) | (1 << (NextflowScriptParser.ENUM - 7)) | (1 << (NextflowScriptParser.EXTENDS - 7)) | (1 << (NextflowScriptParser.FINAL - 7)) | (1 << (NextflowScriptParser.FINALLY - 7)) | (1 << (NextflowScriptParser.FOR - 7)) | (1 << (NextflowScriptParser.IF - 7)) | (1 << (NextflowScriptParser.GOTO - 7)) | (1 << (NextflowScriptParser.IMPLEMENTS - 7)) | (1 << (NextflowScriptParser.IMPORT - 7)) | (1 << (NextflowScriptParser.INSTANCEOF - 7)) | (1 << (NextflowScriptParser.INTERFACE - 7)) | (1 << (NextflowScriptParser.NATIVE - 7)) | (1 << (NextflowScriptParser.NEW - 7)))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (NextflowScriptParser.NON_SEALED - 39)) | (1 << (NextflowScriptParser.PACKAGE - 39)) | (1 << (NextflowScriptParser.PERMITS - 39)) | (1 << (NextflowScriptParser.PRIVATE - 39)) | (1 << (NextflowScriptParser.PROTECTED - 39)) | (1 << (NextflowScriptParser.PUBLIC - 39)) | (1 << (NextflowScriptParser.RECORD - 39)) | (1 << (NextflowScriptParser.RETURN - 39)) | (1 << (NextflowScriptParser.SEALED - 39)) | (1 << (NextflowScriptParser.STATIC - 39)) | (1 << (NextflowScriptParser.STRICTFP - 39)) | (1 << (NextflowScriptParser.SUPER - 39)) | (1 << (NextflowScriptParser.SWITCH - 39)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 39)) | (1 << (NextflowScriptParser.THIS - 39)) | (1 << (NextflowScriptParser.THROW - 39)) | (1 << (NextflowScriptParser.THROWS - 39)) | (1 << (NextflowScriptParser.TRANSIENT - 39)) | (1 << (NextflowScriptParser.TRY - 39)) | (1 << (NextflowScriptParser.VOID - 39)) | (1 << (NextflowScriptParser.VOLATILE - 39)) | (1 << (NextflowScriptParser.WHILE - 39)) | (1 << (NextflowScriptParser.BooleanLiteral - 39)) | (1 << (NextflowScriptParser.NullLiteral - 39)))) !== 0))) {
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
		this.enterRule(_localctx, 376, NextflowScriptParser.RULE_rparen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2121;
			this.match(NextflowScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 378, NextflowScriptParser.RULE_nls);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2126;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2123;
					this.match(NextflowScriptParser.NL);
					}
					}
				}
				this.state = 2128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
		this.enterRule(_localctx, 380, NextflowScriptParser.RULE_sep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2130;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2129;
					_la = this._input.LA(1);
					if (!(_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL)) {
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
				this.state = 2132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
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
		case 46:
			return this.classBody_sempred(_localctx as ClassBodyContext, predIndex);

		case 107:
			return this.localVariableDeclaration_sempred(_localctx as LocalVariableDeclarationContext, predIndex);

		case 121:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 146:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 148:
			return this.commandExpression_sempred(_localctx as CommandExpressionContext, predIndex);

		case 150:
			return this.pathExpression_sempred(_localctx as PathExpressionContext, predIndex);
		}
		return true;
	}
	private classBody_sempred(_localctx: ClassBodyContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  2 == _localctx.t ;
		}
		return true;
	}
	private localVariableDeclaration_sempred(_localctx: LocalVariableDeclarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  !GroovyParser.isInvalidLocalVariableDeclaration(this._input) ;
		}
		return true;
	}
	private statement_sempred(_localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  this.inSwitchExpressionLevel > 0 ;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA0\u0859\x04" +
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
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x03\x02\x07\x02\u0182\n\x02" +
		"\f\x02\x0E\x02\u0185\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\u018D\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u0199\n\x05\f\x05\x0E\x05\u019C" +
		"\v\x05\x03\x05\x03\x05\x05\x05\u01A0\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\u01A6\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u01AC" +
		"\n\x07\f\x07\x0E\x07\u01AF\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x06" +
		"\b\u01B6\n\b\r\b\x0E\b\u01B7\x03\b\x03\b\x06\b\u01BC\n\b\r\b\x0E\b\u01BD" +
		"\x03\b\x03\b\x03\b\x03\b\x06\b\u01C4\n\b\r\b\x0E\b\u01C5\x03\b\x03\b\x06" +
		"\b\u01CA\n\b\r\b\x0E\b\u01CB\x03\b\x03\b\x06\b\u01D0\n\b\r\b\x0E\b\u01D1" +
		"\x03\b\x03\b\x06\b\u01D6\n\b\r\b\x0E\b\u01D7\x05\b\u01DA\n\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01E2\n\t\f\t\x0E\t\u01E5\v\t\x03\n\x03" +
		"\n\x05\n\u01E9\n\n\x03\n\x03\n\x03\n\x03\n\x07\n\u01EF\n\n\f\n\x0E\n\u01F2" +
		"\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u01F9\n\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u020C\n\x0E\f\x0E\x0E\x0E\u020F\v\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\u021A\n\x0F\f\x0F\x0E\x0F\u021D\v\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\u022A\n\x12\f\x12\x0E\x12\u022D\v\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x05\x13\u0233\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0239\n\x13" +
		"\f\x13\x0E\x13\u023C\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0243\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\u0256\n\x17\f\x17\x0E\x17\u0259\v\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0264" +
		"\n\x18\f\x18\x0E\x18\u0267\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0274\n\x1B\f" +
		"\x1B\x0E\x1B\u0277\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u027D" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0282\n\x1C\f\x1C\x0E\x1C\u0285" +
		"\v\x1C\x05\x1C\u0287\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x06\x1D\u028D" +
		"\n\x1D\r\x1D\x0E\x1D\u028E\x05\x1D\u0291\n\x1D\x03\x1D\x03\x1D\x06\x1D" +
		"\u0295\n\x1D\r\x1D\x0E\x1D\u0296\x05\x1D\u0299\n\x1D\x03\x1D\x03\x1D\x06" +
		"\x1D\u029D\n\x1D\r\x1D\x0E\x1D\u029E\x05\x1D\u02A1\n\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x07\x1E\u02A7\n\x1E\f\x1E\x0E\x1E\u02AA\v\x1E\x03\x1E" +
		"\x05\x1E\u02AD\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x05" +
		" \u02B6\n \x03 \x03 \x03 \x03 \x03 \x05 \u02BD\n \x03!\x03!\x03!\x03\"" +
		"\x03\"\x05\"\u02C4\n\"\x03#\x03#\x03#\x05#\u02C9\n#\x03$\x03$\x03$\x03" +
		"$\x07$\u02CF\n$\f$\x0E$\u02D2\v$\x03%\x03%\x07%\u02D6\n%\f%\x0E%\u02D9" +
		"\v%\x05%\u02DB\n%\x03&\x03&\x03&\x03&\x07&\u02E1\n&\f&\x0E&\u02E4\v&\x03" +
		"\'\x03\'\x05\'\u02E8\n\'\x03(\x03(\x05(\u02EC\n(\x03)\x03)\x03)\x05)\u02F1" +
		"\n)\x03*\x03*\x03*\x03*\x07*\u02F7\n*\f*\x0E*\u02FA\v*\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x07+\u0303\n+\f+\x0E+\u0306\v+\x03+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x05,\u0311\n,\x03-\x03-\x03-\x03-\x03-\x07" +
		"-\u0318\n-\f-\x0E-\u031B\v-\x03.\x03.\x03.\x03.\x03.\x07.\u0322\n.\f." +
		"\x0E.\u0325\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/" +
		"\x03/\x03/\x05/\u0334\n/\x03/\x03/\x03/\x03/\x05/\u033A\n/\x03/\x03/\x03" +
		"/\x05/\u033F\n/\x03/\x03/\x03/\x03/\x03/\x05/\u0346\n/\x03/\x03/\x03/" +
		"\x03/\x03/\x05/\u034D\n/\x03/\x03/\x03/\x03/\x03/\x05/\u0354\n/\x03/\x03" +
		"/\x03/\x030\x030\x030\x030\x030\x030\x030\x050\u0360\n0\x030\x050\u0363" +
		"\n0\x030\x050\u0366\n0\x030\x030\x030\x030\x070\u036C\n0\f0\x0E0\u036F" +
		"\v0\x050\u0371\n0\x030\x050\u0374\n0\x030\x030\x031\x031\x031\x031\x03" +
		"1\x031\x071\u037E\n1\f1\x0E1\u0381\v1\x032\x032\x032\x052\u0386\n2\x03" +
		"2\x052\u0389\n2\x033\x033\x053\u038D\n3\x033\x033\x053\u0391\n3\x034\x03" +
		"4\x034\x034\x034\x054\u0398\n4\x054\u039A\n4\x035\x035\x055\u039E\n5\x03" +
		"5\x035\x035\x055\u03A3\n5\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x055\u03B0\n5\x035\x035\x035\x055\u03B5\n5\x055\u03B7\n5\x03" +
		"6\x036\x036\x036\x037\x037\x057\u03BF\n7\x038\x038\x058\u03C3\n8\x039" +
		"\x039\x03:\x03:\x03:\x03:\x03:\x07:\u03CC\n:\f:\x0E:\u03CF\v:\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x05;\u03D7\n;\x03<\x03<\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x07>\u03E3\n>\f>\x0E>\u03E6\v>\x03>\x03>\x05>\u03EA\n" +
		">\x03?\x03?\x03?\x03?\x06?\u03F0\n?\r?\x0E?\u03F1\x03@\x05@\u03F5\n@\x03" +
		"A\x03A\x03A\x05A\u03FA\nA\x03A\x03A\x03B\x03B\x03B\x05B\u0401\nB\x03B" +
		"\x05B\u0404\nB\x03B\x03B\x03C\x03C\x05C\u040A\nC\x03C\x05C\u040D\nC\x03" +
		"D\x03D\x05D\u0411\nD\x03E\x03E\x05E\u0415\nE\x03F\x03F\x03G\x03G\x03G" +
		"\x03G\x03G\x03G\x03G\x07G\u0420\nG\fG\x0EG\u0423\vG\x03G\x03G\x03G\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u042F\nH\x05H\u0431\nH\x03I\x03I" +
		"\x03I\x03J\x03J\x03J\x03J\x03J\x07J\u043B\nJ\fJ\x0EJ\u043E\vJ\x03K\x03" +
		"K\x05K\u0442\nK\x03K\x03K\x03L\x03L\x05L\u0448\nL\x03L\x03L\x03L\x03L" +
		"\x07L\u044E\nL\fL\x0EL\u0451\vL\x03M\x03M\x03M\x03N\x03N\x05N\u0458\n" +
		"N\x03N\x05N\u045B\nN\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0463\nN\x03O" +
		"\x03O\x03P\x03P\x03P\x07P\u046A\nP\fP\x0EP\u046D\vP\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x05Q\u0474\nQ\x03R\x03R\x03R\x07R\u0479\nR\fR\x0ER\u047C\vR\x03" +
		"S\x03S\x03S\x03T\x03T\x03T\x03T\x07T\u0485\nT\fT\x0ET\u0488\vT\x03U\x03" +
		"U\x03U\x03U\x03U\x05U\u048F\nU\x03V\x03V\x03V\x03V\x07V\u0495\nV\fV\x0E" +
		"V\u0498\vV\x03V\x03V\x03W\x03W\x05W\u049E\nW\x03X\x03X\x07X\u04A2\nX\f" +
		"X\x0EX\u04A5\vX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03[\x03[\x03\\\x03\\\x05\\\u04B7\n\\\x03]\x03]\x05]\u04BB\n]\x03" +
		"^\x03^\x03^\x03^\x03^\x05^\u04C2\n^\x03^\x03^\x05^\u04C6\n^\x03^\x05^" +
		"\u04C9\n^\x03^\x03^\x03^\x03_\x03_\x05_\u04D0\n_\x03`\x05`\u04D3\n`\x03" +
		"a\x03a\x03a\x03a\x07a\u04D9\na\fa\x0Ea\u04DC\va\x03a\x05a\u04DF\na\x03" +
		"b\x03b\x03b\x03b\x07b\u04E5\nb\fb\x0Eb\u04E8\vb\x03b\x03b\x05b\u04EC\n" +
		"b\x03c\x03c\x03c\x03c\x03c\x05c\u04F3\nc\x03c\x03c\x05c\u04F7\nc\x03d" +
		"\x03d\x05d\u04FB\nd\x03e\x03e\x03f\x03f\x03f\x07f\u0502\nf\ff\x0Ef\u0505" +
		"\vf\x03g\x03g\x03g\x03g\x03g\x03g\x03h\x03h\x05h\u050F\nh\x03i\x03i\x03" +
		"i\x05i\u0514\ni\x03j\x03j\x03j\x03j\x07j\u051A\nj\fj\x0Ej\u051D\vj\x03" +
		"j\x05j\u0520\nj\x05j\u0522\nj\x03j\x03j\x03k\x03k\x05k\u0528\nk\x03k\x03" +
		"k\x03k\x03l\x03l\x05l\u052F\nl\x03m\x03m\x03m\x03n\x03n\x03n\x05n\u0537" +
		"\nn\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x05n\u0540\nn\x03n\x03n\x03n\x05" +
		"n\u0545\nn\x03o\x03o\x03o\x03o\x07o\u054B\no\fo\x0Eo\u054E\vo\x03o\x03" +
		"o\x03p\x05p\u0553\np\x03p\x03p\x03q\x03q\x03q\x03q\x06q\u055B\nq\rq\x0E" +
		"q\u055C\x03q\x03q\x03r\x03r\x05r\u0563\nr\x03s\x03s\x03s\x03s\x03s\x03" +
		"s\x05s\u056B\ns\x03s\x03s\x03s\x03s\x05s\u0571\ns\x03t\x03t\x03t\x03t" +
		"\x03t\x03t\x06t\u0579\nt\rt\x0Et\u057A\x03t\x03t\x05t\u057F\nt\x03t\x03" +
		"t\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x05u\u0596\nu\x03v\x03v\x05v\u059A\nv\x03w" +
		"\x03w\x05w\u059E\nw\x03x\x03x\x03x\x03y\x03y\x05y\u05A5\ny\x03y\x03y\x03" +
		"y\x03y\x03y\x07y\u05AC\ny\fy\x0Ey\u05AF\vy\x03y\x03y\x03y\x05y\u05B4\n" +
		"y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u05BD\nz\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u05CA\n{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u05DB\n" +
		"{\x03|\x03|\x03|\x03|\x05|\u05E1\n|\x03|\x03|\x03|\x03|\x03|\x03}\x03" +
		"}\x03}\x07}\u05EB\n}\f}\x0E}\u05EE\v}\x03~\x03~\x03~\x03~\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x05\x7F\u05F8\n\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x07\x80\u0600\n\x80\f\x80\x0E\x80\u0603\v\x80\x03\x81" +
		"\x03\x81\x05\x81\u0607\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u060D" +
		"\n\x82\f\x82\x0E\x82\u0610\v\x82\x03\x82\x03\x82\x03\x82\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u061B\n\x83\x03\x84\x03\x84\x05" +
		"\x84\u061F\n\x84\x03\x85\x03\x85\x05\x85\u0623\n\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x86\x05\x86\u062A\n\x86\x03\x86\x03\x86\x05\x86\u062E" +
		"\n\x86\x03\x86\x03\x86\x05\x86\u0632\n\x86\x03\x87\x03\x87\x05\x87\u0636" +
		"\n\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x07\x8C\u0649\n\x8C\f\x8C\x0E\x8C\u064C\v\x8C\x03\x8D\x05\x8D\u064F\n" +
		"\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u0655\n\x8E\x03\x8F\x03\x8F" +
		"\x03\x90\x03\x90\x05\x90\u065B\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x07\x91\u0663\n\x91\f\x91\x0E\x91\u0666\v\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x92\x03\x92\x03\x92\x06\x92\u066E\n\x92\r\x92\x0E\x92" +
		"\u066F\x03\x92\x03\x92\x03\x93\x03\x93\x03\x93\x05\x93\u0677\n\x93\x03" +
		"\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
		"\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
		"\x94\x03\x94\x05\x94\u068D\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x05\x94\u06A8\n\x94\x03\x94\x05\x94\u06AB\n\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u06EB" +
		"\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x07\x94\u06FB\n\x94\f" +
		"\x94\x0E\x94\u06FE\v\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95" +
		"\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u070A\n\x95\x03\x96\x03\x96\x03" +
		"\x96\x03\x96\x05\x96\u0710\n\x96\x03\x96\x07\x96\u0713\n\x96\f\x96\x0E" +
		"\x96\u0716\v\x96\x03\x97\x03\x97\x06\x97\u071A\n\x97\r\x97\x0E\x97\u071B" +
		"\x03\x97\x05\x97\u071F\n\x97\x03\x98\x03\x98\x03\x98\x05\x98\u0724\n\x98" +
		"\x03\x98\x03\x98\x03\x98\x07\x98\u0729\n\x98\f\x98\x0E\x98\u072C\v\x98" +
		"\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99" +
		"\x03\x99\x03\x99\x05\x99\u0739\n\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05" +
		"\x99\u073F\n\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99" +
		"\u0747\n\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03" +
		"\x99\x03\x99\x05\x99\u0752\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A" +
		"\u0758\n\x9A\x03\x9B\x03\x9B\x05\x9B\u075C\n\x9B\x03\x9C\x03\x9C\x05\x9C" +
		"\u0760\n\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u0767\n\x9D" +
		"\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x05\x9E\u076D\n\x9E\x03\x9E\x03\x9E\x03" +
		"\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
		"\x9E\x03\x9E\x05\x9E\u077C\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F" +
		"\u0782\n\x9F\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u0787\n\xA0\x03\xA1\x03\xA1" +
		"\x03\xA1\x05\xA1\u078C\n\xA1\x03\xA2\x03\xA2\x05\xA2\u0790\n\xA2\x03\xA2" +
		"\x05\xA2\u0793\n\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x05\xA3\u079A" +
		"\n\xA3\x03\xA3\x05\xA3\u079D\n\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03" +
		"\xA4\x07\xA4\u07A4\n\xA4\f\xA4\x0E\xA4\u07A7\v\xA4\x03\xA5\x03\xA5\x03" +
		"\xA5\x07\xA5\u07AC\n\xA5\f\xA5\x0E\xA5\u07AF\v\xA5\x03\xA6\x03\xA6\x03" +
		"\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u07BB" +
		"\n\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7" +
		"\x03\xA7\x03\xA7\x05\xA7\u07C7\n\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03" +
		"\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u07D3\n\xA8\x03\xA9" +
		"\x03\xA9\x05\xA9\u07D7\n\xA9\x03\xAA\x03\xAA\x05\xAA\u07DB\n\xAA\x03\xAB" +
		"\x03\xAB\x05\xAB\u07DF\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x05\xAC\u07E5" +
		"\n\xAC\x03\xAC\x06\xAC\u07E8\n\xAC\r\xAC\x0E\xAC\u07E9\x03\xAC\x03\xAC" +
		"\x03\xAC\x05\xAC\u07EF\n\xAC\x05\xAC\u07F1\n\xAC\x03\xAD\x03\xAD\x03\xAD" +
		"\x05\xAD\u07F6\n\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03" +
		"\xAE\x05\xAE\u07FF\n\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x03\xB0" +
		"\x03\xB0\x03\xB0\x05\xB0\u0809\n\xB0\x05\xB0\u080B\n\xB0\x03\xB1\x03\xB1" +
		"\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB2\x05\xB2\u0816" +
		"\n\xB2\x03\xB3\x03\xB3\x05\xB3\u081A\n\xB3\x03\xB3\x05\xB3\u081D\n\xB3" +
		"\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x07\xB4\u0826" +
		"\n\xB4\f\xB4\x0E\xB4\u0829\v\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5" +
		"\x07\xB5\u0830\n\xB5\f\xB5\x0E\xB5\u0833\v\xB5\x03\xB6\x03\xB6\x05\xB6" +
		"\u0837\n\xB6\x03\xB7\x03\xB7\x05\xB7\u083B\n\xB7\x03\xB8\x03\xB8\x03\xB8" +
		"\x05\xB8\u0840\n\xB8\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03" +
		"\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBF\x07\xBF\u084F\n\xBF" +
		"\f\xBF\x0E\xBF\u0852\v\xBF\x03\xC0\x06\xC0\u0855\n\xC0\r\xC0\x0E\xC0\u0856" +
		"\x03\xC0\x02\x02\x03\u0126\xC1\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02" +
		"\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02" +
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02" +
		"\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02" +
		"\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02" +
		"\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\x02\x1C\x04\x02qq\x93" +
		"\x93\x04\x02qq\x95\x95\b\x02\n\n\x0E\x0E\'\'66::==\b\x02\x10\x10\x19\x19" +
		"\x1E\x1E";
	private static readonly _serializedATNSegment1: string =
		")),.13\b\x02\n\n\x0E\x0E\x10\x10\x1E\x1E,.23\x04\x02\x1D\x1D44\x04\x02" +
		"__gg\x04\x02\v\vgg\x03\x02no\x04\x02UUgg\x03\x02de\x03\x02nq\x04\x02r" +
		"sww\x03\x02pq\x03\x02CF\x06\x02\v\vWWbcij\x05\x02RThhkk\x03\x02NO\x05" +
		"\x02\t\t%%VV\x05\x02QQaax\x83\x05\x02GHJJ``\x04\x02II\\\\\t\x02\t\t\v" +
		"\f\x0E\x0E\x13\x13++//\x84\x85\x04\x02\x0F\x0F<<\x04\x02\t>AB\x04\x02" +
		"^^\x89\x89\x02\u08D1\x02\u0183\x03\x02\x02\x02\x04\u018C\x03\x02\x02\x02" +
		"\x06\u018E\x03\x02\x02\x02\b\u019F\x03\x02\x02\x02\n\u01A5\x03\x02\x02" +
		"\x02\f\u01A7\x03\x02\x02\x02\x0E\u01D9\x03\x02\x02\x02\x10\u01DB\x03\x02" +
		"\x02\x02\x12\u01E8\x03\x02\x02\x02\x14\u01F8\x03\x02\x02\x02\x16\u01FA" +
		"\x03\x02\x02\x02\x18\u01FF\x03\x02\x02\x02\x1A\u0204\x03\x02\x02\x02\x1C" +
		"\u0212\x03\x02\x02\x02\x1E\u0220\x03\x02\x02\x02 \u0222\x03\x02\x02\x02" +
		"\"\u0224\x03\x02\x02\x02$\u0232\x03\x02\x02\x02&\u0242\x03\x02\x02\x02" +
		"(\u0244\x03\x02\x02\x02*\u0249\x03\x02\x02\x02,\u024E\x03\x02\x02\x02" +
		".\u025C\x03\x02\x02\x020\u026A\x03\x02\x02\x022\u026C\x03\x02\x02\x02" +
		"4\u026E\x03\x02\x02\x026\u027A\x03\x02\x02\x028\u0290\x03\x02\x02\x02" +
		":\u02A2\x03\x02\x02\x02<\u02AE\x03\x02\x02\x02>\u02B2\x03\x02\x02\x02" +
		"@\u02BE\x03\x02\x02\x02B\u02C3\x03\x02\x02\x02D\u02C8\x03\x02\x02\x02" +
		"F\u02CA\x03\x02\x02\x02H\u02DA\x03\x02\x02\x02J\u02DC\x03\x02\x02\x02" +
		"L\u02E7\x03\x02\x02\x02N\u02EB\x03\x02\x02\x02P\u02F0\x03\x02\x02\x02" +
		"R\u02F2\x03\x02\x02\x02T\u02FB\x03\x02\x02\x02V\u030A\x03\x02\x02\x02" +
		"X\u0312\x03\x02\x02\x02Z\u031C\x03\x02\x02\x02\\\u0333\x03\x02\x02\x02" +
		"^\u0358\x03\x02\x02\x02`\u0377\x03\x02\x02\x02b\u0382\x03\x02\x02\x02" +
		"d\u0390\x03\x02\x02\x02f\u0399\x03\x02\x02\x02h\u039B\x03\x02\x02\x02" +
		"j\u03B8\x03\x02\x02\x02l\u03BE\x03\x02\x02\x02n\u03C2\x03\x02\x02\x02" +
		"p\u03C4\x03\x02\x02\x02r\u03C6\x03\x02\x02\x02t\u03D0\x03\x02\x02\x02" +
		"v\u03D8\x03\x02\x02\x02x\u03DA\x03\x02\x02\x02z\u03DC\x03\x02\x02\x02" +
		"|\u03EF\x03\x02\x02\x02~\u03F4\x03\x02\x02\x02\x80\u03F6\x03\x02\x02\x02" +
		"\x82\u03FD\x03\x02\x02\x02\x84\u0409\x03\x02\x02\x02\x86\u040E\x03\x02" +
		"\x02\x02\x88\u0412\x03\x02\x02\x02\x8A\u0416\x03\x02\x02\x02\x8C\u0418" +
		"\x03\x02\x02\x02\x8E\u0430\x03\x02\x02\x02\x90\u0432\x03\x02\x02\x02\x92" +
		"\u0435\x03\x02\x02\x02\x94\u043F\x03\x02\x02\x02\x96\u0447\x03\x02\x02" +
		"\x02\x98\u0452\x03\x02\x02\x02\x9A\u0455\x03\x02\x02\x02\x9C\u0464\x03" +
		"\x02\x02\x02\x9E\u0466\x03\x02\x02\x02\xA0\u0473\x03\x02\x02\x02\xA2\u047A" +
		"\x03\x02\x02\x02\xA4\u047D\x03\x02\x02\x02\xA6\u0480\x03\x02\x02\x02\xA8" +
		"\u048E\x03\x02\x02\x02\xAA\u0490\x03\x02\x02\x02\xAC\u049D\x03\x02\x02" +
		"\x02\xAE\u049F\x03\x02\x02\x02\xB0\u04A6\x03\x02\x02\x02\xB2\u04AC\x03" +
		"\x02\x02\x02\xB4\u04B2\x03\x02\x02\x02\xB6\u04B6\x03\x02\x02\x02\xB8\u04BA" +
		"\x03\x02\x02\x02\xBA\u04BC\x03\x02\x02\x02\xBC\u04CF\x03\x02\x02\x02\xBE" +
		"\u04D2\x03\x02\x02\x02\xC0\u04D4\x03\x02\x02\x02\xC2\u04EB\x03\x02\x02" +
		"\x02\xC4\u04ED\x03\x02\x02\x02\xC6\u04FA\x03\x02\x02\x02\xC8\u04FC\x03" +
		"\x02\x02\x02\xCA\u04FE\x03\x02\x02\x02\xCC\u0506\x03\x02\x02\x02\xCE\u050E" +
		"\x03\x02\x02\x02\xD0\u0513\x03\x02\x02\x02\xD2\u0515\x03\x02\x02\x02\xD4" +
		"\u0525\x03\x02\x02\x02\xD6\u052E\x03\x02\x02\x02\xD8\u0530\x03\x02\x02" +
		"\x02\xDA\u0544\x03\x02\x02\x02\xDC\u0546\x03\x02\x02\x02\xDE\u0552\x03" +
		"\x02\x02\x02\xE0\u0556\x03\x02\x02\x02\xE2\u0562\x03\x02\x02\x02\xE4\u0564" +
		"\x03\x02\x02\x02\xE6\u0572\x03\x02\x02\x02\xE8\u0595\x03\x02\x02\x02\xEA" +
		"\u0597\x03\x02\x02\x02\xEC\u059B\x03\x02\x02\x02\xEE\u059F\x03\x02\x02" +
		"\x02\xF0\u05A2\x03\x02\x02\x02\xF2\u05B5\x03\x02\x02\x02\xF4\u05DA\x03" +
		"\x02\x02\x02\xF6\u05DC\x03\x02\x02\x02\xF8\u05E7\x03\x02\x02\x02\xFA\u05EF" +
		"\x03\x02\x02\x02\xFC\u05F3\x03\x02\x02\x02\xFE\u05FB\x03\x02\x02\x02\u0100" +
		"\u0606\x03\x02\x02\x02\u0102\u0608\x03\x02\x02\x02\u0104\u061A\x03\x02" +
		"\x02\x02\u0106\u061E\x03\x02\x02\x02\u0108\u0620\x03\x02\x02\x02\u010A" +
		"\u0629\x03\x02\x02\x02\u010C\u0635\x03\x02\x02\x02\u010E\u0637\x03\x02" +
		"\x02\x02\u0110\u0639\x03\x02\x02\x02\u0112\u063D\x03\x02\x02\x02\u0114" +
		"\u063F\x03\x02\x02\x02\u0116\u0643\x03\x02\x02\x02\u0118\u064E\x03\x02" +
		"\x02\x02\u011A\u0654\x03\x02\x02\x02\u011C\u0656\x03\x02\x02\x02\u011E" +
		"\u0658\x03\x02\x02\x02\u0120\u065C\x03\x02\x02\x02\u0122\u066D\x03\x02" +
		"\x02\x02\u0124\u0676\x03\x02\x02\x02\u0126\u068C\x03\x02\x02\x02\u0128" +
		"\u0709\x03\x02\x02\x02\u012A\u070B\x03\x02\x02\x02\u012C\u0717\x03\x02" +
		"\x02\x02\u012E\u0723\x03\x02\x02\x02\u0130\u0751\x03\x02\x02\x02\u0132" +
		"\u0757\x03\x02\x02\x02\u0134\u075B\x03\x02\x02\x02\u0136\u075D\x03\x02" +
		"\x02\x02\u0138\u0763\x03\x02\x02\x02\u013A\u077B\x03\x02\x02\x02\u013C" +
		"\u0781\x03\x02\x02\x02\u013E\u0786\x03\x02\x02\x02\u0140\u078B\x03\x02" +
		"\x02\x02\u0142\u078D\x03\x02\x02\x02\u0144\u0796\x03\x02\x02\x02\u0146" +
		"\u07A0\x03\x02\x02\x02\u0148\u07A8\x03\x02\x02\x02\u014A\u07BA\x03\x02" +
		"\x02\x02\u014C\u07C6\x03\x02\x02\x02\u014E\u07D2\x03\x02\x02\x02\u0150" +
		"\u07D6\x03\x02\x02\x02\u0152\u07DA\x03\x02\x02\x02\u0154\u07DE\x03\x02" +
		"\x02\x02\u0156\u07E0\x03\x02\x02\x02\u0158\u07F2\x03\x02\x02\x02\u015A" +
		"\u07F9\x03\x02\x02\x02\u015C\u0802\x03\x02\x02\x02\u015E\u0804\x03\x02" +
		"\x02\x02\u0160\u080C\x03\x02\x02\x02\u0162\u0815\x03\x02\x02\x02\u0164" +
		"\u0817\x03\x02\x02\x02\u0166\u0820\x03\x02\x02\x02\u0168\u082A\x03\x02" +
		"\x02\x02\u016A\u0836\x03\x02\x02\x02\u016C\u083A\x03\x02\x02\x02\u016E" +
		"\u083F\x03\x02\x02\x02\u0170\u0841\x03\x02\x02\x02\u0172\u0843\x03\x02" +
		"\x02\x02\u0174\u0845\x03\x02\x02\x02\u0176\u0847\x03\x02\x02\x02\u0178" +
		"\u0849\x03\x02\x02\x02\u017A\u084B\x03\x02\x02\x02\u017C\u0850\x03\x02" +
		"\x02\x02\u017E\u0854\x03\x02\x02\x02\u0180\u0182\x05\x04\x03\x02\u0181" +
		"\u0180\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02" +
		"\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0186\u0187\x07\x02\x02\x03\u0187\x03\x03\x02\x02" +
		"\x02\u0188\u018D\x05\x06\x04\x02\u0189\u018D\x05h5\x02\u018A\u018D\x05" +
		"\f\x07\x02\u018B\u018D\x056\x1C\x02\u018C\u0188\x03\x02\x02\x02\u018C" +
		"\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018B\x03\x02" +
		"\x02\x02\u018D\x05\x03\x02\x02\x02\u018E\u018F\x07\x8C\x02\x02\u018F\u0190" +
		"\x05\b\x05\x02\u0190\u0191\x07\x8D\x02\x02\u0191\u0192\x05\u0126\x94\x02" +
		"\u0192\x07\x03\x02\x02\x02\u0193\u01A0\x05\n\x06\x02\u0194\u0195\x07Z" +
		"\x02\x02\u0195\u019A\x05\n\x06\x02\u0196\u0197\x07_\x02\x02\u0197\u0199" +
		"\x05\n\x06\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02" +
		"\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03" +
		"\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019E\x07[\x02\x02\u019E" +
		"\u01A0\x03\x02\x02\x02\u019F\u0193\x03\x02\x02\x02\u019F\u0194\x03\x02" +
		"\x02\x02\u01A0\t\x03\x02\x02\x02\u01A1\u01A6\x07\x85\x02\x02\u01A2\u01A3" +
		"\x07\x85\x02\x02\u01A3\u01A4\x07\t\x02\x02\u01A4\u01A6\x07\x85\x02\x02" +
		"\u01A5\u01A1\x03\x02\x02\x02\u01A5\u01A2\x03\x02\x02\x02\u01A6\v\x03\x02" +
		"\x02\x02\u01A7\u01A8\x07\x8E\x02\x02\u01A8\u01A9\x07\x85\x02\x02\u01A9" +
		"\u01AD\x07Z\x02\x02\u01AA\u01AC\x05\x0E\b\x02\u01AB\u01AA\x03\x02\x02" +
		"\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE" +
		"\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02" +
		"\u01B0\u01B1\x07[\x02\x02\u01B1\r\x03\x02\x02\x02\u01B2\u01DA\x05\x10" +
		"\t\x02\u01B3\u01B5\x07\x9A\x02\x02\u01B4\u01B6\x05\x12\n\x02\u01B5\u01B4" +
		"\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02" +
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01DA\x03\x02\x02\x02\u01B9\u01BB\x07" +
		"\x9B\x02\x02\u01BA\u01BC\x05$\x13\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC" +
		"\u01BD\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BE\u01DA\x03\x02\x02\x02\u01BF\u01C0\x07\x9C\x02\x02\u01C0" +
		"\u01DA\x05\u0126\x94\x02\u01C1\u01C3\x07\x9D\x02\x02\u01C2\u01C4\x05\xF4" +
		"{\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C3" +
		"\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01DA\x03\x02\x02\x02" +
		"\u01C7\u01C9\x07\x9E\x02\x02\u01C8\u01CA\x05\xF4{\x02\u01C9\u01C8\x03" +
		"\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC\u01DA\x03\x02\x02\x02\u01CD\u01CF\x07\x9F" +
		"\x02\x02\u01CE\u01D0\x05\xF4{\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D1" +
		"\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
		"\u01D2\u01DA\x03\x02\x02\x02\u01D3\u01D5\x07\xA0\x02\x02\u01D4\u01D6\x05" +
		"\xF4{\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
		"\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02" +
		"\x02\x02\u01D9\u01B2\x03\x02\x02\x02\u01D9\u01B3\x03\x02\x02\x02\u01D9" +
		"\u01B9\x03\x02\x02\x02\u01D9\u01BF\x03\x02\x02\x02\u01D9\u01C1\x03\x02" +
		"\x02\x02\u01D9\u01C7\x03\x02\x02\x02\u01D9\u01CD\x03\x02\x02\x02\u01D9" +
		"\u01D3\x03\x02\x02\x02\u01DA\x0F\x03\x02\x02\x02\u01DB\u01DC\x07\x85\x02" +
		"\x02\u01DC\u01E3\x05\u0126\x94\x02\u01DD\u01DE\x07_\x02\x02\u01DE\u01DF" +
		"\x07\x85\x02\x02\u01DF\u01E0\x07g\x02\x02\u01E0\u01E2\x05\u0126\x94\x02" +
		"\u01E1\u01DD\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03" +
		"\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\x11\x03\x02\x02\x02\u01E5" +
		"\u01E3\x03\x02\x02\x02\u01E6\u01E9\x05\x14\v\x02\u01E7\u01E9\x05 \x11" +
		"\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01F0" +
		"\x03\x02\x02\x02\u01EA\u01EB\x07_\x02\x02\u01EB\u01EC\x07\x85\x02\x02" +
		"\u01EC\u01ED\x07g\x02\x02\u01ED\u01EF\x05\u0126\x94\x02\u01EE\u01EA\x03" +
		"\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0" +
		"\u01F1\x03\x02\x02\x02\u01F1\x13\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02" +
		"\x02\u01F3\u01F9\x05\x16\f\x02\u01F4\u01F9\x05\x18\r\x02\u01F5\u01F9\x05" +
		"\x1A\x0E\x02\u01F6\u01F9\x05\x1C\x0F\x02\u01F7\u01F9\x05\x1E\x10\x02\u01F8" +
		"\u01F3\x03\x02\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F8\u01F5\x03\x02" +
		"\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9" +
		"\x15\x03\x02\x02\x02\u01FA\u01FB\x07\x8F\x02\x02\u01FB\u01FC\x07X\x02" +
		"\x02\u01FC\u01FD\x07\x85\x02\x02\u01FD\u01FE\x07Y\x02\x02\u01FE\x17\x03" +
		"\x02\x02\x02\u01FF\u0200\x07\x91\x02\x02\u0200\u0201\x07X\x02\x02\u0201" +
		"\u0202\x07\x85\x02\x02\u0202\u0203\x07Y\x02\x02\u0203\x19\x03\x02\x02" +
		"\x02\u0204\u0205\x07\x90\x02\x02\u0205\u0206\x07X\x02\x02\u0206\u020D" +
		"\x05\u0126\x94\x02\u0207\u0208\x07_\x02\x02\u0208\u0209\x07\x85\x02\x02" +
		"\u0209\u020A\x07g\x02\x02\u020A\u020C\x05\u0126\x94\x02\u020B\u0207\x03" +
		"\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020D\x03\x02" +
		"\x02\x02\u0210\u0211\x07Y\x02\x02\u0211\x1B\x03\x02\x02\x02\u0212\u0213" +
		"\x07\x92\x02\x02\u0213\u0214\x07X\x02\x02\u0214\u021B\x05\u0126\x94\x02" +
		"\u0215\u0216\x07_\x02\x02\u0216\u0217\x07\x85\x02\x02\u0217\u0218\x07" +
		"g\x02\x02\u0218\u021A\x05\u0126\x94\x02\u0219\u0215\x03\x02\x02\x02\u021A" +
		"\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02" +
		"\x02\x02\u021C\u021E\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021E" +
		"\u021F\x07Y\x02\x02\u021F\x1D\x03\x02\x02\x02\u0220\u0221\t\x02\x02\x02" +
		"\u0221\x1F\x03\x02\x02\x02\u0222\u0223\x05\"\x12\x02\u0223!\x03\x02\x02" +
		"\x02\u0224\u0225\x07\x94\x02\x02\u0225\u0226\x07X\x02\x02\u0226\u022B" +
		"\x05\x14\v\x02\u0227\u0228\x07_\x02\x02\u0228\u022A\x05\x14\v\x02\u0229" +
		"\u0227\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03\x02" +
		"\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D" +
		"\u022B\x03\x02\x02\x02\u022E\u022F\x07Y\x02\x02\u022F#\x03\x02\x02\x02" +
		"\u0230\u0233\x05&\x14\x02\u0231\u0233\x052\x1A\x02\u0232\u0230\x03\x02" +
		"\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u023A\x03\x02\x02\x02\u0234" +
		"\u0235\x07_\x02\x02\u0235\u0236\x07\x85\x02\x02\u0236\u0237\x07g\x02\x02" +
		"\u0237\u0239\x05\u0126\x94\x02\u0238\u0234\x03\x02\x02\x02\u0239\u023C" +
		"\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02" +
		"\u023B%\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0243\x05(\x15" +
		"\x02\u023E\u0243\x05*\x16\x02\u023F\u0243\x05,\x17\x02\u0240\u0243\x05" +
		".\x18\x02\u0241\u0243\x050\x19\x02\u0242\u023D\x03\x02\x02\x02\u0242\u023E" +
		"\x03\x02\x02\x02\u0242\u023F\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02" +
		"\u0242\u0241\x03\x02\x02\x02\u0243\'\x03\x02\x02\x02\u0244\u0245\x07\x8F" +
		"\x02\x02\u0245\u0246\x07X\x02\x02\u0246\u0247\x07\x85\x02\x02\u0247\u0248" +
		"\x07Y\x02\x02\u0248)\x03\x02\x02\x02\u0249\u024A\x07\x91\x02\x02\u024A" +
		"\u024B\x07X\x02\x02\u024B\u024C\x07\x85\x02\x02\u024C\u024D\x07Y\x02\x02" +
		"\u024D+\x03\x02\x02\x02\u024E\u024F\x07\x90\x02\x02\u024F\u0250\x07X\x02" +
		"\x02\u0250\u0257\x05\u0126\x94\x02\u0251\u0252\x07_\x02\x02\u0252\u0253" +
		"\x07\x85\x02\x02\u0253\u0254\x07g\x02\x02\u0254\u0256\x05\u0126\x94\x02" +
		"\u0255\u0251\x03\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03" +
		"\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259" +
		"\u0257\x03\x02\x02\x02\u025A\u025B\x07Y\x02\x02\u025B-\x03\x02\x02\x02" +
		"\u025C\u025D\x07\x92\x02\x02\u025D\u025E\x07X\x02\x02\u025E\u0265\x05" +
		"\u0126\x94\x02\u025F\u0260\x07_\x02\x02\u0260\u0261\x07\x85\x02\x02\u0261" +
		"\u0262\x07g\x02\x02\u0262\u0264\x05\u0126\x94\x02\u0263\u025F\x03\x02" +
		"\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265" +
		"\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02" +
		"\x02\x02\u0268\u0269\x07Y\x02\x02\u0269/\x03\x02\x02\x02\u026A\u026B\t" +
		"\x03\x02\x02\u026B1\x03\x02\x02\x02\u026C\u026D\x054\x1B\x02\u026D3\x03" +
		"\x02\x02\x02\u026E\u026F\x07\x94\x02\x02\u026F\u0270\x07X\x02\x02\u0270" +
		"\u0275\x05&\x14\x02\u0271\u0272\x07_\x02\x02\u0272\u0274\x05&\x14\x02" +
		"\u0273\u0271\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03" +
		"\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277" +
		"\u0275\x03\x02\x02\x02\u0278\u0279\x07Y\x02\x02\u02795\x03\x02\x02\x02" +
		"\u027A\u027C\x07\x96\x02\x02\u027B\u027D\x07\x85\x02\x02\u027C\u027B\x03" +
		"\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E" +
		"\u0286\x07Z\x02\x02\u027F\u0287\x058\x1D\x02\u0280\u0282\x05\xF4{\x02" +
		"\u0281\u0280\x03\x02\x02\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03" +
		"\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285" +
		"\u0283\x03\x02\x02\x02\u0286\u027F\x03\x02\x02\x02\u0286\u0283\x03\x02" +
		"\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x07[\x02\x02\u02897\x03" +
		"\x02\x02\x02\u028A\u028C\x07\x97\x02\x02\u028B\u028D\x07\x85\x02\x02\u028C" +
		"\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028C\x03\x02" +
		"\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290" +
		"\u028A\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0298\x03\x02" +
		"\x02\x02\u0292\u0294\x07\x98\x02\x02\u0293\u0295\x05\xF4{\x02\u0294\u0293" +
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02" +
		"\u0296\u0297\x03\x02\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0292\x03" +
		"\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u02A0\x03\x02\x02\x02\u029A" +
		"\u029C\x07\x99\x02\x02\u029B\u029D\x05\u0126\x94\x02\u029C\u029B\x03\x02" +
		"\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
		"\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u029A\x03\x02" +
		"\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A19\x03\x02\x02\x02\u02A2\u02A8" +
		"\x05\x04\x03\x02\u02A3\u02A4\x05\u017E\xC0\x02\u02A4\u02A5\x05\x04\x03" +
		"\x02\u02A5\u02A7\x03\x02\x02\x02\u02A6\u02A3\x03\x02\x02\x02\u02A7\u02AA" +
		"\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02" +
		"\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02AD\x05" +
		"\u017E\xC0\x02\u02AC\u02AB\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02" +
		"\u02AD;\x03\x02\x02\x02\u02AE\u02AF\x05\xC2b\x02\u02AF\u02B0\x07*\x02" +
		"\x02\u02B0\u02B1\x05\x9EP\x02\u02B1=\x03\x02\x02\x02\u02B2\u02B3\x05\xC2" +
		"b\x02\u02B3\u02B5\x07$\x02\x02\u02B4\u02B6\x072\x02\x02\u02B5\u02B4\x03" +
		"\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u02BC\x05\x9EP\x02\u02B8\u02B9\x07`\x02\x02\u02B9\u02BD\x07r\x02\x02" +
		"\u02BA\u02BB\x07\t\x02\x02\u02BB\u02BD\x05\u0174\xBB\x02\u02BC\u02B8\x03" +
		"\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD" +
		"?\x03\x02\x02\x02\u02BE\u02BF\x05H%\x02\u02BF\u02C0\x05\\/\x02\u02C0A" +
		"\x03\x02\x02\x02\u02C1\u02C4\x05L\'\x02\u02C2\u02C4\t\x04\x02\x02\u02C3" +
		"\u02C1\x03\x02\x02\x02\u02C3\u02C2\x03\x02\x02\x02\u02C4C\x03\x02\x02" +
		"\x02\u02C5\u02C6\x05F$\x02\u02C6\u02C7\x05\u017C\xBF\x02\u02C7\u02C9\x03" +
		"\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9" +
		"E\x03\x02\x02\x02\u02CA\u02D0\x05B\"\x02\u02CB\u02CC\x05\u017C\xBF\x02" +
		"\u02CC\u02CD\x05B\"\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02CB\x03\x02" +
		"\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0" +
		"\u02D1\x03\x02\x02\x02\u02D1G\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02" +
		"\x02\u02D3\u02D7\x05J&\x02\u02D4\u02D6\x07\x89\x02\x02\u02D5\u02D4\x03" +
		"\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7" +
		"\u02D8\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03\x02" +
		"\x02\x02\u02DA\u02D3\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB" +
		"I\x03\x02\x02\x02\u02DC\u02E2\x05L\'\x02\u02DD\u02DE\x05\u017C\xBF\x02" +
		"\u02DE\u02DF\x05L\'\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02DD\x03\x02" +
		"\x02\x02\u02E1\u02E4\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E2" +
		"\u02E3\x03\x02\x02\x02\u02E3K\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02" +
		"\x02\u02E5\u02E8\x05\xC4c\x02\u02E6\u02E8\t\x05\x02\x02\u02E7\u02E5\x03" +
		"\x02\x02\x02\u02E7\u02E6\x03\x02\x02\x02\u02E8M\x03\x02\x02\x02\u02E9" +
		"\u02EC\x05\xC4c\x02\u02EA\u02EC\t\x06\x02\x02\u02EB\u02E9\x03\x02\x02" +
		"\x02\u02EB\u02EA\x03\x02\x02\x02\u02ECO\x03\x02\x02\x02\u02ED\u02EE\x05" +
		"R*\x02\u02EE\u02EF\x05\u017C\xBF\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0" +
		"\u02ED\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1Q\x03\x02\x02" +
		"\x02\u02F2\u02F8\x05N(\x02\u02F3\u02F4\x05\u017C\xBF\x02\u02F4\u02F5\x05" +
		"N(\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F3\x03\x02\x02\x02\u02F7\u02FA" +
		"\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02" +
		"\u02F9S\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FC\x07c\x02" +
		"\x02\u02FC\u02FD\x05\u017C\xBF\x02\u02FD\u0304\x05V,\x02\u02FE\u02FF\x07" +
		"_\x02\x02\u02FF\u0300\x05\u017C\xBF\x02\u0300\u0301\x05V,\x02\u0301\u0303" +
		"\x03\x02\x02\x02\u0302\u02FE\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02" +
		"\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03" +
		"\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0308\x05\u017C\xBF\x02" +
		"\u0308\u0309\x07b\x02\x02\u0309U\x03\x02\x02\x02\u030A\u030B\x05\xC2b" +
		"\x02\u030B\u0310\x05\u0172\xBA\x02\u030C\u030D\x07\x1D\x02\x02\u030D\u030E" +
		"\x05\u017C\xBF\x02\u030E\u030F\x05X-\x02\u030F\u0311\x03\x02\x02\x02\u0310" +
		"\u030C\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311W\x03\x02\x02" +
		"\x02\u0312\u0319\x05\x82B\x02\u0313\u0314\x07t\x02\x02\u0314\u0315\x05" +
		"\u017C\xBF\x02\u0315\u0316\x05\x82B\x02\u0316\u0318\x03\x02\x02\x02\u0317" +
		"\u0313\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02" +
		"\x02\x02\u0319\u031A\x03\x02\x02\x02\u031AY\x03\x02\x02\x02\u031B\u0319" +
		"\x03\x02\x02\x02\u031C\u0323\x05\x82B\x02\u031D\u031E\x07_\x02\x02\u031E" +
		"\u031F\x05\u017C\xBF\x02\u031F\u0320\x05\x82B\x02\u0320\u0322\x03\x02" +
		"\x02\x02\u0321\u031D\x03\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323" +
		"\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324[\x03\x02\x02" +
		"\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0327\x07\x16\x02\x02\u0327\u0334" +
		"\b/\x01\x02\u0328\u0329\x07&\x02\x02\u0329\u0334\b/\x01\x02\u032A\u032B" +
		"\x07\x1C\x02\x02\u032B\u0334\b/\x01\x02\u032C\u032D\x07\x86\x02\x02\u032D" +
		"\u032E\x07&\x02\x02\u032E\u0334\b/\x01\x02\u032F\u0330\x07\f\x02\x02\u0330" +
		"\u0334\b/\x01\x02\u0331\u0332\x07/\x02\x02\u0332\u0334\b/\x01\x02\u0333" +
		"\u0326\x03\x02\x02\x02\u0333\u0328\x03\x02\x02\x02\u0333\u032A\x03\x02" +
		"\x02\x02\u0333\u032C\x03\x02\x02\x02\u0333\u032F\x03\x02\x02\x02\u0333" +
		"\u0331\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0339\x05\u0174" +
		"\xBB\x02\u0336\u0337\x05\u017C\xBF\x02\u0337\u0338\x05T+\x02\u0338\u033A" +
		"\x03\x02\x02\x02\u0339\u0336\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02" +
		"\u033A\u033E\x03\x02\x02\x02\u033B\u033C\x05\u017C\xBF\x02\u033C\u033D" +
		"\x05\x94K\x02\u033D\u033F\x03\x02\x02\x02\u033E\u033B\x03\x02\x02\x02" +
		"\u033E\u033F\x03\x02\x02\x02\u033F\u0345\x03\x02\x02\x02\u0340\u0341\x05" +
		"\u017C\xBF\x02\u0341\u0342\x07\x1D\x02\x02\u0342\u0343\x05\u017C\xBF\x02" +
		"\u0343\u0344\x05Z.\x02\u0344\u0346\x03\x02\x02\x02\u0345\u0340\x03\x02" +
		"\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u034C\x03\x02\x02\x02\u0347" +
		"\u0348\x05\u017C\xBF\x02\u0348\u0349\x07#\x02\x02\u0349\u034A\x05\u017C" +
		"\xBF\x02\u034A\u034B\x05Z.\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0347" +
		"\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u0353\x03\x02\x02\x02" +
		"\u034E\u034F\x05\u017C\xBF\x02\u034F\u0350\x07+\x02\x02\u0350\u0351\x05" +
		"\u017C\xBF\x02\u0351\u0352\x05Z.\x02\u0352\u0354\x03\x02\x02\x02\u0353" +
		"\u034E\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0355\x03\x02" +
		"\x02\x02\u0355\u0356\x05\u017C\xBF\x02\u0356\u0357\x05^0\x02\u0357]\x03" +
		"\x02\x02\x02\u0358\u0359\x07Z\x02\x02\u0359\u0365\x05\u017C\xBF\x02\u035A" +
		"\u035B\x060\x02\x03\u035B\u035F\x05`1\x02\u035C\u035D\x05\u017C\xBF\x02" +
		"\u035D\u035E\x07_\x02\x02\u035E\u0360\x03\x02\x02\x02\u035F\u035C\x03" +
		"\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x03\x02\x02\x02\u0361" +
		"\u0363\x05\u017E\xC0\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03\x02" +
		"\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364\u0366\x03\x02\x02\x02\u0365" +
		"\u035A\x03\x02\x02\x02\u0365\u0364\x03\x02\x02\x02\u0366\u0370\x03\x02" +
		"\x02\x02\u0367\u036D\x05d3\x02\u0368\u0369\x05\u017E\xC0\x02\u0369\u036A" +
		"\x05d3\x02\u036A\u036C\x03\x02\x02\x02\u036B\u0368\x03\x02\x02\x02\u036C" +
		"\u036F\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02" +
		"\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370" +
		"\u0367\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0373\x03\x02" +
		"\x02\x02\u0372\u0374\x05\u017E\xC0\x02\u0373\u0372\x03\x02\x02\x02\u0373" +
		"\u0374\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0376\x07[\x02" +
		"\x02\u0376_\x03\x02\x02\x02\u0377\u037F\x05b2\x02\u0378\u0379\x05\u017C" +
		"\xBF\x02\u0379\u037A\x07_\x02\x02\u037A\u037B\x05\u017C\xBF\x02\u037B" +
		"\u037C\x05b2\x02\u037C\u037E\x03\x02\x02\x02\u037D\u0378\x03\x02\x02\x02" +
		"\u037E\u0381\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380\x03" +
		"\x02\x02\x02\u0380a\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382" +
		"\u0383\x05\xC2b\x02\u0383\u0385\x05\u0174\xBB\x02\u0384\u0386\x05\u0164" +
		"\xB3\x02\u0385\u0384\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386" +
		"\u0388\x03\x02\x02\x02\u0387\u0389\x05\u015C\xAF\x02\u0388\u0387\x03\x02" +
		"\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389c\x03\x02\x02\x02\u038A\u038B" +
		"\x072\x02\x02\u038B\u038D\x05\u017C\xBF\x02\u038C\u038A\x03\x02\x02\x02" +
		"\u038C\u038D\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u0391\x05" +
		"\xD4k\x02\u038F\u0391\x05f4\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0390\u038C\x03\x02\x02\x02\u0390\u038F\x03\x02\x02\x02\u0391e\x03\x02" +
		"\x02\x02\u0392\u039A\x05h5\x02\u0393\u039A\x05p9\x02\u0394\u0397\x05D" +
		"#\x02\u0395\u0398\x05\\/\x02\u0396\u0398\x05j6\x02\u0397\u0395\x03\x02" +
		"\x02\x02\u0397\u0396\x03\x02\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399" +
		"\u0392\x03\x02\x02\x02\u0399\u0393\x03\x02\x02\x02\u0399\u0394\x03\x02" +
		"\x02\x02\u039Ag\x03\x02\x02\x02\u039B\u039D\x05D#\x02\u039C\u039E\x05" +
		"T+\x02\u039D\u039C\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A2" +
		"\x03\x02\x02\x02\u039F\u03A0\x05n8\x02\u03A0\u03A1\x05\u017C\xBF\x02\u03A1" +
		"\u03A3\x03\x02\x02\x02\u03A2\u039F\x03\x02\x02\x02\u03A2\u03A3\x03\x02" +
		"\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x05l7\x02\u03A5\u03B6" +
		"\x05\x94K\x02\u03A6\u03A7\x07\x19\x02\x02\u03A7\u03A8\x05\u017C\xBF\x02" +
		"\u03A8\u03A9\x05\xD0i\x02\u03A9\u03B7\x03\x02\x02\x02\u03AA\u03AB\x05" +
		"\u017C\xBF\x02\u03AB\u03AC\x079\x02\x02\u03AC\u03AD\x05\u017C\xBF\x02" +
		"\u03AD\u03AE\x05\x92J\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF\u03AA\x03" +
		"\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B4\x03\x02\x02\x02\u03B1" +
		"\u03B2\x05\u017C\xBF\x02\u03B2\u03B3\x05\x9CO\x02\u03B3\u03B5\x03\x02" +
		"\x02\x02\u03B4\u03B1\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5" +
		"\u03B7\x03\x02\x02\x02\u03B6\u03A6\x03\x02\x02\x02\u03B6\u03AF\x03\x02" +
		"\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7i\x03\x02\x02\x02\u03B8\u03B9" +
		"\x05l7\x02\u03B9\u03BA\x05\u017C\xBF\x02\u03BA\u03BB\x05\x9CO\x02\u03BB" +
		"k\x03\x02\x02\x02\u03BC\u03BF\x05\u0174\xBB\x02\u03BD\u03BF\x05\u0170" +
		"\xB9\x02\u03BE\u03BC\x03\x02\x02\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF" +
		"m\x03\x02\x02\x02\u03C0\u03C3\x05\x80A\x02\u03C1\u03C3\x07<\x02\x02\u03C2" +
		"\u03C0\x03\x02\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3o\x03\x02\x02" +
		"\x02\u03C4\u03C5\x05\xDAn\x02\u03C5q\x03\x02\x02\x02\u03C6\u03CD\x05t" +
		";\x02\u03C7\u03C8\x07_\x02\x02\u03C8\u03C9\x05\u017C\xBF\x02\u03C9\u03CA" +
		"\x05t;\x02\u03CA\u03CC\x03\x02\x02\x02\u03CB\u03C7\x03\x02\x02\x02\u03CC" +
		"\u03CF\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02" +
		"\x02\x02\u03CEs\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03D0\u03D6" +
		"\x05v<\x02\u03D1\u03D2\x05\u017C\xBF\x02\u03D2\u03D3\x07a\x02\x02\u03D3" +
		"\u03D4\x05\u017C\xBF\x02\u03D4\u03D5\x05x=\x02\u03D5\u03D7\x03\x02\x02" +
		"\x02\u03D6\u03D1\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7u\x03" +
		"\x02\x02\x02\u03D8\u03D9\x05\u0174\xBB\x02\u03D9w\x03\x02\x02\x02\u03DA" +
		"\u03DB\x05\u011A\x8E\x02\u03DBy\x03\x02\x02\x02\u03DC\u03E4\x05x=\x02" +
		"\u03DD\u03DE\x05\u017C\xBF\x02\u03DE\u03DF\x07_\x02\x02\u03DF\u03E0\x05" +
		"\u017C\xBF\x02\u03E0\u03E1\x05x=\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2" +
		"\u03DD\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02\u03E4\u03E2\x03\x02" +
		"\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7\x03\x02\x02\x02\u03E6" +
		"\u03E4\x03\x02\x02\x02\u03E7\u03E9\x05\u017C\xBF\x02\u03E8\u03EA\x07_" +
		"\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA" +
		"{\x03\x02\x02\x02\u03EB\u03EC\x05\xC2b\x02\u03EC\u03ED\x07\\\x02\x02\u03ED" +
		"\u03EE\x07]\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03EB\x03\x02\x02" +
		"\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F1\u03F2" +
		"\x03\x02\x02\x02\u03F2}\x03\x02\x02\x02\u03F3\u03F5\x05|?\x02\u03F4\u03F3" +
		"\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\x7F\x03\x02\x02\x02" +
		"\u03F6\u03F9\x05\xC2b\x02\u03F7\u03FA\x05\x8AF\x02\u03F8\u03FA\x05\x88" +
		"E\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03F8\x03\x02\x02\x02\u03FA\u03FB" +
		"\x03\x02\x02\x02\u03FB\u03FC\x05~@\x02\u03FC\x81\x03\x02\x02\x02\u03FD" +
		"\u0403\x05\xC2b\x02\u03FE\u0401\x05\x8AF\x02\u03FF\u0401\x07<\x02\x02" +
		"\u0400\u03FE\x03\x02\x02\x02\u0400\u03FF\x03\x02\x02\x02\u0401\u0404\x03" +
		"\x02\x02\x02\u0402\u0404\x05\x86D\x02\u0403\u0400\x03\x02\x02\x02\u0403" +
		"\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0406\x05~@\x02" +
		"\u0406\x83\x03\x02\x02\x02\u0407\u040A\x05\xA4S\x02\u0408\u040A\x05\xA6" +
		"T\x02\u0409\u0407\x03\x02\x02\x02\u0409\u0408\x03\x02\x02\x02\u040A\u040C" +
		"\x03\x02\x02\x02\u040B\u040D\x05\x8CG\x02\u040C\u040B\x03\x02\x02\x02" +
		"\u040C\u040D\x03\x02\x02\x02\u040D\x85\x03\x02\x02\x02\u040E\u0410\x05" +
		"\xA4S\x02\u040F\u0411\x05\x8CG\x02\u0410\u040F\x03\x02\x02\x02\u0410\u0411" +
		"\x03\x02\x02\x02\u0411\x87\x03\x02\x02\x02\u0412\u0414\x05\xA6T\x02\u0413" +
		"\u0415\x05\x8CG\x02\u0414\u0413\x03\x02\x02\x02\u0414\u0415\x03\x02\x02" +
		"\x02\u0415\x89\x03\x02\x02\x02\u0416\u0417\x07\x0F\x02\x02\u0417\x8B\x03" +
		"\x02\x02\x02\u0418\u0419\x07c\x02\x02\u0419\u041A\x05\u017C\xBF\x02\u041A" +
		"\u0421\x05\x8EH\x02\u041B\u041C\x07_\x02\x02\u041C\u041D\x05\u017C\xBF" +
		"\x02\u041D\u041E\x05\x8EH\x02\u041E\u0420\x03\x02\x02\x02\u041F\u041B" +
		"\x03\x02\x02\x02\u0420\u0423\x03\x02\x02\x02\u0421\u041F\x03\x02\x02\x02" +
		"\u0421\u0422\x03\x02\x02\x02\u0422\u0424\x03\x02\x02\x02\u0423\u0421\x03" +
		"\x02\x02\x02\u0424\u0425\x05\u017C\xBF\x02\u0425\u0426\x07b\x02\x02\u0426" +
		"\x8D\x03\x02\x02\x02\u0427\u0431\x05\x82B\x02\u0428\u0429\x05\xC2b\x02" +
		"\u0429\u042E\x07f\x02\x02\u042A\u042B\t\x07\x02\x02\u042B\u042C\x05\u017C" +
		"\xBF\x02\u042C\u042D\x05\x82B\x02\u042D\u042F\x03\x02\x02\x02\u042E\u042A" +
		"\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0431\x03\x02\x02\x02" +
		"\u0430\u0427\x03\x02\x02\x02\u0430\u0428\x03\x02\x02\x02\u0431\x8F\x03" +
		"\x02\x02\x02\u0432\u0433\x05\xC2b\x02\u0433\u0434\x05\xA4S\x02\u0434\x91" +
		"\x03\x02\x02\x02\u0435\u043C\x05\x90I\x02\u0436\u0437\x07_\x02\x02\u0437" +
		"\u0438\x05\u017C\xBF\x02\u0438\u0439\x05\x90I\x02\u0439\u043B\x03\x02" +
		"\x02\x02\u043A\u0436\x03\x02\x02\x02\u043B\u043E\x03\x02\x02\x02\u043C" +
		"\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\x93\x03\x02\x02" +
		"\x02\u043E\u043C\x03\x02\x02\x02\u043F\u0441\x07X\x02\x02\u0440\u0442" +
		"\x05\x96L\x02\u0441\u0440\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02" +
		"\u0442\u0443\x03\x02\x02\x02\u0443\u0444\x05\u017A\xBE\x02\u0444\x95\x03" +
		"\x02\x02\x02\u0445\u0448\x05\x9AN\x02\u0446\u0448\x05\x98M\x02\u0447\u0445" +
		"\x03\x02\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448\u044F\x03\x02\x02\x02" +
		"\u0449\u044A\x07_\x02\x02\u044A\u044B\x05\u017C\xBF\x02\u044B\u044C\x05" +
		"\x9AN\x02\u044C\u044E\x03\x02\x02\x02\u044D\u0449\x03\x02\x02\x02\u044E" +
		"\u0451\x03\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02" +
		"\x02\x02\u0450\x97\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u0453" +
		"\x05\x82B\x02\u0453\u0454\x077\x02\x02\u0454\x99\x03\x02\x02\x02\u0455" +
		"\u0457\x05P)\x02\u0456\u0458\x05\x82B\x02\u0457\u0456\x03\x02\x02\x02" +
		"\u0457\u0458\x03\x02\x02\x02\u0458\u045A\x03\x02\x02\x02\u0459\u045B\x07" +
		"\x87\x02\x02\u045A\u0459\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B" +
		"\u045C\x03\x02\x02\x02\u045C\u0462\x05v<\x02\u045D\u045E\x05\u017C\xBF" +
		"\x02\u045E\u045F\x07a\x02\x02\u045F\u0460\x05\u017C\xBF\x02\u0460\u0461" +
		"\x05\u0126\x94\x02\u0461\u0463\x03\x02\x02\x02\u0462\u045D\x03\x02\x02" +
		"\x02\u0462\u0463\x03\x02\x02\x02\u0463\x9B\x03\x02\x02\x02\u0464\u0465" +
		"\x05\xD4k\x02\u0465\x9D\x03\x02\x02\x02\u0466\u046B\x05\xA0Q\x02\u0467" +
		"\u0468\x07`\x02\x02\u0468\u046A\x05\xA0Q\x02\u0469\u0467\x03\x02\x02\x02" +
		"\u046A\u046D\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B\u046C\x03" +
		"\x02\x02\x02\u046C\x9F\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046E" +
		"\u0474\x05\u0174\xBB\x02\u046F\u0474\x07\n\x02\x02\u0470\u0474\x07\v\x02" +
		"\x02\u0471\u0474\x07\t\x02\x02\u0472\u0474\x07\f\x02\x02\u0473\u046E\x03" +
		"\x02\x02\x02\u0473\u046F\x03\x02\x02\x02\u0473\u0470\x03\x02\x02\x02\u0473" +
		"\u0471\x03\x02\x02\x02\u0473\u0472\x03\x02\x02\x02\u0474\xA1\x03\x02\x02" +
		"\x02\u0475\u0476\x05\xA0Q\x02\u0476\u0477\x07`\x02\x02\u0477\u0479\x03" +
		"\x02\x02\x02\u0478\u0475\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A" +
		"\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\xA3\x03\x02\x02" +
		"\x02\u047C\u047A\x03\x02\x02\x02\u047D\u047E\x05\xA2R\x02\u047E\u047F" +
		"\x05\u0174\xBB\x02\u047F\xA5\x03\x02\x02\x02\u0480\u0481\x05\xA2R\x02" +
		"\u0481\u0486\x05\u0172\xBA\x02\u0482\u0483\x07`\x02\x02\u0483\u0485\x05" +
		"\u0172\xBA\x02\u0484\u0482\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02" +
		"\u0486\u0484\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\xA7\x03" +
		"\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0489\u048F\x07?\x02\x02\u048A" +
		"\u048F\x07@\x02\x02\u048B\u048F\x05\u0170\xB9\x02\u048C\u048F\x07A\x02" +
		"\x02\u048D\u048F\x07B\x02\x02\u048E\u0489\x03\x02\x02\x02\u048E\u048A" +
		"\x03\x02\x02\x02\u048E\u048B\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02" +
		"\u048E\u048D\x03\x02\x02\x02\u048F\xA9\x03\x02\x02\x02\u0490\u0491\x07" +
		"\x04\x02\x02\u0491\u0496\x05\xACW\x02\u0492\u0493\x07\x06\x02\x02\u0493" +
		"\u0495\x05\xACW\x02\u0494\u0492\x03\x02\x02\x02\u0495\u0498\x03\x02\x02" +
		"\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0499" +
		"\x03\x02\x02\x02\u0498\u0496\x03\x02\x02\x02\u0499\u049A\x07\x05\x02\x02" +
		"\u049A\xAB\x03\x02\x02\x02\u049B\u049E\x05\xAEX\x02\u049C\u049E\x05\xBA" +
		"^\x02\u049D\u049B\x03\x02\x02\x02\u049D\u049C\x03\x02\x02\x02\u049E\xAD" +
		"\x03\x02\x02\x02\u049F\u04A3\x05\u0174\xBB\x02\u04A0\u04A2\x07\x07\x02" +
		"\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2\u04A5\x03\x02\x02\x02\u04A3\u04A1" +
		"\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\xAF\x03\x02\x02\x02" +
		"\u04A5\u04A3\x03\x02\x02\x02\u04A6\u04A7\x05\xB4[\x02\u04A7\u04A8\x05" +
		"\u017C\xBF\x02\u04A8\u04A9\x07U\x02\x02\u04A9\u04AA\x05\u017C\xBF\x02" +
		"\u04AA\u04AB\x05\xB8]\x02\u04AB\xB1\x03\x02\x02\x02\u04AC\u04AD\x05\xB6" +
		"\\\x02\u04AD\u04AE\x05\u017C\xBF\x02\u04AE\u04AF\x07U\x02\x02\u04AF\u04B0" +
		"\x05\u017C\xBF\x02\u04B0\u04B1\x05\xB8]\x02\u04B1\xB3\x03\x02\x02\x02" +
		"\u04B2\u04B3\x05\x94K\x02\u04B3\xB5\x03\x02\x02\x02\u04B4\u04B7\x05\x94" +
		"K\x02\u04B5\u04B7\x05v<\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B5\x03" +
		"\x02\x02\x02\u04B7\xB7\x03\x02\x02\x02\u04B8\u04BB\x05\xD4k\x02\u04B9" +
		"\u04BB\x05\u011C\x8F\x02\u04BA\u04B8\x03\x02\x02\x02\u04BA\u04B9\x03\x02" +
		"\x02\x02\u04BB\xB9\x03\x02\x02\x02\u04BC\u04C5\x07Z\x02\x02\u04BD\u04C1" +
		"\x05\u017C\xBF\x02\u04BE\u04BF\x05\x96L\x02\u04BF\u04C0\x05\u017C\xBF" +
		"\x02\u04C0\u04C2\x03\x02\x02\x02\u04C1\u04BE\x03\x02\x02\x02\u04C1\u04C2" +
		"\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C4\x07U\x02\x02" +
		"\u04C4\u04C6\x03\x02\x02\x02\u04C5\u04BD\x03\x02\x02\x02\u04C5\u04C6\x03" +
		"\x02\x02\x02\u04C6\u04C8\x03\x02\x02\x02\u04C7\u04C9\x05\u017E\xC0\x02" +
		"\u04C8\u04C7\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x03" +
		"\x02\x02\x02\u04CA\u04CB\x05\xBE`\x02\u04CB\u04CC\x07[\x02\x02\u04CC\xBB" +
		"\x03\x02\x02\x02\u04CD\u04D0\x05\xBA^\x02\u04CE\u04D0\x05\xB0Y\x02\u04CF" +
		"\u04CD\x03\x02\x02\x02\u04CF\u04CE\x03\x02\x02\x02\u04D0\xBD\x03\x02\x02" +
		"\x02\u04D1\u04D3\x05\xC0a\x02\u04D2\u04D1\x03\x02\x02\x02\u04D2\u04D3" +
		"\x03\x02\x02\x02\u04D3\xBF\x03\x02\x02\x02\u04D4\u04DA\x05\xD6l\x02\u04D5" +
		"\u04D6\x05\u017E\xC0\x02\u04D6\u04D7\x05\xD6l\x02\u04D7\u04D9\x03\x02" +
		"\x02\x02\u04D8\u04D5\x03\x02\x02\x02\u04D9\u04DC\x03\x02\x02\x02\u04DA" +
		"\u04D8\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DE\x03\x02" +
		"\x02\x02\u04DC\u04DA\x03\x02\x02\x02\u04DD\u04DF\x05\u017E\xC0\x02\u04DE" +
		"\u04DD\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\xC1\x03\x02\x02" +
		"\x02\u04E0\u04E6\x05\xC4c\x02\u04E1\u04E2\x05\u017C\xBF\x02\u04E2\u04E3" +
		"\x05\xC4c\x02\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04E1\x03\x02\x02\x02" +
		"\u04E5\u04E8\x03\x02\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E6\u04E7\x03" +
		"\x02\x02\x02\u04E7\u04E9\x03\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E9" +
		"\u04EA\x05\u017C\xBF\x02\u04EA\u04EC\x03\x02\x02\x02\u04EB\u04E0\x03\x02" +
		"\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\xC3\x03\x02\x02\x02\u04ED\u04EE" +
		"\x07\x86\x02\x02\u04EE\u04F6\x05\xC8e\x02\u04EF\u04F0\x05\u017C\xBF\x02" +
		"\u04F0\u04F2\x07X\x02\x02\u04F1\u04F3\x05\xC6d\x02\u04F2\u04F1\x03\x02" +
		"\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4" +
		"\u04F5\x05\u017A\xBE\x02\u04F5\u04F7\x03\x02\x02\x02\u04F6\u04EF\x03\x02" +
		"\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\xC5\x03\x02\x02\x02\u04F8\u04FB" +
		"\x05\xCAf\x02\u04F9\u04FB\x05\xD0i\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA" +
		"\u04F9\x03\x02\x02\x02\u04FB\xC7\x03\x02\x02\x02\u04FC\u04FD\x05\xA4S" +
		"\x02\u04FD\xC9\x03\x02\x02\x02\u04FE\u0503\x05\xCCg\x02\u04FF\u0500\x07" +
		"_\x02\x02\u0500\u0502\x05\xCCg\x02\u0501\u04FF\x03\x02\x02\x02\u0502\u0505" +
		"\x03\x02\x02\x02\u0503\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02" +
		"\u0504\xCB\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0506\u0507\x05" +
		"\xCEh\x02\u0507\u0508\x05\u017C\xBF\x02\u0508\u0509\x07a\x02\x02\u0509" +
		"\u050A\x05\u017C\xBF\x02\u050A\u050B\x05\xD0i\x02\u050B\xCD\x03\x02\x02" +
		"\x02\u050C\u050F\x05\u0174\xBB\x02\u050D\u050F\x05\u0178\xBD\x02\u050E" +
		"\u050C\x03\x02\x02\x02\u050E\u050D\x03\x02\x02\x02\u050F\xCF\x03\x02\x02" +
		"\x02\u0510\u0514\x05\xD2j\x02\u0511\u0514\x05\xC4c\x02\u0512\u0514\x05" +
		"\u0126\x94\x02\u0513\u0510\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02" +
		"\u0513\u0512\x03\x02\x02\x02\u0514\xD1\x03\x02\x02\x02\u0515\u0521\x07" +
		"\\\x02\x02\u0516\u051B\x05\xD0i\x02\u0517\u0518\x07_\x02\x02\u0518\u051A" +
		"\x05\xD0i\x02\u0519\u0517\x03\x02\x02\x02\u051A\u051D\x03\x02\x02\x02" +
		"\u051B\u0519\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051F\x03" +
		"\x02\x02\x02\u051D\u051B\x03\x02\x02\x02\u051E\u0520\x07_\x02\x02\u051F" +
		"\u051E\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0522\x03\x02" +
		"\x02\x02\u0521\u0516\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522" +
		"\u0523\x03\x02\x02\x02\u0523\u0524\x07]\x02\x02\u0524\xD3\x03\x02\x02" +
		"\x02\u0525\u0527\x07Z\x02\x02\u0526\u0528\x05\u017E\xC0\x02\u0527\u0526" +
		"\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02" +
		"\u0529\u052A\x05\xBE`\x02\u052A\u052B\x07[\x02\x02\u052B\xD5\x03\x02\x02" +
		"\x02\u052C\u052F\x05\xD8m\x02\u052D\u052F\x05\xF4{\x02\u052E\u052C\x03" +
		"\x02\x02\x02\u052E\u052D\x03\x02\x02\x02\u052F\xD7\x03\x02\x02\x02\u0530" +
		"\u0531\x06m\x03\x02\u0531\u0532\x05\xDAn\x02\u0532\xD9\x03\x02\x02\x02" +
		"\u0533\u0534\x05F$\x02\u0534\u053F\x05\u017C\xBF\x02\u0535\u0537\x05\x82" +
		"B\x02\u0536\u0535\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0538" +
		"\x03\x02\x02\x02\u0538\u0540\x05r:\x02\u0539\u053A\x05\xDCo\x02\u053A" +
		"\u053B\x05\u017C\xBF\x02\u053B\u053C\x07a\x02\x02\u053C\u053D\x05\u017C" +
		"\xBF\x02\u053D\u053E\x05x=\x02\u053E\u0540\x03\x02\x02\x02\u053F\u0536" +
		"\x03\x02\x02\x02\u053F\u0539\x03\x02\x02\x02\u0540\u0545\x03\x02\x02\x02" +
		"\u0541\u0542\x05\x82B\x02\u0542\u0543\x05r:\x02\u0543\u0545\x03\x02\x02" +
		"\x02\u0544\u0533\x03\x02\x02\x02\u0544\u0541\x03\x02\x02\x02\u0545\xDB" +
		"\x03\x02\x02\x02\u0546\u0547\x07X\x02\x02\u0547\u054C\x05\xDEp\x02\u0548" +
		"\u0549\x07_\x02\x02\u0549\u054B\x05\xDEp\x02\u054A\u0548\x03\x02\x02\x02" +
		"\u054B\u054E\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02\u054C\u054D\x03" +
		"\x02\x02\x02\u054D\u054F\x03\x02\x02\x02\u054E\u054C\x03\x02\x02\x02\u054F" +
		"\u0550\x05\u017A\xBE\x02\u0550\xDD\x03\x02\x02\x02\u0551\u0553\x05\x82" +
		"B\x02\u0552\u0551\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0554" +
		"\x03\x02\x02\x02\u0554\u0555\x05v<\x02\u0555\xDF\x03\x02\x02\x02\u0556" +
		"\u0557\x07X\x02\x02\u0557\u055A\x05v<\x02\u0558\u0559\x07_\x02\x02\u0559" +
		"\u055B\x05v<\x02\u055A\u0558\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02" +
		"\u055C\u055A\x03\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\u055E\x03" +
		"\x02\x02\x02\u055E\u055F\x05\u017A\xBE\x02\u055F\xE1\x03\x02\x02\x02\u0560" +
		"\u0563\x05\xE4s\x02\u0561\u0563\x05\xE6t\x02\u0562\u0560\x03\x02\x02\x02" +
		"\u0562\u0561\x03\x02\x02\x02\u0563\xE3\x03\x02\x02\x02\u0564\u0565\x07" +
		"!\x02\x02\u0565\u0566\x05\u0114\x8B\x02\u0566\u0567\x05\u017C\xBF\x02" +
		"\u0567\u0570\x05\xF4{\x02\u0568\u056B\x05\u017C\xBF\x02\u0569\u056B\x05" +
		"\u017E\xC0\x02\u056A\u0568\x03\x02\x02\x02\u056A\u0569\x03\x02\x02\x02" +
		"\u056B\u056C\x03\x02\x02\x02\u056C\u056D\x07\x1B\x02\x02\u056D\u056E\x05" +
		"\u017C\xBF\x02\u056E\u056F\x05\xF4{\x02\u056F\u0571\x03\x02\x02\x02\u0570" +
		"\u056A\x03\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\xE5\x03\x02\x02" +
		"\x02\u0572\u0573\x075\x02\x02\u0573\u0574\x05\u0114\x8B\x02\u0574\u0575" +
		"\x05\u017C\xBF\x02\u0575\u0576\x07Z\x02\x02\u0576\u057E\x05\u017C\xBF" +
		"\x02\u0577\u0579\x05\u0102\x82\x02\u0578\u0577\x03\x02\x02\x02\u0579\u057A" +
		"\x03\x02\x02\x02\u057A\u0578\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02" +
		"\u057B\u057C\x03\x02\x02\x02\u057C\u057D\x05\u017C\xBF\x02\u057D\u057F" +
		"\x03\x02\x02\x02\u057E\u0578\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02" +
		"\u057F\u0580\x03\x02\x02\x02\u0580\u0581\x07[\x02\x02\u0581\xE7\x03\x02" +
		"\x02\x02\u0582\u0583\x07 \x02\x02\u0583\u0584\x07X\x02\x02\u0584\u0585" +
		"\x05\u0106\x84\x02\u0585\u0586\x05\u017A\xBE\x02\u0586\u0587\x05\u017C" +
		"\xBF\x02\u0587\u0588\x05\xF4{\x02\u0588\u0596\x03\x02\x02\x02\u0589\u058A" +
		"\x07>\x02\x02\u058A\u058B\x05\u0114\x8B\x02\u058B\u058C\x05\u017C\xBF" +
		"\x02\u058C\u058D\x05\xF4{\x02\u058D\u0596\x03\x02\x02\x02\u058E\u058F" +
		"\x07\x1A\x02\x02\u058F\u0590\x05\u017C\xBF\x02\u0590\u0591\x05\xF4{\x02" +
		"\u0591\u0592\x05\u017C\xBF\x02\u0592\u0593\x07>\x02\x02\u0593\u0594\x05" +
		"\u0114\x8B\x02\u0594\u0596\x03\x02\x02\x02\u0595\u0582\x03\x02\x02\x02" +
		"\u0595\u0589\x03\x02\x02\x02\u0595\u058E\x03\x02\x02\x02\u0596\xE9\x03" +
		"\x02\x02\x02\u0597\u0599\x07\x18\x02\x02\u0598\u059A\x05\u0174\xBB\x02" +
		"\u0599\u0598\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A\xEB\x03" +
		"\x02\x02\x02\u059B\u059D\x07\x12\x02\x02\u059C\u059E\x05\u0174\xBB\x02" +
		"\u059D\u059C\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E\xED\x03" +
		"\x02\x02\x02\u059F\u05A0\x07\x13\x02\x02\u05A0\u05A1\x05\u0126\x94\x02" +
		"\u05A1\xEF\x03\x02\x02\x02\u05A2\u05A4\x07;\x02\x02\u05A3\u05A5\x05\xFC" +
		"\x7F\x02\u05A4\u05A3\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5" +
		"\u05A6\x03\x02\x02\x02\u05A6\u05A7\x05\u017C\xBF\x02\u05A7\u05AD\x05\xD4" +
		"k\x02\u05A8\u05A9\x05\u017C\xBF\x02\u05A9\u05AA\x05\xF6|\x02\u05AA\u05AC" +
		"\x03\x02\x02\x02\u05AB\u05A8\x03\x02\x02\x02\u05AC\u05AF\x03\x02\x02\x02" +
		"\u05AD\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05B3\x03" +
		"\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0\u05B1\x05\u017C\xBF\x02" +
		"\u05B1\u05B2\x05\xFA~\x02\u05B2\u05B4\x03\x02\x02\x02\u05B3\u05B0\x03" +
		"\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\xF1\x03\x02\x02\x02\u05B5" +
		"\u05B6\x07\x11\x02\x02\u05B6\u05BC\x05\u0126\x94\x02\u05B7\u05B8\x05\u017C" +
		"\xBF\x02\u05B8\u05B9\t\b\x02\x02\u05B9\u05BA\x05\u017C\xBF\x02\u05BA\u05BB" +
		"\x05\u0126\x94\x02\u05BB\u05BD\x03\x02\x02\x02\u05BC\u05B7\x03\x02\x02" +
		"\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD\xF3\x03\x02\x02\x02\u05BE\u05DB" +
		"\x05\xD4k\x02\u05BF\u05DB\x05\xE2r\x02\u05C0\u05DB\x05\xE8u\x02\u05C1" +
		"\u05DB\x05\xF0y\x02\u05C2\u05C3\x076\x02\x02\u05C3\u05C4\x05\u0114\x8B" +
		"\x02\u05C4\u05C5\x05\u017C\xBF\x02\u05C5\u05C6\x05\xD4k\x02\u05C6\u05DB" +
		"\x03\x02\x02\x02\u05C7\u05C9\x070\x02\x02\u05C8\u05CA\x05\u0126\x94\x02" +
		"\u05C9\u05C8\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA\u05DB\x03" +
		"\x02\x02\x02\u05CB\u05CC\x078\x02\x02\u05CC\u05DB\x05\u0126\x94\x02\u05CD" +
		"\u05DB\x05\xECw\x02\u05CE\u05DB\x05\xEAv\x02\u05CF\u05D0\x06{\x04\x02" +
		"\u05D0\u05DB\x05\xEEx\x02\u05D1\u05D2\x05\u0174\xBB\x02\u05D2\u05D3\x07" +
		"g\x02\x02\u05D3\u05D4\x05\u017C\xBF\x02\u05D4\u05D5\x05\xF4{\x02\u05D5" +
		"\u05DB\x03\x02\x02\x02\u05D6\u05DB\x05\xF2z\x02\u05D7\u05DB\x05\xD8m\x02" +
		"\u05D8\u05DB\x05\u011C\x8F\x02\u05D9\u05DB\x07^\x02\x02\u05DA\u05BE\x03" +
		"\x02\x02\x02\u05DA\u05BF\x03\x02\x02\x02\u05DA\u05C0\x03\x02\x02\x02\u05DA" +
		"\u05C1\x03\x02\x02\x02\u05DA\u05C2\x03\x02\x02\x02\u05DA\u05C7\x03\x02" +
		"\x02\x02\u05DA\u05CB\x03\x02\x02\x02\u05DA\u05CD\x03\x02\x02\x02\u05DA" +
		"\u05CE\x03\x02\x02\x02\u05DA\u05CF\x03\x02\x02\x02\u05DA\u05D1\x03\x02" +
		"\x02\x02\u05DA\u05D6\x03\x02\x02\x02\u05DA\u05D7\x03\x02\x02\x02\u05DA" +
		"\u05D8\x03\x02\x02\x02\u05DA\u05D9\x03\x02\x02\x02\u05DB\xF5\x03\x02\x02" +
		"\x02\u05DC\u05DD\x07\x15\x02\x02\u05DD\u05DE\x07X\x02\x02\u05DE\u05E0" +
		"\x05P)\x02\u05DF\u05E1\x05\xF8}\x02\u05E0\u05DF\x03\x02\x02\x02\u05E0" +
		"\u05E1\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E3\x05\u0174" +
		"\xBB\x02\u05E3\u05E4\x05\u017A\xBE\x02\u05E4\u05E5\x05\u017C\xBF\x02\u05E5" +
		"\u05E6\x05\xD4k\x02\u05E6\xF7\x03\x02\x02\x02\u05E7\u05EC\x05\xA4S\x02" +
		"\u05E8\u05E9\x07u\x02\x02\u05E9\u05EB\x05\xA4S\x02\u05EA\u05E8\x03\x02" +
		"\x02\x02\u05EB\u05EE\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02\u05EC" +
		"\u05ED\x03\x02\x02\x02\u05ED\xF9\x03\x02\x02\x02\u05EE\u05EC\x03\x02\x02" +
		"\x02\u05EF\u05F0\x07\x1F\x02\x02\u05F0\u05F1\x05\u017C\xBF\x02\u05F1\u05F2" +
		"\x05\xD4k\x02\u05F2\xFB\x03\x02\x02\x02\u05F3\u05F4\x07X\x02\x02\u05F4" +
		"\u05F5\x05\u017C\xBF\x02\u05F5\u05F7\x05\xFE\x80\x02\u05F6\u05F8\x05\u017E" +
		"\xC0\x02\u05F7\u05F6\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8" +
		"\u05F9\x03\x02\x02\x02\u05F9\u05FA\x05\u017A\xBE\x02\u05FA\xFD\x03\x02" +
		"\x02\x02\u05FB\u0601\x05\u0100\x81\x02\u05FC\u05FD\x05\u017E\xC0\x02\u05FD" +
		"\u05FE\x05\u0100\x81\x02\u05FE\u0600\x03\x02\x02\x02\u05FF\u05FC\x03\x02" +
		"\x02\x02\u0600\u0603\x03\x02\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0601" +
		"\u0602\x03\x02\x02\x02\u0602\xFF\x03\x02\x02\x02\u0603\u0601\x03\x02\x02" +
		"\x02\u0604\u0607\x05\xD8m\x02\u0605\u0607\x05\u0126\x94\x02\u0606\u0604" +
		"\x03\x02\x02\x02\u0606\u0605\x03\x02\x02\x02\u0607\u0101\x03\x02\x02\x02" +
		"\u0608\u060E\x05\u0104\x83\x02\u0609\u060A\x05\u017C\xBF\x02\u060A\u060B" +
		"\x05\u0104\x83\x02\u060B\u060D\x03\x02\x02\x02\u060C\u0609\x03\x02\x02" +
		"\x02\u060D\u0610\x03\x02\x02\x02\u060E\u060C\x03\x02\x02\x02\u060E\u060F" +
		"\x03\x02\x02\x02\u060F\u0611\x03\x02\x02\x02\u0610\u060E\x03\x02\x02\x02" +
		"\u0611\u0612\x05\u017C\xBF\x02\u0612\u0613\x05\xC0a\x02\u0613\u0103\x03" +
		"\x02\x02\x02\u0614\u0615\x07\x14\x02\x02\u0615\u0616\x05\u0126\x94\x02" +
		"\u0616\u0617\x07g\x02\x02\u0617\u061B\x03\x02\x02\x02\u0618\u0619\x07" +
		"\x19\x02\x02\u0619\u061B\x07g\x02\x02\u061A\u0614\x03\x02\x02\x02\u061A" +
		"\u0618\x03\x02\x02\x02\u061B\u0105\x03\x02\x02\x02\u061C\u061F\x05\u0108" +
		"\x85\x02\u061D\u061F\x05\u010A\x86\x02\u061E\u061C\x03\x02\x02\x02\u061E" +
		"\u061D\x03\x02\x02\x02\u061F\u0107\x03\x02\x02\x02\u0620\u0622\x05P)\x02" +
		"\u0621\u0623\x05\x82B\x02\u0622\u0621\x03\x02\x02\x02\u0622\u0623\x03" +
		"\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0625\x05v<\x02\u0625\u0626" +
		"\t\t\x02\x02\u0626\u0627\x05\u0126\x94\x02\u0627\u0109\x03\x02\x02\x02" +
		"\u0628\u062A\x05\u010C\x87\x02\u0629\u0628\x03\x02\x02\x02\u0629\u062A" +
		"\x03\x02\x02\x02\u062A\u062B\x03\x02\x02\x02\u062B\u062D\x07^\x02\x02" +
		"\u062C\u062E\x05\u0126\x94\x02\u062D\u062C\x03\x02\x02\x02\u062D\u062E" +
		"\x03\x02\x02\x02\u062E\u062F\x03\x02\x02\x02\u062F\u0631\x07^\x02\x02" +
		"\u0630\u0632\x05\u010E\x88\x02\u0631\u0630\x03\x02\x02\x02\u0631\u0632" +
		"\x03\x02\x02\x02\u0632\u010B\x03\x02\x02\x02\u0633\u0636\x05\xD8m\x02" +
		"\u0634\u0636\x05\u0116\x8C\x02\u0635\u0633\x03\x02\x02\x02\u0635\u0634" +
		"\x03\x02\x02\x02\u0636\u010D\x03\x02\x02\x02\u0637\u0638\x05\u0116\x8C" +
		"\x02\u0638\u010F\x03\x02\x02\x02\u0639\u063A\x07X\x02\x02\u063A\u063B" +
		"\x05\x82B\x02\u063B\u063C\x05\u017A\xBE\x02\u063C\u0111\x03\x02\x02\x02" +
		"\u063D\u063E\x05\u0114\x8B\x02\u063E\u0113\x03\x02\x02\x02\u063F\u0640" +
		"\x07X\x02\x02\u0640\u0641\x05\u011A\x8E\x02\u0641\u0642\x05\u017A\xBE" +
		"\x02\u0642\u0115\x03\x02\x02\x02\u0643\u064A\x05\u0118\x8D\x02\u0644\u0645" +
		"\x07_\x02\x02\u0645\u0646\x05\u017C\xBF\x02\u0646\u0647\x05\u0118\x8D" +
		"\x02\u0647\u0649\x03\x02\x02\x02\u0648\u0644\x03\x02\x02\x02\u0649\u064C" +
		"\x03\x02\x02\x02\u064A\u0648\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02" +
		"\u064B\u0117\x03\x02\x02\x02\u064C\u064A\x03\x02\x02\x02\u064D\u064F\x07" +
		"r\x02\x02\u064E\u064D\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F" +
		"\u0650\x03\x02\x02\x02\u0650\u0651\x05\u0126\x94\x02\u0651\u0119\x03\x02" +
		"\x02\x02\u0652\u0655\x05\u011C\x8F\x02\u0653\u0655\x05\xB2Z\x02\u0654" +
		"\u0652\x03\x02\x02\x02\u0654\u0653\x03\x02\x02\x02\u0655\u011B\x03\x02" +
		"\x02\x02\u0656\u0657\x05\u012A\x96\x02\u0657\u011D";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0658\u065A\x05\u012E\x98\x02\u0659\u065B\t\n\x02\x02" +
		"\u065A\u0659\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u011F\x03" +
		"\x02\x02\x02\u065C\u065D\x075\x02\x02\u065D\u065E\x05\u0114\x8B\x02\u065E" +
		"\u065F\x05\u017C\xBF\x02\u065F\u0660\x07Z\x02\x02\u0660\u0664\x05\u017C" +
		"\xBF\x02\u0661\u0663\x05\u0122\x92\x02\u0662\u0661\x03\x02\x02\x02\u0663" +
		"\u0666\x03\x02\x02\x02\u0664\u0662\x03\x02\x02\x02\u0664\u0665\x03\x02" +
		"\x02\x02\u0665\u0667\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0667" +
		"\u0668\x05\u017C\xBF\x02\u0668\u0669\x07[\x02\x02\u0669\u0121\x03\x02" +
		"\x02\x02\u066A\u066B\x05\u0124\x93\x02\u066B\u066C\x05\u017C\xBF\x02\u066C" +
		"\u066E\x03\x02\x02\x02\u066D\u066A\x03\x02\x02\x02\u066E\u066F\x03\x02" +
		"\x02\x02\u066F\u066D\x03\x02\x02\x02\u066F\u0670\x03\x02\x02\x02\u0670" +
		"\u0671\x03\x02\x02\x02\u0671\u0672\x05\xC0a\x02\u0672\u0123\x03\x02\x02" +
		"\x02\u0673\u0674\x07\x14\x02\x02\u0674\u0677\x05\u0116\x8C\x02\u0675\u0677" +
		"\x07\x19\x02\x02\u0676\u0673\x03\x02\x02\x02\u0676\u0675\x03\x02\x02\x02" +
		"\u0677\u0678\x03\x02\x02\x02\u0678\u0679\t\v\x02\x02\u0679\u0125\x03\x02" +
		"\x02\x02\u067A\u067B\b\x94\x01\x02\u067B\u067C\x05\u0110\x89\x02\u067C" +
		"\u067D\x05\u0128\x95\x02\u067D\u068D\x03\x02\x02\x02\u067E\u068D\x05\u011E" +
		"\x90\x02\u067F\u068D\x05\u0120\x91\x02\u0680\u0681\t\f\x02\x02\u0681\u0682" +
		"\x05\u017C\xBF\x02\u0682\u0683\x05\u0126\x94\x14\u0683\u068D\x03\x02\x02" +
		"\x02\u0684\u0685\t\r\x02\x02\u0685\u068D\x05\u0126\x94\x12\u0686\u0687" +
		"\x05\xE0q\x02\u0687\u0688\x05\u017C\xBF\x02\u0688\u0689\x07a\x02\x02\u0689" +
		"\u068A\x05\u017C\xBF\x02\u068A\u068B\x05\u011C\x8F\x02\u068B\u068D\x03" +
		"\x02\x02\x02\u068C\u067A\x03\x02\x02\x02\u068C\u067E\x03\x02\x02\x02\u068C" +
		"\u067F\x03\x02\x02\x02\u068C\u0680\x03\x02\x02\x02\u068C\u0684\x03\x02" +
		"\x02\x02\u068C\u0686\x03\x02\x02\x02\u068D\u06FC\x03\x02\x02\x02\u068E" +
		"\u068F\f\x13\x02\x02\u068F\u0690\x07P\x02\x02\u0690\u0691\x05\u017C\xBF" +
		"\x02\u0691\u0692\x05\u0126\x94\x14\u0692\u06FB\x03\x02\x02\x02\u0693\u0694" +
		"\f\x11\x02\x02\u0694\u0695\x05\u017C\xBF\x02\u0695\u0696\t\x0E\x02\x02" +
		"\u0696\u0697\x05\u017C\xBF\x02\u0697\u0698\x05\u0126\x94\x12\u0698\u06FB" +
		"\x03\x02\x02\x02\u0699\u069A\f\x10\x02\x02\u069A\u069B\t\x0F\x02\x02\u069B" +
		"\u069C\x05\u017C\xBF\x02\u069C\u069D\x05\u0126\x94\x11\u069D\u06FB\x03" +
		"\x02\x02\x02\u069E\u069F\f\x0F\x02\x02\u069F\u06AA\x05\u017C\xBF\x02\u06A0" +
		"\u06A1\x07c\x02\x02\u06A1\u06A8\x07c\x02\x02\u06A2\u06A3\x07b\x02\x02" +
		"\u06A3\u06A4\x07b\x02\x02\u06A4\u06A8\x07b\x02\x02\u06A5\u06A6\x07b\x02" +
		"\x02\u06A6\u06A8\x07b\x02\x02\u06A7\u06A0\x03\x02\x02\x02\u06A7\u06A2" +
		"\x03\x02\x02\x02\u06A7\u06A5\x03\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02" +
		"\u06A9\u06AB\t\x10\x02\x02\u06AA\u06A7\x03\x02\x02\x02\u06AA\u06A9\x03" +
		"\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AD\x05\u017C\xBF\x02" +
		"\u06AD\u06AE\x05\u0126\x94\x10\u06AE\u06FB\x03\x02\x02\x02\u06AF\u06B0" +
		"\f\r\x02\x02\u06B0\u06B1\x05\u017C\xBF\x02\u06B1\u06B2\t\x11\x02\x02\u06B2" +
		"\u06B3\x05\u017C\xBF\x02\u06B3\u06B4\x05\u0126\x94\x0E\u06B4\u06FB\x03" +
		"\x02\x02\x02\u06B5\u06B6\f\f\x02\x02\u06B6\u06B7\x05\u017C\xBF\x02\u06B7" +
		"\u06B8\t\x12\x02\x02\u06B8\u06B9\x05\u017C\xBF\x02\u06B9\u06BA\x05\u0126" +
		"\x94\r\u06BA\u06FB\x03\x02\x02\x02\u06BB\u06BC\f\v\x02\x02\u06BC\u06BD" +
		"\x05\u017C\xBF\x02\u06BD\u06BE\t\x13\x02\x02\u06BE\u06BF\x05\u017C\xBF" +
		"\x02\u06BF\u06C0\x05\u0126\x94\f\u06C0\u06FB\x03\x02\x02\x02\u06C1\u06C2" +
		"\f\n\x02\x02\u06C2\u06C3\x05\u017C\xBF\x02\u06C3\u06C4\x07t\x02\x02\u06C4" +
		"\u06C5\x05\u017C\xBF\x02\u06C5\u06C6\x05\u0126\x94\v\u06C6\u06FB\x03\x02" +
		"\x02\x02\u06C7\u06C8\f\t\x02\x02\u06C8\u06C9\x05\u017C\xBF\x02\u06C9\u06CA" +
		"\x07v\x02\x02\u06CA\u06CB\x05\u017C\xBF\x02\u06CB\u06CC\x05\u0126\x94" +
		"\n\u06CC\u06FB\x03\x02\x02\x02\u06CD\u06CE\f\b\x02\x02\u06CE\u06CF\x05" +
		"\u017C\xBF\x02\u06CF\u06D0\x07u\x02\x02\u06D0\u06D1\x05\u017C\xBF\x02" +
		"\u06D1\u06D2\x05\u0126\x94\t\u06D2\u06FB\x03\x02\x02\x02\u06D3\u06D4\f" +
		"\x07\x02\x02\u06D4\u06D5\x05\u017C\xBF\x02\u06D5\u06D6\x07l\x02\x02\u06D6" +
		"\u06D7\x05\u017C\xBF\x02\u06D7\u06D8\x05\u0126\x94\b\u06D8\u06FB\x03\x02" +
		"\x02\x02\u06D9\u06DA\f\x06\x02\x02\u06DA\u06DB\x05\u017C\xBF\x02\u06DB" +
		"\u06DC\x07m\x02\x02\u06DC\u06DD\x05\u017C\xBF\x02\u06DD\u06DE\x05\u0126" +
		"\x94\x07\u06DE\u06FB\x03\x02\x02\x02\u06DF\u06E0\f\x05\x02\x02\u06E0\u06EA" +
		"\x05\u017C\xBF\x02\u06E1\u06E2\x07f\x02\x02\u06E2\u06E3\x05\u017C\xBF" +
		"\x02\u06E3\u06E4\x05\u0126\x94\x02\u06E4\u06E5\x05\u017C\xBF\x02\u06E5" +
		"\u06E6\x07g\x02\x02\u06E6\u06E7\x05\u017C\xBF\x02\u06E7\u06EB\x03\x02" +
		"\x02\x02\u06E8\u06E9\x07K\x02\x02\u06E9\u06EB\x05\u017C\xBF\x02\u06EA" +
		"\u06E1\x03\x02\x02\x02\u06EA\u06E8\x03\x02\x02\x02\u06EB\u06EC\x03\x02" +
		"\x02\x02\u06EC\u06ED\x05\u0126\x94\x05\u06ED\u06FB\x03\x02\x02\x02\u06EE" +
		"\u06EF\f\x0E\x02\x02\u06EF\u06F0\x05\u017C\xBF\x02\u06F0\u06F1\t\x14\x02" +
		"\x02\u06F1\u06F2\x05\u017C\xBF\x02\u06F2\u06F3\x05\x82B\x02\u06F3\u06FB" +
		"\x03\x02\x02\x02\u06F4\u06F5\f\x03\x02\x02\u06F5\u06F6\x05\u017C\xBF\x02" +
		"\u06F6\u06F7\t\x15\x02\x02\u06F7\u06F8\x05\u017C\xBF\x02\u06F8\u06F9\x05" +
		"\u011A\x8E\x02\u06F9\u06FB\x03\x02\x02\x02\u06FA\u068E\x03\x02\x02\x02" +
		"\u06FA\u0693\x03\x02\x02\x02\u06FA\u0699\x03\x02\x02\x02\u06FA\u069E\x03" +
		"\x02\x02\x02\u06FA\u06AF\x03\x02\x02\x02\u06FA\u06B5\x03\x02\x02\x02\u06FA" +
		"\u06BB\x03\x02\x02\x02\u06FA\u06C1\x03\x02\x02\x02\u06FA\u06C7\x03\x02" +
		"\x02\x02\u06FA\u06CD\x03\x02\x02\x02\u06FA\u06D3\x03\x02\x02\x02\u06FA" +
		"\u06D9\x03\x02\x02\x02\u06FA\u06DF\x03\x02\x02\x02\u06FA\u06EE\x03\x02" +
		"\x02\x02\u06FA\u06F4\x03\x02\x02\x02\u06FB\u06FE\x03\x02\x02\x02\u06FC" +
		"\u06FA\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\u0127\x03\x02" +
		"\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FF\u0700\x05\u0110\x89\x02\u0700" +
		"\u0701\x05\u0128\x95\x02\u0701\u070A\x03\x02\x02\x02\u0702\u070A\x05\u011E" +
		"\x90\x02\u0703\u0704\t\f\x02\x02\u0704\u0705\x05\u017C\xBF\x02\u0705\u0706" +
		"\x05\u0128\x95\x02\u0706\u070A\x03\x02\x02\x02\u0707\u0708\t\r\x02\x02" +
		"\u0708\u070A\x05\u0128\x95\x02\u0709\u06FF\x03\x02\x02\x02\u0709\u0702" +
		"\x03\x02\x02\x02\u0709\u0703\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02" +
		"\u070A\u0129\x03\x02\x02\x02\u070B\u070F\x05\u0126\x94\x02\u070C\u070D" +
		"\x06\x96\x14\x03\u070D\u0710\x05\u0166\xB4\x02\u070E\u0710\x03\x02\x02" +
		"\x02\u070F\u070C\x03\x02\x02\x02\u070F\u070E\x03\x02\x02\x02\u0710\u0714" +
		"\x03\x02\x02\x02\u0711\u0713\x05\u012C\x97\x02\u0712\u0711\x03\x02\x02" +
		"\x02\u0713\u0716\x03\x02\x02\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715" +
		"\x03\x02\x02\x02\u0715\u012B\x03\x02\x02\x02\u0716\u0714\x03\x02\x02\x02" +
		"\u0717\u071E\x05\u0140\xA1\x02\u0718\u071A\x05\u0130\x99\x02\u0719\u0718" +
		"\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B\u0719\x03\x02\x02\x02" +
		"\u071B\u071C\x03\x02\x02\x02\u071C\u071F\x03\x02\x02\x02\u071D\u071F\x05" +
		"\u0166\xB4\x02\u071E\u0719\x03\x02\x02\x02\u071E\u071D\x03\x02\x02\x02" +
		"\u071E\u071F\x03\x02\x02\x02\u071F\u012D\x03\x02\x02\x02\u0720\u0724\x05" +
		"\u013A\x9E\x02\u0721\u0722\x06\x98\x15\x02\u0722\u0724\x072\x02\x02\u0723" +
		"\u0720\x03\x02\x02\x02\u0723\u0721\x03\x02\x02\x02\u0724\u072A\x03\x02" +
		"\x02\x02\u0725\u0726\x05\u0130\x99\x02\u0726\u0727\b\x98\x01\x02\u0727" +
		"\u0729\x03\x02\x02\x02\u0728\u0725\x03\x02\x02\x02\u0729\u072C\x03\x02" +
		"\x02\x02\u072A\u0728\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B" +
		"\u012F\x03\x02\x02\x02\u072C\u072A\x03\x02\x02\x02\u072D\u0746\x05\u017C" +
		"\xBF\x02\u072E\u072F\x07`\x02\x02\u072F\u0730\x05\u017C\xBF\x02\u0730" +
		"\u0731\x07(\x02\x02\u0731\u0732\x05\u0156\xAC\x02\u0732\u0733\b\x99\x01" +
		"\x02\u0733\u0747\x03\x02\x02\x02\u0734\u0735\t\x16\x02\x02\u0735\u0738" +
		"\x05\u017C\xBF\x02\u0736\u0739\x07\x86\x02\x02\u0737\u0739\x05\u0160\xB1" +
		"\x02\u0738\u0736\x03\x02\x02\x02\u0738\u0737\x03\x02\x02\x02\u0738\u0739" +
		"\x03\x02\x02\x02\u0739\u073F\x03\x02\x02\x02\u073A\u073B\x07L\x02\x02" +
		"\u073B\u073F\x05\u017C\xBF\x02\u073C\u073D\x07M\x02\x02\u073D\u073F\x05" +
		"\u017C\xBF\x02\u073E\u0734\x03\x02\x02\x02\u073E\u073A\x03\x02\x02\x02" +
		"\u073E\u073C\x03\x02\x02\x02\u073F\u0740\x03\x02\x02\x02\u0740\u0741\x05" +
		"\u0132\x9A\x02\u0741\u0742\b\x99\x01\x02\u0742\u0747\x03\x02\x02\x02\u0743" +
		"\u0744\x05\xBC_\x02\u0744\u0745\b\x99\x01\x02\u0745\u0747\x03\x02\x02" +
		"\x02\u0746\u072E\x03\x02\x02\x02\u0746\u073E\x03\x02\x02\x02\u0746\u0743" +
		"\x03\x02\x02\x02\u0747\u0752\x03\x02\x02\x02\u0748\u0749\x05\u0164\xB3" +
		"\x02\u0749\u074A\b\x99\x01\x02\u074A\u0752\x03\x02\x02\x02\u074B\u074C" +
		"\x05\u0136\x9C\x02\u074C\u074D\b\x99\x01\x02\u074D\u0752\x03\x02\x02\x02" +
		"\u074E\u074F\x05\u0138\x9D\x02\u074F\u0750\b\x99\x01\x02\u0750\u0752\x03" +
		"\x02\x02\x02\u0751\u072D\x03\x02\x02\x02\u0751\u0748\x03\x02\x02\x02\u0751" +
		"\u074B\x03\x02\x02\x02\u0751\u074E\x03\x02\x02\x02\u0752\u0131\x03\x02" +
		"\x02\x02\u0753\u0758\x05\u0174\xBB\x02\u0754\u0758\x05\u0170\xB9\x02\u0755" +
		"\u0758\x05\u0134\x9B\x02\u0756\u0758\x05\u0178\xBD\x02\u0757\u0753\x03" +
		"\x02\x02\x02\u0757\u0754\x03\x02\x02\x02\u0757\u0755\x03\x02\x02\x02\u0757" +
		"\u0756\x03\x02\x02\x02\u0758\u0133\x03\x02\x02\x02\u0759\u075C\x05\u0112" +
		"\x8A\x02\u075A\u075C\x05\xAAV\x02\u075B\u0759\x03\x02\x02\x02\u075B\u075A" +
		"\x03\x02\x02\x02\u075C\u0135\x03\x02\x02\x02\u075D\u075F\t\x17\x02\x02" +
		"\u075E\u0760\x05\u0116\x8C\x02\u075F\u075E\x03\x02\x02\x02\u075F\u0760" +
		"\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02\u0761\u0762\x07]\x02\x02" +
		"\u0762\u0137\x03\x02\x02\x02\u0763\u0766\t\x17\x02\x02\u0764\u0767\x05" +
		"\u0148\xA5\x02\u0765\u0767\x07g\x02\x02\u0766\u0764\x03\x02\x02\x02\u0766" +
		"\u0765\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768\u0769\x07]\x02" +
		"\x02\u0769\u0139\x03\x02\x02\x02\u076A\u076C\x05\u0174\xBB\x02\u076B\u076D" +
		"\x05\x8CG\x02\u076C\u076B\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02" +
		"\u076D\u077C\x03\x02\x02\x02\u076E\u077C\x05\xA8U\x02\u076F\u077C\x05" +
		"\xAAV\x02\u0770\u0771\x07(\x02\x02\u0771\u0772\x05\u017C\xBF\x02\u0772" +
		"\u0773\x05\u0156\xAC\x02\u0773\u077C\x03\x02\x02\x02\u0774\u077C\x077" +
		"\x02\x02\u0775\u077C\x074\x02\x02\u0776\u077C\x05\u0112\x8A\x02\u0777" +
		"\u077C\x05\xBC_\x02\u0778\u077C\x05\u0142\xA2\x02\u0779\u077C\x05\u0144" +
		"\xA3\x02\u077A\u077C\x05\u0176\xBC\x02\u077B\u076A\x03\x02\x02\x02\u077B" +
		"\u076E\x03\x02\x02\x02\u077B\u076F\x03\x02\x02\x02\u077B\u0770\x03\x02" +
		"\x02\x02\u077B\u0774\x03\x02\x02\x02\u077B\u0775\x03\x02\x02\x02\u077B" +
		"\u0776\x03\x02\x02\x02\u077B\u0777\x03\x02\x02\x02\u077B\u0778\x03\x02" +
		"\x02\x02\u077B\u0779\x03\x02\x02\x02\u077B\u077A\x03\x02\x02\x02\u077C" +
		"\u013B\x03\x02\x02\x02\u077D\u0782\x05\u0174\xBB\x02\u077E\u0782\x05\xA8" +
		"U\x02\u077F\u0782\x05\xAAV\x02\u0780\u0782\x05\u0112\x8A\x02\u0781\u077D" +
		"\x03\x02\x02\x02\u0781\u077E\x03\x02\x02\x02\u0781\u077F\x03\x02\x02\x02" +
		"\u0781\u0780\x03\x02\x02\x02\u0782\u013D\x03\x02\x02\x02\u0783\u0787\x05" +
		"\u0174\xBB\x02\u0784\u0787\x05\xA8U\x02\u0785\u0787\x05\xAAV\x02\u0786" +
		"\u0783\x03\x02\x02\x02\u0786\u0784\x03\x02\x02\x02\u0786\u0785\x03\x02" +
		"\x02\x02\u0787\u013F\x03\x02\x02\x02\u0788\u078C\x05\u0174\xBB\x02\u0789" +
		"\u078C\x05\xA8U\x02\u078A\u078C\x05\xAAV\x02\u078B\u0788\x03\x02\x02\x02" +
		"\u078B\u0789\x03\x02\x02\x02\u078B\u078A\x03\x02\x02\x02\u078C\u0141\x03" +
		"\x02\x02\x02\u078D\u078F\x07\\\x02\x02\u078E\u0790\x05\u0116\x8C\x02\u078F" +
		"\u078E\x03\x02\x02\x02\u078F\u0790\x03\x02\x02\x02\u0790\u0792\x03\x02" +
		"\x02\x02\u0791\u0793\x07_\x02\x02\u0792\u0791\x03\x02\x02\x02\u0792\u0793" +
		"\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0795\x07]\x02\x02" +
		"\u0795\u0143\x03\x02\x02\x02\u0796\u079C\x07\\\x02\x02\u0797\u0799\x05" +
		"\u0146\xA4\x02\u0798\u079A\x07_\x02\x02\u0799\u0798\x03\x02\x02\x02\u0799" +
		"\u079A\x03\x02\x02\x02\u079A\u079D\x03\x02\x02\x02\u079B\u079D\x07g\x02" +
		"\x02\u079C\u0797\x03\x02\x02\x02\u079C\u079B\x03\x02\x02\x02\u079D\u079E" +
		"\x03\x02\x02\x02\u079E\u079F\x07]\x02\x02\u079F\u0145\x03\x02\x02\x02" +
		"\u07A0\u07A5\x05\u014A\xA6\x02\u07A1\u07A2\x07_\x02\x02\u07A2\u07A4\x05" +
		"\u014A\xA6\x02\u07A3\u07A1\x03\x02\x02\x02\u07A4\u07A7\x03\x02\x02\x02" +
		"\u07A5\u07A3\x03\x02\x02\x02\u07A5\u07A6\x03\x02\x02\x02\u07A6\u0147\x03" +
		"\x02\x02\x02\u07A7\u07A5\x03\x02\x02\x02\u07A8\u07AD\x05\u014C\xA7\x02" +
		"\u07A9\u07AA\x07_\x02\x02\u07AA\u07AC\x05\u014C\xA7\x02\u07AB\u07A9\x03" +
		"\x02\x02\x02\u07AC\u07AF\x03\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD" +
		"\u07AE\x03\x02\x02\x02\u07AE\u0149\x03\x02\x02\x02\u07AF\u07AD\x03\x02" +
		"\x02\x02\u07B0\u07B1\x05\u0150\xA9\x02\u07B1\u07B2\x07g\x02\x02\u07B2" +
		"\u07B3\x05\u017C\xBF\x02\u07B3\u07B4\x05\u0126\x94\x02\u07B4\u07BB\x03" +
		"\x02\x02\x02\u07B5\u07B6\x07r\x02\x02\u07B6\u07B7\x07g\x02\x02\u07B7\u07B8" +
		"\x05\u017C\xBF\x02\u07B8\u07B9\x05\u0126\x94\x02\u07B9\u07BB\x03\x02\x02" +
		"\x02\u07BA\u07B0\x03\x02\x02\x02\u07BA\u07B5\x03\x02\x02\x02\u07BB\u014B" +
		"\x03\x02\x02\x02\u07BC\u07BD\x05\u0152\xAA\x02\u07BD\u07BE\x07g\x02\x02" +
		"\u07BE\u07BF\x05\u017C\xBF\x02\u07BF\u07C0\x05\u0126\x94\x02\u07C0\u07C7" +
		"\x03\x02\x02\x02\u07C1\u07C2\x07r\x02\x02\u07C2\u07C3\x07g\x02\x02\u07C3" +
		"\u07C4\x05\u017C\xBF\x02\u07C4\u07C5\x05\u0126\x94\x02\u07C5\u07C7\x03" +
		"\x02\x02\x02\u07C6\u07BC\x03\x02\x02\x02\u07C6\u07C1\x03\x02\x02\x02\u07C7" +
		"\u014D\x03\x02\x02\x02\u07C8\u07C9\x05\u0154\xAB\x02\u07C9\u07CA\x07g" +
		"\x02\x02\u07CA\u07CB\x05\u017C\xBF\x02\u07CB\u07CC\x05\u0126\x94\x02\u07CC" +
		"\u07D3\x03\x02\x02\x02\u07CD\u07CE\x07r\x02\x02\u07CE\u07CF\x07g\x02\x02" +
		"\u07CF\u07D0\x05\u017C\xBF\x02\u07D0\u07D1\x05\u0126\x94\x02\u07D1\u07D3" +
		"\x03\x02\x02\x02\u07D2\u07C8\x03\x02\x02\x02\u07D2\u07CD\x03\x02\x02\x02" +
		"\u07D3\u014F\x03\x02\x02\x02\u07D4\u07D7\x05\u0178\xBD\x02\u07D5\u07D7" +
		"\x05\u013A\x9E\x02\u07D6\u07D4\x03\x02\x02\x02\u07D6\u07D5\x03\x02\x02" +
		"\x02\u07D7\u0151\x03\x02\x02\x02\u07D8\u07DB\x05\u0178\xBD\x02\u07D9\u07DB" +
		"\x05\u013C\x9F\x02\u07DA\u07D8\x03\x02\x02\x02\u07DA\u07D9\x03\x02\x02" +
		"\x02\u07DB\u0153\x03\x02\x02\x02\u07DC\u07DF\x05\u0178\xBD\x02\u07DD\u07DF" +
		"\x05\u013E\xA0\x02\u07DE\u07DC\x03\x02\x02\x02\u07DE\u07DD\x03\x02\x02" +
		"\x02\u07DF\u0155\x03\x02\x02\x02\u07E0\u07F0\x05\u015E\xB0\x02\u07E1\u07E2" +
		"\x05\u017C\xBF\x02\u07E2\u07E4\x05\u0164\xB3\x02\u07E3\u07E5\x05\u015C" +
		"\xAF\x02\u07E4\u07E3\x03\x02\x02\x02\u07E4\u07E5\x03\x02\x02\x02\u07E5" +
		"\u07F1\x03\x02\x02\x02\u07E6\u07E8\x05\u0158\xAD\x02\u07E7\u07E6\x03\x02" +
		"\x02\x02\u07E8\u07E9\x03\x02\x02\x02\u07E9\u07E7\x03\x02\x02\x02\u07E9" +
		"\u07EA\x03\x02\x02\x02\u07EA\u07EE\x03\x02\x02\x02\u07EB\u07EC\x05\u017C" +
		"\xBF\x02\u07EC\u07ED\x05\u015A\xAE\x02\u07ED\u07EF\x03\x02\x02\x02\u07EE" +
		"\u07EB\x03\x02\x02\x02\u07EE\u07EF\x03\x02\x02\x02\u07EF\u07F1\x03\x02" +
		"\x02\x02\u07F0\u07E1\x03\x02\x02\x02\u07F0\u07E7\x03\x02\x02\x02\u07F1" +
		"\u0157\x03\x02\x02\x02\u07F2\u07F3\x05\xC2b\x02\u07F3\u07F5\x07\\\x02" +
		"\x02\u07F4\u07F6\x05\u0126\x94\x02\u07F5\u07F4\x03\x02\x02\x02\u07F5\u07F6" +
		"\x03\x02\x02\x02\u07F6\u07F7\x03\x02\x02\x02\u07F7\u07F8\x07]\x02\x02" +
		"\u07F8\u0159\x03\x02\x02\x02\u07F9\u07FA\x07Z\x02\x02\u07FA\u07FE\x05" +
		"\u017C\xBF\x02\u07FB\u07FC\x05z>\x02\u07FC\u07FD\x05\u017C\xBF\x02\u07FD" +
		"\u07FF\x03\x02\x02\x02\u07FE\u07FB\x03\x02\x02\x02\u07FE\u07FF\x03\x02" +
		"\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800\u0801\x07[\x02\x02\u0801\u015B" +
		"\x03\x02\x02\x02\u0802\u0803\x05^0\x02\u0803\u015D\x03\x02\x02\x02\u0804" +
		"\u080A\x05\xC2b\x02\u0805\u080B\x05\x8AF\x02\u0806\u0808\x05\xA4S\x02" +
		"\u0807\u0809\x05\u0162\xB2\x02\u0808\u0807\x03\x02\x02\x02\u0808\u0809" +
		"\x03\x02\x02\x02\u0809\u080B\x03\x02\x02\x02\u080A\u0805\x03\x02\x02\x02" +
		"\u080A\u0806\x03\x02\x02\x02\u080B\u015F\x03\x02\x02\x02\u080C\u080D\x07" +
		"c\x02\x02\u080D\u080E\x05\u017C\xBF\x02\u080E\u080F\x05Z.\x02\u080F\u0810" +
		"\x05\u017C\xBF\x02\u0810\u0811\x07b\x02\x02\u0811\u0161\x03\x02\x02\x02" +
		"\u0812\u0813\x07c\x02\x02\u0813\u0816\x07b\x02\x02\u0814\u0816\x05\x8C" +
		"G\x02\u0815\u0812\x03\x02\x02\x02\u0815\u0814\x03\x02\x02\x02\u0816\u0163" +
		"\x03\x02\x02\x02\u0817\u0819\x07X\x02\x02\u0818\u081A\x05\u0168\xB5\x02" +
		"\u0819\u0818\x03\x02\x02\x02\u0819\u081A\x03\x02\x02\x02\u081A\u081C\x03" +
		"\x02\x02\x02\u081B\u081D\x07_\x02\x02\u081C\u081B\x03\x02\x02\x02\u081C" +
		"\u081D\x03\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u081F\x05\u017A" +
		"\xBE\x02\u081F\u0165\x03\x02\x02\x02\u0820\u0827\x05\u016A\xB6\x02\u0821" +
		"\u0822\x07_\x02\x02\u0822\u0823\x05\u017C\xBF\x02\u0823\u0824\x05\u016C" +
		"\xB7\x02\u0824\u0826\x03\x02\x02\x02\u0825\u0821\x03\x02\x02\x02\u0826" +
		"\u0829\x03\x02\x02\x02\u0827\u0825\x03\x02\x02\x02\u0827\u0828\x03\x02" +
		"\x02\x02\u0828\u0167\x03\x02\x02\x02\u0829\u0827\x03\x02\x02\x02\u082A" +
		"\u0831\x05\u016E\xB8\x02\u082B\u082C\x07_\x02\x02\u082C\u082D\x05\u017C" +
		"\xBF\x02\u082D\u082E\x05\u016E\xB8\x02\u082E\u0830\x03\x02\x02\x02\u082F" +
		"\u082B\x03\x02\x02\x02\u0830\u0833\x03\x02\x02\x02\u0831\u082F\x03\x02" +
		"\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832\u0169\x03\x02\x02\x02\u0833" +
		"\u0831\x03\x02\x02\x02\u0834\u0837\x05\u0118\x8D\x02\u0835\u0837\x05\u014E" +
		"\xA8\x02\u0836\u0834\x03\x02\x02\x02\u0836\u0835\x03\x02\x02\x02\u0837" +
		"\u016B\x03\x02\x02\x02\u0838\u083B\x05\u0118\x8D\x02\u0839\u083B\x05\u014C" +
		"\xA7\x02\u083A\u0838\x03\x02\x02\x02\u083A\u0839\x03\x02\x02\x02\u083B" +
		"\u016D\x03\x02\x02\x02\u083C\u0840\x05\u0118\x8D\x02\u083D\u0840\x05\xB2" +
		"Z\x02\u083E\u0840\x05\u014C\xA7\x02\u083F\u083C\x03\x02\x02\x02\u083F" +
		"\u083D\x03\x02\x02\x02\u083F\u083E\x03\x02\x02\x02\u0840\u016F\x03\x02" +
		"\x02\x02\u0841\u0842\x07\x03\x02\x02\u0842\u0171\x03\x02\x02\x02\u0843" +
		"\u0844\x07\x84\x02\x02\u0844\u0173\x03\x02\x02\x02\u0845\u0846\t\x18\x02" +
		"\x02\u0846\u0175\x03\x02\x02\x02\u0847\u0848\t\x19\x02\x02\u0848\u0177" +
		"\x03\x02\x02\x02\u0849\u084A\t\x1A\x02\x02\u084A\u0179\x03\x02\x02\x02" +
		"\u084B\u084C\x07Y\x02\x02\u084C\u017B\x03\x02\x02\x02\u084D\u084F\x07" +
		"\x89\x02\x02\u084E\u084D\x03\x02\x02\x02\u084F\u0852\x03\x02\x02\x02\u0850" +
		"\u084E\x03\x02\x02\x02\u0850\u0851\x03\x02\x02\x02\u0851\u017D\x03\x02" +
		"\x02\x02\u0852\u0850\x03\x02\x02\x02\u0853\u0855\t\x1B\x02\x02\u0854\u0853" +
		"\x03\x02\x02\x02\u0855\u0856\x03\x02\x02\x02\u0856\u0854\x03\x02\x02\x02" +
		"\u0856\u0857\x03\x02\x02\x02\u0857\u017F\x03\x02\x02\x02\xE6\u0183\u018C" +
		"\u019A\u019F\u01A5\u01AD\u01B7\u01BD\u01C5\u01CB\u01D1\u01D7\u01D9\u01E3" +
		"\u01E8\u01F0\u01F8\u020D\u021B\u022B\u0232\u023A\u0242\u0257\u0265\u0275" +
		"\u027C\u0283\u0286\u028E\u0290\u0296\u0298\u029E\u02A0\u02A8\u02AC\u02B5" +
		"\u02BC\u02C3\u02C8\u02D0\u02D7\u02DA\u02E2\u02E7\u02EB\u02F0\u02F8\u0304" +
		"\u0310\u0319\u0323\u0333\u0339\u033E\u0345\u034C\u0353\u035F\u0362\u0365" +
		"\u036D\u0370\u0373\u037F\u0385\u0388\u038C\u0390\u0397\u0399\u039D\u03A2" +
		"\u03AF\u03B4\u03B6\u03BE\u03C2\u03CD\u03D6\u03E4\u03E9\u03F1\u03F4\u03F9" +
		"\u0400\u0403\u0409\u040C\u0410\u0414\u0421\u042E\u0430\u043C\u0441\u0447" +
		"\u044F\u0457\u045A\u0462\u046B\u0473\u047A\u0486\u048E\u0496\u049D\u04A3" +
		"\u04B6\u04BA\u04C1\u04C5\u04C8\u04CF\u04D2\u04DA\u04DE\u04E6\u04EB\u04F2" +
		"\u04F6\u04FA\u0503\u050E\u0513\u051B\u051F\u0521\u0527\u052E\u0536\u053F" +
		"\u0544\u054C\u0552\u055C\u0562\u056A\u0570\u057A\u057E\u0595\u0599\u059D" +
		"\u05A4\u05AD\u05B3\u05BC\u05C9\u05DA\u05E0\u05EC\u05F7\u0601\u0606\u060E" +
		"\u061A\u061E\u0622\u0629\u062D\u0631\u0635\u064A\u064E\u0654\u065A\u0664" +
		"\u066F\u0676\u068C\u06A7\u06AA\u06EA\u06FA\u06FC\u0709\u070F\u0714\u071B" +
		"\u071E\u0723\u072A\u0738\u073E\u0746\u0751\u0757\u075B\u075F\u0766\u076C" +
		"\u077B\u0781\u0786\u078B\u078F\u0792\u0799\u079C\u07A5\u07AD\u07BA\u07C6" +
		"\u07D2\u07D6\u07DA\u07DE\u07E4\u07E9\u07EE\u07F0\u07F5\u07FE\u0808\u080A" +
		"\u0815\u0819\u081C\u0827\u0831\u0836\u083A\u083F\u0850\u0856";
	public static readonly _serializedATN: string = Utils.join(
		[
			NextflowScriptParser._serializedATNSegment0,
			NextflowScriptParser._serializedATNSegment1,
			NextflowScriptParser._serializedATNSegment2,
			NextflowScriptParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NextflowScriptParser.__ATN) {
			NextflowScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NextflowScriptParser._serializedATN));
		}

		return NextflowScriptParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(NextflowScriptParser.EOF, 0); }
	public scriptStatement(): ScriptStatementContext[];
	public scriptStatement(i: number): ScriptStatementContext;
	public scriptStatement(i?: number): ScriptStatementContext | ScriptStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScriptStatementContext);
		} else {
			return this.getRuleContext(i, ScriptStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptStatementContext extends ParserRuleContext {
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public processDef(): ProcessDefContext | undefined {
		return this.tryGetRuleContext(0, ProcessDefContext);
	}
	public workflowDef(): WorkflowDefContext | undefined {
		return this.tryGetRuleContext(0, WorkflowDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_scriptStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterScriptStatement) {
			listener.enterScriptStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitScriptStatement) {
			listener.exitScriptStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitScriptStatement) {
			return visitor.visitScriptStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStatementContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(NextflowScriptParser.INCLUDE, 0); }
	public includeNames(): IncludeNamesContext {
		return this.getRuleContext(0, IncludeNamesContext);
	}
	public FROM(): TerminalNode { return this.getToken(NextflowScriptParser.FROM, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_includeStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIncludeStatement) {
			listener.enterIncludeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIncludeStatement) {
			listener.exitIncludeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIncludeStatement) {
			return visitor.visitIncludeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeNamesContext extends ParserRuleContext {
	public includeName(): IncludeNameContext[];
	public includeName(i: number): IncludeNameContext;
	public includeName(i?: number): IncludeNameContext | IncludeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IncludeNameContext);
		} else {
			return this.getRuleContext(i, IncludeNameContext);
		}
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_includeNames; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIncludeNames) {
			listener.enterIncludeNames(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIncludeNames) {
			listener.exitIncludeNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIncludeNames) {
			return visitor.visitIncludeNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_includeName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIncludeName) {
			listener.enterIncludeName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIncludeName) {
			listener.exitIncludeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIncludeName) {
			return visitor.visitIncludeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessDefContext extends ParserRuleContext {
	public PROCESS(): TerminalNode { return this.getToken(NextflowScriptParser.PROCESS, 0); }
	public Identifier(): TerminalNode { return this.getToken(NextflowScriptParser.Identifier, 0); }
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
	public processStatement(): ProcessStatementContext[];
	public processStatement(i: number): ProcessStatementContext;
	public processStatement(i?: number): ProcessStatementContext | ProcessStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessStatementContext);
		} else {
			return this.getRuleContext(i, ProcessStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processDef; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessDef) {
			listener.enterProcessDef(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessDef) {
			listener.exitProcessDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessDef) {
			return visitor.visitProcessDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessStatementContext extends ParserRuleContext {
	public processDirective(): ProcessDirectiveContext | undefined {
		return this.tryGetRuleContext(0, ProcessDirectiveContext);
	}
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INPUT, 0); }
	public processInput(): ProcessInputContext[];
	public processInput(i: number): ProcessInputContext;
	public processInput(i?: number): ProcessInputContext | ProcessInputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessInputContext);
		} else {
			return this.getRuleContext(i, ProcessInputContext);
		}
	}
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.OUTPUT, 0); }
	public processOutput(): ProcessOutputContext[];
	public processOutput(i: number): ProcessOutputContext;
	public processOutput(i?: number): ProcessOutputContext | ProcessOutputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessOutputContext);
		} else {
			return this.getRuleContext(i, ProcessOutputContext);
		}
	}
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.WHEN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SCRIPT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SCRIPT, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SHELL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SHELL, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXEC, 0); }
	public STUB(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessStatement) {
			listener.enterProcessStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessStatement) {
			listener.exitProcessStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessStatement) {
			return visitor.visitProcessStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessDirectiveContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processDirective; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessDirective) {
			listener.enterProcessDirective(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessDirective) {
			listener.exitProcessDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessDirective) {
			return visitor.visitProcessDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputContext extends ParserRuleContext {
	public processInputType(): ProcessInputTypeContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputTypeContext);
	}
	public processInputExpr(): ProcessInputExprContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInput; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInput) {
			listener.enterProcessInput(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInput) {
			listener.exitProcessInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInput) {
			return visitor.visitProcessInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputTypeContext extends ParserRuleContext {
	public processInputVal(): ProcessInputValContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputValContext);
	}
	public processInputEnv(): ProcessInputEnvContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputEnvContext);
	}
	public processInputFile(): ProcessInputFileContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputFileContext);
	}
	public processInputPath(): ProcessInputPathContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputPathContext);
	}
	public processInputStdin(): ProcessInputStdinContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputStdinContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputType) {
			listener.enterProcessInputType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputType) {
			listener.exitProcessInputType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputType) {
			return visitor.visitProcessInputType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputValContext extends ParserRuleContext {
	public VAL(): TerminalNode { return this.getToken(NextflowScriptParser.VAL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public Identifier(): TerminalNode { return this.getToken(NextflowScriptParser.Identifier, 0); }
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputVal; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputVal) {
			listener.enterProcessInputVal(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputVal) {
			listener.exitProcessInputVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputVal) {
			return visitor.visitProcessInputVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputEnvContext extends ParserRuleContext {
	public ENV(): TerminalNode { return this.getToken(NextflowScriptParser.ENV, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public Identifier(): TerminalNode { return this.getToken(NextflowScriptParser.Identifier, 0); }
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputEnv; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputEnv) {
			listener.enterProcessInputEnv(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputEnv) {
			listener.exitProcessInputEnv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputEnv) {
			return visitor.visitProcessInputEnv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputFileContext extends ParserRuleContext {
	public FILE(): TerminalNode { return this.getToken(NextflowScriptParser.FILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputFile; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputFile) {
			listener.enterProcessInputFile(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputFile) {
			listener.exitProcessInputFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputFile) {
			return visitor.visitProcessInputFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputPathContext extends ParserRuleContext {
	public PATH(): TerminalNode { return this.getToken(NextflowScriptParser.PATH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputPath; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputPath) {
			listener.enterProcessInputPath(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputPath) {
			listener.exitProcessInputPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputPath) {
			return visitor.visitProcessInputPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputStdinContext extends ParserRuleContext {
	public STDIN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STDIN, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputStdin; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputStdin) {
			listener.enterProcessInputStdin(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputStdin) {
			listener.exitProcessInputStdin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputStdin) {
			return visitor.visitProcessInputStdin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputExprContext extends ParserRuleContext {
	public processInputTuple(): ProcessInputTupleContext {
		return this.getRuleContext(0, ProcessInputTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputExpr; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputExpr) {
			listener.enterProcessInputExpr(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputExpr) {
			listener.exitProcessInputExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputExpr) {
			return visitor.visitProcessInputExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInputTupleContext extends ParserRuleContext {
	public TUPLE(): TerminalNode { return this.getToken(NextflowScriptParser.TUPLE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public processInputType(): ProcessInputTypeContext[];
	public processInputType(i: number): ProcessInputTypeContext;
	public processInputType(i?: number): ProcessInputTypeContext | ProcessInputTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessInputTypeContext);
		} else {
			return this.getRuleContext(i, ProcessInputTypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processInputTuple; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessInputTuple) {
			listener.enterProcessInputTuple(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessInputTuple) {
			listener.exitProcessInputTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessInputTuple) {
			return visitor.visitProcessInputTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputContext extends ParserRuleContext {
	public processOutputType(): ProcessOutputTypeContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputTypeContext);
	}
	public processOutputExpr(): ProcessOutputExprContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutput; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutput) {
			listener.enterProcessOutput(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutput) {
			listener.exitProcessOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutput) {
			return visitor.visitProcessOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputTypeContext extends ParserRuleContext {
	public processOutputVal(): ProcessOutputValContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputValContext);
	}
	public processOutputEnv(): ProcessOutputEnvContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputEnvContext);
	}
	public processOutputFile(): ProcessOutputFileContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputFileContext);
	}
	public processOutputPath(): ProcessOutputPathContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputPathContext);
	}
	public processOutputStdout(): ProcessOutputStdoutContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputStdoutContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputType) {
			listener.enterProcessOutputType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputType) {
			listener.exitProcessOutputType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputType) {
			return visitor.visitProcessOutputType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputValContext extends ParserRuleContext {
	public VAL(): TerminalNode { return this.getToken(NextflowScriptParser.VAL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public Identifier(): TerminalNode { return this.getToken(NextflowScriptParser.Identifier, 0); }
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputVal; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputVal) {
			listener.enterProcessOutputVal(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputVal) {
			listener.exitProcessOutputVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputVal) {
			return visitor.visitProcessOutputVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputEnvContext extends ParserRuleContext {
	public ENV(): TerminalNode { return this.getToken(NextflowScriptParser.ENV, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public Identifier(): TerminalNode { return this.getToken(NextflowScriptParser.Identifier, 0); }
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputEnv; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputEnv) {
			listener.enterProcessOutputEnv(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputEnv) {
			listener.exitProcessOutputEnv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputEnv) {
			return visitor.visitProcessOutputEnv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputFileContext extends ParserRuleContext {
	public FILE(): TerminalNode { return this.getToken(NextflowScriptParser.FILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputFile; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputFile) {
			listener.enterProcessOutputFile(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputFile) {
			listener.exitProcessOutputFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputFile) {
			return visitor.visitProcessOutputFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputPathContext extends ParserRuleContext {
	public PATH(): TerminalNode { return this.getToken(NextflowScriptParser.PATH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COLON);
		} else {
			return this.getToken(NextflowScriptParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputPath; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputPath) {
			listener.enterProcessOutputPath(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputPath) {
			listener.exitProcessOutputPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputPath) {
			return visitor.visitProcessOutputPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputStdoutContext extends ParserRuleContext {
	public STDOUT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STDOUT, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputStdout; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputStdout) {
			listener.enterProcessOutputStdout(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputStdout) {
			listener.exitProcessOutputStdout(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputStdout) {
			return visitor.visitProcessOutputStdout(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputExprContext extends ParserRuleContext {
	public processOutputTuple(): ProcessOutputTupleContext {
		return this.getRuleContext(0, ProcessOutputTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputExpr; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputExpr) {
			listener.enterProcessOutputExpr(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputExpr) {
			listener.exitProcessOutputExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputExpr) {
			return visitor.visitProcessOutputExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessOutputTupleContext extends ParserRuleContext {
	public TUPLE(): TerminalNode { return this.getToken(NextflowScriptParser.TUPLE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public processOutputType(): ProcessOutputTypeContext[];
	public processOutputType(i: number): ProcessOutputTypeContext;
	public processOutputType(i?: number): ProcessOutputTypeContext | ProcessOutputTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessOutputTypeContext);
		} else {
			return this.getRuleContext(i, ProcessOutputTypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processOutputTuple; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessOutputTuple) {
			listener.enterProcessOutputTuple(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessOutputTuple) {
			listener.exitProcessOutputTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessOutputTuple) {
			return visitor.visitProcessOutputTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WorkflowDefContext extends ParserRuleContext {
	public WORKFLOW(): TerminalNode { return this.getToken(NextflowScriptParser.WORKFLOW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
	public workflowBody(): WorkflowBodyContext | undefined {
		return this.tryGetRuleContext(0, WorkflowBodyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.Identifier, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_workflowDef; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterWorkflowDef) {
			listener.enterWorkflowDef(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitWorkflowDef) {
			listener.exitWorkflowDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitWorkflowDef) {
			return visitor.visitWorkflowDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WorkflowBodyContext extends ParserRuleContext {
	public TAKE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TAKE, 0); }
	public MAIN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MAIN, 0); }
	public EMIT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EMIT, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.Identifier);
		} else {
			return this.getToken(NextflowScriptParser.Identifier, i);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_workflowBody; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterWorkflowBody) {
			listener.enterWorkflowBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitWorkflowBody) {
			listener.exitWorkflowBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitWorkflowBody) {
			return visitor.visitWorkflowBody(this);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_scriptStatements; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterScriptStatements) {
			listener.enterScriptStatements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitScriptStatements) {
			listener.exitScriptStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitScriptStatements) {
			return visitor.visitScriptStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(0, AnnotationsOptContext);
	}
	public PACKAGE(): TerminalNode { return this.getToken(NextflowScriptParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public IMPORT(): TerminalNode { return this.getToken(NextflowScriptParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MUL, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VOLATILE, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEF, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_modifier; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_modifiersOpt; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterModifiersOpt) {
			listener.enterModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitModifiersOpt) {
			listener.exitModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_modifiers; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.NL);
		} else {
			return this.getToken(NextflowScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classOrInterfaceModifiersOpt; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassOrInterfaceModifiersOpt) {
			listener.enterClassOrInterfaceModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassOrInterfaceModifiersOpt) {
			listener.exitClassOrInterfaceModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classOrInterfaceModifiers; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassOrInterfaceModifiers) {
			listener.enterClassOrInterfaceModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassOrInterfaceModifiers) {
			listener.exitClassOrInterfaceModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ABSTRACT, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SEALED, 0); }
	public NON_SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NON_SEALED, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STRICTFP, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.FINAL, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEF, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VAR, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ABSTRACT, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableModifiersOpt; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableModifiersOpt) {
			listener.enterVariableModifiersOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableModifiersOpt) {
			listener.exitVariableModifiersOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableModifiers; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableModifiers) {
			listener.enterVariableModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableModifiers) {
			listener.exitVariableModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableModifiers) {
			return visitor.visitVariableModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NextflowScriptParser.LT, 0); }
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
	public GT(): TerminalNode { return this.getToken(NextflowScriptParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXTENDS, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.BITAND);
		} else {
			return this.getToken(NextflowScriptParser.BITAND, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeList; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CLASS, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INTERFACE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ENUM, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AT, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRAIT, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RECORD, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IMPLEMENTS, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PERMITS, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public t: number;
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, t: number) {
		super(parent, invokingState);
		this.t = t;
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classBody; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STATIC, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.THROWS, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_compactConstructorDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCompactConstructorDeclaration) {
			listener.enterCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCompactConstructorDeclaration) {
			listener.exitCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_methodName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, ct: number) {
		super(parent, invokingState);
		this.ct = ct;
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_returnType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableInitializers; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableInitializers) {
			listener.enterVariableInitializers(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableInitializers) {
			listener.exitVariableInitializers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.LBRACK);
		} else {
			return this.getToken(NextflowScriptParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.RBRACK);
		} else {
			return this.getToken(NextflowScriptParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_emptyDims; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEmptyDims) {
			listener.enterEmptyDims(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEmptyDims) {
			listener.exitEmptyDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_emptyDimsOpt; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEmptyDimsOpt) {
			listener.enterEmptyDimsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEmptyDimsOpt) {
			listener.exitEmptyDimsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_type; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}






export class PrimitiveTypeContext extends ParserRuleContext {
	public BuiltInPrimitiveType(): TerminalNode { return this.getToken(NextflowScriptParser.BuiltInPrimitiveType, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NextflowScriptParser.LT, 0); }
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
	public GT(): TerminalNode { return this.getToken(NextflowScriptParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.QUESTION, 0); }
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_annotatedQualifiedClassName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAnnotatedQualifiedClassName) {
			listener.enterAnnotatedQualifiedClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAnnotatedQualifiedClassName) {
			listener.exitAnnotatedQualifiedClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_qualifiedClassNameList; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterQualifiedClassNameList) {
			listener.enterQualifiedClassNameList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitQualifiedClassNameList) {
			listener.exitQualifiedClassNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitQualifiedClassNameList) {
			return visitor.visitQualifiedClassNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public THIS(): TerminalNode { return this.getToken(NextflowScriptParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_thisFormalParameter; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterThisFormalParameter) {
			listener.enterThisFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitThisFormalParameter) {
			listener.exitThisFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ELLIPSIS, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.DOT);
		} else {
			return this.getToken(NextflowScriptParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AS, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_qualifiedNameElement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterQualifiedNameElement) {
			listener.enterQualifiedNameElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitQualifiedNameElement) {
			listener.exitQualifiedNameElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.DOT);
		} else {
			return this.getToken(NextflowScriptParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_qualifiedNameElements; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterQualifiedNameElements) {
			listener.enterQualifiedNameElements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitQualifiedNameElements) {
			listener.exitQualifiedNameElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_qualifiedClassName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterQualifiedClassName) {
			listener.enterQualifiedClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitQualifiedClassName) {
			listener.exitQualifiedClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.DOT);
		} else {
			return this.getToken(NextflowScriptParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_qualifiedStandardClassName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterQualifiedStandardClassName) {
			listener.enterQualifiedStandardClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitQualifiedStandardClassName) {
			listener.exitQualifiedStandardClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralAltContext extends LiteralContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(NextflowScriptParser.IntegerLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIntegerLiteralAlt) {
			listener.enterIntegerLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIntegerLiteralAlt) {
			listener.exitIntegerLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteralAlt) {
			return visitor.visitIntegerLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatingPointLiteralAltContext extends LiteralContext {
	public FloatingPointLiteral(): TerminalNode { return this.getToken(NextflowScriptParser.FloatingPointLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterFloatingPointLiteralAlt) {
			listener.enterFloatingPointLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitFloatingPointLiteralAlt) {
			listener.exitFloatingPointLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterStringLiteralAlt) {
			listener.enterStringLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitStringLiteralAlt) {
			listener.exitStringLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralAlt) {
			return visitor.visitStringLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralAltContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(NextflowScriptParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBooleanLiteralAlt) {
			listener.enterBooleanLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBooleanLiteralAlt) {
			listener.exitBooleanLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralAlt) {
			return visitor.visitBooleanLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralAltContext extends LiteralContext {
	public NullLiteral(): TerminalNode { return this.getToken(NextflowScriptParser.NullLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterNullLiteralAlt) {
			listener.enterNullLiteralAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitNullLiteralAlt) {
			listener.exitNullLiteralAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitNullLiteralAlt) {
			return visitor.visitNullLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GstringContext extends ParserRuleContext {
	public GStringBegin(): TerminalNode { return this.getToken(NextflowScriptParser.GStringBegin, 0); }
	public gstringValue(): GstringValueContext[];
	public gstringValue(i: number): GstringValueContext;
	public gstringValue(i?: number): GstringValueContext | GstringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GstringValueContext);
		} else {
			return this.getRuleContext(i, GstringValueContext);
		}
	}
	public GStringEnd(): TerminalNode { return this.getToken(NextflowScriptParser.GStringEnd, 0); }
	public GStringPart(): TerminalNode[];
	public GStringPart(i: number): TerminalNode;
	public GStringPart(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.GStringPart);
		} else {
			return this.getToken(NextflowScriptParser.GStringPart, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_gstring; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterGstring) {
			listener.enterGstring(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitGstring) {
			listener.exitGstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_gstringValue; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterGstringValue) {
			listener.enterGstringValue(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitGstringValue) {
			listener.exitGstringValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.GStringPathPart);
		} else {
			return this.getToken(NextflowScriptParser.GStringPathPart, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_gstringPath; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterGstringPath) {
			listener.enterGstringPath(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitGstringPath) {
			listener.exitGstringPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ARROW(): TerminalNode { return this.getToken(NextflowScriptParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_standardLambdaExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterStandardLambdaExpression) {
			listener.enterStandardLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitStandardLambdaExpression) {
			listener.exitStandardLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_standardLambdaParameters; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterStandardLambdaParameters) {
			listener.enterStandardLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitStandardLambdaParameters) {
			listener.exitStandardLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(0, BlockStatementsOptContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ARROW, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_closure; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClosure) {
			listener.enterClosure(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClosure) {
			listener.exitClosure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_closureOrLambdaExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClosureOrLambdaExpression) {
			listener.enterClosureOrLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClosureOrLambdaExpression) {
			listener.exitClosureOrLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_blockStatementsOpt; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBlockStatementsOpt) {
			listener.enterBlockStatementsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBlockStatementsOpt) {
			listener.exitBlockStatementsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_blockStatements; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_annotationsOpt; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAnnotationsOpt) {
			listener.enterAnnotationsOpt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAnnotationsOpt) {
			listener.exitAnnotationsOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitAnnotationsOpt) {
			return visitor.visitAnnotationsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(NextflowScriptParser.AT, 0); }
	public annotationName(): AnnotationNameContext {
		return this.getRuleContext(0, AnnotationNameContext);
	}
	public nls(): NlsContext | undefined {
		return this.tryGetRuleContext(0, NlsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_annotation; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_elementValues; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterElementValues) {
			listener.enterElementValues(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitElementValues) {
			listener.exitElementValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_annotationName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAnnotationName) {
			listener.enterAnnotationName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAnnotationName) {
			listener.exitAnnotationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode { return this.getToken(NextflowScriptParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_elementValuePairName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterElementValuePairName) {
			listener.enterElementValuePairName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitElementValuePairName) {
			listener.exitElementValuePairName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(0, BlockStatementsOptContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ASSIGN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNamePairsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeNamePairs; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeNamePairs) {
			listener.enterTypeNamePairs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeNamePairs) {
			listener.exitTypeNamePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeNamePair; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeNamePair) {
			listener.enterTypeNamePair(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeNamePair) {
			listener.exitTypeNamePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeNamePair) {
			return visitor.visitTypeNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNamesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_variableNames; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterVariableNames) {
			listener.enterVariableNames(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitVariableNames) {
			listener.exitVariableNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_conditionalStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public IF(): TerminalNode { return this.getToken(NextflowScriptParser.IF, 0); }
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ELSE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_ifElseStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIfElseStatement) {
			listener.enterIfElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIfElseStatement) {
			listener.exitIfElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIfElseStatement) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(NextflowScriptParser.SWITCH, 0); }
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
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_loopStatement; }
	public copyFrom(ctx: LoopStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ForStmtAltContext extends LoopStatementContext {
	public FOR(): TerminalNode { return this.getToken(NextflowScriptParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterForStmtAlt) {
			listener.enterForStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitForStmtAlt) {
			listener.exitForStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmtAlt) {
			return visitor.visitForStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStmtAltContext extends LoopStatementContext {
	public WHILE(): TerminalNode { return this.getToken(NextflowScriptParser.WHILE, 0); }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterWhileStmtAlt) {
			listener.enterWhileStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitWhileStmtAlt) {
			listener.exitWhileStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStmtAlt) {
			return visitor.visitWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoWhileStmtAltContext extends LoopStatementContext {
	public DO(): TerminalNode { return this.getToken(NextflowScriptParser.DO, 0); }
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
	public WHILE(): TerminalNode { return this.getToken(NextflowScriptParser.WHILE, 0); }
	public expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(0, ExpressionInParContext);
	}
	constructor(ctx: LoopStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterDoWhileStmtAlt) {
			listener.enterDoWhileStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitDoWhileStmtAlt) {
			listener.exitDoWhileStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStmtAlt) {
			return visitor.visitDoWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(NextflowScriptParser.CONTINUE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(NextflowScriptParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(NextflowScriptParser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(NextflowScriptParser.TRY, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_tryCatchStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTryCatchStatement) {
			listener.enterTryCatchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTryCatchStatement) {
			listener.exitTryCatchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ASSERT(): TerminalNode { return this.getToken(NextflowScriptParser.ASSERT, 0); }
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_statement; }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBlockStmtAlt) {
			listener.enterBlockStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBlockStmtAlt) {
			listener.exitBlockStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterConditionalStmtAlt) {
			listener.enterConditionalStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitConditionalStmtAlt) {
			listener.exitConditionalStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLoopStmtAlt) {
			listener.enterLoopStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLoopStmtAlt) {
			listener.exitLoopStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTryCatchStmtAlt) {
			listener.enterTryCatchStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTryCatchStmtAlt) {
			listener.exitTryCatchStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchStmtAlt) {
			return visitor.visitTryCatchStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SynchronizedStmtAltContext extends StatementContext {
	public SYNCHRONIZED(): TerminalNode { return this.getToken(NextflowScriptParser.SYNCHRONIZED, 0); }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSynchronizedStmtAlt) {
			listener.enterSynchronizedStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSynchronizedStmtAlt) {
			listener.exitSynchronizedStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStmtAlt) {
			return visitor.visitSynchronizedStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtAltContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(NextflowScriptParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterReturnStmtAlt) {
			listener.enterReturnStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitReturnStmtAlt) {
			listener.exitReturnStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStmtAlt) {
			return visitor.visitReturnStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThrowStmtAltContext extends StatementContext {
	public THROW(): TerminalNode { return this.getToken(NextflowScriptParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterThrowStmtAlt) {
			listener.enterThrowStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitThrowStmtAlt) {
			listener.exitThrowStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBreakStmtAlt) {
			listener.enterBreakStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBreakStmtAlt) {
			listener.exitBreakStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterContinueStmtAlt) {
			listener.enterContinueStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitContinueStmtAlt) {
			listener.exitContinueStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterYieldStmtAlt) {
			listener.enterYieldStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitYieldStmtAlt) {
			listener.exitYieldStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public COLON(): TerminalNode { return this.getToken(NextflowScriptParser.COLON, 0); }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLabeledStmtAlt) {
			listener.enterLabeledStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLabeledStmtAlt) {
			listener.exitLabeledStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAssertStmtAlt) {
			listener.enterAssertStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAssertStmtAlt) {
			listener.exitAssertStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLocalVariableDeclarationStmtAlt) {
			listener.enterLocalVariableDeclarationStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLocalVariableDeclarationStmtAlt) {
			listener.exitLocalVariableDeclarationStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterExpressionStmtAlt) {
			listener.enterExpressionStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitExpressionStmtAlt) {
			listener.exitExpressionStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmtAlt) {
			return visitor.visitExpressionStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyStmtAltContext extends StatementContext {
	public SEMI(): TerminalNode { return this.getToken(NextflowScriptParser.SEMI, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEmptyStmtAlt) {
			listener.enterEmptyStmtAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEmptyStmtAlt) {
			listener.exitEmptyStmtAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmtAlt) {
			return visitor.visitEmptyStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(NextflowScriptParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.BITOR);
		} else {
			return this.getToken(NextflowScriptParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_catchType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(NextflowScriptParser.FINALLY, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_resources; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_resourceList; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_resource; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(NextflowScriptParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_forControl; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.SEMI);
		} else {
			return this.getToken(NextflowScriptParser.SEMI, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_classicalForControl; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassicalForControl) {
			listener.enterClassicalForControl(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassicalForControl) {
			listener.exitClassicalForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_forInit; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_castParExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCastParExpression) {
			listener.enterCastParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCastParExpression) {
			listener.exitCastParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionInParContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_expressionInPar; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterExpressionInPar) {
			listener.enterExpressionInPar(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitExpressionInPar) {
			listener.exitExpressionInPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_expressionListElement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterExpressionListElement) {
			listener.enterExpressionListElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitExpressionListElement) {
			listener.exitExpressionListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_enhancedStatementExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEnhancedStatementExpression) {
			listener.enterEnhancedStatementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEnhancedStatementExpression) {
			listener.exitEnhancedStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_statementExpression; }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCommandExprAlt) {
			listener.enterCommandExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCommandExprAlt) {
			listener.exitCommandExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public INC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(NextflowScriptParser.SWITCH, 0); }
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
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_switchExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchExpression) {
			listener.enterSwitchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchExpression) {
			listener.exitSwitchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_switchBlockStatementExpressionGroup; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchBlockStatementExpressionGroup) {
			listener.enterSwitchBlockStatementExpressionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchBlockStatementExpressionGroup) {
			listener.exitSwitchBlockStatementExpressionGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementExpressionGroup) {
			return visitor.visitSwitchBlockStatementExpressionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionLabelContext extends ParserRuleContext {
	public _ac!: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CASE, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEFAULT, 0); }
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ARROW, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_switchExpressionLabel; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchExpressionLabel) {
			listener.enterSwitchExpressionLabel(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchExpressionLabel) {
			listener.exitSwitchExpressionLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_expression; }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCastExprAlt) {
			listener.enterCastExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCastExprAlt) {
			listener.exitCastExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPostfixExprAlt) {
			listener.enterPostfixExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPostfixExprAlt) {
			listener.exitPostfixExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSwitchExprAlt) {
			listener.enterSwitchExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSwitchExprAlt) {
			listener.exitSwitchExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public BITNOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.BITNOT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterUnaryNotExprAlt) {
			listener.enterUnaryNotExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitUnaryNotExprAlt) {
			listener.exitUnaryNotExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public POWER(): TerminalNode { return this.getToken(NextflowScriptParser.POWER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPowerExprAlt) {
			listener.enterPowerExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPowerExprAlt) {
			listener.exitPowerExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public INC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterUnaryAddExprAlt) {
			listener.enterUnaryAddExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitUnaryAddExprAlt) {
			listener.exitUnaryAddExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMultiplicativeExprAlt) {
			listener.enterMultiplicativeExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMultiplicativeExprAlt) {
			listener.exitMultiplicativeExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAdditiveExprAlt) {
			listener.enterAdditiveExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAdditiveExprAlt) {
			listener.exitAdditiveExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.LT);
		} else {
			return this.getToken(NextflowScriptParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.GT);
		} else {
			return this.getToken(NextflowScriptParser.GT, i);
		}
	}
	public RANGE_INCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RANGE_INCLUSIVE, 0); }
	public RANGE_EXCLUSIVE_LEFT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RANGE_EXCLUSIVE_LEFT, 0); }
	public RANGE_EXCLUSIVE_RIGHT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RANGE_EXCLUSIVE_RIGHT, 0); }
	public RANGE_EXCLUSIVE_FULL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RANGE_EXCLUSIVE_FULL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterShiftExprAlt) {
			listener.enterShiftExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitShiftExprAlt) {
			listener.exitShiftExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AS, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INSTANCEOF, 0); }
	public NOT_INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NOT_INSTANCEOF, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IN, 0); }
	public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NOT_IN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterRelationalExprAlt) {
			listener.enterRelationalExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitRelationalExprAlt) {
			listener.exitRelationalExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public IDENTICAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IDENTICAL, 0); }
	public NOT_IDENTICAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NOT_IDENTICAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NOTEQUAL, 0); }
	public SPACESHIP(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SPACESHIP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEqualityExprAlt) {
			listener.enterEqualityExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEqualityExprAlt) {
			listener.exitEqualityExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public REGEX_FIND(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.REGEX_FIND, 0); }
	public REGEX_MATCH(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.REGEX_MATCH, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterRegexExprAlt) {
			listener.enterRegexExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitRegexExprAlt) {
			listener.exitRegexExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public BITAND(): TerminalNode { return this.getToken(NextflowScriptParser.BITAND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAndExprAlt) {
			listener.enterAndExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAndExprAlt) {
			listener.exitAndExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public XOR(): TerminalNode { return this.getToken(NextflowScriptParser.XOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterExclusiveOrExprAlt) {
			listener.enterExclusiveOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitExclusiveOrExprAlt) {
			listener.exitExclusiveOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public BITOR(): TerminalNode { return this.getToken(NextflowScriptParser.BITOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterInclusiveOrExprAlt) {
			listener.enterInclusiveOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitInclusiveOrExprAlt) {
			listener.exitInclusiveOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public AND(): TerminalNode { return this.getToken(NextflowScriptParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLogicalAndExprAlt) {
			listener.enterLogicalAndExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLogicalAndExprAlt) {
			listener.exitLogicalAndExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public OR(): TerminalNode { return this.getToken(NextflowScriptParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLogicalOrExprAlt) {
			listener.enterLogicalOrExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLogicalOrExprAlt) {
			listener.exitLogicalOrExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.QUESTION, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	public ELVIS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ELVIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterConditionalExprAlt) {
			listener.enterConditionalExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitConditionalExprAlt) {
			listener.exitConditionalExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode { return this.getToken(NextflowScriptParser.ASSIGN, 0); }
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMultipleAssignmentExprAlt) {
			listener.enterMultipleAssignmentExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMultipleAssignmentExprAlt) {
			listener.exitMultipleAssignmentExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MOD_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.POWER_ASSIGN, 0); }
	public ELVIS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ELVIS_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAssignmentExprAlt) {
			listener.enterAssignmentExprAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAssignmentExprAlt) {
			listener.exitAssignmentExprAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_commandExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCommandExpression) {
			listener.enterCommandExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCommandExpression) {
			listener.exitCommandExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_commandArgument; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCommandArgument) {
			listener.enterCommandArgument(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCommandArgument) {
			listener.exitCommandArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STATIC, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_pathExpression; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPathExpression) {
			listener.enterPathExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPathExpression) {
			listener.exitPathExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DOT, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NEW, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public namePart(): NamePartContext | undefined {
		return this.tryGetRuleContext(0, NamePartContext);
	}
	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClosureOrLambdaExpressionContext);
	}
	public METHOD_POINTER(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.METHOD_POINTER, 0); }
	public METHOD_REFERENCE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.METHOD_REFERENCE, 0); }
	public SPREAD_DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SPREAD_DOT, 0); }
	public SAFE_DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SAFE_DOT, 0); }
	public SAFE_CHAIN_DOT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SAFE_CHAIN_DOT, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AT, 0); }
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_pathElement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterPathElement) {
			listener.enterPathElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitPathElement) {
			listener.exitPathElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_namePart; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterNamePart) {
			listener.enterNamePart(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitNamePart) {
			listener.exitNamePart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_dynamicMemberName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterDynamicMemberName) {
			listener.enterDynamicMemberName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitDynamicMemberName) {
			listener.exitDynamicMemberName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitDynamicMemberName) {
			return visitor.visitDynamicMemberName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexPropertyArgsContext extends ParserRuleContext {
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public SAFE_INDEX(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SAFE_INDEX, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LBRACK, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_indexPropertyArgs; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIndexPropertyArgs) {
			listener.enterIndexPropertyArgs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIndexPropertyArgs) {
			listener.exitIndexPropertyArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexPropertyArgs) {
			return visitor.visitIndexPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedPropertyArgsContext extends ParserRuleContext {
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public SAFE_INDEX(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SAFE_INDEX, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_namedPropertyArgs; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterNamedPropertyArgs) {
			listener.enterNamedPropertyArgs(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitNamedPropertyArgs) {
			listener.exitNamedPropertyArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_primary; }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIdentifierPrmrAlt) {
			listener.enterIdentifierPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIdentifierPrmrAlt) {
			listener.exitIdentifierPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterLiteralPrmrAlt) {
			listener.enterLiteralPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitLiteralPrmrAlt) {
			listener.exitLiteralPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterGstringPrmrAlt) {
			listener.enterGstringPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitGstringPrmrAlt) {
			listener.exitGstringPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitGstringPrmrAlt) {
			return visitor.visitGstringPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewPrmrAltContext extends PrimaryContext {
	public NEW(): TerminalNode { return this.getToken(NextflowScriptParser.NEW, 0); }
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterNewPrmrAlt) {
			listener.enterNewPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitNewPrmrAlt) {
			listener.exitNewPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitNewPrmrAlt) {
			return visitor.visitNewPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisPrmrAltContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(NextflowScriptParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterThisPrmrAlt) {
			listener.enterThisPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitThisPrmrAlt) {
			listener.exitThisPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitThisPrmrAlt) {
			return visitor.visitThisPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperPrmrAltContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(NextflowScriptParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSuperPrmrAlt) {
			listener.enterSuperPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSuperPrmrAlt) {
			listener.exitSuperPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterParenPrmrAlt) {
			listener.enterParenPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitParenPrmrAlt) {
			listener.exitParenPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClosureOrLambdaExpressionPrmrAlt) {
			listener.enterClosureOrLambdaExpressionPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClosureOrLambdaExpressionPrmrAlt) {
			listener.exitClosureOrLambdaExpressionPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterListPrmrAlt) {
			listener.enterListPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitListPrmrAlt) {
			listener.exitListPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMapPrmrAlt) {
			listener.enterMapPrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMapPrmrAlt) {
			listener.exitMapPrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBuiltInTypePrmrAlt) {
			listener.enterBuiltInTypePrmrAlt(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBuiltInTypePrmrAlt) {
			listener.exitBuiltInTypePrmrAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitBuiltInTypePrmrAlt) {
			return visitor.visitBuiltInTypePrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}








export class ListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_list; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_map; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_mapEntryList; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMapEntryList) {
			listener.enterMapEntryList(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMapEntryList) {
			listener.exitMapEntryList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public COLON(): TerminalNode { return this.getToken(NextflowScriptParser.COLON, 0); }
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_mapEntry; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMapEntry) {
			listener.enterMapEntry(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMapEntry) {
			listener.exitMapEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_mapEntryLabel; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterMapEntryLabel) {
			listener.enterMapEntryLabel(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitMapEntryLabel) {
			listener.exitMapEntryLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_creator; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public LBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_dim; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterDim) {
			listener.enterDim(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitDim) {
			listener.exitDim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitDim) {
			return visitor.visitDim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
	public variableInitializers(): VariableInitializersContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_anonymousInnerClassDeclaration; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterAnonymousInnerClassDeclaration) {
			listener.enterAnonymousInnerClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitAnonymousInnerClassDeclaration) {
			listener.exitAnonymousInnerClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_createdName; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NextflowScriptParser.LT, 0); }
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
	public GT(): TerminalNode { return this.getToken(NextflowScriptParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.LPAREN, 0); }
	public rparen(): RparenContext {
		return this.getRuleContext(0, RparenContext);
	}
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext | undefined {
		return this.tryGetRuleContext(0, EnhancedArgumentListInParContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.COMMA);
		} else {
			return this.getToken(NextflowScriptParser.COMMA, i);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_enhancedArgumentListInPar; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEnhancedArgumentListInPar) {
			listener.enterEnhancedArgumentListInPar(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEnhancedArgumentListInPar) {
			listener.exitEnhancedArgumentListInPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_enhancedArgumentListElement; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterEnhancedArgumentListElement) {
			listener.enterEnhancedArgumentListElement(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitEnhancedArgumentListElement) {
			listener.exitEnhancedArgumentListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitEnhancedArgumentListElement) {
			return visitor.visitEnhancedArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(NextflowScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public CapitalizedIdentifier(): TerminalNode { return this.getToken(NextflowScriptParser.CapitalizedIdentifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_className; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.Identifier, 0); }
	public CapitalizedIdentifier(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CapitalizedIdentifier, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VAR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IN, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRAIT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AS, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.YIELD, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PERMITS, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RECORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_identifier; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltInTypeContext extends ParserRuleContext {
	public BuiltInPrimitiveType(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.BuiltInPrimitiveType, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_builtInType; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterBuiltInType) {
			listener.enterBuiltInType(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitBuiltInType) {
			listener.exitBuiltInType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitBuiltInType) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.AS, 0); }
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ASSERT, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.BREAK, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.CONTINUE, 0); }
	public DEF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEF, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DEFAULT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXTENDS, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.FOR, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IF, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IMPLEMENTS, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IMPORT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IN, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INSTANCEOF, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INTERFACE, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NATIVE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NEW, 0); }
	public NON_SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NON_SEALED, 0); }
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PACKAGE, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PERMITS, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RECORD, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RETURN, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SEALED, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STRICTFP, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SWITCH, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SYNCHRONIZED, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.THROW, 0); }
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.THROWS, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRANSIENT, 0); }
	public TRAIT(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRAIT, 0); }
	public THREADSAFE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.THREADSAFE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TRY, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VAR, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VOLATILE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.WHILE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.YIELD, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.BooleanLiteral, 0); }
	public BuiltInPrimitiveType(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.BuiltInPrimitiveType, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.VOID, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_keywords; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RparenContext extends ParserRuleContext {
	public RPAREN(): TerminalNode { return this.getToken(NextflowScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_rparen; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterRparen) {
			listener.enterRparen(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitRparen) {
			listener.exitRparen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.NL);
		} else {
			return this.getToken(NextflowScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_nls; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterNls) {
			listener.enterNls(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitNls) {
			listener.exitNls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
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
			return this.getTokens(NextflowScriptParser.NL);
		} else {
			return this.getToken(NextflowScriptParser.NL, i);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NextflowScriptParser.SEMI);
		} else {
			return this.getToken(NextflowScriptParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NextflowScriptParser.RULE_sep; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterSep) {
			listener.enterSep(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitSep) {
			listener.exitSep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitSep) {
			return visitor.visitSep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


