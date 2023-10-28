const { pekScanner } = require("../lexer/pekScanner");
const { pekParser } = require("../parser/pekParser");
const { SyntaxError } = require("../errors/syntaxError");
const { LexicalError } = require("../errors/lexicalError");

function Main() {
  try {
    const scanner = new pekScanner("../../input.pek");
    const parser = new pekParser(scanner);

    parser.E();

    console.log("Compilation successfully");
  } catch (exception) {
    if (exception instanceof SyntaxError) {
      console.log("Syntax Error: " + exception.message);
    } else {
      console.log("Lexical Error: " + exception.message);
    }
  }
}
Main();
