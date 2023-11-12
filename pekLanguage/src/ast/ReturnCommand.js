const { AbstractCommand } = require("./AbstractCommand");

class ReturnCommand extends AbstractCommand {
  constructor(value) {
    super();
    this.value = value;
  }

  generateJavaScriptCode() {
    return `return ${this.value}`;
  }
}

exports.ReturnCommand = ReturnCommand;
