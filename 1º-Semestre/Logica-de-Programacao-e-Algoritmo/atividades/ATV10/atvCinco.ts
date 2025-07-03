// 5- Faça um programa que dê entrada manual de 10 números
// armazene em um vetor e ordene esses 10 números crescente,
// fazer uso do laço de repetição for.
// Nome: Gabriel Henrique Francisco

console.clear();
const teclado = require(`prompt-sync`)();

let numeros: number[] = [];
let numerosCrescentes: number[] = [];

for (let i = 0; i < 10; i++) {
  let pergunta: number = Number(teclado("Digite um número: "));
  numeros[i] = pergunta;
}

for (let i = 0; i < 10; i++) {
  numerosCrescentes[i] = numeros[i];
}

for (let z = 0; z < 10; z++) {
  for (let y = z + 1; y < 10; y++) { 
    if (numerosCrescentes[z] > numerosCrescentes[y]) { // Se inverte o sinal de > os numeros ficam em ordem descrescente
      let temporario = numerosCrescentes[z];
      numerosCrescentes[z] = numerosCrescentes[y];
      numerosCrescentes[y] = temporario;
    }
  }
}

console.log(`\nNúmeros: ${numeros} \nNúmeros em ordem crescente: ${numerosCrescentes}`);
