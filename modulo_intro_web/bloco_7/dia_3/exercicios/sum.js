const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// assert(sum(4, 5) === 9);
// assert(sum(0,0) === 0);
// assert(sum(4, '5') === 9);
// assert.strictEqual(typeof sum, 'function');
// assert.throws(() => {
//   sum(4, '5');
// });
// assert.throws(() => {
//   sum(4, '5');
// }, /^Error: parameters must be numbers$/);

// console.log(sum(4, '5'));