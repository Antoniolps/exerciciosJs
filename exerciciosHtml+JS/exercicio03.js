/*
3.Crie uma página que gere um número aleatório entre 1 e 100 e permita que o usuário tente adivinhar. 
Informe se a tentativa é maior, menor ou igual ao número gerado.
*/

var numeroGerado = Math.floor(Math.random() * 100) + 1;
console.log(numeroGerado);

var getTentativa = () => {
    return document.getElementById('numero').value;
}

var verificarTentativa = () => {
    let tentativa = parseInt(getTentativa());

    if(tentativa == numeroGerado) {
        document.getElementById('resultado').innerHTML = 'Parabéns! Você acertou!';
    }
    else if(tentativa > numeroGerado) {
        document.getElementById('resultado').innerHTML = 'Tente um número menor!';
    }
    else {
        document.getElementById('resultado').innerHTML = 'Tente um número maior!';
    }
}

