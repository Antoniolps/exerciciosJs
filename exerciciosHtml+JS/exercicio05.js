/*
5. Crie uma página que exiba a tabuada de um número inserido pelo usuário, utilizando loops.
*/

var getValor = () => {
    return parseInt(document.getElementById("numero").value);
}

var exibirTabuada = () => {
    let valor = getValor();
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        tabuada += `${valor} x ${i} = ${valor * i}<br>`;
    }

    document.getElementById("resultado").innerHTML = tabuada;
}
