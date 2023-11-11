class PekFunctionTable {
  constructor() {
    this.map = new Map();
  }

  addFun(fun) {
    this.map.set(fun.getName(), fun);
  }

  getFun(functionName) {
    return this.map.get(functionName);
  }

  removeFun(functionName) {
    return this.map.delete(functionName);
  }

  exists(functionName) {
    return this.map.get(functionName) != null;
  }

  getAll() {
    let list = new Array();
    for (let fun of this.map.values()) {
      list.push(fun);
    }

    return list;
  }
}

exports.PekFunctionTable = PekFunctionTable;
