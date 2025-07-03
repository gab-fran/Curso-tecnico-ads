/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI
é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize
a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Gabriel Henrique Francisco
*/
console.clear();
const teclado = require('prompt-sync')();

let pi: number = 3.14159;
let raio: number = parseFloat(teclado("Digite o valor do raio: "));
let altura: number = parseFloat(teclado("Digite o valor da altura: "));

let volume: number = pi * (raio * raio) * altura;
console.log(`O volume da lata é: ${volume.toFixed(2)}`);//.toFixed(2) é usado para mostrar o número com apenas 2 casas decimais
