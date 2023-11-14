const { AbstractCommand } = require("./AbstractCommand");

class AccessCommand extends AbstractCommand {
  constructor(text, i, expr) {
    super();
    this.text = text;
    this.i = i;
    this.expr = expr;
  }

  generateJavaScriptCode() {
    let str = "";

    switch (this.i) {
      case `${this.text}.length - 1\n`:
        str += `${this.text}[${this.i}]\n`;
      case `${this.text}.length`:
        str += `${this.i}\n`;
      case `${this.text}.push(${this.expr})`:
        str += `${this.i}\n`;
      case `${this.text}.remover()`:
        str += `${this.i}`;
    }

    str += `${this.text}[${this.expr}]\n`;

    return str;
  }
}

exports.AccessCommand = AccessCommand;
