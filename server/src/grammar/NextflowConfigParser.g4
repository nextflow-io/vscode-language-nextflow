// Grammar specification for the Nextflow configuration language.

parser grammar NextflowConfigParser;

@header {
    import { GroovyParser } from './GroovyParser';
}

options {
    tokenVocab = NextflowConfigLexer;
}

import GroovyParser;

// top-level config statements
compilationUnit
    : nls nfconfigStatement* EOF
    ;

nfconfigStatement
    : nfincludeStatement
    | nfconfigAssignment
    | nfblock
    | methodDeclaration[3,9]
    ;

// include statement
nfincludeStatement
    : INCLUDECONF expression sep
    ;

// config assignment
nfconfigAssignment
    : nfconfigPathExpression ASSIGN statementExpression sep
    ;

nfconfigPathExpression
    : Identifier (DOT Identifier)*
    ;

// config block
nfblock
    : Identifier LBRACE nls nfblockStatement* nls RBRACE nls
    ;

nfblockStatement
    : nfconfigAssignment
    | nfblock
    | nfselector
    | nfincludeStatement
    ;

nfselector
    : Identifier COLON expression LBRACE nls nfconfigAssignment* nls RBRACE nls;