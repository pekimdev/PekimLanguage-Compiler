const TK_IDENTIFIER = 0;
const TK_NUMBER = 1;
const TK_OPERATOR = 2;
const TK_PUNCTUATION = 3;
const TK_ASSIGN = 4;

const TK_TYPE = [
  "Identifier",
  "Number",
  "Operator",
  "Punctuation",
  "Assignment",
];

class Token {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }
  getText() {
    return this.text;
  }
  setText(text) {
    this.text = text;
  }

  setColumn(col) {
    this.col = col;
  }

  getColumn() {
    return this.col;
  }

  setLine(line) {
    this.line = line;
  }

  getLine() {
    return this.line;
  }

  toString() {
    return `Token [type = ${type}, text = ${text}]`;
  }
}

exports.Token = Token;
exports.TK_IDENTIFIER = TK_IDENTIFIER;
exports.TK_NUMBER = TK_NUMBER;
exports.TK_OPERATOR = TK_OPERATOR;
exports.TK_PUNCTUATION = TK_PUNCTUATION;
exports.TK_ASSIGN = TK_ASSIGN;
exports.TK_TYPE = TK_TYPE;
