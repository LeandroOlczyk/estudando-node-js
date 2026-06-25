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