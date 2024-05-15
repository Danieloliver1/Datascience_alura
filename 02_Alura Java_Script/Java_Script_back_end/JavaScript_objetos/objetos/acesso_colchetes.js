// como acessar as propriedades do objetos

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "12312222333",
  email: "andre@gmail.com.br",
};

console.log(
  `O nome do cliente: ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

// lista de chaves
const chaves = ["nome", "idade", "cpf", "email", "altura"];

// exemplo de como usar uma chave sem saber qual tipo de chave
chaves.forEach((chave) =>
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
);
