const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(array) {
  let lengths = []
  for (let i = 0; i < array.length; i += 1) {
    lengths.push(array[i].length);
  }
  return lengths;
}
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);