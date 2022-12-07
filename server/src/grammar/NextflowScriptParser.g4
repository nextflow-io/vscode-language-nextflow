/**
 * Grammar specification for the Nextflow scripting language.
 */
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
    :   nls scriptStatements? EOF
    ;

scriptStatements
    :   scriptStatement (sep scriptStatement)* sep?
    ;

scriptStatement
    // nextflow script statements
    :   includeStatement
    |   processDef
    |   workflowDef
    // groovy script statements
    |   importDeclaration
    |   typeDeclaration
    |   { !GroovyParser.isInvalidMethodDeclaration(this._input) }?
        methodDeclaration[3, 9]
    |   statement
    ;

// include statement
includeStatement
    :   INCLUDE includeNames FROM expression
    ;

includeNames
    :   includeName
    |   LBRACE includeName (COMMA includeName)* RBRACE;

includeName
    :   Identifier
    |   Identifier AS Identifier;

// process definition
processDef
    :   PROCESS Identifier nls LBRACE sep? processStatements? RBRACE
    ;

processStatements
    :   processStatement (sep processStatement)* sep?
    ;

processStatement
    :   processDirective
    |   INPUT_GUARD processInput+
    |   OUTPUT_GUARD processOutput+
    |   WHEN_GUARD expression
    |   SCRIPT_GUARD statement+
    |   SHELL_GUARD statement+
    |   EXEC_GUARD statement+
    |   STUB_GUARD statement+
    ;

processDirective
    :   Identifier expression (COMMA Identifier COLON expression)*
    ;

// -- process inputs
processInput
    :   processInputType (COMMA Identifier COLON expression)*
    ;

processInputType
    :   processInputVal
    |   processInputEnv
    |   processInputFile
    |   processInputPath
    |   processInputStdin
    |   processInputTuple
    ;

processInputVal
    :   VAL LPAREN Identifier RPAREN
    ;

processInputEnv
    :   ENV LPAREN Identifier RPAREN
    ;

processInputFile
    :   FILE LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processInputPath
    :   PATH LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processInputStdin
    :   STDIN | SUB
    ;

processInputTuple
    :   TUPLE LPAREN processInputType (COMMA processInputType)* RPAREN
    ;

// -- process outputs
processOutput
    :   processOutputType (COMMA Identifier COLON expression)*
    ;

processOutputType
    :   processOutputVal
    |   processOutputEnv
    |   processOutputFile
    |   processOutputPath
    |   processOutputStdout
    |   processOutputTuple
    ;

processOutputVal
    :   VAL LPAREN Identifier RPAREN
    ;

processOutputEnv
    :   ENV LPAREN Identifier RPAREN
    ;

processOutputFile
    :   FILE LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processOutputPath
    :   PATH LPAREN expression (COMMA Identifier COLON expression)* RPAREN
    ;

processOutputStdout
    :   STDOUT | SUB
    ;

processOutputTuple
    :   TUPLE LPAREN processOutputType (COMMA processOutputType)* RPAREN
    ;

// workflow definition
workflowDef
    :   WORKFLOW Identifier? LBRACE (workflowBody | statement*) RBRACE
    ;

workflowBody
    :   (TAKE_GUARD Identifier+)? (MAIN_GUARD statement+)? (EMIT_GUARD expression+)?
    ;
