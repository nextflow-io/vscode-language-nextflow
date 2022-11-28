// Grammar specification for the Nextflow scripting language.

grammar NextflowScript;

options {
    tokenVocab = GroovyLexer;
}

import GroovyParser;

@header {
package nextflow.script.parser;
}

// top-level script statements
compilationUnit
    : scriptStatement* EOF
    ;

scriptStatement
    : includeStatement
    | methodDeclaration
    | processDef
    | workflowDef
    ;

// include statement
includeStatement
    : 'include' includeNames 'from' expression
    ;

includeNames
    : includeName
    | '{' includeName (',' includeName)* '}';

includeName
    : Identifier
    | Identifier 'as' Identifier;

// process definition
processDef
    : 'process' Identifier '{' processStatement* '}'
    ;

processStatement
    : processDirective
    | 'input:' processInput+
    | 'output:' processOutput+
    | 'when:' expression
    | 'script:' statement+
    | 'shell:' statement+
    | 'exec:' statement+
    | 'stub:' statement+
    ;

processDirective
    : Identifier expression (',' Identifier ':' expression)*
    ;

// -- process inputs
processInput
    : (processInputType | processInputExpr) (',' Identifier ':' expression)*
    ;

processInputType
    : processInputVal
    | processInputEnv
    | processInputFile
    | processInputPath
    | processInputStdin
    ;

processInputVal
    : 'val' '(' Identifier ')'
    ;

processInputEnv
    : 'env' '(' Identifier ')'
    ;

processInputFile
    : 'file' '(' expression (',' Identifier ':' expression)* ')'
    ;

processInputPath
    : 'path' '(' expression (',' Identifier ':' expression)* ')'
    ;

processInputStdin
    : 'stdin' | '-'
    ;

processInputExpr
    : processInputTuple
    ;

processInputTuple
    : 'tuple' '(' processInputType (',' processInputType)* ')'
    ;

// -- process outputs
processOutput
    : (processOutputType | processOutputExpr) (',' Identifier ':' expression)*
    ;

processOutputType
    : processOutputVal
    | processOutputEnv
    | processOutputFile
    | processOutputPath
    | processOutputStdout
    ;

processOutputVal
    : 'val' '(' Identifier ')'
    ;

processOutputEnv
    : 'env' '(' Identifier ')'
    ;

processOutputFile
    : 'file' '(' expression (',' Identifier ':' expression)* ')'
    ;

processOutputPath
    : 'path' '(' expression (',' Identifier ':' expression)* ')'
    ;

processOutputStdout
    : 'stdout' | '-'
    ;

processOutputExpr
    : processOutputTuple
    ;

processOutputTuple
    : 'tuple' '(' processOutputType (',' processOutputType)* ')'
    ;

// workflow definition
workflowDef
    : 'workflow' Identifier? '{' (workflowBody | statement*) '}'
    ;

workflowBody
    : ('take:' Identifier+)? ('main:' statement+)? ('emit:' expression+)?
    ;
