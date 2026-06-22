/*
Crie uma função chamada tropicalFruitSalad que recebe fruits como seu parâmetro.

Você é um chef em uma ilha tropical conhecido por reinventar a culinária tradicional. Sua tarefa é preparar uma salada de frutas tropicais única usando um array de frutas frescas. Você usará fatiamento básico de array para selecionar frutas e operadores de incremento/decremento para ajustar seus nomes, simulando o processo de preparação.
A função deve realizar as seguintes operações:

1 - Remova as primeiras e últimas frutas do array (representando a remoção da camada externa).
2 - Para cada nome de fruta com índice par (0, 2, 4, ...), adicione 'y' no final (para representar o adoçamento).
3 - Para cada nome de fruta com índice ímpar (1, 3, 5, ...), remova o último caractere (para representar o picar).
4 - Finalmente, inverta a ordem das frutas restantes (para misturar a salada).

Parâmetros:
fruits (array): Um array de nomes de frutas (strings).
A função retorna um array de strings representando a salada de frutas tropicais preparada.

Nota: Se, após remover as primeiras e últimas frutas, o array ficar vazio, retorne um array vazio.
*/

function tropicalFruitSalad(fruits) {

    fruits.shift(); // remove o primeiro elemento
    fruits.pop();   // remove o último elemento

    let newArray = [];

    for (let i = fruits.length - 1; i >= 0; i--) {

        let fruitName = fruits[i];

        if (i % 2 === 0) {
            fruitName = fruitName + 'y';
        };
        if (i % 2 !== 0) {
            fruitName = fruitName.slice(0, -1);
        };

        newArray.push(fruitName);
    };

    return newArray;
}

let fruits, result

fruits = ['Mango', 'Pineapple', 'Papaya', 'Coconut', 'Banana']
result = tropicalFruitSalad(fruits)
console.log(result)


fruits = ['Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Cranberry']
result = tropicalFruitSalad(fruits)
console.log(result)

fruits = ['Guava', 'Lychee', 'Passionfruit', 'Dragonfruit', 'Starfruit', 'Durian']
result = tropicalFruitSalad(fruits)
console.log(result)