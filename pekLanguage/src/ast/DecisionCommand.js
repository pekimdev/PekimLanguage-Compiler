const { AbstractCommand } = require("./AbstractCommand");

class DecisionCommand extends AbstractCommand {
  constructor(condition, trueList, falseList) {
    super();
    this.condition = condition;
    this.trueList = trueList;
    this.falseList = falseList;
  }

  generateJavaScriptCode() {
    let str = "";
    str += `if (${this.condition}) {\n`;
    for (let cmd of this.trueList) {
      str += `${cmd.generateJavaScriptCode()}`;
    }
    str += "}";
    if (this.falseList.length > 0) {
      str += `else {`;
      for (let cmd of this.falseList) {
        str += `${cmd.generateJavaScriptCode()}`;
      }
    }
    str += "}\n";

    return str.toString();
  }

  toString() {
    return `DecisionCommand [condition = ${this.condition}, trueList = ${this.trueList}, falseList = ${this.falseList}]`;
  }
}

exports.DecisionCommand = DecisionCommand;
