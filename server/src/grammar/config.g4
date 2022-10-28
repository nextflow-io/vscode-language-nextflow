parser grammar NextflowConfig;

options { tokenVocab = GroovyParser; }

nextFlowScript: scriptPart? (NL*)
				scopeDefition? (NL*)
				EOF;

scopeDefinition: KW_SCOPE LCURVE statementBlock RCURVE;

KW_AWS_SCOPE: 'aws';
KW_SCOPE: KW_AWS_SCOPE;
