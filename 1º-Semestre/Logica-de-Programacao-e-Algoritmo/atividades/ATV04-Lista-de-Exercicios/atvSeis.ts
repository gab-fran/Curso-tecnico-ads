/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é
a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a
seguinte tabela:
A - nota=&gt;8,5 nota=&lt;10
B - nota=&gt;7 nota&lt;8,5
C - nota=&gt;5 nota&lt;7
D - nota=&gt;3 nota&lt;5
E - nota&gt;3
Nome Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let notaUm: number = Number(teclado("Digite a primeira nota: "));
let notaDois: number = Number(teclado("Digite a segunda nota: "));
let media: number = (notaUm + notaDois) / 2;

if (media >= 8.5 && media <= 10) {
    console.log("A nota é A");
}
else if (media >= 7 && media < 8.5) {
    console.log("A nota é B");
} 
else if (media >= 5 && media < 7) {
    console.log("A nota é C");
} 
else if (media >= 3 && media < 5) {
    console.log("A nota é D");
} 
else if (media >= 0 && media < 3) {
    console.log("A nota é E");
} 
else {
    console.log("Nota inválida!");
}

console.log(`A média é: ${media}`);
