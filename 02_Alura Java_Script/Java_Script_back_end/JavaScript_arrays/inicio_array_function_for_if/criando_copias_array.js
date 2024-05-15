// Desafio 17: criando cópias
// Considere o seguinte array de notas:
//     const notas = [7, 7, 8, 9];
// Crie um novo array com a nota 10 a mais, sem alterar o array original.
// Essa é uma situação um pouco nova, é até mais difícil do que parece.
// No VS Code, criaremos um arquivo chamado copiando-array.js. Primeiro, vamos inserir a lista:


const notas = [7, 7, 8, 9];


// = o javascript entende que é a mesma array ou seja o mesmo endereço da array.
// const novasNotas = notas;

// para atribuir somente valores na nova array
const novasNotas = [...notas];

novasNotas.push(10)

//ou
//const novasNotas = [...notas, 10];

console.log(`A novas notas são ${novasNotas}`)

console.log(`A notas originais são ${notas}`)


// No vídeo anterior, você viu como clonar um array de forma apropriada no JavaScript. 
// Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript 
// entenda que é como se eles fossem o mesmo array. 
// Para evitar esse comportamento,devemos criar um array totalmente novo, 
// com a ajuda do spread operator ... (ou operador de espalhamento).