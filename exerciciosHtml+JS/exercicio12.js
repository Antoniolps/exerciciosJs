/*
12. Crie uma página que verifique se uma palavra é um palíndromo.
*/

function verificarPalindromo() {
    let palavra = document.getElementById("palavra").value;

    let palavraInvertida = palavra.split("").reverse().join("");

    if(palavra === palavraInvertida) {
        document.getElementById("resultado").innerHTML = "A palavra é um palíndromo!";
    }
    else {
        document.getElementById("resultado").innerHTML = "A palavra não é um palíndromo!";
    }
}