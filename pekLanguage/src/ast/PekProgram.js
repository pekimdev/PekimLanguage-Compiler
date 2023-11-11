const fs = require("fs");
const { PekSymbolTable } = require("../dataStructures/PekSymbolTable");

class PekProgram {
  constructor() {
    this.varTable = new PekSymbolTable();
  }

  generateTarget() {
    let str = "";
    str += `const readline = require("readline-sync");\n\n`;

    for (const command of this.commands) {
      str += `${command.generateJavaScriptCode()}\n`;
    }

    try {
      fs.writeFileSync("CodeGenerated.js", str);
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
