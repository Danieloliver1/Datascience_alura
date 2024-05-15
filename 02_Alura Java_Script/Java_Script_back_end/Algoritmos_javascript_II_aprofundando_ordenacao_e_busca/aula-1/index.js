const { edFolha, edGalho } = require("./arrays");

function juntaListas(lista1, lista2) {
  let listaFinal = [];

  // criando lista de pocisão
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  // controla a pocisão da lista final
  let atual = 0;

  // criando uma lógica de
  while (
    posicaoAtualLista1 < lista1.length &&
    posicaoAtualLista2 < lista2.length
  ) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista1[posicaoAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      //andando para o proximo
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }
    atual++;
  }

  // Quando a lista tiver dados só ela
  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  // Quando a lista tiver dados só ela
  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }

  return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));
