const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["11155554444", "22225553554"],
};

cliente.enderecos = [
  {
    rua: "R. joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// você pode usar essa forma tambem
//ligaParaCliente(...cliente.telefone);


//maneira de chamar array.
const encomenda = {
  destinatario: cliente.nome,
  rua: cliente.enderecos[0].rua,
  numero: cliente.enderecos[0].numero,
   //...cliente.enderecos[0].complemento,
   ...cliente.enderecos[0],
  endereco: cliente.enderecos[0],
};

console.log(encomenda);
