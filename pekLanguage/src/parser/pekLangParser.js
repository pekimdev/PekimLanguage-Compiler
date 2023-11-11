// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index");
var pekLangListener = require("./pekLangListener").pekLangListener;

const {
  STRING,
  NUMBER,
  BOOLEAN,
  ARRAY,
} = require("../dataStructures/PekVariable.js");
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

var grammarFileName = "pekLang.g4";

var serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0003\u001a\u00ce\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
  "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
  "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002%\n\u0002",
  "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003+\n\u0003",
  "\r\u0003\u000e\u0003,\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
  "\u0003\u0004\u0003\u0004\u0005\u00045\n\u0004\u0003\u0005\u0003\u0005",
  "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
  ">\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006H\n\u0006\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
  "\u0005\u0007Q\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
  "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
  "\b\u0006\ba\n\b\r\b\u000e\bb\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
  "\u0003\b\u0006\bk\n\b\r\b\u000e\bl\u0003\b\u0003\b\u0003\b\u0005\br",
  "\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tz\n\t\u0003",
  "\t\u0003\t\u0003\t\u0003\t\u0007\t\u0080\n\t\f\t\u000e\t\u0083\u000b",
  "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
  "\n\u0005\n\u008e\n\n\u0003\n\u0003\n\u0003\n\u0005\n\u0093\n\n\u0003",
  "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0099\n\u000b",
  "\f\u000b\u000e\u000b\u009c\u000b\u000b\u0005\u000b\u009e\n\u000b\u0003",
  "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007",
  "\f\u00a8\n\f\f\f\u000e\f\u00ab\u000b\f\u0003\r\u0003\r\u0003\r\u0003",
  "\r\u0007\r\u00b1\n\r\f\r\u000e\r\u00b4\u000b\r\u0003\u000e\u0003\u000e",
  "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
  "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c1\n\u000e\u0003",
  "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00c6\n\u000f\f\u000f\u000e",
  "\u000f\u00c9\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
  "\u0002\u0002\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
  "\u0018\u001a\u001c\u001e\u0002\u0004\u0003\u0002\u0014\u0016\u0003\u0002",
  "\u0014\u0017\u0002\u00d8\u0002 \u0003\u0002\u0002\u0002\u0004(\u0003",
  "\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002\b6\u0003\u0002\u0002",
  "\u0002\n?\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eT",
  "\u0003\u0002\u0002\u0002\u0010s\u0003\u0002\u0002\u0002\u0012\u0087",
  "\u0003\u0002\u0002\u0002\u0014\u0094\u0003\u0002\u0002\u0002\u0016\u00a1",
  "\u0003\u0002\u0002\u0002\u0018\u00ac\u0003\u0002\u0002\u0002\u001a\u00c0",
  "\u0003\u0002\u0002\u0002\u001c\u00c2\u0003\u0002\u0002\u0002\u001e\u00ca",
  '\u0003\u0002\u0002\u0002 !\u0007\u0003\u0002\u0002!"\u0005\u0004\u0003',
  '\u0002"$\u0007\u0004\u0002\u0002#%\u0007\u0018\u0002\u0002$#\u0003',
  "\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002",
  "&'\b\u0002\u0001\u0002'\u0003\u0003\u0002\u0002\u0002(*\b\u0003\u0001",
  "\u0002)+\u0005\u0006\u0004\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002",
  "\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-\u0005",
  "\u0003\u0002\u0002\u0002.5\u0005\b\u0005\u0002/5\u0005\n\u0006\u0002",
  "05\u0005\f\u0007\u000215\u0005\u000e\b\u000225\u0005\u0010\t\u00023",
  "5\u0005\u0012\n\u00024.\u0003\u0002\u0002\u00024/\u0003\u0002\u0002",
  "\u000240\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000242\u0003\u0002",
  "\u0002\u000243\u0003\u0002\u0002\u00025\u0007\u0003\u0002\u0002\u0002",
  "67\u0007\u0005\u0002\u000278\u0007\r\u0002\u000289\u0007\u0014\u0002",
  "\u00029:\b\u0005\u0001\u0002:;\u0007\u000e\u0002\u0002;=\b\u0005\u0001",
  "\u0002<>\u0007\u0018\u0002\u0002=<\u0003\u0002\u0002\u0002=>\u0003\u0002",
  "\u0002\u0002>\t\u0003\u0002\u0002\u0002?@\u0007\u0006\u0002\u0002@A",
  "\u0007\r\u0002\u0002AB\b\u0006\u0001\u0002BC\u0005\u0018\r\u0002CD\b",
  "\u0006\u0001\u0002DE\u0007\u000e\u0002\u0002EG\b\u0006\u0001\u0002F",
  "H\u0007\u0018\u0002\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002",
  "\u0002H\u000b\u0003\u0002\u0002\u0002IJ\u0007\u0014\u0002\u0002JK\b",
  "\u0007\u0001\u0002KL\u0007\u0013\u0002\u0002LM\b\u0007\u0001\u0002M",
  "N\u0005\u0018\r\u0002NP\b\u0007\u0001\u0002OQ\u0007\u0018\u0002\u0002",
  "PO\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002",
  "\u0002RS\b\u0007\u0001\u0002S\r\u0003\u0002\u0002\u0002TU\u0007\u0007",
  "\u0002\u0002UV\u0007\r\u0002\u0002VW\t\u0002\u0002\u0002WX\b\b\u0001",
  "\u0002XY\u0007\u0012\u0002\u0002YZ\b\b\u0001\u0002Z[\t\u0003\u0002\u0002",
  "[\\\b\b\u0001\u0002\\]\u0007\u000e\u0002\u0002]^\u0007\u000f\u0002\u0002",
  "^`\b\b\u0001\u0002_a\u0005\u0006\u0004\u0002`_\u0003\u0002\u0002\u0002",
  "ab\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
  "\u0002cd\u0003\u0002\u0002\u0002de\u0007\u0010\u0002\u0002eq\b\b\u0001",
  "\u0002fg\u0007\b\u0002\u0002gh\u0007\u000f\u0002\u0002hj\b\b\u0001\u0002",
  "ik\u0005\u0006\u0004\u0002ji\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002",
  "\u0002lj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002",
  "\u0002\u0002no\u0007\u0010\u0002\u0002op\b\b\u0001\u0002pr\u0003\u0002",
  "\u0002\u0002qf\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r\u000f",
  "\u0003\u0002\u0002\u0002st\u0007\t\u0002\u0002tu\u0007\u0014\u0002\u0002",
  "uv\b\t\u0001\u0002vw\u0007\r\u0002\u0002wy\b\t\u0001\u0002xz\u0005\u001c",
  "\u000f\u0002yx\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z{\u0003",
  "\u0002\u0002\u0002{|\u0007\u000e\u0002\u0002|}\u0007\u000f\u0002\u0002",
  "}\u0081\b\t\u0001\u0002~\u0080\u0005\u0006\u0004\u0002\u007f~\u0003",
  "\u0002\u0002\u0002\u0080\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003",
  "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0003",
  "\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0007",
  "\u0010\u0002\u0002\u0085\u0086\b\t\u0001\u0002\u0086\u0011\u0003\u0002",
  "\u0002\u0002\u0087\u0088\u0007\n\u0002\u0002\u0088\u0089\u0007\u0014",
  "\u0002\u0002\u0089\u008a\b\n\u0001\u0002\u008a\u008b\u0007\r\u0002\u0002",
  "\u008b\u008d\b\n\u0001\u0002\u008c\u008e\u0005\u0016\f\u0002\u008d\u008c",
  "\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f",
  "\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u000e\u0002\u0002\u0090\u0092",
  "\b\n\u0001\u0002\u0091\u0093\u0007\u0018\u0002\u0002\u0092\u0091\u0003",
  "\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0013\u0003",
  "\u0002\u0002\u0002\u0094\u009d\u0007\u000b\u0002\u0002\u0095\u009a\u0005",
  "\u0018\r\u0002\u0096\u0097\u0007\u0019\u0002\u0002\u0097\u0099\u0005",
  "\u0018\r\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009c\u0003",
  "\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003",
  "\u0002\u0002\u0002\u009b\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003",
  "\u0002\u0002\u0002\u009d\u0095\u0003\u0002\u0002\u0002\u009d\u009e\u0003",
  "\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0007",
  "\f\u0002\u0002\u00a0\u0015\u0003\u0002\u0002\u0002\u00a1\u00a2\u0005",
  "\u0018\r\u0002\u00a2\u00a9\b\f\u0001\u0002\u00a3\u00a4\u0007\u0019\u0002",
  "\u0002\u00a4\u00a5\u0005\u0018\r\u0002\u00a5\u00a6\b\f\u0001\u0002\u00a6",
  "\u00a8\u0003\u0002\u0002\u0002\u00a7\u00a3\u0003\u0002\u0002\u0002\u00a8",
  "\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9",
  "\u00aa\u0003\u0002\u0002\u0002\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab",
  "\u00a9\u0003\u0002\u0002\u0002\u00ac\u00b2\u0005\u001a\u000e\u0002\u00ad",
  "\u00ae\u0007\u0011\u0002\u0002\u00ae\u00af\b\r\u0001\u0002\u00af\u00b1",
  "\u0005\u001a\u000e\u0002\u00b0\u00ad\u0003\u0002\u0002\u0002\u00b1\u00b4",
  "\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3",
  "\u0003\u0002\u0002\u0002\u00b3\u0019\u0003\u0002\u0002\u0002\u00b4\u00b2",
  "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\u0014\u0002\u0002\u00b6\u00c1",
  "\b\u000e\u0001\u0002\u00b7\u00b8\u0007\u0015\u0002\u0002\u00b8\u00c1",
  "\b\u000e\u0001\u0002\u00b9\u00ba\u0007\u0016\u0002\u0002\u00ba\u00c1",
  "\b\u000e\u0001\u0002\u00bb\u00bc\u0007\u0017\u0002\u0002\u00bc\u00c1",
  "\b\u000e\u0001\u0002\u00bd\u00be\u0005\u0014\u000b\u0002\u00be\u00bf",
  "\b\u000e\u0001\u0002\u00bf\u00c1\u0003\u0002\u0002\u0002\u00c0\u00b5",
  "\u0003\u0002\u0002\u0002\u00c0\u00b7\u0003\u0002\u0002\u0002\u00c0\u00b9",
  "\u0003\u0002\u0002\u0002\u00c0\u00bb\u0003\u0002\u0002\u0002\u00c0\u00bd",
  "\u0003\u0002\u0002\u0002\u00c1\u001b\u0003\u0002\u0002\u0002\u00c2\u00c7",
  "\u0005\u001e\u0010\u0002\u00c3\u00c4\u0007\u0019\u0002\u0002\u00c4\u00c6",
  "\u0005\u001e\u0010\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c9",
  "\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8",
  "\u0003\u0002\u0002\u0002\u00c8\u001d\u0003\u0002\u0002\u0002\u00c9\u00c7",
  "\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u0014\u0002\u0002\u00cb\u00cc",
  "\b\u0010\u0001\u0002\u00cc\u001f\u0003\u0002\u0002\u0002\u0015$,4=G",
  "Pblqy\u0081\u008d\u0092\u009a\u009d\u00a9\u00b2\u00c0\u00c7",
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
  null,
  "'GABRIEL'",
  "'PEKIM'",
  "'ler'",
  "'escrever'",
  "'se'",
  "'senao'",
  "'fun'",
  "'executar '",
  "'['",
  "']'",
  "'('",
  "')'",
  "'{'",
  "'}'",
  null,
  null,
  "'='",
  null,
  null,
  null,
  null,
  "';'",
  "','",
];

var symbolicNames = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "AP",
  "FP",
  "AC",
  "FC",
  "OP",
  "OPREL",
  "ATTR",
  "ID",
  "NUMBER",
  "STRING",
  "BOOLEAN",
  "SemiColon",
  "COMMA",
  "WS",
];

var ruleNames = [
  "prog",
  "bloco",
  "cmd",
  "readcmd",
  "writecmd",
  "attrcmd",
  "decisioncmd",
  "funcmd",
  "funexec",
  "array",
  "paramsExec",
  "expr",
  "term",
  "params",
  "param",
];

function pekLangParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(
    this,
    atn,
    decisionsToDFA,
    sharedContextCache
  );
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;

  return this;
}

let symbolTable = new PekSymbolTable();
let functionTable = new PekFunctionTable();
let paramTable = new PekParamTable();
let program = new PekProgram();
let stack = new Stack();

function verificationID(id) {
  if (!symbolTable.exists(id)) {
    throw new PekSemanticError(`Symbol '${id}' not declared.`);
  }
}

function verificationFunction(funName) {
  if (!functionTable.exists(funName)) {
    throw new PekSemanticError(`Essa função executada não existe.`);
  }
}

function showCommands() {
  let commands = program.getCommands();
  commands.forEach((c) => {
    console.log(c);
  });
}

function generateCode() {
  program.generateTarget();
}

pekLangParser.prototype = Object.create(antlr4.Parser.prototype);
pekLangParser.prototype.constructor = pekLangParser;

Object.defineProperty(pekLangParser.prototype, "atn", {
  get: function () {
    return atn;
  },
});

pekLangParser.EOF = antlr4.Token.EOF;
pekLangParser.T__0 = 1;
pekLangParser.T__1 = 2;
pekLangParser.T__2 = 3;
pekLangParser.T__3 = 4;
pekLangParser.T__4 = 5;
pekLangParser.T__5 = 6;
pekLangParser.T__6 = 7;
pekLangParser.T__7 = 8;
pekLangParser.T__8 = 9;
pekLangParser.T__9 = 10;
pekLangParser.AP = 11;
pekLangParser.FP = 12;
pekLangParser.AC = 13;
pekLangParser.FC = 14;
pekLangParser.OP = 15;
pekLangParser.OPREL = 16;
pekLangParser.ATTR = 17;
pekLangParser.ID = 18;
pekLangParser.NUMBER = 19;
pekLangParser.STRING = 20;
pekLangParser.BOOLEAN = 21;
pekLangParser.SemiColon = 22;
pekLangParser.COMMA = 23;
pekLangParser.WS = 24;

pekLangParser.RULE_prog = 0;
pekLangParser.RULE_bloco = 1;
pekLangParser.RULE_cmd = 2;
pekLangParser.RULE_readcmd = 3;
pekLangParser.RULE_writecmd = 4;
pekLangParser.RULE_attrcmd = 5;
pekLangParser.RULE_decisioncmd = 6;
pekLangParser.RULE_funcmd = 7;
pekLangParser.RULE_funexec = 8;
pekLangParser.RULE_array = 9;
pekLangParser.RULE_paramsExec = 10;
pekLangParser.RULE_expr = 11;
pekLangParser.RULE_term = 12;
pekLangParser.RULE_params = 13;
pekLangParser.RULE_param = 14;

function ProgContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_prog;
  return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.bloco = function () {
  return this.getTypedRuleContext(BlocoContext, 0);
};

ProgContext.prototype.SemiColon = function () {
  return this.getToken(pekLangParser.SemiColon, 0);
};

ProgContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterProg(this);
  }
};

ProgContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitProg(this);
  }
};

pekLangParser.ProgContext = ProgContext;

pekLangParser.prototype.prog = function () {
  var localctx = new ProgContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, pekLangParser.RULE_prog);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 30;
    this.match(pekLangParser.T__0);
    this.state = 31;
    this.bloco();
    this.state = 32;
    this.match(pekLangParser.T__1);
    this.state = 34;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 33;
      this.match(pekLangParser.SemiColon);
    }

    program.setVarTable(symbolTable);
    program.setCommands(stack.pop());
    generateCode();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BlocoContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_bloco;
  return this;
}

BlocoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlocoContext.prototype.constructor = BlocoContext;

BlocoContext.prototype.cmd = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CmdContext);
  } else {
    return this.getTypedRuleContext(CmdContext, i);
  }
};

BlocoContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterBloco(this);
  }
};

BlocoContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitBloco(this);
  }
};

pekLangParser.BlocoContext = BlocoContext;

pekLangParser.prototype.bloco = function () {
  var localctx = new BlocoContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, pekLangParser.RULE_bloco);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    let currentThread = new Array();
    stack.push(currentThread);

    this.state = 40;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 39;
      this.cmd();
      this.state = 42;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__2) |
          (1 << pekLangParser.T__3) |
          (1 << pekLangParser.T__4) |
          (1 << pekLangParser.T__6) |
          (1 << pekLangParser.T__7) |
          (1 << pekLangParser.ID))) !==
        0
    );
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function CmdContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_cmd;
  return this;
}

CmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CmdContext.prototype.constructor = CmdContext;

CmdContext.prototype.readcmd = function () {
  return this.getTypedRuleContext(ReadcmdContext, 0);
};

CmdContext.prototype.writecmd = function () {
  return this.getTypedRuleContext(WritecmdContext, 0);
};

CmdContext.prototype.attrcmd = function () {
  return this.getTypedRuleContext(AttrcmdContext, 0);
};

CmdContext.prototype.decisioncmd = function () {
  return this.getTypedRuleContext(DecisioncmdContext, 0);
};

CmdContext.prototype.funcmd = function () {
  return this.getTypedRuleContext(FuncmdContext, 0);
};

CmdContext.prototype.funexec = function () {
  return this.getTypedRuleContext(FunexecContext, 0);
};

CmdContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterCmd(this);
  }
};

CmdContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitCmd(this);
  }
};

pekLangParser.CmdContext = CmdContext;

pekLangParser.prototype.cmd = function () {
  var localctx = new CmdContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, pekLangParser.RULE_cmd);
  try {
    this.state = 50;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case pekLangParser.T__2:
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.readcmd();
        break;
      case pekLangParser.T__3:
        this.enterOuterAlt(localctx, 2);
        this.state = 45;
        this.writecmd();
        break;
      case pekLangParser.ID:
        this.enterOuterAlt(localctx, 3);
        this.state = 46;
        this.attrcmd();
        break;
      case pekLangParser.T__4:
        this.enterOuterAlt(localctx, 4);
        this.state = 47;
        this.decisioncmd();
        break;
      case pekLangParser.T__6:
        this.enterOuterAlt(localctx, 5);
        this.state = 48;
        this.funcmd();
        break;
      case pekLangParser.T__7:
        this.enterOuterAlt(localctx, 6);
        this.state = 49;
        this.funexec();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ReadcmdContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_readcmd;
  this._ID = null; // Token
  return this;
}

ReadcmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadcmdContext.prototype.constructor = ReadcmdContext;

ReadcmdContext.prototype.AP = function () {
  return this.getToken(pekLangParser.AP, 0);
};

ReadcmdContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
};

ReadcmdContext.prototype.FP = function () {
  return this.getToken(pekLangParser.FP, 0);
};

ReadcmdContext.prototype.SemiColon = function () {
  return this.getToken(pekLangParser.SemiColon, 0);
};

ReadcmdContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterReadcmd(this);
  }
};

ReadcmdContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitReadcmd(this);
  }
};

pekLangParser.ReadcmdContext = ReadcmdContext;

pekLangParser.prototype.readcmd = function () {
  var localctx = new ReadcmdContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, pekLangParser.RULE_readcmd);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 52;
    this.match(pekLangParser.T__2);
    this.state = 53;
    this.match(pekLangParser.AP);
    this.state = 54;
    localctx._ID = this.match(pekLangParser.ID);

    let readID = localctx._ID === null ? null : localctx._ID.text;
    this.state = 56;
    this.match(pekLangParser.FP);

    let variable = symbolTable.getSymbol(readID);
    let cmd = new ReadCommand(readID, variable);
    stack.peek().push(cmd);

    this.state = 59;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 58;
      this.match(pekLangParser.SemiColon);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function WritecmdContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_writecmd;
  this._expr = null; // ExprContext
  return this;
}

WritecmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WritecmdContext.prototype.constructor = WritecmdContext;

WritecmdContext.prototype.AP = function () {
  return this.getToken(pekLangParser.AP, 0);
};

WritecmdContext.prototype.expr = function () {
  return this.getTypedRuleContext(ExprContext, 0);
};

WritecmdContext.prototype.FP = function () {
  return this.getToken(pekLangParser.FP, 0);
};

WritecmdContext.prototype.SemiColon = function () {
  return this.getToken(pekLangParser.SemiColon, 0);
};

WritecmdContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterWritecmd(this);
  }
};

WritecmdContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitWritecmd(this);
  }
};

pekLangParser.WritecmdContext = WritecmdContext;

pekLangParser.prototype.writecmd = function () {
  var localctx = new WritecmdContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, pekLangParser.RULE_writecmd);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 61;
    this.match(pekLangParser.T__3);
    this.state = 62;
    this.match(pekLangParser.AP);

    exprContent = "";

    this.state = 64;
    localctx._expr = this.expr();
    writeID =
      localctx._expr === null
        ? null
        : this._input.getText(
            new antlr4.Interval(localctx._expr.start, localctx._expr.stop)
          );
    this.state = 66;
    this.match(pekLangParser.FP);

    let cmd = new WriteCommand(writeID);
    stack.peek().push(cmd);

    this.state = 69;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 68;
      this.match(pekLangParser.SemiColon);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function AttrcmdContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_attrcmd;
  this._ID = null; // Token
  return this;
}

AttrcmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttrcmdContext.prototype.constructor = AttrcmdContext;

AttrcmdContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
};

AttrcmdContext.prototype.ATTR = function () {
  return this.getToken(pekLangParser.ATTR, 0);
};

AttrcmdContext.prototype.expr = function () {
  return this.getTypedRuleContext(ExprContext, 0);
};

AttrcmdContext.prototype.SemiColon = function () {
  return this.getToken(pekLangParser.SemiColon, 0);
};

AttrcmdContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterAttrcmd(this);
  }
};

AttrcmdContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitAttrcmd(this);
  }
};

pekLangParser.AttrcmdContext = AttrcmdContext;

pekLangParser.prototype.attrcmd = function () {
  var localctx = new AttrcmdContext(this, this._ctx, this.state);
  this.enterRule(localctx, 10, pekLangParser.RULE_attrcmd);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 71;
    localctx._ID = this.match(pekLangParser.ID);

    let _varName = localctx._ID === null ? null : localctx._ID.text;
    let _varValue = null;
    let exprID = localctx._ID === null ? null : localctx._ID.text;
    let _type;

    this.state = 73;
    this.match(pekLangParser.ATTR);
    exprContent = "";

    this.state = 75;
    this.expr();

    let firstChar = exprContent[0];
    let lastChar = exprContent[exprContent.length - 1];

    if (firstChar == '"' && lastChar == '"') {
      _type = STRING;
    } else if (!isNaN(exprContent)) {
      _type = NUMBER;
    } else if (firstChar == "[" && lastChar == "]") {
      _type = ARRAY;
    } else {
      _type = BOOLEAN;
    }

    let symbol = new PekVariable(_varName, _type, _varValue);

    if (!symbolTable.exists(_varName)) {
      symbolTable.addSymbol(symbol);
    } else {
      throw new PekSemanticError(`Variável '${_varName}' já declarada.`);
    }

    this.state = 78;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 77;
      this.match(pekLangParser.SemiColon);
    }

    let cmd = new AssignmentCommand(exprID, exprContent);
    stack.peek().push(cmd);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function DecisioncmdContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_decisioncmd;
  this._OPREL = null; // Token
  return this;
}

DecisioncmdContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
DecisioncmdContext.prototype.constructor = DecisioncmdContext;

DecisioncmdContext.prototype.AP = function () {
  return this.getToken(pekLangParser.AP, 0);
};

DecisioncmdContext.prototype.OPREL = function () {
  return this.getToken(pekLangParser.OPREL, 0);
};

DecisioncmdContext.prototype.FP = function () {
  return this.getToken(pekLangParser.FP, 0);
};

DecisioncmdContext.prototype.AC = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.AC);
  } else {
    return this.getToken(pekLangParser.AC, i);
  }
};

DecisioncmdContext.prototype.FC = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.FC);
  } else {
    return this.getToken(pekLangParser.FC, i);
  }
};

DecisioncmdContext.prototype.ID = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.ID);
  } else {
    return this.getToken(pekLangParser.ID, i);
  }
};

DecisioncmdContext.prototype.NUMBER = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.NUMBER);
  } else {
    return this.getToken(pekLangParser.NUMBER, i);
  }
};

DecisioncmdContext.prototype.STRING = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.STRING);
  } else {
    return this.getToken(pekLangParser.STRING, i);
  }
};

DecisioncmdContext.prototype.BOOLEAN = function () {
  return this.getToken(pekLangParser.BOOLEAN, 0);
};

DecisioncmdContext.prototype.cmd = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CmdContext);
  } else {
    return this.getTypedRuleContext(CmdContext, i);
  }
};

DecisioncmdContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterDecisioncmd(this);
  }
};

DecisioncmdContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitDecisioncmd(this);
  }
};

pekLangParser.DecisioncmdContext = DecisioncmdContext;

pekLangParser.prototype.decisioncmd = function () {
  var localctx = new DecisioncmdContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, pekLangParser.RULE_decisioncmd);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 82;
    this.match(pekLangParser.T__4);
    this.state = 83;
    this.match(pekLangParser.AP);
    this.state = 84;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << pekLangParser.ID) |
            (1 << pekLangParser.NUMBER) |
            (1 << pekLangParser.STRING))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    exprDecision = this._input.LT(-1).text;
    this.state = 86;
    localctx._OPREL = this.match(pekLangParser.OPREL);
    exprDecision += localctx._OPREL === null ? null : localctx._OPREL.text;
    this.state = 88;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << pekLangParser.ID) |
            (1 << pekLangParser.NUMBER) |
            (1 << pekLangParser.STRING) |
            (1 << pekLangParser.BOOLEAN))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }

    if (this._input.LT(-1).text == "Verdadeiro") {
      exprDecision += true;
    } else if (this._input.LT(-1).text == "Falso") {
      exprDecision += false;
    } else {
      exprDecision += this._input.LT(-1).text;
    }

    this.state = 90;
    this.match(pekLangParser.FP);
    this.state = 91;
    this.match(pekLangParser.AC);
    let currentThread = new Array();
    stack.push(currentThread);

    this.state = 94;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 93;
      this.cmd();
      this.state = 96;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__2) |
          (1 << pekLangParser.T__3) |
          (1 << pekLangParser.T__4) |
          (1 << pekLangParser.T__6) |
          (1 << pekLangParser.T__7) |
          (1 << pekLangParser.ID))) !==
        0
    );
    this.state = 98;
    this.match(pekLangParser.FC);

    let trueList = new Array();
    trueList = stack.pop();

    this.state = 111;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.T__5) {
      this.state = 100;
      this.match(pekLangParser.T__5);
      this.state = 101;
      this.match(pekLangParser.AC);
      let currentThread = new Array();
      stack.push(currentThread);

      this.state = 104;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 103;
        this.cmd();
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << pekLangParser.T__2) |
            (1 << pekLangParser.T__3) |
            (1 << pekLangParser.T__4) |
            (1 << pekLangParser.T__6) |
            (1 << pekLangParser.T__7) |
            (1 << pekLangParser.ID))) !==
          0
      );
      this.state = 108;
      this.match(pekLangParser.FC);

      let falseList = new Array();
      falseList = stack.pop();
      let cmd = new DecisionCommand(exprDecision, trueList, falseList);
      stack.peek().push(cmd);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FuncmdContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_funcmd;
  this._ID = null; // Token
  return this;
}

FuncmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncmdContext.prototype.constructor = FuncmdContext;

FuncmdContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
};

FuncmdContext.prototype.AP = function () {
  return this.getToken(pekLangParser.AP, 0);
};

FuncmdContext.prototype.FP = function () {
  return this.getToken(pekLangParser.FP, 0);
};

FuncmdContext.prototype.AC = function () {
  return this.getToken(pekLangParser.AC, 0);
};

FuncmdContext.prototype.FC = function () {
  return this.getToken(pekLangParser.FC, 0);
};

FuncmdContext.prototype.params = function () {
  return this.getTypedRuleContext(ParamsContext, 0);
};

FuncmdContext.prototype.cmd = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(CmdContext);
  } else {
    return this.getTypedRuleContext(CmdContext, i);
  }
};

FuncmdContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterFuncmd(this);
  }
};

FuncmdContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitFuncmd(this);
  }
};

pekLangParser.FuncmdContext = FuncmdContext;

pekLangParser.prototype.funcmd = function () {
  var localctx = new FuncmdContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, pekLangParser.RULE_funcmd);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 113;
    this.match(pekLangParser.T__6);
    this.state = 114;
    localctx._ID = this.match(pekLangParser.ID);

    let funName = localctx._ID === null ? null : localctx._ID.text;
    if (functionTable.exists(funName)) {
      throw new PekSemanticError(`A função ${funName} já existe.`);
    }

    this.state = 116;
    this.match(pekLangParser.AP);

    paramsList = new Array();

    this.state = 119;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.ID) {
      this.state = 118;
      this.params();
    }

    this.state = 121;
    this.match(pekLangParser.FP);
    this.state = 122;
    this.match(pekLangParser.AC);

    let currentThread = new Array();
    stack.push(currentThread);

    this.state = 127;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__2) |
          (1 << pekLangParser.T__3) |
          (1 << pekLangParser.T__4) |
          (1 << pekLangParser.T__6) |
          (1 << pekLangParser.T__7) |
          (1 << pekLangParser.ID))) !==
        0
    ) {
      this.state = 124;
      this.cmd();
      this.state = 129;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 130;
    this.match(pekLangParser.FC);

    let commandsList = new Array();
    commandsList = stack.pop();

    let cmd = new FunctionCommand(funName, paramsList, commandsList);
    stack.peek().push(cmd);

    let fun = new PekFun(funName, paramsList);
    functionTable.addFun(fun);

    for (param of paramsList) {
      paramTable.removeParam(param);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function FunexecContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_funexec;
  this._ID = null; // Token
  return this;
}

FunexecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunexecContext.prototype.constructor = FunexecContext;

FunexecContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
};

FunexecContext.prototype.AP = function () {
  return this.getToken(pekLangParser.AP, 0);
};

FunexecContext.prototype.FP = function () {
  return this.getToken(pekLangParser.FP, 0);
};

FunexecContext.prototype.paramsExec = function () {
  return this.getTypedRuleContext(ParamsExecContext, 0);
};

FunexecContext.prototype.SemiColon = function () {
  return this.getToken(pekLangParser.SemiColon, 0);
};

FunexecContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterFunexec(this);
  }
};

FunexecContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitFunexec(this);
  }
};

pekLangParser.FunexecContext = FunexecContext;

pekLangParser.prototype.funexec = function () {
  var localctx = new FunexecContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, pekLangParser.RULE_funexec);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 133;
    this.match(pekLangParser.T__7);
    this.state = 134;
    localctx._ID = this.match(pekLangParser.ID);

    let funName = localctx._ID === null ? null : localctx._ID.text;
    verificationFunction(funName);

    this.state = 136;
    this.match(pekLangParser.AP);

    let fun = functionTable.getFun(funName);
    let params = fun.getParams();
    paramsListExec = new Array();

    this.state = 139;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__8) |
          (1 << pekLangParser.ID) |
          (1 << pekLangParser.NUMBER) |
          (1 << pekLangParser.STRING) |
          (1 << pekLangParser.BOOLEAN))) !==
        0
    ) {
      this.state = 138;
      this.paramsExec();
    }

    this.state = 141;
    this.match(pekLangParser.FP);

    if (paramsListExec.length !== params.length) {
      throw new PekSemanticError(
        "Quantidade de parâmetros incongruentes a função."
      );
    }

    let cmd = new FunExecCommand(funName, paramsListExec);
    stack.peek().push(cmd);

    this.state = 144;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 143;
      this.match(pekLangParser.SemiColon);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ArrayContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_array;
  return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.expr = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ExprContext);
  } else {
    return this.getTypedRuleContext(ExprContext, i);
  }
};

ArrayContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.COMMA);
  } else {
    return this.getToken(pekLangParser.COMMA, i);
  }
};

ArrayContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterArray(this);
  }
};

ArrayContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitArray(this);
  }
};

pekLangParser.ArrayContext = ArrayContext;

pekLangParser.prototype.array = function () {
  var localctx = new ArrayContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, pekLangParser.RULE_array);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 146;
    this.match(pekLangParser.T__8);
    this.state = 155;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__8) |
          (1 << pekLangParser.ID) |
          (1 << pekLangParser.NUMBER) |
          (1 << pekLangParser.STRING) |
          (1 << pekLangParser.BOOLEAN))) !==
        0
    ) {
      this.state = 147;
      this.expr();
      this.state = 152;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === pekLangParser.COMMA) {
        this.state = 148;
        this.match(pekLangParser.COMMA);
        this.state = 149;
        this.expr();
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 157;
    this.match(pekLangParser.T__9);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ParamsExecContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_paramsExec;
  this._expr = null; // ExprContext
  return this;
}

ParamsExecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsExecContext.prototype.constructor = ParamsExecContext;

ParamsExecContext.prototype.expr = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ExprContext);
  } else {
    return this.getTypedRuleContext(ExprContext, i);
  }
};

ParamsExecContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.COMMA);
  } else {
    return this.getToken(pekLangParser.COMMA, i);
  }
};

ParamsExecContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterParamsExec(this);
  }
};

ParamsExecContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitParamsExec(this);
  }
};

pekLangParser.ParamsExecContext = ParamsExecContext;

pekLangParser.prototype.paramsExec = function () {
  var localctx = new ParamsExecContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, pekLangParser.RULE_paramsExec);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 159;
    localctx._expr = this.expr();
    paramsListExec.push(
      localctx._expr === null
        ? null
        : this._input.getText(
            new antlr4.Interval(localctx._expr.start, localctx._expr.stop)
          )
    );
    this.state = 167;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === pekLangParser.COMMA) {
      this.state = 161;
      this.match(pekLangParser.COMMA);
      this.state = 162;
      localctx._expr = this.expr();
      paramsListExec.push(
        localctx._expr === null
          ? null
          : this._input.getText(
              new antlr4.Interval(localctx._expr.start, localctx._expr.stop)
            )
      );
      this.state = 169;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ExprContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_expr;
  this._OP = null; // Token
  return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.term = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(TermContext);
  } else {
    return this.getTypedRuleContext(TermContext, i);
  }
};

ExprContext.prototype.OP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.OP);
  } else {
    return this.getToken(pekLangParser.OP, i);
  }
};

ExprContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterExpr(this);
  }
};

ExprContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitExpr(this);
  }
};

pekLangParser.ExprContext = ExprContext;

pekLangParser.prototype.expr = function () {
  var localctx = new ExprContext(this, this._ctx, this.state);
  this.enterRule(localctx, 22, pekLangParser.RULE_expr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 170;
    this.term();
    this.state = 176;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === pekLangParser.OP) {
      this.state = 171;
      localctx._OP = this.match(pekLangParser.OP);
      exprContent += localctx._OP === null ? null : localctx._OP.text;
      this.state = 173;
      this.term();
      this.state = 178;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function TermContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_term;
  this._ID = null; // Token
  this._NUMBER = null; // Token
  this._STRING = null; // Token
  this._BOOLEAN = null; // Token
  this._array = null; // ArrayContext
  return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
};

TermContext.prototype.NUMBER = function () {
  return this.getToken(pekLangParser.NUMBER, 0);
};

TermContext.prototype.STRING = function () {
  return this.getToken(pekLangParser.STRING, 0);
};

TermContext.prototype.BOOLEAN = function () {
  return this.getToken(pekLangParser.BOOLEAN, 0);
};

TermContext.prototype.array = function () {
  return this.getTypedRuleContext(ArrayContext, 0);
};

TermContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterTerm(this);
  }
};

TermContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitTerm(this);
  }
};

pekLangParser.TermContext = TermContext;

pekLangParser.prototype.term = function () {
  var localctx = new TermContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, pekLangParser.RULE_term);
  try {
    this.state = 190;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case pekLangParser.ID:
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        localctx._ID = this.match(pekLangParser.ID);

        if (
          !paramTable.exists(localctx._ID === null ? null : localctx._ID.text)
        ) {
          verificationID(localctx._ID === null ? null : localctx._ID.text);
        }
        exprContent += localctx._ID === null ? null : localctx._ID.text;
        break;
      case pekLangParser.NUMBER:
        this.enterOuterAlt(localctx, 2);
        this.state = 181;
        localctx._NUMBER = this.match(pekLangParser.NUMBER);
        exprContent += localctx._NUMBER === null ? null : localctx._NUMBER.text;
        break;
      case pekLangParser.STRING:
        this.enterOuterAlt(localctx, 3);
        this.state = 183;
        localctx._STRING = this.match(pekLangParser.STRING);
        exprContent += localctx._STRING === null ? null : localctx._STRING.text;
        break;
      case pekLangParser.BOOLEAN:
        this.enterOuterAlt(localctx, 4);
        this.state = 185;
        localctx._BOOLEAN = this.match(pekLangParser.BOOLEAN);
        exprContent +=
          localctx._BOOLEAN === null ? null : localctx._BOOLEAN.text;
        break;
      case pekLangParser.T__8:
        this.enterOuterAlt(localctx, 5);
        this.state = 187;
        localctx._array = this.array();
        exprContent =
          localctx._array === null
            ? null
            : this._input.getText(
                new antlr4.Interval(localctx._array.start, localctx._array.stop)
              );
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ParamsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_params;
  return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.param = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ParamContext);
  } else {
    return this.getTypedRuleContext(ParamContext, i);
  }
};

ParamsContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.COMMA);
  } else {
    return this.getToken(pekLangParser.COMMA, i);
  }
};

ParamsContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterParams(this);
  }
};

ParamsContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitParams(this);
  }
};

pekLangParser.ParamsContext = ParamsContext;

pekLangParser.prototype.params = function () {
  var localctx = new ParamsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 26, pekLangParser.RULE_params);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 192;
    this.param();
    this.state = 197;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === pekLangParser.COMMA) {
      this.state = 193;
      this.match(pekLangParser.COMMA);
      this.state = 194;
      this.param();
      this.state = 199;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ParamContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_param;
  this._ID = null; // Token
  return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
};

ParamContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterParam(this);
  }
};

ParamContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitParam(this);
  }
};

pekLangParser.ParamContext = ParamContext;

pekLangParser.prototype.param = function () {
  var localctx = new ParamContext(this, this._ctx, this.state);
  this.enterRule(localctx, 28, pekLangParser.RULE_param);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 200;
    localctx._ID = this.match(pekLangParser.ID);

    param = new PekParam(localctx._ID === null ? null : localctx._ID.text);

    if (paramTable.exists(localctx._ID === null ? null : localctx._ID.text)) {
      throw new PekSemanticError("Parâmetro já existente nessa função.");
    }
    paramTable.addParam(param);
    paramsList.push(localctx._ID === null ? null : localctx._ID.text);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

exports.pekLangParser = pekLangParser;
