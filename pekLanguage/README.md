# Transpilador

Esse projeto tem como principal intuito o aprendizado, mas para ser bem sincero foi bem divertido 😝

### Mas o que seria um transpilador? E qual a diferença de um compilador? 🤔

Sendo bem objetivo, o compilador é receptor do código fonte (código que você escreve), e como saída, produz código em linguagem de baixo nível (mais próximo do código de máquina).

Já um transpilador também é um receptor do código fonte, porém produzindo em outra linguagem nível bem semelhante.

Exemplo: _Typescript_ -> _JavaScript_

sendo o TypeScript o código fonte(código que escrevemos e temos as suas exceptions de tipagem), e o JavaScript como o código gerado e executado.

## Sobre o meu projeto

Em particular, eu fiz indo para o lado do transpilador. Porém podemos dizer que os processos são bem semelhantes. A análise léxica e sintática e a AST são importantes para ambos.

Não é atoa que chamamos o transpilador de 'source-to-source compiler'.

Ou seja, um compilador que o código fonte X gera código fonte Y para ser executado. 💡

E entender tanto na parte teórica e prática como funciona em partes a análise léxica, sintática e a produção da AST (_Abstract syntax tree_), foi um processo trabalhoso, divertido e de muito aprendizado.

## Motivação 🚀

O que me fez construir esse transpilador, além do aprendizado e da experiência, foi uma rinha de compiladores que aconteceu há alguns meses, porém ao ver o repositório no GitHub, eles já deixaram pronto a AST, sendo somente necessário o seu interpretador do arquivo JSON gerado pela AST.

Mas eu queria realmente entender desde a base, como funciona a teoria da linguagem, como a AST é construída e posteriormente interpretada.

No meu projeto, eu construí minha própria AST.

Porém ao invés de criar um Arquivo JSON com todas as informações dos comandos e posteriormente criar meu interpretador, eu gerei diretamente um arquivo JavaScript, sem a necessidade de criar o meu interpretador. Ou seja, foi em um caminho inverso da Rinha.

O transpilador gera código JavaScript (pode ser qualquer outra linguagem que eu queira) baseado na minha AST, talvez um dia se eu quiser mexer no interpretador com uma AST construída, eu entre no repositório da rinha.

## Conhecimentos prévios 📚

- Node.js
- JavaScript
- Programação orientada a objetos
- Gramática (Léxica, sintática e GLC)
- RegEx (Expressões regulares)
- Autômatos finitos determinísticos
- AST e grafos (Caso não entenda muito, não tem problema).

# O Código 🖥️

Agora vamos começar a entrar na parte mais interessante, como executar e como eu fiz esse projeto de forma resumida. Então vamos por partes:

### Executar

Antes de tudo, para conseguirmos executar o projeto:

- Rodamos o node.js e damos:

```
npm install
```

Eu usei uma ferramenta muito poderosa que constrói o analisador léxico e sintático baseado na nossa gramática. A gramática eu construí dentro do arquivo `pekLang.g4`. A ferramenta se chama `antlr4`.

Porém o _antlr4_ no node.js não tem versões muito estáveis, então caso dê erro na hora de executar, precisamos fazer algumas coisas antes de executarmos o projeto:

- No arquivo `node_modules/antlr4/package.json` e devemos alterar o "main" somente para `"index.js"`

- No arquivo `node_modules/antlr4/RuleContext.js` devemos apagar o `.INVALID_ALT_NUMBER`, ou seja, o que estiver usando o INVALID_ALT_NUMBER como propriedade. Essa propriedade não existe e dará erro.

- Você fará a mesma coisa da etapa anterior no arquivo `node_modules/antlr4/tree/Trees.js`

- Com isso já podemos gerar o código e rodarmos ele com o script `npm run compile`

## Como eu escrevi o código 🤯

Bom, agora é onde eu mais vou explicar sobre o projeto, pois é a parte mais interessante mas que requer paciência.

Como podemos ver nas minha estrutura de pastas, o transpilador possui pilares importantes para ser feito:

- `Primeiro de tudo, o arquivo main.js, onde ele utiliza os analisadores léxicos e sintáticos do antlr4.`

```js
function main() {
  try {
    const input = antlr4.FileStream("../../source.pek");

    const chars = new antlr4.InputStream(input.strdata);
    const lexer = new pekLangLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new pekLangParser(tokens);

    lexer.removeErrorListeners();
    lexer.addErrorListener(new MyErrorListener());
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());

    parser.prog();
  } catch (err) {
    console.log(err);
    fs.unlink("./CodeGenerated.js", (err) => {
      if (err) {
        console.log(" ");
      }
    });
  }
}
main();
```

Nem se preocupa com o código, basicamente o analisador léxico analisa os chars do arquivo, o sintático analisa os tokens (conjunto de chars), posteriormente o `parser.prog()`, que serve para executar o analisador.

Sendo o 'prog' o nome da minha regra gramatical principal.

```
prog  : 'GABRIEL' bloco 'PEKIM' (SemiColon)?
      {
      program.setVarTable(symbolTable);
      program.setCommands(stack.pop());
      generateCode();
      }
```

- `parser (analisador léxico, sintático, etc.)` gerado pelo próprio antlr4 ao executar o script 'npm run antlr4'.

- `O grammar (gramática), no arquivo pekLang.g4`: É onde está toda minha gramática e o que cada letra e palavra representa para o meu código fonte, e baseado no grammar geramos os analisadores.

- `main.js`: Como ja disse, o arquivo principal, onde o analisador léxico e sintático será executado, analisando o arquivo apontado.

- `dataStructures`: É a pasta onde está toda a minha estrutura de informações que precisam ser armazenadas durante a escrita do código. Por exemplo: Criações de funções e variáveis.

```
  a = 5;
  fun hello(name){}

this.Variable -> name = 'a', type = number, value = 5

this.Function -> name = 'hello', params = [name]
```

O propósito disso tá em não criar funções repetidas, mesmo parâmetros na mesma função, etc. Realmente é uma tabela, parecido com um banco de dados.

OBS: O arquivo `Stack.js` é apenas uma forma mais simples de buscar elementos dentro de uma pilha.

- `AST (Árvore sintática abstrata)`

Como em qualquer linguagem, temos diversos tipos de comandos, e nessa pasta, eu peguei os principais, o suficiente para executar um fibonacci ou manipular as arrays. Talvez com uns bugs, mas todos nós sabemos que _escrever código é escrever bugs._

### Como funciona a AST

Digamos que absolutamente tudo que temos é um vetor enorme de comandos. Imagina dados armazenados em banco de dados ou em um arquivo JSON, onde podemos ter derivações em cima de derivações: `Posts, likes dos posts, comentários dos posts, respostas dos comentários, respostas das respostas, etc...`

Agora troque isso por comandos, alguns mais simples, outros que executam mais comandos ainda.

Exemplo:

```
if(condition){
  (cmd)+ -> 1 ou mais comandos
}
else {
  (cmd)+ -> 1 ou mais comandos
}

fun hello(){
  (cmd)* -> 0 ou mais comandos
}
```

e esses cmd podendo ser comando de atribuição, condição, função, execução de função, leitura, escrita, retorno e acesso para manipulações de arrays.

```
cmd   : readcmd
      | writecmd
      | attrcmd
      | decisioncmd
      | funcmd
      | funexec
      | returncmd
      | accesscmd
      ;
```

essa é uma parte do grammar, e se analisarmos mais um pouco, podemos ver que alguns desses comandos, podem gerar 1 ou mais comandos.

Tudo que está em minúsculo no grammar são `terminais`, podemos usar código (nesse caso JavaScript) nos terminais. E os que estão em maiúsculo são `não-terminais`, simplesmente representando algum conjunto de caracteres.

Entrando um pouco mais no grammar, temos a regra gramatical que inicia o programa, a regra `prog`.

E como sou nada criativo, a minha gramática deve começar com "GABRIEL" e terminar com "PEKIM" com o ponto e vírgula sendo opcional. No meio devemos ter a regra `bloco`.

A regra bloco é a seguinte

```
bloco : {let currentThread = new Array();
           stack.push(currentThread);
      }
        (cmd)+
      ;
```

A regra cria uma primeira array 'currentThread', e essa array entra para pilha, a partir daí podemos ter 1 ou mais comandos e o nosso código-fonte começa a surgir efeito. E se formos analisar posteriormente, cada comando instanciado será inserido nessa pilha ou lista de comandos.

Imagine a pilha de comandos dessa forma:

```
stack = [] -> após o primeiro stack.push -> stack = [[]]
```

Ou seja, são vetores (current threads) dentro de um vetor principal `"stack"`.

Em casos que podemos ter uma sequência de comandos dentro de um comando, como é o exemplo do 'if else' que eu mostrei anteriormente. É necessário criarmos outra lista 'CurrentThread' e inserir na stack.

Exemplo:

```
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


      resto do código.....
```

Relaxa e vamos por partes:

1 - Na minha gramática o 'AC' (Abre chaves) representa '{'

e o 'FC' (Fecha chaves) representa '}'

com os parênteses é a mesma coisa

```
AP  : '('
    ;

FP  : ')'
    ;

AC : '{'
   ;

FC : '}'
   ;
```

Esse abrir de chaves e fechar de chaves é a parte do 'if else':

if(condition)AC .... FC

senao AC .... FC

por questão lógica, nas linguagens de programação você tem uma sequência de comando a seguir, podendo ser `1 ou mais comandos`.

Se esperamos 1 ou mais comandos ao abrir as chaves, então precisamos criar uma nova 'currentThread' e colocar dentro da stack. E a partir daí a gente tem o '(cmd)+'.

Depois queremos essa lista de comandos (currentThread) para armazenar dentro de uma variável. Se for true, vai armazenar dentro da `trueList`, senão, dentro da `falseList`.

Depois da sequência de comandos, para armazenarmos precisamos simplesmente dar um `stack.pop()` para pegar a última currentThread, que foi criada anteriormente.

#### Ok, mas como armazenamos os comandos dentro da currentThread??

Todo final de comando, deve ser instanciado contendo as informações precisas. Vamos seguir com o exemplo do comando citado:

```
let cmd = new DecisionCommand(exprDecision, trueList, falseList);
    stack.peek().push(cmd);
```

Criamos um objeto 'cmd' com as suas informações e demos um stack.peek() para ir no último elemento (currentThread) da stack.

E .push(cmd) para inserir o comando nessa currentThread.

E a classe `DecisionCommand` tem a seguinte construção

```js
class DecisionCommand extends AbstractCommand {
  constructor(condition, trueList, falseList) {
    super();
    this.condition = condition;
    this.trueList = trueList;
    this.falseList = falseList;
  }
...
```

### Geração de código JavaScript (ou qualquer linguagem que você queira)

E para terminar o comando de decisão, temos que gerar um código JavaScript, e a classe carrega o mesmo método que todos os comandos:

```js
 generateJavaScriptCode() {
    let str = "";
    str += `if (${this.condition}) {\n`;
    for (let cmd of this.trueList) {
      str += `${cmd.generateJavaScriptCode()}`;
    }
    str += "}\n";
    if (this.falseList.length > 0) {
      str += `else {\n`;
      for (let cmd of this.falseList) {
        str += `${cmd.generateJavaScriptCode()}`;
      }
    }
    str += "}\n";

    return str.toString();
  }
```

A falseList e trueList são listas, portanto precisamos fazer um 'for let of' para retornar cada um desses cmd, e gerar código javascript também.

#### E como esses comandos realmente geram código javascript?

Dentro da classe principal que deve conter esses comandos e depois gerar o código com o método principal de geração `generateTarget()`:

```js
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

  getCommands() {
    return this.commands;
  }

  setCommands(commands) {
    this.commands = commands;
  }
```

Pegamos cada commando gerado e iteramos na `str` e com o `fs.writeFileSync` geramos o arquivo contendo toda essa 'str'.

E é na gramática que atualizamos a lista de comandos na classe PekProgram, pegando toda a lista de comandos do código fonte com um `stack.pop`.

```
prog  : 'GABRIEL' bloco 'PEKIM' (SemiColon)?
      {
      program.setVarTable(symbolTable);
      program.setCommands(stack.pop());
      generateCode();
      }
```

Lembra que inicialmente na regra 'bloco' criamos uma currentThread e inserimos na stack? É justamente essa currentThread que irá para o setCommands.

Para relembrar...

```
bloco : {let currentThread = new Array();
           stack.push(currentThread);
      }
        (cmd)+
      ;
```

Depois de usar o setCommands, usamos a função generateCode() que é essa aqui:

```
function generateCode(){
      program.generateTarget();
}
```

#### Executa o método generateTarget() mostrado anteriormente.

É claro que tem muito mais que eu posso explicar, mas brevemente esses são os tópicos principais que achei melhor abordar.

## Existem outras formas de ser feito?

Definitivamente sim. As possibilidades são muitas. E temos 2 opções principais:

- Opção A - Ao invés de gerar um código diretamente de uma linguagem, 'transpilando' ela. Podemos gerar um arquivo JSON, contendo as informações de cada comando.

Consequentemente criamos o nosso próprio interpretador desse JSON para executar cada comando de acordo com a sua informação (era justamente isso que você deveria fazer no rinha com a AST em JSON já feita por eles).

Porém, a gramática que eu particularmente fiz, não foi para esse caminho.

- Opção B - Podemos gerar o código de alguma linguagem de acordo com a AST de comandos construída, e obviamente utilizar o interpretador/compilador da própria linguagem.

## Comandos disponíveis

Eu deixei como exemplo a 'source.pek', porém aqui está alguns comandos que podemos utilizar no _PekimLanguage_:

- 'if else' (condicional);
- Atribuição -> a = 5;
- Criação de função -> fun name(){};
- Executar uma função -> somente a função;
- Ler uma variável (interação com terminal) -> 'ler(variable)';
- Escrever uma variável (print) -> 'escrever(id)';
- Retornar algo -> 'retornar';

##### Algumas manipulações com a array

- Acessar array com indexação -> 'array[index]';
- Acessar o último elemento da array -> 'array.ultimo';
- Acessar o tamanho da array -> 'array.tamanho';
- Adicionar algum elemento na array -> 'array.adicionar(item)';
- Remover o último elemento da array -> 'array.remover()';

## Conclusão

Poderia mostrar muito mais do meu código, porém seria um README enorme, então abordei os tópicos principais. Caso queira saber um pouco mais, leia do meu código e veja playlists indicadas abaixo.

## Agradecimentos

Se você está até aqui, eu agradeço por ter realmente se interessado. Espero que de alguma forma eu pude te ajudar.

E caso você queira aprender mais, eu utilizei algumas playlists necessárias para parte teórica que eu recomendo:

<p align="left">
  <a href="https://youtube.com/playlist?list=PLqlIQgAFrQ14oDPZliY1-tyupYs0prBmW&si=KdnpRnWMj7pi-1gY" target= "_blank">🎓 Teoria da linguagem - Hierarquia de Chomsky e autômatos finitos. Com o professor José Rui.</a>
</p>

<p align="left">
  <a href="https://youtube.com/playlist?list=PLjcmNukBom6--0we1zrpoUE2GuRD-Me6W&si=2iNIExDnfWcjjxJZ" target= "_blank">🎓 Compiladores - com o professor Isidro.</a>
</p>

"de graça recebestes, de graça dai."
