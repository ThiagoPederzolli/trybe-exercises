// function fatorial(numero) {
//   let fatorial = 1;

//   for (let i = 1; i <= numero; i += 1) {
//     fatorial *= i;
//   }

//   return fatorial;
// }

// console.log(fatorial(5));


const fatorial = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;

console.log(fatorial(4));