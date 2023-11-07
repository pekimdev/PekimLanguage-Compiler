const { AbstractCommand } = require("./AbstractCommand");

class WriteCommand extends AbstractCommand {
  constructor(id) {
    super();
    this.id = id;
  }
}
exports.WriteCommand = WriteCommand;
