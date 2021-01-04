const util = require('util');
const readFolder = require('./readFolder');

// const callback = (err, fileNamesJoined) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(fileNamesJoined);
// }

// readFolder('./minhaPasta', callback);

// const readFoledrPromises = util.promisify(readFolder);
// Retorna uma Promise ao invés de esperar um callback

// const readFolderResult = readFoledrPromises('./MinhaPasta');
// Utilizar desse jeito pode retornar um erro, pois o readFolderResult é uma Promise, logo precisa ser tratada, caso contrário retornará algo vazio;
// console.log(readFolderResult); terá seu retorno: Promise { <pending };

readFolder('./minhaPasta').then(result =>  {
  return result.replace('\n', '\n-')
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err.message)
});