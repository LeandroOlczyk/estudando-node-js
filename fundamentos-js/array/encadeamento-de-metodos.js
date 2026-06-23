/*
 Crie uma função chamada processFruits que recebe um array de objetos de frutas. Cada objeto de fruta possui as propriedades name (string) e quantity (number).
 
 A função deve usar métodos de array encadeados para:
    1-Filtrar as frutas com quantidade igual a 0
    2-Transformar cada nome de fruta para letras maiúsculas
    3-Criar uma string que liste todas as frutas com suas quantidades como "APPLE: 5, BANANA: 3"
 
 Um lembrete rápido:
    Você pode usar a função .join(", ") para converter um array de strings em uma única string.
 
 É possível encadear até mesmo a função .join():
 
 arr.filter(...)
    .map(...)
    .join(...)

*/

function processFruits(fruits) {
    return fruits
    .filter(fruit => fruit.quantity > 0)                              // [ { name: 'apple', quantity: 5 }, { name: 'banana', quantity: 3 } ]
    .map(fruit => `${fruit.name.toUpperCase()}: ${fruit.quantity}`)   // [ 'APPLE: 5', 'BANANA: 3' ]
    .join(', ')                                                       // APPLE: 5, BANANA: 3
}


let array, result
array = [{ name: "apple", quantity: 5 }, { name: "banana", quantity: 3 }, { name: "orange", quantity: 0 }]
result = processFruits(array)
console.log(result) // APPLE: 5, BANANA: 3


array=[{name: "dragon fruit", quantity: 2}, {name: "kiwi", quantity: 0}, {name: "mango", quantity: 4}, {name: "papaya", quantity: 0}]
result = processFruits(array)
console.log(result) // DRAGON FRUIT: 2, MANGO: 4



