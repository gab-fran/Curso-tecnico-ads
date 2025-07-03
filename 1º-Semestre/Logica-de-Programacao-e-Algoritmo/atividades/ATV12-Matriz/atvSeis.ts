// 6-Crie uma matriz 3x3 com entrada manual de números
// aceitando somente números de 0 a 9. Em seguida,
// exiba a matriz na tela.
// Nome: Gabriel Henrique Francisco

console.clear();
let teclado = require('prompt-sync')();

let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < 3; x++) {
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));

        if (numero <= 9) {
            minhaMatriz[z][x] = numero;
        }
        else {
            x--;
            console.log("O número que você digitou é maior do que nove digite outro número.");
        }
    }
}
console.clear();
console.log(minhaMatriz);