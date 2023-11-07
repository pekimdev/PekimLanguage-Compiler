// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index");
var pekLangListener = require("./pekLangListener").pekLangListener;

const { NUMBER, STRING } = require("../dataStructures/PekVariable.js");
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

var grammarFileName = "pekLang.g4";

var serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0003\u0012t\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
  "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
  "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
  "\u0003\u0003\u0003\u0006\u0003\u001a\n\u0003\r\u0003\u000e\u0003\u001b",
  "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
  "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004(\n\u0004",
  "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
  "\u0003\u0005\u0005\u00051\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006:\n\u0006",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0005\u0007D\n\u0007\u0003\b\u0003\b\u0003",
  "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
  "\b\u0006\bR\n\b\r\b\u000e\bS\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
  "\u0003\b\u0006\b\\\n\b\r\b\u000e\b]\u0003\b\u0003\b\u0003\b\u0005\b",
  "c\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\ti\n\t\f\t\u000e\tl\u000b",
  "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nr\n\n\u0003\n\u0002\u0002",
  "\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002",
  "\u000e\u000f\u0002v\u0002\u0014\u0003\u0002\u0002\u0002\u0004\u0017",
  "\u0003\u0002\u0002\u0002\u0006'\u0003\u0002\u0002\u0002\b)\u0003\u0002",
  "\u0002\u0002\n2\u0003\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000e",
  "E\u0003\u0002\u0002\u0002\u0010d\u0003\u0002\u0002\u0002\u0012q\u0003",
  "\u0002\u0002\u0002\u0014\u0015\u0005\u0004\u0003\u0002\u0015\u0016\b",
  "\u0002\u0001\u0002\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u0019\b",
  "\u0003\u0001\u0002\u0018\u001a\u0005\u0006\u0004\u0002\u0019\u0018\u0003",
  "\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
  "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u0005\u0003",
  "\u0002\u0002\u0002\u001d\u001e\u0005\b\u0005\u0002\u001e\u001f\b\u0004",
  '\u0001\u0002\u001f(\u0003\u0002\u0002\u0002 !\u0005\n\u0006\u0002!"',
  '\b\u0004\u0001\u0002"(\u0003\u0002\u0002\u0002#$\u0005\f\u0007\u0002',
  "$%\b\u0004\u0001\u0002%(\u0003\u0002\u0002\u0002&(\u0005\u000e\b\u0002",
  "'\u001d\u0003\u0002\u0002\u0002' \u0003\u0002\u0002\u0002'#\u0003",
  "\u0002\u0002\u0002'&\u0003\u0002\u0002\u0002(\u0007\u0003\u0002\u0002",
  "\u0002)*\u0007\u0003\u0002\u0002*+\u0007\u0007\u0002\u0002+,\u0007\u000e",
  "\u0002\u0002,-\b\u0005\u0001\u0002-.\u0007\b\u0002\u0002.0\b\u0005\u0001",
  "\u0002/1\u0007\u0010\u0002\u00020/\u0003\u0002\u0002\u000201\u0003\u0002",
  "\u0002\u00021\t\u0003\u0002\u0002\u000223\u0007\u0004\u0002\u000234",
  "\u0007\u0007\u0002\u000245\u0007\u000e\u0002\u000256\b\u0006\u0001\u0002",
  "67\u0007\b\u0002\u000279\b\u0006\u0001\u00028:\u0007\u0010\u0002\u0002",
  "98\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:\u000b\u0003\u0002",
  "\u0002\u0002;<\u0007\u000e\u0002\u0002<=\b\u0007\u0001\u0002=>\b\u0007",
  "\u0001\u0002>?\u0007\r\u0002\u0002?@\b\u0007\u0001\u0002@A\u0005\u0010",
  "\t\u0002AC\b\u0007\u0001\u0002BD\u0007\u0010\u0002\u0002CB\u0003\u0002",
  "\u0002\u0002CD\u0003\u0002\u0002\u0002D\r\u0003\u0002\u0002\u0002EF",
  "\u0007\u0005\u0002\u0002FG\u0007\u0007\u0002\u0002GH\u0007\u000e\u0002",
  "\u0002HI\b\b\u0001\u0002IJ\u0007\f\u0002\u0002JK\b\b\u0001\u0002KL\t",
  "\u0002\u0002\u0002LM\b\b\u0001\u0002MN\u0007\b\u0002\u0002NO\u0007\t",
  "\u0002\u0002OQ\b\b\u0001\u0002PR\u0005\u0006\u0004\u0002QP\u0003\u0002",
  "\u0002\u0002RS\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003",
  "\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UV\u0007\n\u0002\u0002V",
  "b\b\b\u0001\u0002WX\u0007\u0006\u0002\u0002XY\u0007\t\u0002\u0002Y[",
  "\b\b\u0001\u0002Z\\\u0005\u0006\u0004\u0002[Z\u0003\u0002\u0002\u0002",
  "\\]\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002",
  "\u0002\u0002^_\u0003\u0002\u0002\u0002_`\u0007\n\u0002\u0002`a\b\b\u0001",
  "\u0002ac\u0003\u0002\u0002\u0002bW\u0003\u0002\u0002\u0002bc\u0003\u0002",
  "\u0002\u0002c\u000f\u0003\u0002\u0002\u0002dj\u0005\u0012\n\u0002ef",
  "\u0007\u000b\u0002\u0002fg\b\t\u0001\u0002gi\u0005\u0012\n\u0002he\u0003",
  "\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002",
  "jk\u0003\u0002\u0002\u0002k\u0011\u0003\u0002\u0002\u0002lj\u0003\u0002",
  "\u0002\u0002mn\u0007\u000e\u0002\u0002nr\b\n\u0001\u0002op\u0007\u000f",
  "\u0002\u0002pr\b\n\u0001\u0002qm\u0003\u0002\u0002\u0002qo\u0003\u0002",
  "\u0002\u0002r\u0013\u0003\u0002\u0002\u0002\f\u001b'09CS]bjq",
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
  null,
  "'ler'",
  "'escrever'",
  "'if'",
  "'else'",
  "'('",
  "')'",
  "'{'",
  "'}'",
  null,
  null,
  "'='",
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
  "AP",
  "FP",
  "AC",
  "FC",
  "OP",
  "OPREL",
  "ATTR",
  "ID",
  "NUMBER",
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
  "expr",
  "term",
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
let program = new PekProgram();
let trueList = new Array();
let falseList = new Array();
let stack = new Stack();

function verificationID(id) {
  if (!symbolTable.exists(id)) {
    throw new PekSemanticError(`Symbol '${id}' not declared.`);
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
pekLangParser.AP = 5;
pekLangParser.FP = 6;
pekLangParser.AC = 7;
pekLangParser.FC = 8;
pekLangParser.OP = 9;
pekLangParser.OPREL = 10;
pekLangParser.ATTR = 11;
pekLangParser.ID = 12;
pekLangParser.NUMBER = 13;
pekLangParser.SemiColon = 14;
pekLangParser.COMMA = 15;
pekLangParser.WS = 16;

pekLangParser.RULE_prog = 0;
pekLangParser.RULE_bloco = 1;
pekLangParser.RULE_cmd = 2;
pekLangParser.RULE_readcmd = 3;
pekLangParser.RULE_writecmd = 4;
pekLangParser.RULE_attrcmd = 5;
pekLangParser.RULE_decisioncmd = 6;
pekLangParser.RULE_expr = 7;
pekLangParser.RULE_term = 8;

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
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 18;
    this.bloco();

    program.setVarTable(symbolTable);
    program.setCommands(stack.pop());
    showCommands();
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

    this.state = 23;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 22;
      this.cmd();
      this.state = 25;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__0) |
          (1 << pekLangParser.T__1) |
          (1 << pekLangParser.T__2) |
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
    this.state = 37;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case pekLangParser.T__0:
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.readcmd();
        console.log("Programa de leitura reconhecido");
        break;
      case pekLangParser.T__1:
        this.enterOuterAlt(localctx, 2);
        this.state = 30;
        this.writecmd();
        console.log("Programa de escrita reconhecido");
        break;
      case pekLangParser.ID:
        this.enterOuterAlt(localctx, 3);
        this.state = 33;
        this.attrcmd();
        console.log("Programa de atribuição reconhecido");
        break;
      case pekLangParser.T__2:
        this.enterOuterAlt(localctx, 4);
        this.state = 36;
        this.decisioncmd();
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
    this.state = 39;
    this.match(pekLangParser.T__0);
    this.state = 40;
    this.match(pekLangParser.AP);
    this.state = 41;
    localctx._ID = this.match(pekLangParser.ID);
    verificationID(localctx._ID === null ? null : localctx._ID.text);
    let readID = localctx._ID === null ? null : localctx._ID.text;
    this.state = 43;
    this.match(pekLangParser.FP);

    let variable = symbolTable.getSymbol(readID);
    let cmd = new ReadCommand(readID, variable);
    stack.peek().push(cmd);

    this.state = 46;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 45;
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
  this._ID = null; // Token
  return this;
}

WritecmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WritecmdContext.prototype.constructor = WritecmdContext;

WritecmdContext.prototype.AP = function () {
  return this.getToken(pekLangParser.AP, 0);
};

WritecmdContext.prototype.ID = function () {
  return this.getToken(pekLangParser.ID, 0);
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
    this.state = 48;
    this.match(pekLangParser.T__1);
    this.state = 49;
    this.match(pekLangParser.AP);
    this.state = 50;
    localctx._ID = this.match(pekLangParser.ID);
    verificationID(localctx._ID === null ? null : localctx._ID.text);
    let writeID = localctx._ID === null ? null : localctx._ID.text;

    this.state = 52;
    this.match(pekLangParser.FP);

    let cmd = new WriteCommand(writeID);
    stack.peek().push(cmd);

    this.state = 55;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 54;
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
    this.state = 57;
    localctx._ID = this.match(pekLangParser.ID);

    let _varName = localctx._ID === null ? null : localctx._ID.text;
    let _varValue = null;

    let exprID = localctx._ID === null ? null : localctx._ID.text;
    this.state = 60;
    this.match(pekLangParser.ATTR);
    exprContent = "";
    let _type;
    if (exprContent.match(NUMBER)) {
      _type = NUMBER;
    } else {
      _type = STRING;
    }
    let symbol = new PekVariable(_varName, _type, _varValue);

    if (!symbolTable.exists(_varName)) {
      symbolTable.addSymbol(symbol);
    } else {
      throw new PekSemanticError(`Symbol '${_varName}' already exists.`);
    }
    this.state = 62;
    this.expr();
    let cmd = new AssignmentCommand(exprID, exprContent);
    stack.peek().push(cmd);

    this.state = 65;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.SemiColon) {
      this.state = 64;
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
  this._ID = null; // Token
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

DecisioncmdContext.prototype.NUMBER = function () {
  return this.getToken(pekLangParser.NUMBER, 0);
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
    this.state = 67;
    this.match(pekLangParser.T__2);
    this.state = 68;
    this.match(pekLangParser.AP);
    this.state = 69;
    localctx._ID = this.match(pekLangParser.ID);
    let exprDecision = localctx._ID === null ? null : localctx._ID.text;
    this.state = 71;
    localctx._OPREL = this.match(pekLangParser.OPREL);
    exprDecision += localctx._OPREL === null ? null : localctx._OPREL.text;
    this.state = 73;
    _la = this._input.LA(1);
    if (!(_la === pekLangParser.ID || _la === pekLangParser.NUMBER)) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    exprDecision += this._input.LT(-1).text;
    this.state = 75;
    this.match(pekLangParser.FP);
    this.state = 76;
    this.match(pekLangParser.AC);
    let currentThread = new Array();
    stack.push(currentThread);

    this.state = 79;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 78;
      this.cmd();
      this.state = 81;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__0) |
          (1 << pekLangParser.T__1) |
          (1 << pekLangParser.T__2) |
          (1 << pekLangParser.ID))) !==
        0
    );
    this.state = 83;
    this.match(pekLangParser.FC);
    trueList = stack.pop();

    this.state = 96;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === pekLangParser.T__3) {
      this.state = 85;
      this.match(pekLangParser.T__3);
      this.state = 86;
      this.match(pekLangParser.AC);
      let currentThread = new Array();
      stack.push(currentThread);

      this.state = 89;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 88;
        this.cmd();
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << pekLangParser.T__0) |
            (1 << pekLangParser.T__1) |
            (1 << pekLangParser.T__2) |
            (1 << pekLangParser.ID))) !==
          0
      );
      this.state = 93;
      this.match(pekLangParser.FC);

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
  this.enterRule(localctx, 14, pekLangParser.RULE_expr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 98;
    this.term();
    this.state = 104;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === pekLangParser.OP) {
      this.state = 99;
      localctx._OP = this.match(pekLangParser.OP);
      exprContent += localctx._OP === null ? null : localctx._OP.text;
      this.state = 101;
      this.term();
      this.state = 106;
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
  this.enterRule(localctx, 16, pekLangParser.RULE_term);
  try {
    this.state = 111;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case pekLangParser.ID:
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        localctx._ID = this.match(pekLangParser.ID);
        verificationID(localctx._ID === null ? null : localctx._ID.text);
        exprContent += localctx._ID === null ? null : localctx._ID.text;
        break;
      case pekLangParser.NUMBER:
        this.enterOuterAlt(localctx, 2);
        this.state = 109;
        localctx._NUMBER = this.match(pekLangParser.NUMBER);
        exprContent += localctx._NUMBER === null ? null : localctx._NUMBER.text;
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

exports.pekLangParser = pekLangParser;
