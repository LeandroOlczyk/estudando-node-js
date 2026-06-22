
function addUniqueElements(array1, array2) {
    
    //Cria um novo array gerado pela classe Set.
    let newArray = new Set();

    array1.forEach( n => {
        newArray.add(n);
    });

    array2.forEach( n => {
        newArray.add(n);
    });

    //Retorna um array unificado e convertido.
    return Array.from(newArray);
};


let array1 = [1, 2, 3];
let array2 = [4, 5, 2, 1, 6];

let retorno = addUniqueElements(array1, array2);
console.log(`retorno: ${retorno}`);