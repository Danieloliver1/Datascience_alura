

//removendo duplicados

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];


//significa novo, criando um novo
// set é uma classe que tem por objetivo de uma lista porem tem uns elementos a mais por exemploao valores de uma lista não pode se repetir
const meuSet = new Set(nomes);

console.log(meuSet)

//passadno para uma lista 
const nomesAtualizados = [...meuSet]
//const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)


//documentação
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set