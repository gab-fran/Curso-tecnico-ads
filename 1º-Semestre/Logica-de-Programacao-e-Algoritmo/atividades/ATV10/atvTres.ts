// 3- Faça um programa que dê entrada com 10 números
// armazene em um vetor, e verifique qual é o maior
// número e mostre no console.
// Nome: Gabriel Henrique Francisco

console.clear();
const teclado = require(`prompt-sync`)();

let numeros: number[] = [];

for (let i = 0; i < 10; i++) {
    let pergunta: number = Number(teclado("Digite um número: "));
    numeros[i] = pergunta;
}

let numeroMaior: number = numeros[0];
let numeroMenor: number = numeros[0];

for (let i = 0; i < 10; i++) {
    if (numeroMaior < numeros[i]) {
        numeroMaior = numeros[i];
    }
    if (numeroMenor > numeros[i]) {
        numeroMenor = numeros[i];
    }
}

console.log(`O maior número é ${numeroMaior} e o menor número é ${numeroMenor}`);

