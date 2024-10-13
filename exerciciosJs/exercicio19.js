/*
19 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.
*/

const numeros = [1, 2, 3, 4, 5];

function menorNumero(array){
    return Math.min(...array);
}

console.log(menorNumero(numeros));