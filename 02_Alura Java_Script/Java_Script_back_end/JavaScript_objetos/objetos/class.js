// const Livro = function (nome, editora, paginas) {
// gNome = nome,
// gEditora = editora,
// gPaginas = paginas

// this.getNome = function(){
//     return gNome
// }
// this.getEditora = function(){
//     return gEditora
// }
// this.getPaginas = function(){
//     return gPaginas
// }
// };

// const GrapgQL = new Livro("GrapgQL", "Casa do Código",143)

// console.log(GrapgQL.getNome())
// console.log(GrapgQL.getEditora())
// console.log(GrapgQL.getPaginas())

// //prototype

// const nome = "Alura"

// const temp = new String(nome)

// //toString() array de carateres
// console.log(temp.toString())

//////////////////////////////////classes

class Livro {
  constructor(nome, editora, paginas) {
    this.nome = nome;
    this.editora = editora;
    this.paginas = paginas;
  }

  anunciarTitulo() {
    console.log(`Título: ${this.nome}`);
  }

  descreverTitulo() {
    console.log(
      `${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`
    );
  }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 325);

NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();

//console.log(typeof Livro);

//açúcar sintático

//herança

class LivroColecao extends Livro {
  constructor(nome, nomeColecao) {
    super(nome);
    this.nomeColecao = nomeColecao;
  }
  decreverColecao() {
    console.log(
      `O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`
    );
  }
}

const LogicaDeProgramacao = new LivroColecao(
  "Lógica de Programação",
  "Comece a Programar"
);

LogicaDeProgramacao.decreverColecao();
