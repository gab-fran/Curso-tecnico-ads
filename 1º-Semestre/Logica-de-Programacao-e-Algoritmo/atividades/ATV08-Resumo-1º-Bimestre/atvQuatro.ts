/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require(`prompt-sync`)();

let repetir: boolean = true;
let numero: number = 0;
let somaNumeros: number = 0;
let quantidadeNumeros: number = 0;
let pergunta: string;

do {
    numero = parseFloat(teclado("Digite um número: "));
    quantidadeNumeros++;
    somaNumeros += numero;

    pergunta = teclado("Você deseja continuar (Sim/Não)? ").toLowerCase();
    
    if (pergunta == "não" || pergunta == "nao" || pergunta == "n") {
        repetir = false;
    }

} while (repetir);

console.clear();

let media: number = somaNumeros / quantidadeNumeros;
console.log(`A média dos ${quantidadeNumeros} números digitados é: ${media.toFixed(2)}`);
