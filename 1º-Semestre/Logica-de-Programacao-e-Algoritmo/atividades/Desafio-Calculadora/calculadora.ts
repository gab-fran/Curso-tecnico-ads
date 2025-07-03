console.clear();
const teclado = require("prompt-sync")();

let repetir: boolean = true;

while (repetir == true) {
    let numUm: number = parseFloat(teclado("Digite o primeiro número: "));
    let numDois: number = parseFloat(teclado("Digite o segundo número: "));

    console.log("Escolha uma operação:");
    console.log("+ - Adição");
    console.log("- - Subtração");
    console.log("* - Multiplicação");
    console.log("/ - Divisão");

    let operacao: string = teclado("Digite sua operação: ");

    console.log(``);

    if (operacao === "+") {
        console.log(`${numUm} + ${numDois} = ${numUm + numDois}`);
    } else if (operacao === "-") {
        console.log(`${numUm} - ${numDois} = ${numUm - numDois}`);
    } else if (operacao === "*") {
        console.log(`${numUm} * ${numDois} = ${numUm * numDois}`);
    } else if (operacao === "/") {
        if (numDois === 0) {
            console.log("Erro: divisão por zero não é permitida.");
        } else {
            console.log(`${numUm} / ${numDois} = ${numUm / numDois}`);
        }
    } else {
        console.log("Operação inválida.");
    }

    console.log(``);

    let pergunta: string = teclado("Deseja realizar outro calculo(Sim/Não): ")
    if (pergunta == "Sim" || pergunta == "sim" || pergunta == "S" || pergunta == "s") {
        repetir = true;
    }
    else {
        repetir = false;
    }

    console.log(``);
}

console.log("Calculadora finalizada");
