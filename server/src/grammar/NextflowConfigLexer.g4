// Grammar specification for the Nextflow configuration language.

lexer grammar NextflowConfigLexer;

options {
    tokenVocab = GroovyLexer;
}

import GroovyLexer;

INCLUDECONF: 'includeConfig';