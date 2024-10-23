/*
13. Crie uma página que ordene uma lista de números inseridos pelo usuário.
*/

function ordenarNumeros() {
    var numeros = document.getElementById("numeros").value;
    var numerosOrdenados = numeros.split(',').sort(function(a, b) {
        return a - b;
    });
    document.getElementById("resultado").innerHTML = numerosOrdenados;
}