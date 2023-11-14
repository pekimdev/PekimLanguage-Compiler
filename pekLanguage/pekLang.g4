grammar pekLang;

@header {
      const {STRING, NUMBER, BOOLEAN, ARRAY, FUNCTION} = require("../dataStructures/PekVariable.js")
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
      const { ReturnCommand } = require("../ast/ReturnCommand.js");
      const { AccessCommand } = require("../ast/AccessCommand.js");
}

@members {
      let symbolTable = new PekSymbolTable();
      let functionTable = new PekFunctionTable();
      let paramTable = new PekParamTable();
      let program = new PekProgram();
      let stack = new Stack();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Símbolo '${id}' não declarado.`)
            }
      }

      function verificationTypeID(id){
            let symbol = symbolTable.getSymbol(id);

            if(symbolTable.exists(id)){

            let type = symbol.getType();

            if(type !== ARRAY && type !== STRING) {
                  throw new PekSemanticError(`Símbolo '${id}' incongruente`)
            }
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
      showCommands();
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
      | returncmd
      | accesscmd
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
            expr
             FP 
            {
                  let cmd = new WriteCommand(exprContent);
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

         

ATTR { exprContent = "" }
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

      else if(exprContent == "Verdadeiro" || exprContent == "Falso"){
            _type = BOOLEAN;
      }
      else {
            _type = FUNCTION
      }

      let symbol = new PekVariable(_varName, _type, _varValue);

      if(_type == NUMBER && exprContent.length > 5){
            exprContent = `BigInt(${exprContent})`;
      }


      if(!symbolTable.exists(_varName)){
            symbolTable.addSymbol(symbol)
      } else {
          symbolTable.removeSymbol(_varName)
            symbolTable.addSymbol(symbol)
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
            FP { let cmd = new DecisionCommand(exprDecision, "", [], [], []); }
            AC
            { let currentThread = new Array(); 
            stack.push(currentThread);
            }
            (cmd)+
            FC
      { 
            let trueList = new Array();
            trueList = stack.pop();
             cmd.setTrueList(trueList);
                  stack.peek().push(cmd);
      }

      ('senao se' AP
      (ID | NUMBER | STRING) {exprSecondDecision = this._input.LT(-1).text;}
            OPREL { exprSecondDecision += $OPREL.text }
            (ID | NUMBER | STRING | BOOLEAN) 
            {
            if(this._input.LT(-1).text == 'Verdadeiro'){
                  exprSecondDecision += true ;}
            else if(this._input.LT(-1).text == 'Falso'){
                  exprSecondDecision += false;
            }
            else {
                  exprSecondDecision += this._input.LT(-1).text;
            }
            }
            FP {
                   cmd.setSecondDecision(exprSecondDecision);
            }
        AC {
            { let currentThread = new Array(); 
            stack.push(currentThread);
            }
           }
           (cmd)+
       FC
       {
            let elseIfList = new Array();
            elseIfList = stack.pop();
            cmd.setElseIfList(elseIfList);
            stack.peek().pop();
            stack.peek().push(cmd);
       }

      )?

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
      cmd.setFalseList(falseList);
      stack.peek().pop();
      stack.peek().push(cmd);
      }
      )?
             ;

funcmd : 'fun' ID {
      let funName = $ID.text;
      if (functionTable.exists(funName)){
            throw new PekSemanticError(`A função ${funName} já existe.`);
      }
      }
      AP {
            paramsList = new Array();
      } 
      (params)?
      FP 
      { let fun = new PekFun(funName, paramsList);
            functionTable.addFun(fun);
      }
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
      
       for(param of paramsList) {
            paramTable.removeParam(param);
       }
      }
       ;


funexec : ID {
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
                  throw new PekSemanticError("Quantidade de parâmetros incongruentes a função.");
                        
                  }

            let cmd = new FunExecCommand(funName, paramsListExec);
            stack.peek().push(cmd);
          }
          (SemiColon)?
      ;

paramsExec : expr { paramsListExec.push($expr.text) } 
            (COMMA expr { paramsListExec.push($expr.text) })*
           ;


returncmd : 'retornar' {
       exprContent = "";
      }
      (expr {
       let cmd = new ReturnCommand($expr.text);
         stack.peek().push(cmd); 
      })?
      (SemiColon)?
      
          ;

accesscmd : ID {
      if(!paramTable.exists($ID.text)){
      verificationID($ID.text); 
      }
      let i = "";
} 
      {
       let text = $ID.text;
      }
      ('[' {
            exprContent = "";
      } expr (OP expr)* {
            let cmd = new AccessCommand(text, 'last', exprContent) 
            stack.peek().push(cmd)
            }
      ']' | '.ultimo' 
      
      { let commandLastIndex = new AccessCommand(text, `${text}.length - 1`)
            stack.peek().push(commandLastIndex)
      }
      | '.tamanho'

      { 
        let commandLength = new AccessCommand(text, `${text}.length`);
            stack.peek().push(commandLength);
      }

      | '.adicionar' AP {
            exprContent = "";
      } expr (COMMA { exprContent += $COMMA.text } expr)* FP 

      { let commandPush = new AccessCommand(text, `${text}.push(${exprContent})`, exprContent);
            stack.peek().push(commandPush);
      }

      | '.remover' AP FP {
            let commandPop = new AccessCommand(text, `${text}.pop()`)
            stack.peek().push(commandPop);
      }

      
      )

      (SemiColon)?
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
      | funexec { exprContent = $funexec.text
            stack.peek().pop();  // Se execução for considerada uma expr, então removerá o comando de execução gerado fora da expressão.
            }
      | accesscmd { exprContent = stack.peek().pop()}
            
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

array : '[' (expr (COMMA expr)*)? ']'
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

WS : (' ' | '\t' | '\n'| '\r') -> skip
   ;
