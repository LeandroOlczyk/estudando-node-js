import PromptSync from "prompt-sync";

function FizzBuzz(int) {
    for (let i = 1; i <= int ; i++) {

        let almost = ContemDigitoTres(i);

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

function ContemDigitoTres(number){
    return String(number).includes("3");
};

const prompt = PromptSync();

console.log("Regras:")
console.log("1. Se um número for divisível por 3, imprima 'Fizz'.")
console.log("2. Se um número for divisível por 7, imprima 'Buzz'.")
console.log("3. Se um número for divisível por ambos, imprima 'FizzBuzz'.")
console.log("4. Se um número contiver o dígito 3 mas não for divisível por nenhum, imprima 'Almost Fizz'.")

console.log("\n----- Welcome to FizzBuzz! -----");

let num = prompt("Digite um número inteiro: ");
num = parseInt(num);

FizzBuzz(num);

console.log("\n----- Fim do programa! ----- \n");