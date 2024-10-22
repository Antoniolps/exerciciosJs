/*
7. Crie uma página que calcule o fatorial de um número inserido pelo usuário.
*/

function calcularFatorial() {
    let numero = parseInt(document.getElementById("numero").value);

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById("resultado").innerHTML = `O fatorial de ${numero} é ${fatorial}`;
}