/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	Range,
	Position,
	CompletionRequest
} from 'vscode-languageserver/node';

import { ANTLRErrorListener, CharStream, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token } from 'antlr4ts';
import './grammar/GroovyParser';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import { Override } from 'antlr4ts/Decorators';
import { CodeCompletionCore } from 'antlr4-c3';
import { GroovyLexer } from './grammar/GroovyLexer';
import { GroovyParser } from './grammar/GroovyParser';


class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    @Override
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);

	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const pattern = /\b[A-Z]{2,}\b/g;
	let m: RegExpExecArray | null;

	let problems = 0;
	const diagnostics: Diagnostic[] = [];
	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		problems++;
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(m.index),
				end: textDocument.positionAt(m.index + m[0].length)
			},
			message: `${m[0]} is all uppercase.`,
			source: 'ex'
		};
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Spelling matters'
				},
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Particularly for names'
				}
			];
		}
		diagnostics.push(diagnostic);
	}

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		const document = documents.get(_textDocumentPosition.textDocument.uri);
		const document_text = document?.getText({start: {line: 0, character: 0}, end: _textDocumentPosition.position});
		if (document_text !== undefined) {
			const proposals = complete(document_text);
			console.log(proposals);
			return proposals;
		} else {
			return [];
		}
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		console.log(item.data);
		item.detail = "{";
		item.documentation = "blabla";
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();


//Code completion for nextflow
const complete = function(text: string) {
	const inputstream = CharStreams.fromString(text);
	const lexer = new GroovyLexer(inputstream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new GroovyParser(tokenStream);
	const errorListener = new ErrorListener();
	parser.addErrorListener(errorListener);

	const core = new CodeCompletionCore(parser);
	core.ignoredTokens = new Set<number>([
		GroovyLexer.RANGE_EXCLUSIVE_FULL,
		GroovyLexer.SPREAD_DOT,
		GroovyLexer.SAFE_DOT,
		GroovyLexer.SAFE_INDEX,
		GroovyLexer.SAFE_CHAIN_DOT,
		GroovyLexer.ELVIS,
		GroovyLexer.METHOD_POINTER,
		GroovyLexer.METHOD_REFERENCE,
		GroovyLexer.REGEX_FIND,
		GroovyLexer.REGEX_MATCH,
		GroovyLexer.POWER,
		GroovyLexer.POWER_ASSIGN,
		GroovyLexer.SPACESHIP,
		GroovyLexer.IDENTICAL,
		GroovyLexer.NOT_IDENTICAL,
		GroovyLexer.ARROW,
		GroovyLexer.LPAREN,
		GroovyLexer.RPAREN,
		GroovyLexer.LBRACE,
		GroovyLexer.RBRACE,
		GroovyLexer.LBRACK,
		GroovyLexer.RBRACK,
		GroovyLexer.SEMI,
		GroovyLexer.COMMA,
		GroovyLexer.DOT,
		GroovyLexer.ASSIGN,
		GroovyLexer.GT,
		GroovyLexer.LT,
		GroovyLexer.NOT,
		GroovyLexer.BITNOT,
		GroovyLexer.QUESTION,
		GroovyLexer.COLON,
		GroovyLexer.EQUAL,
		GroovyLexer.LE,
		GroovyLexer.GE,
		GroovyLexer.NOTEQUAL,
		GroovyLexer.AND,
		GroovyLexer.OR,
		GroovyLexer.INC,
		GroovyLexer.DEC,
		GroovyLexer.ADD,
		GroovyLexer.SUB,
		GroovyLexer.MUL,
		GroovyLexer.DIV,
		GroovyLexer.BITAND,
		GroovyLexer.BITOR,
		GroovyLexer.XOR,
		GroovyLexer.MOD,
		GroovyLexer.ADD_ASSIGN,
		GroovyLexer.SUB_ASSIGN,
		GroovyLexer.MUL_ASSIGN,
		GroovyLexer.DIV_ASSIGN,
		GroovyLexer.AND_ASSIGN,
		GroovyLexer.OR_ASSIGN,
		GroovyLexer.XOR_ASSIGN,
		GroovyLexer.MOD_ASSIGN,
		GroovyLexer.LSHIFT_ASSIGN,
		GroovyLexer.RSHIFT_ASSIGN,
		GroovyLexer.URSHIFT_ASSIGN,
		GroovyLexer.ELVIS_ASSIGN
	]);
	
	const candidates = core.collectCandidates(6);
	const retval = [];
	console.log(candidates.tokens);
	for (const x of candidates.tokens.keys()) {
		let label = GroovyLexer._LITERAL_NAMES[x];
		if (label !== undefined) {
			label = label.replace(/'/gi,"");
			retval.push(
				{
					label: label,
					kind: CompletionItemKind.Keyword,
					data: label
				});
			}
	}
	return retval;
};