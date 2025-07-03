/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let quantPessoas: number = 0;
let idade: number = 0;
let sexo: string;
let somaIdadeM: number = 0;
let somaSexoM: number = 0;
let somaIdadeF: number = 0;
let somaSexoF: number = 0;

while (quantPessoas < 50) {
    idade = parseInt(teclado("Digite a idade da pessoa: "));
    sexo = teclado("Digite o sexo da pessoa(M/F): ").toUpperCase(); // Deixa o que foi digitado em maiúsculo

    if (sexo == "M") {
        somaIdadeM += idade;
        somaSexoM++;
    }

    else if (sexo == "F") {
        somaIdadeF += idade;
        somaSexoF++;
    }
    quantPessoas++;
}

let mediaM = somaIdadeM / somaSexoM;
let mediaF = somaIdadeF / somaSexoF;

console.log(``);
console.log(`A média de idade para pessoas do gênero masculino é ${mediaM}`);
console.log(`A média de idade para pessoas do gênero feminino é ${mediaF}`);

