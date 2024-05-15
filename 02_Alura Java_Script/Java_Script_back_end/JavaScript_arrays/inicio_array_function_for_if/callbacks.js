const nomes = ["Evaldo", "Mari", "Vamis"];

nomes.forEach(function (nome) {
  console.log(nome);
});

//Arrow-function 
nomes.forEach((nome) => {
  console.log(nome);
});


// usando foreach com função externa 
function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);

