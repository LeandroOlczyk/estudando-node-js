/*
Write a function generateGardenSchedule that takes volunteers, plants and returns a formatted schedule string.
The function creates garden assignments by reversing both input arrays, then pairing each volunteer with a plant using their corresponding positions.

Logic:
1 - Reverse the volunteers array
2 - Reverse the plants array
3 - Use a loop to pair each volunteer with the plant at the same index
4 - Concatenate all assignments into a single string with specific formatting

Parameters:
volunteers (array): Array of volunteer names
plants (array): Array of plant types

Returns: Formatted schedule string. Format: Volunteer1: Plant1, Volunteer2: Plant2, Volunteer3: Plant3
*/

let volunteers, plants, result

function generateGardenSchedule(volunteers, plants) {

    let stringReturn = ''
    let arrayLength = (volunteers.length) - 1;

    for (let i = arrayLength; i >= 0; i--) {

        let pearsonName = volunteers[i];
        let plantName = plants[i];

        if (i > 0) stringReturn += pearsonName + ': ' + plantName + ', '
        if (i === 0) stringReturn += pearsonName + ': ' + plantName
    }

    return stringReturn
}

volunteers = ['Alex', 'Sarah', 'Mike', 'Lisa']
plants = ['Peppers', 'Beans', 'Corn', 'Squash']

result = generateGardenSchedule(volunteers, plants)
console.log(result)
// Lisa: Squash, Mike: Corn, Sarah: Beans, Alex: Peppers


volunteers = ['David', 'Anna', 'Chris', 'Nina', 'Paul']
plants = ['Daisies', 'Pansies', 'Marigolds', 'Petunias', 'Zinnias']

result = generateGardenSchedule(volunteers, plants)
console.log(result)
// Paul: Zinnias, Nina: Petunias, Chris: Marigolds, Anna: Pansies, David: Daisies

