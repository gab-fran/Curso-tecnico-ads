// tudo dentro de função

let teclado = require (`prompt-sync`)();
let n1: number = 0;
let n2: number = 0;
let opcao: string = ``;

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);     
}

function opcoes (opcao:string): void{
    switch (opcao){
        case '+': soma(); break;
        case '-': subtracao(); break;
        case '*': multiplicacao(); break;
        case '/': divisao(); break;
        case '0': sair(); break;
        default: break;
    }    
}

function menu():void{
    console.log(`\n---* CALCULADORA *---`);
    console.log(`Digite `);
    console.log(`+ --> ADIÇÃO`);
    console.log(`- --> SUBTRAÇÃO`);
    console.log(`* --> MULTIPLICAÇÃO`);
    console.log(`/ --> DIVISÃO`);
    console.log(`0 --> SAIR \n`);
    opcao = teclado(`Digite a sua opção: `);
    opcoes(opcao);
}

menu(); 

function soma(): void {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log(`\nO resultado da soma é: ${n1} + ${n2} = ${n1 + n2} \n`);
    menu();
}

function subtracao(): void {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log(`O resultado da subtração é: ${n1} - ${n2} = ${n1 - n2}`);
    menu();
}

function multiplicacao(): void {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log(`O resultado da multiplicação é: ${n1} * ${n2} = ${n1 * n2}`);
    menu();
}

function divisao(): void {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log(`O resultado da divisão é: ${n1} / ${n2} = ${n1 / n2}`);
    menu();
}
