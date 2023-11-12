// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


      const {STRING, NUMBER, BOOLEAN, ARRAY, FUNCTION} = require("../dataStructures/PekVariable.js")
      const { PekSymbol } = require("../dataStructures/PekSymbol.js");
      const { PekVariable } = require("../dataStructures/PekVariable.js");
      const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js");
      const { PekFunction } = require("../dataStructures/PekFunction.js");
      const { PekFun } = require("../dataStructures/PekFun.js");
      const { PekFunctionTable } = require("../dataStructures/PekFunctionTable.js");
      const { PekParam } = require("../dataStructures/PekParam.js");
      const { PekParamTable } = require("../dataStructures/PekParamTable");
      const { Stack } = require("../dataStructures/Stack.js");
      const { PekSemanticError } = require("../errors/PekSemanticError.js");

      const { PekProgram } = require("../ast/PekProgram.js");
      const { ReadCommand } = require("../ast/ReadCommand.js");
      const { WriteCommand } = require("../ast/WriteCommand.js");
      const { AssignmentCommand } = require("../ast/AssignmentCommand.js");
      const { DecisionCommand } = require("../ast/DecisionCommand.js");
      const { FunctionCommand } = require("../ast/FunctionCommand.js");
      const { FunExecCommand } = require("../ast/FunExecCommand.js");
      const { ReturnCommand } = require("../ast/ReturnCommand.js");


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001c\u00c1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011~\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u0084\n\u0013\f\u0013\u000e\u0013\u0087\u000b\u0013\u0003",
    "\u0014\u0006\u0014\u008a\n\u0014\r\u0014\u000e\u0014\u008b\u0003\u0014",
    "\u0003\u0014\u0006\u0014\u0090\n\u0014\r\u0014\u000e\u0014\u0091\u0005",
    "\u0014\u0094\n\u0014\u0003\u0015\u0003\u0015\u0007\u0015\u0098\n\u0015",
    "\f\u0015\u000e\u0015\u009b\u000b\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00ae\n\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u00b8\n\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u0099\u0002\u001c\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+",
    "\u0017-\u0018/\u00191\u001a3\u001b5\u001c\u0003\u0002\u0007\u0005\u0002",
    ",-//11\u0004\u0002>>@@\u0003\u0002c|\u0005\u00022;C\\c|\u0003\u0002",
    "2;\u0002\u00cc\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00037\u0003",
    "\u0002\u0002\u0002\u0005?\u0003\u0002\u0002\u0002\u0007E\u0003\u0002",
    "\u0002\u0002\tI\u0003\u0002\u0002\u0002\u000bR\u0003\u0002\u0002\u0002",
    "\rU\u0003\u0002\u0002\u0002\u000f[\u0003\u0002\u0002\u0002\u0011_\u0003",
    "\u0002\u0002\u0002\u0013h\u0003\u0002\u0002\u0002\u0015j\u0003\u0002",
    "\u0002\u0002\u0017l\u0003\u0002\u0002\u0002\u0019n\u0003\u0002\u0002",
    "\u0002\u001bp\u0003\u0002\u0002\u0002\u001dr\u0003\u0002\u0002\u0002",
    "\u001ft\u0003\u0002\u0002\u0002!}\u0003\u0002\u0002\u0002#\u007f\u0003",
    "\u0002\u0002\u0002%\u0081\u0003\u0002\u0002\u0002\'\u0089\u0003\u0002",
    "\u0002\u0002)\u0095\u0003\u0002\u0002\u0002+\u00ad\u0003\u0002\u0002",
    "\u0002-\u00af\u0003\u0002\u0002\u0002/\u00b1\u0003\u0002\u0002\u0002",
    "1\u00b7\u0003\u0002\u0002\u00023\u00bb\u0003\u0002\u0002\u00025\u00be",
    "\u0003\u0002\u0002\u000278\u0007I\u0002\u000289\u0007C\u0002\u00029",
    ":\u0007D\u0002\u0002:;\u0007T\u0002\u0002;<\u0007K\u0002\u0002<=\u0007",
    "G\u0002\u0002=>\u0007N\u0002\u0002>\u0004\u0003\u0002\u0002\u0002?@",
    "\u0007R\u0002\u0002@A\u0007G\u0002\u0002AB\u0007M\u0002\u0002BC\u0007",
    "K\u0002\u0002CD\u0007O\u0002\u0002D\u0006\u0003\u0002\u0002\u0002EF",
    "\u0007n\u0002\u0002FG\u0007g\u0002\u0002GH\u0007t\u0002\u0002H\b\u0003",
    "\u0002\u0002\u0002IJ\u0007g\u0002\u0002JK\u0007u\u0002\u0002KL\u0007",
    "e\u0002\u0002LM\u0007t\u0002\u0002MN\u0007g\u0002\u0002NO\u0007x\u0002",
    "\u0002OP\u0007g\u0002\u0002PQ\u0007t\u0002\u0002Q\n\u0003\u0002\u0002",
    "\u0002RS\u0007u\u0002\u0002ST\u0007g\u0002\u0002T\f\u0003\u0002\u0002",
    "\u0002UV\u0007u\u0002\u0002VW\u0007g\u0002\u0002WX\u0007p\u0002\u0002",
    "XY\u0007c\u0002\u0002YZ\u0007q\u0002\u0002Z\u000e\u0003\u0002\u0002",
    "\u0002[\\\u0007h\u0002\u0002\\]\u0007w\u0002\u0002]^\u0007p\u0002\u0002",
    "^\u0010\u0003\u0002\u0002\u0002_`\u0007t\u0002\u0002`a\u0007g\u0002",
    "\u0002ab\u0007v\u0002\u0002bc\u0007q\u0002\u0002cd\u0007t\u0002\u0002",
    "de\u0007p\u0002\u0002ef\u0007c\u0002\u0002fg\u0007t\u0002\u0002g\u0012",
    "\u0003\u0002\u0002\u0002hi\u0007]\u0002\u0002i\u0014\u0003\u0002\u0002",
    "\u0002jk\u0007_\u0002\u0002k\u0016\u0003\u0002\u0002\u0002lm\u0007*",
    "\u0002\u0002m\u0018\u0003\u0002\u0002\u0002no\u0007+\u0002\u0002o\u001a",
    "\u0003\u0002\u0002\u0002pq\u0007}\u0002\u0002q\u001c\u0003\u0002\u0002",
    "\u0002rs\u0007\u007f\u0002\u0002s\u001e\u0003\u0002\u0002\u0002tu\t",
    "\u0002\u0002\u0002u \u0003\u0002\u0002\u0002v~\t\u0003\u0002\u0002w",
    "x\u0007@\u0002\u0002x~\u0007?\u0002\u0002yz\u0007>\u0002\u0002z~\u0007",
    "?\u0002\u0002{|\u0007?\u0002\u0002|~\u0007?\u0002\u0002}v\u0003\u0002",
    "\u0002\u0002}w\u0003\u0002\u0002\u0002}y\u0003\u0002\u0002\u0002}{\u0003",
    "\u0002\u0002\u0002~\"\u0003\u0002\u0002\u0002\u007f\u0080\u0007?\u0002",
    "\u0002\u0080$\u0003\u0002\u0002\u0002\u0081\u0085\t\u0004\u0002\u0002",
    "\u0082\u0084\t\u0005\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002",
    "\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086&\u0003\u0002\u0002\u0002",
    "\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008a\t\u0006\u0002\u0002",
    "\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u0093\u0003\u0002\u0002\u0002\u008d\u008f\u00070\u0002\u0002",
    "\u008e\u0090\t\u0006\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002",
    "\u0093\u008d\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094(\u0003\u0002\u0002\u0002\u0095\u0099\u0007$\u0002\u0002\u0096",
    "\u0098\u000b\u0002\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098",
    "\u009b\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u0099",
    "\u0097\u0003\u0002\u0002\u0002\u009a\u009c\u0003\u0002\u0002\u0002\u009b",
    "\u0099\u0003\u0002\u0002\u0002\u009c\u009d\u0007$\u0002\u0002\u009d",
    "*\u0003\u0002\u0002\u0002\u009e\u009f\u0007X\u0002\u0002\u009f\u00a0",
    "\u0007g\u0002\u0002\u00a0\u00a1\u0007t\u0002\u0002\u00a1\u00a2\u0007",
    "f\u0002\u0002\u00a2\u00a3\u0007c\u0002\u0002\u00a3\u00a4\u0007f\u0002",
    "\u0002\u00a4\u00a5\u0007g\u0002\u0002\u00a5\u00a6\u0007k\u0002\u0002",
    "\u00a6\u00a7\u0007t\u0002\u0002\u00a7\u00ae\u0007q\u0002\u0002\u00a8",
    "\u00a9\u0007H\u0002\u0002\u00a9\u00aa\u0007c\u0002\u0002\u00aa\u00ab",
    "\u0007n\u0002\u0002\u00ab\u00ac\u0007u\u0002\u0002\u00ac\u00ae\u0007",
    "q\u0002\u0002\u00ad\u009e\u0003\u0002\u0002\u0002\u00ad\u00a8\u0003",
    "\u0002\u0002\u0002\u00ae,\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "=\u0002\u0002\u00b0.\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007.\u0002",
    "\u0002\u00b20\u0003\u0002\u0002\u0002\u00b3\u00b8\u00053\u001a\u0002",
    "\u00b4\u00b8\u0007\u000b\u0002\u0002\u00b5\u00b8\u00055\u001b\u0002",
    "\u00b6\u00b8\u0007\u000f\u0002\u0002\u00b7\u00b3\u0003\u0002\u0002\u0002",
    "\u00b7\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002",
    "\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\b\u0019\u0002\u0002\u00ba2\u0003\u0002\u0002\u0002\u00bb",
    "\u00bc\u0007\"\u0002\u0002\u00bc\u00bd\b\u001a\u0003\u0002\u00bd4\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0007\f\u0002\u0002\u00bf\u00c0\b\u001b",
    "\u0004\u0002\u00c06\u0003\u0002\u0002\u0002\f\u0002}\u0083\u0085\u008b",
    "\u0091\u0093\u0099\u00ad\u00b7\u0005\b\u0002\u0002\u0003\u001a\u0002",
    "\u0003\u001b\u0003"].join("");


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
pekLangLexer.T__4 = 5;
pekLangLexer.T__5 = 6;
pekLangLexer.T__6 = 7;
pekLangLexer.T__7 = 8;
pekLangLexer.T__8 = 9;
pekLangLexer.T__9 = 10;
pekLangLexer.AP = 11;
pekLangLexer.FP = 12;
pekLangLexer.AC = 13;
pekLangLexer.FC = 14;
pekLangLexer.OP = 15;
pekLangLexer.OPREL = 16;
pekLangLexer.ATTR = 17;
pekLangLexer.ID = 18;
pekLangLexer.NUMBER = 19;
pekLangLexer.STRING = 20;
pekLangLexer.BOOLEAN = 21;
pekLangLexer.SemiColon = 22;
pekLangLexer.COMMA = 23;
pekLangLexer.WS = 24;
pekLangLexer.SPACE = 25;
pekLangLexer.BREAKLINE = 26;

pekLangLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pekLangLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pekLangLexer.prototype.literalNames = [ null, "'GABRIEL'", "'PEKIM'", "'ler'", 
                                        "'escrever'", "'se'", "'senao'", 
                                        "'fun'", "'retornar'", "'['", "']'", 
                                        "'('", "')'", "'{'", "'}'", null, 
                                        null, "'='", null, null, null, null, 
                                        "';'", "','", null, "' '", "'\n'" ];

pekLangLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, "AP", 
                                         "FP", "AC", "FC", "OP", "OPREL", 
                                         "ATTR", "ID", "NUMBER", "STRING", 
                                         "BOOLEAN", "SemiColon", "COMMA", 
                                         "WS", "SPACE", "BREAKLINE" ];

pekLangLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "AP", "FP", "AC", "FC", "OP", "OPREL", 
                                     "ATTR", "ID", "NUMBER", "STRING", "BOOLEAN", 
                                     "SemiColon", "COMMA", "WS", "SPACE", 
                                     "BREAKLINE" ];

pekLangLexer.prototype.grammarFileName = "pekLang.g4";


      let symbolTable = new PekSymbolTable();
      let functionTable = new PekFunctionTable();
      let paramTable = new PekParamTable();
      let program = new PekProgram();
      let stack = new Stack();
      let line = 0;
      let column = 0;

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Símbolo '${id}' não declarado.`, line, column)
            }
      }


      function verificationFunction(funName){
            if(!functionTable.exists(funName)){
                  throw new PekSemanticError(`Essa função executada não existe.`, line, column)
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



pekLangLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 24:
		this.SPACE_action(localctx, actionIndex);
		break;
	case 25:
		this.BREAKLINE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

pekLangLexer.prototype.SPACE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		 column += 1 
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

pekLangLexer.prototype.BREAKLINE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 1:
		 line += 1; colum = 0 
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.pekLangLexer = pekLangLexer;

