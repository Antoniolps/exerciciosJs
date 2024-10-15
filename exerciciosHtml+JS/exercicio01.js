/*
Crie uma página que calcule a média de quatro notas inseridas pelo usuário. 
Exiba se o aluno foi aprovado (média >= 7) ou reprovado (média < 7).
 */

var notas = [];

var getNotas = () => {
    notas.push(parseFloat(getNota(1).value));
    notas.push(parseFloat(getNota(2).value));
    notas.push(parseFloat(getNota(3).value));
    notas.push(parseFloat(getNota(4).value));
}

var getNota = (i) => {
    return document.getElementById(`nota${i}`);
}

var calcularMedia = () => {
    let soma = 0;

    getNotas();
    
    soma = notas.reduce((acc, nota) => {
        return acc + nota;
    });

    let media = soma / 4;

    if(media >= 7) {
        document.getElementById('resultado').innerHTML = `Aprovado! Média: ${media}`;
    }
    else {
        document.getElementById('resultado').innerHTML = `Reprovado! Média: ${media}`;
    }

    notas = [];
}

var limparCampos = () => {
    getNota(1).value = '';
    getNota(2).value = '';
    getNota(3).value = '';
    getNota(4).value = '';

    document.getElementById('resultado').innerHTML = '';
}
