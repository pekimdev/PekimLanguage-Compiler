const { AbstractCommand } = require("./AbstractCommand.js");

class ReadCommand extends AbstractCommand {
  constructor(id, variable) {
    super();
    this.variable = variable;
    this.id = id;
  }

  generateJavaScriptCode() {
    return (this.id = `read(${this.id});`);
  }

  toString() {
    return `ReadCommand [id = ${id}]`;
  }
}

exports.ReadCommand = ReadCommand;
