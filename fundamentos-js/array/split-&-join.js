/*
O método join() cria uma string concatenando os elementos de um array com um separador:
    array.join([separator])

O método split() divide uma string em um array de substrings:
    string.split([separator])

Exemplos:

*/

const fruits = ['apple', 'banana', 'orange'];
const str = fruits.join(', '); // "apple, banana, orange"
console.log(str)

const sentence = "Hello World";
const words = sentence.split(' '); // ['Hello', 'World']
console.log(words)

const word = 'hello'
console.log(word.split('')) // [ 'h', 'e', 'l', 'l', 'o' ]

// Diferentes separadores
fruits.join(''); // "applebananaorange"
fruits.join('-'); // "apple-banana-orange"
"2023-05-15".split('-'); // ['2023', '05', '15']

//Caso não seja informado um separador como argumento no 'join()' por padrão será atribuído uma virgula
console.log(['x', 'y'].join()) // 'x,y'

console.log('----- Formar Palavras ----- ')
const letters = ['J', 'S'];
console.log(letters.join(',')); // J,S
console.log(letters.join(''));  // JS
console.log(letters.join(' ')); // J S


console.log('----- Numeros ----- ')
const nums = [1, 2, 3];
console.log(nums)

const str1 = nums.join('-');
console.log(str1)

const arr = str1.split('-');
console.log(arr) // Nenhum erro ocorre, mas esta linha divide "1-2-3" em ["1", "2", "3"] — note que os elementos agora são strings, não números.

const back = arr.join();
console.log(back)

/*
OBSERVACOES:
O método split() retorna um novo array de substrings. 
Strings em JavaScript são imutáveis e não podem ser modificadas.

A expressão "2023-05-15".split('-').join('/') produz "2023/05/15".

*/