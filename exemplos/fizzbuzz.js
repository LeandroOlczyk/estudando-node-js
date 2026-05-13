/*
Verificar se um número é divisível por 3 e 7.
Caso seja divisível por 3 imprime Fizz
Caso seja divisível por 7 imprime Buzz
Caso seja divisível por ambos, imprime FizzBuzz
Caso contenha o dígito 3 mas não seja divisível por nenhum, imprime "Almost Fizz"
*/

let num = parseInt(inp); // Don't change this line

// Type your code below

function fizzbuzz(int) {
    for (let i = 1; i <= int ; i++) {

        let almost = reviravolta(i);

        if (i % 3 === 0 && i % 7 === 0 ) {
        console.log("FizzBuzz")
        } else if (i % 3 === 0) {
        console.log("Fizz")
        }else if (i % 7 === 0) {
        console.log("Buzz")
        } else if (almost === true && !(i % 3 === 0 || i % 7 === 0)) {
        console.log("Almost Fizz")
        } else {
        console.log(i)
        }
    }
};

function reviravolta(number){
    let almost = false
    let numberString = String(number)
    if (numberString.includes('3')){
        almost = true 
    }
    return almost;
};

console.log("Welcome to FizzBuzz!")
fizzbuzz(num);
