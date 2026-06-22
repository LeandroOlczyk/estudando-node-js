/*

Write a function organizeYardSale that takes items and returns an organized inventory summary object.
The function parses unformatted item strings, categorizes them by type, and calculates totals for each category.

Logic:
1 - Parse each item string in format "category:name:price" to extract components
2 - Group items by category and increment count for each item added
3 - Calculate total price per category by accumulating individual item prices
4 - Return summary with count and total price for each category

Parameters:
items (array): Array of item strings in format "category:name:price"

Returns: Object with categories as keys, each containing count and total properties. Format:
{"furniture": {"count": 2, "total": 45.99}, "kitchen": {"count": 1, "total": 12.50}}

*/

function organizeYardSale(items) {

    const result = {};

    items.forEach(item => {
        const [category, product, price] = item.split(':');
        const numericPrice = Number(price);

        if (!result[category]) {
            result[category] = {
                count: 0,
                total: 0
            };
        }

        result[category].count++;
        result[category].total += numericPrice;
    });

    return result;
};


let array, result

array = ['furniture:table:35.75', 'kitchen:plate:10.00', 'decor:vase:5.50']
result = organizeYardSale(array)
console.log(result)
// {
//   furniture: { count: 1, total: 35.75 },
//   kitchen: { count: 1, total: 10 },
//   decor: { count: 1, total: 5.5 }
// }

array = ['kitchen:fork:1.25', 'kitchen:knife:1.50', 'kitchen:spoon:0.75']
result = organizeYardSale(array)
console.log(result) 
// { kitchen: { count: 3, total: 3.5 } }

array =['electronics:radio:30.00', 'electronics:clock:12.50', 'furniture:desk:75.25']
result = organizeYardSale(array)
console.log(result)
// {
//   electronics: { count: 2, total: 42.5 },
//   furniture: { count: 1, total: 75.25 }
// }

array = ['garden:shovel:18.75', 'garden:hose:22.50', 'tools:hammer:12.00', 'tools:wrench:8.25']
result = organizeYardSale(array)
console.log(result)
// {
//   garden: { count: 2, total: 41.25 },
//   tools: { count: 2, total: 20.25 }
// }