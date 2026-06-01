function analyzeCarData(carData) {

    let mostExpensivePrice = 0
    let cheapestPrice = 999999999999999
    let averagePrice = 0
    let count = 0
    let total = 0
    let mostExpensiveName, cheapestName

    for (const key in carData) {

        let carName = key
        let carPrice = carData[key]

        count += 1
        total = (total + carPrice)

        if (carPrice > mostExpensivePrice) {
            mostExpensiveName = carName
            mostExpensivePrice = carPrice
        }

        if (carPrice < cheapestPrice) {
            cheapestName = carName
            cheapestPrice = carPrice
        }

    }

    averagePrice = (total / count)
    return {
        "mostExpensive": mostExpensiveName,
        "cheapest": cheapestName,
        "averagePrice": averagePrice
    }
}

let carData = { "Rolls-Royce Phantom": 460000, "Bentley Continental GT": 202500, "Mercedes-Maybach S680": 229000, "Aston Martin DB11": 205600, "Porsche 911 GT3": 169700 }
analyzeCarData(carData)
