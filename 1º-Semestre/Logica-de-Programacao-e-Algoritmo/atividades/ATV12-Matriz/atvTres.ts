// 3- Altere o código um(1) desse conteúdo para funcionar
// com números e ter duas colunas.
// Nome: Gabriel Henrique Francisco

console.clear();
let teclado = require('prompt-sync')();

let minhaMatriz: number[][] = []; // declarando matriz
let linha: number = 3;
let coluna: number = 2;

// z percorre as linha 
for (let z = 0; z < linha; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        // Atribuição via entrada de dados manual na variavel nome
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));

        // Atribuição nome na minhaMatriz do endereço dado por z e x
        minhaMatriz[z][x] = numero;

    }
}
console.clear();
// Imprime a matriz
console.log(minhaMatriz);