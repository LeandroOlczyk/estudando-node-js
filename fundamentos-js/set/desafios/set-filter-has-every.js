/*
Crie uma função chamada analyzeFriendGroups que recebe dois arrays de nomes (representando dois grupos de amigos diferentes) como parâmetros. 
A função deve converter os arrays em conjuntos (sets) e retornar um objeto contendo as seguintes informações (nesta ordem exata):

mutualFriends: O número de pessoas que estão em ambos os grupos de amigos
exclusiveToFirst: O número de pessoas que estão apenas no primeiro grupo
exclusiveToSecond: O número de pessoas que estão apenas no segundo grupo
potentialConnections: O número de conexões únicas que poderiam ser feitas entre membros exclusivos de cada grupo 
isSubset: Booleano indicando se um grupo está inteiramente contido no outro
*/

function analyzeFriendGroups(group1, group2) {
    const set1 = new Set(group1);
    const set2 = new Set(group2);

    const mutualFriends = [...set1].filter(name => set2.has(name)).length;
    const exclusiveToFirst = [...set1].filter(name => !set2.has(name)).length;
    const exclusiveToSecond = [...set2].filter(name => !set1.has(name)).length;

    const potentialConnections = exclusiveToFirst * exclusiveToSecond;

    const isSubsetOf = (setA, setB) => [...setA].every(name => setB.has(name));

    // Será true se qualquer um dos grupos estiver contido no outro
    const isSubset = isSubsetOf(set1, set2) || isSubsetOf(set2, set1);

    return {
        mutualFriends,
        exclusiveToFirst,
        exclusiveToSecond,
        potentialConnections,
        isSubset
    };
}

let group1, group2, result

group1 = ["John", "Mike", "Sarah", "Lisa"]
group2 = ["Mike", "Emma", "Sarah", "Tom"]
result = analyzeFriendGroups(group1, group2)
console.log(result)
// {
//   mutualFriends: 2,
//   exclusiveToFirst: 2,
//   exclusiveToSecond: 2,
//   potentialConnections: 4,
//   isSubset: false
// }

group1 = ["Emma", "Sophia", "Liam", "Noah", "Olivia"]
group2 = ["Sophia"]
result = analyzeFriendGroups(group1, group2)
console.log(result)
// {
//   mutualFriends: 1,
//   exclusiveToFirst: 4,
//   exclusiveToSecond: 0,
//   potentialConnections: 0,
//   isSubset: true
// }

