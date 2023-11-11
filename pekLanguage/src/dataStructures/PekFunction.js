class PekFunction {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  toString() {
    return `PekFunction [name = ${this.name}]`;
  }

  generateJavaScriptCode() {
    return "";
  }
}

exports.PekFunction = PekFunction;
