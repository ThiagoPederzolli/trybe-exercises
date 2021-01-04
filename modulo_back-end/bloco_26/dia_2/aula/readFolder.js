const fs = require('fs');
const readdir = fs.promises.readdir;

// function readFolder(diretorio, callback) {
//   fs.readdir(diretorio,(error, fileNames) => {
//     if(error) {
//       return callback(error, null);
//     }
//     callback(null, fileNames.join('\n'));
//   })
// }

function readFolderPromise(diretorio) {
  return new Promise((resolve, reject) => {
    fs.readdir(diretorio,(error, fileNames) => {
      if(error) {
        reject(error);
      }
      resolve(fileNames.join('\n'));
    })
  })
}

async function readFolderAsync(diretorio) {
  const fileNames = await readdir(diretorio)
  // .then(originalFileNames => originalFileNames.map('- ')); Caso ache necessário manipular as informações antes de retornar algo, é possível encadear .then()
  return fileNames.join('\n');
}

function readFolderFsPromises(diretorio) {
  return readdir(diretorio)
  .then(fileNames => fileNames.join('\n'))
}

// async function lalala() {
//   const result = await readFolderPromise('./minhaPasta');
//   console.log(result);
// }

// function blablabla() {
//   return readFolderPromise('./minhaPasta').then(result => {
//     console.log(result)
//   });
// }

// lalala();
// blablabla();

module.exports = readFolderPromise;