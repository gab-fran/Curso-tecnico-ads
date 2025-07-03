// 6- Faça um programa que verifique e mostre os números entre
// 1.000 e 2.000 (inclusive) que, quando divididos por 11
// produzam resto igual a 2. Utilizar o laço de repetição FOR
// Nome: Gabriel Henrique Francisco

console.clear();

console.log("Os números números entre 1.000 e 2.000 que, quando divididos por 11 possum resto 2, são: ");

for (let i = 1000; i <= 2000; i++){
    if (i % 11 == 2){
        console.log(i);
    }
}