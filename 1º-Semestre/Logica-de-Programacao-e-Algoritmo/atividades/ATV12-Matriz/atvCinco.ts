// 5- Crie uma matriz 3x3 com entrada manual de
// números. Em seguida, exiba a matriz na tela.
// Nome: Gabriel Henrique Francisco

console.clear();
let teclado = require('prompt-sync')();

let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < 3; x++) {
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));

        minhaMatriz[z][x] = numero;
    }
}
console.clear();

console.log(minhaMatriz);