console.clear();
const teclado = require(`prompt-sync`)();

function tabuada(): void {
    let fatorUm = parseInt(teclado("Digite a tabuada que deseja calcular: "));
    let fatorDois = parseInt(teclado("Digite até qual numero deseja que a tabuada vá: "));
    for (let i = 0; i<=fatorDois; i++) {
        console.log(`${fatorUm} * ${i} = ${fatorUm * i}`)
    }
}

function menu(): void {
    tabuada();
    pergunta();
}

function repetir(opcao: string): void {
    switch (opcao) {
        case 's': menu(); break;
        case 'sim': menu(); break;
        case 'si': menu(); break;
        case 'n': sair(); break;
        case 'na': sair(); break;
        case 'nao': sair(); break;
        case 'não': sair(); break;
        default: console.log("Parece que você digitou algo errado, tente novamente."); pergunta(); break;

    }
}

function pergunta(): void {
    let opcao: string = teclado("Você deseja realizar outra tabuada(Sim/Não): ").toLowerCase();
    repetir(opcao);
}

function sair(): void {
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);
}

menu();