/*
6. Crie uma página que receba uma lista de nomes e exiba o nome mais longo e o mais curto.
*/

let nomes = [];
const container = document.getElementById("container-nomes");
const ul = document.createElement('ul');

function adicionarNome() {
    let nome = document.getElementById("nome").value;
    nomes.push(nome);

    exibirNomes(nome);
    document.getElementById("nome").value = "";
}

function exibirNomes(nome) {
    const li = document.createElement('li');  
    li.textContent = nome;                    
    ul.appendChild(li); 
    
    container.appendChild(ul);
}


//TODO: Criar um validador de nomes com tamanho igual
function compararNomes(){
    let nomeCurto = nomes.pop();
    let nomeLongo = nomes.pop();

    nomes.map(nome => { 
        if(nomeCurto.length < nome.length){
            nomeCurto = nome;
        }else if(nomeLongo.length > nome.length){
            nomeLongo = nome;
        }
    });

    document.getElementById("nome-curto").innerHTML = nomeCurto;
    document.getElementById("nome-longo").innerHTML = nomeLongo;
}

