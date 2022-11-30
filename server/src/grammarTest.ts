import { ANTLRErrorListener, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { CharStreams } from 'antlr4ts/CharStreams';
import { Override } from 'antlr4ts/Decorators';
import * as fs from 'fs';
import path, { parse } from 'path';
import { GroovyLexer } from './grammar/GroovyLexer';
import { GroovyParser } from './grammar/GroovyParser';
import { NextflowConfigLexer } from './grammar/NextflowConfigLexer';
import { NextflowConfigParser } from './grammar/NextflowConfigParser';


function walk(directory: string, filepaths: Array<string> = []) {
    const files = fs.readdirSync(directory);
    for (let filename of files) {
        const filepath = path.join(directory, filename);
        if (fs.statSync(filepath).isDirectory()) {
            walk(filepath, filepaths);
        } else if (path.extname(filename) === '.config') {
            filepaths.push(filepath);
        }
    }
    return filepaths;
}

class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    @Override
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

let config_files = walk("/Users/uwewinter/Documents/Biocommons/tower/nf-core/proteinfold/conf/");


for (let file of config_files) {
	fs.readFile(file,(err,data) => {
		console.log(file)
		let charstream = CharStreams.fromString(data.toString());
		const lexer = new NextflowConfigLexer(charstream);
		const tokenstream = new CommonTokenStream(lexer);
		const parser = new NextflowConfigParser(tokenstream);
		const errorListener = new ErrorListener();
		parser.addErrorListener(errorListener);
		try {
			let tree = parser.compilationUnit();
		} catch (ex) {
			console.log(ex);
		}
	});
}

