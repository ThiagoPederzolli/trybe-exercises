const assert = require('assert');

const removeVowels = (word) => {
  let results = '';
  let vowels = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (
      word[i] === 'a' ||
      word[i] === 'o' ||
      word[i] === 'i' ||
      word[i] === 'e' ||
      word[i] === 'u'
    ) {
      vowels += 1;
      results += vowels;
    } else {
      results += word[i];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);


assert.strictEqual(output, result);
