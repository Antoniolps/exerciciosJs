/*
25 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função 
toUpperCase() para converter as strings.
*/

var nomes = ['ana', 'maria', 'josé', 'pedro', 'joão'];

var nomesMaiusculos = (nomes) => {
   let nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());

   return nomesMaiusculos;
};

console.log(nomesMaiusculos(nomes));
