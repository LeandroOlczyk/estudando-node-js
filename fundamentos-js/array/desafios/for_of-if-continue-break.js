function planShippingRoute(legDistances, initialFuel) {

    let portsReached = 0;
    let remainingFuel = initialFuel;

    for (const distance of legDistances) {
        if (distance % 5 === 0) {
            continue; // Skip this leg if the distance is a multiple of 5
        }

        if (remainingFuel < distance) {
            break; // Stop processing if fuel is insufficient for the leg
        }

        remainingFuel -= distance;
        portsReached++;
    }

    return { portsReached, remainingFuel }
}


let legDistances = [2, 4, 6, 8]
let initialFuel = 15
let result = planShippingRoute(legDistances, initialFuel)
console.log(result);
