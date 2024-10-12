/*
5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional 
e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira 
e retornar uma string concatenada usando template literals ${var}. 
Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".
 */

function objetivoCarreira(carreira){
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

var objetivoCarreiraArrow = (carreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

const carreira = 'Desenvolvedor';

console.log(objetivoCarreira(carreira));
console.log(objetivoCarreiraArrow(carreira));