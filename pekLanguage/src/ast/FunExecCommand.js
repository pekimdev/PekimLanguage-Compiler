const { AbstractCommand } = require("./AbstractCommand.js");

class FunExecCommand extends AbstractCommand {
  constructor(functionName, paramsExec) {
    super();
    this.functionName = functionName;
    this.paramsExec = paramsExec;
  }

  generateJavaScriptCode() {
    return `${this.functionName}(${this.paramsExec});\n`;
  }
}

exports.FunExecCommand = FunExecCommand;
