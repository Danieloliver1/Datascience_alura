// const numeros = [100,200,300,400,500,600,700,800,900];
// // Primeira expressão: é execultada apenas uma única ve\
// // Segunda expressão: condição de execução
// // Terceira expressão: é execultada sempre ao final do bloco

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
    //console.log(notasGerais[i][j]);
  }
}

console.log(media)
