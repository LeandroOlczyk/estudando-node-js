/*
Este arquivo cria um array e utiliza o método 'filter' para filtrar numeros no array.
O método 'filter' cria um novo array contendo o conteúdo filtrado.

Desafio:
Gerar um array de 1 a 50 e retornar 3 arrays distintos.
1 - Numeros Pares.
2 - Numeros Impares.
3 - Multiplos selecionados pelo usuário.
*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Gera o array de 1 a 50
let array = []
for (let i = 1; i <= 50; i++) {
    array.push(i);
};

function Filtrar_Numeros_Pares(numero) {
    return numero % 2 === 0;
};

function Filtrar_Numeros_Impares(numero) {
    return numero % 2 !== 0;
};

function Filtrar_Multiplos(numero, multiplo) {
    return numero % multiplo === 0;
};

let multiplo = Number(prompt("Defina um valor para o Multiplicador/Módulo -> "));

console.log(`Array geral: ${array}`);

let arrayPar = array.filter(Filtrar_Numeros_Pares);
console.log(`Numeros Pares: ${arrayPar}`);

let arrayImpar = array.filter(Filtrar_Numeros_Impares);
console.log(`Numeros Impares ${arrayImpar}`);

let result = array.filter(valor => Filtrar_Multiplos(valor, multiplo))
console.log(`Arrays do usuário: ${result}`)