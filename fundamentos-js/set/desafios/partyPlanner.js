/*
 Tamanho e Is Empty
 
 Crie uma função chamada partyPlanner que recebe um array de RSVPs (strings de nomes). 
 Algumas pessoas podem ter confirmado presença várias vezes por empolgação. 

 A função deve retornar um objeto com:
    uniqueGuests: O número de convidados únicos presentes
    hasDuplicates: Um booleano indicando se alguém confirmou presença mais de uma vez
    isEmpty: Um booleano indicando se ninguém confirmou presença
*/

function partyPlanner(rsvps) {

    let uniqueGuests, hasDuplicates, isEmpty, setSize, arrayLength, guestSet

    guestSet = new Set(rsvps);

    uniqueGuests = guestSet.size;
    arrayLength = rsvps.length;

    if (uniqueGuests === arrayLength) { hasDuplicates = false };
    if (uniqueGuests !== arrayLength) { hasDuplicates = true };

    isEmpty = validadeIsEmpty(guestSet);

    return {
        'uniqueGuests': uniqueGuests,
        'hasDuplicates': hasDuplicates,
        'isEmpty': isEmpty
    };
};

function validadeIsEmpty(set) {
    return set.size === 0;
};

let rsvps, result

rsvps = ["John", "Mary", "John", "Peter"];
result = partyPlanner(rsvps);
console.log(result);
// { uniqueGuests: 3, hasDuplicates: true, isEmpty: false }

rsvps = ["Alice", "Alice", "Bob", "Charlie", "David"];
result = partyPlanner(rsvps);
console.log(result);
// { uniqueGuests: 4, hasDuplicates: false, isEmpty: false }

rsvps = [];
result = partyPlanner(rsvps);
console.log(result);
// { uniqueGuests: 0, hasDuplicates: false, isEmpty: true }

rsvps = ["Thor", "Iron Man", "Black Widow", "Thor", "Captain America", "Iron Man", "Hulk"];
result = partyPlanner(rsvps);
console.log(result);
// { uniqueGuests: 5, hasDuplicates: true, isEmpty: false }