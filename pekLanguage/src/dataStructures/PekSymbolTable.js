class PekSymbolTable {
  constructor() {
    this.map = new Map();
  }

  addSymbol(symbol) {
    this.map.set(symbol.getName(), symbol);
  }

  getSymbol(symbolName) {
    return this.map.get(symbolName);
  }

  removeSymbol(symbolName) {
    return this.map.delete(symbolName);
  }

  exists(symbolName) {
    return this.map.get(symbolName) != null;
  }

  getAll() {
    let list = new Array();
    for (let symbol of this.map.values()) {
      list.push(symbol);
    }

    return list;
  }
}

exports.PekSymbolTable = PekSymbolTable;
