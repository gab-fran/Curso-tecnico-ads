console.clear();
let teclado = require('prompt-sync')();
// Declarando matriz usando o construtor Array limitando a três linhas
let matrizDois: string[][] = new Array(3); 

for (let i = 0; i < 3; i++){
    /* Cria um array vazio para preencher a linha correspondente ao i
    limitando a três linhas */
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 4; j++){
        // Atribuição via entrada de dados manual na variavel nome
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}] da matriz: `);

        // Atribi nome na minhaMatriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
// Imprime a matriz
console.log(matrizDois);




