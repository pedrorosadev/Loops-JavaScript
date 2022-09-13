/*
Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. 
Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), 
e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). 
Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)

o número de pessoas calmas; 
o número de mulheres nervosas; 
o número de homens agressivos; 
o número de outros calmos;
o número de pessoas nervosas com mais de 40 anos; 
o número de pessoas calmas com menos de 18 anos.
*/

console.log("===========Desafio 04===========");

const prompt = require('prompt-sync')();

let i = 1, idade, sexo, emocao

while(i < 151){
    idade = prompt(`Idade do ${i}º Paciente: `)
    sexo = prompt(`Sexo do ${i}º Paciente: `)
    emocao = prompt(`Temperamento do ${i}º Paciente: `)


    if(sexo == 1  && emocao == 1){
        console.log(`${i} Paciente: \nSexo: Feminino\nTemperamento: Calmo`);
        if(){
            
        }
    }

   
}

 /*
    switch(sexo){
        case 1:

        break;
    }
    */