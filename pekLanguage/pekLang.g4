grammar pekLang;

@header {
      const { PekSymbol } = require("../dataStructures/PekSymbol.js")
      const { PekVariable } = require("../dataStructures/PekVariable.js")
      const { PekSymbolTable } = require("../dataStructures/PekSymbolTable.js")
      const { PekSemanticError } = require("../errors/PekSemanticError.js")
      const {NUMBER, STRING} = require("../dataStructures/PekVariable.js")
}

@members {
      let _type;
      let _varName;
      let _varValue;
      let symbol;
      let symbolTable = new PekSymbolTable();

      function verificationID(id){
            if(!symbolTable.exists(id)){
                  throw new PekSemanticError(`Symbol '${id}' not declared.`)
            }
      }
}

prog  : declaration bloco 
      ;

declaration : (declarevar)+
           ;

declarevar : type ID {
            _varName = $ID.text;
            _varValue = null;
            symbol = new PekVariable(_varName, _type, _varValue);
            if(!symbolTable.exists(_varName)){
            symbolTable.addSymbol(symbol);
            console.log("Símbolo adicionado " + symbol);
            }
            else {
                  throw new PekSemanticError(`Symbol '${_varName}' already exists.`)
            }
} (COMMA ID {_varName = $ID.text;
            _varValue = null;
            symbol = new PekVariable(_varName, _type, _varValue);
             if(!symbolTable.exists(_varName)){
            symbolTable.addSymbol(symbol);
            console.log("Símbolo adicionado " + symbol);
            }
            else {
                  throw new PekSemanticError(`Symbol ${_varName} already exists.`)
            }
            })* SemiColon;

type  : 'number' { _type = NUMBER;} 
      | 'string' { _type = STRING;}
      ;

bloco : (cmd)+
      ;

cmd   : readcmd {console.log("Programa de leitura reconhecido");}
      | writecmd {console.log("Programa de escrita reconhecido");}
      | attrcmd  {console.log("Programa de atribuição reconhecido");}
      ;

readcmd : 'print' AP
                  ID { verificationID($ID.text) }  
                  FP
        ;

writecmd : 'write' AP ID FP
         ;

attrcmd :  ID ATTR expr
        ;

expr  : term (OP term)*
      ;

term  : ID | NUMBER
      ;






AP  : '('
    ;

FP  : ')'
    ;

OP  : '+' | '-' | '*' | '/'
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