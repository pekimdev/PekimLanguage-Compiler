// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


      const { PekSymbol } = require("../dataStructures/PekSymbol.js")
      const { PekVariable } = require("../dataStructures/PekVariable.js")
      const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js")
      const { PekSemanticError } = require("../errors/PekSemanticError.js")
      const {NUMBER, STRING} = require("../dataStructures/PekVariable.js")


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000f[\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0007\nB\n\n\f\n\u000e\nE\u000b\n\u0003\u000b\u0006",
    "\u000bH\n\u000b\r\u000b\u000e\u000bI\u0003\u000b\u0003\u000b\u0006\u000b",
    "N\n\u000b\r\u000b\u000e\u000bO\u0005\u000bR\n\u000b\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0002",
    "\u0002\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u0003\u0002\u0007\u0005\u0002,-//11\u0003\u0002c|\u0005\u00022;C\\",
    "c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002^\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005$",
    "\u0003\u0002\u0002\u0002\u0007+\u0003\u0002\u0002\u0002\t1\u0003\u0002",
    "\u0002\u0002\u000b7\u0003\u0002\u0002\u0002\r9\u0003\u0002\u0002\u0002",
    "\u000f;\u0003\u0002\u0002\u0002\u0011=\u0003\u0002\u0002\u0002\u0013",
    "?\u0003\u0002\u0002\u0002\u0015G\u0003\u0002\u0002\u0002\u0017S\u0003",
    "\u0002\u0002\u0002\u0019U\u0003\u0002\u0002\u0002\u001bW\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0007p\u0002\u0002\u001e\u001f\u0007w\u0002",
    "\u0002\u001f \u0007o\u0002\u0002 !\u0007d\u0002\u0002!\"\u0007g\u0002",
    "\u0002\"#\u0007t\u0002\u0002#\u0004\u0003\u0002\u0002\u0002$%\u0007",
    "u\u0002\u0002%&\u0007v\u0002\u0002&\'\u0007t\u0002\u0002\'(\u0007k\u0002",
    "\u0002()\u0007p\u0002\u0002)*\u0007i\u0002\u0002*\u0006\u0003\u0002",
    "\u0002\u0002+,\u0007r\u0002\u0002,-\u0007t\u0002\u0002-.\u0007k\u0002",
    "\u0002./\u0007p\u0002\u0002/0\u0007v\u0002\u00020\b\u0003\u0002\u0002",
    "\u000212\u0007y\u0002\u000223\u0007t\u0002\u000234\u0007k\u0002\u0002",
    "45\u0007v\u0002\u000256\u0007g\u0002\u00026\n\u0003\u0002\u0002\u0002",
    "78\u0007*\u0002\u00028\f\u0003\u0002\u0002\u00029:\u0007+\u0002\u0002",
    ":\u000e\u0003\u0002\u0002\u0002;<\t\u0002\u0002\u0002<\u0010\u0003\u0002",
    "\u0002\u0002=>\u0007?\u0002\u0002>\u0012\u0003\u0002\u0002\u0002?C\t",
    "\u0003\u0002\u0002@B\t\u0004\u0002\u0002A@\u0003\u0002\u0002\u0002B",
    "E\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002",
    "\u0002D\u0014\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FH\t",
    "\u0005\u0002\u0002GF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002",
    "IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JQ\u0003\u0002\u0002",
    "\u0002KM\u00070\u0002\u0002LN\t\u0005\u0002\u0002ML\u0003\u0002\u0002",
    "\u0002NO\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002",
    "\u0002\u0002PR\u0003\u0002\u0002\u0002QK\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002R\u0016\u0003\u0002\u0002\u0002ST\u0007=\u0002\u0002",
    "T\u0018\u0003\u0002\u0002\u0002UV\u0007.\u0002\u0002V\u001a\u0003\u0002",
    "\u0002\u0002WX\t\u0006\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\b\u000e",
    "\u0002\u0002Z\u001c\u0003\u0002\u0002\u0002\b\u0002ACIOQ\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function pekLangLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

pekLangLexer.prototype = Object.create(antlr4.Lexer.prototype);
pekLangLexer.prototype.constructor = pekLangLexer;

Object.defineProperty(pekLangLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

pekLangLexer.EOF = antlr4.Token.EOF;
pekLangLexer.T__0 = 1;
pekLangLexer.T__1 = 2;
pekLangLexer.T__2 = 3;
pekLangLexer.T__3 = 4;
pekLangLexer.AP = 5;
pekLangLexer.FP = 6;
pekLangLexer.OP = 7;
pekLangLexer.ATTR = 8;
pekLangLexer.ID = 9;
pekLangLexer.NUMBER = 10;
pekLangLexer.SemiColon = 11;
pekLangLexer.COMMA = 12;
pekLangLexer.WS = 13;

pekLangLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pekLangLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pekLangLexer.prototype.literalNames = [ null, "'number'", "'string'", "'print'", 
                                        "'write'", "'('", "')'", null, "'='", 
                                        null, null, "';'", "','" ];

pekLangLexer.prototype.symbolicNames = [ null, null, null, null, null, "AP", 
                                         "FP", "OP", "ATTR", "ID", "NUMBER", 
                                         "SemiColon", "COMMA", "WS" ];

pekLangLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "AP", 
                                     "FP", "OP", "ATTR", "ID", "NUMBER", 
                                     "SemiColon", "COMMA", "WS" ];

pekLangLexer.prototype.grammarFileName = "pekLang.g4";


      let _type;
      let _varName;
      let _varValue;
      let symbol;
      let symbolTable = new PekSymbolTable();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Symbol '${id}' not declared.`)
            }
      }



exports.pekLangLexer = pekLangLexer;

