/*
23 - Crie um script que declare um array de números e utilize a função reduce() 
para calcular a soma de todos os números do array. Imprima o resultado.
*/

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var soma = numeros.reduce((acumulador, numero) => acumulador + numero);

console.log(soma);