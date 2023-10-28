const antlr4 = require("antlr4");

const { pekLangLexer } = require("../parser/pekLangLexer");
const { pekLangParser } = require("../parser/pekLangParser");

function main() {
  try {
    const input = antlr4.FileStream("../../input.pek");

    const chars = new antlr4.InputStream(input.strdata);
    const lexer = new pekLangLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new pekLangParser(tokens);

    parser.prog();

    console.log("Compilation Successful");
  } catch (err) {
    console.log(err.message);
  }
}

main();
