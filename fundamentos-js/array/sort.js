
/*
    O método sort() ordena os elementos de um array no próprio local e retorna o array ordenado. 
    Por padrão, ele ordena os elementos como strings em ordem alfabética.
    
    Sintaxe básica: array.sort([compareFunction])
*/



// Ordenando strings:
const fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']

// Aviso: Números não são ordenados corretamente sem uma função de comparação:
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // [1, 100000, 21, 30, 4] (incorrect)

/*
 * A função de comparação retorna:
 * Valor negativo se a deve vir antes de b
 * Valor positivo se b deve vir antes de a
 * Zero se forem iguais
*/

// Ordenando números corretamente:

// Ordem crescente
numbers.sort((a, b) => a - b);

// Ordem decrescente
numbers.sort((a, b) => b - a);

// Ordenando objetos:
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

// Ordenar por idade
people.sort((a, b) => a.age - b.age);

// Ordenar por nome em ordem alfabética
people.sort((a, b) => a.name.localeCompare(b.name));


const users = [{age: 40}, {age: 25}, {age: 33}];
users.sort((a, b) => a.age - b.age); // ordem crescente.
users.sort((a, b) => b.age - a.age); // ordem decrescente.

