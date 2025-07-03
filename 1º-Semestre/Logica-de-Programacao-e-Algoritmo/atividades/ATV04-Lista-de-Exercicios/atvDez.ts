/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas
são:
&quot;Telefonou para a vítima?&quot;
&quot;Esteve no local do crime?&quot;
&quot;Mora perto da vítima?&quot;
&quot;Devia para a vítima?&quot;
&quot;Já trabalhou com a vítima?&quot;
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se
a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como
&quot;Suspeita&quot;, entre 3 e 4 como &quot;Cúmplice&quot; e 5 como &quot;Assassino&quot;. Caso contrário, ele será
classificado como &quot;Inocente&quot;.
Aluno: Gabriel Henrique Francisco
*/

console.clear();
const teclado = require('prompt-sync')();

let contador: number = 0;
let classificacao: string;

let perguntaUm: string = teclado("Telefonou para a vítima?(sim/não) ");
if (perguntaUm == "Sim" || perguntaUm == "sim" || perguntaUm == "S" || perguntaUm == "s") {
    contador ++;
}
console.log(``);
let perguntaDois: string = teclado("Esteve no local do crime?(sim/não) ");
if (perguntaDois == "Sim" || perguntaDois == "sim" || perguntaDois == "S" || perguntaDois == "s") {
    contador ++;
}
console.log(``);
let perguntaTres: string = teclado("Mora perto da vítima?(sim/não) ");
if (perguntaTres == "Sim" || perguntaTres == "sim" || perguntaTres == "S" || perguntaTres == "s") {
    contador ++;
}
console.log(``);
let perguntaQuatro: string = teclado("Devia para a vítima?(sim/não) ");
if (perguntaQuatro == "Sim" || perguntaQuatro == "sim" || perguntaQuatro == "S" || perguntaQuatro == "s") {
    contador ++;
}
console.log(``);
let perguntaCinco: string = teclado("Já trabalhou com a vítima?(sim/não) ");
if (perguntaCinco == "Sim" || perguntaCinco == "sim" || perguntaCinco == "S" || perguntaCinco == "s") {
    contador ++;
}
console.clear();

if (contador == 2) {
    classificacao = "Suspeita";
}
else if (contador == 3 || contador == 4) {
    classificacao = "Cúmplice";
}
else if (contador == 5) {
    classificacao = "Assassino";
}
else {
    classificacao = "Inocente";
}

console.log(`Você foi classificado como: ${classificacao}`);