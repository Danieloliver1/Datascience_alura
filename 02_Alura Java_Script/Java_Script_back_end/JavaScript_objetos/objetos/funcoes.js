const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["11155554444", "22225553554"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insufficient");
    } else {
      this.saldo -= valor;
      console.log(`pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
  mudarNome: function (novoNome) {
    this.nome = novoNome;
    //return this.nome;
    console.log(`${this.nome}`);
  },
};

console.log(cliente);

cliente.efetuaPagamento(50);

console.log(cliente);

cliente.mudarNome("Daniel");

console.log(cliente);
