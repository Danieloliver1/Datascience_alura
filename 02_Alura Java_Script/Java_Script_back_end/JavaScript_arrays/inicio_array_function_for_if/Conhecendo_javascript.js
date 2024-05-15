//Tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica);


const numeroPontoFlutuante = 3.3;

// posso colocar um ponto sem colocar o zero ele entende que � decimal
const segundoPontoFlutuante = .5;

const NovaOperacao = numeroPontoFlutuante + segundoPontoFlutuante

console.log(NovaOperacao)

//NaN -> Not A Number (N�o � n�mero)
const alura = "Alura";
console.log(alura * primeiroNumero)

var a = 10;
var b = 0;
console.log(a/b) // Infinity


const texto1 = 'Olá mundo!';
const senha = "senhasSuperSegura456";
const StringDeNumeros ="34567";
const citacao = 'O Leo disse "oi!"';
console.log(citacao)

// concatenação(+)
console.log(texto1 +" "+ senha+citacao)

const citacao2 = 'Meu nome é ';
const meuNome = "Leonardo";
console.log(citacao2 + meuNome)


const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres

// Bolleano
const primeiroNumero2 = 5;
const segundoNumero2 = 10;
let cadastroAtivado = true;

console.log('resultado',primeiroNumero2 === segundoNumero2);

const texto5 = "Alura";
const texto6 = "alura";

console.log(texto5 === texto6)

//template string ou template literal, forma de escrever string
