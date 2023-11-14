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
      const { AccessCommand } = require("../ast/AccessCommand.js");


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001f\u00eb\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u00b2\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0007\u0018\u00b8\n\u0018\f\u0018\u000e\u0018\u00bb\u000b\u0018",
    "\u0003\u0019\u0006\u0019\u00be\n\u0019\r\u0019\u000e\u0019\u00bf\u0003",
    "\u0019\u0003\u0019\u0006\u0019\u00c4\n\u0019\r\u0019\u000e\u0019\u00c5",
    "\u0005\u0019\u00c8\n\u0019\u0003\u001a\u0003\u001a\u0007\u001a\u00cc",
    "\n\u001a\f\u001a\u000e\u001a\u00cf\u000b\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u00e2\n\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u00cd\u0002\u001f\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f\u0003\u0002\b\u0005\u0002,-//11\u0004\u0002>>@@\u0003\u0002",
    "c|\u0005\u00022;C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002\u00f3\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
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
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0003=\u0003\u0002\u0002\u0002\u0005E\u0003\u0002\u0002",
    "\u0002\u0007K\u0003\u0002\u0002\u0002\tO\u0003\u0002\u0002\u0002\u000b",
    "X\u0003\u0002\u0002\u0002\r[\u0003\u0002\u0002\u0002\u000fd\u0003\u0002",
    "\u0002\u0002\u0011j\u0003\u0002\u0002\u0002\u0013n\u0003\u0002\u0002",
    "\u0002\u0015w\u0003\u0002\u0002\u0002\u0017y\u0003\u0002\u0002\u0002",
    "\u0019{\u0003\u0002\u0002\u0002\u001b\u0083\u0003\u0002\u0002\u0002",
    "\u001d\u008c\u0003\u0002\u0002\u0002\u001f\u0097\u0003\u0002\u0002\u0002",
    "!\u00a0\u0003\u0002\u0002\u0002#\u00a2\u0003\u0002\u0002\u0002%\u00a4",
    "\u0003\u0002\u0002\u0002\'\u00a6\u0003\u0002\u0002\u0002)\u00a8\u0003",
    "\u0002\u0002\u0002+\u00b1\u0003\u0002\u0002\u0002-\u00b3\u0003\u0002",
    "\u0002\u0002/\u00b5\u0003\u0002\u0002\u00021\u00bd\u0003\u0002\u0002",
    "\u00023\u00c9\u0003\u0002\u0002\u00025\u00e1\u0003\u0002\u0002\u0002",
    "7\u00e3\u0003\u0002\u0002\u00029\u00e5\u0003\u0002\u0002\u0002;\u00e7",
    "\u0003\u0002\u0002\u0002=>\u0007I\u0002\u0002>?\u0007C\u0002\u0002?",
    "@\u0007D\u0002\u0002@A\u0007T\u0002\u0002AB\u0007K\u0002\u0002BC\u0007",
    "G\u0002\u0002CD\u0007N\u0002\u0002D\u0004\u0003\u0002\u0002\u0002EF",
    "\u0007R\u0002\u0002FG\u0007G\u0002\u0002GH\u0007M\u0002\u0002HI\u0007",
    "K\u0002\u0002IJ\u0007O\u0002\u0002J\u0006\u0003\u0002\u0002\u0002KL",
    "\u0007n\u0002\u0002LM\u0007g\u0002\u0002MN\u0007t\u0002\u0002N\b\u0003",
    "\u0002\u0002\u0002OP\u0007g\u0002\u0002PQ\u0007u\u0002\u0002QR\u0007",
    "e\u0002\u0002RS\u0007t\u0002\u0002ST\u0007g\u0002\u0002TU\u0007x\u0002",
    "\u0002UV\u0007g\u0002\u0002VW\u0007t\u0002\u0002W\n\u0003\u0002\u0002",
    "\u0002XY\u0007u\u0002\u0002YZ\u0007g\u0002\u0002Z\f\u0003\u0002\u0002",
    "\u0002[\\\u0007u\u0002\u0002\\]\u0007g\u0002\u0002]^\u0007p\u0002\u0002",
    "^_\u0007c\u0002\u0002_`\u0007q\u0002\u0002`a\u0007\"\u0002\u0002ab\u0007",
    "u\u0002\u0002bc\u0007g\u0002\u0002c\u000e\u0003\u0002\u0002\u0002de",
    "\u0007u\u0002\u0002ef\u0007g\u0002\u0002fg\u0007p\u0002\u0002gh\u0007",
    "c\u0002\u0002hi\u0007q\u0002\u0002i\u0010\u0003\u0002\u0002\u0002jk",
    "\u0007h\u0002\u0002kl\u0007w\u0002\u0002lm\u0007p\u0002\u0002m\u0012",
    "\u0003\u0002\u0002\u0002no\u0007t\u0002\u0002op\u0007g\u0002\u0002p",
    "q\u0007v\u0002\u0002qr\u0007q\u0002\u0002rs\u0007t\u0002\u0002st\u0007",
    "p\u0002\u0002tu\u0007c\u0002\u0002uv\u0007t\u0002\u0002v\u0014\u0003",
    "\u0002\u0002\u0002wx\u0007]\u0002\u0002x\u0016\u0003\u0002\u0002\u0002",
    "yz\u0007_\u0002\u0002z\u0018\u0003\u0002\u0002\u0002{|\u00070\u0002",
    "\u0002|}\u0007w\u0002\u0002}~\u0007n\u0002\u0002~\u007f\u0007v\u0002",
    "\u0002\u007f\u0080\u0007k\u0002\u0002\u0080\u0081\u0007o\u0002\u0002",
    "\u0081\u0082\u0007q\u0002\u0002\u0082\u001a\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u00070\u0002\u0002\u0084\u0085\u0007v\u0002\u0002\u0085",
    "\u0086\u0007c\u0002\u0002\u0086\u0087\u0007o\u0002\u0002\u0087\u0088",
    "\u0007c\u0002\u0002\u0088\u0089\u0007p\u0002\u0002\u0089\u008a\u0007",
    "j\u0002\u0002\u008a\u008b\u0007q\u0002\u0002\u008b\u001c\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u00070\u0002\u0002\u008d\u008e\u0007c\u0002",
    "\u0002\u008e\u008f\u0007f\u0002\u0002\u008f\u0090\u0007k\u0002\u0002",
    "\u0090\u0091\u0007e\u0002\u0002\u0091\u0092\u0007k\u0002\u0002\u0092",
    "\u0093\u0007q\u0002\u0002\u0093\u0094\u0007p\u0002\u0002\u0094\u0095",
    "\u0007c\u0002\u0002\u0095\u0096\u0007t\u0002\u0002\u0096\u001e\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u00070\u0002\u0002\u0098\u0099\u0007",
    "t\u0002\u0002\u0099\u009a\u0007g\u0002\u0002\u009a\u009b\u0007o\u0002",
    "\u0002\u009b\u009c\u0007q\u0002\u0002\u009c\u009d\u0007x\u0002\u0002",
    "\u009d\u009e\u0007g\u0002\u0002\u009e\u009f\u0007t\u0002\u0002\u009f",
    " \u0003\u0002\u0002\u0002\u00a0\u00a1\u0007*\u0002\u0002\u00a1\"\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0007+\u0002\u0002\u00a3$\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0007}\u0002\u0002\u00a5&\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0007\u007f\u0002\u0002\u00a7(\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\t\u0002\u0002\u0002\u00a9*\u0003\u0002\u0002\u0002",
    "\u00aa\u00b2\t\u0003\u0002\u0002\u00ab\u00ac\u0007@\u0002\u0002\u00ac",
    "\u00b2\u0007?\u0002\u0002\u00ad\u00ae\u0007>\u0002\u0002\u00ae\u00b2",
    "\u0007?\u0002\u0002\u00af\u00b0\u0007?\u0002\u0002\u00b0\u00b2\u0007",
    "?\u0002\u0002\u00b1\u00aa\u0003\u0002\u0002\u0002\u00b1\u00ab\u0003",
    "\u0002\u0002\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00af\u0003",
    "\u0002\u0002\u0002\u00b2,\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "?\u0002\u0002\u00b4.\u0003\u0002\u0002\u0002\u00b5\u00b9\t\u0004\u0002",
    "\u0002\u00b6\u00b8\t\u0005\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002",
    "\u0002\u00b8\u00bb\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba0\u0003\u0002\u0002",
    "\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bc\u00be\t\u0006\u0002",
    "\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002",
    "\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002",
    "\u0002\u00c0\u00c7\u0003\u0002\u0002\u0002\u00c1\u00c3\u00070\u0002",
    "\u0002\u00c2\u00c4\t\u0006\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002",
    "\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0003\u0002\u0002",
    "\u0002\u00c7\u00c1\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002",
    "\u0002\u00c82\u0003\u0002\u0002\u0002\u00c9\u00cd\u0007$\u0002\u0002",
    "\u00ca\u00cc\u000b\u0002\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002",
    "\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002",
    "\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00d0\u0003\u0002\u0002\u0002",
    "\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007$\u0002\u0002",
    "\u00d14\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007X\u0002\u0002\u00d3",
    "\u00d4\u0007g\u0002\u0002\u00d4\u00d5\u0007t\u0002\u0002\u00d5\u00d6",
    "\u0007f\u0002\u0002\u00d6\u00d7\u0007c\u0002\u0002\u00d7\u00d8\u0007",
    "f\u0002\u0002\u00d8\u00d9\u0007g\u0002\u0002\u00d9\u00da\u0007k\u0002",
    "\u0002\u00da\u00db\u0007t\u0002\u0002\u00db\u00e2\u0007q\u0002\u0002",
    "\u00dc\u00dd\u0007H\u0002\u0002\u00dd\u00de\u0007c\u0002\u0002\u00de",
    "\u00df\u0007n\u0002\u0002\u00df\u00e0\u0007u\u0002\u0002\u00e0\u00e2",
    "\u0007q\u0002\u0002\u00e1\u00d2\u0003\u0002\u0002\u0002\u00e1\u00dc",
    "\u0003\u0002\u0002\u0002\u00e26\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0007=\u0002\u0002\u00e48\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007",
    ".\u0002\u0002\u00e6:\u0003\u0002\u0002\u0002\u00e7\u00e8\t\u0007\u0002",
    "\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea\b\u001e\u0002",
    "\u0002\u00ea<\u0003\u0002\u0002\u0002\u000b\u0002\u00b1\u00b7\u00b9",
    "\u00bf\u00c5\u00c7\u00cd\u00e1\u0003\b\u0002\u0002"].join("");


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
pekLangLexer.T__10 = 11;
pekLangLexer.T__11 = 12;
pekLangLexer.T__12 = 13;
pekLangLexer.T__13 = 14;
pekLangLexer.T__14 = 15;
pekLangLexer.AP = 16;
pekLangLexer.FP = 17;
pekLangLexer.AC = 18;
pekLangLexer.FC = 19;
pekLangLexer.OP = 20;
pekLangLexer.OPREL = 21;
pekLangLexer.ATTR = 22;
pekLangLexer.ID = 23;
pekLangLexer.NUMBER = 24;
pekLangLexer.STRING = 25;
pekLangLexer.BOOLEAN = 26;
pekLangLexer.SemiColon = 27;
pekLangLexer.COMMA = 28;
pekLangLexer.WS = 29;

pekLangLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pekLangLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pekLangLexer.prototype.literalNames = [ null, "'GABRIEL'", "'PEKIM'", "'ler'", 
                                        "'escrever'", "'se'", "'senao se'", 
                                        "'senao'", "'fun'", "'retornar'", 
                                        "'['", "']'", "'.ultimo'", "'.tamanho'", 
                                        "'.adicionar'", "'.remover'", "'('", 
                                        "')'", "'{'", "'}'", null, null, 
                                        "'='", null, null, null, null, "';'", 
                                        "','" ];

pekLangLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, "AP", "FP", 
                                         "AC", "FC", "OP", "OPREL", "ATTR", 
                                         "ID", "NUMBER", "STRING", "BOOLEAN", 
                                         "SemiColon", "COMMA", "WS" ];

pekLangLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "T__11", "T__12", "T__13", 
                                     "T__14", "AP", "FP", "AC", "FC", "OP", 
                                     "OPREL", "ATTR", "ID", "NUMBER", "STRING", 
                                     "BOOLEAN", "SemiColon", "COMMA", "WS" ];

pekLangLexer.prototype.grammarFileName = "pekLang.g4";


      let symbolTable = new PekSymbolTable();
      let functionTable = new PekFunctionTable();
      let paramTable = new PekParamTable();
      let program = new PekProgram();
      let stack = new Stack();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Símbolo '${id}' não declarado.`)
            }
      }

      function verificationTypeID(id){
            let symbol = symbolTable.getSymbol(id);

            if(symbolTable.exists(id)){

            let type = symbol.getType();

            if(type !== ARRAY && type !== STRING) {
                  throw new PekSemanticError(`Símbolo '${id}' incongruente`)
            }
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

