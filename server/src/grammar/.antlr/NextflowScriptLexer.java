// Generated from /Users/uwewinter/Documents/Biocommons/tower/vscode-fork/server/src/grammar/NextflowScriptLexer.g4 by ANTLR 4.9.2

    import { GroovyLexer } from './GroovyLexer';


import Denque = require("denque");
import { Token } from "antlr4ts";
import { IntStream } from "antlr4ts";


const NONSPACES_PATTERN = new RegExp("\\S+?");
const LETTER_AND_LEFTCURLY_PATTERN=new RegExp("[a-zA-Z_{]");
const NONSURROGATE_PATTERN=new RegExp("[^\u0001-\u007F\uD800-\uDBFF]");
const ISIDENTIFIERIGNORABLE = new RegExp("[\u0000-\u0008\u000E-\u001B\u007F-\u009F]");
const SURROGATE_PAIR1_PATTERN =new RegExp("[\uD800-\uDBFF]");
const SURROGATE_PAIR2_PATTERN = new RegExp("[\uDC00-\uDFFF]");

/** this is horrible, but the only way to do it in JS.
 * it equates to [\p{L}\p{Nd}_$]+
 */
const ISJAVAIDENTIFIERPART_PATTERN = new RegExp("[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19_$]");
/** this is horrible, but the only way to do it in JS.
 * it equates to [\p{Nd}]+
 */
const ISJAVAIDENTIFIERSTART_PATTERN = new RegExp("[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC_$]+");


class Paren {
    private text: string = '';
    private lastTokenType: number = -1;
    private line: number = -1;
    private column: number = -1;

    public constructor(text: string, lastTokenType: number, line: number, column: number) {
        this.text = text;
        this.lastTokenType = lastTokenType;
        this.line = line;
        this.column = column;
    }

    public getText() {
        return this.text;
    }

    public getLastTokenType() {
        return this.lastTokenType;
    }

    public getLine() {
        return this.line;
    }

    public getColumn() {
        return this.column;
    }

    public toString() {
        return this.text + this.line + this.column
    }
}

import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class NextflowScriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		StringLiteral=1, GStringBegin=2, GStringEnd=3, GStringPart=4, GStringPathPart=5, 
		RollBackOne=6, AS=7, DEF=8, IN=9, TRAIT=10, THREADSAFE=11, VAR=12, BuiltInPrimitiveType=13, 
		ABSTRACT=14, ASSERT=15, BREAK=16, YIELD=17, CASE=18, CATCH=19, CLASS=20, 
		CONST=21, CONTINUE=22, DEFAULT=23, DO=24, ELSE=25, ENUM=26, EXTENDS=27, 
		FINAL=28, FINALLY=29, FOR=30, IF=31, GOTO=32, IMPLEMENTS=33, IMPORT=34, 
		INSTANCEOF=35, INTERFACE=36, NATIVE=37, NEW=38, NON_SEALED=39, PACKAGE=40, 
		PERMITS=41, PRIVATE=42, PROTECTED=43, PUBLIC=44, RECORD=45, RETURN=46, 
		SEALED=47, STATIC=48, STRICTFP=49, SUPER=50, SWITCH=51, SYNCHRONIZED=52, 
		THIS=53, THROW=54, THROWS=55, TRANSIENT=56, TRY=57, VOID=58, VOLATILE=59, 
		WHILE=60, IntegerLiteral=61, FloatingPointLiteral=62, BooleanLiteral=63, 
		NullLiteral=64, RANGE_INCLUSIVE=65, RANGE_EXCLUSIVE_LEFT=66, RANGE_EXCLUSIVE_RIGHT=67, 
		RANGE_EXCLUSIVE_FULL=68, SPREAD_DOT=69, SAFE_DOT=70, SAFE_INDEX=71, SAFE_CHAIN_DOT=72, 
		ELVIS=73, METHOD_POINTER=74, METHOD_REFERENCE=75, REGEX_FIND=76, REGEX_MATCH=77, 
		POWER=78, POWER_ASSIGN=79, SPACESHIP=80, IDENTICAL=81, NOT_IDENTICAL=82, 
		ARROW=83, NOT_INSTANCEOF=84, NOT_IN=85, LPAREN=86, RPAREN=87, LBRACE=88, 
		RBRACE=89, LBRACK=90, RBRACK=91, SEMI=92, COMMA=93, DOT=94, ASSIGN=95, 
		GT=96, LT=97, NOT=98, BITNOT=99, QUESTION=100, COLON=101, EQUAL=102, LE=103, 
		GE=104, NOTEQUAL=105, AND=106, OR=107, INC=108, DEC=109, ADD=110, SUB=111, 
		MUL=112, DIV=113, BITAND=114, BITOR=115, XOR=116, MOD=117, ADD_ASSIGN=118, 
		SUB_ASSIGN=119, MUL_ASSIGN=120, DIV_ASSIGN=121, AND_ASSIGN=122, OR_ASSIGN=123, 
		XOR_ASSIGN=124, MOD_ASSIGN=125, LSHIFT_ASSIGN=126, RSHIFT_ASSIGN=127, 
		URSHIFT_ASSIGN=128, ELVIS_ASSIGN=129, CapitalizedIdentifier=130, Identifier=131, 
		AT=132, ELLIPSIS=133, WS=134, NL=135, SH_COMMENT=136, UNEXPECTED_CHAR=137, 
		INCLUDE=138, FROM=139, PROCESS=140, VAL=141, FILE=142, ENV=143, PATH=144, 
		STDIN=145, TUPLE=146, STDOUT=147, WORKFLOW=148, TAKE=149, MAIN=150, EMIT=151, 
		INPUT=152, OUTPUT=153, WHEN=154, SCRIPT=155, SHELL=156, EXEC=157, STUB=158;
	public static final int
		DQ_GSTRING_MODE=1, TDQ_GSTRING_MODE=2, SLASHY_GSTRING_MODE=3, DOLLAR_SLASHY_GSTRING_MODE=4, 
		GSTRING_TYPE_SELECTOR_MODE=5, GSTRING_PATH_MODE=6;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "DQ_GSTRING_MODE", "TDQ_GSTRING_MODE", "SLASHY_GSTRING_MODE", 
		"DOLLAR_SLASHY_GSTRING_MODE", "GSTRING_TYPE_SELECTOR_MODE", "GSTRING_PATH_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INCLUDE", "FROM", "AS", "PROCESS", "VAL", "FILE", "ENV", "PATH", "STDIN", 
			"TUPLE", "STDOUT", "WORKFLOW", "TAKE", "MAIN", "EMIT", "INPUT", "OUTPUT", 
			"WHEN", "SCRIPT", "SHELL", "EXEC", "STUB", "StringLiteral", "GStringBegin", 
			"TdqGStringBegin", "SlashyGStringBegin", "DollarSlashyGStringBegin", 
			"GStringEnd", "GStringPart", "GStringCharacter", "TdqGStringEnd", "TdqGStringPart", 
			"TdqGStringCharacter", "SlashyGStringEnd", "SlashyGStringPart", "SlashyGStringCharacter", 
			"DollarSlashyGStringEnd", "DollarSlashyGStringPart", "DollarSlashyGStringCharacter", 
			"GStringLBrace", "GStringIdentifier", "GStringPathPart", "RollBackOne", 
			"DqStringCharacter", "SqStringCharacter", "TdqStringCharacter", "TsqStringCharacter", 
			"SlashyStringCharacter", "DollarSlashyStringCharacter", "DEF", "IN", 
			"TRAIT", "THREADSAFE", "VAR", "BuiltInPrimitiveType", "ABSTRACT", "ASSERT", 
			"BOOLEAN", "BREAK", "YIELD", "BYTE", "CASE", "CATCH", "CHAR", "CLASS", 
			"CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", 
			"FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", 
			"INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "NON_SEALED", 
			"PACKAGE", "PERMITS", "PRIVATE", "PROTECTED", "PUBLIC", "RECORD", "RETURN", 
			"SEALED", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", 
			"THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", 
			"IntegerLiteral", "Zero", "DecimalIntegerLiteral", "HexIntegerLiteral", 
			"OctalIntegerLiteral", "BinaryIntegerLiteral", "IntegerTypeSuffix", "DecimalNumeral", 
			"Digits", "Digit", "NonZeroDigit", "DigitOrUnderscore", "Underscores", 
			"Underscore", "HexNumeral", "HexDigits", "HexDigit", "HexDigitOrUnderscore", 
			"OctalNumeral", "OctalDigits", "OctalDigit", "OctalDigitOrUnderscore", 
			"BinaryNumeral", "BinaryDigits", "BinaryDigit", "BinaryDigitOrUnderscore", 
			"FloatingPointLiteral", "DecimalFloatingPointLiteral", "ExponentPart", 
			"ExponentIndicator", "SignedInteger", "Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral", 
			"HexSignificand", "BinaryExponent", "BinaryExponentIndicator", "Dot", 
			"BooleanLiteral", "EscapeSequence", "OctalEscape", "UnicodeEscape", "ZeroToThree", 
			"DollarEscape", "LineEscape", "LineTerminator", "SlashEscape", "Backslash", 
			"Slash", "Dollar", "GStringQuotationMark", "SqStringQuotationMark", "TdqStringQuotationMark", 
			"TsqStringQuotationMark", "DollarSlashyGStringQuotationMarkBegin", "DollarSlashyGStringQuotationMarkEnd", 
			"DollarSlashEscape", "DollarDollarEscape", "DollarSlashDollarEscape", 
			"NullLiteral", "RANGE_INCLUSIVE", "RANGE_EXCLUSIVE_LEFT", "RANGE_EXCLUSIVE_RIGHT", 
			"RANGE_EXCLUSIVE_FULL", "SPREAD_DOT", "SAFE_DOT", "SAFE_INDEX", "SAFE_CHAIN_DOT", 
			"ELVIS", "METHOD_POINTER", "METHOD_REFERENCE", "REGEX_FIND", "REGEX_MATCH", 
			"POWER", "POWER_ASSIGN", "SPACESHIP", "IDENTICAL", "NOT_IDENTICAL", "ARROW", 
			"NOT_INSTANCEOF", "NOT_IN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", 
			"RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "NOT", "BITNOT", 
			"QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", 
			"DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "XOR", "MOD", "ADD_ASSIGN", 
			"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
			"XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", 
			"ELVIS_ASSIGN", "CapitalizedIdentifier", "Identifier", "IdentifierInGString", 
			"JavaLetter", "JavaLetterInGString", "JavaLetterOrDigit", "JavaLetterOrDigitInGString", 
			"ShCommand", "AT", "ELLIPSIS", "WS", "NL", "ML_COMMENT", "SL_COMMENT", 
			"SH_COMMENT", "UNEXPECTED_CHAR"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "'include'", "'from'", "'process'", 
			"'val'", "'file'", "'env'", "'path'", "'stdin'", "'tuple'", "'stdout'", 
			"'workflow'", "'take:'", "'main:'", "'emit:'", "'input:'", "'output:'", 
			"'when:'", "'script:'", "'shell:'", "'exec:'", "'stub:'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "StringLiteral", "GStringBegin", "GStringEnd", "GStringPart", "GStringPathPart", 
			"RollBackOne", "AS", "DEF", "IN", "TRAIT", "THREADSAFE", "VAR", "BuiltInPrimitiveType", 
			"ABSTRACT", "ASSERT", "BREAK", "YIELD", "CASE", "CATCH", "CLASS", "CONST", 
			"CONTINUE", "DEFAULT", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", 
			"FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INTERFACE", 
			"NATIVE", "NEW", "NON_SEALED", "PACKAGE", "PERMITS", "PRIVATE", "PROTECTED", 
			"PUBLIC", "RECORD", "RETURN", "SEALED", "STATIC", "STRICTFP", "SUPER", 
			"SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", "TRY", 
			"VOID", "VOLATILE", "WHILE", "IntegerLiteral", "FloatingPointLiteral", 
			"BooleanLiteral", "NullLiteral", "RANGE_INCLUSIVE", "RANGE_EXCLUSIVE_LEFT", 
			"RANGE_EXCLUSIVE_RIGHT", "RANGE_EXCLUSIVE_FULL", "SPREAD_DOT", "SAFE_DOT", 
			"SAFE_INDEX", "SAFE_CHAIN_DOT", "ELVIS", "METHOD_POINTER", "METHOD_REFERENCE", 
			"REGEX_FIND", "REGEX_MATCH", "POWER", "POWER_ASSIGN", "SPACESHIP", "IDENTICAL", 
			"NOT_IDENTICAL", "ARROW", "NOT_INSTANCEOF", "NOT_IN", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", 
			"GT", "LT", "NOT", "BITNOT", "QUESTION", "COLON", "EQUAL", "LE", "GE", 
			"NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
			"BITOR", "XOR", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
			"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
			"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ELVIS_ASSIGN", "CapitalizedIdentifier", 
			"Identifier", "AT", "ELLIPSIS", "WS", "NL", "SH_COMMENT", "UNEXPECTED_CHAR", 
			"INCLUDE", "FROM", "PROCESS", "VAL", "FILE", "ENV", "PATH", "STDIN", 
			"TUPLE", "STDOUT", "WORKFLOW", "TAKE", "MAIN", "EMIT", "INPUT", "OUTPUT", 
			"WHEN", "SCRIPT", "SHELL", "EXEC", "STUB"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	    private errorIgnored: boolean = false;
	    private tokenIndex: number = -1;
	    private lastTokenType: number = -1;
	    private invalidDigitCount: number = -1;

	    /**
	     * Record the index and token type of the current token while emitting tokens.
	     */
	    @Override
	    public emit(token?: Token) : Token {
	        if (token === undefined) {
	            return super.emit();
	        }

	        this.tokenIndex = this.tokenIndex + 1;
	        let tokenType = token.type;
	        if (Token.DEFAULT_CHANNEL == token.channel) {
	            this.lastTokenType = tokenType;
	        }

	        if (GroovyLexer.RollBackOne == tokenType) {
	            this.rollbackOneChar();
	        }

	        return super.emit(token);
	    }

	    public static REGEX_CHECK_ARRAY = new Set<Number> ([
	        GroovyLexer.DEC,
	        GroovyLexer.INC,
	        GroovyLexer.THIS,
	        GroovyLexer.RBRACE,
	        GroovyLexer.RBRACK,
	        GroovyLexer.RPAREN,
	        GroovyLexer.GStringEnd,
	        GroovyLexer.NullLiteral,
	        GroovyLexer.StringLiteral,
	        GroovyLexer.BooleanLiteral,
	        GroovyLexer.IntegerLiteral,
	        GroovyLexer.FloatingPointLiteral,
	        GroovyLexer.Identifier,
	        GroovyLexer.CapitalizedIdentifier
	    ]);

	    private isRegexAllowed() {
	        return !(GroovyLexer.REGEX_CHECK_ARRAY.has(this.lastTokenType));
	    }

	    /**
	     * just a hook, which will be overrided by GroovyLangLexer
	     */
	    protected rollbackOneChar() {}

	    protected enterParenCallback(text: string) {}

	    protected exitParenCallback(text: string) {}

	    private parenStack = new Denque<Paren>();

	    private enterParen() {
	        let text = this.text;
	        this.enterParenCallback(text);
	        this.parenStack.push(new Paren(text, this.lastTokenType, this.line, this.charPositionInLine));
	    }

	    private exitParen() {
	        let text = this.text;
	        this.exitParenCallback(text);
	        let paren = this.parenStack.peekBack();
	        if (paren === undefined) return;
	        this.parenStack.pop();
	    }

	    private isInsideParens() {
	        let paren = this.parenStack.peekBack();
	        // We just care about "(", "[" and "?[", inside which the new lines will be ignored.
	        // Notice: the new lines between "{" and "}" can not be ignored.
	        if (paren === undefined) {
	            return false;
	        }

	        let text = paren.getText();

	        return ("(" === text && GroovyLexer.TRY != paren.getLastTokenType()) // we don't treat try-paren(i.e. try (....)) as parenthesis
	                    || "[" === text || "?[" === text;
	    }

	    private ignoreTokenInsideParens() {
	        if (!this.isInsideParens()) {
	            return;
	        }

	        this.channel = Token.HIDDEN_CHANNEL;
	    }

	    private ignoreMultiLineCommentConditionally() {
	        if (!this.isInsideParens() && GroovyLexer.isFollowedByWhiteSpaces(this._input)) {
	            return;
	        }

	        this.channel = Token.HIDDEN_CHANNEL;
	    }

	    public static isFollowedByWhiteSpaces(cs : CharStream) {
	        for (let index = 1, c = cs.LA(index); !('\r' === String.fromCodePoint(c) || '\n' == String.fromCodePoint(c) || IntStream.EOF == c); index++, c = cs.LA(index)) {
	            if (NONSPACES_PATTERN.test(String.fromCodePoint(c))) {
	                return false;
	            }
	        }

	        return true;
	    }

	    public static isFollowedByJavaLetterInGString(cs: CharStream) {
	        let c1 = cs.LA(1);

	        if ('$' == String.fromCodePoint(c1)) { // single $ is not a valid identifier
	            return false;
	        }

	        let str1 = String.fromCodePoint(c1);

	        if (LETTER_AND_LEFTCURLY_PATTERN.test(str1)) {
	            return true;
	        }

	        if (NONSURROGATE_PATTERN.test(str1)
	                && ISJAVAIDENTIFIERPART_PATTERN.test(str1)) {
	            return true;
	        }

	        let c2 = cs.LA(2);
	        let str2 = String.fromCodePoint(c2);

	        if (SURROGATE_PAIR1_PATTERN.test(str1)
	                && SURROGATE_PAIR2_PATTERN.test(str2)
	                && ISJAVAIDENTIFIERPART_PATTERN.test(String.fromCodePoint(c1,c2))) {

	            return true;
	        }

	        return false;
	    }

	    public static isFollowedBy(cs: CharStream, ...chars: string[]) {
	        let c1 = String.fromCodePoint(cs.LA(1));

	        for (let c of chars) {
	            if (c1 === c) {
	                return true;
	            }
	        }

	        return false;
	    }

	    @Override
	    public getSyntaxErrorSource() {
	        return 0;
	    }

	    @Override
	    public getErrorLine() {
	        return this.line;
	    }

	    @Override
	    public getErrorColumn() {
	        return this.charPositionInLine + 1;
	    }

	    @Override
	    public popMode() {
	        try {
	            return super.popMode();
	        } catch (EmptyStackException) { // raised when parens are unmatched: too many right braces

	        }

	        return Number.MIN_VALUE;
	    }

	    public static isJavaIdentifierStartAndNotIdentifierIgnorable(str: string) {
	        return ISJAVAIDENTIFIERSTART_PATTERN.test(str) && !ISIDENTIFIERIGNORABLE.test(str);
	    }

	    public static isJavaIdentifierPartAndNotIdentifierIgnorable(str: string) {
	        return ISJAVAIDENTIFIERPART_PATTERN.test(str) && !ISIDENTIFIERIGNORABLE.test(str);
	    }

	    public isErrorIgnored() {
	        return this.errorIgnored;
	    }

	    public setErrorIgnored(errorIgnored: boolean) {
	        this.errorIgnored = errorIgnored;
	    }

	    public check(condition: boolean, message: string , position: number, toAttachPositionInfo: boolean ) {
	        if (condition) {
	            return;
	        }

	        throw "" + position + ": message";
	    }


	public NextflowScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "NextflowScriptLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 39:
			GStringLBrace_action((RuleContext)_localctx, actionIndex);
			break;
		case 42:
			RollBackOne_action((RuleContext)_localctx, actionIndex);
			break;
		case 110:
			IntegerLiteral_action((RuleContext)_localctx, actionIndex);
			break;
		case 136:
			FloatingPointLiteral_action((RuleContext)_localctx, actionIndex);
			break;
		case 176:
			SAFE_INDEX_action((RuleContext)_localctx, actionIndex);
			break;
		case 191:
			LPAREN_action((RuleContext)_localctx, actionIndex);
			break;
		case 192:
			RPAREN_action((RuleContext)_localctx, actionIndex);
			break;
		case 193:
			LBRACE_action((RuleContext)_localctx, actionIndex);
			break;
		case 194:
			RBRACE_action((RuleContext)_localctx, actionIndex);
			break;
		case 195:
			LBRACK_action((RuleContext)_localctx, actionIndex);
			break;
		case 196:
			RBRACK_action((RuleContext)_localctx, actionIndex);
			break;
		case 246:
			NL_action((RuleContext)_localctx, actionIndex);
			break;
		case 247:
			ML_COMMENT_action((RuleContext)_localctx, actionIndex);
			break;
		case 248:
			SL_COMMENT_action((RuleContext)_localctx, actionIndex);
			break;
		case 249:
			SH_COMMENT_action((RuleContext)_localctx, actionIndex);
			break;
		case 250:
			UNEXPECTED_CHAR_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void GStringLBrace_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:
			 this.enterParen();  
			break;
		}
	}
	private void RollBackOne_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 1:

			                // a trick to handle GStrings followed by EOF properly
			                let readChar = String.fromCodePoint(this._input.LA(-1));
			                if (GroovyLexer.EOF == this._input.LA(1) && ('"' === readChar || '/' === readChar)) {
			                    this.type = GroovyLexer.GStringEnd;
			                } else {
			                    this.channel = Token.HIDDEN_CHANNEL;
			                }
			            
			break;
		}
	}
	private void IntegerLiteral_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 2:
			 this.check(this.errorIgnored, "Number ending with underscores is invalid", -1, true); 
			break;
		case 3:
			 this.invalidDigitCount++; 
			break;
		case 4:
			 this.check(this.errorIgnored, "Invalid octal number", -(this.invalidDigitCount + 1), true); 
			break;
		}
	}
	private void FloatingPointLiteral_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 5:
			 this.check(this.errorIgnored, "Number ending with underscores is invalid", -1, true); 
			break;
		}
	}
	private void SAFE_INDEX_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 6:
			 this.enterParen();     
			break;
		}
	}
	private void LPAREN_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 7:
			 this.enterParen();     
			break;
		}
	}
	private void RPAREN_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 8:
			 this.exitParen();      
			break;
		}
	}
	private void LBRACE_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 9:
			 this.enterParen();     
			break;
		}
	}
	private void RBRACE_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 10:
			 this.exitParen();      
			break;
		}
	}
	private void LBRACK_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 11:
			 this.enterParen();     
			break;
		}
	}
	private void RBRACK_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 12:
			 this.exitParen();      
			break;
		}
	}
	private void NL_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 13:
			 this.ignoreTokenInsideParens(); 
			break;
		}
	}
	private void ML_COMMENT_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 14:
			 this.ignoreMultiLineCommentConditionally(); 
			break;
		}
	}
	private void SL_COMMENT_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 15:
			 this.ignoreTokenInsideParens(); 
			break;
		}
	}
	private void SH_COMMENT_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 16:
			 this.check(this.errorIgnored || 0 == this.tokenIndex, "Shebang comment should appear at the first line", -2, true); 
			break;
		}
	}
	private void UNEXPECTED_CHAR_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 17:
			 this.check(this.errorIgnored, "Unexpected character: '" + this.text.replace("'", "\\'") + "'", -1, false); 
			break;
		}
	}
	@Override
	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 22:
			return StringLiteral_sempred((RuleContext)_localctx, predIndex);
		case 25:
			return SlashyGStringBegin_sempred((RuleContext)_localctx, predIndex);
		case 26:
			return DollarSlashyGStringBegin_sempred((RuleContext)_localctx, predIndex);
		case 34:
			return SlashyGStringPart_sempred((RuleContext)_localctx, predIndex);
		case 37:
			return DollarSlashyGStringPart_sempred((RuleContext)_localctx, predIndex);
		case 45:
			return TdqStringCharacter_sempred((RuleContext)_localctx, predIndex);
		case 46:
			return TsqStringCharacter_sempred((RuleContext)_localctx, predIndex);
		case 47:
			return SlashyStringCharacter_sempred((RuleContext)_localctx, predIndex);
		case 48:
			return DollarSlashyStringCharacter_sempred((RuleContext)_localctx, predIndex);
		case 189:
			return NOT_INSTANCEOF_sempred((RuleContext)_localctx, predIndex);
		case 190:
			return NOT_IN_sempred((RuleContext)_localctx, predIndex);
		case 235:
			return CapitalizedIdentifier_sempred((RuleContext)_localctx, predIndex);
		case 238:
			return JavaLetter_sempred((RuleContext)_localctx, predIndex);
		case 239:
			return JavaLetterInGString_sempred((RuleContext)_localctx, predIndex);
		case 240:
			return JavaLetterOrDigit_sempred((RuleContext)_localctx, predIndex);
		case 241:
			return JavaLetterOrDigitInGString_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean StringLiteral_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return  this.isRegexAllowed() && String.fromCodePoint(this._input.LA(1)) != '*' ;
		}
		return true;
	}
	private boolean SlashyGStringBegin_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return  this.isRegexAllowed() && String.fromCodePoint(this._input.LA(1)) != '*' ;
		case 2:
			return  GroovyLexer.isFollowedByJavaLetterInGString(this._input) ;
		}
		return true;
	}
	private boolean DollarSlashyGStringBegin_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return  GroovyLexer.isFollowedByJavaLetterInGString(this._input) ;
		}
		return true;
	}
	private boolean SlashyGStringPart_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return  GroovyLexer.isFollowedByJavaLetterInGString(this._input) ;
		}
		return true;
	}
	private boolean DollarSlashyGStringPart_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return  GroovyLexer.isFollowedByJavaLetterInGString(this._input) ;
		}
		return true;
	}
	private boolean TdqStringCharacter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return  String.fromCodePoint(this._input.LA(1)) != '"' || String.fromCodePoint(this._input.LA(2)) != '"' || String.fromCodePoint(this._input.LA(3)) == '"' && (String.fromCodePoint(this._input.LA(4)) != '"' || String.fromCodePoint(this._input.LA(5)) != '"') ;
		}
		return true;
	}
	private boolean TsqStringCharacter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return  String.fromCodePoint(this._input.LA(1)) != '\'' || String.fromCodePoint(this._input.LA(2)) != '\'' || String.fromCodePoint(this._input.LA(3)) == '\'' && (String.fromCodePoint(this._input.LA(4)) != '\'' || String.fromCodePoint(this._input.LA(5)) != '\'') ;
		}
		return true;
	}
	private boolean SlashyStringCharacter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return  !GroovyLexer.isFollowedByJavaLetterInGString(this._input) ;
		}
		return true;
	}
	private boolean DollarSlashyStringCharacter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 9:
			return  String.fromCodePoint(this._input.LA(-4)) != '$' ;
		case 10:
			return  String.fromCodePoint(this._input.LA(1)) != '$' ;
		case 11:
			return  String.fromCodePoint(this._input.LA(1)) != '$' ;
		case 12:
			return  !GroovyLexer.isFollowedByJavaLetterInGString(this._input) ;
		}
		return true;
	}
	private boolean NOT_INSTANCEOF_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return  GroovyLexer.isFollowedBy(this._input, ' ', '\t', '\r', '\n') ;
		}
		return true;
	}
	private boolean NOT_IN_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return  GroovyLexer.isFollowedBy(this._input, ' ', '\t', '\r', '\n', '[', '(', '{') ;
		}
		return true;
	}
	private boolean CapitalizedIdentifier_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 15:
			return String.fromCodePoint(this._input.LA(-1)).toUpperCase() == String.fromCodePoint(this._input.LA(-1));
		}
		return true;
	}
	private boolean JavaLetter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 16:
			return  GroovyLexer.isJavaIdentifierStartAndNotIdentifierIgnorable(String.fromCodePoint(this._input.LA(-1))) ;
		case 17:
			return  ISJAVAIDENTIFIERSTART_PATTERN.test(String.fromCodePoint(this._input.LA(-2),this._input.LA(-1))) ;
		}
		return true;
	}
	private boolean JavaLetterInGString_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 18:
			return  String.fromCodePoint(this._input.LA(-1)) != '$' ;
		}
		return true;
	}
	private boolean JavaLetterOrDigit_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 19:
			return  GroovyLexer.isJavaIdentifierPartAndNotIdentifierIgnorable(String.fromCodePoint(this._input.LA(-1))) ;
		case 20:
			return  ISJAVAIDENTIFIERPART_PATTERN.test(String.fromCodePoint(this._input.LA(-2),this._input.LA(-1))) ;
		}
		return true;
	}
	private boolean JavaLetterOrDigitInGString_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 21:
			return  String.fromCodePoint(this._input.LA(-1)) != '$' ;
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\u00a0\u07a2\b\1\b"+
		"\1\b\1\b\1\b\1\b\1\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7"+
		"\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17"+
		"\4\20\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26"+
		"\4\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35"+
		"\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t"+
		"\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61"+
		"\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49"+
		"\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD"+
		"\4E\tE\4F\tF\4G\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P"+
		"\tP\4Q\tQ\4R\tR\4S\tS\4T\tT\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t["+
		"\4\\\t\\\4]\t]\4^\t^\4_\t_\4`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4"+
		"g\tg\4h\th\4i\ti\4j\tj\4k\tk\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\t"+
		"r\4s\ts\4t\tt\4u\tu\4v\tv\4w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4"+
		"~\t~\4\177\t\177\4\u0080\t\u0080\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083"+
		"\t\u0083\4\u0084\t\u0084\4\u0085\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087"+
		"\4\u0088\t\u0088\4\u0089\t\u0089\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c"+
		"\t\u008c\4\u008d\t\u008d\4\u008e\t\u008e\4\u008f\t\u008f\4\u0090\t\u0090"+
		"\4\u0091\t\u0091\4\u0092\t\u0092\4\u0093\t\u0093\4\u0094\t\u0094\4\u0095"+
		"\t\u0095\4\u0096\t\u0096\4\u0097\t\u0097\4\u0098\t\u0098\4\u0099\t\u0099"+
		"\4\u009a\t\u009a\4\u009b\t\u009b\4\u009c\t\u009c\4\u009d\t\u009d\4\u009e"+
		"\t\u009e\4\u009f\t\u009f\4\u00a0\t\u00a0\4\u00a1\t\u00a1\4\u00a2\t\u00a2"+
		"\4\u00a3\t\u00a3\4\u00a4\t\u00a4\4\u00a5\t\u00a5\4\u00a6\t\u00a6\4\u00a7"+
		"\t\u00a7\4\u00a8\t\u00a8\4\u00a9\t\u00a9\4\u00aa\t\u00aa\4\u00ab\t\u00ab"+
		"\4\u00ac\t\u00ac\4\u00ad\t\u00ad\4\u00ae\t\u00ae\4\u00af\t\u00af\4\u00b0"+
		"\t\u00b0\4\u00b1\t\u00b1\4\u00b2\t\u00b2\4\u00b3\t\u00b3\4\u00b4\t\u00b4"+
		"\4\u00b5\t\u00b5\4\u00b6\t\u00b6\4\u00b7\t\u00b7\4\u00b8\t\u00b8\4\u00b9"+
		"\t\u00b9\4\u00ba\t\u00ba\4\u00bb\t\u00bb\4\u00bc\t\u00bc\4\u00bd\t\u00bd"+
		"\4\u00be\t\u00be\4\u00bf\t\u00bf\4\u00c0\t\u00c0\4\u00c1\t\u00c1\4\u00c2"+
		"\t\u00c2\4\u00c3\t\u00c3\4\u00c4\t\u00c4\4\u00c5\t\u00c5\4\u00c6\t\u00c6"+
		"\4\u00c7\t\u00c7\4\u00c8\t\u00c8\4\u00c9\t\u00c9\4\u00ca\t\u00ca\4\u00cb"+
		"\t\u00cb\4\u00cc\t\u00cc\4\u00cd\t\u00cd\4\u00ce\t\u00ce\4\u00cf\t\u00cf"+
		"\4\u00d0\t\u00d0\4\u00d1\t\u00d1\4\u00d2\t\u00d2\4\u00d3\t\u00d3\4\u00d4"+
		"\t\u00d4\4\u00d5\t\u00d5\4\u00d6\t\u00d6\4\u00d7\t\u00d7\4\u00d8\t\u00d8"+
		"\4\u00d9\t\u00d9\4\u00da\t\u00da\4\u00db\t\u00db\4\u00dc\t\u00dc\4\u00dd"+
		"\t\u00dd\4\u00de\t\u00de\4\u00df\t\u00df\4\u00e0\t\u00e0\4\u00e1\t\u00e1"+
		"\4\u00e2\t\u00e2\4\u00e3\t\u00e3\4\u00e4\t\u00e4\4\u00e5\t\u00e5\4\u00e6"+
		"\t\u00e6\4\u00e7\t\u00e7\4\u00e8\t\u00e8\4\u00e9\t\u00e9\4\u00ea\t\u00ea"+
		"\4\u00eb\t\u00eb\4\u00ec\t\u00ec\4\u00ed\t\u00ed\4\u00ee\t\u00ee\4\u00ef"+
		"\t\u00ef\4\u00f0\t\u00f0\4\u00f1\t\u00f1\4\u00f2\t\u00f2\4\u00f3\t\u00f3"+
		"\4\u00f4\t\u00f4\4\u00f5\t\u00f5\4\u00f6\t\u00f6\4\u00f7\t\u00f7\4\u00f8"+
		"\t\u00f8\4\u00f9\t\u00f9\4\u00fa\t\u00fa\4\u00fb\t\u00fb\4\u00fc\t\u00fc"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b"+
		"\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3"+
		"\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3"+
		"\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\7"+
		"\30\u028a\n\30\f\30\16\30\u028d\13\30\3\30\3\30\3\30\3\30\7\30\u0293\n"+
		"\30\f\30\16\30\u0296\13\30\3\30\3\30\3\30\3\30\3\30\6\30\u029d\n\30\r"+
		"\30\16\30\u029e\3\30\3\30\3\30\3\30\7\30\u02a5\n\30\f\30\16\30\u02a8\13"+
		"\30\3\30\3\30\3\30\3\30\7\30\u02ae\n\30\f\30\16\30\u02b1\13\30\3\30\3"+
		"\30\3\30\3\30\6\30\u02b7\n\30\r\30\16\30\u02b8\3\30\3\30\5\30\u02bd\n"+
		"\30\3\31\3\31\7\31\u02c1\n\31\f\31\16\31\u02c4\13\31\3\31\3\31\3\31\3"+
		"\31\3\31\3\32\3\32\7\32\u02cd\n\32\f\32\16\32\u02d0\13\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\32\3\33\3\33\3\33\7\33\u02db\n\33\f\33\16\33\u02de\13"+
		"\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\7\34\u02e9\n\34\f\34"+
		"\16\34\u02ec\13\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3"+
		"\35\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3"+
		"!\3!\3\"\3\"\3\"\3\"\3#\5#\u0310\n#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3"+
		"%\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3)\3)\3"+
		")\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3+\3+\3+\3,\3,\3,\3,\3,\3-\3-\5-\u0347"+
		"\n-\3.\3.\5.\u034b\n.\3/\3/\3/\3/\3/\5/\u0352\n/\3\60\3\60\3\60\3\60\3"+
		"\60\5\60\u0359\n\60\3\61\3\61\3\61\3\61\3\61\5\61\u0360\n\61\3\62\3\62"+
		"\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\5\62\u0370"+
		"\n\62\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\65\3\65\3\65\3\65"+
		"\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67"+
		"\3\67\38\38\38\38\38\38\38\38\58\u0396\n8\39\39\39\39\39\39\39\39\39\3"+
		":\3:\3:\3:\3:\3:\3:\3;\3;\3;\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3<\3=\3=\3"+
		"=\3=\3=\3=\3>\3>\3>\3>\3>\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3A\3A\3A\3"+
		"A\3A\3B\3B\3B\3B\3B\3B\3C\3C\3C\3C\3C\3C\3D\3D\3D\3D\3D\3D\3D\3D\3D\3"+
		"E\3E\3E\3E\3E\3E\3E\3E\3F\3F\3F\3G\3G\3G\3G\3G\3G\3G\3H\3H\3H\3H\3H\3"+
		"I\3I\3I\3I\3I\3J\3J\3J\3J\3J\3J\3J\3J\3K\3K\3K\3K\3K\3K\3L\3L\3L\3L\3"+
		"L\3L\3L\3L\3M\3M\3M\3M\3M\3M\3N\3N\3N\3N\3O\3O\3O\3P\3P\3P\3P\3P\3Q\3"+
		"Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3R\3R\3R\3S\3S\3S\3S\3S\3S\3"+
		"S\3S\3S\3S\3S\3T\3T\3T\3T\3U\3U\3U\3U\3U\3U\3U\3U\3U\3U\3V\3V\3V\3V\3"+
		"V\3W\3W\3W\3W\3W\3W\3W\3X\3X\3X\3X\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3"+
		"Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3[\3[\3[\3[\3[\3[\3[\3[\3\\\3\\\3\\\3\\\3\\\3\\"+
		"\3\\\3\\\3]\3]\3]\3]\3]\3]\3]\3]\3]\3]\3^\3^\3^\3^\3^\3^\3^\3_\3_\3_\3"+
		"_\3_\3_\3_\3`\3`\3`\3`\3`\3`\3`\3a\3a\3a\3a\3a\3a\3a\3b\3b\3b\3b\3b\3"+
		"b\3c\3c\3c\3c\3c\3c\3c\3d\3d\3d\3d\3d\3d\3d\3d\3d\3e\3e\3e\3e\3e\3e\3"+
		"f\3f\3f\3f\3f\3f\3f\3g\3g\3g\3g\3g\3g\3g\3g\3g\3g\3g\3g\3g\3h\3h\3h\3"+
		"h\3h\3i\3i\3i\3i\3i\3i\3j\3j\3j\3j\3j\3j\3j\3k\3k\3k\3k\3k\3k\3k\3k\3"+
		"k\3k\3l\3l\3l\3l\3m\3m\3m\3m\3m\3n\3n\3n\3n\3n\3n\3n\3n\3n\3o\3o\3o\3"+
		"o\3o\3o\3p\3p\3p\3p\5p\u0516\np\3p\3p\3p\5p\u051b\np\3p\3p\3p\6p\u0520"+
		"\np\rp\16p\u0521\3p\3p\5p\u0526\np\5p\u0528\np\3q\3q\3r\3r\5r\u052e\n"+
		"r\3s\3s\5s\u0532\ns\3t\3t\5t\u0536\nt\3u\3u\5u\u053a\nu\3v\3v\3w\3w\3"+
		"w\5w\u0541\nw\3w\3w\3w\5w\u0546\nw\5w\u0548\nw\3x\3x\7x\u054c\nx\fx\16"+
		"x\u054f\13x\3x\5x\u0552\nx\3y\3y\5y\u0556\ny\3z\3z\3{\3{\5{\u055c\n{\3"+
		"|\6|\u055f\n|\r|\16|\u0560\3}\3}\3~\3~\3~\3~\3\177\3\177\7\177\u056b\n"+
		"\177\f\177\16\177\u056e\13\177\3\177\5\177\u0571\n\177\3\u0080\3\u0080"+
		"\3\u0081\3\u0081\5\u0081\u0577\n\u0081\3\u0082\3\u0082\5\u0082\u057b\n"+
		"\u0082\3\u0082\3\u0082\3\u0083\3\u0083\7\u0083\u0581\n\u0083\f\u0083\16"+
		"\u0083\u0584\13\u0083\3\u0083\5\u0083\u0587\n\u0083\3\u0084\3\u0084\3"+
		"\u0085\3\u0085\5\u0085\u058d\n\u0085\3\u0086\3\u0086\3\u0086\3\u0086\3"+
		"\u0087\3\u0087\7\u0087\u0595\n\u0087\f\u0087\16\u0087\u0598\13\u0087\3"+
		"\u0087\5\u0087\u059b\n\u0087\3\u0088\3\u0088\3\u0089\3\u0089\5\u0089\u05a1"+
		"\n\u0089\3\u008a\3\u008a\5\u008a\u05a5\n\u008a\3\u008a\3\u008a\3\u008a"+
		"\5\u008a\u05aa\n\u008a\3\u008b\5\u008b\u05ad\n\u008b\3\u008b\3\u008b\3"+
		"\u008b\5\u008b\u05b2\n\u008b\3\u008b\5\u008b\u05b5\n\u008b\3\u008b\3\u008b"+
		"\3\u008b\5\u008b\u05ba\n\u008b\3\u008b\3\u008b\3\u008b\5\u008b\u05bf\n"+
		"\u008b\3\u008c\3\u008c\3\u008c\3\u008d\3\u008d\3\u008e\5\u008e\u05c7\n"+
		"\u008e\3\u008e\3\u008e\3\u008f\3\u008f\3\u0090\3\u0090\3\u0091\3\u0091"+
		"\3\u0091\5\u0091\u05d2\n\u0091\3\u0092\3\u0092\5\u0092\u05d6\n\u0092\3"+
		"\u0092\3\u0092\3\u0092\5\u0092\u05db\n\u0092\3\u0092\3\u0092\3\u0092\5"+
		"\u0092\u05e0\n\u0092\3\u0093\3\u0093\3\u0093\3\u0094\3\u0094\3\u0095\3"+
		"\u0095\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096"+
		"\3\u0096\5\u0096\u05f2\n\u0096\3\u0097\3\u0097\3\u0097\3\u0097\3\u0097"+
		"\3\u0097\3\u0097\5\u0097\u05fb\n\u0097\3\u0098\3\u0098\3\u0098\3\u0098"+
		"\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\5\u0098"+
		"\u0609\n\u0098\3\u0099\3\u0099\3\u0099\3\u0099\3\u0099\3\u0099\3\u0099"+
		"\3\u009a\3\u009a\3\u009b\3\u009b\3\u009b\3\u009c\3\u009c\3\u009c\3\u009d"+
		"\5\u009d\u061b\n\u009d\3\u009d\3\u009d\5\u009d\u061f\n\u009d\3\u009e\3"+
		"\u009e\3\u009e\3\u009f\3\u009f\3\u00a0\3\u00a0\3\u00a1\3\u00a1\3\u00a2"+
		"\3\u00a2\3\u00a3\3\u00a3\3\u00a4\3\u00a4\3\u00a4\3\u00a4\3\u00a5\3\u00a5"+
		"\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a6\3\u00a7\3\u00a7\3\u00a7\3\u00a8"+
		"\3\u00a8\3\u00a8\3\u00a9\3\u00a9\3\u00a9\3\u00aa\3\u00aa\3\u00aa\3\u00aa"+
		"\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ac\3\u00ac\3\u00ac\3\u00ad"+
		"\3\u00ad\3\u00ad\3\u00ad\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00af\3\u00af"+
		"\3\u00af\3\u00af\3\u00af\3\u00b0\3\u00b0\3\u00b0\3\u00b1\3\u00b1\3\u00b1"+
		"\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3\u00b3\3\u00b3"+
		"\3\u00b3\3\u00b3\3\u00b4\3\u00b4\3\u00b4\3\u00b5\3\u00b5\3\u00b5\3\u00b6"+
		"\3\u00b6\3\u00b6\3\u00b7\3\u00b7\3\u00b7\3\u00b8\3\u00b8\3\u00b8\3\u00b8"+
		"\3\u00b9\3\u00b9\3\u00b9\3\u00ba\3\u00ba\3\u00ba\3\u00ba\3\u00bb\3\u00bb"+
		"\3\u00bb\3\u00bb\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bd\3\u00bd\3\u00bd"+
		"\3\u00bd\3\u00be\3\u00be\3\u00be\3\u00bf\3\u00bf\3\u00bf\3\u00bf\3\u00bf"+
		"\3\u00bf\3\u00bf\3\u00bf\3\u00bf\3\u00bf\3\u00bf\3\u00bf\3\u00bf\3\u00bf"+
		"\3\u00c0\3\u00c0\3\u00c0\3\u00c0\3\u00c0\3\u00c0\3\u00c1\3\u00c1\3\u00c1"+
		"\3\u00c1\3\u00c1\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c2\3\u00c3\3\u00c3"+
		"\3\u00c3\3\u00c3\3\u00c3\3\u00c4\3\u00c4\3\u00c4\3\u00c4\3\u00c4\3\u00c5"+
		"\3\u00c5\3\u00c5\3\u00c5\3\u00c5\3\u00c6\3\u00c6\3\u00c6\3\u00c6\3\u00c6"+
		"\3\u00c7\3\u00c7\3\u00c8\3\u00c8\3\u00c9\3\u00c9\3\u00ca\3\u00ca\3\u00cb"+
		"\3\u00cb\3\u00cc\3\u00cc\3\u00cd\3\u00cd\3\u00ce\3\u00ce\3\u00cf\3\u00cf"+
		"\3\u00d0\3\u00d0\3\u00d1\3\u00d1\3\u00d1\3\u00d2\3\u00d2\3\u00d2\3\u00d3"+
		"\3\u00d3\3\u00d3\3\u00d4\3\u00d4\3\u00d4\3\u00d5\3\u00d5\3\u00d5\3\u00d6"+
		"\3\u00d6\3\u00d6\3\u00d7\3\u00d7\3\u00d7\3\u00d8\3\u00d8\3\u00d8\3\u00d9"+
		"\3\u00d9\3\u00da\3\u00da\3\u00db\3\u00db\3\u00dc\3\u00dc\3\u00dd\3\u00dd"+
		"\3\u00de\3\u00de\3\u00df\3\u00df\3\u00e0\3\u00e0\3\u00e1\3\u00e1\3\u00e1"+
		"\3\u00e2\3\u00e2\3\u00e2\3\u00e3\3\u00e3\3\u00e3\3\u00e4\3\u00e4\3\u00e4"+
		"\3\u00e5\3\u00e5\3\u00e5\3\u00e6\3\u00e6\3\u00e6\3\u00e7\3\u00e7\3\u00e7"+
		"\3\u00e8\3\u00e8\3\u00e8\3\u00e9\3\u00e9\3\u00e9\3\u00e9\3\u00ea\3\u00ea"+
		"\3\u00ea\3\u00ea\3\u00eb\3\u00eb\3\u00eb\3\u00eb\3\u00eb\3\u00ec\3\u00ec"+
		"\3\u00ec\3\u00ed\3\u00ed\3\u00ed\7\u00ed\u072b\n\u00ed\f\u00ed\16\u00ed"+
		"\u072e\13\u00ed\3\u00ee\3\u00ee\7\u00ee\u0732\n\u00ee\f\u00ee\16\u00ee"+
		"\u0735\13\u00ee\3\u00ef\3\u00ef\7\u00ef\u0739\n\u00ef\f\u00ef\16\u00ef"+
		"\u073c\13\u00ef\3\u00f0\3\u00f0\3\u00f0\3\u00f0\3\u00f0\3\u00f0\5\u00f0"+
		"\u0744\n\u00f0\3\u00f1\3\u00f1\3\u00f1\3\u00f2\3\u00f2\3\u00f2\3\u00f2"+
		"\3\u00f2\3\u00f2\5\u00f2\u074f\n\u00f2\3\u00f3\3\u00f3\3\u00f3\3\u00f4"+
		"\7\u00f4\u0755\n\u00f4\f\u00f4\16\u00f4\u0758\13\u00f4\3\u00f5\3\u00f5"+
		"\3\u00f6\3\u00f6\3\u00f6\3\u00f6\3\u00f7\6\u00f7\u0761\n\u00f7\r\u00f7"+
		"\16\u00f7\u0762\3\u00f7\6\u00f7\u0766\n\u00f7\r\u00f7\16\u00f7\u0767\5"+
		"\u00f7\u076a\n\u00f7\3\u00f7\3\u00f7\3\u00f8\3\u00f8\3\u00f8\3\u00f9\3"+
		"\u00f9\3\u00f9\3\u00f9\7\u00f9\u0775\n\u00f9\f\u00f9\16\u00f9\u0778\13"+
		"\u00f9\3\u00f9\3\u00f9\3\u00f9\3\u00f9\3\u00f9\3\u00f9\3\u00f9\3\u00fa"+
		"\3\u00fa\3\u00fa\3\u00fa\7\u00fa\u0785\n\u00fa\f\u00fa\16\u00fa\u0788"+
		"\13\u00fa\3\u00fa\3\u00fa\3\u00fa\3\u00fa\3\u00fb\3\u00fb\3\u00fb\3\u00fb"+
		"\3\u00fb\3\u00fb\3\u00fb\3\u00fb\3\u00fb\3\u00fb\3\u00fb\7\u00fb\u0799"+
		"\n\u00fb\f\u00fb\16\u00fb\u079c\13\u00fb\3\u00fb\3\u00fb\3\u00fc\3\u00fc"+
		"\3\u00fc\3\u0776\2\u00fd\t\u008c\13\u008d\r\t\17\u008e\21\u008f\23\u0090"+
		"\25\u0091\27\u0092\31\u0093\33\u0094\35\u0095\37\u0096!\u0097#\u0098%"+
		"\u0099\'\u009a)\u009b+\u009c-\u009d/\u009e\61\u009f\63\u00a0\65\3\67\4"+
		"9\2;\2=\2?\5A\6C\2E\2G\2I\2K\2M\2O\2Q\2S\2U\2W\2Y\2[\7]\b_\2a\2c\2e\2"+
		"g\2i\2k\nm\13o\fq\rs\16u\17w\20y\21{\2}\22\177\23\u0081\2\u0083\24\u0085"+
		"\25\u0087\2\u0089\26\u008b\27\u008d\30\u008f\31\u0091\32\u0093\2\u0095"+
		"\33\u0097\34\u0099\35\u009b\36\u009d\37\u009f\2\u00a1 \u00a3!\u00a5\""+
		"\u00a7#\u00a9$\u00ab%\u00ad\2\u00af&\u00b1\2\u00b3\'\u00b5(\u00b7)\u00b9"+
		"*\u00bb+\u00bd,\u00bf-\u00c1.\u00c3/\u00c5\60\u00c7\61\u00c9\2\u00cb\62"+
		"\u00cd\63\u00cf\64\u00d1\65\u00d3\66\u00d5\67\u00d78\u00d99\u00db:\u00dd"+
		";\u00df<\u00e1=\u00e3>\u00e5?\u00e7\2\u00e9\2\u00eb\2\u00ed\2\u00ef\2"+
		"\u00f1\2\u00f3\2\u00f5\2\u00f7\2\u00f9\2\u00fb\2\u00fd\2\u00ff\2\u0101"+
		"\2\u0103\2\u0105\2\u0107\2\u0109\2\u010b\2\u010d\2\u010f\2\u0111\2\u0113"+
		"\2\u0115\2\u0117\2\u0119@\u011b\2\u011d\2\u011f\2\u0121\2\u0123\2\u0125"+
		"\2\u0127\2\u0129\2\u012b\2\u012d\2\u012f\2\u0131A\u0133\2\u0135\2\u0137"+
		"\2\u0139\2\u013b\2\u013d\2\u013f\2\u0141\2\u0143\2\u0145\2\u0147\2\u0149"+
		"\2\u014b\2\u014d\2\u014f\2\u0151\2\u0153\2\u0155\2\u0157\2\u0159\2\u015b"+
		"B\u015dC\u015fD\u0161E\u0163F\u0165G\u0167H\u0169I\u016bJ\u016dK\u016f"+
		"L\u0171M\u0173N\u0175O\u0177P\u0179Q\u017bR\u017dS\u017fT\u0181U\u0183"+
		"V\u0185W\u0187X\u0189Y\u018bZ\u018d[\u018f\\\u0191]\u0193^\u0195_\u0197"+
		"`\u0199a\u019bb\u019dc\u019fd\u01a1e\u01a3f\u01a5g\u01a7h\u01a9i\u01ab"+
		"j\u01adk\u01afl\u01b1m\u01b3n\u01b5o\u01b7p\u01b9q\u01bbr\u01bds\u01bf"+
		"t\u01c1u\u01c3v\u01c5w\u01c7x\u01c9y\u01cbz\u01cd{\u01cf|\u01d1}\u01d3"+
		"~\u01d5\177\u01d7\u0080\u01d9\u0081\u01db\u0082\u01dd\u0083\u01df\u0084"+
		"\u01e1\u0085\u01e3\2\u01e5\2\u01e7\2\u01e9\2\u01eb\2\u01ed\2\u01ef\u0086"+
		"\u01f1\u0087\u01f3\u0088\u01f5\u0089\u01f7\2\u01f9\2\u01fb\u008a\u01fd"+
		"\u008b\t\2\3\4\5\6\7\b\34\7\2\f\f\17\17$$&&^^\6\2\f\f\17\17))^^\5\2$$"+
		"&&^^\4\2))^^\5\2\2\2&&\61\61\3\2\62;\b\2IIKKNNiikknn\3\2\63;\4\2ZZzz\5"+
		"\2\62;CHch\3\2\629\4\2DDdd\3\2\62\63\4\2GGgg\4\2--//\6\2FFHIffhi\4\2R"+
		"Rrr\t\2$$))^^ddhhpptv\3\2\62\65\6\2&&C\\aac|\4\2\2\u0081\ud802\udc01\3"+
		"\2\ud802\udc01\3\2\udc02\ue001\7\2&&\62;C\\aac|\5\2\f\f\17\17\1\1\4\2"+
		"\13\13\"\"\2\u07b4\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2"+
		"\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3"+
		"\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'"+
		"\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63"+
		"\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2"+
		"k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3"+
		"\2\2\2\2y\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2"+
		"\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2"+
		"\u0091\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b"+
		"\3\2\2\2\2\u009d\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2"+
		"\2\2\u00a7\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab\3\2\2\2\2\u00af\3\2\2\2\2\u00b3"+
		"\3\2\2\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9\3\2\2\2\2\u00bb\3\2\2"+
		"\2\2\u00bd\3\2\2\2\2\u00bf\3\2\2\2\2\u00c1\3\2\2\2\2\u00c3\3\2\2\2\2\u00c5"+
		"\3\2\2\2\2\u00c7\3\2\2\2\2\u00cb\3\2\2\2\2\u00cd\3\2\2\2\2\u00cf\3\2\2"+
		"\2\2\u00d1\3\2\2\2\2\u00d3\3\2\2\2\2\u00d5\3\2\2\2\2\u00d7\3\2\2\2\2\u00d9"+
		"\3\2\2\2\2\u00db\3\2\2\2\2\u00dd\3\2\2\2\2\u00df\3\2\2\2\2\u00e1\3\2\2"+
		"\2\2\u00e3\3\2\2\2\2\u00e5\3\2\2\2\2\u0119\3\2\2\2\2\u0131\3\2\2\2\2\u015b"+
		"\3\2\2\2\2\u015d\3\2\2\2\2\u015f\3\2\2\2\2\u0161\3\2\2\2\2\u0163\3\2\2"+
		"\2\2\u0165\3\2\2\2\2\u0167\3\2\2\2\2\u0169\3\2\2\2\2\u016b\3\2\2\2\2\u016d"+
		"\3\2\2\2\2\u016f\3\2\2\2\2\u0171\3\2\2\2\2\u0173\3\2\2\2\2\u0175\3\2\2"+
		"\2\2\u0177\3\2\2\2\2\u0179\3\2\2\2\2\u017b\3\2\2\2\2\u017d\3\2\2\2\2\u017f"+
		"\3\2\2\2\2\u0181\3\2\2\2\2\u0183\3\2\2\2\2\u0185\3\2\2\2\2\u0187\3\2\2"+
		"\2\2\u0189\3\2\2\2\2\u018b\3\2\2\2\2\u018d\3\2\2\2\2\u018f\3\2\2\2\2\u0191"+
		"\3\2\2\2\2\u0193\3\2\2\2\2\u0195\3\2\2\2\2\u0197\3\2\2\2\2\u0199\3\2\2"+
		"\2\2\u019b\3\2\2\2\2\u019d\3\2\2\2\2\u019f\3\2\2\2\2\u01a1\3\2\2\2\2\u01a3"+
		"\3\2\2\2\2\u01a5\3\2\2\2\2\u01a7\3\2\2\2\2\u01a9\3\2\2\2\2\u01ab\3\2\2"+
		"\2\2\u01ad\3\2\2\2\2\u01af\3\2\2\2\2\u01b1\3\2\2\2\2\u01b3\3\2\2\2\2\u01b5"+
		"\3\2\2\2\2\u01b7\3\2\2\2\2\u01b9\3\2\2\2\2\u01bb\3\2\2\2\2\u01bd\3\2\2"+
		"\2\2\u01bf\3\2\2\2\2\u01c1\3\2\2\2\2\u01c3\3\2\2\2\2\u01c5\3\2\2\2\2\u01c7"+
		"\3\2\2\2\2\u01c9\3\2\2\2\2\u01cb\3\2\2\2\2\u01cd\3\2\2\2\2\u01cf\3\2\2"+
		"\2\2\u01d1\3\2\2\2\2\u01d3\3\2\2\2\2\u01d5\3\2\2\2\2\u01d7\3\2\2\2\2\u01d9"+
		"\3\2\2\2\2\u01db\3\2\2\2\2\u01dd\3\2\2\2\2\u01df\3\2\2\2\2\u01e1\3\2\2"+
		"\2\2\u01ef\3\2\2\2\2\u01f1\3\2\2\2\2\u01f3\3\2\2\2\2\u01f5\3\2\2\2\2\u01f7"+
		"\3\2\2\2\2\u01f9\3\2\2\2\2\u01fb\3\2\2\2\2\u01fd\3\2\2\2\3?\3\2\2\2\3"+
		"A\3\2\2\2\3C\3\2\2\2\4E\3\2\2\2\4G\3\2\2\2\4I\3\2\2\2\5K\3\2\2\2\5M\3"+
		"\2\2\2\5O\3\2\2\2\6Q\3\2\2\2\6S\3\2\2\2\6U\3\2\2\2\7W\3\2\2\2\7Y\3\2\2"+
		"\2\b[\3\2\2\2\b]\3\2\2\2\t\u01ff\3\2\2\2\13\u0207\3\2\2\2\r\u020c\3\2"+
		"\2\2\17\u020f\3\2\2\2\21\u0217\3\2\2\2\23\u021b\3\2\2\2\25\u0220\3\2\2"+
		"\2\27\u0224\3\2\2\2\31\u0229\3\2\2\2\33\u022f\3\2\2\2\35\u0235\3\2\2\2"+
		"\37\u023c\3\2\2\2!\u0245\3\2\2\2#\u024b\3\2\2\2%\u0251\3\2\2\2\'\u0257"+
		"\3\2\2\2)\u025e\3\2\2\2+\u0266\3\2\2\2-\u026c\3\2\2\2/\u0274\3\2\2\2\61"+
		"\u027b\3\2\2\2\63\u0281\3\2\2\2\65\u02bc\3\2\2\2\67\u02be\3\2\2\29\u02ca"+
		"\3\2\2\2;\u02d7\3\2\2\2=\u02e6\3\2\2\2?\u02f4\3\2\2\2A\u02f8\3\2\2\2C"+
		"\u02fc\3\2\2\2E\u0300\3\2\2\2G\u0305\3\2\2\2I\u030a\3\2\2\2K\u030f\3\2"+
		"\2\2M\u0316\3\2\2\2O\u031c\3\2\2\2Q\u0320\3\2\2\2S\u0325\3\2\2\2U\u032b"+
		"\3\2\2\2W\u032f\3\2\2\2Y\u0336\3\2\2\2[\u033c\3\2\2\2]\u033f\3\2\2\2_"+
		"\u0346\3\2\2\2a\u034a\3\2\2\2c\u0351\3\2\2\2e\u0358\3\2\2\2g\u035f\3\2"+
		"\2\2i\u036f\3\2\2\2k\u0371\3\2\2\2m\u0375\3\2\2\2o\u0378\3\2\2\2q\u037e"+
		"\3\2\2\2s\u0389\3\2\2\2u\u0395\3\2\2\2w\u0397\3\2\2\2y\u03a0\3\2\2\2{"+
		"\u03a7\3\2\2\2}\u03af\3\2\2\2\177\u03b5\3\2\2\2\u0081\u03bb\3\2\2\2\u0083"+
		"\u03c0\3\2\2\2\u0085\u03c5\3\2\2\2\u0087\u03cb\3\2\2\2\u0089\u03d0\3\2"+
		"\2\2\u008b\u03d6\3\2\2\2\u008d\u03dc\3\2\2\2\u008f\u03e5\3\2\2\2\u0091"+
		"\u03ed\3\2\2\2\u0093\u03f0\3\2\2\2\u0095\u03f7\3\2\2\2\u0097\u03fc\3\2"+
		"\2\2\u0099\u0401\3\2\2\2\u009b\u0409\3\2\2\2\u009d\u040f\3\2\2\2\u009f"+
		"\u0417\3\2\2\2\u00a1\u041d\3\2\2\2\u00a3\u0421\3\2\2\2\u00a5\u0424\3\2"+
		"\2\2\u00a7\u0429\3\2\2\2\u00a9\u0434\3\2\2\2\u00ab\u043b\3\2\2\2\u00ad"+
		"\u0446\3\2\2\2\u00af\u044a\3\2\2\2\u00b1\u0454\3\2\2\2\u00b3\u0459\3\2"+
		"\2\2\u00b5\u0460\3\2\2\2\u00b7\u0464\3\2\2\2\u00b9\u046f\3\2\2\2\u00bb"+
		"\u0477\3\2\2\2\u00bd\u047f\3\2\2\2\u00bf\u0487\3\2\2\2\u00c1\u0491\3\2"+
		"\2\2\u00c3\u0498\3\2\2\2\u00c5\u049f\3\2\2\2\u00c7\u04a6\3\2\2\2\u00c9"+
		"\u04ad\3\2\2\2\u00cb\u04b3\3\2\2\2\u00cd\u04ba\3\2\2\2\u00cf\u04c3\3\2"+
		"\2\2\u00d1\u04c9\3\2\2\2\u00d3\u04d0\3\2\2\2\u00d5\u04dd\3\2\2\2\u00d7"+
		"\u04e2\3\2\2\2\u00d9\u04e8\3\2\2\2\u00db\u04ef\3\2\2\2\u00dd\u04f9\3\2"+
		"\2\2\u00df\u04fd\3\2\2\2\u00e1\u0502\3\2\2\2\u00e3\u050b\3\2\2\2\u00e5"+
		"\u0527\3\2\2\2\u00e7\u0529\3\2\2\2\u00e9\u052b\3\2\2\2\u00eb\u052f\3\2"+
		"\2\2\u00ed\u0533\3\2\2\2\u00ef\u0537\3\2\2\2\u00f1\u053b\3\2\2\2\u00f3"+
		"\u0547\3\2\2\2\u00f5\u0549\3\2\2\2\u00f7\u0555\3\2\2\2\u00f9\u0557\3\2"+
		"\2\2\u00fb\u055b\3\2\2\2\u00fd\u055e\3\2\2\2\u00ff\u0562\3\2\2\2\u0101"+
		"\u0564\3\2\2\2\u0103\u0568\3\2\2\2\u0105\u0572\3\2\2\2\u0107\u0576\3\2"+
		"\2\2\u0109\u0578\3\2\2\2\u010b\u057e\3\2\2\2\u010d\u0588\3\2\2\2\u010f"+
		"\u058c\3\2\2\2\u0111\u058e\3\2\2\2\u0113\u0592\3\2\2\2\u0115\u059c\3\2"+
		"\2\2\u0117\u05a0\3\2\2\2\u0119\u05a4\3\2\2\2\u011b\u05be\3\2\2\2\u011d"+
		"\u05c0\3\2\2\2\u011f\u05c3\3\2\2\2\u0121\u05c6\3\2\2\2\u0123\u05ca\3\2"+
		"\2\2\u0125\u05cc\3\2\2\2\u0127\u05ce\3\2\2\2\u0129\u05df\3\2\2\2\u012b"+
		"\u05e1\3\2\2\2\u012d\u05e4\3\2\2\2\u012f\u05e6\3\2\2\2\u0131\u05f1\3\2"+
		"\2\2\u0133\u05fa\3\2\2\2\u0135\u0608\3\2\2\2\u0137\u060a\3\2\2\2\u0139"+
		"\u0611\3\2\2\2\u013b\u0613\3\2\2\2\u013d\u0616\3\2\2\2\u013f\u061e\3\2"+
		"\2\2\u0141\u0620\3\2\2\2\u0143\u0623\3\2\2\2\u0145\u0625\3\2\2\2\u0147"+
		"\u0627\3\2\2\2\u0149\u0629\3\2\2\2\u014b\u062b\3\2\2\2\u014d\u062d\3\2"+
		"\2\2\u014f\u0631\3\2\2\2\u0151\u0635\3\2\2\2\u0153\u0638\3\2\2\2\u0155"+
		"\u063b\3\2\2\2\u0157\u063e\3\2\2\2\u0159\u0641\3\2\2\2\u015b\u0645\3\2"+
		"\2\2\u015d\u064a\3\2\2\2\u015f\u064d\3\2\2\2\u0161\u0651\3\2\2\2\u0163"+
		"\u0655\3\2\2\2\u0165\u065a\3\2\2\2\u0167\u065d\3\2\2\2\u0169\u0660\3\2"+
		"\2\2\u016b\u0667\3\2\2\2\u016d\u066b\3\2\2\2\u016f\u066e\3\2\2\2\u0171"+
		"\u0671\3\2\2\2\u0173\u0674\3\2\2\2\u0175\u0677\3\2\2\2\u0177\u067b\3\2"+
		"\2\2\u0179\u067e\3\2\2\2\u017b\u0682\3\2\2\2\u017d\u0686\3\2\2\2\u017f"+
		"\u068a\3\2\2\2\u0181\u068e\3\2\2\2\u0183\u0691\3\2\2\2\u0185\u069f\3\2"+
		"\2\2\u0187\u06a5\3\2\2\2\u0189\u06aa\3\2\2\2\u018b\u06af\3\2\2\2\u018d"+
		"\u06b4\3\2\2\2\u018f\u06b9\3\2\2\2\u0191\u06be\3\2\2\2\u0193\u06c3\3\2"+
		"\2\2\u0195\u06c5\3\2\2\2\u0197\u06c7\3\2\2\2\u0199\u06c9\3\2\2\2\u019b"+
		"\u06cb\3\2\2\2\u019d\u06cd\3\2\2\2\u019f\u06cf\3\2\2\2\u01a1\u06d1\3\2"+
		"\2\2\u01a3\u06d3\3\2\2\2\u01a5\u06d5\3\2\2\2\u01a7\u06d7\3\2\2\2\u01a9"+
		"\u06da\3\2\2\2\u01ab\u06dd\3\2\2\2\u01ad\u06e0\3\2\2\2\u01af\u06e3\3\2"+
		"\2\2\u01b1\u06e6\3\2\2\2\u01b3\u06e9\3\2\2\2\u01b5\u06ec\3\2\2\2\u01b7"+
		"\u06ef\3\2\2\2\u01b9\u06f1\3\2\2\2\u01bb\u06f3\3\2\2\2\u01bd\u06f5\3\2"+
		"\2\2\u01bf\u06f7\3\2\2\2\u01c1\u06f9\3\2\2\2\u01c3\u06fb\3\2\2\2\u01c5"+
		"\u06fd\3\2\2\2\u01c7\u06ff\3\2\2\2\u01c9\u0702\3\2\2\2\u01cb\u0705\3\2"+
		"\2\2\u01cd\u0708\3\2\2\2\u01cf\u070b\3\2\2\2\u01d1\u070e\3\2\2\2\u01d3"+
		"\u0711\3\2\2\2\u01d5\u0714\3\2\2\2\u01d7\u0717\3\2\2\2\u01d9\u071b\3\2"+
		"\2\2\u01db\u071f\3\2\2\2\u01dd\u0724\3\2\2\2\u01df\u0727\3\2\2\2\u01e1"+
		"\u072f\3\2\2\2\u01e3\u0736\3\2\2\2\u01e5\u0743\3\2\2\2\u01e7\u0745\3\2"+
		"\2\2\u01e9\u074e\3\2\2\2\u01eb\u0750\3\2\2\2\u01ed\u0756\3\2\2\2\u01ef"+
		"\u0759\3\2\2\2\u01f1\u075b\3\2\2\2\u01f3\u0769\3\2\2\2\u01f5\u076d\3\2"+
		"\2\2\u01f7\u0770\3\2\2\2\u01f9\u0780\3\2\2\2\u01fb\u078d\3\2\2\2\u01fd"+
		"\u079f\3\2\2\2\u01ff\u0200\7k\2\2\u0200\u0201\7p\2\2\u0201\u0202\7e\2"+
		"\2\u0202\u0203\7n\2\2\u0203\u0204\7w\2\2\u0204\u0205\7f\2\2\u0205\u0206"+
		"\7g\2\2\u0206\n\3\2\2\2\u0207\u0208\7h\2\2\u0208\u0209\7t\2\2\u0209\u020a"+
		"\7q\2\2\u020a\u020b\7o\2\2\u020b\f\3\2\2\2\u020c\u020d\7c\2\2\u020d\u020e"+
		"\7u\2\2\u020e\16\3\2\2\2\u020f\u0210\7r\2\2\u0210\u0211\7t\2\2\u0211\u0212"+
		"\7q\2\2\u0212\u0213\7e\2\2\u0213\u0214\7g\2\2\u0214\u0215\7u\2\2\u0215"+
		"\u0216\7u\2\2\u0216\20\3\2\2\2\u0217\u0218\7x\2\2\u0218\u0219\7c\2\2\u0219"+
		"\u021a\7n\2\2\u021a\22\3\2\2\2\u021b\u021c\7h\2\2\u021c\u021d\7k\2\2\u021d"+
		"\u021e\7n\2\2\u021e\u021f\7g\2\2\u021f\24\3\2\2\2\u0220\u0221\7g\2\2\u0221"+
		"\u0222\7p\2\2\u0222\u0223\7x\2\2\u0223\26\3\2\2\2\u0224\u0225\7r\2\2\u0225"+
		"\u0226\7c\2\2\u0226\u0227\7v\2\2\u0227\u0228\7j\2\2\u0228\30\3\2\2\2\u0229"+
		"\u022a\7u\2\2\u022a\u022b\7v\2\2\u022b\u022c\7f\2\2\u022c\u022d\7k\2\2"+
		"\u022d\u022e\7p\2\2\u022e\32\3\2\2\2\u022f\u0230\7v\2\2\u0230\u0231\7"+
		"w\2\2\u0231\u0232\7r\2\2\u0232\u0233\7n\2\2\u0233\u0234\7g\2\2\u0234\34"+
		"\3\2\2\2\u0235\u0236\7u\2\2\u0236\u0237\7v\2\2\u0237\u0238\7f\2\2\u0238"+
		"\u0239\7q\2\2\u0239\u023a\7w\2\2\u023a\u023b\7v\2\2\u023b\36\3\2\2\2\u023c"+
		"\u023d\7y\2\2\u023d\u023e\7q\2\2\u023e\u023f\7t\2\2\u023f\u0240\7m\2\2"+
		"\u0240\u0241\7h\2\2\u0241\u0242\7n\2\2\u0242\u0243\7q\2\2\u0243\u0244"+
		"\7y\2\2\u0244 \3\2\2\2\u0245\u0246\7v\2\2\u0246\u0247\7c\2\2\u0247\u0248"+
		"\7m\2\2\u0248\u0249\7g\2\2\u0249\u024a\7<\2\2\u024a\"\3\2\2\2\u024b\u024c"+
		"\7o\2\2\u024c\u024d\7c\2\2\u024d\u024e\7k\2\2\u024e\u024f\7p\2\2\u024f"+
		"\u0250\7<\2\2\u0250$\3\2\2\2\u0251\u0252\7g\2\2\u0252\u0253\7o\2\2\u0253"+
		"\u0254\7k\2\2\u0254\u0255\7v\2\2\u0255\u0256\7<\2\2\u0256&\3\2\2\2\u0257"+
		"\u0258\7k\2\2\u0258\u0259\7p\2\2\u0259\u025a\7r\2\2\u025a\u025b\7w\2\2"+
		"\u025b\u025c\7v\2\2\u025c\u025d\7<\2\2\u025d(\3\2\2\2\u025e\u025f\7q\2"+
		"\2\u025f\u0260\7w\2\2\u0260\u0261\7v\2\2\u0261\u0262\7r\2\2\u0262\u0263"+
		"\7w\2\2\u0263\u0264\7v\2\2\u0264\u0265\7<\2\2\u0265*\3\2\2\2\u0266\u0267"+
		"\7y\2\2\u0267\u0268\7j\2\2\u0268\u0269\7g\2\2\u0269\u026a\7p\2\2\u026a"+
		"\u026b\7<\2\2\u026b,\3\2\2\2\u026c\u026d\7u\2\2\u026d\u026e\7e\2\2\u026e"+
		"\u026f\7t\2\2\u026f\u0270\7k\2\2\u0270\u0271\7r\2\2\u0271\u0272\7v\2\2"+
		"\u0272\u0273\7<\2\2\u0273.\3\2\2\2\u0274\u0275\7u\2\2\u0275\u0276\7j\2"+
		"\2\u0276\u0277\7g\2\2\u0277\u0278\7n\2\2\u0278\u0279\7n\2\2\u0279\u027a"+
		"\7<\2\2\u027a\60\3\2\2\2\u027b\u027c\7g\2\2\u027c\u027d\7z\2\2\u027d\u027e"+
		"\7g\2\2\u027e\u027f\7e\2\2\u027f\u0280\7<\2\2\u0280\62\3\2\2\2\u0281\u0282"+
		"\7u\2\2\u0282\u0283\7v\2\2\u0283\u0284\7w\2\2\u0284\u0285\7d\2\2\u0285"+
		"\u0286\7<\2\2\u0286\64\3\2\2\2\u0287\u028b\5\u0149\u00a2\2\u0288\u028a"+
		"\5_-\2\u0289\u0288\3\2\2\2\u028a\u028d\3\2\2\2\u028b\u0289\3\2\2\2\u028b"+
		"\u028c\3\2\2\2\u028c\u028e\3\2\2\2\u028d\u028b\3\2\2\2\u028e\u028f\5\u0149"+
		"\u00a2\2\u028f\u02bd\3\2\2\2\u0290\u0294\5\u014b\u00a3\2\u0291\u0293\5"+
		"a.\2\u0292\u0291\3\2\2\2\u0293\u0296\3\2\2\2\u0294\u0292\3\2\2\2\u0294"+
		"\u0295\3\2\2\2\u0295\u0297\3\2\2\2\u0296\u0294\3\2\2\2\u0297\u0298\5\u014b"+
		"\u00a3\2\u0298\u02bd\3\2\2\2\u0299\u029a\5\u0145\u00a0\2\u029a\u029c\6"+
		"\30\2\2\u029b\u029d\5g\61\2\u029c\u029b\3\2\2\2\u029d\u029e\3\2\2\2\u029e"+
		"\u029c\3\2\2\2\u029e\u029f\3\2\2\2\u029f\u02a0\3\2\2\2\u02a0\u02a1\5\u0145"+
		"\u00a0\2\u02a1\u02bd\3\2\2\2\u02a2\u02a6\5\u014d\u00a4\2\u02a3\u02a5\5"+
		"c/\2\u02a4\u02a3\3\2\2\2\u02a5\u02a8\3\2\2\2\u02a6\u02a4\3\2\2\2\u02a6"+
		"\u02a7\3\2\2\2\u02a7\u02a9\3\2\2\2\u02a8\u02a6\3\2\2\2\u02a9\u02aa\5\u014d"+
		"\u00a4\2\u02aa\u02bd\3\2\2\2\u02ab\u02af\5\u014f\u00a5\2\u02ac\u02ae\5"+
		"e\60\2\u02ad\u02ac\3\2\2\2\u02ae\u02b1\3\2\2\2\u02af\u02ad\3\2\2\2\u02af"+
		"\u02b0\3\2\2\2\u02b0\u02b2\3\2\2\2\u02b1\u02af\3\2\2\2\u02b2\u02b3\5\u014f"+
		"\u00a5\2\u02b3\u02bd\3\2\2\2\u02b4\u02b6\5\u0151\u00a6\2\u02b5\u02b7\5"+
		"i\62\2\u02b6\u02b5\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8\u02b6\3\2\2\2\u02b8"+
		"\u02b9\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba\u02bb\5\u0153\u00a7\2\u02bb\u02bd"+
		"\3\2\2\2\u02bc\u0287\3\2\2\2\u02bc\u0290\3\2\2\2\u02bc\u0299\3\2\2\2\u02bc"+
		"\u02a2\3\2\2\2\u02bc\u02ab\3\2\2\2\u02bc\u02b4\3\2\2\2\u02bd\66\3\2\2"+
		"\2\u02be\u02c2\5\u0149\u00a2\2\u02bf\u02c1\5_-\2\u02c0\u02bf\3\2\2\2\u02c1"+
		"\u02c4\3\2\2\2\u02c2\u02c0\3\2\2\2\u02c2\u02c3\3\2\2\2\u02c3\u02c5\3\2"+
		"\2\2\u02c4\u02c2\3\2\2\2\u02c5\u02c6\5\u0147\u00a1\2\u02c6\u02c7\3\2\2"+
		"\2\u02c7\u02c8\b\31\2\2\u02c8\u02c9\b\31\3\2\u02c98\3\2\2\2\u02ca\u02ce"+
		"\5\u014d\u00a4\2\u02cb\u02cd\5c/\2\u02cc\u02cb\3\2\2\2\u02cd\u02d0\3\2"+
		"\2\2\u02ce\u02cc\3\2\2\2\u02ce\u02cf\3\2\2\2\u02cf\u02d1\3\2\2\2\u02d0"+
		"\u02ce\3\2\2\2\u02d1\u02d2\5\u0147\u00a1\2\u02d2\u02d3\3\2\2\2\u02d3\u02d4"+
		"\b\32\4\2\u02d4\u02d5\b\32\5\2\u02d5\u02d6\b\32\3\2\u02d6:\3\2\2\2\u02d7"+
		"\u02d8\5\u0145\u00a0\2\u02d8\u02dc\6\33\3\2\u02d9\u02db\5g\61\2\u02da"+
		"\u02d9\3\2\2\2\u02db\u02de\3\2\2\2\u02dc\u02da\3\2\2\2\u02dc\u02dd\3\2"+
		"\2\2\u02dd\u02df\3\2\2\2\u02de\u02dc\3\2\2\2\u02df\u02e0\5\u0147\u00a1"+
		"\2\u02e0\u02e1\6\33\4\2\u02e1\u02e2\3\2\2\2\u02e2\u02e3\b\33\4\2\u02e3"+
		"\u02e4\b\33\6\2\u02e4\u02e5\b\33\3\2\u02e5<\3\2\2\2\u02e6\u02ea\5\u0151"+
		"\u00a6\2\u02e7\u02e9\5i\62\2\u02e8\u02e7\3\2\2\2\u02e9\u02ec\3\2\2\2\u02ea"+
		"\u02e8\3\2\2\2\u02ea\u02eb\3\2\2\2\u02eb\u02ed\3\2\2\2\u02ec\u02ea\3\2"+
		"\2\2\u02ed\u02ee\5\u0147\u00a1\2\u02ee\u02ef\6\34\5\2\u02ef\u02f0\3\2"+
		"\2\2\u02f0\u02f1\b\34\4\2\u02f1\u02f2\b\34\7\2\u02f2\u02f3\b\34\3\2\u02f3"+
		">\3\2\2\2\u02f4\u02f5\5\u0149\u00a2\2\u02f5\u02f6\3\2\2\2\u02f6\u02f7"+
		"\b\35\b\2\u02f7@\3\2\2\2\u02f8\u02f9\5\u0147\u00a1\2\u02f9\u02fa\3\2\2"+
		"\2\u02fa\u02fb\b\36\3\2\u02fbB\3\2\2\2\u02fc\u02fd\5_-\2\u02fd\u02fe\3"+
		"\2\2\2\u02fe\u02ff\b\37\t\2\u02ffD\3\2\2\2\u0300\u0301\5\u014d\u00a4\2"+
		"\u0301\u0302\3\2\2\2\u0302\u0303\b \n\2\u0303\u0304\b \b\2\u0304F\3\2"+
		"\2\2\u0305\u0306\5\u0147\u00a1\2\u0306\u0307\3\2\2\2\u0307\u0308\b!\13"+
		"\2\u0308\u0309\b!\3\2\u0309H\3\2\2\2\u030a\u030b\5c/\2\u030b\u030c\3\2"+
		"\2\2\u030c\u030d\b\"\t\2\u030dJ\3\2\2\2\u030e\u0310\5\u0147\u00a1\2\u030f"+
		"\u030e\3\2\2\2\u030f\u0310\3\2\2\2\u0310\u0311\3\2\2\2\u0311\u0312\5\u0145"+
		"\u00a0\2\u0312\u0313\3\2\2\2\u0313\u0314\b#\n\2\u0314\u0315\b#\b\2\u0315"+
		"L\3\2\2\2\u0316\u0317\5\u0147\u00a1\2\u0317\u0318\6$\6\2\u0318\u0319\3"+
		"\2\2\2\u0319\u031a\b$\13\2\u031a\u031b\b$\3\2\u031bN\3\2\2\2\u031c\u031d"+
		"\5g\61\2\u031d\u031e\3\2\2\2\u031e\u031f\b%\t\2\u031fP\3\2\2\2\u0320\u0321"+
		"\5\u0153\u00a7\2\u0321\u0322\3\2\2\2\u0322\u0323\b&\n\2\u0323\u0324\b"+
		"&\b\2\u0324R\3\2\2\2\u0325\u0326\5\u0147\u00a1\2\u0326\u0327\6\'\7\2\u0327"+
		"\u0328\3\2\2\2\u0328\u0329\b\'\13\2\u0329\u032a\b\'\3\2\u032aT\3\2\2\2"+
		"\u032b\u032c\5i\62\2\u032c\u032d\3\2\2\2\u032d\u032e\b(\t\2\u032eV\3\2"+
		"\2\2\u032f\u0330\7}\2\2\u0330\u0331\b)\f\2\u0331\u0332\3\2\2\2\u0332\u0333"+
		"\b)\r\2\u0333\u0334\b)\b\2\u0334\u0335\b)\16\2\u0335X\3\2\2\2\u0336\u0337"+
		"\5\u01e3\u00ef\2\u0337\u0338\3\2\2\2\u0338\u0339\b*\17\2\u0339\u033a\b"+
		"*\b\2\u033a\u033b\b*\20\2\u033bZ\3\2\2\2\u033c\u033d\5\u012f\u0095\2\u033d"+
		"\u033e\5\u01e3\u00ef\2\u033e\\\3\2\2\2\u033f\u0340\13\2\2\2\u0340\u0341"+
		"\b,\21\2\u0341\u0342\3\2\2\2\u0342\u0343\b,\b\2\u0343^\3\2\2\2\u0344\u0347"+
		"\n\2\2\2\u0345\u0347\5\u0133\u0097\2\u0346\u0344\3\2\2\2\u0346\u0345\3"+
		"\2\2\2\u0347`\3\2\2\2\u0348\u034b\n\3\2\2\u0349\u034b\5\u0133\u0097\2"+
		"\u034a\u0348\3\2\2\2\u034a\u0349\3\2\2\2\u034bb\3\2\2\2\u034c\u0352\n"+
		"\4\2\2\u034d\u034e\5\u0149\u00a2\2\u034e\u034f\6/\b\2\u034f\u0352\3\2"+
		"\2\2\u0350\u0352\5\u0133\u0097\2\u0351\u034c\3\2\2\2\u0351\u034d\3\2\2"+
		"\2\u0351\u0350\3\2\2\2\u0352d\3\2\2\2\u0353\u0359\n\5\2\2\u0354\u0355"+
		"\5\u014b\u00a3\2\u0355\u0356\6\60\t\2\u0356\u0359\3\2\2\2\u0357\u0359"+
		"\5\u0133\u0097\2\u0358\u0353\3\2\2\2\u0358\u0354\3\2\2\2\u0358\u0357\3"+
		"\2\2\2\u0359f\3\2\2\2\u035a\u0360\5\u0141\u009e\2\u035b\u035c\5\u0147"+
		"\u00a1\2\u035c\u035d\6\61\n\2\u035d\u0360\3\2\2\2\u035e\u0360\n\6\2\2"+
		"\u035f\u035a\3\2\2\2\u035f\u035b\3\2\2\2\u035f\u035e\3\2\2\2\u0360h\3"+
		"\2\2\2\u0361\u0370\5\u0157\u00a9\2\u0362\u0363\5\u0159\u00aa\2\u0363\u0364"+
		"\6\62\13\2\u0364\u0370\3\2\2\2\u0365\u0366\5\u0155\u00a8\2\u0366\u0367"+
		"\6\62\f\2\u0367\u0370\3\2\2\2\u0368\u0369\5\u0145\u00a0\2\u0369\u036a"+
		"\6\62\r\2\u036a\u0370\3\2\2\2\u036b\u036c\5\u0147\u00a1\2\u036c\u036d"+
		"\6\62\16\2\u036d\u0370\3\2\2\2\u036e\u0370\n\6\2\2\u036f\u0361\3\2\2\2"+
		"\u036f\u0362\3\2\2\2\u036f\u0365\3\2\2\2\u036f\u0368\3\2\2\2\u036f\u036b"+
		"\3\2\2\2\u036f\u036e\3\2\2\2\u0370j\3\2\2\2\u0371\u0372\7f\2\2\u0372\u0373"+
		"\7g\2\2\u0373\u0374\7h\2\2\u0374l\3\2\2\2\u0375\u0376\7k\2\2\u0376\u0377"+
		"\7p\2\2\u0377n\3\2\2\2\u0378\u0379\7v\2\2\u0379\u037a\7t\2\2\u037a\u037b"+
		"\7c\2\2\u037b\u037c\7k\2\2\u037c\u037d\7v\2\2\u037dp\3\2\2\2\u037e\u037f"+
		"\7v\2\2\u037f\u0380\7j\2\2\u0380\u0381\7t\2\2\u0381\u0382\7g\2\2\u0382"+
		"\u0383\7c\2\2\u0383\u0384\7f\2\2\u0384\u0385\7u\2\2\u0385\u0386\7c\2\2"+
		"\u0386\u0387\7h\2\2\u0387\u0388\7g\2\2\u0388r\3\2\2\2\u0389\u038a\7x\2"+
		"\2\u038a\u038b\7c\2\2\u038b\u038c\7t\2\2\u038ct\3\2\2\2\u038d\u0396\5"+
		"{;\2\u038e\u0396\5\u0087A\2\u038f\u0396\5\u0081>\2\u0390\u0396\5\u00c9"+
		"b\2\u0391\u0396\5\u00adT\2\u0392\u0396\5\u00b1V\2\u0393\u0396\5\u009f"+
		"M\2\u0394\u0396\5\u0093G\2\u0395\u038d\3\2\2\2\u0395\u038e\3\2\2\2\u0395"+
		"\u038f\3\2\2\2\u0395\u0390\3\2\2\2\u0395\u0391\3\2\2\2\u0395\u0392\3\2"+
		"\2\2\u0395\u0393\3\2\2\2\u0395\u0394\3\2\2\2\u0396v\3\2\2\2\u0397\u0398"+
		"\7c\2\2\u0398\u0399\7d\2\2\u0399\u039a\7u\2\2\u039a\u039b\7v\2\2\u039b"+
		"\u039c\7t\2\2\u039c\u039d\7c\2\2\u039d\u039e\7e\2\2\u039e\u039f\7v\2\2"+
		"\u039fx\3\2\2\2\u03a0\u03a1\7c\2\2\u03a1\u03a2\7u\2\2\u03a2\u03a3\7u\2"+
		"\2\u03a3\u03a4\7g\2\2\u03a4\u03a5\7t\2\2\u03a5\u03a6\7v\2\2\u03a6z\3\2"+
		"\2\2\u03a7\u03a8\7d\2\2\u03a8\u03a9\7q\2\2\u03a9\u03aa\7q\2\2\u03aa\u03ab"+
		"\7n\2\2\u03ab\u03ac\7g\2\2\u03ac\u03ad\7c\2\2\u03ad\u03ae\7p\2\2\u03ae"+
		"|\3\2\2\2\u03af\u03b0\7d\2\2\u03b0\u03b1\7t\2\2\u03b1\u03b2\7g\2\2\u03b2"+
		"\u03b3\7c\2\2\u03b3\u03b4\7m\2\2\u03b4~\3\2\2\2\u03b5\u03b6\7{\2\2\u03b6"+
		"\u03b7\7k\2\2\u03b7\u03b8\7g\2\2\u03b8\u03b9\7n\2\2\u03b9\u03ba\7f\2\2"+
		"\u03ba\u0080\3\2\2\2\u03bb\u03bc\7d\2\2\u03bc\u03bd\7{\2\2\u03bd\u03be"+
		"\7v\2\2\u03be\u03bf\7g\2\2\u03bf\u0082\3\2\2\2\u03c0\u03c1\7e\2\2\u03c1"+
		"\u03c2\7c\2\2\u03c2\u03c3\7u\2\2\u03c3\u03c4\7g\2\2\u03c4\u0084\3\2\2"+
		"\2\u03c5\u03c6\7e\2\2\u03c6\u03c7\7c\2\2\u03c7\u03c8\7v\2\2\u03c8\u03c9"+
		"\7e\2\2\u03c9\u03ca\7j\2\2\u03ca\u0086\3\2\2\2\u03cb\u03cc\7e\2\2\u03cc"+
		"\u03cd\7j\2\2\u03cd\u03ce\7c\2\2\u03ce\u03cf\7t\2\2\u03cf\u0088\3\2\2"+
		"\2\u03d0\u03d1\7e\2\2\u03d1\u03d2\7n\2\2\u03d2\u03d3\7c\2\2\u03d3\u03d4"+
		"\7u\2\2\u03d4\u03d5\7u\2\2\u03d5\u008a\3\2\2\2\u03d6\u03d7\7e\2\2\u03d7"+
		"\u03d8\7q\2\2\u03d8\u03d9\7p\2\2\u03d9\u03da\7u\2\2\u03da\u03db\7v\2\2"+
		"\u03db\u008c\3\2\2\2\u03dc\u03dd\7e\2\2\u03dd\u03de\7q\2\2\u03de\u03df"+
		"\7p\2\2\u03df\u03e0\7v\2\2\u03e0\u03e1\7k\2\2\u03e1\u03e2\7p\2\2\u03e2"+
		"\u03e3\7w\2\2\u03e3\u03e4\7g\2\2\u03e4\u008e\3\2\2\2\u03e5\u03e6\7f\2"+
		"\2\u03e6\u03e7\7g\2\2\u03e7\u03e8\7h\2\2\u03e8\u03e9\7c\2\2\u03e9\u03ea"+
		"\7w\2\2\u03ea\u03eb\7n\2\2\u03eb\u03ec\7v\2\2\u03ec\u0090\3\2\2\2\u03ed"+
		"\u03ee\7f\2\2\u03ee\u03ef\7q\2\2\u03ef\u0092\3\2\2\2\u03f0\u03f1\7f\2"+
		"\2\u03f1\u03f2\7q\2\2\u03f2\u03f3\7w\2\2\u03f3\u03f4\7d\2\2\u03f4\u03f5"+
		"\7n\2\2\u03f5\u03f6\7g\2\2\u03f6\u0094\3\2\2\2\u03f7\u03f8\7g\2\2\u03f8"+
		"\u03f9\7n\2\2\u03f9\u03fa\7u\2\2\u03fa\u03fb\7g\2\2\u03fb\u0096\3\2\2"+
		"\2\u03fc\u03fd\7g\2\2\u03fd\u03fe\7p\2\2\u03fe\u03ff\7w\2\2\u03ff\u0400"+
		"\7o\2\2\u0400\u0098\3\2\2\2\u0401\u0402\7g\2\2\u0402\u0403\7z\2\2\u0403"+
		"\u0404\7v\2\2\u0404\u0405\7g\2\2\u0405\u0406\7p\2\2\u0406\u0407\7f\2\2"+
		"\u0407\u0408\7u\2\2\u0408\u009a\3\2\2\2\u0409\u040a\7h\2\2\u040a\u040b"+
		"\7k\2\2\u040b\u040c\7p\2\2\u040c\u040d\7c\2\2\u040d\u040e\7n\2\2\u040e"+
		"\u009c\3\2\2\2\u040f\u0410\7h\2\2\u0410\u0411\7k\2\2\u0411\u0412\7p\2"+
		"\2\u0412\u0413\7c\2\2\u0413\u0414\7n\2\2\u0414\u0415\7n\2\2\u0415\u0416"+
		"\7{\2\2\u0416\u009e\3\2\2\2\u0417\u0418\7h\2\2\u0418\u0419\7n\2\2\u0419"+
		"\u041a\7q\2\2\u041a\u041b\7c\2\2\u041b\u041c\7v\2\2\u041c\u00a0\3\2\2"+
		"\2\u041d\u041e\7h\2\2\u041e\u041f\7q\2\2\u041f\u0420\7t\2\2\u0420\u00a2"+
		"\3\2\2\2\u0421\u0422\7k\2\2\u0422\u0423\7h\2\2\u0423\u00a4\3\2\2\2\u0424"+
		"\u0425\7i\2\2\u0425\u0426\7q\2\2\u0426\u0427\7v\2\2\u0427\u0428\7q\2\2"+
		"\u0428\u00a6\3\2\2\2\u0429\u042a\7k\2\2\u042a\u042b\7o\2\2\u042b\u042c"+
		"\7r\2\2\u042c\u042d\7n\2\2\u042d\u042e\7g\2\2\u042e\u042f\7o\2\2\u042f"+
		"\u0430\7g\2\2\u0430\u0431\7p\2\2\u0431\u0432\7v\2\2\u0432\u0433\7u\2\2"+
		"\u0433\u00a8\3\2\2\2\u0434\u0435\7k\2\2\u0435\u0436\7o\2\2\u0436\u0437"+
		"\7r\2\2\u0437\u0438\7q\2\2\u0438\u0439\7t\2\2\u0439\u043a\7v\2\2\u043a"+
		"\u00aa\3\2\2\2\u043b\u043c\7k\2\2\u043c\u043d\7p\2\2\u043d\u043e\7u\2"+
		"\2\u043e\u043f\7v\2\2\u043f\u0440\7c\2\2\u0440\u0441\7p\2\2\u0441\u0442"+
		"\7e\2\2\u0442\u0443\7g\2\2\u0443\u0444\7q\2\2\u0444\u0445\7h\2\2\u0445"+
		"\u00ac\3\2\2\2\u0446\u0447\7k\2\2\u0447\u0448\7p\2\2\u0448\u0449\7v\2"+
		"\2\u0449\u00ae\3\2\2\2\u044a\u044b\7k\2\2\u044b\u044c\7p\2\2\u044c\u044d"+
		"\7v\2\2\u044d\u044e\7g\2\2\u044e\u044f\7t\2\2\u044f\u0450\7h\2\2\u0450"+
		"\u0451\7c\2\2\u0451\u0452\7e\2\2\u0452\u0453\7g\2\2\u0453\u00b0\3\2\2"+
		"\2\u0454\u0455\7n\2\2\u0455\u0456\7q\2\2\u0456\u0457\7p\2\2\u0457\u0458"+
		"\7i\2\2\u0458\u00b2\3\2\2\2\u0459\u045a\7p\2\2\u045a\u045b\7c\2\2\u045b"+
		"\u045c\7v\2\2\u045c\u045d\7k\2\2\u045d\u045e\7x\2\2\u045e\u045f\7g\2\2"+
		"\u045f\u00b4\3\2\2\2\u0460\u0461\7p\2\2\u0461\u0462\7g\2\2\u0462\u0463"+
		"\7y\2\2\u0463\u00b6\3\2\2\2\u0464\u0465\7p\2\2\u0465\u0466\7q\2\2\u0466"+
		"\u0467\7p\2\2\u0467\u0468\7/\2\2\u0468\u0469\7u\2\2\u0469\u046a\7g\2\2"+
		"\u046a\u046b\7c\2\2\u046b\u046c\7n\2\2\u046c\u046d\7g\2\2\u046d\u046e"+
		"\7f\2\2\u046e\u00b8\3\2\2\2\u046f\u0470\7r\2\2\u0470\u0471\7c\2\2\u0471"+
		"\u0472\7e\2\2\u0472\u0473\7m\2\2\u0473\u0474\7c\2\2\u0474\u0475\7i\2\2"+
		"\u0475\u0476\7g\2\2\u0476\u00ba\3\2\2\2\u0477\u0478\7r\2\2\u0478\u0479"+
		"\7g\2\2\u0479\u047a\7t\2\2\u047a\u047b\7o\2\2\u047b\u047c\7k\2\2\u047c"+
		"\u047d\7v\2\2\u047d\u047e\7u\2\2\u047e\u00bc\3\2\2\2\u047f\u0480\7r\2"+
		"\2\u0480\u0481\7t\2\2\u0481\u0482\7k\2\2\u0482\u0483\7x\2\2\u0483\u0484"+
		"\7c\2\2\u0484\u0485\7v\2\2\u0485\u0486\7g\2\2\u0486\u00be\3\2\2\2\u0487"+
		"\u0488\7r\2\2\u0488\u0489\7t\2\2\u0489\u048a\7q\2\2\u048a\u048b\7v\2\2"+
		"\u048b\u048c\7g\2\2\u048c\u048d\7e\2\2\u048d\u048e\7v\2\2\u048e\u048f"+
		"\7g\2\2\u048f\u0490\7f\2\2\u0490\u00c0\3\2\2\2\u0491\u0492\7r\2\2\u0492"+
		"\u0493\7w\2\2\u0493\u0494\7d\2\2\u0494\u0495\7n\2\2\u0495\u0496\7k\2\2"+
		"\u0496\u0497\7e\2\2\u0497\u00c2\3\2\2\2\u0498\u0499\7t\2\2\u0499\u049a"+
		"\7g\2\2\u049a\u049b\7e\2\2\u049b\u049c\7q\2\2\u049c\u049d\7t\2\2\u049d"+
		"\u049e\7f\2\2\u049e\u00c4\3\2\2\2\u049f\u04a0\7t\2\2\u04a0\u04a1\7g\2"+
		"\2\u04a1\u04a2\7v\2\2\u04a2\u04a3\7w\2\2\u04a3\u04a4\7t\2\2\u04a4\u04a5"+
		"\7p\2\2\u04a5\u00c6\3\2\2\2\u04a6\u04a7\7u\2\2\u04a7\u04a8\7g\2\2\u04a8"+
		"\u04a9\7c\2\2\u04a9\u04aa\7n\2\2\u04aa\u04ab\7g\2\2\u04ab\u04ac\7f\2\2"+
		"\u04ac\u00c8\3\2\2\2\u04ad\u04ae\7u\2\2\u04ae\u04af\7j\2\2\u04af\u04b0"+
		"\7q\2\2\u04b0\u04b1\7t\2\2\u04b1\u04b2\7v\2\2\u04b2\u00ca\3\2\2\2\u04b3"+
		"\u04b4\7u\2\2\u04b4\u04b5\7v\2\2\u04b5\u04b6\7c\2\2\u04b6\u04b7\7v\2\2"+
		"\u04b7\u04b8\7k\2\2\u04b8\u04b9\7e\2\2\u04b9\u00cc\3\2\2\2\u04ba\u04bb"+
		"\7u\2\2\u04bb\u04bc\7v\2\2\u04bc\u04bd\7t\2\2\u04bd\u04be\7k\2\2\u04be"+
		"\u04bf\7e\2\2\u04bf\u04c0\7v\2\2\u04c0\u04c1\7h\2\2\u04c1\u04c2\7r\2\2"+
		"\u04c2\u00ce\3\2\2\2\u04c3\u04c4\7u\2\2\u04c4\u04c5\7w\2\2\u04c5\u04c6"+
		"\7r\2\2\u04c6\u04c7\7g\2\2\u04c7\u04c8\7t\2\2\u04c8\u00d0\3\2\2\2\u04c9"+
		"\u04ca\7u\2\2\u04ca\u04cb\7y\2\2\u04cb\u04cc\7k\2\2\u04cc\u04cd\7v\2\2"+
		"\u04cd\u04ce\7e\2\2\u04ce\u04cf\7j\2\2\u04cf\u00d2\3\2\2\2\u04d0\u04d1"+
		"\7u\2\2\u04d1\u04d2\7{\2\2\u04d2\u04d3\7p\2\2\u04d3\u04d4\7e\2\2\u04d4"+
		"\u04d5\7j\2\2\u04d5\u04d6\7t\2\2\u04d6\u04d7\7q\2\2\u04d7\u04d8\7p\2\2"+
		"\u04d8\u04d9\7k\2\2\u04d9\u04da\7|\2\2\u04da\u04db\7g\2\2\u04db\u04dc"+
		"\7f\2\2\u04dc\u00d4\3\2\2\2\u04dd\u04de\7v\2\2\u04de\u04df\7j\2\2\u04df"+
		"\u04e0\7k\2\2\u04e0\u04e1\7u\2\2\u04e1\u00d6\3\2\2\2\u04e2\u04e3\7v\2"+
		"\2\u04e3\u04e4\7j\2\2\u04e4\u04e5\7t\2\2\u04e5\u04e6\7q\2\2\u04e6\u04e7"+
		"\7y\2\2\u04e7\u00d8\3\2\2\2\u04e8\u04e9\7v\2\2\u04e9\u04ea\7j\2\2\u04ea"+
		"\u04eb\7t\2\2\u04eb\u04ec\7q\2\2\u04ec\u04ed\7y\2\2\u04ed\u04ee\7u\2\2"+
		"\u04ee\u00da\3\2\2\2\u04ef\u04f0\7v\2\2\u04f0\u04f1\7t\2\2\u04f1\u04f2"+
		"\7c\2\2\u04f2\u04f3\7p\2\2\u04f3\u04f4\7u\2\2\u04f4\u04f5\7k\2\2\u04f5"+
		"\u04f6\7g\2\2\u04f6\u04f7\7p\2\2\u04f7\u04f8\7v\2\2\u04f8\u00dc\3\2\2"+
		"\2\u04f9\u04fa\7v\2\2\u04fa\u04fb\7t\2\2\u04fb\u04fc\7{\2\2\u04fc\u00de"+
		"\3\2\2\2\u04fd\u04fe\7x\2\2\u04fe\u04ff\7q\2\2\u04ff\u0500\7k\2\2\u0500"+
		"\u0501\7f\2\2\u0501\u00e0\3\2\2\2\u0502\u0503\7x\2\2\u0503\u0504\7q\2"+
		"\2\u0504\u0505\7n\2\2\u0505\u0506\7c\2\2\u0506\u0507\7v\2\2\u0507\u0508"+
		"\7k\2\2\u0508\u0509\7n\2\2\u0509\u050a\7g\2\2\u050a\u00e2\3\2\2\2\u050b"+
		"\u050c\7y\2\2\u050c\u050d\7j\2\2\u050d\u050e\7k\2\2\u050e\u050f\7n\2\2"+
		"\u050f\u0510\7g\2\2\u0510\u00e4\3\2\2\2\u0511\u0516\5\u00e9r\2\u0512\u0516"+
		"\5\u00ebs\2\u0513\u0516\5\u00edt\2\u0514\u0516\5\u00efu\2\u0515\u0511"+
		"\3\2\2\2\u0515\u0512\3\2\2\2\u0515\u0513\3\2\2\2\u0515\u0514\3\2\2\2\u0516"+
		"\u051a\3\2\2\2\u0517\u0518\5\u00ff}\2\u0518\u0519\bp\22\2\u0519\u051b"+
		"\3\2\2\2\u051a\u0517\3\2\2\2\u051a\u051b\3\2\2\2\u051b\u0528\3\2\2\2\u051c"+
		"\u051f\5\u00e7q\2\u051d\u051e\t\7\2\2\u051e\u0520\bp\23\2\u051f\u051d"+
		"\3\2\2\2\u0520\u0521\3\2\2\2\u0521\u051f\3\2\2\2\u0521\u0522\3\2\2\2\u0522"+
		"\u0523\3\2\2\2\u0523\u0525\bp\24\2\u0524\u0526\5\u00f1v\2\u0525\u0524"+
		"\3\2\2\2\u0525\u0526\3\2\2\2\u0526\u0528\3\2\2\2\u0527\u0515\3\2\2\2\u0527"+
		"\u051c\3\2\2\2\u0528\u00e6\3\2\2\2\u0529\u052a\7\62\2\2\u052a\u00e8\3"+
		"\2\2\2\u052b\u052d\5\u00f3w\2\u052c\u052e\5\u00f1v\2\u052d\u052c\3\2\2"+
		"\2\u052d\u052e\3\2\2\2\u052e\u00ea\3\2\2\2\u052f\u0531\5\u0101~\2\u0530"+
		"\u0532\5\u00f1v\2\u0531\u0530\3\2\2\2\u0531\u0532\3\2\2\2\u0532\u00ec"+
		"\3\2\2\2\u0533\u0535\5\u0109\u0082\2\u0534\u0536\5\u00f1v\2\u0535\u0534"+
		"\3\2\2\2\u0535\u0536\3\2\2\2\u0536\u00ee\3\2\2\2\u0537\u0539\5\u0111\u0086"+
		"\2\u0538\u053a\5\u00f1v\2\u0539\u0538\3\2\2\2\u0539\u053a\3\2\2\2\u053a"+
		"\u00f0\3\2\2\2\u053b\u053c\t\b\2\2\u053c\u00f2\3\2\2\2\u053d\u0548\5\u00e7"+
		"q\2\u053e\u0545\5\u00f9z\2\u053f\u0541\5\u00f5x\2\u0540\u053f\3\2\2\2"+
		"\u0540\u0541\3\2\2\2\u0541\u0546\3\2\2\2\u0542\u0543\5\u00fd|\2\u0543"+
		"\u0544\5\u00f5x\2\u0544\u0546\3\2\2\2\u0545\u0540\3\2\2\2\u0545\u0542"+
		"\3\2\2\2\u0546\u0548\3\2\2\2\u0547\u053d\3\2\2\2\u0547\u053e\3\2\2\2\u0548"+
		"\u00f4\3\2\2\2\u0549\u0551\5\u00f7y\2\u054a\u054c\5\u00fb{\2\u054b\u054a"+
		"\3\2\2\2\u054c\u054f\3\2\2\2\u054d\u054b\3\2\2\2\u054d\u054e\3\2\2\2\u054e"+
		"\u0550\3\2\2\2\u054f\u054d\3\2\2\2\u0550\u0552\5\u00f7y\2\u0551\u054d"+
		"\3\2\2\2\u0551\u0552\3\2\2\2\u0552\u00f6\3\2\2\2\u0553\u0556\5\u00e7q"+
		"\2\u0554\u0556\5\u00f9z\2\u0555\u0553\3\2\2\2\u0555\u0554\3\2\2\2\u0556"+
		"\u00f8\3\2\2\2\u0557\u0558\t\t\2\2\u0558\u00fa\3\2\2\2\u0559\u055c\5\u00f7"+
		"y\2\u055a\u055c\5\u00ff}\2\u055b\u0559\3\2\2\2\u055b\u055a\3\2\2\2\u055c"+
		"\u00fc\3\2\2\2\u055d\u055f\5\u00ff}\2\u055e\u055d\3\2\2\2\u055f\u0560"+
		"\3\2\2\2\u0560\u055e\3\2\2\2\u0560\u0561\3\2\2\2\u0561\u00fe\3\2\2\2\u0562"+
		"\u0563\7a\2\2\u0563\u0100\3\2\2\2\u0564\u0565\5\u00e7q\2\u0565\u0566\t"+
		"\n\2\2\u0566\u0567\5\u0103\177\2\u0567\u0102\3\2\2\2\u0568\u0570\5\u0105"+
		"\u0080\2\u0569\u056b\5\u0107\u0081\2\u056a\u0569\3\2\2\2\u056b\u056e\3"+
		"\2\2\2\u056c\u056a\3\2\2\2\u056c\u056d\3\2\2\2\u056d\u056f\3\2\2\2\u056e"+
		"\u056c\3\2\2\2\u056f\u0571\5\u0105\u0080\2\u0570\u056c\3\2\2\2\u0570\u0571"+
		"\3\2\2\2\u0571\u0104\3\2\2\2\u0572\u0573\t\13\2\2\u0573\u0106\3\2\2\2"+
		"\u0574\u0577\5\u0105\u0080\2\u0575\u0577\5\u00ff}\2\u0576\u0574\3\2\2"+
		"\2\u0576\u0575\3\2\2\2\u0577\u0108\3\2\2\2\u0578\u057a\5\u00e7q\2\u0579"+
		"\u057b\5\u00fd|\2\u057a\u0579\3\2\2\2\u057a\u057b\3\2\2\2\u057b\u057c"+
		"\3\2\2\2\u057c\u057d\5\u010b\u0083\2\u057d\u010a\3\2\2\2\u057e\u0586\5"+
		"\u010d\u0084\2\u057f\u0581\5\u010f\u0085\2\u0580\u057f\3\2\2\2\u0581\u0584"+
		"\3\2\2\2\u0582\u0580\3\2\2\2\u0582\u0583\3\2\2\2\u0583\u0585\3\2\2\2\u0584"+
		"\u0582\3\2\2\2\u0585\u0587\5\u010d\u0084\2\u0586\u0582\3\2\2\2\u0586\u0587"+
		"\3\2\2\2\u0587\u010c\3\2\2\2\u0588\u0589\t\f\2\2\u0589\u010e\3\2\2\2\u058a"+
		"\u058d\5\u010d\u0084\2\u058b\u058d\5\u00ff}\2\u058c\u058a\3\2\2\2\u058c"+
		"\u058b\3\2\2\2\u058d\u0110\3\2\2\2\u058e\u058f\5\u00e7q\2\u058f\u0590"+
		"\t\r\2\2\u0590\u0591\5\u0113\u0087\2\u0591\u0112\3\2\2\2\u0592\u059a\5"+
		"\u0115\u0088\2\u0593\u0595\5\u0117\u0089\2\u0594\u0593\3\2\2\2\u0595\u0598"+
		"\3\2\2\2\u0596\u0594\3\2\2\2\u0596\u0597\3\2\2\2\u0597\u0599\3\2\2\2\u0598"+
		"\u0596\3\2\2\2\u0599\u059b\5\u0115\u0088\2\u059a\u0596\3\2\2\2\u059a\u059b"+
		"\3\2\2\2\u059b\u0114\3\2\2\2\u059c\u059d\t\16\2\2\u059d\u0116\3\2\2\2"+
		"\u059e\u05a1\5\u0115\u0088\2\u059f\u05a1\5\u00ff}\2\u05a0\u059e\3\2\2"+
		"\2\u05a0\u059f\3\2\2\2\u05a1\u0118\3\2\2\2\u05a2\u05a5\5\u011b\u008b\2"+
		"\u05a3\u05a5\5\u0127\u0091\2\u05a4\u05a2\3\2\2\2\u05a4\u05a3\3\2\2\2\u05a5"+
		"\u05a9\3\2\2\2\u05a6\u05a7\5\u00ff}\2\u05a7\u05a8\b\u008a\25\2\u05a8\u05aa"+
		"\3\2\2\2\u05a9\u05a6\3\2\2\2\u05a9\u05aa\3\2\2\2\u05aa\u011a\3\2\2\2\u05ab"+
		"\u05ad\5\u00f5x\2\u05ac\u05ab\3\2\2\2\u05ac\u05ad\3\2\2\2\u05ad\u05ae"+
		"\3\2\2\2\u05ae\u05af\5\u012f\u0095\2\u05af\u05b1\5\u00f5x\2\u05b0\u05b2"+
		"\5\u011d\u008c\2\u05b1\u05b0\3\2\2\2\u05b1\u05b2\3\2\2\2\u05b2\u05b4\3"+
		"\2\2\2\u05b3\u05b5\5\u0125\u0090\2\u05b4\u05b3\3\2\2\2\u05b4\u05b5\3\2"+
		"\2\2\u05b5\u05bf\3\2\2\2\u05b6\u05b7\5\u00f5x\2\u05b7\u05b9\5\u011d\u008c"+
		"\2\u05b8\u05ba\5\u0125\u0090\2\u05b9\u05b8\3\2\2\2\u05b9\u05ba\3\2\2\2"+
		"\u05ba\u05bf\3\2\2\2\u05bb\u05bc\5\u00f5x\2\u05bc\u05bd\5\u0125\u0090"+
		"\2\u05bd\u05bf\3\2\2\2\u05be\u05ac\3\2\2\2\u05be\u05b6\3\2\2\2\u05be\u05bb"+
		"\3\2\2\2\u05bf\u011c\3\2\2\2\u05c0\u05c1\5\u011f\u008d\2\u05c1\u05c2\5"+
		"\u0121\u008e\2\u05c2\u011e\3\2\2\2\u05c3\u05c4\t\17\2\2\u05c4\u0120\3"+
		"\2\2\2\u05c5\u05c7\5\u0123\u008f\2\u05c6\u05c5\3\2\2\2\u05c6\u05c7\3\2"+
		"\2\2\u05c7\u05c8\3\2\2\2\u05c8\u05c9\5\u00f5x\2\u05c9\u0122\3\2\2\2\u05ca"+
		"\u05cb\t\20\2\2\u05cb\u0124\3\2\2\2\u05cc\u05cd\t\21\2\2\u05cd\u0126\3"+
		"\2\2\2\u05ce\u05cf\5\u0129\u0092\2\u05cf\u05d1\5\u012b\u0093\2\u05d0\u05d2"+
		"\5\u0125\u0090\2\u05d1\u05d0\3\2\2\2\u05d1\u05d2\3\2\2\2\u05d2\u0128\3"+
		"\2\2\2\u05d3\u05d5\5\u0101~\2\u05d4\u05d6\5\u012f\u0095\2\u05d5\u05d4"+
		"\3\2\2\2\u05d5\u05d6\3\2\2\2\u05d6\u05e0\3\2\2\2\u05d7\u05d8\5\u00e7q"+
		"\2\u05d8\u05da\t\n\2\2\u05d9\u05db\5\u0103\177\2\u05da\u05d9\3\2\2\2\u05da"+
		"\u05db\3\2\2\2\u05db\u05dc\3\2\2\2\u05dc\u05dd\5\u012f\u0095\2\u05dd\u05de"+
		"\5\u0103\177\2\u05de\u05e0\3\2\2\2\u05df\u05d3\3\2\2\2\u05df\u05d7\3\2"+
		"\2\2\u05e0\u012a\3\2\2\2\u05e1\u05e2\5\u012d\u0094\2\u05e2\u05e3\5\u0121"+
		"\u008e\2\u05e3\u012c\3\2\2\2\u05e4\u05e5\t\22\2\2\u05e5\u012e\3\2\2\2"+
		"\u05e6\u05e7\7\60\2\2\u05e7\u0130\3\2\2\2\u05e8\u05e9\7v\2\2\u05e9\u05ea"+
		"\7t\2\2\u05ea\u05eb\7w\2\2\u05eb\u05f2\7g\2\2\u05ec\u05ed\7h\2\2\u05ed"+
		"\u05ee\7c\2\2\u05ee\u05ef\7n\2\2\u05ef\u05f0\7u\2\2\u05f0\u05f2\7g\2\2"+
		"\u05f1\u05e8\3\2\2\2\u05f1\u05ec\3\2\2\2\u05f2\u0132\3\2\2\2\u05f3\u05f4"+
		"\5\u0143\u009f\2\u05f4\u05f5\t\23\2\2\u05f5\u05fb\3\2\2\2\u05f6\u05fb"+
		"\5\u0135\u0098\2\u05f7\u05fb\5\u0137\u0099\2\u05f8\u05fb\5\u013b\u009b"+
		"\2\u05f9\u05fb\5\u013d\u009c\2\u05fa\u05f3\3\2\2\2\u05fa\u05f6\3\2\2\2"+
		"\u05fa\u05f7\3\2\2\2\u05fa\u05f8\3\2\2\2\u05fa\u05f9\3\2\2\2\u05fb\u0134"+
		"\3\2\2\2\u05fc\u05fd\5\u0143\u009f\2\u05fd\u05fe\5\u010d\u0084\2\u05fe"+
		"\u0609\3\2\2\2\u05ff\u0600\5\u0143\u009f\2\u0600\u0601\5\u010d\u0084\2"+
		"\u0601\u0602\5\u010d\u0084\2\u0602\u0609\3\2\2\2\u0603\u0604\5\u0143\u009f"+
		"\2\u0604\u0605\5\u0139\u009a\2\u0605\u0606\5\u010d\u0084\2\u0606\u0607"+
		"\5\u010d\u0084\2\u0607\u0609\3\2\2\2\u0608\u05fc\3\2\2\2\u0608\u05ff\3"+
		"\2\2\2\u0608\u0603\3\2\2\2\u0609\u0136\3\2\2\2\u060a\u060b\5\u0143\u009f"+
		"\2\u060b\u060c\7w\2\2\u060c\u060d\5\u0105\u0080\2\u060d\u060e\5\u0105"+
		"\u0080\2\u060e\u060f\5\u0105\u0080\2\u060f\u0610\5\u0105\u0080\2\u0610"+
		"\u0138\3\2\2\2\u0611\u0612\t\24\2\2\u0612\u013a\3\2\2\2\u0613\u0614\5"+
		"\u0143\u009f\2\u0614\u0615\5\u0147\u00a1\2\u0615\u013c\3\2\2\2\u0616\u0617"+
		"\5\u0143\u009f\2\u0617\u0618\5\u013f\u009d\2\u0618\u013e\3\2\2\2\u0619"+
		"\u061b\7\17\2\2\u061a\u0619\3\2\2\2\u061a\u061b\3\2\2\2\u061b\u061c\3"+
		"\2\2\2\u061c\u061f\7\f\2\2\u061d\u061f\7\17\2\2\u061e\u061a\3\2\2\2\u061e"+
		"\u061d\3\2\2\2\u061f\u0140\3\2\2\2\u0620\u0621\5\u0143\u009f\2\u0621\u0622"+
		"\5\u0145\u00a0\2\u0622\u0142\3\2\2\2\u0623\u0624\7^\2\2\u0624\u0144\3"+
		"\2\2\2\u0625\u0626\7\61\2\2\u0626\u0146\3\2\2\2\u0627\u0628\7&\2\2\u0628"+
		"\u0148\3\2\2\2\u0629\u062a\7$\2\2\u062a\u014a\3\2\2\2\u062b\u062c\7)\2"+
		"\2\u062c\u014c\3\2\2\2\u062d\u062e\7$\2\2\u062e\u062f\7$\2\2\u062f\u0630"+
		"\7$\2\2\u0630\u014e\3\2\2\2\u0631\u0632\7)\2\2\u0632\u0633\7)\2\2\u0633"+
		"\u0634\7)\2\2\u0634\u0150\3\2\2\2\u0635\u0636\7&\2\2\u0636\u0637\7\61"+
		"\2\2\u0637\u0152\3\2\2\2\u0638\u0639\7\61\2\2\u0639\u063a\7&\2\2\u063a"+
		"\u0154\3\2\2\2\u063b\u063c\7&\2\2\u063c\u063d\7\61\2\2\u063d\u0156\3\2"+
		"\2\2\u063e\u063f\7&\2\2\u063f\u0640\7&\2\2\u0640\u0158\3\2\2\2\u0641\u0642"+
		"\7&\2\2\u0642\u0643\7\61\2\2\u0643\u0644\7&\2\2\u0644\u015a\3\2\2\2\u0645"+
		"\u0646\7p\2\2\u0646\u0647\7w\2\2\u0647\u0648\7n\2\2\u0648\u0649\7n\2\2"+
		"\u0649\u015c\3\2\2\2\u064a\u064b\7\60\2\2\u064b\u064c\7\60\2\2\u064c\u015e"+
		"\3\2\2\2\u064d\u064e\7>\2\2\u064e\u064f\7\60\2\2\u064f\u0650\7\60\2\2"+
		"\u0650\u0160\3\2\2\2\u0651\u0652\7\60\2\2\u0652\u0653\7\60\2\2\u0653\u0654"+
		"\7>\2\2\u0654\u0162\3\2\2\2\u0655\u0656\7>\2\2\u0656\u0657\7\60\2\2\u0657"+
		"\u0658\7\60\2\2\u0658\u0659\7>\2\2\u0659\u0164\3\2\2\2\u065a\u065b\7,"+
		"\2\2\u065b\u065c\7\60\2\2\u065c\u0166\3\2\2\2\u065d\u065e\7A\2\2\u065e"+
		"\u065f\7\60\2\2\u065f\u0168\3\2\2\2\u0660\u0661\7A\2\2\u0661\u0662\7]"+
		"\2\2\u0662\u0663\3\2\2\2\u0663\u0664\b\u00b2\26\2\u0664\u0665\3\2\2\2"+
		"\u0665\u0666\b\u00b2\16\2\u0666\u016a\3\2\2\2\u0667\u0668\7A\2\2\u0668"+
		"\u0669\7A\2\2\u0669\u066a\7\60\2\2\u066a\u016c\3\2\2\2\u066b\u066c\7A"+
		"\2\2\u066c\u066d\7<\2\2\u066d\u016e\3\2\2\2\u066e\u066f\7\60\2\2\u066f"+
		"\u0670\7(\2\2\u0670\u0170\3\2\2\2\u0671\u0672\7<\2\2\u0672\u0673\7<\2"+
		"\2\u0673\u0172\3\2\2\2\u0674\u0675\7?\2\2\u0675\u0676\7\u0080\2\2\u0676"+
		"\u0174\3\2\2\2\u0677\u0678\7?\2\2\u0678\u0679\7?\2\2\u0679\u067a\7\u0080"+
		"\2\2\u067a\u0176\3\2\2\2\u067b\u067c\7,\2\2\u067c\u067d\7,\2\2\u067d\u0178"+
		"\3\2\2\2\u067e\u067f\7,\2\2\u067f\u0680\7,\2\2\u0680\u0681\7?\2\2\u0681"+
		"\u017a\3\2\2\2\u0682\u0683\7>\2\2\u0683\u0684\7?\2\2\u0684\u0685\7@\2"+
		"\2\u0685\u017c\3\2\2\2\u0686\u0687\7?\2\2\u0687\u0688\7?\2\2\u0688\u0689"+
		"\7?\2\2\u0689\u017e\3\2\2\2\u068a\u068b\7#\2\2\u068b\u068c\7?\2\2\u068c"+
		"\u068d\7?\2\2\u068d\u0180\3\2\2\2\u068e\u068f\7/\2\2\u068f\u0690\7@\2"+
		"\2\u0690\u0182\3\2\2\2\u0691\u0692\7#\2\2\u0692\u0693\7k\2\2\u0693\u0694"+
		"\7p\2\2\u0694\u0695\7u\2\2\u0695\u0696\7v\2\2\u0696\u0697\7c\2\2\u0697"+
		"\u0698\7p\2\2\u0698\u0699\7e\2\2\u0699\u069a\7g\2\2\u069a\u069b\7q\2\2"+
		"\u069b\u069c\7h\2\2\u069c\u069d\3\2\2\2\u069d\u069e\6\u00bf\17\2\u069e"+
		"\u0184\3\2\2\2\u069f\u06a0\7#\2\2\u06a0\u06a1\7k\2\2\u06a1\u06a2\7p\2"+
		"\2\u06a2\u06a3\3\2\2\2\u06a3\u06a4\6\u00c0\20\2\u06a4\u0186\3\2\2\2\u06a5"+
		"\u06a6\7*\2\2\u06a6\u06a7\b\u00c1\27\2\u06a7\u06a8\3\2\2\2\u06a8\u06a9"+
		"\b\u00c1\16\2\u06a9\u0188\3\2\2\2\u06aa\u06ab\7+\2\2\u06ab\u06ac\b\u00c2"+
		"\30\2\u06ac\u06ad\3\2\2\2\u06ad\u06ae\b\u00c2\b\2\u06ae\u018a\3\2\2\2"+
		"\u06af\u06b0\7}\2\2\u06b0\u06b1\b\u00c3\31\2\u06b1\u06b2\3\2\2\2\u06b2"+
		"\u06b3\b\u00c3\16\2\u06b3\u018c\3\2\2\2\u06b4\u06b5\7\177\2\2\u06b5\u06b6"+
		"\b\u00c4\32\2\u06b6\u06b7\3\2\2\2\u06b7\u06b8\b\u00c4\b\2\u06b8\u018e"+
		"\3\2\2\2\u06b9\u06ba\7]\2\2\u06ba\u06bb\b\u00c5\33\2\u06bb\u06bc\3\2\2"+
		"\2\u06bc\u06bd\b\u00c5\16\2\u06bd\u0190\3\2\2\2\u06be\u06bf\7_\2\2\u06bf"+
		"\u06c0\b\u00c6\34\2\u06c0\u06c1\3\2\2\2\u06c1\u06c2\b\u00c6\b\2\u06c2"+
		"\u0192\3\2\2\2\u06c3\u06c4\7=\2\2\u06c4\u0194\3\2\2\2\u06c5\u06c6\7.\2"+
		"\2\u06c6\u0196\3\2\2\2\u06c7\u06c8\5\u012f\u0095\2\u06c8\u0198\3\2\2\2"+
		"\u06c9\u06ca\7?\2\2\u06ca\u019a\3\2\2\2\u06cb\u06cc\7@\2\2\u06cc\u019c"+
		"\3\2\2\2\u06cd\u06ce\7>\2\2\u06ce\u019e\3\2\2\2\u06cf\u06d0\7#\2\2\u06d0"+
		"\u01a0\3\2\2\2\u06d1\u06d2\7\u0080\2\2\u06d2\u01a2\3\2\2\2\u06d3\u06d4"+
		"\7A\2\2\u06d4\u01a4\3\2\2\2\u06d5\u06d6\7<\2\2\u06d6\u01a6\3\2\2\2\u06d7"+
		"\u06d8\7?\2\2\u06d8\u06d9\7?\2\2\u06d9\u01a8\3\2\2\2\u06da\u06db\7>\2"+
		"\2\u06db\u06dc\7?\2\2\u06dc\u01aa\3\2\2\2\u06dd\u06de\7@\2\2\u06de\u06df"+
		"\7?\2\2\u06df\u01ac\3\2\2\2\u06e0\u06e1\7#\2\2\u06e1\u06e2\7?\2\2\u06e2"+
		"\u01ae\3\2\2\2\u06e3\u06e4\7(\2\2\u06e4\u06e5\7(\2\2\u06e5\u01b0\3\2\2"+
		"\2\u06e6\u06e7\7~\2\2\u06e7\u06e8\7~\2\2\u06e8\u01b2\3\2\2\2\u06e9\u06ea"+
		"\7-\2\2\u06ea\u06eb\7-\2\2\u06eb\u01b4\3\2\2\2\u06ec\u06ed\7/\2\2\u06ed"+
		"\u06ee\7/\2\2\u06ee\u01b6\3\2\2\2\u06ef\u06f0\7-\2\2\u06f0\u01b8\3\2\2"+
		"\2\u06f1\u06f2\7/\2\2\u06f2\u01ba\3\2\2\2\u06f3\u06f4\7,\2\2\u06f4\u01bc"+
		"\3\2\2\2\u06f5\u06f6\5\u0145\u00a0\2\u06f6\u01be\3\2\2\2\u06f7\u06f8\7"+
		"(\2\2\u06f8\u01c0\3\2\2\2\u06f9\u06fa\7~\2\2\u06fa\u01c2\3\2\2\2\u06fb"+
		"\u06fc\7`\2\2\u06fc\u01c4\3\2\2\2\u06fd\u06fe\7\'\2\2\u06fe\u01c6\3\2"+
		"\2\2\u06ff\u0700\7-\2\2\u0700\u0701\7?\2\2\u0701\u01c8\3\2\2\2\u0702\u0703"+
		"\7/\2\2\u0703\u0704\7?\2\2\u0704\u01ca\3\2\2\2\u0705\u0706\7,\2\2\u0706"+
		"\u0707\7?\2\2\u0707\u01cc\3\2\2\2\u0708\u0709\7\61\2\2\u0709\u070a\7?"+
		"\2\2\u070a\u01ce\3\2\2\2\u070b\u070c\7(\2\2\u070c\u070d\7?\2\2\u070d\u01d0"+
		"\3\2\2\2\u070e\u070f\7~\2\2\u070f\u0710\7?\2\2\u0710\u01d2\3\2\2\2\u0711"+
		"\u0712\7`\2\2\u0712\u0713\7?\2\2\u0713\u01d4\3\2\2\2\u0714\u0715\7\'\2"+
		"\2\u0715\u0716\7?\2\2\u0716\u01d6\3\2\2\2\u0717\u0718\7>\2\2\u0718\u0719"+
		"\7>\2\2\u0719\u071a\7?\2\2\u071a\u01d8\3\2\2\2\u071b\u071c\7@\2\2\u071c"+
		"\u071d\7@\2\2\u071d\u071e\7?\2\2\u071e\u01da\3\2\2\2\u071f\u0720\7@\2"+
		"\2\u0720\u0721\7@\2\2\u0721\u0722\7@\2\2\u0722\u0723\7?\2\2\u0723\u01dc"+
		"\3\2\2\2\u0724\u0725\7A\2\2\u0725\u0726\7?\2\2\u0726\u01de\3\2\2\2\u0727"+
		"\u0728\5\u01e5\u00f0\2\u0728\u072c\6\u00ed\21\2\u0729\u072b\5\u01e9\u00f2"+
		"\2\u072a\u0729\3\2\2\2\u072b\u072e\3\2\2\2\u072c\u072a\3\2\2\2\u072c\u072d"+
		"\3\2\2\2\u072d\u01e0\3\2\2\2\u072e\u072c\3\2\2\2\u072f\u0733\5\u01e5\u00f0"+
		"\2\u0730\u0732\5\u01e9\u00f2\2\u0731\u0730\3\2\2\2\u0732\u0735\3\2\2\2"+
		"\u0733\u0731\3\2\2\2\u0733\u0734\3\2\2\2\u0734\u01e2\3\2\2\2\u0735\u0733"+
		"\3\2\2\2\u0736\u073a\5\u01e7\u00f1\2\u0737\u0739\5\u01eb\u00f3\2\u0738"+
		"\u0737\3\2\2\2\u0739\u073c\3\2\2\2\u073a\u0738\3\2\2\2\u073a\u073b\3\2"+
		"\2\2\u073b\u01e4\3\2\2\2\u073c\u073a\3\2\2\2\u073d\u0744\t\25\2\2\u073e"+
		"\u073f\n\26\2\2\u073f\u0744\6\u00f0\22\2\u0740\u0741\t\27\2\2\u0741\u0742"+
		"\t\30\2\2\u0742\u0744\6\u00f0\23\2\u0743\u073d\3\2\2\2\u0743\u073e\3\2"+
		"\2\2\u0743\u0740\3\2\2\2\u0744\u01e6\3\2\2\2\u0745\u0746\5\u01e5\u00f0"+
		"\2\u0746\u0747\6\u00f1\24\2\u0747\u01e8\3\2\2\2\u0748\u074f\t\31\2\2\u0749"+
		"\u074a\n\26\2\2\u074a\u074f\6\u00f2\25\2\u074b\u074c\t\27\2\2\u074c\u074d"+
		"\t\30\2\2\u074d\u074f\6\u00f2\26\2\u074e\u0748\3\2\2\2\u074e\u0749\3\2"+
		"\2\2\u074e\u074b\3\2\2\2\u074f\u01ea\3\2\2\2\u0750\u0751\5\u01e9\u00f2"+
		"\2\u0751\u0752\6\u00f3\27\2\u0752\u01ec\3\2\2\2\u0753\u0755\n\32\2\2\u0754"+
		"\u0753\3\2\2\2\u0755\u0758\3\2\2\2\u0756\u0754\3\2\2\2\u0756\u0757\3\2"+
		"\2\2\u0757\u01ee\3\2\2\2\u0758\u0756\3\2\2\2\u0759\u075a\7B\2\2\u075a"+
		"\u01f0\3\2\2\2\u075b\u075c\7\60\2\2\u075c\u075d\7\60\2\2\u075d\u075e\7"+
		"\60\2\2\u075e\u01f2\3\2\2\2\u075f\u0761\t\33\2\2\u0760\u075f\3\2\2\2\u0761"+
		"\u0762\3\2\2\2\u0762\u0760\3\2\2\2\u0762\u0763\3\2\2\2\u0763\u076a\3\2"+
		"\2\2\u0764\u0766\5\u013d\u009c\2\u0765\u0764\3\2\2\2\u0766\u0767\3\2\2"+
		"\2\u0767\u0765\3\2\2\2\u0767\u0768\3\2\2\2\u0768\u076a\3\2\2\2\u0769\u0760"+
		"\3\2\2\2\u0769\u0765\3\2\2\2\u076a\u076b\3\2\2\2\u076b\u076c\b\u00f7\35"+
		"\2\u076c\u01f4\3\2\2\2\u076d\u076e\5\u013f\u009d\2\u076e\u076f\b\u00f8"+
		"\36\2\u076f\u01f6\3\2\2\2\u0770\u0771\7\61\2\2\u0771\u0772\7,\2\2\u0772"+
		"\u0776\3\2\2\2\u0773\u0775\13\2\2\2\u0774\u0773\3\2\2\2\u0775\u0778\3"+
		"\2\2\2\u0776\u0777\3\2\2\2\u0776\u0774\3\2\2\2\u0777\u0779\3\2\2\2\u0778"+
		"\u0776\3\2\2\2\u0779\u077a\7,\2\2\u077a\u077b\7\61\2\2\u077b\u077c\3\2"+
		"\2\2\u077c\u077d\b\u00f9\37\2\u077d\u077e\3\2\2\2\u077e\u077f\b\u00f9"+
		" \2\u077f\u01f8\3\2\2\2\u0780\u0781\7\61\2\2\u0781\u0782\7\61\2\2\u0782"+
		"\u0786\3\2\2\2\u0783\u0785\n\32\2\2\u0784\u0783\3\2\2\2\u0785\u0788\3"+
		"\2\2\2\u0786\u0784\3\2\2\2\u0786\u0787\3\2\2\2\u0787\u0789\3\2\2\2\u0788"+
		"\u0786\3\2\2\2\u0789\u078a\b\u00fa!\2\u078a\u078b\3\2\2\2\u078b\u078c"+
		"\b\u00fa \2\u078c\u01fa\3\2\2\2\u078d\u078e\7%\2\2\u078e\u078f\7#\2\2"+
		"\u078f\u0790\3\2\2\2\u0790\u0791\b\u00fb\"\2\u0791\u079a\5\u01ed\u00f4"+
		"\2\u0792\u0793\5\u013f\u009d\2\u0793\u0794\7%\2\2\u0794\u0795\7#\2\2\u0795"+
		"\u0796\3\2\2\2\u0796\u0797\5\u01ed\u00f4\2\u0797\u0799\3\2\2\2\u0798\u0792"+
		"\3\2\2\2\u0799\u079c\3\2\2\2\u079a\u0798\3\2\2\2\u079a\u079b\3\2\2\2\u079b"+
		"\u079d\3\2\2\2\u079c\u079a\3\2\2\2\u079d\u079e\b\u00fb\35\2\u079e\u01fc"+
		"\3\2\2\2\u079f\u07a0\13\2\2\2\u07a0\u07a1\b\u00fc#\2\u07a1\u01fe\3\2\2"+
		"\2T\2\3\4\5\6\7\b\u028b\u0294\u029e\u02a6\u02af\u02b8\u02bc\u02c2\u02ce"+
		"\u02dc\u02ea\u030f\u0346\u034a\u0351\u0358\u035f\u036f\u0395\u0515\u051a"+
		"\u0521\u0525\u0527\u052d\u0531\u0535\u0539\u0540\u0545\u0547\u054d\u0551"+
		"\u0555\u055b\u0560\u056c\u0570\u0576\u057a\u0582\u0586\u058c\u0596\u059a"+
		"\u05a0\u05a4\u05a9\u05ac\u05b1\u05b4\u05b9\u05be\u05c6\u05d1\u05d5\u05da"+
		"\u05df\u05f1\u05fa\u0608\u061a\u061e\u072c\u0733\u073a\u0743\u074e\u0756"+
		"\u0762\u0767\u0769\u0776\u0786\u079a$\7\3\2\7\7\2\t\4\2\7\4\2\7\5\2\7"+
		"\6\2\6\2\2\5\2\2\t\5\2\t\6\2\3)\2\tZ\2\7\2\2\t\u0085\2\7\b\2\3,\3\3p\4"+
		"\3p\5\3p\6\3\u008a\7\3\u00b2\b\3\u00c1\t\3\u00c2\n\3\u00c3\13\3\u00c4"+
		"\f\3\u00c5\r\3\u00c6\16\b\2\2\3\u00f8\17\3\u00f9\20\t\u0089\2\3\u00fa"+
		"\21\3\u00fb\22\3\u00fc\23";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}