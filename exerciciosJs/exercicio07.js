/*
7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples 
para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. 
O script deve realizar as seguintes tarefas:

nome: O nome do aluno.
cpf: O CPF do aluno.
cidade: A cidade onde o aluno mora.
notas: Um array com 4 notas do aluno. 

Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. 
Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, 
convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). 
Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota 
aleatória do array. Utilize template literals para a concatenação de strings.
 */

const aluno = {
    nome: 'Antonio',
    cpf: '123.456.789-10',
    cidade: 'João Pessoa',
    notas: [10.0, 6.8, 7.5, 8.0]
};

console.log(`Nome: ${aluno.nome}`);
console.log(`CPF: ${aluno.cpf}`);
console.log(`Cidade: ${aluno.cidade}`);

aluno.notas.forEach((nota,index) => console.log(`Nota ${index + 1}: ${nota}`));

let media = aluno.notas.reduce((acc, nota) => acc + nota) / aluno.notas.length;

console.log(`Média: ${media.toFixed(2)}`);

let notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)] * 10;

console.log(`Nota aleatória convertida: ${notaAleatoria}`);
