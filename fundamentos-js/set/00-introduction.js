/* 

Um Set é um objeto JavaScript nativo que armazena valores únicos de qualquer tipo. Cada valor em um Set deve ser único.

Criar um Set:
const mySet = new Set();

Inicializar um Set com um array:
const mySet = new Set([1, 2, 3, 4, 5]);

Converter um Set de volta para um array:
const myArr = Array.from(mySet);

*/

function uniqueElements(arr) {
  
  const newUniqueArray = new Set(arr)
  const finalArray = Array.from(newUniqueArray);

  return finalArray
}

let arr=[1,1,2,2,3,3,4,5,5,5]
console.log(uniqueElements(arr))


// ================ ITERANDO SOBRE SETS ================
// Sets em JavaScript são iteráveis e podem ser percorridos de várias maneiras: 

const mySet = new Set([1, 2, 3, 4, 5]);

// Usando o loop for...of:
for (const item of mySet) {
  console.log(item);
}

// Usando o método forEach:
mySet.forEach(item => {
  console.log(item);
});

// Convertendo para array e usando métodos de array:
const myArray = Array.from(mySet);

myArray.forEach(item => {
  console.log(item);
});

/*
Por que converter um Set para um array antes de iterar?
Arrays possuem métodos como map, filter e reduce que Sets não possuem, tornando a conversão útil para transformações.
*/


// ================ ADICIONANDO UM ELEMENTO ================
// Para adicionar um elemento a um Set, use o método add()

const mySet = new Set();
mySet.add(1);
mySet.add(2);
console.log(mySet); // Set(2) { 1, 2 }

// Você pode encadear várias chamadas add():
mySet.add(3).add(4).add(5);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

// Sets ignoram automaticamente valores duplicados:
mySet.add(1); // Já existe, o Set permanece inalterado
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

