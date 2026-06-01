/* 
Iterando sobre Sets
Sets em JavaScript são iteráveis e podem ser percorridos de várias maneiras: 
*/

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