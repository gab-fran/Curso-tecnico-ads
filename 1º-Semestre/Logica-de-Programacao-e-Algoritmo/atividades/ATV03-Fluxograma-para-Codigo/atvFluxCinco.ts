console.clear();
const teclado = require('prompt-sync')();

let idade: number = 0;
let salario: number = 0;
let tot_pess: number = 0;
let n_pess: number = 0;

do {
    idade = parseInt(teclado("Digite a idade da pessoa: "));
    salario = parseFloat(teclado("Digite o salário da pessoa: "));

    if (idade < 30 && salario > 3000){
        tot_pess ++;
        n_pess ++;
    }
    else {
        n_pess ++;
    }

} while (n_pess < 50);

console.log(`O total de pessoas que atende as condições é: ${tot_pess}`);
