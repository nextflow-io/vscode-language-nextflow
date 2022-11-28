// Grammar specification for the Nextflow configuration language.

grammar NextflowConfig;

options {
    tokenVocab = GroovyLexer;
}

import GroovyParser;

@header {
package nextflow.config.parser;
}

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
    : 'includeConfig' expression
    ;

// config assignment
assignment
    : configPathExpression '=' expression
    ;

configPathExpression
    : Identifier ('.' Identifier)*
    ;

// config block
block
    : Identifier '{' blockStatement* '}'
    ;

blockStatement
    : assignment
    | block
    | selector
    ;

selector
    : Identifier ':' expression '{' assignment* '}'
    ;
