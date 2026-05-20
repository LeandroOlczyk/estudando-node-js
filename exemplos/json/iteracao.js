
// Iteração com Object.entries()
function TestarObjectEntries(userSettings) {
    for (const [k, v] of Object.entries(userSettings)) {
        console.log("key: " + k + " | value: " + v)
    }
}

// Iteração FOR IN
function TestarForIn() {
    const settings = { theme: "dark" };
    for (const key in settings) {
        console.log(settings[key]);
    }
}

// Inicio

const userSettings = { "nome": "Leandro", "idade": 33, "escolaridade": "Ensino Superior Completo" }

console.log('-------------------------')
console.log("\nTestando ObjectEntries: ")
TestarObjectEntries(userSettings)
console.log('-------------------------')

console.log('-------------------------')
console.log("\nTestando For In:")
TestarForIn()
console.log('-------------------------')

