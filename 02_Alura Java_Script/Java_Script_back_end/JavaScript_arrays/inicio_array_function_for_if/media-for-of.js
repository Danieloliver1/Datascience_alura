const notas = [10, 6.5, 8, 7.5];

let somadasnotas = 0;
for (let nota of notas) {
  //console.log(nota);
  somadasnotas += nota;
}

console.log(somadasnotas);

const media = somadasnotas / notas.length;
console.log(`A Media das notas: ${media}`);

var valor = 0;
var valortotal = 0;
for (let i = 0; i < notas.length; i++) {
  valor = notas[i];
  valortotal += valor;
}
//console.log(valortotal);

