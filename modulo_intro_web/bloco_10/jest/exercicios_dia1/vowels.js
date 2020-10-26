// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const strArg = str.toLowerCase();
  for(i = 0; i < strArg.length; i += 1) {
    if (strArg[i] === 'a' || strArg[i] === 'e' || strArg[i] === 'i' ||
    strArg[i] === 'o' || strArg[i] === 'u' )
    count += 1;
  }
  return count;
}

module.exports = vowels;