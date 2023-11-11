const antlr4 = require("antlr4");
const fs = require("fs");

const { pekLangLexer } = require("../parser/pekLangLexer.js");
const { pekLangParser } = require("../parser/pekLangParser.js");

class MyErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    if (msg.startsWith("token recognition")) {
      throw new Error(`Erro léxico na linha ${line}:${column} - ${msg}`);
    } else {
      throw new Error(`Erro sintático na linha ${line}:${column} - ${msg}`);
    }
  }
}

function main() {
  try {
    const input = antlr4.FileStream("../../source.pek");

    const chars = new antlr4.InputStream(input.strdata);
    const lexer = new pekLangLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new pekLangParser(tokens);

    lexer.removeErrorListeners();
    lexer.addErrorListener(new MyErrorListener());
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());

    parser.prog();
  } catch (err) {
    console.log(err.message);
    fs.unlink("./CodeGenerated.js", (err) => {
      if (err) {
        console.log(" ");
      }
    });
  }
}

main();
