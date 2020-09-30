const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz'); check
// assert.strictEqual(myFizzBuzz(12), 'fizz'); check
// assert.strictEqual(myFizzBuzz(5), 'buzz'); check
// assert.strictEqual(myFizzBuzz(11), 11); check
assert.strictEqual(myFizzBuzz('3'), false); // check