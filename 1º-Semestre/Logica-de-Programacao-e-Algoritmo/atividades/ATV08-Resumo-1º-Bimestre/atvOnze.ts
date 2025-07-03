/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let valorCarro: number = 0;
let valorFinal: number = 0;

console.log("Escolha um modelo de carro \n 1 - Fiat Uno: R$ 60.000,00  \n 2 - Volkswagen Polo: R$ 87.000,00  \n 3 - Chevrolet Onix: R$ 81.000,00  \n 4 - Hyundai HB20: R$ 80.000,00  \n");
let carro: number = parseInt(teclado("Digite o número do carro que você deseja escolher: "));

if (carro == 1) {
    valorCarro = 60000;
}
else if (carro == 2) {
    valorCarro = 87000;
}
else if (carro == 3) {
    valorCarro = 81000;
}
else if (carro == 4) {
    valorCarro = 80000;
}
else console.log("O número que você digitou é inválido");

console.log("\nEscolha a forma de pagamento: \n 1 - À vista \n 2 - Parcelado \n");
let formaPagamento = parseInt(teclado("Digite o número da forma de pagamento que você deseja: "));

if (formaPagamento == 1) {
    valorFinal = valorCarro * 0.85;
}
else if (formaPagamento == 2) {
    valorFinal = valorCarro * 1.13;
}
else {
    console.log("O número que você digitou é inválido");
}

console.log(`\nO valor final do carro é R$${valorFinal}`);

