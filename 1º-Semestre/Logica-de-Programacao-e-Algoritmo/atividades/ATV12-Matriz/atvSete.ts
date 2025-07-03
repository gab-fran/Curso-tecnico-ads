// 7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
// Em seguida, exiba a matriz na tela.
// Nome: Gabriel Henrique Francisco

console.clear();

let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < 3; x++) {
        let numero: number = Math.floor(Math.random() * 10);

        minhaMatriz[z][x] = numero;
    }
}
console.clear();
console.log(minhaMatriz);