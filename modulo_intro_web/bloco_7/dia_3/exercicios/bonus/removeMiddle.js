const assert = require('assert');
// escreva a função removeMiddle aqui

function removeMiddle(array) {
  const midlePos = Math.floor(array.length/2);
  const output = array.splice(midlePos, 1);
  return output;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);