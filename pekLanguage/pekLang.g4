grammar pekLang;

@header {
      const {STRING, NUMBER, BOOLEAN, ARRAY} = require("../dataStructures/PekVariable.js")
      const { PekSymbol } = require("../dataStructures/PekSymbol.js");
      const { PekVariable } = require("../dataStructures/PekVariable.js");
      const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js");
      const { PekFunction } = require("../dataStructures/PekFunction.js");
      const { PekFun } = require("../dataStructures/PekFun.js");
      const { PekFunctionTable } = require("../dataStructures/PekFunctionTable.js");
      const { PekParam } = require("../dataStructures/PekParam.js");
      const { PekParamTable } = require("../dataStructures/PekParamTable");
      const { Stack } = require("../dataStructures/Stack.js");
      const { PekSemanticError } = require("../errors/PekSemanticError.js");

      const { PekProgram } = require("../ast/PekProgram.js");
      const { ReadCommand } = require("../ast/ReadCommand.js");
      const { WriteCommand } = require("../ast/WriteCommand.js");
      const { AssignmentCommand } = require("../ast/AssignmentCommand.js");
      const { DecisionCommand } = require("../ast/DecisionCommand.js");
      const { FunctionCommand } = require("../ast/FunctionCommand.js");
      const { FunExecCommand } = require("../ast/FunExecCommand.js");
}

@members {
      let symbolTable = new PekSymbolTable();
      let functionTable = new PekFunctionTable();
      let paramTable = new PekParamTable();
      let program = new PekProgram();
      let stack = new Stack();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Symbol '${id}' not declared.`)
            }
      }


      function verificationFunction(funName){
            if(!functionTable.exists(funName)){
                  throw new PekSemanticError(`Essa função executada não existe.`)
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

prog  : 'GABRIEL' bloco 'PEKIM' (SemiColon)?
      { 
      program.setVarTable(symbolTable);
      program.setCommands(stack.pop());
      generateCode();
      }
      ;


bloco : {let currentThread = new Array();
           stack.push(currentThread);
      } 
        (cmd)+
      ;

cmd   : readcmd
      | writecmd
      | attrcmd
      | decisioncmd
      | funcmd
      | funexec
      ;

readcmd : 'ler' AP 
                  ID {
                  let readID = $ID.text ;}  
                  FP
                  {
                   let variable = symbolTable.getSymbol(readID);
                  let cmd = new ReadCommand(readID, variable);
                    stack.peek().push(cmd);
                  }
                  (SemiColon)?
        ;

writecmd : 'escrever' AP {
            exprContent = "";
            }
            expr { writeID = $expr.text; }
             FP 
            {
                  let cmd = new WriteCommand(writeID);
                  stack.peek().push(cmd);
            }
            (SemiColon)?
         ;

attrcmd :  ID {
           let _varName = $ID.text;
           let _varValue = null;
           let exprID = $ID.text; 
           let _type;
           }

         

ATTR { exprContent = "";   
}
expr {

      let firstChar = exprContent[0];
      let lastChar = exprContent[exprContent.length -1];

      if (firstChar == '"' && lastChar == '"'){
            _type = STRING;
      }
      else if (!isNaN(exprContent)){
            _type = NUMBER;
      }
      else if (firstChar == '[' && lastChar == ']'){
            _type = ARRAY;
      }

      else {
            _type = BOOLEAN;
      }

      let symbol = new PekVariable(_varName, _type, _varValue);


      if(!symbolTable.exists(_varName)){
            symbolTable.addSymbol(symbol)
      } else {
      throw new PekSemanticError(`Variável '${_varName}' já declarada.`)
      }
}
(SemiColon)?

      {

            let cmd = new AssignmentCommand(exprID, exprContent);
      stack.peek().push(cmd);
}
      ;
      

decisioncmd : 'se' AP
            (ID | NUMBER | STRING) {exprDecision = this._input.LT(-1).text;}
            OPREL { exprDecision += $OPREL.text }
            (ID | NUMBER | STRING | BOOLEAN) 
            {
            if(this._input.LT(-1).text == 'Verdadeiro'){
                  exprDecision += true ;}
            else if(this._input.LT(-1).text == 'Falso'){
                  exprDecision += false;
            }
            else {
                  exprDecision += this._input.LT(-1).text;
            }
            }
            FP 
            AC
            { let currentThread = new Array(); 
            stack.push(currentThread);
            }
            (cmd)+
            FC
      { 
            let trueList = new Array();
            trueList = stack.pop();
      }

      ('senao' 
      AC 
      {let currentThread = new Array();
      stack.push(currentThread);    
            }
      (cmd)+ 
      FC
      {
      let falseList = new Array();
      falseList = stack.pop();
      let cmd = new DecisionCommand(exprDecision, trueList, falseList);
      stack.peek().push(cmd);
      }
      )?
             ;

funcmd : 'fun' ID {
      let funName = $ID.text;
      if (functionTable.exists(funName)){
            throw new PekSemanticError(`A função ${funName} já existe.`)
      }
      }
      AP {
            paramsList = new Array();
      } 
      (params)?
      FP 
      AC
      { 
            let currentThread = new Array(); 
            stack.push(currentThread);
      }
      (cmd)*
      
      FC
      {
      let commandsList = new Array();
      commandsList = stack.pop();

       
       let cmd = new FunctionCommand(funName, paramsList, commandsList);
            stack.peek().push(cmd);

       let fun = new PekFun(funName, paramsList);
            functionTable.addFun(fun);

       for(param of paramsList) {
            paramTable.removeParam(param);
       }
      }
       ;


funexec : 'executar ' ID {
            let funName = $ID.text
            verificationFunction(funName);
}
          AP
            {
               let fun = functionTable.getFun(funName);
               let params = fun.getParams();
               paramsListExec = new Array();
            }
            
            (paramsExec)?

          FP
          { 
            if (paramsListExec.length !== params.length){
                        throw new PekSemanticError("Quantidade de parâmetros incongruentes a função.")
                        
                  }

            let cmd = new FunExecCommand(funName, paramsListExec);
            stack.peek().push(cmd);
          }
          (SemiColon)?
      ;

array : '[' (expr (COMMA expr)*)? ']'
      ;

paramsExec : expr { paramsListExec.push($expr.text) } 
            (COMMA expr { paramsListExec.push($expr.text) })*
           ;

expr  : term (OP { exprContent += $OP.text; }
        term)*
      ;


term  : ID { 
      if(!paramTable.exists($ID.text)){
      verificationID($ID.text); 
      }
       exprContent += $ID.text; }
      | NUMBER { exprContent += $NUMBER.text }
      | STRING { exprContent += $STRING.text }
      | BOOLEAN { exprContent += $BOOLEAN.text }
      | array { exprContent = $array.text }
      ;

params : param (COMMA param)*
       ;

param : ID { 
      param = new PekParam($ID.text);

      if(paramTable.exists($ID.text)){
            throw new PekSemanticError("Parâmetro já existente nessa função.");
      }
      paramTable.addParam(param);
      paramsList.push($ID.text); 
      }
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

STRING : ('"'  .*? '"')
       ;

BOOLEAN : 'Verdadeiro' | 'Falso'
        ;

SemiColon : ';'
      ;

COMMA : ','
      ;

WS : (' ' | '\t' | '\n' | '\r') -> skip;
