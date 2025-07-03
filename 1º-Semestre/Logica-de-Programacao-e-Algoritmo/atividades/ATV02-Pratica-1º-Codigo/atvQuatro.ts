console.clear();
const teclado = require('prompt-sync')();

let tempFahrenheit: number = parseFloat(teclado("Digite a temperatura em Fahrenheit: "));
let tempCelsius: number = (tempFahrenheit - 32) * 5 / 9;

console.log(`A temperatura em Celsius é: ${tempCelsius}`);