/*
 Recapitulação - O básico de Sets

 Crie uma função chamada processStudentGroups que recebe um array de nomes de estudantes como argumento. 
 
 A função deve:
 1 - Criar um Set a partir do array de entrada para obter nomes de estudantes únicos.
 2 - Remover qualquer estudante cujo nome comece com 'Z' (insensível a maiúsculas e minúsculas).
 3 - Adicionar 'John Doe' ao Set se ainda não estiver presente.
 4 - Retornar um objeto com as seguintes propriedades:
    uniqueCount: O número de estudantes únicos
    hasJohnDoe: Um booleano indicando se 'John Doe' está no Set
    studentsArray: Um array com o conjunto final de nomes de estudantes

*/

function processStudentGroups(students) {

    let uniqueCount,hasJohnDoe;

    const setStudents = new Set(students);

    setStudents.forEach(student => {
        if (student.slice(0,1) === 'z' || student.slice(0,1) === 'Z') {
            setStudents.delete(student);
        };
    });

    setStudents.add('John Doe');
    hasJohnDoe = setStudents.has('John Doe');

    uniqueCount = setStudents.size;

    return {
        'uniqueCount': uniqueCount,
        'hasJohnDoe': hasJohnDoe,
        'studentsArray': Array.from(setStudents)
    };
};

let students = [];
let result

students = ["Alice", "Bob", "alice", "Zack", "Charlie"];
result = processStudentGroups(students)
console.log(result)

students = [];
result = processStudentGroups(students)
console.log(result)

students = ["zoe", "Zack", "ZEUS", "zombie", "ZARA", "Zelda"];
result = processStudentGroups(students)
console.log(result)

students = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "George", "Henry", "Isabella", "John Doe"];
result = processStudentGroups(students)
console.log(result)