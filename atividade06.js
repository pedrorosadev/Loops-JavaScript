/*
Escrever um programa que receba vários números inteiros no teclado. 
E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)
*/

console.log("===========Desafio 06===========");

const prompt = require('prompt-sync')();

let count, media = 0, soma = 0

do{
    count = Number(prompt ('Número: ')); 
    soma = soma + num;
    if (num % 3 === 0){
        count++;
    }
}while(count != 0)

media = soma / (count -1);

console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);

console.log('\n[0] Para sair');
