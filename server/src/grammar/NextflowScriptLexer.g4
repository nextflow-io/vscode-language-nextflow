/**
 * Grammar specification for the Nextflow scripting language.
 */
lexer grammar NextflowScriptLexer;

options {
    tokenVocab = GroovyLexer;
}

import GroovyLexer;

@header {
import { GroovyLexer } from './GroovyLexer';
}

EMIT_GUARD      : 'emit:';
ENV             : 'env';
EXEC_GUARD      : 'exec:';
FILE            : 'file';
FROM            : 'from';
INCLUDE         : 'include';
INPUT_GUARD     : 'input:';
MAIN_GUARD      : 'main:';
OUTPUT_GUARD    : 'output:';
PATH            : 'path';
PROCESS         : 'process';
SCRIPT_GUARD    : 'script:';
SHELL_GUARD     : 'shell:';
STDIN           : 'stdin';
STDOUT          : 'stdout';
STUB_GUARD      : 'stub:';
TAKE_GUARD      : 'take:';
TUPLE           : 'tuple';
VAL             : 'val';
WHEN_GUARD      : 'when:';
WORKFLOW        : 'workflow';
