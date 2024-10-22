/*
8.Crie uma página que simule o lançamento de dois dados e exiba o resultado da soma. 
Adicione um botão para lançar novamente.
*/

function lancarDados() {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var soma = dado1 + dado2;

    document.getElementById("dado1").innerHTML = `Dado 1: ${dado1}`;
    document.getElementById("dado2").innerHTML = `Dado 2: ${dado2}`;
    document.getElementById("soma").innerHTML = `Soma: ${soma}`;
}

