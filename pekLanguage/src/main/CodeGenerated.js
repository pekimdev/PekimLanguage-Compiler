const readline = require("readline-sync");

function fib(n){
if (n<2) {
return n}
else {
return fib(n-1)+fib(n-2)}

}
result = "";
result = readline.prompt();

console.log(fib(result));

