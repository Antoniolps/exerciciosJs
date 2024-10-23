/*
15.Crie uma página que verifique se um número é perfeito (igual à soma de seus divisores próprios).
*/

const verificarPerfeito = () => {
    let numero = parseInt(document.getElementById('numero').value);
    let soma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }
    if (soma === numero) {
        document.getElementById('resultado').innerHTML = `${numero} é um número perfeito!`;
    } else {
        document.getElementById('resultado').innerHTML = `${numero} não é um número perfeito!`;
    }
}