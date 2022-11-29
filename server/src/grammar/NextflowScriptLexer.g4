// Grammar specification for the Nextflow scripting language.

lexer grammar NextflowScriptLexer;

options {
    tokenVocab = GroovyLexer;
}

import GroovyLexer;

@header {
    
}

INCLUDE: 'include';
FROM: 'from';
AS: 'as';
PROCESS: 'process';
VAL: 'val';
FILE: 'file';
ENV: 'env';
PATH: 'path';
STDIN: 'stdin';
TUPLE: 'tuple';
STDOUT: 'stdout';
WORKFLOW: 'workflow';
TAKE: 'take:';
MAIN: 'main:';
EMIT: 'emit:';
INPUT: 'input:';
OUTPUT: 'output:';
WHEN: 'when:';
SCRIPT: 'script:';
SHELL: 'shell:';
EXEC: 'exec:';
STUB: 'stub:';