/**
 * Grammar specification for the Nextflow configuration language.
 */
parser grammar NextflowConfigParser;

options {
    tokenVocab = NextflowConfigLexer;
}

import GroovyParser;

@header {
import { GroovyParser } from './GroovyParser';
}

// top-level config statements
compilationUnit
    :   nls configStatements? EOF
    ;

configStatements
    :   scriptStatement (sep scriptStatement)* sep?
    ;

configStatement
    :   configIncludeStatement
    |   configAssignment
    |   configBlock
    |   scriptStatement
    ;

// include statement
configIncludeStatement
    :   INCLUDE_CONFIG expression
    ;

// config assignment
configAssignment
    :   configPathExpression nls ASSIGN nls expression
    ;

configPathExpression
    :   Identifier (DOT Identifier)*
    ;

// config block
configBlock
    :   Identifier nls LBRACE nls (configBlockStatement nls)* RBRACE
    ;

configBlockStatement
    :   configAssignment
    |   configBlock
    |   processSelector
    |   configIncludeStatement
    ;

processSelector
    :   Identifier COLON expression nls LBRACE nls (configAssignment nls)* RBRACE
    ;
