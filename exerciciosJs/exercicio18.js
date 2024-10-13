/*
18 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.
*/

const numeros = [1, 2, 3, 4, 5];

function maiorNumero(array){
    return Math.max(...array);
}

console.log(maiorNumero(numeros));