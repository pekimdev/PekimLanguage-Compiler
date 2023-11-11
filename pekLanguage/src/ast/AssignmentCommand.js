const { AbstractCommand } = require("./AbstractCommand");

class AssignmentCommand extends AbstractCommand {
  constructor(id, expr) {
    super();
    this.id = id;
    this.expr = expr;
  }

  generateJavaScriptCode() {
    if (this.expr == "Verdadeiro") {
      this.expr = true;
    } else if (this.expr == "Falso") {
      this.expr = false;
    }
    return `${this.id} = ${this.expr};`;
  }
}

exports.AssignmentCommand = AssignmentCommand;
