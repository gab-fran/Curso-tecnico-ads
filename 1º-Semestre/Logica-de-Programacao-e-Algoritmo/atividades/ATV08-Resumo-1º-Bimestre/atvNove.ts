/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let intervaloUm = parseInt(teclado("Digite um numero:"));
let intervaloDois = parseInt(teclado("Digite outro numero:"));
let intervaloMenor: number;
let intervaloMaior: number;

if (intervaloUm >= intervaloDois) {
    intervaloMaior = intervaloUm;
    intervaloMenor = intervaloDois;
}

else {
    intervaloMaior = intervaloDois;
    intervaloMenor = intervaloUm;
}

console.log(``);

console.log(`Os números impares entre o intervalo de ${intervaloMenor} e ${intervaloMaior} são: `);

while (intervaloMenor <= intervaloMaior){
    if (intervaloMenor % 2 != 0){
        console.log(intervaloMenor);
    }
    intervaloMenor ++;
}