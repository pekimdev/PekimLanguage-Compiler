const { AbstractCommand } = require("./AbstractCommand");
const { AccessCommand } = require("./AccessCommand");

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
    if (typeof this.expr == "object" && this.expr instanceof AccessCommand) {
      if (this.expr.i == `${this.expr.text}.length - 1`) {
        return `${this.id} = ${this.expr.text}[${this.expr.i}]\n`;
      } else if (this.expr.i == "last") {
        return `${this.id} = ${this.expr.text}[${this.expr.expr}]\n`;
      }

      return `${this.id} = ${this.expr.i};\n`;
    }

    return `${this.id} = ${this.expr};\n`;
  }
}

exports.AssignmentCommand = AssignmentCommand;
