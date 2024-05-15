const livros = require("./listaLivros");

//                    0   1  2  3  4  5
const precosLivros = [25, 15, 30, 50, 45, 20];

function ordenacao(precosLivros) {
  let maisBarato = 0;

  for (let atual = 0; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
      maisBarato = atual;
    }
  }
  console.log(`O livro mais varato custa ${precosLivros[maisBarato]}`);
}

//ordenacao(precosLivros);

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

//console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);

module.exports = menorValor;
