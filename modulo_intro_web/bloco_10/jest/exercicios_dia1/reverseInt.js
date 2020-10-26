// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let number = "";
  let absoluteNumber = Math.abs(n).toString();
  for(i = absoluteNumber.length - 1; i >= 0; i -= 1) {
    number += absoluteNumber[i];
  }
  return (n >= 0) ? +number : -number;
}

reverseInt(-15)
module.exports = reverseInt;