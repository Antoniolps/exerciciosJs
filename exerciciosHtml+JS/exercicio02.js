/*
2.Crie uma página que verifique se um número é primo. O usuário deve inserir um número e a página deve exibir se ele é primo ou não.
*/

var getNumero = () => {
    return document.getElementById('numero').value;
}

var verificarPrimo = () => {
    let numero = parseInt(getNumero());
    let primo = true;

    for(let i = 2; i < numero; i++) {
        if(numero % i == 0) {
            primo = false;
            break;
        }
    }

    if(primo) {
        document.getElementById('resultado').innerHTML = 'É primo!';
    }
    else {
        document.getElementById('resultado').innerHTML = 'Não é primo!';
    }
}
