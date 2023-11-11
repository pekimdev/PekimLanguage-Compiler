// classe para criação de função na gramática
const { PekFunction } = require("./PekFunction.js");

class PekFun extends PekFunction {
  constructor(name, params) {
    super(name);
    this.params = params;
  }

  getParams() {
    return this.params;
  }

  setParams(params) {
    this.params = params;
  }

  print() {
    console.log(`PekFun [name = ${this.name}, params = ${this.params}]`);
  }
}

exports.PekFun = PekFun;
