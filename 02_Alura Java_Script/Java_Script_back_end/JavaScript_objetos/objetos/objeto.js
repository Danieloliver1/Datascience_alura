const listaCPFs = [1111, 2222, 3333];

const informacoesPessoa = [
  "nome",
  "jose",
  "idade",
  "",
  32,
  "cpf",
  "11112222333",
];

//console.log(informacoesPessoa[1]);


const objetoPessoa = {
  nome: 'jose',
  idade: 32,
  
};

// como acessar as propriedades do objetos

const cliente = {nome:'Andre',idade:32,cpf:'12312222333',email:'andre@gmail.com.br'}


console.log(`O nome do cliente: ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`)

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);