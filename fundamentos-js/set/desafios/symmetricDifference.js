/*
Verificando se um elemento existe

Crie uma função chamada symmetricDifference que recebe dois arrays como parâmetros. 
A função deve converter os arrays em sets e retornar um novo Set contendo elementos que estão em qualquer um dos dois Sets, mas não em ambos. 
Use o método has() para verificar a existência do elemento. Finalmente, converta o set em um array e retorne-o.

*/

function symmetricDifference(arr1, arr2) {

    let result = []
    let first = new Set(arr1);
    let second = new Set(arr2);

    first.forEach(element => {
        if (second.has(element) === false) {
            result.push(element);
        };
    });

    second.forEach(element => {
        if (first.has(element) === false) {
            result.push(element);
        };
    });

    return result;
};

let arr1, arr2, result

arr1 = [true, false, null]
arr2 = [null, undefined, true]
result = symmetricDifference(arr1, arr2)
console.log(result)

arr1 = [100, 200, 300, 400]
arr2 = [300, 400, 500, 600]
result = symmetricDifference(arr1, arr2)
console.log(result)

arr1 = ["🐶", "🐱", "🐭"]
arr2 = ["🐹", "🐰", "🐱"]
result = symmetricDifference(arr1, arr2)
console.log(result)

arr1 = []
arr2 = [1, 2, 3]
result = symmetricDifference(arr1, arr2)
console.log(result)