const fs = require("fs");
const { LexicalError } = require("../errors/lexicalError");
const path = require("path");
const {
  Token,
  TK_IDENTIFIER,
  TK_NUMBER,
  TK_ASSIGN,
  TK_OPERATOR,
  TK_PUNCTUATION,
} = require("./token");

let line = 1;
let column = 0;

class pekScanner {
  constructor(filename) {
    this.content = this.readFile(filename);
    this.pos = 0;
  }

  readFile(filename) {
    try {
      const txtContent = fs.readFileSync(path.join(__dirname, filename));
      return txtContent.toString("utf-8");
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  nextToken() {
    let currentChar;
    let term = "";
    if (this.isEOF()) {
      return null;
    }
    let state = 0;
    while (true) {
      currentChar = this.nextChar();
      switch (state) {
        case 0:
          if (this.isChar(currentChar)) {
            state = 1;
            term += currentChar;
          } else if (this.isDigit(currentChar)) {
            state = 3;
            term += currentChar;
          } else if (this.isSpace(currentChar)) {
            state = 0;
          } else if (this.isOperator(currentChar)) {
            state = 5;
            term += currentChar;
          } else {
            throw new LexicalError(
              `Unrecognized SYMBOL '${currentChar}' in ---> ${line}:${column}`
            );
          }
          break;
        case 1:
          if (this.isChar(currentChar) || this.isDigit(currentChar)) {
            state = 1;
            term += currentChar;
            break;
          } else {
            state = 2;
          }
        case 2:
          this.back();
          let tokenId = new Token();
          tokenId.setType(TK_IDENTIFIER);
          tokenId.setText(term);
          tokenId.setColumn(column);
          tokenId.setLine(line);
          return tokenId;
        case 3:
          if (this.isDigit(currentChar)) {
            state = 3;
            term += currentChar;
            break;
          } else if (this.isPoint(currentChar)) {
            state = 6;
            term += currentChar;
            break;
          } else if (!this.isChar(currentChar)) {
            state = 4;
          } else {
            throw new LexicalError(
              `Unrecognized Number '${
                term + currentChar
              }' in ---> ${line}:${column}`
            );
          }
        case 4:
          this.back();
          let tokenNumber = new Token();
          tokenNumber.setType(TK_NUMBER);
          tokenNumber.setText(term);
          tokenNumber.setColumn(column);
          tokenNumber.setLine(line);
          return tokenNumber;
        case 5:
          this.back();
          let tokenOp = new Token();
          tokenOp.setType(TK_OPERATOR);
          tokenOp.setText(term);
          tokenOp.setColumn(column);
          tokenOp.setLine(line);
          return tokenOp;
        case 6:
          if (this.isDigit(currentChar)) {
            state = 3;
            term += currentChar;
            break;
          } else {
            throw new LexicalError(
              `Unrecognized Number '${
                term + currentChar
              }' in ---> ${line}:${column}`
            );
          }
      }
    }
  }

  isDigit(c) {
    return c >= "0" && c <= "9";
  }

  isPoint(c) {
    return c == ".";
  }

  isChar(c) {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
  }

  isOperator(c) {
    return (
      c == ">" ||
      c == "<" ||
      c == "=" ||
      c == "!" ||
      c == "+" ||
      c == "-" ||
      c == "*" ||
      c == "/"
    );
  }

  isSpace(c) {
    if (c == "\n" || c == "\r") {
      line++;
      column = 0;
    }

    return c == " " || c == "\t" || c == "\n" || c == "\r";
  }

  nextChar() {
    column++;
    return this.content[this.pos++];
  }

  back() {
    column--;
    return this.content[this.pos--];
  }

  isEOF() {
    return this.pos >= this.content.length;
  }
}

exports.pekScanner = pekScanner;
