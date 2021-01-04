// callback hell:
// const fs = require('fs');

// fs.readFile('file1.txt', (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

//   fs.readFile('file2.txt', (err, file2Content) => {
//     if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//     console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

//     fs.readFile('file3.txt', (err, file3Content) => {
//       if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//       console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
//     });
//   });
// });


// consertado callback hell com Promise:
// const fs = require('fs');

// function readFilePromise (fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, content) => {
//       if (err) return reject(err);
//       resolve(content);
//     });
//   });
// }

// readFilePromise('file1.txt')
//   .then((content) => {
//     console.log(`Lido file1.txt com ${content.byteLength} bytes`);
//     return readFilePromise('file2.txt');
//   })
//   .then(content => {
//     console.log(`Lido file2.txt com ${content.byteLength} bytes`);
//     return readFilePromise('file3.txt');
//   })
//   .then((content) => {
//     console.log(`Lido file3.txt com ${content.byteLength} bytes`);
//   })
//   .catch((err) => {
//     console.log(`Erro ao ler arquivos: ${err.message}`);
//   });

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

Promise.all([
  readFilePromise('file1.txt'),
  readFilePromise('file2.txt'),
  readFilePromise('file3.txt')
])
.then(([file1, file2, file3]) => {
  const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
})
.catch((err) => {
  console.error(`Erro ao ler arquivos: ${err.message}`);
})