// Generated from server/src/grammar/NextflowScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { NextflowScriptParserListener } from "./NextflowScriptParserListener";
import { NextflowScriptParserVisitor } from "./NextflowScriptParserVisitor";


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
	public static readonly EMIT_GUARD = 130;
	public static readonly ENV = 131;
	public static readonly EXEC_GUARD = 132;
	public static readonly FILE = 133;
	public static readonly FROM = 134;
	public static readonly INCLUDE = 135;
	public static readonly INPUT_GUARD = 136;
	public static readonly MAIN_GUARD = 137;
	public static readonly OUTPUT_GUARD = 138;
	public static readonly PATH = 139;
	public static readonly PROCESS = 140;
	public static readonly SCRIPT_GUARD = 141;
	public static readonly SHELL_GUARD = 142;
	public static readonly STDIN = 143;
	public static readonly STDOUT = 144;
	public static readonly STUB_GUARD = 145;
	public static readonly TAKE_GUARD = 146;
	public static readonly TUPLE = 147;
	public static readonly VAL = 148;
	public static readonly WHEN_GUARD = 149;
	public static readonly WORKFLOW = 150;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_scriptStatements = 1;
	public static readonly RULE_scriptStatement = 2;
	public static readonly RULE_includeStatement = 3;
	public static readonly RULE_includeNames = 4;
	public static readonly RULE_includeName = 5;
	public static readonly RULE_processDef = 6;
	public static readonly RULE_processStatements = 7;
	public static readonly RULE_processStatement = 8;
	public static readonly RULE_processDirective = 9;
	public static readonly RULE_processInput = 10;
	public static readonly RULE_processInputType = 11;
	public static readonly RULE_processInputVal = 12;
	public static readonly RULE_processInputEnv = 13;
	public static readonly RULE_processInputFile = 14;
	public static readonly RULE_processInputPath = 15;
	public static readonly RULE_processInputStdin = 16;
	public static readonly RULE_processInputTuple = 17;
	public static readonly RULE_processOutput = 18;
	public static readonly RULE_processOutputType = 19;
	public static readonly RULE_processOutputVal = 20;
	public static readonly RULE_processOutputEnv = 21;
	public static readonly RULE_processOutputFile = 22;
	public static readonly RULE_processOutputPath = 23;
	public static readonly RULE_processOutputStdout = 24;
	public static readonly RULE_processOutputTuple = 25;
	public static readonly RULE_workflowDef = 26;
	public static readonly RULE_workflowBody = 27;
	public static readonly RULE_packageDeclaration = 28;
	public static readonly RULE_importDeclaration = 29;
	public static readonly RULE_typeDeclaration = 30;
	public static readonly RULE_modifier = 31;
	public static readonly RULE_modifiersOpt = 32;
	public static readonly RULE_modifiers = 33;
	public static readonly RULE_classOrInterfaceModifiersOpt = 34;
	public static readonly RULE_classOrInterfaceModifiers = 35;
	public static readonly RULE_classOrInterfaceModifier = 36;
	public static readonly RULE_variableModifier = 37;
	public static readonly RULE_variableModifiersOpt = 38;
	public static readonly RULE_variableModifiers = 39;
	public static readonly RULE_typeParameters = 40;
	public static readonly RULE_typeParameter = 41;
	public static readonly RULE_typeBound = 42;
	public static readonly RULE_typeList = 43;
	public static readonly RULE_classDeclaration = 44;
	public static readonly RULE_classBody = 45;
	public static readonly RULE_enumConstants = 46;
	public static readonly RULE_enumConstant = 47;
	public static readonly RULE_classBodyDeclaration = 48;
	public static readonly RULE_memberDeclaration = 49;
	public static readonly RULE_methodDeclaration = 50;
	public static readonly RULE_methodName = 51;
	public static readonly RULE_returnType = 52;
	public static readonly RULE_fieldDeclaration = 53;
	public static readonly RULE_variableDeclarators = 54;
	public static readonly RULE_variableDeclarator = 55;
	public static readonly RULE_variableDeclaratorId = 56;
	public static readonly RULE_variableInitializer = 57;
	public static readonly RULE_variableInitializers = 58;
	public static readonly RULE_emptyDims = 59;
	public static readonly RULE_emptyDimsOpt = 60;
	public static readonly RULE_standardType = 61;
	public static readonly RULE_type = 62;
	public static readonly RULE_classOrInterfaceType = 63;
	public static readonly RULE_generalClassOrInterfaceType = 64;
	public static readonly RULE_standardClassOrInterfaceType = 65;
	public static readonly RULE_primitiveType = 66;
	public static readonly RULE_typeArguments = 67;
	public static readonly RULE_typeArgument = 68;
	public static readonly RULE_annotatedQualifiedClassName = 69;
	public static readonly RULE_qualifiedClassNameList = 70;
	public static readonly RULE_formalParameters = 71;
	public static readonly RULE_formalParameterList = 72;
	public static readonly RULE_thisFormalParameter = 73;
	public static readonly RULE_formalParameter = 74;
	public static readonly RULE_methodBody = 75;
	public static readonly RULE_qualifiedName = 76;
	public static readonly RULE_qualifiedNameElement = 77;
	public static readonly RULE_qualifiedNameElements = 78;
	public static readonly RULE_qualifiedClassName = 79;
	public static readonly RULE_qualifiedStandardClassName = 80;
	public static readonly RULE_literal = 81;
	public static readonly RULE_gstring = 82;
	public static readonly RULE_gstringValue = 83;
	public static readonly RULE_gstringPath = 84;
	public static readonly RULE_lambdaExpression = 85;
	public static readonly RULE_standardLambdaExpression = 86;
	public static readonly RULE_lambdaParameters = 87;
	public static readonly RULE_standardLambdaParameters = 88;
	public static readonly RULE_lambdaBody = 89;
	public static readonly RULE_closure = 90;
	public static readonly RULE_closureOrLambdaExpression = 91;
	public static readonly RULE_blockStatementsOpt = 92;
	public static readonly RULE_blockStatements = 93;
	public static readonly RULE_annotationsOpt = 94;
	public static readonly RULE_annotation = 95;
	public static readonly RULE_elementValues = 96;
	public static readonly RULE_annotationName = 97;
	public static readonly RULE_elementValuePairs = 98;
	public static readonly RULE_elementValuePair = 99;
	public static readonly RULE_elementValuePairName = 100;
	public static readonly RULE_elementValue = 101;
	public static readonly RULE_elementValueArrayInitializer = 102;
	public static readonly RULE_block = 103;
	public static readonly RULE_blockStatement = 104;
	public static readonly RULE_localVariableDeclaration = 105;
	public static readonly RULE_variableDeclaration = 106;
	public static readonly RULE_typeNamePairs = 107;
	public static readonly RULE_typeNamePair = 108;
	public static readonly RULE_variableNames = 109;
	public static readonly RULE_conditionalStatement = 110;
	public static readonly RULE_ifElseStatement = 111;
	public static readonly RULE_switchStatement = 112;
	public static readonly RULE_loopStatement = 113;
	public static readonly RULE_continueStatement = 114;
	public static readonly RULE_breakStatement = 115;
	public static readonly RULE_tryCatchStatement = 116;
	public static readonly RULE_assertStatement = 117;
	public static readonly RULE_statement = 118;
	public static readonly RULE_catchClause = 119;
	public static readonly RULE_catchType = 120;
	public static readonly RULE_finallyBlock = 121;
	public static readonly RULE_resources = 122;
	public static readonly RULE_resourceList = 123;
	public static readonly RULE_resource = 124;
	public static readonly RULE_switchBlockStatementGroup = 125;
	public static readonly RULE_switchLabel = 126;
	public static readonly RULE_forControl = 127;
	public static readonly RULE_enhancedForControl = 128;
	public static readonly RULE_classicalForControl = 129;
	public static readonly RULE_forInit = 130;
	public static readonly RULE_forUpdate = 131;
	public static readonly RULE_castParExpression = 132;
	public static readonly RULE_parExpression = 133;
	public static readonly RULE_expressionInPar = 134;
	public static readonly RULE_expressionList = 135;
	public static readonly RULE_expressionListElement = 136;
	public static readonly RULE_enhancedStatementExpression = 137;
	public static readonly RULE_statementExpression = 138;
	public static readonly RULE_postfixExpression = 139;
	public static readonly RULE_expression = 140;
	public static readonly RULE_castOperandExpression = 141;
	public static readonly RULE_commandExpression = 142;
	public static readonly RULE_commandArgument = 143;
	public static readonly RULE_pathExpression = 144;
	public static readonly RULE_pathElement = 145;
	public static readonly RULE_namePart = 146;
	public static readonly RULE_dynamicMemberName = 147;
	public static readonly RULE_indexPropertyArgs = 148;
	public static readonly RULE_namedPropertyArgs = 149;
	public static readonly RULE_primary = 150;
	public static readonly RULE_namedPropertyArgPrimary = 151;
	public static readonly RULE_namedArgPrimary = 152;
	public static readonly RULE_commandPrimary = 153;
	public static readonly RULE_list = 154;
	public static readonly RULE_map = 155;
	public static readonly RULE_mapEntryList = 156;
	public static readonly RULE_namedPropertyArgList = 157;
	public static readonly RULE_mapEntry = 158;
	public static readonly RULE_namedPropertyArg = 159;
	public static readonly RULE_namedArg = 160;
	public static readonly RULE_mapEntryLabel = 161;
	public static readonly RULE_namedPropertyArgLabel = 162;
	public static readonly RULE_namedArgLabel = 163;
	public static readonly RULE_creator = 164;
	public static readonly RULE_dim = 165;
	public static readonly RULE_arrayInitializer = 166;
	public static readonly RULE_anonymousInnerClassDeclaration = 167;
	public static readonly RULE_createdName = 168;
	public static readonly RULE_nonWildcardTypeArguments = 169;
	public static readonly RULE_typeArgumentsOrDiamond = 170;
	public static readonly RULE_arguments = 171;
	public static readonly RULE_argumentList = 172;
	public static readonly RULE_enhancedArgumentList = 173;
	public static readonly RULE_enhancedArgumentListInPar = 174;
	public static readonly RULE_firstArgumentListElement = 175;
	public static readonly RULE_argumentListElement = 176;
	public static readonly RULE_firstEnhancedArgumentListElement = 177;
	public static readonly RULE_enhancedArgumentListElement = 178;
	public static readonly RULE_stringLiteral = 179;
	public static readonly RULE_className = 180;
	public static readonly RULE_identifier = 181;
	public static readonly RULE_builtInType = 182;
	public static readonly RULE_keywords = 183;
	public static readonly RULE_rparen = 184;
	public static readonly RULE_nls = 185;
	public static readonly RULE_sep = 186;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "scriptStatements", "scriptStatement", "includeStatement", 
		"includeNames", "includeName", "processDef", "processStatements", "processStatement", 
		"processDirective", "processInput", "processInputType", "processInputVal", 
		"processInputEnv", "processInputFile", "processInputPath", "processInputStdin", 
		"processInputTuple", "processOutput", "processOutputType", "processOutputVal", 
		"processOutputEnv", "processOutputFile", "processOutputPath", "processOutputStdout", 
		"processOutputTuple", "workflowDef", "workflowBody", "packageDeclaration", 
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
		undefined, undefined, undefined, undefined, "'emit:'", "'env'", "'exec:'", 
		"'file'", "'from'", "'include'", "'input:'", "'main:'", "'output:'", "'path'", 
		"'process'", "'script:'", "'shell:'", "'stdin'", "'stdout'", "'stub:'", 
		"'take:'", "'tuple'", "'val'", "'when:'", "'workflow'",
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
		"UNEXPECTED_CHAR", "EMIT_GUARD", "ENV", "EXEC_GUARD", "FILE", "FROM", 
		"INCLUDE", "INPUT_GUARD", "MAIN_GUARD", "OUTPUT_GUARD", "PATH", "PROCESS", 
		"SCRIPT_GUARD", "SHELL_GUARD", "STDIN", "STDOUT", "STUB_GUARD", "TAKE_GUARD", 
		"TUPLE", "VAL", "WHEN_GUARD", "WORKFLOW",
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
		this._interp = new ParserATNSimulator(NextflowScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NextflowScriptParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.nls();
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 375;
				this.scriptStatements();
				}
				break;
			}
			this.state = 378;
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
	public scriptStatements(): ScriptStatementsContext {
		let _localctx: ScriptStatementsContext = new ScriptStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, NextflowScriptParser.RULE_scriptStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.scriptStatement();
			this.state = 386;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 381;
					this.sep();
					this.state = 382;
					this.scriptStatement();
					}
					}
				}
				this.state = 388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 389;
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
		this.enterRule(_localctx, 4, NextflowScriptParser.RULE_scriptStatement);
		try {
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				this.processDef();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 394;
				this.workflowDef();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 395;
				this.importDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 396;
				this.typeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 397;
				if (!( !GroovyParser.isInvalidMethodDeclaration(this._input) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isInvalidMethodDeclaration(this._input) ");
				}
				this.state = 398;
				this.methodDeclaration(3, 9);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 399;
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
	public includeStatement(): IncludeStatementContext {
		let _localctx: IncludeStatementContext = new IncludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, NextflowScriptParser.RULE_includeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(NextflowScriptParser.INCLUDE);
			this.state = 403;
			this.includeNames();
			this.state = 404;
			this.match(NextflowScriptParser.FROM);
			this.state = 405;
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
		this.enterRule(_localctx, 8, NextflowScriptParser.RULE_includeNames);
		let _la: number;
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 407;
				this.includeName();
				}
				break;
			case NextflowScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 408;
				this.match(NextflowScriptParser.LBRACE);
				this.state = 409;
				this.includeName();
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NextflowScriptParser.COMMA) {
					{
					{
					this.state = 410;
					this.match(NextflowScriptParser.COMMA);
					this.state = 411;
					this.includeName();
					}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 417;
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
		this.enterRule(_localctx, 10, NextflowScriptParser.RULE_includeName);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
				this.match(NextflowScriptParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.match(NextflowScriptParser.Identifier);
				this.state = 423;
				this.match(NextflowScriptParser.AS);
				this.state = 424;
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
		this.enterRule(_localctx, 12, NextflowScriptParser.RULE_processDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(NextflowScriptParser.PROCESS);
			this.state = 428;
			this.match(NextflowScriptParser.Identifier);
			this.state = 429;
			this.nls();
			this.state = 430;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 431;
				this.sep();
				}
			}

			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (NextflowScriptParser.Identifier - 123)) | (1 << (NextflowScriptParser.EXEC_GUARD - 123)) | (1 << (NextflowScriptParser.INPUT_GUARD - 123)) | (1 << (NextflowScriptParser.OUTPUT_GUARD - 123)) | (1 << (NextflowScriptParser.SCRIPT_GUARD - 123)) | (1 << (NextflowScriptParser.SHELL_GUARD - 123)) | (1 << (NextflowScriptParser.STUB_GUARD - 123)) | (1 << (NextflowScriptParser.WHEN_GUARD - 123)))) !== 0)) {
				{
				this.state = 434;
				this.processStatements();
				}
			}

			this.state = 437;
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
	public processStatements(): ProcessStatementsContext {
		let _localctx: ProcessStatementsContext = new ProcessStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, NextflowScriptParser.RULE_processStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.processStatement();
			this.state = 445;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 440;
					this.sep();
					this.state = 441;
					this.processStatement();
					}
					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 448;
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
	public processStatement(): ProcessStatementContext {
		let _localctx: ProcessStatementContext = new ProcessStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, NextflowScriptParser.RULE_processStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.processDirective();
				}
				break;
			case NextflowScriptParser.INPUT_GUARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 452;
				this.match(NextflowScriptParser.INPUT_GUARD);
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 453;
					this.processInput();
					}
					}
					this.state = 456;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (NextflowScriptParser.SUB - 103)) | (1 << (NextflowScriptParser.ENV - 103)) | (1 << (NextflowScriptParser.FILE - 103)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (NextflowScriptParser.PATH - 139)) | (1 << (NextflowScriptParser.STDIN - 139)) | (1 << (NextflowScriptParser.TUPLE - 139)) | (1 << (NextflowScriptParser.VAL - 139)))) !== 0));
				}
				break;
			case NextflowScriptParser.OUTPUT_GUARD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 458;
				this.match(NextflowScriptParser.OUTPUT_GUARD);
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 459;
					this.processOutput();
					}
					}
					this.state = 462;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (NextflowScriptParser.SUB - 103)) | (1 << (NextflowScriptParser.ENV - 103)) | (1 << (NextflowScriptParser.FILE - 103)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (NextflowScriptParser.PATH - 139)) | (1 << (NextflowScriptParser.STDOUT - 139)) | (1 << (NextflowScriptParser.TUPLE - 139)) | (1 << (NextflowScriptParser.VAL - 139)))) !== 0));
				}
				break;
			case NextflowScriptParser.WHEN_GUARD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 464;
				this.match(NextflowScriptParser.WHEN_GUARD);
				this.state = 465;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.SCRIPT_GUARD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 466;
				this.match(NextflowScriptParser.SCRIPT_GUARD);
				this.state = 468;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 467;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 470;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case NextflowScriptParser.SHELL_GUARD:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 472;
				this.match(NextflowScriptParser.SHELL_GUARD);
				this.state = 474;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 473;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 476;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case NextflowScriptParser.EXEC_GUARD:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 478;
				this.match(NextflowScriptParser.EXEC_GUARD);
				this.state = 480;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 479;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 482;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case NextflowScriptParser.STUB_GUARD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 484;
				this.match(NextflowScriptParser.STUB_GUARD);
				this.state = 486;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 485;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 488;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
		this.enterRule(_localctx, 18, NextflowScriptParser.RULE_processDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(NextflowScriptParser.Identifier);
			this.state = 493;
			this.expression(0);
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 494;
				this.match(NextflowScriptParser.COMMA);
				this.state = 495;
				this.match(NextflowScriptParser.Identifier);
				this.state = 496;
				this.match(NextflowScriptParser.COLON);
				this.state = 497;
				this.expression(0);
				}
				}
				this.state = 502;
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
		this.enterRule(_localctx, 20, NextflowScriptParser.RULE_processInput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.processInputType();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 504;
				this.match(NextflowScriptParser.COMMA);
				this.state = 505;
				this.match(NextflowScriptParser.Identifier);
				this.state = 506;
				this.match(NextflowScriptParser.COLON);
				this.state = 507;
				this.expression(0);
				}
				}
				this.state = 512;
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
		this.enterRule(_localctx, 22, NextflowScriptParser.RULE_processInputType);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.VAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 513;
				this.processInputVal();
				}
				break;
			case NextflowScriptParser.ENV:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
				this.processInputEnv();
				}
				break;
			case NextflowScriptParser.FILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 515;
				this.processInputFile();
				}
				break;
			case NextflowScriptParser.PATH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 516;
				this.processInputPath();
				}
				break;
			case NextflowScriptParser.SUB:
			case NextflowScriptParser.STDIN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 517;
				this.processInputStdin();
				}
				break;
			case NextflowScriptParser.TUPLE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 518;
				this.processInputTuple();
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
		this.enterRule(_localctx, 24, NextflowScriptParser.RULE_processInputVal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(NextflowScriptParser.VAL);
			this.state = 522;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 523;
			this.match(NextflowScriptParser.Identifier);
			this.state = 524;
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
		this.enterRule(_localctx, 26, NextflowScriptParser.RULE_processInputEnv);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(NextflowScriptParser.ENV);
			this.state = 527;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 528;
			this.match(NextflowScriptParser.Identifier);
			this.state = 529;
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
		this.enterRule(_localctx, 28, NextflowScriptParser.RULE_processInputFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(NextflowScriptParser.FILE);
			this.state = 532;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 533;
			this.expression(0);
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 534;
				this.match(NextflowScriptParser.COMMA);
				this.state = 535;
				this.match(NextflowScriptParser.Identifier);
				this.state = 536;
				this.match(NextflowScriptParser.COLON);
				this.state = 537;
				this.expression(0);
				}
				}
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 543;
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
		this.enterRule(_localctx, 30, NextflowScriptParser.RULE_processInputPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.match(NextflowScriptParser.PATH);
			this.state = 546;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 547;
			this.expression(0);
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 548;
				this.match(NextflowScriptParser.COMMA);
				this.state = 549;
				this.match(NextflowScriptParser.Identifier);
				this.state = 550;
				this.match(NextflowScriptParser.COLON);
				this.state = 551;
				this.expression(0);
				}
				}
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 557;
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
		this.enterRule(_localctx, 32, NextflowScriptParser.RULE_processInputStdin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
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
	public processInputTuple(): ProcessInputTupleContext {
		let _localctx: ProcessInputTupleContext = new ProcessInputTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, NextflowScriptParser.RULE_processInputTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(NextflowScriptParser.TUPLE);
			this.state = 562;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 563;
			this.processInputType();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 564;
				this.match(NextflowScriptParser.COMMA);
				this.state = 565;
				this.processInputType();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
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
		this.enterRule(_localctx, 36, NextflowScriptParser.RULE_processOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.processOutputType();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 574;
				this.match(NextflowScriptParser.COMMA);
				this.state = 575;
				this.match(NextflowScriptParser.Identifier);
				this.state = 576;
				this.match(NextflowScriptParser.COLON);
				this.state = 577;
				this.expression(0);
				}
				}
				this.state = 582;
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
		this.enterRule(_localctx, 38, NextflowScriptParser.RULE_processOutputType);
		try {
			this.state = 589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.VAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 583;
				this.processOutputVal();
				}
				break;
			case NextflowScriptParser.ENV:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.processOutputEnv();
				}
				break;
			case NextflowScriptParser.FILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 585;
				this.processOutputFile();
				}
				break;
			case NextflowScriptParser.PATH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 586;
				this.processOutputPath();
				}
				break;
			case NextflowScriptParser.SUB:
			case NextflowScriptParser.STDOUT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 587;
				this.processOutputStdout();
				}
				break;
			case NextflowScriptParser.TUPLE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 588;
				this.processOutputTuple();
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
		this.enterRule(_localctx, 40, NextflowScriptParser.RULE_processOutputVal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(NextflowScriptParser.VAL);
			this.state = 592;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 593;
			this.match(NextflowScriptParser.Identifier);
			this.state = 594;
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
		this.enterRule(_localctx, 42, NextflowScriptParser.RULE_processOutputEnv);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(NextflowScriptParser.ENV);
			this.state = 597;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 598;
			this.match(NextflowScriptParser.Identifier);
			this.state = 599;
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
		this.enterRule(_localctx, 44, NextflowScriptParser.RULE_processOutputFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(NextflowScriptParser.FILE);
			this.state = 602;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 603;
			this.expression(0);
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 604;
				this.match(NextflowScriptParser.COMMA);
				this.state = 605;
				this.match(NextflowScriptParser.Identifier);
				this.state = 606;
				this.match(NextflowScriptParser.COLON);
				this.state = 607;
				this.expression(0);
				}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 613;
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
		this.enterRule(_localctx, 46, NextflowScriptParser.RULE_processOutputPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.match(NextflowScriptParser.PATH);
			this.state = 616;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 617;
			this.expression(0);
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 618;
				this.match(NextflowScriptParser.COMMA);
				this.state = 619;
				this.match(NextflowScriptParser.Identifier);
				this.state = 620;
				this.match(NextflowScriptParser.COLON);
				this.state = 621;
				this.expression(0);
				}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
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
		this.enterRule(_localctx, 48, NextflowScriptParser.RULE_processOutputStdout);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
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
	public processOutputTuple(): ProcessOutputTupleContext {
		let _localctx: ProcessOutputTupleContext = new ProcessOutputTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, NextflowScriptParser.RULE_processOutputTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(NextflowScriptParser.TUPLE);
			this.state = 632;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 633;
			this.processOutputType();
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 634;
				this.match(NextflowScriptParser.COMMA);
				this.state = 635;
				this.processOutputType();
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 641;
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
			this.state = 643;
			this.match(NextflowScriptParser.WORKFLOW);
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.Identifier) {
				{
				this.state = 644;
				this.match(NextflowScriptParser.Identifier);
				}
			}

			this.state = 647;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.workflowBody();
				}
				break;

			case 2:
				{
				this.state = 652;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 649;
						this.statement();
						}
						}
					}
					this.state = 654;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				}
				break;
			}
			this.state = 657;
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
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.TAKE_GUARD) {
				{
				this.state = 659;
				this.match(NextflowScriptParser.TAKE_GUARD);
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 660;
					this.match(NextflowScriptParser.Identifier);
					}
					}
					this.state = 663;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === NextflowScriptParser.Identifier);
				}
			}

			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.MAIN_GUARD) {
				{
				this.state = 667;
				this.match(NextflowScriptParser.MAIN_GUARD);
				this.state = 669;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 668;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 671;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
			}

			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.EMIT_GUARD) {
				{
				this.state = 675;
				this.match(NextflowScriptParser.EMIT_GUARD);
				this.state = 677;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 676;
						this.expression(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 679;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, NextflowScriptParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.annotationsOpt();
			this.state = 684;
			this.match(NextflowScriptParser.PACKAGE);
			this.state = 685;
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
		this.enterRule(_localctx, 58, NextflowScriptParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.annotationsOpt();
			this.state = 688;
			this.match(NextflowScriptParser.IMPORT);
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.STATIC) {
				{
				this.state = 689;
				this.match(NextflowScriptParser.STATIC);
				}
			}

			this.state = 692;
			this.qualifiedName();
			this.state = 697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.DOT:
				{
				this.state = 693;
				this.match(NextflowScriptParser.DOT);
				this.state = 694;
				this.match(NextflowScriptParser.MUL);
				}
				break;
			case NextflowScriptParser.AS:
				{
				this.state = 695;
				this.match(NextflowScriptParser.AS);
				this.state = 696;
				_localctx._alias = this.identifier();
				}
				break;
			case NextflowScriptParser.EOF:
			case NextflowScriptParser.SEMI:
			case NextflowScriptParser.NL:
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
		this.enterRule(_localctx, 60, NextflowScriptParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this.classOrInterfaceModifiersOpt();
			this.state = 700;
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
		this.enterRule(_localctx, 62, NextflowScriptParser.RULE_modifier);
		let _la: number;
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
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
				this.state = 703;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === NextflowScriptParser.DEF || _la === NextflowScriptParser.VAR || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (NextflowScriptParser.NATIVE - 36)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 36)) | (1 << (NextflowScriptParser.TRANSIENT - 36)) | (1 << (NextflowScriptParser.VOLATILE - 36)))) !== 0))) {
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
		this.enterRule(_localctx, 64, NextflowScriptParser.RULE_modifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 706;
				this.modifiers();
				this.state = 707;
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
		this.enterRule(_localctx, 66, NextflowScriptParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.modifier();
			this.state = 717;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 712;
					this.nls();
					this.state = 713;
					this.modifier();
					}
					}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
		this.enterRule(_localctx, 68, NextflowScriptParser.RULE_classOrInterfaceModifiersOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 720;
				this.classOrInterfaceModifiers();
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NextflowScriptParser.NL) {
					{
					{
					this.state = 721;
					this.match(NextflowScriptParser.NL);
					}
					}
					this.state = 726;
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
		this.enterRule(_localctx, 70, NextflowScriptParser.RULE_classOrInterfaceModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.classOrInterfaceModifier();
			this.state = 735;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 730;
					this.nls();
					this.state = 731;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 737;
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
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, NextflowScriptParser.RULE_classOrInterfaceModifier);
		let _la: number;
		try {
			this.state = 740;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 738;
				this.annotation();
				}
				break;
			case NextflowScriptParser.ABSTRACT:
			case NextflowScriptParser.DEFAULT:
			case NextflowScriptParser.FINAL:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.STATIC:
			case NextflowScriptParser.STRICTFP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 739;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (NextflowScriptParser.ABSTRACT - 14)) | (1 << (NextflowScriptParser.DEFAULT - 14)) | (1 << (NextflowScriptParser.FINAL - 14)) | (1 << (NextflowScriptParser.PRIVATE - 14)) | (1 << (NextflowScriptParser.PROTECTED - 14)) | (1 << (NextflowScriptParser.PUBLIC - 14)) | (1 << (NextflowScriptParser.STATIC - 14)) | (1 << (NextflowScriptParser.STRICTFP - 14)))) !== 0))) {
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
		this.enterRule(_localctx, 74, NextflowScriptParser.RULE_variableModifier);
		let _la: number;
		try {
			this.state = 744;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 742;
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
				this.state = 743;
				_localctx._m = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (NextflowScriptParser.PRIVATE - 39)) | (1 << (NextflowScriptParser.PROTECTED - 39)) | (1 << (NextflowScriptParser.PUBLIC - 39)) | (1 << (NextflowScriptParser.STATIC - 39)) | (1 << (NextflowScriptParser.STRICTFP - 39)))) !== 0))) {
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
		this.enterRule(_localctx, 76, NextflowScriptParser.RULE_variableModifiersOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 746;
				this.variableModifiers();
				this.state = 747;
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
		this.enterRule(_localctx, 78, NextflowScriptParser.RULE_variableModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.variableModifier();
			this.state = 757;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 752;
					this.nls();
					this.state = 753;
					this.variableModifier();
					}
					}
				}
				this.state = 759;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		this.enterRule(_localctx, 80, NextflowScriptParser.RULE_typeParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(NextflowScriptParser.LT);
			this.state = 761;
			this.nls();
			this.state = 762;
			this.typeParameter();
			this.state = 769;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 763;
					this.match(NextflowScriptParser.COMMA);
					this.state = 764;
					this.nls();
					this.state = 765;
					this.typeParameter();
					}
					}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 772;
			this.nls();
			this.state = 773;
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
		this.enterRule(_localctx, 82, NextflowScriptParser.RULE_typeParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.className();
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 776;
				this.match(NextflowScriptParser.EXTENDS);
				this.state = 777;
				this.nls();
				this.state = 778;
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
		this.enterRule(_localctx, 84, NextflowScriptParser.RULE_typeBound);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.type();
			this.state = 789;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 783;
					this.match(NextflowScriptParser.BITAND);
					this.state = 784;
					this.nls();
					this.state = 785;
					this.type();
					}
					}
				}
				this.state = 791;
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, NextflowScriptParser.RULE_typeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.type();
			this.state = 799;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 793;
					this.match(NextflowScriptParser.COMMA);
					this.state = 794;
					this.nls();
					this.state = 795;
					this.type();
					}
					}
				}
				this.state = 801;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
		this.enterRule(_localctx, 88, NextflowScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.CLASS:
				{
				this.state = 802;
				this.match(NextflowScriptParser.CLASS);
				 _localctx.t =  0; 
				}
				break;
			case NextflowScriptParser.INTERFACE:
				{
				this.state = 804;
				this.match(NextflowScriptParser.INTERFACE);
				 _localctx.t =  1; 
				}
				break;
			case NextflowScriptParser.ENUM:
				{
				this.state = 806;
				this.match(NextflowScriptParser.ENUM);
				 _localctx.t =  2; 
				}
				break;
			case NextflowScriptParser.AT:
				{
				this.state = 808;
				this.match(NextflowScriptParser.AT);
				this.state = 809;
				this.match(NextflowScriptParser.INTERFACE);
				 _localctx.t =  3; 
				}
				break;
			case NextflowScriptParser.TRAIT:
				{
				this.state = 811;
				this.match(NextflowScriptParser.TRAIT);
				 _localctx.t =  4; 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 815;
			this.identifier();
			this.state = 819;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 816;
				this.nls();
				this.state = 817;
				this.typeParameters();
				}
				break;
			}
			this.state = 826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 821;
				this.nls();
				this.state = 822;
				this.match(NextflowScriptParser.EXTENDS);
				this.state = 823;
				this.nls();
				this.state = 824;
				_localctx._scs = this.typeList();
				}
				break;
			}
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 828;
				this.nls();
				this.state = 829;
				this.match(NextflowScriptParser.IMPLEMENTS);
				this.state = 830;
				this.nls();
				this.state = 831;
				_localctx._is = this.typeList();
				}
				break;
			}
			this.state = 835;
			this.nls();
			this.state = 836;
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
		this.enterRule(_localctx, 90, NextflowScriptParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 839;
			this.nls();
			this.state = 851;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 840;
				if (!( 2 == _localctx.t )) {
					throw this.createFailedPredicateException(" 2 == $t ");
				}
				this.state = 841;
				this.enumConstants();
				this.state = 845;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 842;
					this.nls();
					this.state = 843;
					this.match(NextflowScriptParser.COMMA);
					}
					break;
				}
				this.state = 848;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 847;
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
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.StringLiteral) | (1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.CLASS) | (1 << NextflowScriptParser.DEFAULT) | (1 << NextflowScriptParser.ENUM) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (NextflowScriptParser.IMPORT - 33)) | (1 << (NextflowScriptParser.INTERFACE - 33)) | (1 << (NextflowScriptParser.NATIVE - 33)) | (1 << (NextflowScriptParser.PACKAGE - 33)) | (1 << (NextflowScriptParser.PRIVATE - 33)) | (1 << (NextflowScriptParser.PROTECTED - 33)) | (1 << (NextflowScriptParser.PUBLIC - 33)) | (1 << (NextflowScriptParser.STATIC - 33)) | (1 << (NextflowScriptParser.STRICTFP - 33)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 33)) | (1 << (NextflowScriptParser.TRANSIENT - 33)) | (1 << (NextflowScriptParser.VOID - 33)) | (1 << (NextflowScriptParser.VOLATILE - 33)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (NextflowScriptParser.LBRACE - 80)) | (1 << (NextflowScriptParser.LBRACK - 80)) | (1 << (NextflowScriptParser.LT - 80)) | (1 << (NextflowScriptParser.QUESTION - 80)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 122)) | (1 << (NextflowScriptParser.Identifier - 122)) | (1 << (NextflowScriptParser.AT - 122)))) !== 0)) {
				{
				this.state = 853;
				this.classBodyDeclaration(_localctx.t);
				this.state = 859;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 854;
						this.sep();
						this.state = 855;
						this.classBodyDeclaration(_localctx.t);
						}
						}
					}
					this.state = 861;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				}
				}
			}

			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 864;
				this.sep();
				}
			}

			this.state = 867;
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
		this.enterRule(_localctx, 92, NextflowScriptParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.enumConstant();
			this.state = 877;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 870;
					this.nls();
					this.state = 871;
					this.match(NextflowScriptParser.COMMA);
					this.state = 872;
					this.nls();
					this.state = 873;
					this.enumConstant();
					}
					}
				}
				this.state = 879;
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
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, NextflowScriptParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.annotationsOpt();
			this.state = 881;
			this.identifier();
			this.state = 883;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 882;
				this.arguments();
				}
				break;
			}
			this.state = 886;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 885;
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
		this.enterRule(_localctx, 96, NextflowScriptParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowScriptParser.STATIC) {
					{
					this.state = 888;
					this.match(NextflowScriptParser.STATIC);
					this.state = 889;
					this.nls();
					}
				}

				this.state = 892;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 893;
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
		this.enterRule(_localctx, 98, NextflowScriptParser.RULE_memberDeclaration);
		try {
			this.state = 901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 896;
				this.methodDeclaration(0, _localctx.t);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 897;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 898;
				this.modifiersOpt();
				this.state = 899;
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
		this.enterRule(_localctx, 100, NextflowScriptParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			this.modifiersOpt();
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.LT) {
				{
				this.state = 904;
				this.typeParameters();
				}
			}

			this.state = 910;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 907;
				this.returnType(_localctx.ct);
				this.state = 908;
				this.nls();
				}
				break;
			}
			this.state = 912;
			this.methodName();
			this.state = 913;
			this.formalParameters();
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 914;
				this.match(NextflowScriptParser.DEFAULT);
				this.state = 915;
				this.nls();
				this.state = 916;
				this.elementValue();
				}
				break;

			case 2:
				{
				this.state = 923;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
				case 1:
					{
					this.state = 918;
					this.nls();
					this.state = 919;
					this.match(NextflowScriptParser.THROWS);
					this.state = 920;
					this.nls();
					this.state = 921;
					this.qualifiedClassNameList();
					}
					break;
				}
				this.state = 928;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 925;
					this.nls();
					this.state = 926;
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
		this.enterRule(_localctx, 102, NextflowScriptParser.RULE_methodName);
		try {
			this.state = 934;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 932;
				this.identifier();
				}
				break;
			case NextflowScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
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
		this.enterRule(_localctx, 104, NextflowScriptParser.RULE_returnType);
		try {
			this.state = 938;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 936;
				this.standardType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 937;
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
		this.enterRule(_localctx, 106, NextflowScriptParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
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
		this.enterRule(_localctx, 108, NextflowScriptParser.RULE_variableDeclarators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.variableDeclarator();
			this.state = 949;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 943;
					this.match(NextflowScriptParser.COMMA);
					this.state = 944;
					this.nls();
					this.state = 945;
					this.variableDeclarator();
					}
					}
				}
				this.state = 951;
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
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, NextflowScriptParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.variableDeclaratorId();
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 953;
				this.nls();
				this.state = 954;
				this.match(NextflowScriptParser.ASSIGN);
				this.state = 955;
				this.nls();
				this.state = 956;
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
		this.enterRule(_localctx, 112, NextflowScriptParser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
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
		this.enterRule(_localctx, 114, NextflowScriptParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
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
		this.enterRule(_localctx, 116, NextflowScriptParser.RULE_variableInitializers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.variableInitializer();
			this.state = 972;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 965;
					this.nls();
					this.state = 966;
					this.match(NextflowScriptParser.COMMA);
					this.state = 967;
					this.nls();
					this.state = 968;
					this.variableInitializer();
					}
					}
				}
				this.state = 974;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			this.state = 975;
			this.nls();
			this.state = 977;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 976;
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
		this.enterRule(_localctx, 118, NextflowScriptParser.RULE_emptyDims);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 979;
					this.annotationsOpt();
					this.state = 980;
					this.match(NextflowScriptParser.LBRACK);
					this.state = 981;
					this.match(NextflowScriptParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 985;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
		this.enterRule(_localctx, 120, NextflowScriptParser.RULE_emptyDimsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 987;
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
		this.enterRule(_localctx, 122, NextflowScriptParser.RULE_standardType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.annotationsOpt();
			this.state = 993;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.BuiltInPrimitiveType:
				{
				this.state = 991;
				this.primitiveType();
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 992;
				this.standardClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 995;
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
		this.enterRule(_localctx, 124, NextflowScriptParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 997;
			this.annotationsOpt();
			this.state = 1003;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.BuiltInPrimitiveType:
			case NextflowScriptParser.VOID:
				{
				this.state = 1000;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NextflowScriptParser.BuiltInPrimitiveType:
					{
					this.state = 998;
					this.primitiveType();
					}
					break;
				case NextflowScriptParser.VOID:
					{
					this.state = 999;
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
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 1002;
				this.generalClassOrInterfaceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1005;
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
		this.enterRule(_localctx, 126, NextflowScriptParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 1007;
				this.qualifiedClassName();
				}
				break;

			case 2:
				{
				this.state = 1008;
				this.qualifiedStandardClassName();
				}
				break;
			}
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.LT) {
				{
				this.state = 1011;
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
		this.enterRule(_localctx, 128, NextflowScriptParser.RULE_generalClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this.qualifiedClassName();
			this.state = 1016;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 1015;
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
		this.enterRule(_localctx, 130, NextflowScriptParser.RULE_standardClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.qualifiedStandardClassName();
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 1019;
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
		this.enterRule(_localctx, 132, NextflowScriptParser.RULE_primitiveType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
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
		this.enterRule(_localctx, 134, NextflowScriptParser.RULE_typeArguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this.match(NextflowScriptParser.LT);
			this.state = 1025;
			this.nls();
			this.state = 1026;
			this.typeArgument();
			this.state = 1033;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1027;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1028;
					this.nls();
					this.state = 1029;
					this.typeArgument();
					}
					}
				}
				this.state = 1035;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 1036;
			this.nls();
			this.state = 1037;
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
		this.enterRule(_localctx, 136, NextflowScriptParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.annotationsOpt();
				this.state = 1041;
				this.match(NextflowScriptParser.QUESTION);
				this.state = 1046;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 1042;
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
					this.state = 1043;
					this.nls();
					this.state = 1044;
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
		this.enterRule(_localctx, 138, NextflowScriptParser.RULE_annotatedQualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.annotationsOpt();
			this.state = 1051;
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
		this.enterRule(_localctx, 140, NextflowScriptParser.RULE_qualifiedClassNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1053;
			this.annotatedQualifiedClassName();
			this.state = 1060;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1054;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1055;
					this.nls();
					this.state = 1056;
					this.annotatedQualifiedClassName();
					}
					}
				}
				this.state = 1062;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
		this.enterRule(_localctx, 142, NextflowScriptParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (NextflowScriptParser.IMPORT - 33)) | (1 << (NextflowScriptParser.PACKAGE - 33)) | (1 << (NextflowScriptParser.PRIVATE - 33)) | (1 << (NextflowScriptParser.PROTECTED - 33)) | (1 << (NextflowScriptParser.PUBLIC - 33)) | (1 << (NextflowScriptParser.STATIC - 33)) | (1 << (NextflowScriptParser.STRICTFP - 33)) | (1 << (NextflowScriptParser.VOID - 33)))) !== 0) || _la === NextflowScriptParser.LBRACK || _la === NextflowScriptParser.QUESTION || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 122)) | (1 << (NextflowScriptParser.Identifier - 122)) | (1 << (NextflowScriptParser.AT - 122)) | (1 << (NextflowScriptParser.ELLIPSIS - 122)))) !== 0)) {
				{
				this.state = 1064;
				this.formalParameterList();
				}
			}

			this.state = 1067;
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
		this.enterRule(_localctx, 144, NextflowScriptParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1069;
				this.formalParameter();
				}
				break;

			case 2:
				{
				this.state = 1070;
				this.thisFormalParameter();
				}
				break;
			}
			this.state = 1079;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1073;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1074;
					this.nls();
					this.state = 1075;
					this.formalParameter();
					}
					}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
		this.enterRule(_localctx, 146, NextflowScriptParser.RULE_thisFormalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.type();
			this.state = 1083;
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
		this.enterRule(_localctx, 148, NextflowScriptParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this.variableModifiersOpt();
			this.state = 1087;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1086;
				this.type();
				}
				break;
			}
			this.state = 1090;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.ELLIPSIS) {
				{
				this.state = 1089;
				this.match(NextflowScriptParser.ELLIPSIS);
				}
			}

			this.state = 1092;
			this.variableDeclaratorId();
			this.state = 1098;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.nls();
				this.state = 1094;
				this.match(NextflowScriptParser.ASSIGN);
				this.state = 1095;
				this.nls();
				this.state = 1096;
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
		this.enterRule(_localctx, 150, NextflowScriptParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
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
		this.enterRule(_localctx, 152, NextflowScriptParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this.qualifiedNameElement();
			this.state = 1107;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1103;
					this.match(NextflowScriptParser.DOT);
					this.state = 1104;
					this.qualifiedNameElement();
					}
					}
				}
				this.state = 1109;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
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
		this.enterRule(_localctx, 154, NextflowScriptParser.RULE_qualifiedNameElement);
		try {
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1110;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1111;
				this.match(NextflowScriptParser.DEF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1112;
				this.match(NextflowScriptParser.IN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1113;
				this.match(NextflowScriptParser.AS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1114;
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
		this.enterRule(_localctx, 156, NextflowScriptParser.RULE_qualifiedNameElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1117;
					this.qualifiedNameElement();
					this.state = 1118;
					this.match(NextflowScriptParser.DOT);
					}
					}
				}
				this.state = 1124;
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
	public qualifiedClassName(): QualifiedClassNameContext {
		let _localctx: QualifiedClassNameContext = new QualifiedClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, NextflowScriptParser.RULE_qualifiedClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1125;
			this.qualifiedNameElements();
			this.state = 1126;
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
		this.enterRule(_localctx, 160, NextflowScriptParser.RULE_qualifiedStandardClassName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1128;
			this.qualifiedNameElements();
			this.state = 1129;
			this.className();
			this.state = 1134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1130;
					this.match(NextflowScriptParser.DOT);
					this.state = 1131;
					this.className();
					}
					}
				}
				this.state = 1136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
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
		this.enterRule(_localctx, 162, NextflowScriptParser.RULE_literal);
		try {
			this.state = 1142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.IntegerLiteral:
				_localctx = new IntegerLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1137;
				this.match(NextflowScriptParser.IntegerLiteral);
				}
				break;
			case NextflowScriptParser.FloatingPointLiteral:
				_localctx = new FloatingPointLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1138;
				this.match(NextflowScriptParser.FloatingPointLiteral);
				}
				break;
			case NextflowScriptParser.StringLiteral:
				_localctx = new StringLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1139;
				this.stringLiteral();
				}
				break;
			case NextflowScriptParser.BooleanLiteral:
				_localctx = new BooleanLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1140;
				this.match(NextflowScriptParser.BooleanLiteral);
				}
				break;
			case NextflowScriptParser.NullLiteral:
				_localctx = new NullLiteralAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1141;
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
		this.enterRule(_localctx, 164, NextflowScriptParser.RULE_gstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this.match(NextflowScriptParser.GStringBegin);
			this.state = 1145;
			this.gstringValue();
			this.state = 1150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.GStringPart) {
				{
				{
				this.state = 1146;
				this.match(NextflowScriptParser.GStringPart);
				this.state = 1147;
				this.gstringValue();
				}
				}
				this.state = 1152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1153;
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
		this.enterRule(_localctx, 166, NextflowScriptParser.RULE_gstringValue);
		try {
			this.state = 1157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1155;
				this.gstringPath();
				}
				break;
			case NextflowScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1156;
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
		this.enterRule(_localctx, 168, NextflowScriptParser.RULE_gstringPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.identifier();
			this.state = 1163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.GStringPathPart) {
				{
				{
				this.state = 1160;
				this.match(NextflowScriptParser.GStringPathPart);
				}
				}
				this.state = 1165;
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
		this.enterRule(_localctx, 170, NextflowScriptParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.lambdaParameters();
			this.state = 1167;
			this.nls();
			this.state = 1168;
			this.match(NextflowScriptParser.ARROW);
			this.state = 1169;
			this.nls();
			this.state = 1170;
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
		this.enterRule(_localctx, 172, NextflowScriptParser.RULE_standardLambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
			this.standardLambdaParameters();
			this.state = 1173;
			this.nls();
			this.state = 1174;
			this.match(NextflowScriptParser.ARROW);
			this.state = 1175;
			this.nls();
			this.state = 1176;
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
		this.enterRule(_localctx, 174, NextflowScriptParser.RULE_lambdaParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1178;
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
		this.enterRule(_localctx, 176, NextflowScriptParser.RULE_standardLambdaParameters);
		try {
			this.state = 1182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1180;
				this.formalParameters();
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1181;
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
		this.enterRule(_localctx, 178, NextflowScriptParser.RULE_lambdaBody);
		try {
			this.state = 1186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1184;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
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
		this.enterRule(_localctx, 180, NextflowScriptParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1189;
				this.nls();
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.FINAL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (NextflowScriptParser.IMPORT - 33)) | (1 << (NextflowScriptParser.PACKAGE - 33)) | (1 << (NextflowScriptParser.PRIVATE - 33)) | (1 << (NextflowScriptParser.PROTECTED - 33)) | (1 << (NextflowScriptParser.PUBLIC - 33)) | (1 << (NextflowScriptParser.STATIC - 33)) | (1 << (NextflowScriptParser.STRICTFP - 33)) | (1 << (NextflowScriptParser.VOID - 33)))) !== 0) || _la === NextflowScriptParser.LBRACK || _la === NextflowScriptParser.QUESTION || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (NextflowScriptParser.CapitalizedIdentifier - 122)) | (1 << (NextflowScriptParser.Identifier - 122)) | (1 << (NextflowScriptParser.AT - 122)) | (1 << (NextflowScriptParser.ELLIPSIS - 122)))) !== 0)) {
					{
					this.state = 1190;
					this.formalParameterList();
					this.state = 1191;
					this.nls();
					}
				}

				this.state = 1195;
				this.match(NextflowScriptParser.ARROW);
				}
				break;
			}
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1199;
				this.sep();
				}
				break;
			}
			this.state = 1202;
			this.blockStatementsOpt();
			this.state = 1203;
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
		this.enterRule(_localctx, 182, NextflowScriptParser.RULE_closureOrLambdaExpression);
		try {
			this.state = 1207;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1205;
				this.closure();
				}
				break;
			case NextflowScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1206;
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
		this.enterRule(_localctx, 184, NextflowScriptParser.RULE_blockStatementsOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1209;
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
		this.enterRule(_localctx, 186, NextflowScriptParser.RULE_blockStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.blockStatement();
			this.state = 1218;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1213;
					this.sep();
					this.state = 1214;
					this.blockStatement();
					}
					}
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			}
			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1221;
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
		this.enterRule(_localctx, 188, NextflowScriptParser.RULE_annotationsOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.AT) {
				{
				this.state = 1224;
				this.annotation();
				this.state = 1230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1225;
						this.nls();
						this.state = 1226;
						this.annotation();
						}
						}
					}
					this.state = 1232;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				this.state = 1233;
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
		this.enterRule(_localctx, 190, NextflowScriptParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1237;
			this.match(NextflowScriptParser.AT);
			this.state = 1238;
			this.annotationName();
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1239;
				this.nls();
				this.state = 1240;
				this.match(NextflowScriptParser.LPAREN);
				this.state = 1242;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1241;
					this.elementValues();
					}
					break;
				}
				this.state = 1244;
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
		this.enterRule(_localctx, 192, NextflowScriptParser.RULE_elementValues);
		try {
			this.state = 1250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1248;
				this.elementValuePairs();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1249;
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
		this.enterRule(_localctx, 194, NextflowScriptParser.RULE_annotationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
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
		this.enterRule(_localctx, 196, NextflowScriptParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this.elementValuePair();
			this.state = 1259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 1255;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1256;
				this.elementValuePair();
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
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, NextflowScriptParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.elementValuePairName();
			this.state = 1263;
			this.nls();
			this.state = 1264;
			this.match(NextflowScriptParser.ASSIGN);
			this.state = 1265;
			this.nls();
			this.state = 1266;
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
		this.enterRule(_localctx, 200, NextflowScriptParser.RULE_elementValuePairName);
		try {
			this.state = 1270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1268;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1269;
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
		this.enterRule(_localctx, 202, NextflowScriptParser.RULE_elementValue);
		try {
			this.state = 1275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1272;
				this.elementValueArrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1273;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1274;
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
		this.enterRule(_localctx, 204, NextflowScriptParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1278;
				this.elementValue();
				this.state = 1283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1279;
						this.match(NextflowScriptParser.COMMA);
						this.state = 1280;
						this.elementValue();
						}
						}
					}
					this.state = 1285;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				}
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowScriptParser.COMMA) {
					{
					this.state = 1286;
					this.match(NextflowScriptParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 1291;
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
		this.enterRule(_localctx, 206, NextflowScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1293;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1294;
				this.sep();
				}
				break;
			}
			this.state = 1297;
			this.blockStatementsOpt();
			this.state = 1298;
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
		this.enterRule(_localctx, 208, NextflowScriptParser.RULE_blockStatement);
		try {
			this.state = 1302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1300;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1301;
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
		this.enterRule(_localctx, 210, NextflowScriptParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			if (!( !GroovyParser.isInvalidLocalVariableDeclaration(this._input) )) {
				throw this.createFailedPredicateException(" !GroovyParser.isInvalidLocalVariableDeclaration(this._input) ");
			}
			this.state = 1305;
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
		this.enterRule(_localctx, 212, NextflowScriptParser.RULE_variableDeclaration);
		try {
			this.state = 1324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1307;
				this.modifiers();
				this.state = 1308;
				this.nls();
				this.state = 1319;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NextflowScriptParser.AS:
				case NextflowScriptParser.DEF:
				case NextflowScriptParser.IN:
				case NextflowScriptParser.TRAIT:
				case NextflowScriptParser.VAR:
				case NextflowScriptParser.BuiltInPrimitiveType:
				case NextflowScriptParser.IMPORT:
				case NextflowScriptParser.PACKAGE:
				case NextflowScriptParser.VOID:
				case NextflowScriptParser.LBRACK:
				case NextflowScriptParser.QUESTION:
				case NextflowScriptParser.CapitalizedIdentifier:
				case NextflowScriptParser.Identifier:
				case NextflowScriptParser.AT:
					{
					this.state = 1310;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
					case 1:
						{
						this.state = 1309;
						this.type();
						}
						break;
					}
					this.state = 1312;
					this.variableDeclarators();
					}
					break;
				case NextflowScriptParser.LPAREN:
					{
					this.state = 1313;
					this.typeNamePairs();
					this.state = 1314;
					this.nls();
					this.state = 1315;
					this.match(NextflowScriptParser.ASSIGN);
					this.state = 1316;
					this.nls();
					this.state = 1317;
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
				this.state = 1321;
				this.type();
				this.state = 1322;
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
		this.enterRule(_localctx, 214, NextflowScriptParser.RULE_typeNamePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1327;
			this.typeNamePair();
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 1328;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1329;
				this.typeNamePair();
				}
				}
				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1335;
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
		this.enterRule(_localctx, 216, NextflowScriptParser.RULE_typeNamePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1337;
				this.type();
				}
				break;
			}
			this.state = 1340;
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
		this.enterRule(_localctx, 218, NextflowScriptParser.RULE_variableNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1343;
			this.variableDeclaratorId();
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1344;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1345;
				this.variableDeclaratorId();
				}
				}
				this.state = 1348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === NextflowScriptParser.COMMA);
			this.state = 1350;
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
		this.enterRule(_localctx, 220, NextflowScriptParser.RULE_conditionalStatement);
		try {
			this.state = 1354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1352;
				this.ifElseStatement();
				}
				break;
			case NextflowScriptParser.SWITCH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1353;
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
		this.enterRule(_localctx, 222, NextflowScriptParser.RULE_ifElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.match(NextflowScriptParser.IF);
			this.state = 1357;
			this.expressionInPar();
			this.state = 1358;
			this.nls();
			this.state = 1359;
			_localctx._tb = this.statement();
			this.state = 1368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
				case 1:
					{
					this.state = 1360;
					this.nls();
					}
					break;

				case 2:
					{
					this.state = 1361;
					this.sep();
					}
					break;
				}
				this.state = 1364;
				this.match(NextflowScriptParser.ELSE);
				this.state = 1365;
				this.nls();
				this.state = 1366;
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
		this.enterRule(_localctx, 224, NextflowScriptParser.RULE_switchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1370;
			this.match(NextflowScriptParser.SWITCH);
			this.state = 1371;
			this.expressionInPar();
			this.state = 1372;
			this.nls();
			this.state = 1373;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1374;
			this.nls();
			this.state = 1382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.CASE || _la === NextflowScriptParser.DEFAULT) {
				{
				this.state = 1376;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1375;
						this.switchBlockStatementGroup();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1378;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1380;
				this.nls();
				}
			}

			this.state = 1384;
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
		this.enterRule(_localctx, 226, NextflowScriptParser.RULE_loopStatement);
		try {
			this.state = 1405;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.FOR:
				_localctx = new ForStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1386;
				this.match(NextflowScriptParser.FOR);
				this.state = 1387;
				this.match(NextflowScriptParser.LPAREN);
				this.state = 1388;
				this.forControl();
				this.state = 1389;
				this.rparen();
				this.state = 1390;
				this.nls();
				this.state = 1391;
				this.statement();
				}
				break;
			case NextflowScriptParser.WHILE:
				_localctx = new WhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1393;
				this.match(NextflowScriptParser.WHILE);
				this.state = 1394;
				this.expressionInPar();
				this.state = 1395;
				this.nls();
				this.state = 1396;
				this.statement();
				}
				break;
			case NextflowScriptParser.DO:
				_localctx = new DoWhileStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1398;
				this.match(NextflowScriptParser.DO);
				this.state = 1399;
				this.nls();
				this.state = 1400;
				this.statement();
				this.state = 1401;
				this.nls();
				this.state = 1402;
				this.match(NextflowScriptParser.WHILE);
				this.state = 1403;
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
		this.enterRule(_localctx, 228, NextflowScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1407;
			this.match(NextflowScriptParser.CONTINUE);
			this.state = 1409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1408;
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
		this.enterRule(_localctx, 230, NextflowScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1411;
			this.match(NextflowScriptParser.BREAK);
			this.state = 1413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1412;
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
		this.enterRule(_localctx, 232, NextflowScriptParser.RULE_tryCatchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1415;
			this.match(NextflowScriptParser.TRY);
			this.state = 1417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1416;
				this.resources();
				}
				break;
			}
			this.state = 1419;
			this.nls();
			this.state = 1420;
			this.block();
			this.state = 1426;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1421;
					this.nls();
					this.state = 1422;
					this.catchClause();
					}
					}
				}
				this.state = 1428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			}
			this.state = 1432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1429;
				this.nls();
				this.state = 1430;
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
		this.enterRule(_localctx, 234, NextflowScriptParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			this.match(NextflowScriptParser.ASSERT);
			this.state = 1435;
			_localctx._ce = this.expression(0);
			this.state = 1441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1436;
				this.nls();
				this.state = 1437;
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
				this.state = 1438;
				this.nls();
				this.state = 1439;
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
		this.enterRule(_localctx, 236, NextflowScriptParser.RULE_statement);
		try {
			this.state = 1469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				_localctx = new BlockStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1443;
				this.block();
				}
				break;

			case 2:
				_localctx = new ConditionalStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1444;
				this.conditionalStatement();
				}
				break;

			case 3:
				_localctx = new LoopStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1445;
				this.loopStatement();
				}
				break;

			case 4:
				_localctx = new TryCatchStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1446;
				this.tryCatchStatement();
				}
				break;

			case 5:
				_localctx = new SynchronizedStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1447;
				this.match(NextflowScriptParser.SYNCHRONIZED);
				this.state = 1448;
				this.expressionInPar();
				this.state = 1449;
				this.nls();
				this.state = 1450;
				this.block();
				}
				break;

			case 6:
				_localctx = new ReturnStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1452;
				this.match(NextflowScriptParser.RETURN);
				this.state = 1454;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1453;
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
				this.state = 1456;
				this.match(NextflowScriptParser.THROW);
				this.state = 1457;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new BreakStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1458;
				this.breakStatement();
				}
				break;

			case 9:
				_localctx = new ContinueStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1459;
				this.continueStatement();
				}
				break;

			case 10:
				_localctx = new LabeledStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1460;
				this.identifier();
				this.state = 1461;
				this.match(NextflowScriptParser.COLON);
				this.state = 1462;
				this.nls();
				this.state = 1463;
				this.statement();
				}
				break;

			case 11:
				_localctx = new AssertStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1465;
				this.assertStatement();
				}
				break;

			case 12:
				_localctx = new LocalVariableDeclarationStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1466;
				this.localVariableDeclaration();
				}
				break;

			case 13:
				_localctx = new ExpressionStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1467;
				this.statementExpression();
				}
				break;

			case 14:
				_localctx = new EmptyStmtAltContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1468;
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
		this.enterRule(_localctx, 238, NextflowScriptParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1471;
			this.match(NextflowScriptParser.CATCH);
			this.state = 1472;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1473;
			this.variableModifiersOpt();
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1474;
				this.catchType();
				}
				break;
			}
			this.state = 1477;
			this.identifier();
			this.state = 1478;
			this.rparen();
			this.state = 1479;
			this.nls();
			this.state = 1480;
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
		this.enterRule(_localctx, 240, NextflowScriptParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.qualifiedClassName();
			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.BITOR) {
				{
				{
				this.state = 1483;
				this.match(NextflowScriptParser.BITOR);
				this.state = 1484;
				this.qualifiedClassName();
				}
				}
				this.state = 1489;
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
		this.enterRule(_localctx, 242, NextflowScriptParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1490;
			this.match(NextflowScriptParser.FINALLY);
			this.state = 1491;
			this.nls();
			this.state = 1492;
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
		this.enterRule(_localctx, 244, NextflowScriptParser.RULE_resources);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1494;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1495;
			this.nls();
			this.state = 1496;
			this.resourceList();
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.SEMI || _la === NextflowScriptParser.NL) {
				{
				this.state = 1497;
				this.sep();
				}
			}

			this.state = 1500;
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
		this.enterRule(_localctx, 246, NextflowScriptParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1502;
			this.resource();
			this.state = 1508;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1503;
					this.sep();
					this.state = 1504;
					this.resource();
					}
					}
				}
				this.state = 1510;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
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
		this.enterRule(_localctx, 248, NextflowScriptParser.RULE_resource);
		try {
			this.state = 1513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1511;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1512;
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
		this.enterRule(_localctx, 250, NextflowScriptParser.RULE_switchBlockStatementGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			this.switchLabel();
			this.state = 1521;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1516;
					this.nls();
					this.state = 1517;
					this.switchLabel();
					}
					}
				}
				this.state = 1523;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			}
			this.state = 1524;
			this.nls();
			this.state = 1525;
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
		this.enterRule(_localctx, 252, NextflowScriptParser.RULE_switchLabel);
		try {
			this.state = 1533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1527;
				this.match(NextflowScriptParser.CASE);
				this.state = 1528;
				this.expression(0);
				this.state = 1529;
				this.match(NextflowScriptParser.COLON);
				}
				break;
			case NextflowScriptParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1531;
				this.match(NextflowScriptParser.DEFAULT);
				this.state = 1532;
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
		this.enterRule(_localctx, 254, NextflowScriptParser.RULE_forControl);
		try {
			this.state = 1537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1535;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1536;
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
		this.enterRule(_localctx, 256, NextflowScriptParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1539;
			this.variableModifiersOpt();
			this.state = 1541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1540;
				this.type();
				}
				break;
			}
			this.state = 1543;
			this.variableDeclaratorId();
			this.state = 1544;
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
			this.state = 1545;
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
		this.enterRule(_localctx, 258, NextflowScriptParser.RULE_classicalForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1547;
				this.forInit();
				}
				break;
			}
			this.state = 1550;
			this.match(NextflowScriptParser.SEMI);
			this.state = 1552;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1551;
				this.expression(0);
				}
				break;
			}
			this.state = 1554;
			this.match(NextflowScriptParser.SEMI);
			this.state = 1556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1555;
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
		this.enterRule(_localctx, 260, NextflowScriptParser.RULE_forInit);
		try {
			this.state = 1560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1558;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1559;
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
		this.enterRule(_localctx, 262, NextflowScriptParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
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
		this.enterRule(_localctx, 264, NextflowScriptParser.RULE_castParExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1564;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1565;
			this.type();
			this.state = 1566;
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
		this.enterRule(_localctx, 266, NextflowScriptParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
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
		this.enterRule(_localctx, 268, NextflowScriptParser.RULE_expressionInPar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 1571;
			this.enhancedStatementExpression();
			this.state = 1572;
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
		this.enterRule(_localctx, 270, NextflowScriptParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1574;
			this.expressionListElement(_localctx.canSpread);
			this.state = 1579;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1575;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1576;
					this.expressionListElement(_localctx.canSpread);
					}
					}
				}
				this.state = 1581;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
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
		this.enterRule(_localctx, 272, NextflowScriptParser.RULE_expressionListElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				{
				this.state = 1582;
				this.match(NextflowScriptParser.MUL);
				}
				break;
			}
			this.state = 1585;
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
		this.enterRule(_localctx, 274, NextflowScriptParser.RULE_enhancedStatementExpression);
		try {
			this.state = 1589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1587;
				this.statementExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1588;
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
		this.enterRule(_localctx, 276, NextflowScriptParser.RULE_statementExpression);
		try {
			_localctx = new CommandExprAltContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
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
		this.enterRule(_localctx, 278, NextflowScriptParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1593;
			this.pathExpression();
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1594;
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
		let _startState: number = 280;
		this.enterRecursionRule(_localctx, 280, NextflowScriptParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				{
				_localctx = new CastExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1598;
				this.castParExpression();
				this.state = 1599;
				this.castOperandExpression();
				}
				break;

			case 2:
				{
				_localctx = new PostfixExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1601;
				this.postfixExpression();
				}
				break;

			case 3:
				{
				_localctx = new UnaryNotExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1602;
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
				this.state = 1603;
				this.nls();
				this.state = 1604;
				this.expression(18);
				}
				break;

			case 4:
				{
				_localctx = new UnaryAddExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1606;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (NextflowScriptParser.INC - 100)) | (1 << (NextflowScriptParser.DEC - 100)) | (1 << (NextflowScriptParser.ADD - 100)) | (1 << (NextflowScriptParser.SUB - 100)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1607;
				this.expression(16);
				}
				break;

			case 5:
				{
				_localctx = new MultipleAssignmentExprAltContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1608;
				(_localctx as MultipleAssignmentExprAltContext)._left = this.variableNames();
				this.state = 1609;
				this.nls();
				this.state = 1610;
				(_localctx as MultipleAssignmentExprAltContext)._op = this.match(NextflowScriptParser.ASSIGN);
				this.state = 1611;
				this.nls();
				this.state = 1612;
				(_localctx as MultipleAssignmentExprAltContext)._right = this.statementExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1726;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1724;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1616;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1617;
						(_localctx as PowerExprAltContext)._op = this.match(NextflowScriptParser.POWER);
						this.state = 1618;
						this.nls();
						this.state = 1619;
						(_localctx as PowerExprAltContext)._right = this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1621;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1622;
						this.nls();
						this.state = 1623;
						(_localctx as MultiplicativeExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (NextflowScriptParser.MUL - 104)) | (1 << (NextflowScriptParser.DIV - 104)) | (1 << (NextflowScriptParser.MOD - 104)))) !== 0))) {
							(_localctx as MultiplicativeExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1624;
						this.nls();
						this.state = 1625;
						(_localctx as MultiplicativeExprAltContext)._right = this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1627;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1628;
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
						this.state = 1629;
						this.nls();
						this.state = 1630;
						(_localctx as AdditiveExprAltContext)._right = this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new ShiftExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ShiftExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1632;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1633;
						this.nls();
						this.state = 1644;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowScriptParser.GT:
						case NextflowScriptParser.LT:
							{
							this.state = 1641;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
							case 1:
								{
								this.state = 1634;
								(_localctx as ShiftExprAltContext)._dlOp = this.match(NextflowScriptParser.LT);
								this.state = 1635;
								this.match(NextflowScriptParser.LT);
								}
								break;

							case 2:
								{
								this.state = 1636;
								(_localctx as ShiftExprAltContext)._tgOp = this.match(NextflowScriptParser.GT);
								this.state = 1637;
								this.match(NextflowScriptParser.GT);
								this.state = 1638;
								this.match(NextflowScriptParser.GT);
								}
								break;

							case 3:
								{
								this.state = 1639;
								(_localctx as ShiftExprAltContext)._dgOp = this.match(NextflowScriptParser.GT);
								this.state = 1640;
								this.match(NextflowScriptParser.GT);
								}
								break;
							}
							}
							break;
						case NextflowScriptParser.RANGE_INCLUSIVE:
						case NextflowScriptParser.RANGE_EXCLUSIVE:
							{
							this.state = 1643;
							(_localctx as ShiftExprAltContext)._rangeOp = this._input.LT(1);
							_la = this._input.LA(1);
							if (!(_la === NextflowScriptParser.RANGE_INCLUSIVE || _la === NextflowScriptParser.RANGE_EXCLUSIVE)) {
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
						this.state = 1646;
						this.nls();
						this.state = 1647;
						(_localctx as ShiftExprAltContext)._right = this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1649;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1650;
						this.nls();
						this.state = 1651;
						(_localctx as RelationalExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.IN || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (NextflowScriptParser.NOT_IN - 77)) | (1 << (NextflowScriptParser.GT - 77)) | (1 << (NextflowScriptParser.LT - 77)) | (1 << (NextflowScriptParser.LE - 77)) | (1 << (NextflowScriptParser.GE - 77)))) !== 0))) {
							(_localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1652;
						this.nls();
						this.state = 1653;
						(_localctx as RelationalExprAltContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1655;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1656;
						this.nls();
						this.state = 1657;
						(_localctx as EqualityExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (NextflowScriptParser.SPACESHIP - 72)) | (1 << (NextflowScriptParser.IDENTICAL - 72)) | (1 << (NextflowScriptParser.NOT_IDENTICAL - 72)) | (1 << (NextflowScriptParser.EQUAL - 72)) | (1 << (NextflowScriptParser.NOTEQUAL - 72)))) !== 0))) {
							(_localctx as EqualityExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1658;
						this.nls();
						this.state = 1659;
						(_localctx as EqualityExprAltContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new RegexExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RegexExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1661;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1662;
						this.nls();
						this.state = 1663;
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
						this.state = 1664;
						this.nls();
						this.state = 1665;
						(_localctx as RegexExprAltContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new AndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1667;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1668;
						this.nls();
						this.state = 1669;
						(_localctx as AndExprAltContext)._op = this.match(NextflowScriptParser.BITAND);
						this.state = 1670;
						this.nls();
						this.state = 1671;
						(_localctx as AndExprAltContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new ExclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1673;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1674;
						this.nls();
						this.state = 1675;
						(_localctx as ExclusiveOrExprAltContext)._op = this.match(NextflowScriptParser.XOR);
						this.state = 1676;
						this.nls();
						this.state = 1677;
						(_localctx as ExclusiveOrExprAltContext)._right = this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new InclusiveOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InclusiveOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1679;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1680;
						this.nls();
						this.state = 1681;
						(_localctx as InclusiveOrExprAltContext)._op = this.match(NextflowScriptParser.BITOR);
						this.state = 1682;
						this.nls();
						this.state = 1683;
						(_localctx as InclusiveOrExprAltContext)._right = this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1685;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1686;
						this.nls();
						this.state = 1687;
						(_localctx as LogicalAndExprAltContext)._op = this.match(NextflowScriptParser.AND);
						this.state = 1688;
						this.nls();
						this.state = 1689;
						(_localctx as LogicalAndExprAltContext)._right = this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1691;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1692;
						this.nls();
						this.state = 1693;
						(_localctx as LogicalOrExprAltContext)._op = this.match(NextflowScriptParser.OR);
						this.state = 1694;
						this.nls();
						this.state = 1695;
						(_localctx as LogicalOrExprAltContext)._right = this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ConditionalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConditionalExprAltContext)._con = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1697;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1698;
						this.nls();
						this.state = 1708;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowScriptParser.QUESTION:
							{
							this.state = 1699;
							this.match(NextflowScriptParser.QUESTION);
							this.state = 1700;
							this.nls();
							this.state = 1701;
							(_localctx as ConditionalExprAltContext)._tb = this.expression(0);
							this.state = 1702;
							this.nls();
							this.state = 1703;
							this.match(NextflowScriptParser.COLON);
							this.state = 1704;
							this.nls();
							}
							break;
						case NextflowScriptParser.ELVIS:
							{
							this.state = 1706;
							this.match(NextflowScriptParser.ELVIS);
							this.state = 1707;
							this.nls();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1710;
						(_localctx as ConditionalExprAltContext)._fb = this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new RelationalExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1712;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1713;
						this.nls();
						this.state = 1714;
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
						this.state = 1715;
						this.nls();
						this.state = 1716;
						this.type();
						}
						break;

					case 15:
						{
						_localctx = new AssignmentExprAltContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignmentExprAltContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, NextflowScriptParser.RULE_expression);
						this.state = 1718;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1719;
						this.nls();
						this.state = 1720;
						(_localctx as AssignmentExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NextflowScriptParser.POWER_ASSIGN || _la === NextflowScriptParser.ASSIGN || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (NextflowScriptParser.ADD_ASSIGN - 110)) | (1 << (NextflowScriptParser.SUB_ASSIGN - 110)) | (1 << (NextflowScriptParser.MUL_ASSIGN - 110)) | (1 << (NextflowScriptParser.DIV_ASSIGN - 110)) | (1 << (NextflowScriptParser.AND_ASSIGN - 110)) | (1 << (NextflowScriptParser.OR_ASSIGN - 110)) | (1 << (NextflowScriptParser.XOR_ASSIGN - 110)) | (1 << (NextflowScriptParser.MOD_ASSIGN - 110)) | (1 << (NextflowScriptParser.LSHIFT_ASSIGN - 110)) | (1 << (NextflowScriptParser.RSHIFT_ASSIGN - 110)) | (1 << (NextflowScriptParser.URSHIFT_ASSIGN - 110)) | (1 << (NextflowScriptParser.ELVIS_ASSIGN - 110)))) !== 0))) {
							(_localctx as AssignmentExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1721;
						this.nls();
						this.state = 1722;
						(_localctx as AssignmentExprAltContext)._right = this.enhancedStatementExpression();
						}
						break;
					}
					}
				}
				this.state = 1728;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
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
		this.enterRule(_localctx, 282, NextflowScriptParser.RULE_castOperandExpression);
		let _la: number;
		try {
			this.state = 1739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				_localctx = new CastExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1729;
				this.castParExpression();
				this.state = 1730;
				this.castOperandExpression();
				}
				break;

			case 2:
				_localctx = new PostfixExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1732;
				this.postfixExpression();
				}
				break;

			case 3:
				_localctx = new UnaryNotExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1733;
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
				this.state = 1734;
				this.nls();
				this.state = 1735;
				this.castOperandExpression();
				}
				break;

			case 4:
				_localctx = new UnaryAddExprAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1737;
				(_localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (NextflowScriptParser.INC - 100)) | (1 << (NextflowScriptParser.DEC - 100)) | (1 << (NextflowScriptParser.ADD - 100)) | (1 << (NextflowScriptParser.SUB - 100)))) !== 0))) {
					(_localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1738;
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
		this.enterRule(_localctx, 284, NextflowScriptParser.RULE_commandExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1741;
			_localctx._expression = this.expression(0);
			this.state = 1745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1742;
				if (!( !GroovyParser.isFollowingArgumentsOrClosure(_localctx._expression) )) {
					throw this.createFailedPredicateException(" !GroovyParser.isFollowingArgumentsOrClosure($expression.ctx) ");
				}
				this.state = 1743;
				this.argumentList();
				}
				break;

			case 2:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 1750;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1747;
					this.commandArgument();
					}
					}
				}
				this.state = 1752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
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
		this.enterRule(_localctx, 286, NextflowScriptParser.RULE_commandArgument);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			this.commandPrimary();
			this.state = 1760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1755;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1754;
						this.pathElement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1757;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				{
				this.state = 1759;
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
		this.enterRule(_localctx, 288, NextflowScriptParser.RULE_pathExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1762;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1763;
				if (!( this._input.LT(2).type == GroovyParser.DOT )) {
					throw this.createFailedPredicateException(" this._input.LT(2).type == GroovyParser.DOT ");
				}
				this.state = 1764;
				this.match(NextflowScriptParser.STATIC);
				}
				break;
			}
			this.state = 1772;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1767;
					_localctx._pathElement = this.pathElement();
					 _localctx.t =  _localctx._pathElement.t; 
					}
					}
				}
				this.state = 1774;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
		this.enterRule(_localctx, 290, NextflowScriptParser.RULE_pathElement);
		let _la: number;
		try {
			this.state = 1811;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1775;
				this.nls();
				this.state = 1800;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1776;
					this.match(NextflowScriptParser.DOT);
					this.state = 1777;
					this.nls();
					this.state = 1778;
					this.match(NextflowScriptParser.NEW);
					this.state = 1779;
					this.creator(1);
					 _localctx.t =  6; 
					}
					break;

				case 2:
					{
					this.state = 1792;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case NextflowScriptParser.SPREAD_DOT:
					case NextflowScriptParser.SAFE_DOT:
					case NextflowScriptParser.SAFE_CHAIN_DOT:
					case NextflowScriptParser.DOT:
						{
						this.state = 1782;
						_la = this._input.LA(1);
						if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (NextflowScriptParser.SPREAD_DOT - 62)) | (1 << (NextflowScriptParser.SAFE_DOT - 62)) | (1 << (NextflowScriptParser.SAFE_CHAIN_DOT - 62)) | (1 << (NextflowScriptParser.DOT - 62)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1783;
						this.nls();
						this.state = 1786;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case NextflowScriptParser.AT:
							{
							this.state = 1784;
							this.match(NextflowScriptParser.AT);
							}
							break;
						case NextflowScriptParser.LT:
							{
							this.state = 1785;
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
						case NextflowScriptParser.PACKAGE:
						case NextflowScriptParser.PRIVATE:
						case NextflowScriptParser.PROTECTED:
						case NextflowScriptParser.PUBLIC:
						case NextflowScriptParser.RETURN:
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
						this.state = 1788;
						this.match(NextflowScriptParser.METHOD_POINTER);
						this.state = 1789;
						this.nls();
						}
						break;
					case NextflowScriptParser.METHOD_REFERENCE:
						{
						this.state = 1790;
						this.match(NextflowScriptParser.METHOD_REFERENCE);
						this.state = 1791;
						this.nls();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1794;
					this.namePart();
					 _localctx.t =  1; 
					}
					break;

				case 3:
					{
					this.state = 1797;
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
				this.state = 1802;
				this.arguments();
				 _localctx.t =  2; 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1805;
				this.indexPropertyArgs();
				 _localctx.t =  4; 
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1808;
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
		this.enterRule(_localctx, 292, NextflowScriptParser.RULE_namePart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1813;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 1814;
				this.stringLiteral();
				}
				break;

			case 3:
				{
				this.state = 1815;
				this.dynamicMemberName();
				}
				break;

			case 4:
				{
				this.state = 1816;
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
		this.enterRule(_localctx, 294, NextflowScriptParser.RULE_dynamicMemberName);
		try {
			this.state = 1821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1819;
				this.parExpression();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1820;
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
		this.enterRule(_localctx, 296, NextflowScriptParser.RULE_indexPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.QUESTION) {
				{
				this.state = 1823;
				this.match(NextflowScriptParser.QUESTION);
				}
			}

			this.state = 1826;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1827;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1830;
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
		this.enterRule(_localctx, 298, NextflowScriptParser.RULE_namedPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.QUESTION) {
				{
				this.state = 1832;
				this.match(NextflowScriptParser.QUESTION);
				}
			}

			this.state = 1835;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1838;
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
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RETURN:
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
			case NextflowScriptParser.LBRACK:
			case NextflowScriptParser.MUL:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 1836;
				this.namedPropertyArgList();
				}
				break;
			case NextflowScriptParser.COLON:
				{
				this.state = 1837;
				this.match(NextflowScriptParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1840;
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
		this.enterRule(_localctx, 300, NextflowScriptParser.RULE_primary);
		try {
			this.state = 1859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1842;
				this.identifier();
				this.state = 1844;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					this.state = 1843;
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
				this.state = 1846;
				this.literal();
				}
				break;

			case 3:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1847;
				this.gstring();
				}
				break;

			case 4:
				_localctx = new NewPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1848;
				this.match(NextflowScriptParser.NEW);
				this.state = 1849;
				this.nls();
				this.state = 1850;
				this.creator(0);
				}
				break;

			case 5:
				_localctx = new ThisPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1852;
				this.match(NextflowScriptParser.THIS);
				}
				break;

			case 6:
				_localctx = new SuperPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1853;
				this.match(NextflowScriptParser.SUPER);
				}
				break;

			case 7:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1854;
				this.parExpression();
				}
				break;

			case 8:
				_localctx = new ClosureOrLambdaExpressionPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1855;
				this.closureOrLambdaExpression();
				}
				break;

			case 9:
				_localctx = new ListPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1856;
				this.list();
				}
				break;

			case 10:
				_localctx = new MapPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1857;
				this.map();
				}
				break;

			case 11:
				_localctx = new BuiltInTypePrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1858;
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
		this.enterRule(_localctx, 302, NextflowScriptParser.RULE_namedPropertyArgPrimary);
		try {
			this.state = 1867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1861;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new LiteralPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1862;
				this.literal();
				}
				break;

			case 3:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1863;
				this.gstring();
				}
				break;

			case 4:
				_localctx = new ParenPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1864;
				this.parExpression();
				}
				break;

			case 5:
				_localctx = new ListPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1865;
				this.list();
				}
				break;

			case 6:
				_localctx = new MapPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1866;
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
		this.enterRule(_localctx, 304, NextflowScriptParser.RULE_namedArgPrimary);
		try {
			this.state = 1872;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1869;
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
				this.state = 1870;
				this.literal();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1871;
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
		this.enterRule(_localctx, 306, NextflowScriptParser.RULE_commandPrimary);
		try {
			this.state = 1877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.AS:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				_localctx = new IdentifierPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1874;
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
				this.state = 1875;
				this.literal();
				}
				break;
			case NextflowScriptParser.GStringBegin:
				_localctx = new GstringPrmrAltContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1876;
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
		this.enterRule(_localctx, 308, NextflowScriptParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1879;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1881;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1880;
				this.expressionList(true);
				}
				break;
			}
			this.state = 1884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.COMMA) {
				{
				this.state = 1883;
				this.match(NextflowScriptParser.COMMA);
				}
			}

			this.state = 1886;
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
		this.enterRule(_localctx, 310, NextflowScriptParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1888;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1894;
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
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RETURN:
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
				this.state = 1889;
				this.mapEntryList();
				this.state = 1891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NextflowScriptParser.COMMA) {
					{
					this.state = 1890;
					this.match(NextflowScriptParser.COMMA);
					}
				}

				}
				break;
			case NextflowScriptParser.COLON:
				{
				this.state = 1893;
				this.match(NextflowScriptParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1896;
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
		this.enterRule(_localctx, 312, NextflowScriptParser.RULE_mapEntryList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1898;
			this.mapEntry();
			this.state = 1903;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1899;
					this.match(NextflowScriptParser.COMMA);
					this.state = 1900;
					this.mapEntry();
					}
					}
				}
				this.state = 1905;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
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
		this.enterRule(_localctx, 314, NextflowScriptParser.RULE_namedPropertyArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1906;
			this.namedPropertyArg();
			this.state = 1911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 1907;
				this.match(NextflowScriptParser.COMMA);
				this.state = 1908;
				this.namedPropertyArg();
				}
				}
				this.state = 1913;
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
		this.enterRule(_localctx, 316, NextflowScriptParser.RULE_mapEntry);
		try {
			this.state = 1924;
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
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RETURN:
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
				this.state = 1914;
				this.mapEntryLabel();
				this.state = 1915;
				this.match(NextflowScriptParser.COLON);
				this.state = 1916;
				this.nls();
				this.state = 1917;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1919;
				this.match(NextflowScriptParser.MUL);
				this.state = 1920;
				this.match(NextflowScriptParser.COLON);
				this.state = 1921;
				this.nls();
				this.state = 1922;
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
		this.enterRule(_localctx, 318, NextflowScriptParser.RULE_namedPropertyArg);
		try {
			this.state = 1936;
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
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RETURN:
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
			case NextflowScriptParser.LBRACK:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1926;
				this.namedPropertyArgLabel();
				this.state = 1927;
				this.match(NextflowScriptParser.COLON);
				this.state = 1928;
				this.nls();
				this.state = 1929;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1931;
				this.match(NextflowScriptParser.MUL);
				this.state = 1932;
				this.match(NextflowScriptParser.COLON);
				this.state = 1933;
				this.nls();
				this.state = 1934;
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
		this.enterRule(_localctx, 320, NextflowScriptParser.RULE_namedArg);
		try {
			this.state = 1948;
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
			case NextflowScriptParser.PACKAGE:
			case NextflowScriptParser.PRIVATE:
			case NextflowScriptParser.PROTECTED:
			case NextflowScriptParser.PUBLIC:
			case NextflowScriptParser.RETURN:
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
				this.state = 1938;
				this.namedArgLabel();
				this.state = 1939;
				this.match(NextflowScriptParser.COLON);
				this.state = 1940;
				this.nls();
				this.state = 1941;
				this.expression(0);
				}
				break;
			case NextflowScriptParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1943;
				this.match(NextflowScriptParser.MUL);
				this.state = 1944;
				this.match(NextflowScriptParser.COLON);
				this.state = 1945;
				this.nls();
				this.state = 1946;
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
		this.enterRule(_localctx, 322, NextflowScriptParser.RULE_mapEntryLabel);
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1950;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
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
		this.enterRule(_localctx, 324, NextflowScriptParser.RULE_namedPropertyArgLabel);
		try {
			this.state = 1956;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1954;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1955;
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
		this.enterRule(_localctx, 326, NextflowScriptParser.RULE_namedArgLabel);
		try {
			this.state = 1960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1958;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1959;
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
		this.enterRule(_localctx, 328, NextflowScriptParser.RULE_creator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1962;
			this.createdName();
			this.state = 1978;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				this.state = 1963;
				this.nls();
				this.state = 1964;
				this.arguments();
				this.state = 1966;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
				case 1:
					{
					this.state = 1965;
					this.anonymousInnerClassDeclaration(0);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1969;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1968;
						this.dim();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1971;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1976;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
				case 1:
					{
					this.state = 1973;
					this.nls();
					this.state = 1974;
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
		this.enterRule(_localctx, 330, NextflowScriptParser.RULE_dim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1980;
			this.annotationsOpt();
			this.state = 1981;
			this.match(NextflowScriptParser.LBRACK);
			this.state = 1983;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1982;
				this.expression(0);
				}
				break;
			}
			this.state = 1985;
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
		this.enterRule(_localctx, 332, NextflowScriptParser.RULE_arrayInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1987;
			this.match(NextflowScriptParser.LBRACE);
			this.state = 1988;
			this.nls();
			this.state = 1992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1989;
				this.variableInitializers();
				this.state = 1990;
				this.nls();
				}
				break;
			}
			this.state = 1994;
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
		this.enterRule(_localctx, 334, NextflowScriptParser.RULE_anonymousInnerClassDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1996;
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
		this.enterRule(_localctx, 336, NextflowScriptParser.RULE_createdName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1998;
			this.annotationsOpt();
			this.state = 2004;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NextflowScriptParser.BuiltInPrimitiveType:
				{
				this.state = 1999;
				this.primitiveType();
				}
				break;
			case NextflowScriptParser.AS:
			case NextflowScriptParser.DEF:
			case NextflowScriptParser.IN:
			case NextflowScriptParser.TRAIT:
			case NextflowScriptParser.VAR:
			case NextflowScriptParser.CapitalizedIdentifier:
			case NextflowScriptParser.Identifier:
				{
				this.state = 2000;
				this.qualifiedClassName();
				this.state = 2002;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 2001;
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
		this.enterRule(_localctx, 338, NextflowScriptParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2006;
			this.match(NextflowScriptParser.LT);
			this.state = 2007;
			this.nls();
			this.state = 2008;
			this.typeList();
			this.state = 2009;
			this.nls();
			this.state = 2010;
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
		this.enterRule(_localctx, 340, NextflowScriptParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2015;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2012;
				this.match(NextflowScriptParser.LT);
				this.state = 2013;
				this.match(NextflowScriptParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2014;
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
		this.enterRule(_localctx, 342, NextflowScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2017;
			this.match(NextflowScriptParser.LPAREN);
			this.state = 2019;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				{
				this.state = 2018;
				this.enhancedArgumentListInPar();
				}
				break;
			}
			this.state = 2022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NextflowScriptParser.COMMA) {
				{
				this.state = 2021;
				this.match(NextflowScriptParser.COMMA);
				}
			}

			this.state = 2024;
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
		this.enterRule(_localctx, 344, NextflowScriptParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2026;
			this.firstArgumentListElement();
			this.state = 2033;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2027;
					this.match(NextflowScriptParser.COMMA);
					this.state = 2028;
					this.nls();
					this.state = 2029;
					this.argumentListElement();
					}
					}
				}
				this.state = 2035;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
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
		this.enterRule(_localctx, 346, NextflowScriptParser.RULE_enhancedArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2036;
			this.firstEnhancedArgumentListElement();
			this.state = 2043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NextflowScriptParser.COMMA) {
				{
				{
				this.state = 2037;
				this.match(NextflowScriptParser.COMMA);
				this.state = 2038;
				this.nls();
				this.state = 2039;
				this.enhancedArgumentListElement();
				}
				}
				this.state = 2045;
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
		this.enterRule(_localctx, 348, NextflowScriptParser.RULE_enhancedArgumentListInPar);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2046;
			this.enhancedArgumentListElement();
			this.state = 2053;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2047;
					this.match(NextflowScriptParser.COMMA);
					this.state = 2048;
					this.nls();
					this.state = 2049;
					this.enhancedArgumentListElement();
					}
					}
				}
				this.state = 2055;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
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
		this.enterRule(_localctx, 350, NextflowScriptParser.RULE_firstArgumentListElement);
		try {
			this.state = 2058;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2056;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2057;
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
		this.enterRule(_localctx, 352, NextflowScriptParser.RULE_argumentListElement);
		try {
			this.state = 2062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2060;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2061;
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
		this.enterRule(_localctx, 354, NextflowScriptParser.RULE_firstEnhancedArgumentListElement);
		try {
			this.state = 2067;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2064;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2065;
				this.standardLambdaExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2066;
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
		this.enterRule(_localctx, 356, NextflowScriptParser.RULE_enhancedArgumentListElement);
		try {
			this.state = 2072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2069;
				this.expressionListElement(true);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2070;
				this.standardLambdaExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2071;
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
		this.enterRule(_localctx, 358, NextflowScriptParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2074;
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
		this.enterRule(_localctx, 360, NextflowScriptParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2076;
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
		this.enterRule(_localctx, 362, NextflowScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2078;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.VAR))) !== 0) || _la === NextflowScriptParser.CapitalizedIdentifier || _la === NextflowScriptParser.Identifier)) {
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
		this.enterRule(_localctx, 364, NextflowScriptParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2080;
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
		this.enterRule(_localctx, 366, NextflowScriptParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2082;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NextflowScriptParser.AS) | (1 << NextflowScriptParser.DEF) | (1 << NextflowScriptParser.IN) | (1 << NextflowScriptParser.TRAIT) | (1 << NextflowScriptParser.THREADSAFE) | (1 << NextflowScriptParser.VAR) | (1 << NextflowScriptParser.BuiltInPrimitiveType) | (1 << NextflowScriptParser.ABSTRACT) | (1 << NextflowScriptParser.ASSERT) | (1 << NextflowScriptParser.BREAK) | (1 << NextflowScriptParser.CASE) | (1 << NextflowScriptParser.CATCH) | (1 << NextflowScriptParser.CLASS) | (1 << NextflowScriptParser.CONST) | (1 << NextflowScriptParser.CONTINUE) | (1 << NextflowScriptParser.DEFAULT) | (1 << NextflowScriptParser.DO) | (1 << NextflowScriptParser.ELSE) | (1 << NextflowScriptParser.ENUM) | (1 << NextflowScriptParser.EXTENDS) | (1 << NextflowScriptParser.FINAL) | (1 << NextflowScriptParser.FINALLY) | (1 << NextflowScriptParser.FOR) | (1 << NextflowScriptParser.IF) | (1 << NextflowScriptParser.GOTO))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (NextflowScriptParser.IMPLEMENTS - 32)) | (1 << (NextflowScriptParser.IMPORT - 32)) | (1 << (NextflowScriptParser.INSTANCEOF - 32)) | (1 << (NextflowScriptParser.INTERFACE - 32)) | (1 << (NextflowScriptParser.NATIVE - 32)) | (1 << (NextflowScriptParser.NEW - 32)) | (1 << (NextflowScriptParser.PACKAGE - 32)) | (1 << (NextflowScriptParser.PRIVATE - 32)) | (1 << (NextflowScriptParser.PROTECTED - 32)) | (1 << (NextflowScriptParser.PUBLIC - 32)) | (1 << (NextflowScriptParser.RETURN - 32)) | (1 << (NextflowScriptParser.STATIC - 32)) | (1 << (NextflowScriptParser.STRICTFP - 32)) | (1 << (NextflowScriptParser.SUPER - 32)) | (1 << (NextflowScriptParser.SWITCH - 32)) | (1 << (NextflowScriptParser.SYNCHRONIZED - 32)) | (1 << (NextflowScriptParser.THIS - 32)) | (1 << (NextflowScriptParser.THROW - 32)) | (1 << (NextflowScriptParser.THROWS - 32)) | (1 << (NextflowScriptParser.TRANSIENT - 32)) | (1 << (NextflowScriptParser.TRY - 32)) | (1 << (NextflowScriptParser.VOID - 32)) | (1 << (NextflowScriptParser.VOLATILE - 32)) | (1 << (NextflowScriptParser.WHILE - 32)) | (1 << (NextflowScriptParser.BooleanLiteral - 32)) | (1 << (NextflowScriptParser.NullLiteral - 32)))) !== 0))) {
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
		this.enterRule(_localctx, 368, NextflowScriptParser.RULE_rparen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2084;
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
		this.enterRule(_localctx, 370, NextflowScriptParser.RULE_nls);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2086;
					this.match(NextflowScriptParser.NL);
					}
					}
				}
				this.state = 2091;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
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
		this.enterRule(_localctx, 372, NextflowScriptParser.RULE_sep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2093;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2092;
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
				this.state = 2095;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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

		case 45:
			return this.classBody_sempred(_localctx as ClassBodyContext, predIndex);

		case 105:
			return this.localVariableDeclaration_sempred(_localctx as LocalVariableDeclarationContext, predIndex);

		case 140:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 142:
			return this.commandExpression_sempred(_localctx as CommandExpressionContext, predIndex);

		case 144:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x98\u0834\x04" +
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
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x03\x02\x03\x02" +
		"\x05\x02\u017B\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03\u0183\n\x03\f\x03\x0E\x03\u0186\v\x03\x03\x03\x05\x03\u0189\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\u0193\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x07\x06\u019F\n\x06\f\x06\x0E\x06\u01A2\v\x06\x03" +
		"\x06\x03\x06\x05\x06\u01A6\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u01AC\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01B3\n\b\x03\b\x05\b" +
		"\u01B6\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07\t\u01BE\n\t\f\t\x0E" +
		"\t\u01C1\v\t\x03\t\x05\t\u01C4\n\t\x03\n\x03\n\x03\n\x06\n\u01C9\n\n\r" +
		"\n\x0E\n\u01CA\x03\n\x03\n\x06\n\u01CF\n\n\r\n\x0E\n\u01D0\x03\n\x03\n" +
		"\x03\n\x03\n\x06\n\u01D7\n\n\r\n\x0E\n\u01D8\x03\n\x03\n\x06\n\u01DD\n" +
		"\n\r\n\x0E\n\u01DE\x03\n\x03\n\x06\n\u01E3\n\n\r\n\x0E\n\u01E4\x03\n\x03" +
		"\n\x06\n\u01E9\n\n\r\n\x0E\n\u01EA\x05\n\u01ED\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\u01F5\n\v\f\v\x0E\v\u01F8\v\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\u01FF\n\f\f\f\x0E\f\u0202\v\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u020A\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\u021D\n\x10\f\x10\x0E\x10\u0220\v\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u022B\n\x11\f\x11\x0E\x11\u022E\v\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0239\n\x13\f\x13\x0E" +
		"\x13\u023C\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u0245\n\x14\f\x14\x0E\x14\u0248\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\u0250\n\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0263\n\x18\f\x18\x0E\x18" +
		"\u0266\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x07\x19\u0271\n\x19\f\x19\x0E\x19\u0274\v\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u027F" +
		"\n\x1B\f\x1B\x0E\x1B\u0282\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C" +
		"\u0288\n\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u028D\n\x1C\f\x1C\x0E\x1C" +
		"\u0290\v\x1C\x05\x1C\u0292\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x06\x1D" +
		"\u0298\n\x1D\r\x1D\x0E\x1D\u0299\x05\x1D\u029C\n\x1D\x03\x1D\x03\x1D\x06" +
		"\x1D\u02A0\n\x1D\r\x1D\x0E\x1D\u02A1\x05\x1D\u02A4\n\x1D\x03\x1D\x03\x1D" +
		"\x06\x1D\u02A8\n\x1D\r\x1D\x0E\x1D\u02A9\x05\x1D\u02AC\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02B5\n\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02BC\n\x1F\x03 \x03 \x03 \x03" +
		"!\x03!\x05!\u02C3\n!\x03\"\x03\"\x03\"\x05\"\u02C8\n\"\x03#\x03#\x03#" +
		"\x03#\x07#\u02CE\n#\f#\x0E#\u02D1\v#\x03$\x03$\x07$\u02D5\n$\f$\x0E$\u02D8" +
		"\v$\x05$\u02DA\n$\x03%\x03%\x03%\x03%\x07%\u02E0\n%\f%\x0E%\u02E3\v%\x03" +
		"&\x03&\x05&\u02E7\n&\x03\'\x03\'\x05\'\u02EB\n\'\x03(\x03(\x03(\x05(\u02F0" +
		"\n(\x03)\x03)\x03)\x03)\x07)\u02F6\n)\f)\x0E)\u02F9\v)\x03*\x03*\x03*" +
		"\x03*\x03*\x03*\x03*\x07*\u0302\n*\f*\x0E*\u0305\v*\x03*\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03+\x05+\u030F\n+\x03,\x03,\x03,\x03,\x03,\x07,\u0316" +
		"\n,\f,\x0E,\u0319\v,\x03-\x03-\x03-\x03-\x03-\x07-\u0320\n-\f-\x0E-\u0323" +
		"\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0330" +
		"\n.\x03.\x03.\x03.\x03.\x05.\u0336\n.\x03.\x03.\x03.\x03.\x03.\x05.\u033D" +
		"\n.\x03.\x03.\x03.\x03.\x03.\x05.\u0344\n.\x03.\x03.\x03.\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x05/\u0350\n/\x03/\x05/\u0353\n/\x03/\x05/\u0356" +
		"\n/\x03/\x03/\x03/\x03/\x07/\u035C\n/\f/\x0E/\u035F\v/\x05/\u0361\n/\x03" +
		"/\x05/\u0364\n/\x03/\x03/\x030\x030\x030\x030\x030\x030\x070\u036E\n0" +
		"\f0\x0E0\u0371\v0\x031\x031\x031\x051\u0376\n1\x031\x051\u0379\n1\x03" +
		"2\x032\x052\u037D\n2\x032\x032\x052\u0381\n2\x033\x033\x033\x033\x033" +
		"\x053\u0388\n3\x034\x034\x054\u038C\n4\x034\x034\x034\x054\u0391\n4\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u039E\n4\x03" +
		"4\x034\x034\x054\u03A3\n4\x054\u03A5\n4\x035\x035\x055\u03A9\n5\x036\x03" +
		"6\x056\u03AD\n6\x037\x037\x038\x038\x038\x038\x038\x078\u03B6\n8\f8\x0E" +
		"8\u03B9\v8\x039\x039\x039\x039\x039\x039\x059\u03C1\n9\x03:\x03:\x03;" +
		"\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u03CD\n<\f<\x0E<\u03D0\v<\x03" +
		"<\x03<\x05<\u03D4\n<\x03=\x03=\x03=\x03=\x06=\u03DA\n=\r=\x0E=\u03DB\x03" +
		">\x05>\u03DF\n>\x03?\x03?\x03?\x05?\u03E4\n?\x03?\x03?\x03@\x03@\x03@" +
		"\x05@\u03EB\n@\x03@\x05@\u03EE\n@\x03@\x03@\x03A\x03A\x05A\u03F4\nA\x03" +
		"A\x05A\u03F7\nA\x03B\x03B\x05B\u03FB\nB\x03C\x03C\x05C\u03FF\nC\x03D\x03" +
		"D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x07E\u040A\nE\fE\x0EE\u040D\vE\x03" +
		"E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0419\nF\x05F\u041B" +
		"\nF\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x07H\u0425\nH\fH\x0EH\u0428" +
		"\vH\x03I\x03I\x05I\u042C\nI\x03I\x03I\x03J\x03J\x05J\u0432\nJ\x03J\x03" +
		"J\x03J\x03J\x07J\u0438\nJ\fJ\x0EJ\u043B\vJ\x03K\x03K\x03K\x03L\x03L\x05" +
		"L\u0442\nL\x03L\x05L\u0445\nL\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u044D" +
		"\nL\x03M\x03M\x03N\x03N\x03N\x07N\u0454\nN\fN\x0EN\u0457\vN\x03O\x03O" +
		"\x03O\x03O\x03O\x05O\u045E\nO\x03P\x03P\x03P\x07P\u0463\nP\fP\x0EP\u0466" +
		"\vP\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x07R\u046F\nR\fR\x0ER\u0472\vR" +
		"\x03S\x03S\x03S\x03S\x03S\x05S\u0479\nS\x03T\x03T\x03T\x03T\x07T\u047F" +
		"\nT\fT\x0ET\u0482\vT\x03T\x03T\x03U\x03U\x05U\u0488\nU\x03V\x03V\x07V" +
		"\u048C\nV\fV\x0EV\u048F\vV\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x05Z\u04A1\nZ\x03[\x03[\x05[\u04A5" +
		"\n[\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u04AC\n\\\x03\\\x03\\\x05\\\u04B0" +
		"\n\\\x03\\\x05\\\u04B3\n\\\x03\\\x03\\\x03\\\x03]\x03]\x05]\u04BA\n]\x03" +
		"^\x05^\u04BD\n^\x03_\x03_\x03_\x03_\x07_\u04C3\n_\f_\x0E_\u04C6\v_\x03" +
		"_\x05_\u04C9\n_\x03`\x03`\x03`\x03`\x07`\u04CF\n`\f`\x0E`\u04D2\v`\x03" +
		"`\x03`\x05`\u04D6\n`\x03a\x03a\x03a\x03a\x03a\x05a\u04DD\na\x03a\x03a" +
		"\x05a\u04E1\na\x03b\x03b\x05b\u04E5\nb\x03c\x03c\x03d\x03d\x03d\x07d\u04EC" +
		"\nd\fd\x0Ed\u04EF\vd\x03e\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x05f\u04F9" +
		"\nf\x03g\x03g\x03g\x05g\u04FE\ng\x03h\x03h\x03h\x03h\x07h\u0504\nh\fh" +
		"\x0Eh\u0507\vh\x03h\x05h\u050A\nh\x05h\u050C\nh\x03h\x03h\x03i\x03i\x05" +
		"i\u0512\ni\x03i\x03i\x03i\x03j\x03j\x05j\u0519\nj\x03k\x03k\x03k\x03l" +
		"\x03l\x03l\x05l\u0521\nl\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u052A" +
		"\nl\x03l\x03l\x03l\x05l\u052F\nl\x03m\x03m\x03m\x03m\x07m\u0535\nm\fm" +
		"\x0Em\u0538\vm\x03m\x03m\x03n\x05n\u053D\nn\x03n\x03n\x03o\x03o\x03o\x03" +
		"o\x06o\u0545\no\ro\x0Eo\u0546\x03o\x03o\x03p\x03p\x05p\u054D\np\x03q\x03" +
		"q\x03q\x03q\x03q\x03q\x05q\u0555\nq\x03q\x03q\x03q\x03q\x05q\u055B\nq" +
		"\x03r\x03r\x03r\x03r\x03r\x03r\x06r\u0563\nr\rr\x0Er\u0564\x03r\x03r\x05" +
		"r\u0569\nr\x03r\x03r\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03" +
		"s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u0580\ns\x03t\x03" +
		"t\x05t\u0584\nt\x03u\x03u\x05u\u0588\nu\x03v\x03v\x05v\u058C\nv\x03v\x03" +
		"v\x03v\x03v\x03v\x07v\u0593\nv\fv\x0Ev\u0596\vv\x03v\x03v\x03v\x05v\u059B" +
		"\nv\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u05A4\nw\x03x\x03x\x03x\x03" +
		"x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x05x\u05B1\nx\x03x\x03x\x03x\x03" +
		"x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x05x\u05C0\nx\x03y\x03" +
		"y\x03y\x03y\x05y\u05C6\ny\x03y\x03y\x03y\x03y\x03y\x03z\x03z\x03z\x07" +
		"z\u05D0\nz\fz\x0Ez\u05D3\vz\x03{\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x05" +
		"|\u05DD\n|\x03|\x03|\x03}\x03}\x03}\x03}\x07}\u05E5\n}\f}\x0E}\u05E8\v" +
		"}\x03~\x03~\x05~\u05EC\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u05F2" +
		"\n\x7F\f\x7F\x0E\x7F\u05F5\v\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u0600\n\x80\x03\x81\x03\x81\x05" +
		"\x81\u0604\n\x81\x03\x82\x03\x82\x05\x82\u0608\n\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x83\x05\x83\u060F\n\x83\x03\x83\x03\x83\x05\x83\u0613" +
		"\n\x83\x03\x83\x03\x83\x05\x83\u0617\n\x83\x03\x84\x03\x84\x05\x84\u061B" +
		"\n\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x87\x03\x87" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x07\x89\u062C" +
		"\n\x89\f\x89\x0E\x89\u062F\v\x89\x03\x8A\x05\x8A\u0632\n\x8A\x03\x8A\x03" +
		"\x8A\x03\x8B\x03\x8B\x05\x8B\u0638\n\x8B\x03\x8C\x03\x8C\x03\x8D\x03\x8D" +
		"\x05\x8D\u063E\n\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03" +
		"\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03" +
		"\x8E\x03\x8E\x05\x8E\u0651\n\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x05\x8E\u066C\n\x8E\x03\x8E\x05\x8E\u066F\n\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u06AF" +
		"\n\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x07\x8E\u06BF\n\x8E\f" +
		"\x8E\x0E\x8E\u06C2\v\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F" +
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u06CE\n\x8F\x03\x90\x03\x90\x03" +
		"\x90\x03\x90\x05\x90\u06D4\n\x90\x03\x90\x07\x90\u06D7\n\x90\f\x90\x0E" +
		"\x90\u06DA\v\x90\x03\x91\x03\x91\x06\x91\u06DE\n\x91\r\x91\x0E\x91\u06DF" +
		"\x03\x91\x05\x91\u06E3\n\x91\x03\x92\x03\x92\x03\x92\x05\x92\u06E8\n\x92" +
		"\x03\x92\x03\x92\x03\x92\x07\x92\u06ED\n\x92\f\x92\x0E\x92\u06F0\v\x92" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x05\x93\u06FD\n\x93\x03\x93\x03\x93\x03\x93\x03\x93\x05" +
		"\x93\u0703\n\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93" +
		"\u070B\n\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03" +
		"\x93\x03\x93\x05\x93\u0716\n\x93\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94" +
		"\u071C\n\x94\x03\x95\x03\x95\x05\x95\u0720\n\x95\x03\x96\x05\x96\u0723" +
		"\n\x96\x03\x96\x03\x96\x05\x96\u0727\n\x96\x03\x96\x03\x96\x03\x97\x05" +
		"\x97\u072C\n\x97\x03\x97\x03\x97\x03\x97\x05\x97\u0731\n\x97\x03\x97\x03" +
		"\x97\x03\x98\x03\x98\x05\x98\u0737\n\x98\x03\x98\x03\x98\x03\x98\x03\x98" +
		"\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98" +
		"\x05\x98\u0746\n\x98\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05" +
		"\x99\u074E\n\x99\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u0753\n\x9A\x03\x9B\x03" +
		"\x9B\x03\x9B\x05\x9B\u0758\n\x9B\x03\x9C\x03\x9C\x05\x9C\u075C\n\x9C\x03" +
		"\x9C\x05\x9C\u075F\n\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x05\x9D" +
		"\u0766\n\x9D\x03\x9D\x05\x9D\u0769\n\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E" +
		"\x03\x9E\x07\x9E\u0770\n\x9E\f\x9E\x0E\x9E\u0773\v\x9E\x03\x9F\x03\x9F" +
		"\x03\x9F\x07\x9F\u0778\n\x9F\f\x9F\x0E\x9F\u077B\v\x9F\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0" +
		"\u0787\n\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03" +
		"\xA1\x03\xA1\x03\xA1\x05\xA1\u0793\n\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2" +
		"\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x05\xA2\u079F\n\xA2\x03" +
		"\xA3\x03\xA3\x05\xA3\u07A3\n\xA3\x03\xA4\x03\xA4\x05\xA4\u07A7\n\xA4\x03" +
		"\xA5\x03\xA5\x05\xA5\u07AB\n\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x05\xA6" +
		"\u07B1\n\xA6\x03\xA6\x06\xA6\u07B4\n\xA6\r\xA6\x0E\xA6\u07B5\x03\xA6\x03" +
		"\xA6\x03\xA6\x05\xA6\u07BB\n\xA6\x05\xA6\u07BD\n\xA6\x03\xA7\x03\xA7\x03" +
		"\xA7\x05\xA7\u07C2\n\xA7\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA8\x05\xA8\u07CB\n\xA8\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xAA\x03" +
		"\xAA\x03\xAA\x03\xAA\x05\xAA\u07D5\n\xAA\x05\xAA\u07D7\n\xAA\x03\xAB\x03" +
		"\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAC\x05\xAC\u07E2" +
		"\n\xAC\x03\xAD\x03\xAD\x05\xAD\u07E6\n\xAD\x03\xAD\x05\xAD\u07E9\n\xAD" +
		"\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x07\xAE\u07F2" +
		"\n\xAE\f\xAE\x0E\xAE\u07F5\v\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x07\xAF\u07FC\n\xAF\f\xAF\x0E\xAF\u07FF\v\xAF\x03\xB0\x03\xB0\x03\xB0" +
		"\x03\xB0\x03\xB0\x07\xB0\u0806\n\xB0\f\xB0\x0E\xB0\u0809\v\xB0\x03\xB1" +
		"\x03\xB1\x05\xB1\u080D\n\xB1\x03\xB2\x03\xB2\x05\xB2\u0811\n\xB2\x03\xB3" +
		"\x03\xB3\x03\xB3\x05\xB3\u0816\n\xB3\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u081B" +
		"\n\xB4\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8" +
		"\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBB\x07\xBB\u082A\n\xBB\f\xBB\x0E" +
		"\xBB\u082D\v\xBB\x03\xBC\x06\xBC\u0830\n\xBC\r\xBC\x0E\xBC\u0831\x03\xBC" +
		"\x02\x02\x03\u011A\xBD\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C" +
		"\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE" +
		"\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0" +
		"\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2" +
		"\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4" +
		"\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6" +
		"\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106" +
		"\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114" +
		"\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122" +
		"\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130" +
		"\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E" +
		"\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C" +
		"\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A" +
		"\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168" +
		"\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176" +
		"\x02\x02\x1A\x04\x02ii\x91\x91\x04\x02ii\x92\x92\b\x02\n\n\x0E\x0E&&1" +
		"15588\x07\x02\x10\x10\x18\x18\x1D\x1D)+-.\b\x02\n\n\x0E\x0E\x10\x10\x1D" +
		"\x1D)+-.\x04\x02\x1C\x1C//\x04\x02WW__\x04\x02\v\v__\x03\x02fg\x03\x02" +
		"\\]\x03\x02fi\x04\x02jkoo\x03\x02hi\x03\x02>?\x06\x02\v\vOOZ[ab\x05\x02" +
		"JL``cc\x03\x02FG\x05";
	private static readonly _serializedATNSegment1: string =
		"\x02\t\t$$NN\x05\x02IIYYp{\x04\x02@BXX\x06\x02\t\t\v\f\x0E\x0E|}\x04\x02" +
		"\x0F\x0F77\x04\x02\t9<=\x04\x02VV\x81\x81\x02\u08B4\x02\u0178\x03\x02" +
		"\x02\x02\x04\u017E\x03\x02\x02\x02\x06\u0192\x03\x02\x02\x02\b\u0194\x03" +
		"\x02\x02\x02\n\u01A5\x03\x02\x02\x02\f\u01AB\x03\x02\x02\x02\x0E\u01AD" +
		"\x03\x02\x02\x02\x10\u01B9\x03\x02\x02\x02\x12\u01EC\x03\x02\x02\x02\x14" +
		"\u01EE\x03\x02\x02\x02\x16\u01F9\x03\x02\x02\x02\x18\u0209\x03\x02\x02" +
		"\x02\x1A\u020B\x03\x02\x02\x02\x1C\u0210\x03\x02\x02\x02\x1E\u0215\x03" +
		"\x02\x02\x02 \u0223\x03\x02\x02\x02\"\u0231\x03\x02\x02\x02$\u0233\x03" +
		"\x02\x02\x02&\u023F\x03\x02\x02\x02(\u024F\x03\x02\x02\x02*\u0251\x03" +
		"\x02\x02\x02,\u0256\x03\x02\x02\x02.\u025B\x03\x02\x02\x020\u0269\x03" +
		"\x02\x02\x022\u0277\x03\x02\x02\x024\u0279\x03\x02\x02\x026\u0285\x03" +
		"\x02\x02\x028\u029B\x03\x02\x02\x02:\u02AD\x03\x02\x02\x02<\u02B1\x03" +
		"\x02\x02\x02>\u02BD\x03\x02\x02\x02@\u02C2\x03\x02\x02\x02B\u02C7\x03" +
		"\x02\x02\x02D\u02C9\x03\x02\x02\x02F\u02D9\x03\x02\x02\x02H\u02DB\x03" +
		"\x02\x02\x02J\u02E6\x03\x02\x02\x02L\u02EA\x03\x02\x02\x02N\u02EF\x03" +
		"\x02\x02\x02P\u02F1\x03\x02\x02\x02R\u02FA\x03\x02\x02\x02T\u0309\x03" +
		"\x02\x02\x02V\u0310\x03\x02\x02\x02X\u031A\x03\x02\x02\x02Z\u032F\x03" +
		"\x02\x02\x02\\\u0348\x03\x02\x02\x02^\u0367\x03\x02\x02\x02`\u0372\x03" +
		"\x02\x02\x02b\u0380\x03\x02\x02\x02d\u0387\x03\x02\x02\x02f\u0389\x03" +
		"\x02\x02\x02h\u03A8\x03\x02\x02\x02j\u03AC\x03\x02\x02\x02l\u03AE\x03" +
		"\x02\x02\x02n\u03B0\x03\x02\x02\x02p\u03BA\x03\x02\x02\x02r\u03C2\x03" +
		"\x02\x02\x02t\u03C4\x03\x02\x02\x02v\u03C6\x03\x02\x02\x02x\u03D9\x03" +
		"\x02\x02\x02z\u03DE\x03\x02\x02\x02|\u03E0\x03\x02\x02\x02~\u03E7\x03" +
		"\x02\x02\x02\x80\u03F3\x03\x02\x02\x02\x82\u03F8\x03\x02\x02\x02\x84\u03FC" +
		"\x03\x02\x02\x02\x86\u0400\x03\x02\x02\x02\x88\u0402\x03\x02\x02\x02\x8A" +
		"\u041A\x03\x02\x02\x02\x8C\u041C\x03\x02\x02\x02\x8E\u041F\x03\x02\x02" +
		"\x02\x90\u0429\x03\x02\x02\x02\x92\u0431\x03\x02\x02\x02\x94\u043C\x03" +
		"\x02\x02\x02\x96\u043F\x03\x02\x02\x02\x98\u044E\x03\x02\x02\x02\x9A\u0450" +
		"\x03\x02\x02\x02\x9C\u045D\x03\x02\x02\x02\x9E\u0464\x03\x02\x02\x02\xA0" +
		"\u0467\x03\x02\x02\x02\xA2\u046A\x03\x02\x02\x02\xA4\u0478\x03\x02\x02" +
		"\x02\xA6\u047A\x03\x02\x02\x02\xA8\u0487\x03\x02\x02\x02\xAA\u0489\x03" +
		"\x02\x02\x02\xAC\u0490\x03\x02\x02\x02\xAE\u0496\x03\x02\x02\x02\xB0\u049C" +
		"\x03\x02\x02\x02\xB2\u04A0\x03\x02\x02\x02\xB4\u04A4\x03\x02\x02\x02\xB6" +
		"\u04A6\x03\x02\x02\x02\xB8\u04B9\x03\x02\x02\x02\xBA\u04BC\x03\x02\x02" +
		"\x02\xBC\u04BE\x03\x02\x02\x02\xBE\u04D5\x03\x02\x02\x02\xC0\u04D7\x03" +
		"\x02\x02\x02\xC2\u04E4\x03\x02\x02\x02\xC4\u04E6\x03\x02\x02\x02\xC6\u04E8" +
		"\x03\x02\x02\x02\xC8\u04F0\x03\x02\x02\x02\xCA\u04F8\x03\x02\x02\x02\xCC" +
		"\u04FD\x03\x02\x02\x02\xCE\u04FF\x03\x02\x02\x02\xD0\u050F\x03\x02\x02" +
		"\x02\xD2\u0518\x03\x02\x02\x02\xD4\u051A\x03\x02\x02\x02\xD6\u052E\x03" +
		"\x02\x02\x02\xD8\u0530\x03\x02\x02\x02\xDA\u053C\x03\x02\x02\x02\xDC\u0540" +
		"\x03\x02\x02\x02\xDE\u054C\x03\x02\x02\x02\xE0\u054E\x03\x02\x02\x02\xE2" +
		"\u055C\x03\x02\x02\x02\xE4\u057F\x03\x02\x02\x02\xE6\u0581\x03\x02\x02" +
		"\x02\xE8\u0585\x03\x02\x02\x02\xEA\u0589\x03\x02\x02\x02\xEC\u059C\x03" +
		"\x02\x02\x02\xEE\u05BF\x03\x02\x02\x02\xF0\u05C1\x03\x02\x02\x02\xF2\u05CC" +
		"\x03\x02\x02\x02\xF4\u05D4\x03\x02\x02\x02\xF6\u05D8\x03\x02\x02\x02\xF8" +
		"\u05E0\x03\x02\x02\x02\xFA\u05EB\x03\x02\x02\x02\xFC\u05ED\x03\x02\x02" +
		"\x02\xFE\u05FF\x03\x02\x02\x02\u0100\u0603\x03\x02\x02\x02\u0102\u0605" +
		"\x03\x02\x02\x02\u0104\u060E\x03\x02\x02\x02\u0106\u061A\x03\x02\x02\x02" +
		"\u0108\u061C\x03\x02\x02\x02\u010A\u061E\x03\x02\x02\x02\u010C\u0622\x03" +
		"\x02\x02\x02\u010E\u0624\x03\x02\x02\x02\u0110\u0628\x03\x02\x02\x02\u0112" +
		"\u0631\x03\x02\x02\x02\u0114\u0637\x03\x02\x02\x02\u0116\u0639\x03\x02" +
		"\x02\x02\u0118\u063B\x03\x02\x02\x02\u011A\u0650\x03\x02\x02\x02\u011C" +
		"\u06CD\x03\x02\x02\x02\u011E\u06CF\x03\x02\x02\x02\u0120\u06DB\x03\x02" +
		"\x02\x02\u0122\u06E7\x03\x02\x02\x02\u0124\u0715\x03\x02\x02\x02\u0126" +
		"\u071B\x03\x02\x02\x02\u0128\u071F\x03\x02\x02\x02\u012A\u0722\x03\x02" +
		"\x02\x02\u012C\u072B\x03\x02\x02\x02\u012E\u0745\x03\x02\x02\x02\u0130" +
		"\u074D\x03\x02\x02\x02\u0132\u0752\x03\x02\x02\x02\u0134\u0757\x03\x02" +
		"\x02\x02\u0136\u0759\x03\x02\x02\x02\u0138\u0762\x03\x02\x02\x02\u013A" +
		"\u076C\x03\x02\x02\x02\u013C\u0774\x03\x02\x02\x02\u013E\u0786\x03\x02" +
		"\x02\x02\u0140\u0792\x03\x02\x02\x02\u0142\u079E\x03\x02\x02\x02\u0144" +
		"\u07A2\x03\x02\x02\x02\u0146\u07A6\x03\x02\x02\x02\u0148\u07AA\x03\x02" +
		"\x02\x02\u014A\u07AC\x03\x02\x02\x02\u014C\u07BE\x03\x02\x02\x02\u014E" +
		"\u07C5\x03\x02\x02\x02\u0150\u07CE\x03\x02\x02\x02\u0152\u07D0\x03\x02" +
		"\x02\x02\u0154\u07D8\x03\x02\x02\x02\u0156\u07E1\x03\x02\x02\x02\u0158" +
		"\u07E3\x03\x02\x02\x02\u015A\u07EC\x03\x02\x02\x02\u015C\u07F6\x03\x02" +
		"\x02\x02\u015E\u0800\x03\x02\x02\x02\u0160\u080C\x03\x02\x02\x02\u0162" +
		"\u0810\x03\x02\x02\x02\u0164\u0815\x03\x02\x02\x02\u0166\u081A\x03\x02" +
		"\x02\x02\u0168\u081C\x03\x02\x02\x02\u016A\u081E\x03\x02\x02\x02\u016C" +
		"\u0820\x03\x02\x02\x02\u016E\u0822\x03\x02\x02\x02\u0170\u0824\x03\x02" +
		"\x02\x02\u0172\u0826\x03\x02\x02\x02\u0174\u082B\x03\x02\x02\x02\u0176" +
		"\u082F\x03\x02\x02\x02\u0178\u017A\x05\u0174\xBB\x02\u0179\u017B\x05\x04" +
		"\x03\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B" +
		"\u017C\x03\x02\x02\x02\u017C\u017D\x07\x02\x02\x03\u017D\x03\x03\x02\x02" +
		"\x02\u017E\u0184\x05\x06\x04\x02\u017F\u0180\x05\u0176\xBC\x02\u0180\u0181" +
		"\x05\x06\x04\x02\u0181\u0183\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02" +
		"\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03" +
		"\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187" +
		"\u0189\x05\u0176\xBC\x02\u0188\u0187\x03\x02\x02\x02\u0188\u0189\x03\x02" +
		"\x02\x02\u0189\x05\x03\x02\x02\x02\u018A\u0193\x05\b\x05\x02\u018B\u0193" +
		"\x05\x0E\b\x02\u018C\u0193\x056\x1C\x02\u018D\u0193\x05<\x1F\x02\u018E" +
		"\u0193\x05> \x02\u018F\u0190\x06\x04\x02\x02\u0190\u0193\x05f4\x02\u0191" +
		"\u0193\x05\xEEx\x02\u0192\u018A\x03\x02\x02\x02\u0192\u018B\x03\x02\x02" +
		"\x02\u0192\u018C\x03\x02\x02\x02\u0192\u018D\x03\x02\x02\x02\u0192\u018E" +
		"\x03\x02\x02\x02\u0192\u018F\x03\x02\x02\x02\u0192\u0191\x03\x02\x02\x02" +
		"\u0193\x07\x03\x02\x02\x02\u0194\u0195\x07\x89\x02\x02\u0195\u0196\x05" +
		"\n\x06\x02\u0196\u0197\x07\x88\x02\x02\u0197\u0198\x05\u011A\x8E\x02\u0198" +
		"\t\x03\x02\x02\x02\u0199\u01A6\x05\f\x07\x02\u019A\u019B\x07R\x02\x02" +
		"\u019B\u01A0\x05\f\x07\x02\u019C\u019D\x07W\x02\x02\u019D\u019F\x05\f" +
		"\x07\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0" +
		"\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3\x03\x02" +
		"\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A4\x07S\x02\x02\u01A4\u01A6" +
		"\x03\x02\x02\x02\u01A5\u0199\x03\x02\x02\x02\u01A5\u019A\x03\x02\x02\x02" +
		"\u01A6\v\x03\x02\x02\x02\u01A7\u01AC\x07}\x02\x02\u01A8\u01A9\x07}\x02" +
		"\x02\u01A9\u01AA\x07\t\x02\x02\u01AA\u01AC\x07}\x02\x02\u01AB\u01A7\x03" +
		"\x02\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AC\r\x03\x02\x02\x02\u01AD" +
		"\u01AE\x07\x8E\x02\x02\u01AE\u01AF\x07}\x02\x02\u01AF\u01B0\x05\u0174" +
		"\xBB\x02\u01B0\u01B2\x07R\x02\x02\u01B1\u01B3\x05\u0176\xBC\x02\u01B2" +
		"\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03\x02" +
		"\x02\x02\u01B4\u01B6\x05\x10\t\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6" +
		"\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07S\x02\x02" +
		"\u01B8\x0F\x03\x02\x02\x02\u01B9\u01BF\x05\x12\n\x02\u01BA\u01BB\x05\u0176" +
		"\xBC\x02\u01BB\u01BC\x05\x12\n\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01BA" +
		"\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02" +
		"\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03" +
		"\x02\x02\x02\u01C2\u01C4\x05\u0176\xBC\x02\u01C3\u01C2\x03\x02\x02\x02" +
		"\u01C3\u01C4\x03\x02\x02\x02\u01C4\x11\x03\x02\x02\x02\u01C5\u01ED\x05" +
		"\x14\v\x02\u01C6\u01C8\x07\x8A\x02\x02\u01C7\u01C9\x05\x16\f\x02\u01C8" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01C8\x03\x02" +
		"\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01ED\x03\x02\x02\x02\u01CC" +
		"\u01CE\x07\x8C\x02\x02\u01CD\u01CF\x05&\x14\x02\u01CE\u01CD\x03\x02\x02" +
		"\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1" +
		"\x03\x02\x02\x02\u01D1\u01ED\x03\x02\x02\x02\u01D2\u01D3\x07\x97\x02\x02" +
		"\u01D3\u01ED\x05\u011A\x8E\x02\u01D4\u01D6\x07\x8F\x02\x02\u01D5\u01D7" +
		"\x05\xEEx\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01ED\x03" +
		"\x02\x02\x02\u01DA\u01DC\x07\x90\x02\x02\u01DB\u01DD\x05\xEEx\x02\u01DC" +
		"\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DC\x03\x02" +
		"\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01ED\x03\x02\x02\x02\u01E0" +
		"\u01E2\x07\x86\x02\x02\u01E1\u01E3\x05\xEEx\x02\u01E2\u01E1\x03\x02\x02" +
		"\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01ED\x03\x02\x02\x02\u01E6\u01E8\x07\x93\x02\x02" +
		"\u01E7\u01E9\x05\xEEx\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03" +
		"\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
		"\u01ED\x03\x02\x02\x02\u01EC\u01C5\x03\x02\x02\x02\u01EC\u01C6\x03\x02" +
		"\x02\x02\u01EC\u01CC\x03\x02\x02\x02\u01EC\u01D2\x03\x02\x02\x02\u01EC" +
		"\u01D4\x03\x02\x02\x02\u01EC\u01DA\x03\x02\x02\x02\u01EC\u01E0\x03\x02" +
		"\x02\x02\u01EC\u01E6\x03\x02\x02\x02\u01ED\x13\x03\x02\x02\x02\u01EE\u01EF" +
		"\x07}\x02\x02\u01EF\u01F6\x05\u011A\x8E\x02\u01F0\u01F1\x07W\x02\x02\u01F1" +
		"\u01F2\x07}\x02\x02\u01F2\u01F3\x07_\x02\x02\u01F3\u01F5\x05\u011A\x8E" +
		"\x02\u01F4\u01F0\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4" +
		"\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\x15\x03\x02\x02\x02" +
		"\u01F8\u01F6\x03\x02\x02\x02\u01F9\u0200\x05\x18\r\x02\u01FA\u01FB\x07" +
		"W\x02\x02\u01FB\u01FC\x07}\x02\x02\u01FC\u01FD\x07_\x02\x02\u01FD\u01FF" +
		"\x05\u011A\x8E\x02\u01FE\u01FA\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02" +
		"\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\x17" +
		"\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u020A\x05\x1A\x0E\x02" +
		"\u0204\u020A\x05\x1C\x0F\x02\u0205\u020A\x05\x1E\x10\x02\u0206\u020A\x05" +
		" \x11\x02\u0207\u020A\x05\"\x12\x02\u0208\u020A\x05$\x13\x02\u0209\u0203" +
		"\x03\x02\x02\x02\u0209\u0204\x03\x02\x02\x02\u0209\u0205\x03\x02\x02\x02" +
		"\u0209\u0206\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u0208\x03" +
		"\x02\x02\x02\u020A\x19\x03\x02\x02\x02\u020B\u020C\x07\x96\x02\x02\u020C" +
		"\u020D\x07P\x02\x02\u020D\u020E\x07}\x02\x02\u020E\u020F\x07Q\x02\x02" +
		"\u020F\x1B\x03\x02\x02\x02\u0210\u0211\x07\x85\x02\x02\u0211\u0212\x07" +
		"P\x02\x02\u0212\u0213\x07}\x02\x02\u0213\u0214\x07Q\x02\x02\u0214\x1D" +
		"\x03\x02\x02\x02\u0215\u0216\x07\x87\x02\x02\u0216\u0217\x07P\x02\x02" +
		"\u0217\u021E\x05\u011A\x8E\x02\u0218\u0219\x07W\x02\x02\u0219\u021A\x07" +
		"}\x02\x02\u021A\u021B\x07_\x02\x02\u021B\u021D\x05\u011A\x8E\x02\u021C" +
		"\u0218\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02" +
		"\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220" +
		"\u021E\x03\x02\x02\x02\u0221\u0222\x07Q\x02\x02\u0222\x1F\x03\x02\x02" +
		"\x02\u0223\u0224\x07\x8D\x02\x02\u0224\u0225\x07P\x02\x02\u0225\u022C" +
		"\x05\u011A\x8E\x02\u0226\u0227\x07W\x02\x02\u0227\u0228\x07}\x02\x02\u0228" +
		"\u0229\x07_\x02\x02\u0229\u022B\x05\u011A\x8E\x02\u022A\u0226\x03\x02" +
		"\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C" +
		"\u022D\x03\x02\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022C\x03\x02" +
		"\x02\x02\u022F\u0230\x07Q\x02\x02\u0230!\x03\x02\x02\x02\u0231\u0232\t" +
		"\x02\x02\x02\u0232#\x03\x02\x02\x02\u0233\u0234\x07\x95\x02\x02\u0234" +
		"\u0235\x07P\x02\x02\u0235\u023A\x05\x18\r\x02\u0236\u0237\x07W\x02\x02" +
		"\u0237\u0239\x05\x18\r\x02\u0238\u0236\x03\x02\x02\x02\u0239\u023C\x03" +
		"\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		"\u023D\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023E\x07Q\x02" +
		"\x02\u023E%\x03\x02\x02\x02\u023F\u0246\x05(\x15\x02\u0240\u0241\x07W" +
		"\x02\x02\u0241\u0242\x07}\x02\x02\u0242\u0243\x07_\x02\x02\u0243\u0245" +
		"\x05\u011A\x8E\x02\u0244\u0240\x03\x02\x02\x02\u0245\u0248\x03\x02\x02" +
		"\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\'\x03" +
		"\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249\u0250\x05*\x16\x02\u024A" +
		"\u0250\x05,\x17\x02\u024B\u0250\x05.\x18\x02\u024C\u0250\x050\x19\x02" +
		"\u024D\u0250\x052\x1A\x02\u024E\u0250\x054\x1B\x02\u024F\u0249\x03\x02" +
		"\x02\x02\u024F\u024A\x03\x02\x02\x02\u024F\u024B\x03\x02\x02\x02\u024F" +
		"\u024C\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u024E\x03\x02" +
		"\x02\x02\u0250)\x03\x02\x02\x02\u0251\u0252\x07\x96\x02\x02\u0252\u0253" +
		"\x07P\x02\x02\u0253\u0254\x07}\x02\x02\u0254\u0255\x07Q\x02\x02\u0255" +
		"+\x03\x02\x02\x02\u0256\u0257\x07\x85\x02\x02\u0257\u0258\x07P\x02\x02" +
		"\u0258\u0259\x07}\x02\x02\u0259\u025A\x07Q\x02\x02\u025A-\x03\x02\x02" +
		"\x02\u025B\u025C\x07\x87\x02\x02\u025C\u025D\x07P\x02\x02\u025D\u0264" +
		"\x05\u011A\x8E\x02\u025E\u025F\x07W\x02\x02\u025F\u0260\x07}\x02\x02\u0260" +
		"\u0261\x07_\x02\x02\u0261\u0263\x05\u011A\x8E\x02\u0262\u025E\x03\x02" +
		"\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264" +
		"\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0264\x03\x02" +
		"\x02\x02\u0267\u0268\x07Q\x02\x02\u0268/\x03\x02\x02\x02\u0269\u026A\x07" +
		"\x8D\x02\x02\u026A\u026B\x07P\x02\x02\u026B\u0272\x05\u011A\x8E\x02\u026C" +
		"\u026D\x07W\x02\x02\u026D\u026E\x07}\x02\x02\u026E\u026F\x07_\x02\x02" +
		"\u026F\u0271\x05\u011A\x8E\x02\u0270\u026C\x03\x02\x02\x02\u0271\u0274" +
		"\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02" +
		"\u0273\u0275\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0276\x07" +
		"Q\x02\x02\u02761\x03\x02\x02\x02\u0277\u0278\t\x03\x02\x02\u02783\x03" +
		"\x02\x02\x02\u0279\u027A\x07\x95\x02\x02\u027A\u027B\x07P\x02\x02\u027B" +
		"\u0280\x05(\x15\x02\u027C\u027D\x07W\x02\x02\u027D\u027F\x05(\x15\x02" +
		"\u027E\u027C\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03" +
		"\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282" +
		"\u0280\x03\x02\x02\x02\u0283\u0284\x07Q\x02\x02\u02845\x03\x02\x02\x02" +
		"\u0285\u0287\x07\x98\x02\x02\u0286\u0288\x07}\x02\x02\u0287\u0286\x03" +
		"\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289" +
		"\u0291\x07R\x02\x02\u028A\u0292\x058\x1D\x02\u028B\u028D\x05\xEEx\x02" +
		"\u028C\u028B\x03\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03" +
		"\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290" +
		"\u028E\x03\x02\x02\x02\u0291\u028A\x03\x02\x02\x02\u0291\u028E\x03\x02" +
		"\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x07S\x02\x02\u02947\x03" +
		"\x02\x02\x02\u0295\u0297\x07\x94\x02\x02\u0296\u0298\x07}\x02\x02\u0297" +
		"\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u0297\x03\x02" +
		"\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x03\x02\x02\x02\u029B" +
		"\u0295\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u02A3\x03\x02" +
		"\x02\x02\u029D\u029F\x07\x8B\x02\x02\u029E\u02A0\x05\xEEx\x02\u029F\u029E" +
		"\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02" +
		"\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3\u029D\x03" +
		"\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02AB\x03\x02\x02\x02\u02A5" +
		"\u02A7\x07\x84\x02\x02\u02A6\u02A8\x05\u011A\x8E\x02\u02A7\u02A6\x03\x02" +
		"\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9" +
		"\u02AA\x03\x02\x02\x02\u02AA\u02AC\x03\x02\x02\x02\u02AB\u02A5\x03\x02" +
		"\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC9\x03\x02\x02\x02\u02AD\u02AE" +
		"\x05\xBE`\x02\u02AE\u02AF\x07(\x02\x02\u02AF\u02B0\x05\x9AN\x02\u02B0" +
		";\x03\x02\x02\x02\u02B1\u02B2\x05\xBE`\x02\u02B2\u02B4\x07#\x02\x02\u02B3" +
		"\u02B5\x07-\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02" +
		"\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02BB\x05\x9AN\x02\u02B7\u02B8" +
		"\x07X\x02\x02\u02B8\u02BC\x07j\x02\x02\u02B9\u02BA\x07\t\x02\x02\u02BA" +
		"\u02BC\x05\u016C\xB7\x02\u02BB\u02B7\x03\x02\x02\x02\u02BB\u02B9\x03\x02" +
		"\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC=\x03\x02\x02\x02\u02BD\u02BE" +
		"\x05F$\x02\u02BE\u02BF\x05Z.\x02\u02BF?\x03\x02\x02\x02\u02C0\u02C3\x05" +
		"J&\x02\u02C1\u02C3\t\x04\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C2\u02C1" +
		"\x03\x02\x02\x02\u02C3A\x03\x02\x02\x02\u02C4\u02C5\x05D#\x02\u02C5\u02C6" +
		"\x05\u0174\xBB\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02C4\x03\x02\x02" +
		"\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8C\x03\x02\x02\x02\u02C9\u02CF\x05" +
		"@!\x02\u02CA\u02CB\x05\u0174\xBB\x02\u02CB\u02CC\x05@!\x02\u02CC\u02CE" +
		"\x03\x02\x02\x02\u02CD\u02CA\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02" +
		"\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0E\x03\x02" +
		"\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D6\x05H%\x02\u02D3\u02D5" +
		"\x07\x81\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5\u02D8\x03\x02\x02\x02" +
		"\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02DA\x03" +
		"\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02D2\x03\x02\x02\x02\u02D9" +
		"\u02DA\x03\x02\x02\x02\u02DAG\x03\x02\x02\x02\u02DB\u02E1\x05J&\x02\u02DC" +
		"\u02DD\x05\u0174\xBB\x02\u02DD\u02DE\x05J&\x02\u02DE\u02E0\x03\x02\x02" +
		"\x02\u02DF\u02DC\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02DF" +
		"\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2I\x03\x02\x02\x02\u02E3" +
		"\u02E1\x03\x02\x02\x02\u02E4\u02E7\x05\xC0a\x02\u02E5\u02E7\t\x05\x02" +
		"\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E7K\x03" +
		"\x02\x02\x02\u02E8\u02EB\x05\xC0a\x02\u02E9\u02EB\t\x06\x02\x02\u02EA" +
		"\u02E8\x03\x02\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EBM\x03\x02\x02" +
		"\x02\u02EC\u02ED\x05P)\x02\u02ED\u02EE\x05\u0174\xBB\x02\u02EE\u02F0\x03" +
		"\x02\x02\x02\u02EF\u02EC\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0" +
		"O\x03\x02\x02\x02\u02F1\u02F7\x05L\'\x02\u02F2\u02F3\x05\u0174\xBB\x02" +
		"\u02F3\u02F4\x05L\'\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F2\x03\x02" +
		"\x02\x02\u02F6\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7" +
		"\u02F8\x03\x02\x02\x02\u02F8Q\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02" +
		"\x02\u02FA\u02FB\x07[\x02\x02\u02FB\u02FC\x05\u0174\xBB\x02\u02FC\u0303" +
		"\x05T+\x02\u02FD\u02FE\x07W\x02\x02\u02FE\u02FF\x05\u0174\xBB\x02\u02FF" +
		"\u0300\x05T+\x02\u0300\u0302\x03\x02\x02\x02\u0301\u02FD\x03\x02\x02\x02" +
		"\u0302\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03" +
		"\x02\x02\x02\u0304\u0306\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306" +
		"\u0307\x05\u0174\xBB\x02\u0307\u0308\x07Z\x02\x02\u0308S\x03\x02\x02\x02" +
		"\u0309\u030E\x05\u016A\xB6\x02\u030A\u030B\x07\x1C\x02\x02\u030B\u030C" +
		"\x05\u0174\xBB\x02\u030C\u030D\x05V,\x02\u030D\u030F\x03\x02\x02\x02\u030E" +
		"\u030A\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030FU\x03\x02\x02" +
		"\x02\u0310\u0317\x05~@\x02\u0311\u0312\x07l\x02\x02\u0312\u0313\x05\u0174" +
		"\xBB\x02\u0313\u0314\x05~@\x02\u0314\u0316\x03\x02\x02\x02\u0315\u0311" +
		"\x03\x02\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02" +
		"\u0317\u0318\x03\x02\x02\x02\u0318W\x03\x02\x02\x02\u0319\u0317\x03\x02" +
		"\x02\x02\u031A\u0321\x05~@\x02\u031B\u031C\x07W\x02\x02\u031C\u031D\x05" +
		"\u0174\xBB\x02\u031D\u031E\x05~@\x02\u031E\u0320\x03\x02\x02\x02\u031F" +
		"\u031B\x03\x02\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321\u031F\x03\x02" +
		"\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322Y\x03\x02\x02\x02\u0323\u0321" +
		"\x03\x02\x02\x02\u0324\u0325\x07\x15\x02\x02\u0325\u0330\b.\x01\x02\u0326" +
		"\u0327\x07%\x02\x02\u0327\u0330\b.\x01\x02\u0328\u0329\x07\x1B\x02\x02" +
		"\u0329\u0330\b.\x01\x02\u032A\u032B\x07~\x02\x02\u032B\u032C\x07%\x02" +
		"\x02\u032C\u0330\b.\x01\x02\u032D\u032E\x07\f\x02\x02\u032E\u0330\b.\x01" +
		"\x02\u032F\u0324\x03\x02\x02\x02\u032F\u0326\x03\x02\x02\x02\u032F\u0328" +
		"\x03\x02\x02\x02\u032F\u032A\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02" +
		"\u0330\u0331\x03\x02\x02\x02\u0331\u0335\x05\u016C\xB7\x02\u0332\u0333" +
		"\x05\u0174\xBB\x02\u0333\u0334\x05R*\x02\u0334\u0336\x03\x02\x02\x02\u0335" +
		"\u0332\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u033C\x03\x02" +
		"\x02\x02\u0337\u0338\x05\u0174\xBB\x02\u0338\u0339\x07\x1C\x02\x02\u0339" +
		"\u033A\x05\u0174\xBB\x02\u033A\u033B\x05X-\x02\u033B\u033D\x03\x02\x02" +
		"\x02\u033C\u0337\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u0343" +
		"\x03\x02\x02\x02\u033E\u033F\x05\u0174\xBB\x02\u033F\u0340\x07\"\x02\x02" +
		"\u0340\u0341\x05\u0174\xBB\x02\u0341\u0342\x05X-\x02\u0342\u0344\x03\x02" +
		"\x02\x02\u0343\u033E\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344" +
		"\u0345\x03\x02\x02\x02\u0345\u0346\x05\u0174\xBB\x02\u0346\u0347\x05\\" +
		"/\x02\u0347[\x03\x02\x02\x02\u0348\u0349\x07R\x02\x02\u0349\u0355\x05" +
		"\u0174\xBB\x02\u034A\u034B\x06/\x03\x03\u034B\u034F\x05^0\x02\u034C\u034D" +
		"\x05\u0174\xBB\x02\u034D\u034E\x07W\x02\x02\u034E\u0350\x03\x02\x02\x02" +
		"\u034F\u034C\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0352\x03" +
		"\x02\x02\x02\u0351\u0353\x05\u0176\xBC\x02\u0352\u0351\x03\x02\x02\x02" +
		"\u0352\u0353\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0356\x03" +
		"\x02\x02\x02\u0355\u034A\x03\x02\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356" +
		"\u0360\x03\x02\x02\x02\u0357\u035D\x05b2\x02\u0358\u0359\x05\u0176\xBC" +
		"\x02\u0359\u035A\x05b2\x02\u035A\u035C\x03\x02\x02\x02\u035B\u0358\x03" +
		"\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D\u035B\x03\x02\x02\x02\u035D" +
		"\u035E\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03\x02" +
		"\x02\x02\u0360\u0357\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361" +
		"\u0363\x03\x02\x02\x02\u0362\u0364\x05\u0176\xBC\x02\u0363\u0362\x03\x02" +
		"\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365" +
		"\u0366\x07S\x02\x02\u0366]\x03\x02\x02\x02\u0367\u036F\x05`1\x02\u0368" +
		"\u0369\x05\u0174\xBB\x02\u0369\u036A\x07W\x02\x02\u036A\u036B\x05\u0174" +
		"\xBB\x02\u036B\u036C\x05`1\x02\u036C\u036E\x03\x02\x02\x02\u036D\u0368" +
		"\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02" +
		"\u036F\u0370\x03\x02\x02\x02\u0370_\x03\x02\x02\x02\u0371\u036F\x03\x02" +
		"\x02\x02\u0372\u0373\x05\xBE`\x02\u0373\u0375\x05\u016C\xB7\x02\u0374" +
		"\u0376\x05\u0158\xAD\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02" +
		"\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u0379\x05\u0150\xA9\x02\u0378" +
		"\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379a\x03\x02\x02" +
		"\x02\u037A\u037B\x07-\x02\x02\u037B\u037D\x05\u0174\xBB\x02\u037C\u037A" +
		"\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02" +
		"\u037E\u0381\x05\xD0i\x02\u037F\u0381\x05d3\x02\u0380\u037C\x03\x02\x02" +
		"\x02\u0380\u037F\x03\x02\x02\x02\u0381c\x03\x02\x02\x02\u0382\u0388\x05" +
		"f4\x02\u0383\u0388\x05l7\x02\u0384\u0385\x05B\"\x02\u0385\u0386\x05Z." +
		"\x02\u0386\u0388\x03\x02\x02\x02\u0387\u0382\x03\x02\x02\x02\u0387\u0383" +
		"\x03\x02\x02\x02\u0387\u0384\x03\x02\x02\x02\u0388e\x03\x02\x02\x02\u0389" +
		"\u038B\x05B\"\x02\u038A\u038C\x05R*\x02\u038B\u038A\x03\x02\x02\x02\u038B" +
		"\u038C\x03\x02\x02\x02\u038C\u0390\x03\x02\x02\x02\u038D\u038E\x05j6\x02" +
		"\u038E\u038F\x05\u0174\xBB\x02\u038F\u0391\x03\x02\x02\x02\u0390\u038D" +
		"\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02" +
		"\u0392\u0393\x05h5\x02\u0393\u03A4\x05\x90I\x02\u0394\u0395\x07\x18\x02" +
		"\x02\u0395\u0396\x05\u0174\xBB";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0396\u0397\x05\xCCg\x02\u0397\u03A5\x03\x02\x02\x02\u0398\u0399" +
		"\x05\u0174\xBB\x02\u0399\u039A\x074\x02\x02\u039A\u039B\x05\u0174\xBB" +
		"\x02\u039B\u039C\x05\x8EH\x02\u039C\u039E\x03\x02\x02\x02\u039D\u0398" +
		"\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A2\x03\x02\x02\x02" +
		"\u039F\u03A0\x05\u0174\xBB\x02\u03A0\u03A1\x05\x98M\x02\u03A1\u03A3\x03" +
		"\x02\x02\x02\u03A2\u039F\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3" +
		"\u03A5\x03\x02\x02\x02\u03A4\u0394\x03\x02\x02\x02\u03A4\u039D\x03\x02" +
		"\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5g\x03\x02\x02\x02\u03A6\u03A9" +
		"\x05\u016C\xB7\x02\u03A7\u03A9\x05\u0168\xB5\x02\u03A8\u03A6\x03\x02\x02" +
		"\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9i\x03\x02\x02\x02\u03AA\u03AD\x05" +
		"|?\x02\u03AB\u03AD\x077\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AB" +
		"\x03\x02\x02\x02\u03ADk\x03\x02\x02\x02\u03AE\u03AF\x05\xD6l\x02\u03AF" +
		"m\x03\x02\x02\x02\u03B0\u03B7\x05p9\x02\u03B1\u03B2\x07W\x02\x02\u03B2" +
		"\u03B3\x05\u0174\xBB\x02\u03B3\u03B4\x05p9\x02\u03B4\u03B6\x03\x02\x02" +
		"\x02\u03B5\u03B1\x03\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03B5" +
		"\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8o\x03\x02\x02\x02\u03B9" +
		"\u03B7\x03\x02\x02\x02\u03BA\u03C0\x05r:\x02\u03BB\u03BC\x05\u0174\xBB" +
		"\x02\u03BC\u03BD\x07Y\x02\x02\u03BD\u03BE\x05\u0174\xBB\x02\u03BE\u03BF" +
		"\x05t;\x02\u03BF\u03C1\x03\x02\x02\x02\u03C0\u03BB\x03\x02\x02\x02\u03C0" +
		"\u03C1\x03\x02\x02\x02\u03C1q\x03\x02\x02\x02\u03C2\u03C3\x05\u016C\xB7" +
		"\x02\u03C3s\x03\x02\x02\x02\u03C4\u03C5\x05\u0114\x8B\x02\u03C5u\x03\x02" +
		"\x02\x02\u03C6\u03CE\x05t;\x02\u03C7\u03C8\x05\u0174\xBB\x02\u03C8\u03C9" +
		"\x07W\x02\x02\u03C9\u03CA\x05\u0174\xBB\x02\u03CA\u03CB\x05t;\x02\u03CB" +
		"\u03CD\x03\x02\x02\x02\u03CC\u03C7\x03\x02\x02\x02\u03CD\u03D0\x03\x02" +
		"\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF" +
		"\u03D1\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x05\u0174" +
		"\xBB\x02\u03D2\u03D4\x07W\x02\x02\u03D3\u03D2\x03\x02\x02\x02\u03D3\u03D4" +
		"\x03\x02\x02\x02\u03D4w\x03\x02\x02\x02\u03D5\u03D6\x05\xBE`\x02\u03D6" +
		"\u03D7\x07T\x02\x02\u03D7\u03D8\x07U\x02\x02\u03D8\u03DA\x03\x02\x02\x02" +
		"\u03D9\u03D5\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03D9\x03" +
		"\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DCy\x03\x02\x02\x02\u03DD" +
		"\u03DF\x05x=\x02\u03DE\u03DD\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02" +
		"\u03DF{\x03\x02\x02\x02\u03E0\u03E3\x05\xBE`\x02\u03E1\u03E4\x05\x86D" +
		"\x02\u03E2\u03E4\x05\x84C\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E2" +
		"\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x05z>\x02\u03E6" +
		"}\x03\x02\x02\x02\u03E7\u03ED\x05\xBE`\x02\u03E8\u03EB\x05\x86D\x02\u03E9" +
		"\u03EB\x077\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EA\u03E9\x03\x02\x02" +
		"\x02\u03EB\u03EE\x03\x02\x02\x02\u03EC\u03EE\x05\x82B\x02\u03ED\u03EA" +
		"\x03\x02\x02\x02\u03ED\u03EC\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02" +
		"\u03EF\u03F0\x05z>\x02\u03F0\x7F\x03\x02\x02\x02\u03F1\u03F4\x05\xA0Q" +
		"\x02\u03F2\u03F4\x05\xA2R\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2" +
		"\x03\x02\x02\x02\u03F4\u03F6\x03\x02\x02\x02\u03F5\u03F7\x05\x88E\x02" +
		"\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\x81\x03" +
		"\x02\x02\x02\u03F8\u03FA\x05\xA0Q\x02\u03F9\u03FB\x05\x88E\x02\u03FA\u03F9" +
		"\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\x83\x03\x02\x02\x02" +
		"\u03FC\u03FE\x05\xA2R\x02\u03FD\u03FF\x05\x88E\x02\u03FE\u03FD\x03\x02" +
		"\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\x85\x03\x02\x02\x02\u0400\u0401" +
		"\x07\x0F\x02\x02\u0401\x87\x03\x02\x02\x02\u0402\u0403\x07[\x02\x02\u0403" +
		"\u0404\x05\u0174\xBB\x02\u0404\u040B\x05\x8AF\x02\u0405\u0406\x07W\x02" +
		"\x02\u0406\u0407\x05\u0174\xBB\x02\u0407\u0408\x05\x8AF\x02\u0408\u040A" +
		"\x03\x02\x02\x02\u0409\u0405\x03\x02\x02\x02\u040A\u040D\x03\x02\x02\x02" +
		"\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040E\x03" +
		"\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E\u040F\x05\u0174\xBB\x02" +
		"\u040F\u0410\x07Z\x02\x02\u0410\x89\x03\x02\x02\x02\u0411\u041B\x05~@" +
		"\x02\u0412\u0413\x05\xBE`\x02\u0413\u0418\x07^\x02\x02\u0414\u0415\t\x07" +
		"\x02\x02\u0415\u0416\x05\u0174\xBB\x02\u0416\u0417\x05~@\x02\u0417\u0419" +
		"\x03\x02\x02\x02\u0418\u0414\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02" +
		"\u0419\u041B\x03\x02\x02\x02\u041A\u0411\x03\x02\x02\x02\u041A\u0412\x03" +
		"\x02\x02\x02\u041B\x8B\x03\x02\x02\x02\u041C\u041D\x05\xBE`\x02\u041D" +
		"\u041E\x05\xA0Q\x02\u041E\x8D\x03\x02\x02\x02\u041F\u0426\x05\x8CG\x02" +
		"\u0420\u0421\x07W\x02\x02\u0421\u0422\x05\u0174\xBB\x02\u0422\u0423\x05" +
		"\x8CG\x02\u0423\u0425\x03\x02\x02\x02\u0424\u0420\x03\x02\x02\x02\u0425" +
		"\u0428\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02" +
		"\x02\x02\u0427\x8F\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0429\u042B" +
		"\x07P\x02\x02\u042A\u042C\x05\x92J\x02\u042B\u042A\x03\x02\x02\x02\u042B" +
		"\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x05\u0172" +
		"\xBA\x02\u042E\x91\x03\x02\x02\x02\u042F\u0432\x05\x96L\x02\u0430\u0432" +
		"\x05\x94K\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0430\x03\x02\x02\x02" +
		"\u0432\u0439\x03\x02\x02\x02\u0433\u0434\x07W\x02\x02\u0434\u0435\x05" +
		"\u0174\xBB\x02\u0435\u0436\x05\x96L\x02\u0436\u0438\x03\x02\x02\x02\u0437" +
		"\u0433\x03\x02\x02\x02\u0438\u043B\x03\x02\x02\x02\u0439\u0437\x03\x02" +
		"\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\x93\x03\x02\x02\x02\u043B\u0439" +
		"\x03\x02\x02\x02\u043C\u043D\x05~@\x02\u043D\u043E\x072\x02\x02\u043E" +
		"\x95\x03\x02\x02\x02\u043F\u0441\x05N(\x02\u0440\u0442\x05~@\x02\u0441" +
		"\u0440\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0444\x03\x02" +
		"\x02\x02\u0443\u0445\x07\x7F\x02\x02\u0444\u0443\x03\x02\x02\x02\u0444" +
		"\u0445\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u044C\x05r:\x02" +
		"\u0447\u0448\x05\u0174\xBB\x02\u0448\u0449\x07Y\x02\x02\u0449\u044A\x05" +
		"\u0174\xBB\x02\u044A\u044B\x05\u011A\x8E\x02\u044B\u044D\x03\x02\x02\x02" +
		"\u044C\u0447\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\x97\x03" +
		"\x02\x02\x02\u044E\u044F\x05\xD0i\x02\u044F\x99\x03\x02\x02\x02\u0450" +
		"\u0455\x05\x9CO\x02\u0451\u0452\x07X\x02\x02\u0452\u0454\x05\x9CO\x02" +
		"\u0453\u0451\x03\x02\x02\x02\u0454\u0457\x03\x02\x02\x02\u0455\u0453\x03" +
		"\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\x9B\x03\x02\x02\x02\u0457" +
		"\u0455\x03\x02\x02\x02\u0458\u045E\x05\u016C\xB7\x02\u0459\u045E\x07\n" +
		"\x02\x02\u045A\u045E\x07\v\x02\x02\u045B\u045E\x07\t\x02\x02\u045C\u045E" +
		"\x07\f\x02\x02\u045D\u0458\x03\x02\x02\x02\u045D\u0459\x03\x02\x02\x02" +
		"\u045D\u045A\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045C\x03" +
		"\x02\x02\x02\u045E\x9D\x03\x02\x02\x02\u045F\u0460\x05\x9CO\x02\u0460" +
		"\u0461\x07X\x02\x02\u0461\u0463\x03\x02\x02\x02\u0462\u045F\x03\x02\x02" +
		"\x02\u0463\u0466\x03\x02\x02\x02\u0464\u0462\x03\x02\x02\x02\u0464\u0465" +
		"\x03\x02\x02\x02\u0465\x9F\x03\x02\x02\x02\u0466\u0464\x03\x02\x02\x02" +
		"\u0467\u0468\x05\x9EP\x02\u0468\u0469\x05\u016C\xB7\x02\u0469\xA1\x03" +
		"\x02\x02\x02\u046A\u046B\x05\x9EP\x02\u046B\u0470\x05\u016A\xB6\x02\u046C" +
		"\u046D\x07X\x02\x02\u046D\u046F\x05\u016A\xB6\x02\u046E\u046C\x03\x02" +
		"\x02\x02\u046F\u0472\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0470" +
		"\u0471\x03\x02\x02\x02\u0471\xA3\x03\x02\x02\x02\u0472\u0470\x03\x02\x02" +
		"\x02\u0473\u0479\x07:\x02\x02\u0474\u0479\x07;\x02\x02\u0475\u0479\x05" +
		"\u0168\xB5\x02\u0476\u0479\x07<\x02\x02\u0477\u0479\x07=\x02\x02\u0478" +
		"\u0473\x03\x02\x02\x02\u0478\u0474\x03\x02\x02\x02\u0478\u0475\x03\x02" +
		"\x02\x02\u0478\u0476\x03\x02\x02\x02\u0478\u0477\x03\x02\x02\x02\u0479" +
		"\xA5\x03\x02\x02\x02\u047A\u047B\x07\x04\x02\x02\u047B\u0480\x05\xA8U" +
		"\x02\u047C\u047D\x07\x06\x02\x02\u047D\u047F\x05\xA8U\x02\u047E\u047C" +
		"\x03\x02\x02\x02\u047F\u0482\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02" +
		"\u0480\u0481\x03\x02\x02\x02\u0481\u0483\x03\x02\x02\x02\u0482\u0480\x03" +
		"\x02\x02\x02\u0483\u0484\x07\x05\x02\x02\u0484\xA7\x03\x02\x02\x02\u0485" +
		"\u0488\x05\xAAV\x02\u0486\u0488\x05\xB6\\\x02\u0487\u0485\x03\x02\x02" +
		"\x02\u0487\u0486\x03\x02\x02\x02\u0488\xA9\x03\x02\x02\x02\u0489\u048D" +
		"\x05\u016C\xB7\x02\u048A\u048C\x07\x07\x02\x02\u048B\u048A\x03\x02\x02" +
		"\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D\u048E" +
		"\x03\x02\x02\x02\u048E\xAB\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02" +
		"\u0490\u0491\x05\xB0Y\x02\u0491\u0492\x05\u0174\xBB\x02\u0492\u0493\x07" +
		"M\x02\x02\u0493\u0494\x05\u0174\xBB\x02\u0494\u0495\x05\xB4[\x02\u0495" +
		"\xAD\x03\x02\x02\x02\u0496\u0497\x05\xB2Z\x02\u0497\u0498\x05\u0174\xBB" +
		"\x02\u0498\u0499\x07M\x02\x02\u0499\u049A\x05\u0174\xBB\x02\u049A\u049B" +
		"\x05\xB4[\x02\u049B\xAF\x03\x02\x02\x02\u049C\u049D\x05\x90I\x02\u049D" +
		"\xB1\x03\x02\x02\x02\u049E\u04A1\x05\x90I\x02\u049F\u04A1\x05r:\x02\u04A0" +
		"\u049E\x03\x02\x02\x02\u04A0\u049F\x03\x02\x02\x02\u04A1\xB3\x03\x02\x02" +
		"\x02\u04A2\u04A5\x05\xD0i\x02\u04A3\u04A5\x05\u0116\x8C\x02\u04A4\u04A2" +
		"\x03\x02\x02\x02\u04A4\u04A3\x03\x02\x02\x02\u04A5\xB5\x03\x02\x02\x02" +
		"\u04A6\u04AF\x07R\x02\x02\u04A7\u04AB\x05\u0174\xBB\x02\u04A8\u04A9\x05" +
		"\x92J\x02\u04A9\u04AA\x05\u0174\xBB\x02\u04AA\u04AC\x03\x02\x02\x02\u04AB" +
		"\u04A8\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x03\x02" +
		"\x02\x02\u04AD\u04AE\x07M\x02\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04A7" +
		"\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B2\x03\x02\x02\x02" +
		"\u04B1\u04B3\x05\u0176\xBC\x02\u04B2\u04B1\x03\x02\x02\x02\u04B2\u04B3" +
		"\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B5\x05\xBA^\x02" +
		"\u04B5\u04B6\x07S\x02\x02\u04B6\xB7\x03\x02\x02\x02\u04B7\u04BA\x05\xB6" +
		"\\\x02\u04B8\u04BA\x05\xACW\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9\u04B8" +
		"\x03\x02\x02\x02\u04BA\xB9\x03\x02\x02\x02\u04BB\u04BD\x05\xBC_\x02\u04BC" +
		"\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\xBB\x03\x02\x02" +
		"\x02\u04BE\u04C4\x05\xD2j\x02\u04BF\u04C0\x05\u0176\xBC\x02\u04C0\u04C1" +
		"\x05\xD2j\x02\u04C1\u04C3\x03\x02\x02\x02\u04C2\u04BF\x03\x02\x02\x02" +
		"\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03" +
		"\x02\x02\x02\u04C5\u04C8\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7" +
		"\u04C9\x05\u0176\xBC\x02\u04C8\u04C7\x03\x02\x02\x02\u04C8\u04C9\x03\x02" +
		"\x02\x02\u04C9\xBD\x03\x02\x02\x02\u04CA\u04D0\x05\xC0a\x02\u04CB\u04CC" +
		"\x05\u0174\xBB\x02\u04CC\u04CD\x05\xC0a\x02\u04CD\u04CF\x03\x02\x02\x02" +
		"\u04CE\u04CB\x03\x02\x02\x02\u04CF\u04D2\x03\x02\x02\x02\u04D0\u04CE\x03" +
		"\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1\u04D3\x03\x02\x02\x02\u04D2" +
		"\u04D0\x03\x02\x02\x02\u04D3\u04D4\x05\u0174\xBB\x02\u04D4\u04D6\x03\x02" +
		"\x02\x02\u04D5\u04CA\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6" +
		"\xBF\x03\x02\x02\x02\u04D7\u04D8\x07~\x02\x02\u04D8\u04E0\x05\xC4c\x02" +
		"\u04D9\u04DA\x05\u0174\xBB\x02\u04DA\u04DC\x07P\x02\x02\u04DB\u04DD\x05" +
		"\xC2b\x02\u04DC\u04DB\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD" +
		"\u04DE\x03\x02\x02\x02\u04DE\u04DF\x05\u0172\xBA\x02\u04DF\u04E1\x03\x02" +
		"\x02\x02\u04E0\u04D9\x03\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1" +
		"\xC1\x03\x02\x02\x02\u04E2\u04E5\x05\xC6d\x02\u04E3\u04E5\x05\xCCg\x02" +
		"\u04E4\u04E2\x03\x02\x02\x02\u04E4\u04E3\x03\x02\x02\x02\u04E5\xC3\x03" +
		"\x02\x02\x02\u04E6\u04E7\x05\xA0Q\x02\u04E7\xC5\x03\x02\x02\x02\u04E8" +
		"\u04ED\x05\xC8e\x02\u04E9\u04EA\x07W\x02\x02\u04EA\u04EC\x05\xC8e\x02" +
		"\u04EB\u04E9\x03\x02\x02\x02\u04EC\u04EF\x03\x02\x02\x02\u04ED\u04EB\x03" +
		"\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\xC7\x03\x02\x02\x02\u04EF" +
		"\u04ED\x03\x02\x02\x02\u04F0\u04F1\x05\xCAf\x02\u04F1\u04F2\x05\u0174" +
		"\xBB\x02\u04F2\u04F3\x07Y\x02\x02\u04F3\u04F4\x05\u0174\xBB\x02\u04F4" +
		"\u04F5\x05\xCCg\x02\u04F5\xC9\x03\x02\x02\x02\u04F6\u04F9\x05\u016C\xB7" +
		"\x02\u04F7\u04F9\x05\u0170\xB9\x02\u04F8\u04F6\x03\x02\x02\x02\u04F8\u04F7" +
		"\x03\x02\x02\x02\u04F9\xCB\x03\x02\x02\x02\u04FA\u04FE\x05\xCEh\x02\u04FB" +
		"\u04FE\x05\xC0a\x02\u04FC\u04FE\x05\u011A\x8E\x02\u04FD\u04FA\x03\x02" +
		"\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FC\x03\x02\x02\x02\u04FE" +
		"\xCD\x03\x02\x02\x02\u04FF\u050B\x07T\x02\x02\u0500\u0505\x05\xCCg\x02" +
		"\u0501\u0502\x07W\x02\x02\u0502\u0504\x05\xCCg\x02\u0503\u0501\x03\x02" +
		"\x02\x02\u0504\u0507\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0505" +
		"\u0506\x03\x02\x02\x02\u0506\u0509\x03\x02\x02\x02\u0507\u0505\x03\x02" +
		"\x02\x02\u0508\u050A\x07W\x02\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A" +
		"\x03\x02\x02\x02\u050A\u050C\x03\x02\x02\x02\u050B\u0500\x03\x02\x02\x02" +
		"\u050B\u050C\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x07" +
		"U\x02\x02\u050E\xCF\x03\x02\x02\x02\u050F\u0511\x07R\x02\x02\u0510\u0512" +
		"\x05\u0176\xBC\x02\u0511\u0510\x03\x02\x02\x02\u0511\u0512\x03\x02\x02" +
		"\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0514\x05\xBA^\x02\u0514\u0515" +
		"\x07S\x02\x02\u0515\xD1\x03\x02\x02\x02\u0516\u0519\x05\xD4k\x02\u0517" +
		"\u0519\x05\xEEx\x02\u0518\u0516\x03\x02\x02\x02\u0518\u0517\x03\x02\x02" +
		"\x02\u0519\xD3\x03\x02\x02\x02\u051A\u051B\x06k\x04\x02\u051B\u051C\x05" +
		"\xD6l\x02\u051C\xD5\x03\x02\x02\x02\u051D\u051E\x05D#\x02\u051E\u0529" +
		"\x05\u0174\xBB\x02\u051F\u0521\x05~@\x02\u0520\u051F\x03\x02\x02\x02\u0520" +
		"\u0521\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u052A\x05n8\x02" +
		"\u0523\u0524\x05\xD8m\x02\u0524\u0525\x05\u0174\xBB\x02\u0525\u0526\x07" +
		"Y\x02\x02\u0526\u0527\x05\u0174\xBB\x02\u0527\u0528\x05t;\x02\u0528\u052A" +
		"\x03\x02\x02\x02\u0529\u0520\x03\x02\x02\x02\u0529\u0523\x03\x02\x02\x02" +
		"\u052A\u052F\x03\x02\x02\x02\u052B\u052C\x05~@\x02\u052C\u052D\x05n8\x02" +
		"\u052D\u052F\x03\x02\x02\x02\u052E\u051D\x03\x02\x02\x02\u052E\u052B\x03" +
		"\x02\x02\x02\u052F\xD7\x03\x02\x02\x02\u0530\u0531\x07P\x02\x02\u0531" +
		"\u0536\x05\xDAn\x02\u0532\u0533\x07W\x02\x02\u0533\u0535\x05\xDAn\x02" +
		"\u0534\u0532\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02\u0536\u0534\x03" +
		"\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0539\x03\x02\x02\x02\u0538" +
		"\u0536\x03\x02\x02\x02\u0539\u053A\x05\u0172\xBA\x02\u053A\xD9\x03\x02" +
		"\x02\x02\u053B\u053D\x05~@\x02\u053C\u053B\x03\x02\x02\x02\u053C\u053D" +
		"\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u053F\x05r:\x02\u053F" +
		"\xDB\x03\x02\x02\x02\u0540\u0541\x07P\x02\x02\u0541\u0544\x05r:\x02\u0542" +
		"\u0543\x07W\x02\x02\u0543\u0545\x05r:\x02\u0544\u0542\x03\x02\x02\x02" +
		"\u0545\u0546\x03\x02\x02\x02\u0546\u0544\x03\x02\x02\x02\u0546\u0547\x03" +
		"\x02\x02\x02\u0547\u0548\x03\x02\x02\x02\u0548\u0549\x05\u0172\xBA\x02" +
		"\u0549\xDD\x03\x02\x02\x02\u054A\u054D\x05\xE0q\x02\u054B\u054D\x05\xE2" +
		"r\x02\u054C\u054A\x03\x02\x02\x02\u054C\u054B\x03\x02\x02\x02\u054D\xDF" +
		"\x03\x02\x02\x02\u054E\u054F\x07 \x02\x02\u054F\u0550\x05\u010E\x88\x02" +
		"\u0550\u0551\x05\u0174\xBB\x02\u0551\u055A\x05\xEEx\x02\u0552\u0555\x05" +
		"\u0174\xBB\x02\u0553\u0555\x05\u0176\xBC\x02\u0554\u0552\x03\x02\x02\x02" +
		"\u0554\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\u0557\x07" +
		"\x1A\x02\x02\u0557\u0558\x05\u0174\xBB\x02\u0558\u0559\x05\xEEx\x02\u0559" +
		"\u055B\x03\x02\x02\x02\u055A\u0554\x03\x02\x02\x02\u055A\u055B\x03\x02" +
		"\x02\x02\u055B\xE1\x03\x02\x02\x02\u055C\u055D\x070\x02\x02\u055D\u055E" +
		"\x05\u010E\x88\x02\u055E\u055F\x05\u0174\xBB\x02\u055F\u0560\x07R\x02" +
		"\x02\u0560\u0568\x05\u0174\xBB\x02\u0561\u0563\x05\xFC\x7F\x02\u0562\u0561" +
		"\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02" +
		"\u0564\u0565\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0567\x05" +
		"\u0174\xBB\x02\u0567\u0569\x03\x02\x02\x02\u0568\u0562\x03\x02\x02\x02" +
		"\u0568\u0569\x03\x02\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\u056B\x07" +
		"S\x02\x02\u056B\xE3\x03\x02\x02\x02\u056C\u056D\x07\x1F\x02\x02\u056D" +
		"\u056E\x07P\x02\x02\u056E\u056F\x05\u0100\x81\x02\u056F\u0570\x05\u0172" +
		"\xBA\x02\u0570\u0571\x05\u0174\xBB\x02\u0571\u0572\x05\xEEx\x02\u0572" +
		"\u0580\x03\x02\x02\x02\u0573\u0574\x079\x02\x02\u0574\u0575\x05\u010E" +
		"\x88\x02\u0575\u0576\x05\u0174\xBB\x02\u0576\u0577\x05\xEEx\x02\u0577" +
		"\u0580\x03\x02\x02\x02\u0578\u0579\x07\x19\x02\x02\u0579\u057A\x05\u0174" +
		"\xBB\x02\u057A\u057B\x05\xEEx\x02\u057B\u057C\x05\u0174\xBB\x02\u057C" +
		"\u057D\x079\x02\x02\u057D\u057E\x05\u010E\x88\x02\u057E\u0580\x03\x02" +
		"\x02\x02\u057F\u056C\x03\x02\x02\x02\u057F\u0573\x03\x02\x02\x02\u057F" +
		"\u0578\x03\x02\x02\x02\u0580\xE5\x03\x02\x02\x02\u0581\u0583\x07\x17\x02" +
		"\x02\u0582\u0584\x05\u016C\xB7\x02\u0583\u0582\x03\x02\x02\x02\u0583\u0584" +
		"\x03\x02\x02\x02\u0584\xE7\x03\x02\x02\x02\u0585\u0587\x07\x12\x02\x02" +
		"\u0586\u0588\x05\u016C\xB7\x02\u0587\u0586\x03\x02\x02\x02\u0587\u0588" +
		"\x03\x02\x02\x02\u0588\xE9\x03\x02\x02\x02\u0589\u058B\x076\x02\x02\u058A" +
		"\u058C\x05\xF6|\x02\u058B\u058A\x03\x02\x02\x02\u058B\u058C\x03\x02\x02" +
		"\x02\u058C\u058D\x03\x02\x02\x02\u058D\u058E\x05\u0174\xBB\x02\u058E\u0594" +
		"\x05\xD0i\x02\u058F\u0590\x05\u0174\xBB\x02\u0590\u0591\x05\xF0y\x02\u0591" +
		"\u0593\x03\x02\x02\x02\u0592\u058F\x03\x02\x02\x02\u0593\u0596\x03\x02" +
		"\x02\x02\u0594\u0592\x03\x02\x02\x02\u0594\u0595\x03\x02\x02\x02\u0595" +
		"\u059A\x03\x02\x02\x02\u0596\u0594\x03\x02\x02\x02\u0597\u0598\x05\u0174" +
		"\xBB\x02\u0598\u0599\x05\xF4{\x02\u0599\u059B\x03\x02\x02\x02\u059A\u0597" +
		"\x03\x02\x02\x02\u059A\u059B\x03\x02\x02\x02\u059B\xEB\x03\x02\x02\x02" +
		"\u059C\u059D\x07\x11\x02\x02\u059D\u05A3\x05\u011A\x8E\x02\u059E\u059F" +
		"\x05\u0174\xBB\x02\u059F\u05A0\t\b\x02\x02\u05A0\u05A1\x05\u0174\xBB\x02" +
		"\u05A1\u05A2\x05\u011A\x8E\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u059E" +
		"\x03\x02\x02\x02\u05A3\u05A4\x03\x02\x02\x02\u05A4\xED\x03\x02\x02\x02" +
		"\u05A5\u05C0\x05\xD0i\x02\u05A6\u05C0\x05\xDEp\x02\u05A7\u05C0\x05\xE4" +
		"s\x02\u05A8\u05C0\x05\xEAv\x02\u05A9\u05AA\x071\x02\x02\u05AA\u05AB\x05" +
		"\u010E\x88\x02\u05AB\u05AC\x05\u0174\xBB\x02\u05AC\u05AD\x05\xD0i\x02" +
		"\u05AD\u05C0\x03\x02\x02\x02\u05AE\u05B0\x07,\x02\x02\u05AF\u05B1\x05" +
		"\u011A\x8E\x02\u05B0\u05AF\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02" +
		"\u05B1\u05C0\x03\x02\x02\x02\u05B2\u05B3\x073\x02\x02\u05B3\u05C0\x05" +
		"\u011A\x8E\x02\u05B4\u05C0\x05\xE8u\x02\u05B5\u05C0\x05\xE6t\x02\u05B6" +
		"\u05B7\x05\u016C\xB7\x02\u05B7\u05B8\x07_\x02\x02\u05B8\u05B9\x05\u0174" +
		"\xBB\x02\u05B9\u05BA\x05\xEEx\x02\u05BA\u05C0\x03\x02\x02\x02\u05BB\u05C0" +
		"\x05\xECw\x02\u05BC\u05C0\x05\xD4k\x02\u05BD\u05C0\x05\u0116\x8C\x02\u05BE" +
		"\u05C0\x07V\x02\x02\u05BF\u05A5\x03\x02\x02\x02\u05BF\u05A6\x03\x02\x02" +
		"\x02\u05BF\u05A7\x03\x02\x02\x02\u05BF\u05A8\x03\x02\x02\x02\u05BF\u05A9" +
		"\x03\x02\x02\x02\u05BF\u05AE\x03\x02\x02\x02\u05BF\u05B2\x03\x02\x02\x02" +
		"\u05BF\u05B4\x03\x02\x02\x02\u05BF\u05B5\x03\x02\x02\x02\u05BF\u05B6\x03" +
		"\x02\x02\x02\u05BF\u05BB\x03\x02\x02\x02\u05BF\u05BC\x03\x02\x02\x02\u05BF" +
		"\u05BD\x03\x02\x02\x02\u05BF\u05BE\x03\x02\x02\x02\u05C0\xEF\x03\x02\x02" +
		"\x02\u05C1\u05C2\x07\x14\x02\x02\u05C2\u05C3\x07P\x02\x02\u05C3\u05C5" +
		"\x05N(\x02\u05C4\u05C6\x05\xF2z\x02\u05C5\u05C4\x03\x02\x02\x02\u05C5" +
		"\u05C6\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C8\x05\u016C" +
		"\xB7\x02\u05C8\u05C9\x05\u0172\xBA\x02\u05C9\u05CA\x05\u0174\xBB\x02\u05CA" +
		"\u05CB\x05\xD0i\x02\u05CB\xF1\x03\x02\x02\x02\u05CC\u05D1\x05\xA0Q\x02" +
		"\u05CD\u05CE\x07m\x02\x02\u05CE\u05D0\x05\xA0Q\x02\u05CF\u05CD\x03\x02" +
		"\x02\x02\u05D0\u05D3\x03\x02\x02\x02\u05D1\u05CF\x03\x02\x02\x02\u05D1" +
		"\u05D2\x03\x02\x02\x02\u05D2\xF3\x03\x02\x02\x02\u05D3\u05D1\x03\x02\x02" +
		"\x02\u05D4\u05D5\x07\x1E\x02\x02\u05D5\u05D6\x05\u0174\xBB\x02\u05D6\u05D7" +
		"\x05\xD0i\x02\u05D7\xF5\x03\x02\x02\x02\u05D8\u05D9\x07P\x02\x02\u05D9" +
		"\u05DA\x05\u0174\xBB\x02\u05DA\u05DC\x05\xF8}\x02\u05DB\u05DD\x05\u0176" +
		"\xBC\x02\u05DC\u05DB\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD" +
		"\u05DE\x03\x02\x02\x02\u05DE\u05DF\x05\u0172\xBA\x02\u05DF\xF7\x03\x02" +
		"\x02\x02\u05E0\u05E6\x05\xFA~\x02\u05E1\u05E2\x05\u0176\xBC\x02\u05E2" +
		"\u05E3\x05\xFA~\x02\u05E3\u05E5\x03\x02\x02\x02\u05E4\u05E1\x03\x02\x02" +
		"\x02\u05E5\u05E8\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E6\u05E7" +
		"\x03\x02\x02\x02\u05E7\xF9\x03\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02" +
		"\u05E9\u05EC\x05\xD4k\x02\u05EA\u05EC\x05\u011A\x8E\x02\u05EB\u05E9\x03" +
		"\x02\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC\xFB\x03\x02\x02\x02\u05ED" +
		"\u05F3\x05\xFE\x80\x02\u05EE\u05EF\x05\u0174\xBB\x02\u05EF\u05F0\x05\xFE" +
		"\x80\x02\u05F0\u05F2\x03\x02\x02\x02\u05F1\u05EE\x03\x02\x02\x02\u05F2" +
		"\u05F5\x03\x02\x02\x02\u05F3\u05F1\x03\x02\x02\x02\u05F3\u05F4\x03\x02" +
		"\x02\x02\u05F4\u05F6\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F6" +
		"\u05F7\x05\u0174\xBB\x02\u05F7\u05F8\x05\xBC_\x02\u05F8\xFD\x03\x02\x02" +
		"\x02\u05F9\u05FA\x07\x13\x02\x02\u05FA\u05FB\x05\u011A\x8E\x02\u05FB\u05FC" +
		"\x07_\x02\x02\u05FC\u0600\x03\x02\x02\x02\u05FD\u05FE\x07\x18\x02\x02" +
		"\u05FE\u0600\x07_\x02\x02\u05FF\u05F9\x03\x02\x02\x02\u05FF\u05FD\x03" +
		"\x02\x02\x02\u0600\xFF\x03\x02\x02\x02\u0601\u0604\x05\u0102\x82\x02\u0602" +
		"\u0604\x05\u0104\x83\x02\u0603\u0601\x03\x02\x02\x02\u0603\u0602\x03\x02" +
		"\x02\x02\u0604\u0101\x03\x02\x02\x02\u0605\u0607\x05N(\x02\u0606\u0608" +
		"\x05~@\x02\u0607\u0606\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608" +
		"\u0609\x03\x02\x02\x02\u0609\u060A\x05r:\x02\u060A\u060B\t\t\x02\x02\u060B" +
		"\u060C\x05\u011A\x8E\x02\u060C\u0103\x03\x02\x02\x02\u060D\u060F\x05\u0106" +
		"\x84\x02\u060E\u060D\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F" +
		"\u0610\x03\x02\x02\x02\u0610\u0612\x07V\x02\x02\u0611\u0613\x05\u011A" +
		"\x8E\x02\u0612\u0611\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02\u0613" +
		"\u0614\x03\x02\x02\x02\u0614\u0616\x07V\x02\x02\u0615\u0617\x05\u0108" +
		"\x85\x02\u0616\u0615\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02\u0617" +
		"\u0105\x03\x02\x02\x02\u0618\u061B\x05\xD4k\x02\u0619\u061B\x05\u0110" +
		"\x89\x02\u061A\u0618\x03\x02\x02\x02\u061A\u0619\x03\x02\x02\x02\u061B" +
		"\u0107\x03\x02\x02\x02\u061C\u061D\x05\u0110\x89\x02\u061D\u0109\x03\x02" +
		"\x02\x02\u061E\u061F\x07P\x02\x02\u061F\u0620\x05~@\x02\u0620\u0621\x05" +
		"\u0172\xBA\x02\u0621\u010B\x03\x02\x02\x02\u0622\u0623\x05\u010E\x88\x02" +
		"\u0623\u010D\x03\x02\x02\x02\u0624\u0625\x07P\x02\x02\u0625\u0626\x05" +
		"\u0114\x8B\x02\u0626\u0627\x05\u0172\xBA\x02\u0627\u010F\x03\x02\x02\x02" +
		"\u0628\u062D\x05\u0112\x8A\x02\u0629\u062A\x07W\x02\x02\u062A\u062C\x05" +
		"\u0112\x8A\x02\u062B\u0629\x03\x02\x02\x02\u062C\u062F\x03\x02\x02\x02" +
		"\u062D\u062B\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u0111\x03" +
		"\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u0630\u0632\x07j\x02\x02\u0631" +
		"\u0630\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0633\x03\x02" +
		"\x02\x02\u0633\u0634\x05\u011A\x8E\x02\u0634\u0113\x03\x02\x02\x02\u0635" +
		"\u0638\x05\u0116\x8C\x02\u0636\u0638\x05\xAEX\x02\u0637\u0635\x03\x02" +
		"\x02\x02\u0637\u0636\x03\x02\x02\x02\u0638\u0115\x03\x02\x02\x02\u0639" +
		"\u063A\x05\u011E\x90\x02\u063A\u0117\x03\x02\x02\x02\u063B\u063D\x05\u0122" +
		"\x92\x02\u063C\u063E\t\n\x02\x02\u063D\u063C\x03\x02\x02\x02\u063D\u063E" +
		"\x03\x02\x02\x02\u063E\u0119\x03\x02\x02\x02\u063F\u0640\b\x8E\x01\x02" +
		"\u0640\u0641\x05\u010A\x86\x02\u0641\u0642\x05\u011C\x8F\x02\u0642\u0651" +
		"\x03\x02\x02\x02\u0643\u0651\x05\u0118\x8D\x02\u0644\u0645\t\v\x02\x02" +
		"\u0645\u0646\x05\u0174\xBB\x02\u0646\u0647\x05\u011A\x8E\x14\u0647\u0651" +
		"\x03\x02\x02\x02\u0648\u0649\t\f\x02\x02\u0649\u0651\x05\u011A\x8E\x12" +
		"\u064A\u064B\x05\xDCo\x02\u064B\u064C\x05\u0174\xBB\x02\u064C\u064D\x07" +
		"Y\x02\x02\u064D\u064E\x05\u0174\xBB\x02\u064E\u064F\x05\u0116\x8C\x02" +
		"\u064F\u0651\x03\x02\x02\x02\u0650\u063F\x03\x02\x02\x02\u0650\u0643\x03" +
		"\x02\x02\x02\u0650\u0644\x03\x02\x02\x02\u0650\u0648\x03\x02\x02\x02\u0650" +
		"\u064A\x03\x02\x02\x02\u0651\u06C0\x03\x02\x02\x02\u0652\u0653\f\x13\x02" +
		"\x02\u0653\u0654\x07H\x02\x02\u0654\u0655\x05\u0174\xBB\x02\u0655\u0656" +
		"\x05\u011A\x8E\x14\u0656\u06BF\x03\x02\x02\x02\u0657\u0658\f\x11\x02\x02" +
		"\u0658\u0659\x05\u0174\xBB\x02\u0659\u065A\t\r\x02\x02\u065A\u065B\x05" +
		"\u0174\xBB\x02\u065B\u065C\x05\u011A\x8E\x12\u065C\u06BF\x03\x02\x02\x02" +
		"\u065D\u065E\f\x10\x02\x02\u065E\u065F\t\x0E\x02\x02\u065F";
	private static readonly _serializedATNSegment3: string =
		"\u0660\x05\u0174\xBB\x02\u0660\u0661\x05\u011A\x8E\x11\u0661\u06BF\x03" +
		"\x02\x02\x02\u0662\u0663\f\x0F\x02\x02\u0663\u066E\x05\u0174\xBB\x02\u0664" +
		"\u0665\x07[\x02\x02\u0665\u066C\x07[\x02\x02\u0666\u0667\x07Z\x02\x02" +
		"\u0667\u0668\x07Z\x02\x02\u0668\u066C\x07Z\x02\x02\u0669\u066A\x07Z\x02" +
		"\x02\u066A\u066C\x07Z\x02\x02\u066B\u0664\x03\x02\x02\x02\u066B\u0666" +
		"\x03\x02\x02\x02\u066B\u0669\x03\x02\x02\x02\u066C\u066F\x03\x02\x02\x02" +
		"\u066D\u066F\t\x0F\x02\x02\u066E\u066B\x03\x02\x02\x02\u066E\u066D\x03" +
		"\x02\x02\x02\u066F\u0670\x03\x02\x02\x02\u0670\u0671\x05\u0174\xBB\x02" +
		"\u0671\u0672\x05\u011A\x8E\x10\u0672\u06BF\x03\x02\x02\x02\u0673\u0674" +
		"\f\r\x02\x02\u0674\u0675\x05\u0174\xBB\x02\u0675\u0676\t\x10\x02\x02\u0676" +
		"\u0677\x05\u0174\xBB\x02\u0677\u0678\x05\u011A\x8E\x0E\u0678\u06BF\x03" +
		"\x02\x02\x02\u0679\u067A\f\f\x02\x02\u067A\u067B\x05\u0174\xBB\x02\u067B" +
		"\u067C\t\x11\x02\x02\u067C\u067D\x05\u0174\xBB\x02\u067D\u067E\x05\u011A" +
		"\x8E\r\u067E\u06BF\x03\x02\x02\x02\u067F\u0680\f\v\x02\x02\u0680\u0681" +
		"\x05\u0174\xBB\x02\u0681\u0682\t\x12\x02\x02\u0682\u0683\x05\u0174\xBB" +
		"\x02\u0683\u0684\x05\u011A\x8E\f\u0684\u06BF\x03\x02\x02\x02\u0685\u0686" +
		"\f\n\x02\x02\u0686\u0687\x05\u0174\xBB\x02\u0687\u0688\x07l\x02\x02\u0688" +
		"\u0689\x05\u0174\xBB\x02\u0689\u068A\x05\u011A\x8E\v\u068A\u06BF\x03\x02" +
		"\x02\x02\u068B\u068C\f\t\x02\x02\u068C\u068D\x05\u0174\xBB\x02\u068D\u068E" +
		"\x07n\x02\x02\u068E\u068F\x05\u0174\xBB\x02\u068F\u0690\x05\u011A\x8E" +
		"\n\u0690\u06BF\x03\x02\x02\x02\u0691\u0692\f\b\x02\x02\u0692\u0693\x05" +
		"\u0174\xBB\x02\u0693\u0694\x07m\x02\x02\u0694\u0695\x05\u0174\xBB\x02" +
		"\u0695\u0696\x05\u011A\x8E\t\u0696\u06BF\x03\x02\x02\x02\u0697\u0698\f" +
		"\x07\x02\x02\u0698\u0699\x05\u0174\xBB\x02\u0699\u069A\x07d\x02\x02\u069A" +
		"\u069B\x05\u0174\xBB\x02\u069B\u069C\x05\u011A\x8E\b\u069C\u06BF\x03\x02" +
		"\x02\x02\u069D\u069E\f\x06\x02\x02\u069E\u069F\x05\u0174\xBB\x02\u069F" +
		"\u06A0\x07e\x02\x02\u06A0\u06A1\x05\u0174\xBB\x02\u06A1\u06A2\x05\u011A" +
		"\x8E\x07\u06A2\u06BF\x03\x02\x02\x02\u06A3\u06A4\f\x05\x02\x02\u06A4\u06AE" +
		"\x05\u0174\xBB\x02\u06A5\u06A6\x07^\x02\x02\u06A6\u06A7\x05\u0174\xBB" +
		"\x02\u06A7\u06A8\x05\u011A\x8E\x02\u06A8\u06A9\x05\u0174\xBB\x02\u06A9" +
		"\u06AA\x07_\x02\x02\u06AA\u06AB\x05\u0174\xBB\x02\u06AB\u06AF\x03\x02" +
		"\x02\x02\u06AC\u06AD\x07C\x02\x02\u06AD\u06AF\x05\u0174\xBB\x02\u06AE" +
		"\u06A5\x03\x02\x02\x02\u06AE\u06AC\x03\x02\x02\x02\u06AF\u06B0\x03\x02" +
		"\x02\x02\u06B0\u06B1\x05\u011A\x8E\x05\u06B1\u06BF\x03\x02\x02\x02\u06B2" +
		"\u06B3\f\x0E\x02\x02\u06B3\u06B4\x05\u0174\xBB\x02\u06B4\u06B5\t\x13\x02" +
		"\x02\u06B5\u06B6\x05\u0174\xBB\x02\u06B6\u06B7\x05~@\x02\u06B7\u06BF\x03" +
		"\x02\x02\x02\u06B8\u06B9\f\x03\x02\x02\u06B9\u06BA\x05\u0174\xBB\x02\u06BA" +
		"\u06BB\t\x14\x02\x02\u06BB\u06BC\x05\u0174\xBB\x02\u06BC\u06BD\x05\u0114" +
		"\x8B\x02\u06BD\u06BF\x03\x02\x02\x02\u06BE\u0652\x03\x02\x02\x02\u06BE" +
		"\u0657\x03\x02\x02\x02\u06BE\u065D\x03\x02\x02\x02\u06BE\u0662\x03\x02" +
		"\x02\x02\u06BE\u0673\x03\x02\x02\x02\u06BE\u0679\x03\x02\x02\x02\u06BE" +
		"\u067F\x03\x02\x02\x02\u06BE\u0685\x03\x02\x02\x02\u06BE\u068B\x03\x02" +
		"\x02\x02\u06BE\u0691\x03\x02\x02\x02\u06BE\u0697\x03\x02\x02\x02\u06BE" +
		"\u069D\x03\x02\x02\x02\u06BE\u06A3\x03\x02\x02\x02\u06BE\u06B2\x03\x02" +
		"\x02\x02\u06BE\u06B8\x03\x02\x02\x02\u06BF\u06C2\x03\x02\x02\x02\u06C0" +
		"\u06BE\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1\u011B\x03\x02" +
		"\x02\x02\u06C2\u06C0\x03\x02\x02\x02\u06C3\u06C4\x05\u010A\x86\x02\u06C4" +
		"\u06C5\x05\u011C\x8F\x02\u06C5\u06CE\x03\x02\x02\x02\u06C6\u06CE\x05\u0118" +
		"\x8D\x02\u06C7\u06C8\t\v\x02\x02\u06C8\u06C9\x05\u0174\xBB\x02\u06C9\u06CA" +
		"\x05\u011C\x8F\x02\u06CA\u06CE\x03\x02\x02\x02\u06CB\u06CC\t\f\x02\x02" +
		"\u06CC\u06CE\x05\u011C\x8F\x02\u06CD\u06C3\x03\x02\x02\x02\u06CD\u06C6" +
		"\x03\x02\x02\x02\u06CD\u06C7\x03\x02\x02\x02\u06CD\u06CB\x03\x02\x02\x02" +
		"\u06CE\u011D\x03\x02\x02\x02\u06CF\u06D3\x05\u011A\x8E\x02\u06D0\u06D1" +
		"\x06\x90\x14\x03\u06D1\u06D4\x05\u015A\xAE\x02\u06D2\u06D4\x03\x02\x02" +
		"\x02\u06D3\u06D0\x03\x02\x02\x02\u06D3\u06D2\x03\x02\x02\x02\u06D4\u06D8" +
		"\x03\x02\x02\x02\u06D5\u06D7\x05\u0120\x91\x02\u06D6\u06D5\x03\x02\x02" +
		"\x02\u06D7\u06DA\x03\x02\x02\x02\u06D8\u06D6\x03\x02\x02\x02\u06D8\u06D9" +
		"\x03\x02\x02\x02\u06D9\u011F\x03\x02\x02\x02\u06DA\u06D8\x03\x02\x02\x02" +
		"\u06DB\u06E2\x05\u0134\x9B\x02\u06DC\u06DE\x05\u0124\x93\x02\u06DD\u06DC" +
		"\x03\x02\x02\x02\u06DE\u06DF\x03\x02\x02\x02\u06DF\u06DD\x03\x02\x02\x02" +
		"\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E3\x03\x02\x02\x02\u06E1\u06E3\x05" +
		"\u015A\xAE\x02\u06E2\u06DD\x03\x02\x02\x02\u06E2\u06E1\x03\x02\x02\x02" +
		"\u06E2\u06E3\x03\x02\x02\x02\u06E3\u0121\x03\x02\x02\x02\u06E4\u06E8\x05" +
		"\u012E\x98\x02\u06E5\u06E6\x06\x92\x15\x02\u06E6\u06E8\x07-\x02\x02\u06E7" +
		"\u06E4\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E8\u06EE\x03\x02" +
		"\x02\x02\u06E9\u06EA\x05\u0124\x93\x02\u06EA\u06EB\b\x92\x01\x02\u06EB" +
		"\u06ED\x03\x02\x02\x02\u06EC\u06E9\x03\x02\x02\x02\u06ED\u06F0\x03\x02" +
		"\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EE\u06EF\x03\x02\x02\x02\u06EF" +
		"\u0123\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F1\u070A\x05\u0174" +
		"\xBB\x02\u06F2\u06F3\x07X\x02\x02\u06F3\u06F4\x05\u0174\xBB\x02\u06F4" +
		"\u06F5\x07\'\x02\x02\u06F5\u06F6\x05\u014A\xA6\x02\u06F6\u06F7\b\x93\x01" +
		"\x02\u06F7\u070B\x03\x02\x02\x02\u06F8\u06F9\t\x15\x02\x02\u06F9\u06FC" +
		"\x05\u0174\xBB\x02\u06FA\u06FD\x07~\x02\x02\u06FB\u06FD\x05\u0154\xAB" +
		"\x02\u06FC\u06FA\x03\x02\x02\x02\u06FC\u06FB\x03\x02\x02\x02\u06FC\u06FD" +
		"\x03\x02\x02\x02\u06FD\u0703\x03\x02\x02\x02\u06FE\u06FF\x07D\x02\x02" +
		"\u06FF\u0703\x05\u0174\xBB\x02\u0700\u0701\x07E\x02\x02\u0701\u0703\x05" +
		"\u0174\xBB\x02\u0702\u06F8\x03\x02\x02\x02\u0702\u06FE\x03\x02\x02\x02" +
		"\u0702\u0700\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0705\x05" +
		"\u0126\x94\x02\u0705\u0706\b\x93\x01\x02\u0706\u070B\x03\x02\x02\x02\u0707" +
		"\u0708\x05\xB8]\x02\u0708\u0709\b\x93\x01\x02\u0709\u070B\x03\x02\x02" +
		"\x02\u070A\u06F2\x03\x02\x02\x02\u070A\u0702\x03\x02\x02\x02\u070A\u0707" +
		"\x03\x02\x02\x02\u070B\u0716\x03\x02\x02\x02\u070C\u070D\x05\u0158\xAD" +
		"\x02\u070D\u070E\b\x93\x01\x02\u070E\u0716\x03\x02\x02\x02\u070F\u0710" +
		"\x05\u012A\x96\x02\u0710\u0711\b\x93\x01\x02\u0711\u0716\x03\x02\x02\x02" +
		"\u0712\u0713\x05\u012C\x97\x02\u0713\u0714\b\x93\x01\x02\u0714\u0716\x03" +
		"\x02\x02\x02\u0715\u06F1\x03\x02\x02\x02\u0715\u070C\x03\x02\x02\x02\u0715" +
		"\u070F\x03\x02\x02\x02\u0715\u0712\x03\x02\x02\x02\u0716\u0125\x03\x02" +
		"\x02\x02\u0717\u071C\x05\u016C\xB7\x02\u0718\u071C\x05\u0168\xB5\x02\u0719" +
		"\u071C\x05\u0128\x95\x02\u071A\u071C\x05\u0170\xB9\x02\u071B\u0717\x03" +
		"\x02\x02\x02\u071B\u0718\x03\x02\x02\x02\u071B\u0719\x03\x02\x02\x02\u071B" +
		"\u071A\x03\x02\x02\x02\u071C\u0127\x03\x02\x02\x02\u071D\u0720\x05\u010C" +
		"\x87\x02\u071E\u0720\x05\xA6T\x02\u071F\u071D\x03\x02\x02\x02\u071F\u071E" +
		"\x03\x02\x02\x02\u0720\u0129\x03\x02\x02\x02\u0721\u0723\x07^\x02\x02" +
		"\u0722\u0721\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723\u0724\x03" +
		"\x02\x02\x02\u0724\u0726\x07T\x02\x02\u0725\u0727\x05\u0110\x89\x02\u0726" +
		"\u0725\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0728\x03\x02" +
		"\x02\x02\u0728\u0729\x07U\x02\x02\u0729\u012B\x03\x02\x02\x02\u072A\u072C" +
		"\x07^\x02\x02\u072B\u072A\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02" +
		"\u072C\u072D\x03\x02\x02\x02\u072D\u0730\x07T\x02\x02\u072E\u0731\x05" +
		"\u013C\x9F\x02\u072F\u0731\x07_\x02\x02\u0730\u072E\x03\x02\x02\x02\u0730" +
		"\u072F\x03\x02\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732\u0733\x07U\x02" +
		"\x02\u0733\u012D\x03\x02\x02\x02\u0734\u0736\x05\u016C\xB7\x02\u0735\u0737" +
		"\x05\x88E\x02\u0736\u0735\x03\x02\x02\x02\u0736\u0737\x03\x02\x02\x02" +
		"\u0737\u0746\x03\x02\x02\x02\u0738\u0746\x05\xA4S\x02\u0739\u0746\x05" +
		"\xA6T\x02\u073A\u073B\x07\'\x02\x02\u073B\u073C\x05\u0174\xBB\x02\u073C" +
		"\u073D\x05\u014A\xA6\x02\u073D\u0746\x03\x02\x02\x02\u073E\u0746\x072" +
		"\x02\x02\u073F\u0746\x07/\x02\x02\u0740\u0746\x05\u010C\x87\x02\u0741" +
		"\u0746\x05\xB8]\x02\u0742\u0746\x05\u0136\x9C\x02\u0743\u0746\x05\u0138" +
		"\x9D\x02\u0744\u0746\x05\u016E\xB8\x02\u0745\u0734\x03\x02\x02\x02\u0745" +
		"\u0738\x03\x02\x02\x02\u0745\u0739\x03\x02\x02\x02\u0745\u073A\x03\x02" +
		"\x02\x02\u0745\u073E\x03\x02\x02\x02\u0745\u073F\x03\x02\x02\x02\u0745" +
		"\u0740\x03\x02\x02\x02\u0745\u0741\x03\x02\x02\x02\u0745\u0742\x03\x02" +
		"\x02\x02\u0745\u0743\x03\x02\x02\x02\u0745\u0744\x03\x02\x02\x02\u0746" +
		"\u012F\x03\x02\x02\x02\u0747\u074E\x05\u016C\xB7\x02\u0748\u074E\x05\xA4" +
		"S\x02\u0749\u074E\x05\xA6T\x02\u074A\u074E\x05\u010C\x87\x02\u074B\u074E" +
		"\x05\u0136\x9C\x02\u074C\u074E\x05\u0138\x9D\x02\u074D\u0747\x03\x02\x02" +
		"\x02\u074D\u0748\x03\x02\x02\x02\u074D\u0749\x03\x02\x02\x02\u074D\u074A" +
		"\x03\x02\x02\x02\u074D\u074B\x03\x02\x02\x02\u074D\u074C\x03\x02\x02\x02" +
		"\u074E\u0131\x03\x02\x02\x02\u074F\u0753\x05\u016C\xB7\x02\u0750\u0753" +
		"\x05\xA4S\x02\u0751\u0753\x05\xA6T\x02\u0752\u074F\x03\x02\x02\x02\u0752" +
		"\u0750\x03\x02\x02\x02\u0752\u0751\x03\x02\x02\x02\u0753\u0133\x03\x02" +
		"\x02\x02\u0754\u0758\x05\u016C\xB7\x02\u0755\u0758\x05\xA4S\x02\u0756" +
		"\u0758\x05\xA6T\x02\u0757\u0754\x03\x02\x02\x02\u0757\u0755\x03\x02\x02" +
		"\x02\u0757\u0756\x03\x02\x02\x02\u0758\u0135\x03\x02\x02\x02\u0759\u075B" +
		"\x07T\x02\x02\u075A\u075C\x05\u0110\x89\x02\u075B\u075A\x03\x02\x02\x02" +
		"\u075B\u075C\x03\x02\x02\x02\u075C\u075E\x03\x02\x02\x02\u075D\u075F\x07" +
		"W\x02\x02\u075E\u075D\x03\x02\x02\x02\u075E\u075F\x03\x02\x02\x02\u075F" +
		"\u0760\x03\x02\x02\x02\u0760\u0761\x07U\x02\x02\u0761\u0137\x03\x02\x02" +
		"\x02\u0762\u0768\x07T\x02\x02\u0763\u0765\x05\u013A\x9E\x02\u0764\u0766" +
		"\x07W\x02\x02\u0765\u0764\x03\x02\x02\x02\u0765\u0766\x03\x02\x02\x02" +
		"\u0766\u0769\x03\x02\x02\x02\u0767\u0769\x07_\x02\x02\u0768\u0763\x03" +
		"\x02\x02\x02\u0768\u0767\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A" +
		"\u076B\x07U\x02\x02\u076B\u0139\x03\x02\x02\x02\u076C\u0771\x05\u013E" +
		"\xA0\x02\u076D\u076E\x07W\x02\x02\u076E\u0770\x05\u013E\xA0\x02\u076F" +
		"\u076D\x03\x02\x02\x02\u0770\u0773\x03\x02\x02\x02\u0771\u076F\x03\x02" +
		"\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u013B\x03\x02\x02\x02\u0773" +
		"\u0771\x03\x02\x02\x02\u0774\u0779\x05\u0140\xA1\x02\u0775\u0776\x07W" +
		"\x02\x02\u0776\u0778\x05\u0140\xA1\x02\u0777\u0775\x03\x02\x02\x02\u0778" +
		"\u077B\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779\u077A\x03\x02" +
		"\x02\x02\u077A\u013D\x03\x02\x02\x02\u077B\u0779\x03\x02\x02\x02\u077C" +
		"\u077D\x05\u0144\xA3\x02\u077D\u077E\x07_\x02\x02\u077E\u077F\x05\u0174" +
		"\xBB\x02\u077F\u0780\x05\u011A\x8E\x02\u0780\u0787\x03\x02\x02\x02\u0781" +
		"\u0782\x07j\x02\x02\u0782\u0783\x07_\x02\x02\u0783\u0784\x05\u0174\xBB" +
		"\x02\u0784\u0785\x05\u011A\x8E\x02\u0785\u0787\x03\x02\x02\x02\u0786\u077C" +
		"\x03\x02\x02\x02\u0786\u0781\x03\x02\x02\x02\u0787\u013F\x03\x02\x02\x02" +
		"\u0788\u0789\x05\u0146\xA4\x02\u0789\u078A\x07_\x02\x02\u078A\u078B\x05" +
		"\u0174\xBB\x02\u078B\u078C\x05\u011A\x8E\x02\u078C\u0793\x03\x02\x02\x02" +
		"\u078D\u078E\x07j\x02\x02\u078E\u078F\x07_\x02\x02\u078F\u0790\x05\u0174" +
		"\xBB\x02\u0790\u0791\x05\u011A\x8E\x02\u0791\u0793\x03\x02\x02\x02\u0792" +
		"\u0788\x03\x02\x02\x02\u0792\u078D\x03\x02\x02\x02\u0793\u0141\x03\x02" +
		"\x02\x02\u0794\u0795\x05\u0148\xA5\x02\u0795\u0796\x07_\x02\x02\u0796" +
		"\u0797\x05\u0174\xBB\x02\u0797\u0798\x05\u011A\x8E\x02\u0798\u079F\x03" +
		"\x02\x02\x02\u0799\u079A\x07j\x02\x02\u079A\u079B\x07_\x02\x02\u079B\u079C" +
		"\x05\u0174\xBB\x02\u079C\u079D\x05\u011A\x8E\x02\u079D\u079F\x03\x02\x02" +
		"\x02\u079E\u0794\x03\x02\x02\x02\u079E\u0799\x03\x02\x02\x02\u079F\u0143" +
		"\x03\x02\x02\x02\u07A0\u07A3\x05\u0170\xB9\x02\u07A1\u07A3\x05\u012E\x98" +
		"\x02\u07A2\u07A0\x03\x02\x02\x02\u07A2\u07A1\x03\x02\x02\x02\u07A3\u0145" +
		"\x03\x02\x02\x02\u07A4\u07A7\x05\u0170\xB9\x02\u07A5\u07A7\x05\u0130\x99" +
		"\x02\u07A6\u07A4\x03\x02\x02\x02\u07A6\u07A5\x03\x02\x02\x02\u07A7\u0147" +
		"\x03\x02\x02\x02\u07A8\u07AB\x05\u0170\xB9\x02\u07A9\u07AB\x05\u0132\x9A" +
		"\x02\u07AA\u07A8\x03\x02\x02\x02\u07AA\u07A9\x03\x02\x02\x02\u07AB\u0149" +
		"\x03\x02\x02\x02\u07AC\u07BC\x05\u0152\xAA\x02\u07AD\u07AE\x05\u0174\xBB" +
		"\x02\u07AE\u07B0\x05\u0158\xAD\x02\u07AF\u07B1\x05\u0150\xA9\x02\u07B0" +
		"\u07AF\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07BD\x03\x02" +
		"\x02\x02\u07B2\u07B4\x05\u014C\xA7\x02\u07B3\u07B2\x03\x02\x02\x02\u07B4" +
		"\u07B5\x03\x02\x02\x02\u07B5\u07B3\x03\x02\x02\x02\u07B5\u07B6\x03\x02" +
		"\x02\x02\u07B6\u07BA\x03\x02\x02\x02\u07B7\u07B8\x05\u0174\xBB\x02\u07B8" +
		"\u07B9\x05\u014E\xA8\x02\u07B9\u07BB\x03\x02\x02\x02\u07BA\u07B7\x03\x02" +
		"\x02\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB\u07BD\x03\x02\x02\x02\u07BC" +
		"\u07AD\x03\x02\x02\x02\u07BC\u07B3\x03\x02\x02\x02\u07BD\u014B\x03\x02" +
		"\x02\x02\u07BE\u07BF\x05\xBE`\x02\u07BF\u07C1\x07T\x02\x02\u07C0\u07C2" +
		"\x05\u011A\x8E\x02\u07C1\u07C0\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02" +
		"\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3\u07C4\x07U\x02\x02\u07C4\u014D" +
		"\x03\x02\x02\x02\u07C5\u07C6\x07R\x02\x02\u07C6\u07CA\x05\u0174\xBB\x02" +
		"\u07C7\u07C8\x05v<\x02\u07C8\u07C9\x05\u0174\xBB\x02\u07C9\u07CB\x03\x02" +
		"\x02\x02\u07CA\u07C7\x03\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB" +
		"\u07CC\x03\x02\x02\x02\u07CC\u07CD\x07S\x02\x02\u07CD\u014F\x03\x02\x02" +
		"\x02\u07CE\u07CF\x05\\/\x02\u07CF\u0151\x03\x02\x02\x02\u07D0\u07D6\x05" +
		"\xBE`\x02\u07D1\u07D7\x05\x86D\x02\u07D2\u07D4\x05\xA0Q\x02\u07D3\u07D5" +
		"\x05\u0156\xAC\x02\u07D4\u07D3\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02" +
		"\x02\u07D5\u07D7\x03\x02\x02\x02\u07D6\u07D1\x03\x02\x02\x02\u07D6\u07D2" +
		"\x03\x02\x02\x02\u07D7\u0153\x03\x02\x02\x02\u07D8\u07D9\x07[\x02\x02" +
		"\u07D9\u07DA\x05\u0174\xBB\x02\u07DA\u07DB\x05X-\x02\u07DB\u07DC\x05\u0174" +
		"\xBB\x02\u07DC\u07DD\x07Z\x02\x02\u07DD\u0155\x03\x02\x02\x02\u07DE\u07DF" +
		"\x07[\x02\x02\u07DF\u07E2\x07Z\x02\x02\u07E0\u07E2\x05\x88E\x02\u07E1" +
		"\u07DE\x03\x02\x02\x02\u07E1\u07E0\x03\x02\x02\x02\u07E2\u0157\x03\x02" +
		"\x02\x02\u07E3\u07E5\x07P\x02\x02\u07E4\u07E6\x05\u015E\xB0\x02\u07E5" +
		"\u07E4\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E8\x03\x02" +
		"\x02\x02\u07E7\u07E9\x07W\x02\x02\u07E8\u07E7\x03\x02\x02\x02\u07E8\u07E9" +
		"\x03\x02\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07EB\x05\u0172\xBA" +
		"\x02\u07EB\u0159\x03\x02\x02\x02\u07EC\u07F3\x05\u0160\xB1\x02\u07ED\u07EE" +
		"\x07W\x02\x02\u07EE\u07EF\x05\u0174\xBB\x02\u07EF\u07F0\x05\u0162\xB2" +
		"\x02\u07F0\u07F2\x03\x02\x02\x02\u07F1\u07ED\x03\x02\x02\x02\u07F2\u07F5" +
		"\x03\x02\x02\x02\u07F3\u07F1\x03\x02\x02\x02\u07F3\u07F4\x03\x02\x02\x02" +
		"\u07F4\u015B\x03\x02\x02\x02\u07F5\u07F3\x03\x02\x02\x02\u07F6\u07FD\x05" +
		"\u0164\xB3\x02\u07F7\u07F8\x07W\x02\x02\u07F8\u07F9\x05\u0174\xBB\x02" +
		"\u07F9\u07FA\x05\u0166\xB4\x02\u07FA\u07FC\x03\x02\x02\x02\u07FB\u07F7" +
		"\x03\x02\x02\x02\u07FC\u07FF\x03\x02\x02\x02\u07FD\u07FB\x03\x02\x02\x02" +
		"\u07FD\u07FE\x03\x02\x02\x02\u07FE\u015D\x03\x02\x02\x02\u07FF\u07FD\x03" +
		"\x02\x02\x02\u0800\u0807\x05\u0166\xB4\x02\u0801\u0802\x07W\x02\x02\u0802" +
		"\u0803\x05\u0174\xBB\x02\u0803\u0804\x05\u0166\xB4\x02\u0804\u0806\x03" +
		"\x02\x02\x02\u0805\u0801\x03\x02\x02\x02\u0806\u0809\x03\x02\x02\x02\u0807" +
		"\u0805\x03\x02\x02\x02\u0807\u0808\x03\x02\x02\x02\u0808\u015F\x03\x02" +
		"\x02\x02\u0809\u0807\x03\x02\x02\x02\u080A\u080D\x05\u0112\x8A\x02\u080B" +
		"\u080D\x05\u0142\xA2\x02\u080C\u080A\x03\x02\x02\x02\u080C\u080B\x03\x02" +
		"\x02\x02\u080D\u0161\x03\x02\x02\x02\u080E\u0811\x05\u0112\x8A\x02\u080F" +
		"\u0811\x05\u0140\xA1\x02\u0810\u080E\x03\x02\x02\x02\u0810\u080F\x03\x02" +
		"\x02\x02\u0811\u0163\x03\x02\x02\x02\u0812\u0816\x05\u0112\x8A\x02\u0813" +
		"\u0816\x05\xAEX\x02\u0814\u0816\x05\u0142\xA2\x02\u0815\u0812\x03\x02" +
		"\x02\x02\u0815\u0813\x03\x02\x02\x02\u0815\u0814\x03\x02\x02\x02\u0816" +
		"\u0165\x03\x02\x02\x02\u0817\u081B\x05\u0112\x8A\x02\u0818\u081B\x05\xAE" +
		"X\x02\u0819\u081B\x05\u0140\xA1\x02\u081A\u0817\x03\x02\x02\x02\u081A" +
		"\u0818\x03\x02\x02\x02\u081A\u0819\x03\x02\x02\x02\u081B\u0167\x03\x02" +
		"\x02\x02\u081C\u081D\x07\x03\x02\x02\u081D\u0169\x03\x02\x02\x02\u081E" +
		"\u081F\x07|\x02\x02\u081F\u016B\x03\x02\x02\x02\u0820\u0821\t\x16\x02" +
		"\x02\u0821\u016D\x03\x02\x02\x02\u0822\u0823\t\x17\x02\x02\u0823\u016F" +
		"\x03\x02\x02\x02\u0824\u0825\t\x18\x02\x02\u0825\u0171\x03\x02\x02\x02" +
		"\u0826\u0827\x07Q\x02\x02\u0827\u0173\x03\x02\x02\x02\u0828\u082A\x07" +
		"\x81\x02\x02\u0829\u0828\x03\x02\x02\x02\u082A\u082D\x03\x02\x02\x02\u082B" +
		"\u0829\x03\x02\x02\x02\u082B\u082C\x03\x02\x02\x02\u082C\u0175\x03\x02" +
		"\x02\x02\u082D\u082B\x03\x02\x02\x02\u082E\u0830\t\x19\x02\x02\u082F\u082E" +
		"\x03\x02\x02\x02\u0830\u0831\x03\x02\x02\x02\u0831\u082F\x03\x02\x02\x02" +
		"\u0831\u0832\x03\x02\x02\x02\u0832\u0177\x03\x02\x02\x02\xE5\u017A\u0184" +
		"\u0188\u0192\u01A0\u01A5\u01AB\u01B2\u01B5\u01BF\u01C3\u01CA\u01D0\u01D8" +
		"\u01DE\u01E4\u01EA\u01EC\u01F6\u0200\u0209\u021E\u022C\u023A\u0246\u024F" +
		"\u0264\u0272\u0280\u0287\u028E\u0291\u0299\u029B\u02A1\u02A3\u02A9\u02AB" +
		"\u02B4\u02BB\u02C2\u02C7\u02CF\u02D6\u02D9\u02E1\u02E6\u02EA\u02EF\u02F7" +
		"\u0303\u030E\u0317\u0321\u032F\u0335\u033C\u0343\u034F\u0352\u0355\u035D" +
		"\u0360\u0363\u036F\u0375\u0378\u037C\u0380\u0387\u038B\u0390\u039D\u03A2" +
		"\u03A4\u03A8\u03AC\u03B7\u03C0\u03CE\u03D3\u03DB\u03DE\u03E3\u03EA\u03ED" +
		"\u03F3\u03F6\u03FA\u03FE\u040B\u0418\u041A\u0426\u042B\u0431\u0439\u0441" +
		"\u0444\u044C\u0455\u045D\u0464\u0470\u0478\u0480\u0487\u048D\u04A0\u04A4" +
		"\u04AB\u04AF\u04B2\u04B9\u04BC\u04C4\u04C8\u04D0\u04D5\u04DC\u04E0\u04E4" +
		"\u04ED\u04F8\u04FD\u0505\u0509\u050B\u0511\u0518\u0520\u0529\u052E\u0536" +
		"\u053C\u0546\u054C\u0554\u055A\u0564\u0568\u057F\u0583\u0587\u058B\u0594" +
		"\u059A\u05A3\u05B0\u05BF\u05C5\u05D1\u05DC\u05E6\u05EB\u05F3\u05FF\u0603" +
		"\u0607\u060E\u0612\u0616\u061A\u062D\u0631\u0637\u063D\u0650\u066B\u066E" +
		"\u06AE\u06BE\u06C0\u06CD\u06D3\u06D8\u06DF\u06E2\u06E7\u06EE\u06FC\u0702" +
		"\u070A\u0715\u071B\u071F\u0722\u0726\u072B\u0730\u0736\u0745\u074D\u0752" +
		"\u0757\u075B\u075E\u0765\u0768\u0771\u0779\u0786\u0792\u079E\u07A2\u07A6" +
		"\u07AA\u07B0\u07B5\u07BA\u07BC\u07C1\u07CA\u07D4\u07D6\u07E1\u07E5\u07E8" +
		"\u07F3\u07FD\u0807\u080C\u0810\u0815\u081A\u082B\u0831";
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
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public EOF(): TerminalNode { return this.getToken(NextflowScriptParser.EOF, 0); }
	public scriptStatements(): ScriptStatementsContext | undefined {
		return this.tryGetRuleContext(0, ScriptStatementsContext);
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


export class ScriptStatementContext extends ParserRuleContext {
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public processDef(): ProcessDefContext | undefined {
		return this.tryGetRuleContext(0, ProcessDefContext);
	}
	public workflowDef(): WorkflowDefContext | undefined {
		return this.tryGetRuleContext(0, WorkflowDefContext);
	}
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
	public nls(): NlsContext {
		return this.getRuleContext(0, NlsContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACE, 0); }
	public sep(): SepContext | undefined {
		return this.tryGetRuleContext(0, SepContext);
	}
	public processStatements(): ProcessStatementsContext | undefined {
		return this.tryGetRuleContext(0, ProcessStatementsContext);
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


export class ProcessStatementsContext extends ParserRuleContext {
	public processStatement(): ProcessStatementContext[];
	public processStatement(i: number): ProcessStatementContext;
	public processStatement(i?: number): ProcessStatementContext | ProcessStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessStatementContext);
		} else {
			return this.getRuleContext(i, ProcessStatementContext);
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
	public get ruleIndex(): number { return NextflowScriptParser.RULE_processStatements; }
	// @Override
	public enterRule(listener: NextflowScriptParserListener): void {
		if (listener.enterProcessStatements) {
			listener.enterProcessStatements(this);
		}
	}
	// @Override
	public exitRule(listener: NextflowScriptParserListener): void {
		if (listener.exitProcessStatements) {
			listener.exitProcessStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NextflowScriptParserVisitor<Result>): Result {
		if (visitor.visitProcessStatements) {
			return visitor.visitProcessStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessStatementContext extends ParserRuleContext {
	public processDirective(): ProcessDirectiveContext | undefined {
		return this.tryGetRuleContext(0, ProcessDirectiveContext);
	}
	public INPUT_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.INPUT_GUARD, 0); }
	public processInput(): ProcessInputContext[];
	public processInput(i: number): ProcessInputContext;
	public processInput(i?: number): ProcessInputContext | ProcessInputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessInputContext);
		} else {
			return this.getRuleContext(i, ProcessInputContext);
		}
	}
	public OUTPUT_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.OUTPUT_GUARD, 0); }
	public processOutput(): ProcessOutputContext[];
	public processOutput(i: number): ProcessOutputContext;
	public processOutput(i?: number): ProcessOutputContext | ProcessOutputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessOutputContext);
		} else {
			return this.getRuleContext(i, ProcessOutputContext);
		}
	}
	public WHEN_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.WHEN_GUARD, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SCRIPT_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SCRIPT_GUARD, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SHELL_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.SHELL_GUARD, 0); }
	public EXEC_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXEC_GUARD, 0); }
	public STUB_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.STUB_GUARD, 0); }
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
	public processInputType(): ProcessInputTypeContext {
		return this.getRuleContext(0, ProcessInputTypeContext);
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
	public processInputTuple(): ProcessInputTupleContext | undefined {
		return this.tryGetRuleContext(0, ProcessInputTupleContext);
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
	public processOutputType(): ProcessOutputTypeContext {
		return this.getRuleContext(0, ProcessOutputTypeContext);
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
	public processOutputTuple(): ProcessOutputTupleContext | undefined {
		return this.tryGetRuleContext(0, ProcessOutputTupleContext);
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
	public TAKE_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.TAKE_GUARD, 0); }
	public MAIN_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.MAIN_GUARD, 0); }
	public EMIT_GUARD(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EMIT_GUARD, 0); }
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
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.IMPLEMENTS, 0); }
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
	public RANGE_EXCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RANGE_EXCLUSIVE, 0); }
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
	public LBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.QUESTION, 0); }
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
	public LBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(NextflowScriptParser.RBRACK, 0); }
	public mapEntryList(): MapEntryListContext | undefined {
		return this.tryGetRuleContext(0, MapEntryListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.QUESTION, 0); }
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
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.PACKAGE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(NextflowScriptParser.RETURN, 0); }
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


