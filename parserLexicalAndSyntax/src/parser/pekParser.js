const { SyntaxError } = require("../errors/syntaxError");
const {
  TK_IDENTIFIER,
  TK_NUMBER,
  TK_ASSIGN,
  TK_OPERATOR,
  TK_PUNCTUATION,
  TK_TYPE,
} = require("../lexer/token");

let token;

class pekParser {
  constructor(scanner) {
    this.scanner = scanner;
    token = null;
  }

  E() {
    this.T();
    this.El();
  }

  El() {
    token = this.scanner.nextToken();
    if (token != null) {
      this.OP();
      this.T();
      this.El();
    }
  }

  T() {
    token = this.scanner.nextToken();
    if (token != null) {
      if (token.getType() != TK_IDENTIFIER && token.getType() != TK_NUMBER) {
        throw new SyntaxError(
          `ID or Number expected! found ${
            TK_TYPE[token.getType()]
          } '${token.getText()}' in ---> ${token.getLine()}:${token.getColumn()}`
        );
      }
    } else {
      throw new SyntaxError("ID or Number expected!");
    }
  }

  OP() {
    if (token.getType() != TK_OPERATOR) {
      throw new SyntaxError(
        `Operator Expected! found ${
          TK_TYPE[token.getType()]
        } '${token.getText()}' in ---> ${token.getLine()}:${token.getColumn()}`
      );
    }
  }
}

exports.pekParser = pekParser;
