/**
 * Este exercício filtra frases no array que contenham uma palavra em específico.
**/

function filterBoxesByRoom1(boxLabels, roomName) {
  const room = roomName.toLowerCase();

  return boxLabels.filter(label =>
    label.toLowerCase().includes(room)
  );
}


function filterBoxesByRoom2(boxLabels, roomName) {
  let result = [];
  const target = roomName.toLowerCase();

  boxLabels.forEach(item => {
    if (item.toLowerCase().includes(target)) {
      result.push(item);
    }
  });

  return result;
}

let boxLabels, roomName, result

boxLabels = ['Living room TV', 'Kitchen pots', 'Dining room table']
roomName = 'room'
result = filterBoxesByRoom1(boxLabels, roomName)
console.log(result) // [ "Living room TV", "Dining room table" ]


boxLabels = ['GARAGE items', 'garage supplies', 'GaRaGe tools']
roomName = 'garage'
result = filterBoxesByRoom2(boxLabels, roomName)
console.log(result) // [ "GARAGE items", "garage supplies", "GaRaGe tools" ]

