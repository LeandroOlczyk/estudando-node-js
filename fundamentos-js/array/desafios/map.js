/*
Crie uma função chamada transformData que recebe um array de objetos de produto. 
Cada produto tem um name (string) e price (number). 
Use o método map() para transformar cada produto da seguinte forma:

1. Torne o nome todo em maiúsculas
2. Aplique um desconto de 15% ao preço (arredonde para 2 casas decimais)
3. Adicione uma nova propriedade chamada onSale definida como true

Retorne o novo array de produtos transformados.

Exemplo de Entrada:
[
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 300 }
]

Saída Esperada:
[
  { name: "LAPTOP", price: 850.00, onSale: true },
  { name: "PHONE", price: 425.00, onSale: true },
  { name: "TABLET", price: 255.00, onSale: true }
]

*/

function transformData(products) {

    return products.map(product => ({
        name: product.name.toUpperCase(),
        price: product.price * 0.85,
        onSale: true
    }));
}

const arrayObjetos = [{ "name": "chair", "price": 150 }, { "name": "desk", "price": 300 }, { "name": "monitor", "price": 250 }]
const resultado = transformData(arrayObjetos)
console.log(resultado)

// [
//   { name: "CHAIR", price: 127.5, onSale: true },
//   { name: "DESK", price: 255, onSale: true },
//   { name: "MONITOR", price: 212.5, onSale: true }
// ]

