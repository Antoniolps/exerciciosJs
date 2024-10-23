/*
11.Crie uma página que calcule a sequência de Fibonacci até um número N inserido pelo usuário.
*/
calcularFibonacci = () => {
    let n = parseInt(document.getElementById('n').value);
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.getElementById('resultado').innerHTML = fibonacci;
}