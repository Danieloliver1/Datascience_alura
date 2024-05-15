//tipo de dado
//booleanos

//conversão implícita
const numero = 456;
const numerosString = "456";

// comparação ===
// compara valor tipo ==
console.log(numero == numerosString);
console.log(numero + numerosString);

//Number() -> transformando valor em número
//String()
console.log(numero + Number(numerosString));

//conversão explícita
const numerosString2 = Number("456");

console.log(numero + numerosString2);

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
