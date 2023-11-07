const fs = require("fs");
const { PekSymbolTable } = require("../dataStructures/PekSymbolTable");

class PekProgram {
  constructor() {
    this.varTable = new PekSymbolTable();
  }

  generateTarget() {
    let str = "";
    str += "const readline = require('readline');\n";
    str += "const rl = readline.createInterface({\n";
    str += "  input: process.stdin,\n";
    str += "  output: process.stdout\n";
    str += "});\n\n";
    str += `function readSync(id) {
      return new Promise((resolve) => {
        rl.once("line", (input) => {
          resolve(input);
        });
      });
    }\n`;

    str += `async function read(id) {
      id = await readSync(id);
      rl.close();
    }\n`;

    for (let symbol of this.varTable.getAll()) {
      str += `${symbol.generateJavaScriptCode()}\n`;
    }

    for (const command of this.commands) {
      str += `${command.generateJavaScriptCode()}\n`;
    }

    str += "rl.close();\n";

    try {
      fs.writeFileSync("Main.js", str);
      console.log("Código JavaScript gerado com sucesso.");
      fs.close();
    } catch (err) {
      console.error("Erro ao escrever o arquivo:", err);
    }
  }

  getVarTable() {
    return this.varTable;
  }

  setVarTable(varTable) {
    this.varTable = varTable;
  }

  getCommands() {
    return this.commands;
  }

  setCommands(commands) {
    this.commands = commands;
  }

  getProgramName() {
    return this.programName;
  }

  setProgramName() {
    this.programName = programName;
  }
}

exports.PekProgram = PekProgram;
