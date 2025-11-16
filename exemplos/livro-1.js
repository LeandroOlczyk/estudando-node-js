/* 
[JavaScript: Conhecendo onbjetos] https://cursos.alura.com.br/course/javascript-conhecendo-objetos/task/150900

1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. 
O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.

No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

*/

function criarLivro(titulo,autor,anoPublicacao,genero) {
    return {
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero:genero
    };
}

const livro = criarLivro("Codigo Limpo","Robert C. Martin","2008","Software")

console.log("Titulo: "+livro.titulo) // Notação de Ponto
console.log("Autor: "+livro['autor']) // Notação de Colchetes

console.log(livro)