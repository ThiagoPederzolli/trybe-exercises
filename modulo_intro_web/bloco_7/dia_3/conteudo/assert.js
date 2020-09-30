const assert = require('assert');

// assert.equal(50, 50); // OK
// assert.equal(50, 70); // AssertionError: 50 == 70


// const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

// assert.equal(expected, 4, 'Mensagem customizada do erro');
assert(expected === 3, '9 divididos por 3 é igual a 3');