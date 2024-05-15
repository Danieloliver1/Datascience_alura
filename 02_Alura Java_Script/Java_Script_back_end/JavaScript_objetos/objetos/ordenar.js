const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
  //sort ordenar
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });
  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);


// reverso
// Após a ordenação da lista, podemos chamar o método reverse() na nova lista e obter uma lista que foi reorganizada de trás pra frente, com a seguinte implementação:

// const ordenadoNome = ordenar(clientes, "nome");
// const ordenadoInverso = ordenadoNome.reverse();

// // Podemos adicionar um parâmetro opcional na função ordenar(),com a preferência de ordenação, e conseguimos criar uma condicional após a ordenação que verifica esse parâmetro e usa o método reverse(). Ao fazer isso, o código ficaria dessa forma:

// function ordenar(lista, propriedade, ordem = "crescente") {
//   const resultado = lista.sort((a, b) => {
//     if (a[propriedade] < b[propriedade]) {
//       return -1;
//     }
//     if (a[propriedade] > b[propriedade]) {
//       return 1;
//     }
//     return 0;
//   });

//   if (ordem !== "crescente") {
//     resultado.reverse();
//   }

//   return resultado;
// }