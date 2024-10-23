/*
14.Crie uma página que encontre o maior e o menor número em uma lista de números inseridos pelo usuário.
*/

function maiorMenor() {
    var numeros = document.getElementById("numeros").value;
    numeros = numeros.split(",");
    var maior = numeros[0];
    var menor = numeros[0];
    for (var i = 0; i < numeros.length; i++) {
        if (parseInt(numeros[i]) > parseInt(maior)) {
            maior = numeros[i];
        }
        if (parseInt(numeros[i]) < parseInt(menor)) {
            menor = numeros[i];
        }
    }
    document.getElementById("resultado").innerHTML = "Maior número: " + maior + "<br>Menor número: " + menor;
}