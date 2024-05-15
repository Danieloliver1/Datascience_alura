const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];

const medias  = [7,4.5,8,7.5];


//usando filter

//retorna uma nova array 


// retorna booleano
// _ é um paramentro que não precisa ser utilizado então é um paramentro anonimo. 
//porem ele é necessario para poder utilizar o segundo parametro que é o indice.
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);
