/*
Crie uma função chamada formatNames que recebe um array de nomes (strings) como argumento. 
A função deve usar o método map() para transformar cada nome de modo que ele fique em title case (a primeira letra de cada palavra em maiúscula, e o restante em minúscula). 
Retorne o novo array de nomes formatados.
*/

function formatNames(names) {

    let result = names.map(name => {
        return name
            .toLowerCase()                                      // [ 'john doe', 'mary jane', 'peter parker' ]
            .split(' ')                                         // [ [ 'john', 'doe' ], [ 'mary', 'jane' ], [ 'peter', 'parker' ] ]
            .map(word => word[0].toUpperCase() + word.slice(1)) // [ [ 'John', 'Doe' ], [ 'Mary', 'Jane' ], [ 'Peter', 'Parker' ] ]
            .join(' ')                                          // [ 'John Doe', 'Mary Jane', 'Peter Parker' ]
    })

    return result
}

let names, result

names = ["john doe", "MARY JANE", "peter parker"];
console.log(names);
result = formatNames(names);
console.log(result);

/**
names = ["tOM hAnKs", "jULiA rOBerTs", "BRAD PITT", "aNgeLiNa JOLIE"];
console.log(names);
result = formatNames(names);
console.log(result);

names = ["dr. strange", "CAPTAIN AMERICA", "black WIDOW", "iron MAN", "THOR odinson"];
console.log(names);
result = formatNames(names);
console.log(result);
*/