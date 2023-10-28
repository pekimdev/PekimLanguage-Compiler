// classe para criação de variável na gramática
const { PekSymbol } = require("./PekSymbol.js");

const NUMBER = 0;
const STRING = 1;

class PekVariable extends PekSymbol {
  constructor(name, type, value) {
    super(name);
    this.type = type;
    this.value = value;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  toString() {
    return `PekVariable [name = ${this.name}, type = ${this.type}, value = ${this.value}]`;
  }
}

exports.NUMBER = NUMBER;
exports.STRING = STRING;
exports.PekVariable = PekVariable;
