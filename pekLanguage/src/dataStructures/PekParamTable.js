class PekParamTable {
  constructor() {
    this.map = new Map();
  }

  addParam(param) {
    this.map.set(param.getName(), param);
  }

  removeParam(param) {
    this.map.delete(param);
  }

  exists(param) {
    return this.map.get(param) != null;
  }
}

exports.PekParamTable = PekParamTable;
