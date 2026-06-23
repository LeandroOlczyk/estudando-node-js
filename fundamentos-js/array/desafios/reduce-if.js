/*
 Crie uma função chamada calculateGroceryTotal que recebe um array de objetos representando itens de mercearia.
 
 Cada objeto possui duas propriedades:
    name: string (nome do item)
    price: number (preço do item)

 A função deve:
    1 - Calcular o custo total de todos os itens
    2 - Aplicar um desconto: - Se o total for superior a 100, aplique 10% de desconto
    3 - Se o total for superior a 50, mas inferior ou igual a 100, aplique 5% de desconto
    4 - Sem desconto para totais de 50 ou menos.

 Retornar um objeto contendo:
    originalTotal: a soma antes do desconto
    discount: o valor economizado
    finalTotal: o valor final após o desconto

*/

function calculateGroceryTotal(items) {

    let discount, finalTotal;

    const originalTotal = items.reduce((total, item) => {
        return total + item.price;
    }, 0);

    if (originalTotal >= 50 && originalTotal <= 100) {
        discount = originalTotal * 0.05

    } else if (originalTotal > 100) {
        discount = originalTotal * 0.10

    } else {
        discount = 0
    };

    finalTotal = originalTotal - discount;

    return {
        originalTotal: Math.round(originalTotal * 100) / 100,  // Round to 2 decimals
        discount: Math.round(discount * 100) / 100,
        finalTotal: Math.round(finalTotal * 100) / 100
    };
}


let array, result

array = [{ name: "Organic Avocados", price: 15.99 }, { name: "Premium Salmon", price: 89.99 }]
result = calculateGroceryTotal(array)
console.log(result) //{ originalTotal: 105.98, discount: 10.6, finalTotal: 95.38 }


array = [{ name: "Golden Saffron", price: 75.00 }, { name: "Vintage Wine", price: 150.00 }, { name: "Black Garlic", price: 30.00 }, { name: "Aged Balsamic", price: 45.00 }]
result = calculateGroceryTotal(array)
console.log(result) //{ originalTotal: 300, discount: 30, finalTotal: 270 }

