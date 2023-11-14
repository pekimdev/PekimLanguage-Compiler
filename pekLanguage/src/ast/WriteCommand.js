const { AbstractCommand } = require("./AbstractCommand");
const { AccessCommand } = require("./AccessCommand");

class WriteCommand extends AbstractCommand {
  constructor(id) {
    super();
    this.id = id;
  }

  generateJavaScriptCode() {
    if (typeof this.id == "object" && this.id instanceof AccessCommand) {
      if (this.id.i == `${this.id.text}.length - 1`) {
        return `console.log(${this.id.text}[${this.id.i}])\n`;
      } else if (this.id.i == "last") {
        return `console.log(${this.id.text}[${this.id.expr}])\n`;
      } else {
        return `console.log(${this.id.i});\n`;
      }
    }

    return `console.log(${this.id});\n`;
  }
}
exports.WriteCommand = WriteCommand;
