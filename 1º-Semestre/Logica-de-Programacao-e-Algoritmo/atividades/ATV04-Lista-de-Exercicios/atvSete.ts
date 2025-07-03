/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno: Gabriel Henrique Francisco
E-mail: gabriel.h.francisco@aluno.senai.br
*/

console.clear();
const teclado = require('prompt-sync')();

let numMacas: number = parseInt(teclado("Digite o número de maçãs que você quer comprar: "));
let total: number = 0;

if (numMacas < 12) {
    total = numMacas * 0.30;
    console.log(`O valor total da compra é ${total}`)
}
else if (numMacas >= 12) {
    total = numMacas * 0.25;
    console.log(`O valor total da compra é ${total}`)
}
else {
    console.log("O número que você digitou é inválido")
}
