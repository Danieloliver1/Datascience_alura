// caminho do arquivo cliente json para exibir
const dados = require("./cliente.json");

console.log(dados)

console.log(typeof dados)


const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString)
console.log(typeof clienteEmString)


//não é objeto e sim uma string
console.log(clienteEmString.nome)

// trasnformando string em um json
const objetoCliente =JSON.parse(clienteEmString)

console.log(objetoCliente)