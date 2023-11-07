grammar pekLang;

@header {
      const {NUMBER, STRING} = require("../dataStructures/PekVariable.js");
      const { PekSymbol } = require("../dataStructures/PekSymbol.js");
      const { PekVariable } = require("../dataStructures/PekVariable.js");
      const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js");
      const { Stack } = require("../dataStructures/Stack.js");
      const { PekSemanticError } = require("../errors/PekSemanticError.js");
      const { PekProgram } = require("../ast/PekProgram.js");
      const { ReadCommand } = require("../ast/ReadCommand.js");
      const { WriteCommand } = require("../ast/WriteCommand.js");
      const { AssignmentCommand } = require("../ast/AssignmentCommand.js");
      const { DecisionCommand } = require("../ast/DecisionCommand.js");
}

@members {
      let symbolTable = new PekSymbolTable();
      let program = new PekProgram();
      let trueList = new Array();
      let falseList = new Array();
      let stack = new Stack();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Symbol '${id}' not declared.`)
            }
      }

      function showCommands() {
            let commands = program.getCommands();
            commands.forEach((c) => {
                  console.log(c);
            })
            }

      function generateCode(){
            program.generateTarget();
      }

}

prog  : bloco
      { 
      program.setVarTable(symbolTable);
      program.setCommands(stack.pop());
      showCommands();
      generateCode();
      }
      ;

bloco : {let currentThread = new Array();
           stack.push(currentThread);
      } 
        (cmd)+ 
      ;

cmd   : readcmd {console.log("Programa de leitura reconhecido");}
      | writecmd {console.log("Programa de escrita reconhecido");}
      | attrcmd  {console.log("Programa de atribuição reconhecido");}
      | decisioncmd
      ;

readcmd : 'ler' AP 
                  ID { verificationID($ID.text);
                  let readID = $ID.text ;}  
                  FP
                  {
                   let variable = symbolTable.getSymbol(readID);
                  let cmd = new ReadCommand(readID, variable);
                    stack.peek().push(cmd);
                  }
                  (SemiColon)?
        ;

writecmd : 'escrever' AP 
            ID {verificationID($ID.text);
                  let writeID = $ID.text;
            } FP 
            {
                  let cmd = new WriteCommand(writeID);
                  stack.peek().push(cmd);
            }
            (SemiColon)?
         ;

attrcmd :  ID {
           let _varName = $ID.text;
           let _varValue = null;
}
            {
                  let exprID = $ID.text; }
            ATTR { exprContent = "";
                  let _type;
                  if(exprContent.match(NUMBER)){
                      _type = NUMBER;
                  }
                  else {
                  _type = STRING;
                  }
                  let symbol = new PekVariable(_varName, _type, _varValue);

                  if(!symbolTable.exists(_varName)){
                        symbolTable.addSymbol(symbol);
                  }
            else {
                  throw new PekSemanticError(`Symbol '${_varName}' already exists.`)
            }}
            expr
            { let cmd = new AssignmentCommand(exprID, exprContent);
                  stack.peek().push(cmd);
            }
            (SemiColon)?
        ;

decisioncmd : 'if' AP 
                    ID { let exprDecision = $ID.text }
                    OPREL { exprDecision += $OPREL.text }
                    (ID | NUMBER) {exprDecision += this._input.LT(-1).text;}
                    FP 
                    AC
                    { let currentThread = new Array(); 
                      stack.push(currentThread);
                    }
                    (cmd)+
                    FC
                  { trueList = stack.pop();
                  }

                  ('else' 
                  AC 
                  {let currentThread = new Array();
                  stack.push(currentThread);    
                        }
                  (cmd)+ 
                  FC
                  {
                  falseList = stack.pop();
                  let cmd = new DecisionCommand(exprDecision, trueList, falseList);
                  stack.peek().push(cmd);
                  }
                  )?
             ;

expr  : term (OP {exprContent += $OP.text}
        term)*
      ;

term  : ID { verificationID($ID.text); 
            exprContent += $ID.text}
      | NUMBER { exprContent += $NUMBER.text }
      ;





AP  : '('
    ;

FP  : ')'
    ;

AC : '{'
   ;

FC : '}'
   ;

OP  : '+' | '-' | '*' | '/'
    ;

OPREL : '>' | '<' | '>=' | '<=' | '=='
      ;

ATTR  : '='
      ;

ID  : ([a-z] ([a-z] | [A-Z] | [0-9])*)
    ;

NUMBER : [0-9]+ ('.' [0-9]+)?
      ;

SemiColon : ';'
      ;

COMMA : ','
      ;

WS : (' ' | '\t' | '\n' | '\r') -> skip;