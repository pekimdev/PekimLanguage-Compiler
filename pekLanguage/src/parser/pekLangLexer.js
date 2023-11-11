// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


      const {STRING, NUMBER, BOOLEAN, ARRAY} = require("../dataStructures/PekVariable.js")
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


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001a\u00b4\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011{\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0007\u0013\u0081\n\u0013\f\u0013\u000e",
    "\u0013\u0084\u000b\u0013\u0003\u0014\u0006\u0014\u0087\n\u0014\r\u0014",
    "\u000e\u0014\u0088\u0003\u0014\u0003\u0014\u0006\u0014\u008d\n\u0014",
    "\r\u0014\u000e\u0014\u008e\u0005\u0014\u0091\n\u0014\u0003\u0015\u0003",
    "\u0015\u0007\u0015\u0095\n\u0015\f\u0015\u000e\u0015\u0098\u000b\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00ab\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0096\u0002\u001a\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "\u0003\u0002\b\u0005\u0002,-//11\u0004\u0002>>@@\u0003\u0002c|\u0005",
    "\u00022;C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "\u00bc\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00033\u0003\u0002",
    "\u0002\u0002\u0005;\u0003\u0002\u0002\u0002\u0007A\u0003\u0002\u0002",
    "\u0002\tE\u0003\u0002\u0002\u0002\u000bN\u0003\u0002\u0002\u0002\rQ",
    "\u0003\u0002\u0002\u0002\u000fW\u0003\u0002\u0002\u0002\u0011[\u0003",
    "\u0002\u0002\u0002\u0013e\u0003\u0002\u0002\u0002\u0015g\u0003\u0002",
    "\u0002\u0002\u0017i\u0003\u0002\u0002\u0002\u0019k\u0003\u0002\u0002",
    "\u0002\u001bm\u0003\u0002\u0002\u0002\u001do\u0003\u0002\u0002\u0002",
    "\u001fq\u0003\u0002\u0002\u0002!z\u0003\u0002\u0002\u0002#|\u0003\u0002",
    "\u0002\u0002%~\u0003\u0002\u0002\u0002\'\u0086\u0003\u0002\u0002\u0002",
    ")\u0092\u0003\u0002\u0002\u0002+\u00aa\u0003\u0002\u0002\u0002-\u00ac",
    "\u0003\u0002\u0002\u0002/\u00ae\u0003\u0002\u0002\u00021\u00b0\u0003",
    "\u0002\u0002\u000234\u0007I\u0002\u000245\u0007C\u0002\u000256\u0007",
    "D\u0002\u000267\u0007T\u0002\u000278\u0007K\u0002\u000289\u0007G\u0002",
    "\u00029:\u0007N\u0002\u0002:\u0004\u0003\u0002\u0002\u0002;<\u0007R",
    "\u0002\u0002<=\u0007G\u0002\u0002=>\u0007M\u0002\u0002>?\u0007K\u0002",
    "\u0002?@\u0007O\u0002\u0002@\u0006\u0003\u0002\u0002\u0002AB\u0007n",
    "\u0002\u0002BC\u0007g\u0002\u0002CD\u0007t\u0002\u0002D\b\u0003\u0002",
    "\u0002\u0002EF\u0007g\u0002\u0002FG\u0007u\u0002\u0002GH\u0007e\u0002",
    "\u0002HI\u0007t\u0002\u0002IJ\u0007g\u0002\u0002JK\u0007x\u0002\u0002",
    "KL\u0007g\u0002\u0002LM\u0007t\u0002\u0002M\n\u0003\u0002\u0002\u0002",
    "NO\u0007u\u0002\u0002OP\u0007g\u0002\u0002P\f\u0003\u0002\u0002\u0002",
    "QR\u0007u\u0002\u0002RS\u0007g\u0002\u0002ST\u0007p\u0002\u0002TU\u0007",
    "c\u0002\u0002UV\u0007q\u0002\u0002V\u000e\u0003\u0002\u0002\u0002WX",
    "\u0007h\u0002\u0002XY\u0007w\u0002\u0002YZ\u0007p\u0002\u0002Z\u0010",
    "\u0003\u0002\u0002\u0002[\\\u0007g\u0002\u0002\\]\u0007z\u0002\u0002",
    "]^\u0007g\u0002\u0002^_\u0007e\u0002\u0002_`\u0007w\u0002\u0002`a\u0007",
    "v\u0002\u0002ab\u0007c\u0002\u0002bc\u0007t\u0002\u0002cd\u0007\"\u0002",
    "\u0002d\u0012\u0003\u0002\u0002\u0002ef\u0007]\u0002\u0002f\u0014\u0003",
    "\u0002\u0002\u0002gh\u0007_\u0002\u0002h\u0016\u0003\u0002\u0002\u0002",
    "ij\u0007*\u0002\u0002j\u0018\u0003\u0002\u0002\u0002kl\u0007+\u0002",
    "\u0002l\u001a\u0003\u0002\u0002\u0002mn\u0007}\u0002\u0002n\u001c\u0003",
    "\u0002\u0002\u0002op\u0007\u007f\u0002\u0002p\u001e\u0003\u0002\u0002",
    "\u0002qr\t\u0002\u0002\u0002r \u0003\u0002\u0002\u0002s{\t\u0003\u0002",
    "\u0002tu\u0007@\u0002\u0002u{\u0007?\u0002\u0002vw\u0007>\u0002\u0002",
    "w{\u0007?\u0002\u0002xy\u0007?\u0002\u0002y{\u0007?\u0002\u0002zs\u0003",
    "\u0002\u0002\u0002zt\u0003\u0002\u0002\u0002zv\u0003\u0002\u0002\u0002",
    "zx\u0003\u0002\u0002\u0002{\"\u0003\u0002\u0002\u0002|}\u0007?\u0002",
    "\u0002}$\u0003\u0002\u0002\u0002~\u0082\t\u0004\u0002\u0002\u007f\u0081",
    "\t\u0005\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0084",
    "\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083",
    "\u0003\u0002\u0002\u0002\u0083&\u0003\u0002\u0002\u0002\u0084\u0082",
    "\u0003\u0002\u0002\u0002\u0085\u0087\t\u0006\u0002\u0002\u0086\u0085",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0086",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u0090",
    "\u0003\u0002\u0002\u0002\u008a\u008c\u00070\u0002\u0002\u008b\u008d",
    "\t\u0006\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0003\u0002\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008a",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091(",
    "\u0003\u0002\u0002\u0002\u0092\u0096\u0007$\u0002\u0002\u0093\u0095",
    "\u000b\u0002\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\u0098",
    "\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0096\u0094",
    "\u0003\u0002\u0002\u0002\u0097\u0099\u0003\u0002\u0002\u0002\u0098\u0096",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0007$\u0002\u0002\u009a*\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007X\u0002\u0002\u009c\u009d\u0007",
    "g\u0002\u0002\u009d\u009e\u0007t\u0002\u0002\u009e\u009f\u0007f\u0002",
    "\u0002\u009f\u00a0\u0007c\u0002\u0002\u00a0\u00a1\u0007f\u0002\u0002",
    "\u00a1\u00a2\u0007g\u0002\u0002\u00a2\u00a3\u0007k\u0002\u0002\u00a3",
    "\u00a4\u0007t\u0002\u0002\u00a4\u00ab\u0007q\u0002\u0002\u00a5\u00a6",
    "\u0007H\u0002\u0002\u00a6\u00a7\u0007c\u0002\u0002\u00a7\u00a8\u0007",
    "n\u0002\u0002\u00a8\u00a9\u0007u\u0002\u0002\u00a9\u00ab\u0007q\u0002",
    "\u0002\u00aa\u009b\u0003\u0002\u0002\u0002\u00aa\u00a5\u0003\u0002\u0002",
    "\u0002\u00ab,\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007=\u0002\u0002",
    "\u00ad.\u0003\u0002\u0002\u0002\u00ae\u00af\u0007.\u0002\u0002\u00af",
    "0\u0003\u0002\u0002\u0002\u00b0\u00b1\t\u0007\u0002\u0002\u00b1\u00b2",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\b\u0019\u0002\u0002\u00b32\u0003",
    "\u0002\u0002\u0002\u000b\u0002z\u0080\u0082\u0088\u008e\u0090\u0096",
    "\u00aa\u0003\b\u0002\u0002"].join("");


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

pekLangLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pekLangLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pekLangLexer.prototype.literalNames = [ null, "'GABRIEL'", "'PEKIM'", "'ler'", 
                                        "'escrever'", "'se'", "'senao'", 
                                        "'fun'", "'executar '", "'['", "']'", 
                                        "'('", "')'", "'{'", "'}'", null, 
                                        null, "'='", null, null, null, null, 
                                        "';'", "','" ];

pekLangLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, "AP", 
                                         "FP", "AC", "FC", "OP", "OPREL", 
                                         "ATTR", "ID", "NUMBER", "STRING", 
                                         "BOOLEAN", "SemiColon", "COMMA", 
                                         "WS" ];

pekLangLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "AP", "FP", "AC", "FC", "OP", "OPREL", 
                                     "ATTR", "ID", "NUMBER", "STRING", "BOOLEAN", 
                                     "SemiColon", "COMMA", "WS" ];

pekLangLexer.prototype.grammarFileName = "pekLang.g4";


      let symbolTable = new PekSymbolTable();
      let functionTable = new PekFunctionTable();
      let paramTable = new PekParamTable();
      let program = new PekProgram();
      let stack = new Stack();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Symbol '${id}' not declared.`)
            }
      }


      function verificationFunction(funName){
            if(!functionTable.exists(funName)){
                  throw new PekSemanticError(`Essa função executada não existe.`)
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

