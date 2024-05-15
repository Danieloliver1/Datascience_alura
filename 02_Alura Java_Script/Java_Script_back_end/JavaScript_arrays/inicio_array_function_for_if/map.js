
const notas = [10, 9.5,8,7,6]


// map recebe tambem uma função callbacks, não altera a array principal 
notas.map((nota) =>{ return nota + 1})


// criando a nova array para receber o map
const notasAtualizada = notas.map((nota) =>{ return nota + 1})

console.log(notas);
console.log(notasAtualizada);

// usando operador ternário
const notasAtualizada2 = notas.map((nota) =>{return nota + 1 >=10 ? 10 : nota +1})

console.log(notasAtualizada2);
