// Grammar specification for the Nextflow configuration language.

parser grammar NextflowConfigParser;

options {
    tokenVocab = NextflowConfigLexer;
}

import GroovyParser;

// top-level config statements
compilationUnit
    : configStatement* EOF
    ;

configStatement
    : includeStatement
    | assignment
    | block
    ;

// include statement
includeStatement
    : INCLUDECONF expression
    ;

// config assignment
assignment
    : configPathExpression ASSIGN expression
    ;

configPathExpression
    : Identifier (DOT Identifier)*
    ;

// config block
block
    : Identifier LBRACE blockStatement* LBRACE
    ;

blockStatement
    : assignment
    | block
    | selector
    ;

selector
    : Identifier COLON expression LBRACE assignment* RBRACE
    ;
