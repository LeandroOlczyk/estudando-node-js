/*
Crie uma função chamada analyzeSetRelations que recebe dois arrays como parâmetros: arr1 e arr2. 
A função deve converter os arrays em conjuntos (sets) e retornar um objeto com as seguintes propriedades:

isSubset: um booleano indicando se set1 é um subconjunto de set2
isSuperset: um booleano indicando se set1 é um superconjunto de set2
isEqual: um booleano indicando se set1 e set2 possuem exatamente os mesmos elementos
*/


// Verifique se setA é um subconjunto de setB:
function isSubset(setA, setB) {
    return [...setA].every(element => setB.has(element));
}

// Verifique se setA é um superconjunto de setB:
function isSuperset(setA, setB) {
    return isSubset(setB, setA);
}

// Verifique se dois conjuntos são iguais:
function areEqual(setA, setB) {
    return setA.size === setB.size && isSubset(setA, setB);
}


function analyzeSetRelations(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    // Use .every() and .has() to check set relations
    let subset = isSubset(set1, set2);
    let superset = isSuperset(set1, set2);
    let isEqual = areEqual(set1, set2);

    return {
        isSubset: subset,
        isSuperset: superset,
        isEqual: isEqual
    };
}

let arr1, arr2, result

arr1 = [1, 2, 3]
arr2 = [1, 2, 3, 4, 5]
result = analyzeSetRelations(arr1, arr2)
console.log(result) //{ isSubset: true, isSuperset: false, isEqual: false }

arr1 = [1, 2, 3, 4, 5]
arr2 = [1, 2, 3]
result = analyzeSetRelations(arr1, arr2)
console.log(result) // { isSubset: false, isSuperset: true, isEqual: false }

arr1 = ["apple", "banana"]
arr2 = ["apple", "banana", "cherry", "date"]
result = analyzeSetRelations(arr1, arr2)
console.log(result) // { isSubset: true, isSuperset: false, isEqual: false }

arr1 = ["JavaScript", "Python", "Java"]
arr2 = ["Ruby", "Python", "JavaScript", "Java", "C++"]
result = analyzeSetRelations(arr1, arr2)
console.log(result) //{ isSubset: true, isSuperset: false, isEqual: false }
