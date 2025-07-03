// 4 – Faça um programa que dê entrada manual de 10 números
// armazene em um vetor, em seguida inverter a ordem de
// armazenamento em outro vetor, utilize laços de repetição para
// fazer essa atividade
// Nome: Gabriel Henrique Francisco

console.clear();
const teclado = require(`prompt-sync`)();

let vetor: number[] = [];
let vetorInvertido: number[] = [];

for (let i = 0; i < 10; i++) {
  let pergunta: number = Number(teclado("Digite um número: "));
  vetor[i] = pergunta;
}

for (let i = 9; i >= 0; i--) {
  vetorInvertido[9 - i] = vetor[i];
}
console.log(`\nVetor: ${vetor} \nVetor com os valores invertido: ${vetorInvertido}`);
