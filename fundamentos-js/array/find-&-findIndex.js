
/*    Os Métodos Find & FindIndex    */

//O método find() retorna o primeiro elemento que satisfaz uma função de teste, ou undefined se nenhum for encontrado:
const arrNumbers = [5, 12, 8, 130, 44];
const found = arrNumbers.find(num => num > 10);
console.log(found); // 12

// O método findIndex() retorna o índice do primeiro elemento correspondente, ou -1 se nenhum for encontrado:
const numbers = [5, 12, 8, 130, 44];
const foundIndex = numbers.findIndex(num => num > 10);
console.log(foundIndex); // 1

// Encontrando objetos em arrays:
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'oranges', quantity: 5}
];

const result = inventory.find(item => item.name === 'bananas');
// {name: 'bananas', quantity: 0}

const index = inventory.findIndex(item => item.name === 'bananas');
// 1

