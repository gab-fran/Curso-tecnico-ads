/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let quantPessoas: number = 0;
let somaAltura: number = 0;
let maioresIdade: number = 0;

let unidade: string = teclado("Você deseja calcular a média de altura em metros ou centímetros (m/cm): ").toLowerCase();
if (unidade !== "m" && unidade !== "cm") {
    console.log("Unidade inválida. Usando metros como padrão.");
    unidade = "m";
}

console.log(``);

while (quantPessoas < 10) { 
    let altura: number = parseFloat(teclado(`Digite a altura da pessoa (em ${unidade}): `));
    let idade: number = parseInt(teclado("Digite a idade da pessoa: "));

    if (idade >= 18) {
        somaAltura += altura;
        maioresIdade++;
    }
    quantPessoas++;
}

if (maioresIdade > 0) {
    let media: number = somaAltura / maioresIdade;
    console.log(`\nA média de altura das pessoas maiores de idade é ${media.toFixed(2)} ${unidade}`);
} else {
    console.log(`\nNenhuma pessoa maior de idade foi registrada.`);
}
