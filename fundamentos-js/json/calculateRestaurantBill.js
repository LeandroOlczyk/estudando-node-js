function calculateRestaurantBill(order) {

    let totalBeforeDiscount = 0;
    let totalDiscount = 0;
    let finalTotal = 0;

    for (const [__, details] of Object.entries(order)) {
        const price = details.price;
        const quantity = details.quantity;
        const isSpecialOffer = details.isSpecialOffer;

        const totalIten = (price * quantity);

        totalBeforeDiscount += totalIten;

        if (isSpecialOffer === true) {
            totalDiscount += (totalIten * 0.2); // Desconto de 20%
        }

    }

    finalTotal = (totalBeforeDiscount - totalDiscount);

    return {
        totalBeforeDiscount: Number(totalBeforeDiscount.toFixed(2)),
        totalDiscount: Number(totalDiscount.toFixed(2)),
        finalTotal: Number(finalTotal.toFixed(2))
    };
}

let order = { "Sushi Platter": { "price": 45.99, "quantity": 2, "isSpecialOffer": true }, "Green Tea": { "price": 3.50, "quantity": 4, "isSpecialOffer": false }, "Miso Soup": { "price": 2.99, "quantity": 3, "isSpecialOffer": true } }
calculateRestaurantBill(order)