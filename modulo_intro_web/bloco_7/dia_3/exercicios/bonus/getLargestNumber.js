const assert = require('assert');

const getLargestNumber = array => {
  array.sort((a, b) => b - a);
  return array[0];
};

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const output = getLargestNumber(parameter);
const teste = 'string';
assert.strictEqual(output, result);
const string = 'dois';
let stringTres = 'tres';
stringTres = 'quatro';
