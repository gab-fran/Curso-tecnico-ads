/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um
aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou
não, caso não diga o(s) motivo(s).
Nome: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let idade: number = parseInt(teclado("Digite a sua idade: "));
let peso: number = parseFloat(teclado("Digite o seu peso: "));

if (idade >= 18 && idade <= 67 && peso >= 60) {
    console.log("Você pode doar sangue");
}
else if (idade < 18 && peso < 60) {
    console.log("Você não atingiu os requisitos minimos de idade e peso para doar sangue");
}
else if (idade < 18 && peso >= 60) {
    console.log("Você não tem idade suficiente para doar sangue");
}
else if (idade > 67 && peso >= 60) {
    console.log("Você passou da idade máxima para doar sangue");
}
else if (idade >= 18 && peso < 60) {
    console.log("Você não tem peso suficiente para doar sangue");
}
else {
    console.log("Ops. Parece que houve algum erro");
}