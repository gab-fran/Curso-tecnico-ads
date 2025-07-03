/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let notaUm: number = parseFloat(teclado("Digite a primeira nota: "));
let notaDois: number = parseFloat(teclado("Digite a segunda nota: "));
let notaTres: number = parseFloat(teclado("Digite a terceira nota: "));
let notaQuatro: number = parseFloat(teclado("Digite a quarta nota: "));
let notaCinco: number = parseFloat(teclado("Digite a quinta nota: "));

let notas: number[] = [notaUm, notaDois, notaTres, notaQuatro, notaCinco];

notas.sort((a, b) => a - b);

let media: number = (notaUm + notaDois + notaTres + notaQuatro + notaCinco) / 5;

console.log(`\nA maior nota é ${notas[4]}, a menor é ${notas[0]} e a média é ${media}`);
