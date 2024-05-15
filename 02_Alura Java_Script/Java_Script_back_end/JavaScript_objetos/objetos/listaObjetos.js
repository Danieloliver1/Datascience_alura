const cliente ={
    nome: 'Joao',
    idade: 24,
    email:'joao@firma.com',
    telefone: ['11155554444','22225553554'],
};




cliente.enderecos =[ {
    rua:'R. joseph Climber',
    numero:1337,
    apartamento:true,
    complemento: 'ap 934',
}];

cliente.enderecos.push({
    rua:'R. Joseph Ladder',
    numero: 404,
    apartamento: false,

});


const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);


const listanumero = cliente.enderecos.filter(
    (endereco) => endereco.numero === 404
);


console.log(listaApenasApartamentos);
console.log(listanumero);

