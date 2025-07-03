/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o
número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é
${variavel}`, se ser iguais uma frase: ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let numUm: number = Number(teclado("Digite o primeiro número: "));
let numDois: number = Number(teclado("Digite o segundo número: "));    

if (numUm > numDois) {
    console.log(`O número maior é ${numUm} e o número menor é ${numDois}`);
}
else if (numUm < numDois) {
    console.log(`O número maior é ${numDois} e o número menor é ${numUm}`);
} 
else if (numUm === numDois) {
    console.log(`Os números ${numUm} e ${numDois} são iguais`);
}
else {
    console.log("Ops. Parece que houve algum problema"); 
    //Caso o usuário não digite um número esta mensagem aparecerá 
}
