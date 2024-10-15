/*
4. Crie uma página que calcule a soma dos números de 1 a N, onde N é um valor inserido pelo usuário.
*/

var getValor = () => {
    return parseInt(document.getElementById("numero").value);
}

var calcularValor = () => {
    let valor = getValor();
    let soma = 0;

    for (let i = 1; i <= valor; i++) {
        soma += i;
    }

    document.getElementById("resultado").innerHTML = `A soma dos números de 1 a ${valor} é: ${soma}`;
}