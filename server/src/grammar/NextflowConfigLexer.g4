// Grammar specification for the Nextflow configuration language.

lexer grammar NextflowConfigLexer;

options {
    tokenVocab = GroovyLexer;
}

import GroovyLexer;

@header {
import { GroovyLexer } from './GroovyLexer';
}

INCLUDE_CONFIG: 'includeConfig';
