const { AbstractCommand } = require("./AbstractCommand.js");

class ReadCommand extends AbstractCommand {
  constructor(id, variable) {
    super();
    this.variable = variable;
    this.id = id;
  }

  generateJavaScriptCode() {
    return (this.id = `${this.id} = readline.prompt();\n`);
  }

  toString() {
    return `ReadCommand [id = ${id}]`;
  }
}

exports.ReadCommand = ReadCommand;
