// Grammar specification for the Nextflow scripting language.

parser grammar NextflowScriptParser;

options {
    tokenVocab = NextflowScriptLexer;
}

import GroovyParser;

@header {
import { GroovyParser } from './GroovyParser';
}

// top-level script statements
compilationUnit
    : scriptStatement* EOF
    ;

scriptStatement
    : includeStatement
    | methodDeclaration[1,9]
    | processDef
    | workflowDef
    ;

// include statement
includeStatement
    : INCLUDE includeNames FROM expression
    ;

includeNames
    : includeName
    | LBRACE includeName (COMMA includeName)* RBRACE;

includeName
    : Identifier
    | Identifier AS Identifier;

// process definition
processDef
    : PROCESS Identifier LBRACE processStatement* RBRACE
    ;

processStatement
    : processDirective
    | INPUT processInput+
    | OUTPUT processOutput+
    | WHEN expression
    | SCRIPT statement+
    | SHELL statement+
    | EXEC statement+
    | STUB statement+
    ;

processDirective
    : Identifier expression (COMMA Identifier COLON expression)*
    ;

// -- process inputs
processInput
    : (processInputType | processInputExpr) (COMMA Identifier COLON expression)*
    ;

processInputType
    : processInputVal
    | processInputEnv
    | processInputFile
    | processInputPath
    | processInputStdin
    ;

processInputVal
    : VAL LPAREN Identifier RPAREN
    ;

processInputEnv
    : ENV LPAREN Identifier RPAREN
    ;

processInputFile
    : FILE LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processInputPath
    : PATH LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processInputStdin
    : STDIN | SUB
    ;

processInputExpr
    : processInputTuple
    ;

processInputTuple
    : TUPLE LPAREN processInputType (COMMA processInputType)* RPAREN
    ;

// -- process outputs
processOutput
    : (processOutputType | processOutputExpr) (COMMA Identifier COLON expression)*
    ;

processOutputType
    : processOutputVal
    | processOutputEnv
    | processOutputFile
    | processOutputPath
    | processOutputStdout
    ;

processOutputVal
    : VAL LPAREN Identifier RPAREN
    ;

processOutputEnv
    : ENV LPAREN Identifier RPAREN
    ;

processOutputFile
    : FILE LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processOutputPath
    : PATH LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processOutputStdout
    : STDOUT | SUB
    ;

processOutputExpr
    : processOutputTuple
    ;

processOutputTuple
    : TUPLE LPAREN processOutputType (COMMA processOutputType)* RPAREN
    ;

// workflow definition
workflowDef
    : WORKFLOW Identifier? LBRACE (workflowBody | statement*) RBRACE
    ;

workflowBody
    : (TAKE Identifier+)? (MAIN statement+)? (EMIT expression+)?
    ;