// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


      const {NUMBER, STRING} = require("../dataStructures/PekVariable.js");
      const { PekSymbol } = require("../dataStructures/PekSymbol.js");
      const { PekVariable } = require("../dataStructures/PekVariable.js");
      const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js");
      const { Stack } = require("../dataStructures/Stack.js");
      const { PekSemanticError } = require("../errors/PekSemanticError.js");
      const { PekProgram } = require("../ast/PekProgram.js");
      const { ReadCommand } = require("../ast/ReadCommand.js");
      const { WriteCommand } = require("../ast/WriteCommand.js");
      const { AssignmentCommand } = require("../ast/AssignmentCommand.js");
      const { DecisionCommand } = require("../ast/DecisionCommand.js");


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0012i\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000bJ\n\u000b\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0007\rP\n\r\f\r\u000e\rS\u000b\r\u0003\u000e\u0006",
    "\u000eV\n\u000e\r\u000e\u000e\u000eW\u0003\u000e\u0003\u000e\u0006\u000e",
    "\\\n\u000e\r\u000e\u000e\u000e]\u0005\u000e`\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0002\u0002\u0012\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011!\u0012\u0003\u0002\b\u0005\u0002",
    ",-//11\u0004\u0002>>@@\u0003\u0002c|\u0005\u00022;C\\c|\u0003\u0002",
    "2;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002o\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0003#\u0003\u0002\u0002",
    "\u0002\u0005\'\u0003\u0002\u0002\u0002\u00070\u0003\u0002\u0002\u0002",
    "\t3\u0003\u0002\u0002\u0002\u000b8\u0003\u0002\u0002\u0002\r:\u0003",
    "\u0002\u0002\u0002\u000f<\u0003\u0002\u0002\u0002\u0011>\u0003\u0002",
    "\u0002\u0002\u0013@\u0003\u0002\u0002\u0002\u0015I\u0003\u0002\u0002",
    "\u0002\u0017K\u0003\u0002\u0002\u0002\u0019M\u0003\u0002\u0002\u0002",
    "\u001bU\u0003\u0002\u0002\u0002\u001da\u0003\u0002\u0002\u0002\u001f",
    "c\u0003\u0002\u0002\u0002!e\u0003\u0002\u0002\u0002#$\u0007n\u0002\u0002",
    "$%\u0007g\u0002\u0002%&\u0007t\u0002\u0002&\u0004\u0003\u0002\u0002",
    "\u0002\'(\u0007g\u0002\u0002()\u0007u\u0002\u0002)*\u0007e\u0002\u0002",
    "*+\u0007t\u0002\u0002+,\u0007g\u0002\u0002,-\u0007x\u0002\u0002-.\u0007",
    "g\u0002\u0002./\u0007t\u0002\u0002/\u0006\u0003\u0002\u0002\u000201",
    "\u0007k\u0002\u000212\u0007h\u0002\u00022\b\u0003\u0002\u0002\u0002",
    "34\u0007g\u0002\u000245\u0007n\u0002\u000256\u0007u\u0002\u000267\u0007",
    "g\u0002\u00027\n\u0003\u0002\u0002\u000289\u0007*\u0002\u00029\f\u0003",
    "\u0002\u0002\u0002:;\u0007+\u0002\u0002;\u000e\u0003\u0002\u0002\u0002",
    "<=\u0007}\u0002\u0002=\u0010\u0003\u0002\u0002\u0002>?\u0007\u007f\u0002",
    "\u0002?\u0012\u0003\u0002\u0002\u0002@A\t\u0002\u0002\u0002A\u0014\u0003",
    "\u0002\u0002\u0002BJ\t\u0003\u0002\u0002CD\u0007@\u0002\u0002DJ\u0007",
    "?\u0002\u0002EF\u0007>\u0002\u0002FJ\u0007?\u0002\u0002GH\u0007?\u0002",
    "\u0002HJ\u0007?\u0002\u0002IB\u0003\u0002\u0002\u0002IC\u0003\u0002",
    "\u0002\u0002IE\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002J\u0016",
    "\u0003\u0002\u0002\u0002KL\u0007?\u0002\u0002L\u0018\u0003\u0002\u0002",
    "\u0002MQ\t\u0004\u0002\u0002NP\t\u0005\u0002\u0002ON\u0003\u0002\u0002",
    "\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002",
    "\u0002\u0002R\u001a\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002",
    "TV\t\u0006\u0002\u0002UT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002",
    "\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X_\u0003\u0002",
    "\u0002\u0002Y[\u00070\u0002\u0002Z\\\t\u0006\u0002\u0002[Z\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^",
    "\u0003\u0002\u0002\u0002^`\u0003\u0002\u0002\u0002_Y\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`\u001c\u0003\u0002\u0002\u0002ab\u0007",
    "=\u0002\u0002b\u001e\u0003\u0002\u0002\u0002cd\u0007.\u0002\u0002d ",
    "\u0003\u0002\u0002\u0002ef\t\u0007\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "gh\b\u0011\u0002\u0002h\"\u0003\u0002\u0002\u0002\t\u0002IOQW]_\u0003",
    "\b\u0002\u0002"].join("");


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
pekLangLexer.AC = 7;
pekLangLexer.FC = 8;
pekLangLexer.OP = 9;
pekLangLexer.OPREL = 10;
pekLangLexer.ATTR = 11;
pekLangLexer.ID = 12;
pekLangLexer.NUMBER = 13;
pekLangLexer.SemiColon = 14;
pekLangLexer.COMMA = 15;
pekLangLexer.WS = 16;

pekLangLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pekLangLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pekLangLexer.prototype.literalNames = [ null, "'ler'", "'escrever'", "'if'", 
                                        "'else'", "'('", "')'", "'{'", "'}'", 
                                        null, null, "'='", null, null, "';'", 
                                        "','" ];

pekLangLexer.prototype.symbolicNames = [ null, null, null, null, null, "AP", 
                                         "FP", "AC", "FC", "OP", "OPREL", 
                                         "ATTR", "ID", "NUMBER", "SemiColon", 
                                         "COMMA", "WS" ];

pekLangLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "AP", 
                                     "FP", "AC", "FC", "OP", "OPREL", "ATTR", 
                                     "ID", "NUMBER", "SemiColon", "COMMA", 
                                     "WS" ];

pekLangLexer.prototype.grammarFileName = "pekLang.g4";


      let symbolTable = new PekSymbolTable();
      let program = new PekProgram();
      let trueList = new Array();
      let falseList = new Array();
      let stack = new Stack();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Symbol '${id}' not declared.`)
            }
      }

      function showCommands() {
            let commands = program.getCommands();
            commands.forEach((c) => {
                  console.log(c);
            })
            }

      function generateCode(){
            program.generateTarget();
      }




exports.pekLangLexer = pekLangLexer;

