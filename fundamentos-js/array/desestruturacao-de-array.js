// A desestruturação de arrays extrai múltiplos valores de um array e os atribui a variáveis em uma única instrução:
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Pule elementos deixando espaços vazios:
const [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3

// Use parâmetros rest para capturar os elementos restantes:
const [a, ...rest] = [1, 2, 3, 4, 5];
console.log(a);    // 1
console.log(rest); // [2, 3, 4, 5]

// Forneça valores padrão para elementos ausentes:
const [a, b, c = 3] = [1, 2];
console.log(c); // 3