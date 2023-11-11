const { AbstractCommand } = require("./AbstractCommand.js");

class FunctionCommand extends AbstractCommand {
  constructor(name, params, commands) {
    super();
    this.name = name;
    this.params = params;
    this.commands = commands;
  }

  generateJavaScriptCode() {
    let str = "";
    str += `function ${this.name}(${this.params}){\n`;
    for (let cmd of this.commands) {
      str += `${cmd.generateJavaScriptCode()}\n`;
    }
    str += "}";
    return str;
  }
}

exports.FunctionCommand = FunctionCommand;
