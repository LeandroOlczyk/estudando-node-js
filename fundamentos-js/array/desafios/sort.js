/*
Crie uma função chamada sortByLength que recebe um array de strings e retorna um novo array com as mesmas strings ordenadas por seu comprimento em ordem crescente. 
Se duas strings tiverem o mesmo comprimento, elas devem ser ordenadas alfabeticamente.
*/


function sortByLength(arr) {
  return [...arr].sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    return a.localeCompare(b);
  });
}


let array, result

array = ["hello", "hi", "hey", "howdy", "greetings"];
result = sortByLength(array);
console.log(result) // [ "hi", "hey", "hello", "howdy", "greetings" ]

array = ["cat", "dog", "elephant", "bird"];
result = sortByLength(array);
console.log(result) // [ "cat", "dog", "bird", "elephant" ]
