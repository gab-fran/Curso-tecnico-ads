// Função com parametro (n1: number; n2:number) e sem retorno
/*function soma (n1: number, n2: number): void{
    console.log(n1 + n2);
}

let teclado = require (`prompt-sync`)();

let nome: string = ``;

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));

soma(n1,n2);

console.log(`Fim de programa!!`);*/

// Função com parametro (n1: number; n2:number) e COM retorno
/*function soma (n1: number, n2: number): number{
    let resultado: number = (n1 + n2);
    return resultado;
}

let teclado = require (`prompt-sync`)();

let nome: string = ``;

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));

let retorno: number = soma(n1,n2);

console.log(retorno);

console.log(`Fim de programa!!`);*/

// Função sem parametro () e COM retorno
function soma (): number{
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    let resultado: number = (n1 + n2);
    return resultado;
}

let teclado = require (`prompt-sync`)();

let retorno: number = soma();
console.log(retorno); 

console.log(`Fim de programa!!`);











