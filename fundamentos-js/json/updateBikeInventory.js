/*
Crie uma função chamada 'updateBikeInventory' que recebe um argumento, uma 'string JSON' inventoryStr.
Converta-a em um objeto, onde inventoryStr possui um array bikes. Cada bicicleta possui brand, price e quantity.
Se a quantity de uma bicicleta for menor que 3, adicione ou atualize uma chave note com o valor "Restock needed" para essa bicicleta.
Retorne o objeto atualizado como uma string JSON.
*/

function updateBikeInventory(inventoryStr) {

    const inventory = JSON.parse(inventoryStr);

    inventory.bikes.forEach((item) => {
        const marca = item?.brand
        const valor = item?.price
        const qtd = item?.quantity

        if (qtd < 3) {
            let stockObservation = 'Restock needed'
            item.note = stockObservation
        }

    });

    return JSON.stringify(inventory);
}

/*Sem apóstrofo, essa estrutura é um Objeto*/
// let inventoryStr = {
//     "bikes": [
//         {"brand": "Trek", "price": 999.99, "quantity": 2}, 
//         {"brand": "Giant", "price": 799.99, "quantity": 5}
//     ]
// };

/* Com apóstrofo, essa estrutura se torna uma String JSON*/
let inventoryStr = `{
    "bikes": [
        { "brand": "Trek", "price": 999.99, "quantity": 2 },
        { "brand": "Giant", "price": 799.99, "quantity": 5 }
    ]
}`;

let resultUpdate = updateBikeInventory(inventoryStr)
console.log(resultUpdate)