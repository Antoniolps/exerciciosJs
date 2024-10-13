/*
22 - Crie um script que declare um array de números e utilize a função map() para criar 
um novo array onde cada número seja multiplicado por 2. Imprima o novo array.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = numeros.map((numero) => numero * 2);

console.log(...numerosMultiplicados);