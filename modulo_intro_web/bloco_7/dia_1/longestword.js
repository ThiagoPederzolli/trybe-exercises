const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'
// function catchLongestWord(word) {
//   const stringToArray = word.split(' ');
//   let hightLength = 0;
//   let longWord;
//   for (let i = 0; i < stringToArray.length; i += 1) {
//     if (stringToArray[i].length > hightLength) {
//       hightLength = stringToArray[i].length;
//       longWord = stringToArray[i];
//     }
//   }
//   return longWord;
// }


const catchLongestWord = text => text.split(' ').sort((a, b)=>b.length - a.length)[0];

console.log(catchLongestWord(longestWord));