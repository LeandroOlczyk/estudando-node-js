function reorganizeInventory(inventory) {

    let newArray=[]

    for (let i = inventory.length-1; i >= 0; i--) {
        newArray.push(inventory[i])
    }

    return newArray
}


let inventory = [["'pear'", "2"], ["'grape'", "20"], ["'melon'", "1"], ["'berry'", "25"]]
let result = reorganizeInventory(inventory)
console.log(result)
