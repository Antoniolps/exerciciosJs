/*
Crie uma página que calcule a média de quatro notas inseridas pelo usuário. 
Exiba se o aluno foi aprovado (média >= 7) ou reprovado (média < 7).
 */

var notas = [];
var qtdNotas = 4;

var getNotas = () => {
    for (let i = 1; i <= qtdNotas; i++) {
        notas.push(parseFloat(getNota(i).value));
    }  
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

    let media = soma / qtdNotas;

    if(media >= 7) {
        document.getElementById('resultado').innerHTML = `Aprovado! Média: ${media}`;
    }
    else {
        document.getElementById('resultado').innerHTML = `Reprovado! Média: ${media}`;
    }

    notas = [];
}

var limparCampos = () => {
    for (let i = 1; i <= qtdNotas; i++) {
        getNota(i).value = '';
    }

    document.getElementById('resultado').innerHTML = '';
}
