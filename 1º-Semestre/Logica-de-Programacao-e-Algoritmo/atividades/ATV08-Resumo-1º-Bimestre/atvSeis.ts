/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let numero: number = 0;
let par: number[] = [];
let impar: number[] = [];
let quantPar: number = 0;
let quantImpar: number = 0;

while((quantPar + quantImpar) < 10) {
    numero = parseInt(teclado("Digite um número: "));

    if (numero % 2 == 0){
        quantPar ++;
        par.push(numero);
    }

    else if (numero % 2 != 0){
        quantImpar ++;
        impar.push(numero);
    }
}

console.log(`\nA quantidade de números pares digitados foram ${quantPar} e são eles ${par}`);
console.log(`A quantidade de números impares digitados foram ${quantImpar} e são eles ${impar}`);