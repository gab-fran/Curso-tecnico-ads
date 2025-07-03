let teclado = require(`prompt-sync`)();

function idadePessoa(anoNascimento: number): number{
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let idade: number = anoAtual - anoNascimento;
    return idade;
}
let anoNascimento: number = parseInt(teclado(`Escreva o ano do seu nascimento: `));

let idade: number = idadePessoa(anoNascimento);
console.log(`Idade da pessoa é: ${idade}`);    