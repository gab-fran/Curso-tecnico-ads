let teclado = require(`prompt-sync`)();

let resultados = new Array(10);

let i = 0;

for (let i = 0; i < 10; i++) {
    let numero1 = parseFloat(teclado(`Digite o primeiro número: `));
    let numero2 = parseFloat(teclado(`Digite o segundo número: `));
    resultados[i] = numero1 * numero2;
}

console.log(`Resultados das multiplicações: `);

for (let j = 0; j < 10; j++){
    console.log(`Resultados ${j + 1}: ${resultados[j]}`);
}