class PekSymbol {
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
    return `PekSymbol [name = ${this.name}]`;
  }
}

exports.PekSymbol = PekSymbol;
