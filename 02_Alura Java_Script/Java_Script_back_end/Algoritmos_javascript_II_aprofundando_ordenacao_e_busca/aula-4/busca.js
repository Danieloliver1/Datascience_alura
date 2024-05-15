const listaLivros = require('./arrayOrdenado.js')



function busca(array, de, ate, valorBuscado){
    console.log('de, ate', de, ate)
    const meio = Math.floor((de + ate) /2);
    const atual = array[meio];

    if(de > ate){
        return -1;
    }

    if (valorBuscado === atual.preco){
        return meio;
    }
    if (valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado);

    }

    if (valorBuscado > atual.preco){
        return busca(array,  meio + 1, ate, valorBuscado);

    }

}

console.log(busca(listaLivros, 0, listaLivros.length - 1,60))





// A pilha de chamadas

// Em programação, uma pilha é uma estrutura de dados onde o último item adicionado é o primeiro a ser removido - como uma pilha de livros no mundo real, por exemplo. Também nos referimos como pilha (ou stack) a estrutura onde estão “empilhados” os processos que estão sendo executados em um programa.

// Nem todo interpretador ou linguagem de programação lida da mesma forma com os processos que devem ser executados por um programa. O NodeJS trabalha com o paradigma de programação orientada a eventos (event driven programming), e o gerenciamento dos processos ocorre através do que chamamos de loop de eventos.

// Não vamos entrar em detalhes aqui sobre como ocorrem a entrada e a saída de processos deste loop e a forma como o Node trabalha com threads e programação assíncrona - são assuntos complexos o suficiente para terem seus próprios cursos. Porém, vale mencionar aqui que, assim como em outras linguagens de programação, o JavaScript também trabalha com pilhas de chamadas. No NodeJS, esta pilha faz parte da estrutura do loop de eventos; quando uma função é chamada por um programa ela entra na stack, ou seja, na pilha de execução, onde apenas um processo é executado por vez e o próximo processo só é executado após a finalização do processo atual.

// Esta pilha tem uma quantidade limitada de processos que podem ser empilhados (o que depende de muitos fatores, como memória disponível, arquitetura, etc); caso o interpretador não consiga limpar a pilha, ou seja, executar e finalizar os processos/funções que estão empilhados, ao atingir o limite o programa cai no chamado erro de estouro de pilha, também chamado de stack overflow (daí o nome do famoso fórum de programação).

// Um dos motivos mais comuns para o estouro de pilha são justamente as chamadas recursivas onde o caso base (como vimos na atividade “Para Saber Mais” da aula 2) não existe ou não foi definido da forma correta. Sem o caso base, as funções recursivas não param de ser chamadas e vão se empilhando na pilha de chamadas, até que não haja mais recursos para processar o programa.

// No caso do exemplo visto durante a aula, o NodeJS retorna o erro RangeError: Maximum call stack size exceeded, ou “tamanho máximo da pilha de chamadas excedido” e encerra a execução.

// Por isso, é muito importante sempre testar as funções recursivas e definir quando interromper a recursividade.