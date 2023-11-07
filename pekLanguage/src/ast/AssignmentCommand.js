const { AbstractCommand } = require("./AbstractCommand");

class AssignmentCommand extends AbstractCommand {
  constructor(id, expr) {
    super();
    this.id = id;
    this.expr = expr;
  }

  generateJavaScriptCode() {
    return `let ${this.id} = ${this.expr}`;
  }
}

exports.AssignmentCommand = AssignmentCommand;
