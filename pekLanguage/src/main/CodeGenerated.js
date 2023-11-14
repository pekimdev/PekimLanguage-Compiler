const readline = require("readline-sync");

function feira(items){
resposta = "";

quantidade = items.length;

if (quantidade>10) {
console.log("Você tem muitos items, deseja remover algum item? Digite 'sim' ou 'não'");
resposta = readline.prompt();
if (resposta=="sim") {
itemRemovido = items.pop();
console.log("Item "+itemRemovido);
feira(items);
}
else {
console.log("Ok, muito obrigado pela sua preferência! Sua lista de compras tiveram os seguintes items: "+items);
}
}
else {
ultimoItem = items[items.length - 1]
console.log(ultimoItem+" é seu último item, deseja adicionar mais? Digite 'sim' ou 'não'.");
resposta = readline.prompt();
if (resposta=="sim") {
console.log("O que você deseja adicionar?");
item = "";
item = readline.prompt();
itemIndex = items.push(item);
itemAdicionado = items[itemIndex-1]
console.log(itemAdicionado+" Adicionado(a)!");
feira(items);
}
else {
console.log("Ok, muito obrigado pela sua preferência! Sua lista de compras tiveram os seguintes items: "+items);
}
}

}
feira(["Maça","Pêssego","Melancia","Abacaxi","Frango","Uva","Tomate","Morango","Banana"]);

