const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = numbers.filter((number) => number % 2 === 0);
const somaPares = pares.reduce((result, par) => result + par);
console.log(somaPares);

// só com o reduce
// const sumPair = (currentValue, number) => (
//   (number % 2 === 0) ? currentValue + number : currentValue;
// );

// const sumNumbers = (array) => array.reduce(sumPair);