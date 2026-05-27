/* 
A função cria uma cópia idependente para jsonString ao combinar 'JSON.stringify' com 'JSON.parse'.
Adiciona a propriedade de "desconto" e calcula o novo preço para cada item.
Também é possível clonar objetos utilizando 'structuredClone()'
*/

function processCart(jsonString) {

    let novoJson = JSON.stringify(jsonString)

    const cart1 = JSON.parse(novoJson);
    const cart2 = JSON.parse(novoJson);

    cart2.forEach((item) => {
        item.discounted = false;

        if (item.price > 50) {
            item.discounted = true;
            item.price = item.price * 0.9;
        }
    });

    return [cart1, cart2];
}

let jsonString = [
    { "name": "Laptop", "price": 999 }, 
    { "name": "Mouse", "price": 25 }, 
    { "name": "Keyboard", "price": 60 }
]

let result = processCart(jsonString)

console.log(result)