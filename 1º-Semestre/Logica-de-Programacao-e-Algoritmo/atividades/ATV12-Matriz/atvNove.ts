// 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
// calcule e exiba a soma dos elementos das colunas pares da
// matriz.
// Nome: Gabriel Henrique Francisco

console.clear();
let teclado = require('prompt-sync')();

let minhaMatriz: number[][] = [];
let somaNumerosMatriz: number = 0;

for (let z = 0; z < 6; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < 6; x++) {
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));

        //let numero: number = Math.floor(Math.random() * 21);

        minhaMatriz[z][x] = numero;

        if (x % 2 == 0){
            somaNumerosMatriz += numero;
        }
    }
}
console.clear();

console.log(`A soma dos números nas colunas pares são: ${somaNumerosMatriz}`);

console.log(minhaMatriz);