/*
20 - Crie um script que declare uma função que receba um array de números como 
parâmetro e retorne a média dos números do array.
*/

const numeros = [1, 2, 3, 4, 5];

function mediaNumeros(array){
    let soma = 0;
    
    array.reduce((acc, numero) => {
        soma += numero;
    }, soma);

    return soma / array.length;
}

console.log(mediaNumeros(numeros));

    