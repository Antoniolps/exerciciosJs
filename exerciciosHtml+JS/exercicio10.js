/**
10. Crie uma página que converta um valor de decimal para binário.
*/

function decimalToBinary() {
    let decimal = parseInt(document.getElementById('decimal').value);
    let binary = decimal.toString(2);

    document.getElementById('result').innerHTML = `O valor ${decimal} em binário é ${binary}`;
}