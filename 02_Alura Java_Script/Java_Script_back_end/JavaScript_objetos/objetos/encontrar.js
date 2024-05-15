const clientes = require("./clientes.json");

//console.log(clientes)

function encontrar(lista, chave, valor) {
  //Para que o método saiba o que buscar dentro da lista, vamos passar um item para uma função flecha (=>) que vai comparar se o item dentro da chave é igual ao valor que buscamos.
  //return lista.find((item) =>item[chave] === valor);
  //.include retorna tudo ate mesmo o que ta dentro de uma lista contida na array
  return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Oralle");
const encontrado2 = encontrar(clientes, "telefone", "4733865848");
console.log(encontrado2);
