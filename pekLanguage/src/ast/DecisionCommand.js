const { AbstractCommand } = require("./AbstractCommand");

class DecisionCommand extends AbstractCommand {
  constructor(condition, secondCondition, trueList, elseIfList, falseList) {
    super();
    this.condition = condition;
    this.secondCondition = secondCondition;
    this.trueList = trueList;
    this.elseIfList = elseIfList;
    this.falseList = falseList;
  }

  generateJavaScriptCode() {
    let str = "";
    str += `if (${this.condition}) {\n`;
    for (let cmd of this.trueList) {
      str += `${cmd.generateJavaScriptCode()}`;
    }
    str += "}\n";

    if (this.elseIfList.length > 0) {
      str += `else if (${this.secondCondition}){\n`;
      for (let cmd of this.elseIfList) {
        str += `${cmd.generateJavaScriptCode()}`;
      }
      str += "}\n";
    }

    if (this.falseList.length > 0) {
      str += `else {\n`;
      for (let cmd of this.falseList) {
        str += `${cmd.generateJavaScriptCode()}`;
      }
      str += "}\n";
    }

    return str.toString();
  }

  setElseIfList(eil) {
    this.elseIfList = eil;
  }

  setFalseList(fl) {
    this.falseList = fl;
  }

  setSecondDecision(secondCondition) {
    this.secondCondition = secondCondition;
  }
}

exports.DecisionCommand = DecisionCommand;
