// Generated from pekLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by pekLangParser.
function pekLangListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pekLangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pekLangListener.prototype.constructor = pekLangListener;

// Enter a parse tree produced by pekLangParser#prog.
pekLangListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#prog.
pekLangListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#bloco.
pekLangListener.prototype.enterBloco = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#bloco.
pekLangListener.prototype.exitBloco = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#cmd.
pekLangListener.prototype.enterCmd = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#cmd.
pekLangListener.prototype.exitCmd = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#readcmd.
pekLangListener.prototype.enterReadcmd = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#readcmd.
pekLangListener.prototype.exitReadcmd = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#writecmd.
pekLangListener.prototype.enterWritecmd = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#writecmd.
pekLangListener.prototype.exitWritecmd = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#attrcmd.
pekLangListener.prototype.enterAttrcmd = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#attrcmd.
pekLangListener.prototype.exitAttrcmd = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#decisioncmd.
pekLangListener.prototype.enterDecisioncmd = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#decisioncmd.
pekLangListener.prototype.exitDecisioncmd = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#expr.
pekLangListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#expr.
pekLangListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by pekLangParser#term.
pekLangListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by pekLangParser#term.
pekLangListener.prototype.exitTerm = function(ctx) {
};



exports.pekLangListener = pekLangListener;