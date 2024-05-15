// // == (comparação implícita)

// const numero = 5;
// const texto = "5";

// console.log(numero == texto)

// // == (comparação explícita)

// const numero2 = 5;
// const texto2 = "5";

// console.log(numero2 === texto2)

// //typeof
// console.log(typeof numero)
// console.log(typeof texto)

// // == só compara o valor
// // ===compara o valor e o tipo de dado

// // conversão explícita

// Number()
// String()

// const idadeMinima = 18;
// const idadeCliente = 19;

// if(idadeCliente >= idadeMinima){
//     console.log('cerveja')
// }else{
//     console.log('suco')
// }

//operador ternario.

//condição________________________________//if true_____//false else
// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");

//template
// const nome  = 'Ju'
// const idade = 2021 -1981;
// const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
// console.log(apresentacao)

// const apresentacao2 = `Meu nome é ${nome} , minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`
// console.log(apresentacao2)

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: Posso beber uma bebida ${
  idade >= 18 ? bebidaMaior : bebidaMenor
}`;

console.log(pedido);
