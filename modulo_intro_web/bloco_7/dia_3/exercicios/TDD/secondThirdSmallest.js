const assert = require('assert');

function secondThirdSmallest(array) {
  const orderdArray = array.sort((a, b)=>a-b);
  return results = [orderdArray[1], orderdArray[2]];   
};

// const secondThirdSmallest = array => array.sort((a,b)=>a-b) [array[1], array[2];

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const output = secondThirdSmallest(parameter);
assert.deepStrictEqual(output, result);