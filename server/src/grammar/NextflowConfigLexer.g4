// Grammar specification for the Nextflow configuration language.

lexer grammar NextflowConfigLexer;

@header {
    import { GroovyLexer } from './GroovyLexer';
}

options {
    tokenVocab = GroovyLexer;
}

import GroovyLexer;

INCLUDECONF: 'includeConfig';