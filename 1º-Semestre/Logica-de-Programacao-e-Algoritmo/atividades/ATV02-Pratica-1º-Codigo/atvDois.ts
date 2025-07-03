console.clear();
const teclado = require('prompt-sync')();

let numUm: number = Number(teclado("Digite o primeiro número: "));
let numDois: number = Number(teclado("Digite o segundo número: "));
let numTres: number = Number(teclado("Digite o terceiro número: "));
let numQuatro: number = Number(teclado("Digite o quarto número: "));    
let numCinco: number = Number(teclado("Digite o quinto número: "));
let numSeis: number = Number(teclado("Digite o sexto número: "));
let numSete: number = Number(teclado("Digite o sétimo número: "));
let numOito: number = Number(teclado("Digite o oitavo número: "));  
let numNove: number = Number(teclado("Digite o nono número: "));
let numDez: number = Number(teclado("Digite o décimo número: "));

let media: number = (numUm + numDois + numTres + numQuatro + numCinco + numSeis + numSete + numOito + numNove + numDez) / 10;

console.log(`A média dos números é: ${media}`);