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

const mySetAdd = new Set();
mySetAdd.add(1);
mySetAdd.add(2);
console.log(mySetAdd); // Set(2) { 1, 2 }

// Você pode encadear várias chamadas add():
mySetAdd.add(3).add(4).add(5);
console.log(mySetAdd); // Set(5) { 1, 2, 3, 4, 5 }

// Sets ignoram automaticamente valores duplicados:
mySetAdd.add(1); // Já existe, o Set permanece inalterado
console.log(mySetAdd); // Set(5) { 1, 2, 3, 4, 5 }


// ================ DELETANDO ELEMENTOS ================
//Para remover um elemento de um Set, use o método delete():
//Se o elemento não existir no Set, ele permanece inalterado e o delete() retorna false.

console.log(mySetAdd.delete(2)); // true (o elemento existia e foi removido)
console.log(mySetAdd.delete(10)); // false (o elemento não existia)


// ========== VERIFICANDO SE UM ELEMENTO EXITE ==========
// Para verificar se um elemento existe em um Set, use o método has(). 
// Este método retorna true se o elemento estiver no Set, e false caso contrário.

const mySetHas = new Set([1, 2, 3, 4, 5]);

console.log(mySetHas.has(3)); // true
console.log(mySetHas.has(6)); // false

// O método has() é útil para operações condicionais:

if (mySetHas.has(3)) {
  console.log("3 is in the set");
} else {
  console.log("3 is not in the set");
}

// Sets usam igualdade estrita (===) para comparações:

const mixedSet = new Set([1, '2', 3]);

console.log(mixedSet.has('1')); // false
console.log(mixedSet.has(2));  // false
console.log(mixedSet.has('2')); // true

// ========== Tamanho e Is Empty ==========
// Sets possuem propriedades úteis para verificar o tamanho e se estão vazios:
// propriedade size: Retorna o número de elementos no Set

Console.log('========== Tamanho e Is Empty ==========')
const mySetSize = new Set([1, 2, 3, 4, 5]);
console.log(mySetSize.size); // 5

// método isEmpty(): Função personalizada para verificar se um Set está vazio

function isEmpty(set) {
  return set.size === 0;
}

const emptySet = new Set();
console.log(isEmpty(emptySet)); // true

// ========== Copy e Clear ==========
//Para criar uma cópia de um Set, use o construtor Set com o Set existente:

const originalSet = new Set([1, 2, 3, 4, 5]);
const copiedSet = new Set(originalSet);

// Para remover todos os elementos de um Set, use o método clear():
const newSetToClear = new Set([1, 2, 3, 4, 5]);
newSetToClear.clear(); // Set agora está vazio



// ============== Matemática - União de Conjuntos ==============

// A união de dois conjuntos cria um novo conjunto contendo todos os elementos de ambos os conjuntos, sem duplicatas.
// Crie uma união usando o operador spread:

function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const unionSet = union(setA, setB);

console.log(unionSet); // Set(5) { 1, 2, 3, 4, 5 }

// O operador spread (...) converte cada Set em um array, que são então combinados em um novo array para criar um novo Set
// removendo automaticamente as duplicatas.


// Matemática - Interseção de Conjuntos
// A interseção de dois conjuntos contém apenas elementos presentes em ambos os conjuntos.

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersection = new Set();

for (let element of set1) {
  if (set2.has(element)) {
    intersection.add(element);
  }
}




