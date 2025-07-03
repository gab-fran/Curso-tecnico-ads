/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let numero: number = parseFloat(teclado("Digite algum valor: "));

let intervaloInicio: number = 0;
let intervaloFim: number = 10;

if (numero <= 100) {
    while (intervaloFim <= 100) {
        if (numero >= intervaloInicio && numero < intervaloFim) {
            console.log(`O número ${numero} está entre ${intervaloInicio} e ${intervaloFim}`);
        }
        intervaloInicio += 10;
        intervaloFim += 10;
    }
}

else {
    console.log("O número que você digitou é maior que 100");
}