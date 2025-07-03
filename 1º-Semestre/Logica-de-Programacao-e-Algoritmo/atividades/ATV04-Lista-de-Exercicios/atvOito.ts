/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Gabriel Henrique Francisco
E-mail: gabriel.h.francisco@aluno.senai.br
*/

console.clear();
const teclado = require('prompt-sync')();

let anguloUm = parseFloat(teclado("Digite o primeiro ângulo: "));
let anguloDois = parseFloat(teclado("Digite o segundo ângulo: "));
let anguloTres = parseFloat(teclado("Digite o terceiro ângulo: "));

let somaAngulos: number = 0;

if (anguloUm <= 0 || anguloDois <= 0 || anguloTres <= 0) {
    console.log("Os ângulos informados não formam um triângulo.");
}
else {
    somaAngulos = anguloUm + anguloDois + anguloTres;

    if (somaAngulos == 180){
        if (anguloUm == 90 || anguloDois == 90 || anguloTres == 90) {
            console.log("Triângulo Retângulo");
        }
        else if (anguloUm > 90 || anguloDois > 90 || anguloTres > 90) {
            console.log("Triângulo Obtusângulo");
        }
        else (anguloUm < 90 || anguloDois < 90 || anguloTres < 90) {
            console.log("Triângulo Acutângulo");
        }
    }
    else {
        console.log("Os ângulos informados não formam um triângulo.");
    }
}
