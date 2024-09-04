const numerospares = [2, 4, 6];
const numerosimpares = [1, 3, 5];

//para ficar só uma array só
const numeros = [...numerospares, ...numerosimpares];
console.log(numeros);

// array de array
const n1 = 3;
const n2 = 4;
const numeros_array = [n1, n2];
console.log(numeros_array);

const [num1, num2] = [1, 2];
console.log(num1, num2);

const [nome1 = "Ju"] = [1];
console.log(nome1);

const pessoa = {
  nome: "Ju",
  idade: 25,
};

const pessoacomtelefone = { ...pessoa, telefone: 12345678 };
console.log(pessoa, pessoacomtelefone);

//const nome = pessoa.nome
//console.log(nome)

//aqui pegou a variavel nome e atribuiu o valor nome que estava na array
const { nome } = pessoa;
console.log(nome);

const { idade } = pessoa;
console.log(idade);

//especificando dados na função
function imprimedados(dados) {
  const { nome, idade } = dados;
  console.log(nome, idade);
}

//a mesma logica da função mais no modo mais facil e otimizado
function imprimedados_2({ nome, idade }) {
  console.log(nome, idade);
}

imprimedados(pessoa);
imprimedados_2(pessoa);
