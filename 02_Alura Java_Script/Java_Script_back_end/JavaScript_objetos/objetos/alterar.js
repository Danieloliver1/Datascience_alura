// moldificando objeto
const pessoa = {
  nome: "Luma",
  profissão: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 222333444";

console.log(pessoa.telefone);

console.log(pessoa);

pessoa.nome = "Luma Silva";

console.log(pessoa.nome);

console.log(pessoa);

//error
// const novapessoa = {
//   nome: "Silva",
// };

// pessoa = novapessoa;

pessoa.idade = 32;

//adicionando chave e valor
console.log(pessoa.idade);
console.log(pessoa);

//deletando dados
delete pessoa.idade;

console.log(pessoa.idade); //undefined
console.log(pessoa);
