/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let numUm: number = parseInt(teclado("Digite o primeiro número: "));
let numDois: number = parseInt(teclado("Digite o segundo número: "));
let numTres: number = parseInt(teclado("Digite o terceiro número: "));

let menor: number = 0;
let meio: number = 0;
let maior: number = 0;

if (numUm <= numDois && numUm <= numTres) {
    menor = numUm;
    if (numDois <= numTres) {
        meio = numDois;
        maior = numTres;
    }
    else {
        meio = numTres;
        maior = numDois;
    }
}

else if (numDois <= numUm && numDois <= numTres) {
    menor = numDois;
    if (numUm <= numTres) {
        meio = numUm;
        maior = numTres;
    }
    else {
        meio = numTres;
        maior = numUm;
    }
}

else {
    menor = numTres;
    if (numUm <= numDois) {
        meio = numUm;
        maior = numDois;
    }
    else {
        meio = numDois;
        maior = numUm;
    }
}

console.log(``);
console.log(`Números em ordem decrescente: ${maior}, ${meio}, ${menor}`);