/*
Link da documentação oficial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

Este código é um exemplo de como utilizar o MAP.
O MAP verifica todos os elementos de um array e cria um novo array sem modificar o original.
Neste exemplo, são chamadas 3 funções aninhadas (Dobrar, Dividir, Multiplicar)
O usuário define os números da operação.

*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function dobrar(valor) {
    return valor * 2;
};

function dividir(valor, operacao) {
    return valor / operacao;
};

function multiplicar(valor, operacao) {
    return valor * operacao;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Transforme o Array: ${array} `);
console.log(`O resultado será => Dobrado, Dividido e Multiplicado.`);
let dividirPorNumero = Number(prompt("Dividir por -> "));
let mutiplicarPorNumero = Number(prompt("Multiplicar por -> "));

let resultado = array
    .map(dobrar)
    .map(valor => dividir(valor, dividirPorNumero))
    .map(valor => multiplicar(valor, mutiplicarPorNumero))

console.log('----------------------')
console.log(`Array Original: ${array}`)
console.log(`Array Convertido: ${resultado}`);
console.log('----------------------')

/*
Quais parâmetros o callback map() recebe? 
currentValue, index, array

Arrow functions fornecem uma sintaxe mais curta para callbacks, como arr.map(num => num * 2).



*/