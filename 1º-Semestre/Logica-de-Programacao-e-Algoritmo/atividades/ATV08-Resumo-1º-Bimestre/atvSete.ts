/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let numero: number = 0;
let somaNumeros: number = 0;

while (somaNumeros <= 100) {
    numero = parseFloat(teclado("Digite um número: "));
    somaNumeros += numero;
}

console.log(``);
console.log(`A soma dos números é ${somaNumeros}`);