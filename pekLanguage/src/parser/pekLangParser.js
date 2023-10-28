// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index");
var pekLangListener = require("./pekLangListener").pekLangListener;

const { PekSymbol } = require("../dataStructures/PekSymbol.js");
const { PekVariable } = require("../dataStructures/PekVariable.js");
const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js");
const { PekSemanticError } = require("../errors/PekSemanticError.js");
const { NUMBER, STRING } = require("../dataStructures/PekVariable.js");

var grammarFileName = "pekLang.g4";

var serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0003\u000f]\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
  "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
  "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
  "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003\u001d\n\u0003",
  "\r\u0003\u000e\u0003\u001e\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
  "\u0004\u0003\u0004\u0003\u0004\u0007\u0004'\n\u0004\f\u0004\u000e\u0004",
  "*\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
  "\u0005\u0003\u0005\u0005\u00052\n\u0005\u0003\u0006\u0006\u00065\n\u0006",
  "\r\u0006\u000e\u00066\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
  "B\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
  "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
  "\u0003\u000b\u0003\u000b\u0007\u000bV\n\u000b\f\u000b\u000e\u000bY\u000b",
  "\u000b\u0003\f\u0003\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006\b\n\f",
  "\u000e\u0010\u0012\u0014\u0016\u0002\u0003\u0003\u0002\u000b\f\u0002",
  "X\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001c\u0003\u0002\u0002",
  "\u0002\u0006 \u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n4",
  "\u0003\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002\u000eC\u0003\u0002",
  "\u0002\u0002\u0010I\u0003\u0002\u0002\u0002\u0012N\u0003\u0002\u0002",
  "\u0002\u0014R\u0003\u0002\u0002\u0002\u0016Z\u0003\u0002\u0002\u0002",
  "\u0018\u0019\u0005\u0004\u0003\u0002\u0019\u001a\u0005\n\u0006\u0002",
  "\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u001d\u0005\u0006\u0004\u0002",
  "\u001c\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002",
  "\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002",
  '\u001f\u0005\u0003\u0002\u0002\u0002 !\u0005\b\u0005\u0002!"\u0007',
  '\u000b\u0002\u0002"(\b\u0004\u0001\u0002#$\u0007\u000e\u0002\u0002',
  "$%\u0007\u000b\u0002\u0002%'\b\u0004\u0001\u0002&#\u0003\u0002\u0002",
  "\u0002'*\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003",
  "\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002",
  "+,\u0007\r\u0002\u0002,\u0007\u0003\u0002\u0002\u0002-.\u0007\u0003",
  "\u0002\u0002.2\b\u0005\u0001\u0002/0\u0007\u0004\u0002\u000202\b\u0005",
  "\u0001\u00021-\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u00022\t",
  "\u0003\u0002\u0002\u000235\u0005\f\u0007\u000243\u0003\u0002\u0002\u0002",
  "56\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002",
  "\u00027\u000b\u0003\u0002\u0002\u000289\u0005\u000e\b\u00029:\b\u0007",
  "\u0001\u0002:B\u0003\u0002\u0002\u0002;<\u0005\u0010\t\u0002<=\b\u0007",
  "\u0001\u0002=B\u0003\u0002\u0002\u0002>?\u0005\u0012\n\u0002?@\b\u0007",
  "\u0001\u0002@B\u0003\u0002\u0002\u0002A8\u0003\u0002\u0002\u0002A;\u0003",
  "\u0002\u0002\u0002A>\u0003\u0002\u0002\u0002B\r\u0003\u0002\u0002\u0002",
  "CD\u0007\u0005\u0002\u0002DE\u0007\u0007\u0002\u0002EF\u0007\u000b\u0002",
  "\u0002FG\b\b\u0001\u0002GH\u0007\b\u0002\u0002H\u000f\u0003\u0002\u0002",
  "\u0002IJ\u0007\u0006\u0002\u0002JK\u0007\u0007\u0002\u0002KL\u0007\u000b",
  "\u0002\u0002LM\u0007\b\u0002\u0002M\u0011\u0003\u0002\u0002\u0002NO",
  "\u0007\u000b\u0002\u0002OP\u0007\n\u0002\u0002PQ\u0005\u0014\u000b\u0002",
  "Q\u0013\u0003\u0002\u0002\u0002RW\u0005\u0016\f\u0002ST\u0007\t\u0002",
  "\u0002TV\u0005\u0016\f\u0002US\u0003\u0002\u0002\u0002VY\u0003\u0002",
  "\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\u0015",
  "\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\t\u0002\u0002\u0002",
  "[\u0017\u0003\u0002\u0002\u0002\b\u001e(16AW",
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
  null,
  "'number'",
  "'string'",
  "'print'",
  "'write'",
  "'('",
  "')'",
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
  "OP",
  "ATTR",
  "ID",
  "NUMBER",
  "SemiColon",
  "COMMA",
  "WS",
];

var ruleNames = [
  "prog",
  "declaration",
  "declarevar",
  "type",
  "bloco",
  "cmd",
  "readcmd",
  "writecmd",
  "attrcmd",
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

let _type;
let _varName;
let _varValue;
let symbol;
let symbolTable = new PekSymbolTable();

function verificationID(id) {
  if (!symbolTable.exists(id)) {
    throw new PekSemanticError(`Symbol '${id}' not declared.`);
  }
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
pekLangParser.OP = 7;
pekLangParser.ATTR = 8;
pekLangParser.ID = 9;
pekLangParser.NUMBER = 10;
pekLangParser.SemiColon = 11;
pekLangParser.COMMA = 12;
pekLangParser.WS = 13;

pekLangParser.RULE_prog = 0;
pekLangParser.RULE_declaration = 1;
pekLangParser.RULE_declarevar = 2;
pekLangParser.RULE_type = 3;
pekLangParser.RULE_bloco = 4;
pekLangParser.RULE_cmd = 5;
pekLangParser.RULE_readcmd = 6;
pekLangParser.RULE_writecmd = 7;
pekLangParser.RULE_attrcmd = 8;
pekLangParser.RULE_expr = 9;
pekLangParser.RULE_term = 10;

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

ProgContext.prototype.declaration = function () {
  return this.getTypedRuleContext(DeclarationContext, 0);
};

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
    this.state = 22;
    this.declaration();
    this.state = 23;
    this.bloco();
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

function DeclarationContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_declaration;
  return this;
}

DeclarationContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.declarevar = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(DeclarevarContext);
  } else {
    return this.getTypedRuleContext(DeclarevarContext, i);
  }
};

DeclarationContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterDeclaration(this);
  }
};

DeclarationContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitDeclaration(this);
  }
};

pekLangParser.DeclarationContext = DeclarationContext;

pekLangParser.prototype.declaration = function () {
  var localctx = new DeclarationContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, pekLangParser.RULE_declaration);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 26;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 25;
      this.declarevar();
      this.state = 28;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (_la === pekLangParser.T__0 || _la === pekLangParser.T__1);
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

function DeclarevarContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_declarevar;
  this._ID = null; // Token
  return this;
}

DeclarevarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarevarContext.prototype.constructor = DeclarevarContext;

DeclarevarContext.prototype.type = function () {
  return this.getTypedRuleContext(TypeContext, 0);
};

DeclarevarContext.prototype.ID = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.ID);
  } else {
    return this.getToken(pekLangParser.ID, i);
  }
};

DeclarevarContext.prototype.SemiColon = function () {
  return this.getToken(pekLangParser.SemiColon, 0);
};

DeclarevarContext.prototype.COMMA = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(pekLangParser.COMMA);
  } else {
    return this.getToken(pekLangParser.COMMA, i);
  }
};

DeclarevarContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterDeclarevar(this);
  }
};

DeclarevarContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitDeclarevar(this);
  }
};

pekLangParser.DeclarevarContext = DeclarevarContext;

pekLangParser.prototype.declarevar = function () {
  var localctx = new DeclarevarContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, pekLangParser.RULE_declarevar);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 30;
    this.type();
    this.state = 31;
    localctx._ID = this.match(pekLangParser.ID);

    _varName = localctx._ID === null ? null : localctx._ID.text;
    _varValue = null;
    symbol = new PekVariable(_varName, _type, _varValue);
    if (!symbolTable.exists(_varName)) {
      symbolTable.addSymbol(symbol);
      console.log("Símbolo adicionado " + symbol);
    } else {
      throw new PekSemanticError(`Symbol '${_varName}' already exists.`);
    }

    this.state = 38;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === pekLangParser.COMMA) {
      this.state = 33;
      this.match(pekLangParser.COMMA);
      this.state = 34;
      localctx._ID = this.match(pekLangParser.ID);
      _varName = localctx._ID === null ? null : localctx._ID.text;
      _varValue = null;
      symbol = new PekVariable(_varName, _type, _varValue);
      if (!symbolTable.exists(_varName)) {
        symbolTable.addSymbol(symbol);
        console.log("Símbolo adicionado " + symbol);
      } else {
        throw new PekSemanticError(`Symbol ${_varName} already exists.`);
      }

      this.state = 40;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 41;
    this.match(pekLangParser.SemiColon);
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

function TypeContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = pekLangParser.RULE_type;
  return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.enterRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.enterType(this);
  }
};

TypeContext.prototype.exitRule = function (listener) {
  if (listener instanceof pekLangListener) {
    listener.exitType(this);
  }
};

pekLangParser.TypeContext = TypeContext;

pekLangParser.prototype.type = function () {
  var localctx = new TypeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, pekLangParser.RULE_type);
  try {
    this.state = 47;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case pekLangParser.T__0:
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(pekLangParser.T__0);
        _type = NUMBER;
        break;
      case pekLangParser.T__1:
        this.enterOuterAlt(localctx, 2);
        this.state = 45;
        this.match(pekLangParser.T__1);
        _type = STRING;
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
  this.enterRule(localctx, 8, pekLangParser.RULE_bloco);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 50;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 49;
      this.cmd();
      this.state = 52;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
      (_la & ~0x1f) == 0 &&
      ((1 << _la) &
        ((1 << pekLangParser.T__2) |
          (1 << pekLangParser.T__3) |
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
  this.enterRule(localctx, 10, pekLangParser.RULE_cmd);
  try {
    this.state = 63;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case pekLangParser.T__2:
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.readcmd();
        console.log("Programa de leitura reconhecido");
        break;
      case pekLangParser.T__3:
        this.enterOuterAlt(localctx, 2);
        this.state = 57;
        this.writecmd();
        console.log("Programa de escrita reconhecido");
        break;
      case pekLangParser.ID:
        this.enterOuterAlt(localctx, 3);
        this.state = 60;
        this.attrcmd();
        console.log("Programa de atribuição reconhecido");
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
  this.enterRule(localctx, 12, pekLangParser.RULE_readcmd);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 65;
    this.match(pekLangParser.T__2);
    this.state = 66;
    this.match(pekLangParser.AP);
    this.state = 67;
    localctx._ID = this.match(pekLangParser.ID);
    verificationID(localctx._ID === null ? null : localctx._ID.text);
    this.state = 69;
    this.match(pekLangParser.FP);
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
  this.enterRule(localctx, 14, pekLangParser.RULE_writecmd);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 71;
    this.match(pekLangParser.T__3);
    this.state = 72;
    this.match(pekLangParser.AP);
    this.state = 73;
    this.match(pekLangParser.ID);
    this.state = 74;
    this.match(pekLangParser.FP);
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
  this.enterRule(localctx, 16, pekLangParser.RULE_attrcmd);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 76;
    this.match(pekLangParser.ID);
    this.state = 77;
    this.match(pekLangParser.ATTR);
    this.state = 78;
    this.expr();
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
  this.enterRule(localctx, 18, pekLangParser.RULE_expr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 80;
    this.term();
    this.state = 85;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === pekLangParser.OP) {
      this.state = 81;
      this.match(pekLangParser.OP);
      this.state = 82;
      this.term();
      this.state = 87;
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
  this.enterRule(localctx, 20, pekLangParser.RULE_term);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 88;
    _la = this._input.LA(1);
    if (!(_la === pekLangParser.ID || _la === pekLangParser.NUMBER)) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
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
