console.clear();
const teclado = require('prompt-sync')();

let tempCelsius: number = parseFloat(teclado("Digite a temperatura em Celsius: "));
let tempFahrenheit: number = (tempCelsius * 9 / 5) + 32;

console.log(`A temperatura em Fahrenheit é: ${tempFahrenheit}`);
