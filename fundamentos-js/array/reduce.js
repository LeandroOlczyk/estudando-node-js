/*
O método reduce() reduz um array a um único valor, executando uma função para cada elemento:

    array.reduce(function(accumulator, currentValue, currentIndex, array) {
        // retorna o valor atualizado do acumulador
    }, initialValue);

 Componentes Principais:
    accumulator: Acumula os valores de retorno do callback (total acumulado)
    currentValue: O elemento atual sendo processado
    currentIndex: (opcional) O índice do elemento atual
    array: (opcional) O array sobre o qual o reduce() foi chamado
    initialValue: (opcional) Valor inicial para o acumulador
*/

// Exemplo - soma de números:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Execução passo a passo:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => {
    console.log(`Accumulator: ${acc}, Current Value: ${curr}`);
    return acc + curr;
}, 0);

// Saída:
// Accumulator: 0, Current Value: 1
// Accumulator: 1, Current Value: 2
// Accumulator: 3, Current Value: 3
// Accumulator: 6, Current Value: 4
// Resultado final: 10
