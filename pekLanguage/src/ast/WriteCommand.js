const { AbstractCommand } = require("./AbstractCommand");

class WriteCommand extends AbstractCommand {
  constructor(id) {
    super();
    this.id = id;
  }

  generateJavaScriptCode() {
    return `console.log(${this.id});\n`;
  }
}
exports.WriteCommand = WriteCommand;
