/*
[JavaScript: Conhecendo onbjetos] https://cursos.alura.com.br/course/javascript-conhecendo-objetos/task/150900

2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. 
Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/

function criarLivro(titulo,autor,anoPublicacao,genero,idadePublicacao) {
    return{
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero:genero,
        idadePublicacao:idadePublicacao
    }
}

let titulo="Xadrez"
let autor="James Eade"
let anoPublicacao="2010"
let genero="Jogos"

let anoAtual=new Date().getFullYear();
let idadePublicacao=(anoAtual-anoPublicacao);

const livro=criarLivro(titulo,autor,anoPublicacao,genero,idadePublicacao);

const mostrarDetalhes =`Detalhes do Livro:
Titulo: ${livro.titulo}.
Autor: ${livro.autor}.
Ano de Publicacao: ${livro.anoPublicacao}.
Genero: ${livro.genero}.
Este Livro foi publicado a ${livro.idadePublicacao} anos.`;

console.log(mostrarDetalhes);