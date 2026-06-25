/*
Recapitulação - O Mestre do Encadeamento

Crie uma função chamada chainMaster que recebe um array de números como argumento. 
A função deve usar métodos de array encadeados para realizar as seguintes operações:

1. Manter apenas os números que são divisíveis por 3
2. Multiplicar cada número restante por 2
3. Ordenar o array resultante em ordem decrescente
4. Retornar um objeto com as seguintes propriedades:
    transformedArray: O array final após todas as operações
    sum: A soma de todos os números no array final
    average: A média de todos os números no array final, arredondada para duas casas decimais

Use os métodos de array apropriados (filter, map, sort, reduce) em sua solução.

DE: 
[1, 2, 3, 4, 5, 6, 9, 12]

PARA:
{ transformedArray: [ 24, 18, 12, 6 ], sum: 60, average: 15 }

*/

function chainMaster(numbers) {

    const result = numbers
        .filter(n => n % 3 === 0)
        .map(n => n * 2)
        .sort((a, b) => b - a)

    const sum = result.reduce((acc, num) => acc + num, 0);
    const average = (sum / result.length)

    return {
        transformedArray: result,
        sum: sum,
        average: average
    };
}

let array, result

array = [1, 2, 3, 4, 5, 6, 9, 12];
result = chainMaster(array);
console.log(result);

