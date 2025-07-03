/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let x: number = Number(teclado("Digite um número: "));
let y: number = Number(teclado("Digite outro número: "));

console.log(``);
console.log(`O primeiro número é ${x}`);
console.log(`O segundo número é ${y}`);

let z: number = x;
x = y;
y = z;

console.log(``);
console.log(`Agora o primeiro número é ${x}`);
console.log(`Agora o segundo número é ${y}`);
