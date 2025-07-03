// 7- Faça um programa para calcular n! (Fatorial de
// n), sendo que o valor inteiro de n é fornecido pelo
// usuário. utilize laço de repetição for.
// Nome: Gabriel Henrique Francisco

console.clear();
const teclado = require(`prompt-sync`)();

let numero: number = parseInt(teclado("Digite o fatorial que deseja calcular: "));

let resultado: number = numero;

for (let i = numero - 1; i > 0; i--) {
  resultado = resultado * i;
}

console.log(`${numero}! = ${resultado}`);
