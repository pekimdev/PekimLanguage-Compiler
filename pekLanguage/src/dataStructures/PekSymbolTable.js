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

  exists(symbolName) {
    return this.map.get(symbolName) != null;
  }
}

exports.PekSymbolTable = PekSymbolTable;
