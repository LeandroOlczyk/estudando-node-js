// Executar no terminal com o comando: node acessando-objeto.js

//Declarando um objeto.
const personagem = {
    nome: 'Leandro',
    nivel: '30',
    classe: 'Infantaria',
    especial: 'Tiro de Precisão',
    arma: {
        primaria:'Rifle de Precisão',
        secundaria:'Pistola 9mm',
        granada:'Fragmentação',
        faca:'Karambit'
    },
}

// Função que será utilizada no exemplo de notação com ponto.
function exibeInfoPersonagem(objPersonagem, infoPersonagem) {
    return objPersonagem[infoPersonagem];
}

// Inserindo nova propriedade no objeto.
personagem.status = 'habilitado'

// Exibindo todos os dados do objeto.
console.log(personagem)

// Exibir dados com notação de colchetes.
console.log("\n 1-Exibindo dados do objeto com notação de colchetes:")
console.log(personagem['nome']);
console.log(personagem['nivel']);
console.log(personagem['classe']);
console.log(personagem['especial']);

// Exibir dados com notação de Ponto
console.log("\n 2-Exibindo dados do objeto com notação de ponto:")
console.log(exibeInfoPersonagem(personagem,'nome'));
console.log(exibeInfoPersonagem(personagem, 'nivel'))
console.log(exibeInfoPersonagem(personagem, 'classe'))
console.log(exibeInfoPersonagem(personagem, 'especial'))

// Caso o JS não encontre uma propriedade, o retorno será 'undefined'
console.log("\n 3-Exibindo dados de uma propriedade não definida:")
console.log(personagem['jogador'])

// Deletando uma propriedade (3 formas).
delete personagem.arma.secundaria
delete personagem.arma['primaria']
const isExcluido = delete personagem.arma.granada
console.log("isExcluido: ",isExcluido)

// Exibe o objeto para verificar as exclusões
console.log(personagem)

// Exibe apenas parte do conteúdo (extract do caché)
console.log(personagem.classe.substring(0,6))