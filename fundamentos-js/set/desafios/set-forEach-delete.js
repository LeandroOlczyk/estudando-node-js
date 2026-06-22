/*
DESAFIO: 
Crie uma função chamada removeMultiples que recebe dois parâmetros: um array de números e um número n. 
A função deve converter o array em um Set e remover todos os múltiplos de n do Set (incluindo o próprio n, caso ele esteja no Set). 
Por fim, converta o Set em um array e retorne-o.

Múltiplos são os números que você obtém ao multiplicar um determinado número (n) por todos os números inteiros (1, 2, 3, etc.).
Por exemplo, se n = 3:
Os múltiplos de 3 são: 3, 6, 9, 12, 15, 18, 21, 24, e assim por diante...
*/

function removeMultiples(arr, n) {

    let newArray = new Set(arr);

    newArray.forEach(element => {

        if (element % n === 0) {
            newArray.delete(element);
        };

    });

    return Array.from(newArray)
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 2;

let retorno = removeMultiples(arr, n);
console.log(`Array Original: ${arr}`)
console.log(`Array Filtrado: ${retorno}`);
