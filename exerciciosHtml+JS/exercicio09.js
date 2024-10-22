/*
9. Crie uma página que receba um texto e conte o número de vogais e consoantes.
*/

function contarVogaisConsoantes() {
    let texto = document.getElementById("text").value;
    let vogais = 0;
    let consoantes = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].match(/[aeiouáéíóúâêôàãõ]/gi)) {
            vogais++;
        } else if (texto[i].match(/[bcdfghjklmnpqrstvwxyz]/gi)) {
            consoantes++;
        }
    }

    document.getElementById("resultado").innerHTML = `Vogais: ${vogais} <br> Consoantes: ${consoantes}`;
}