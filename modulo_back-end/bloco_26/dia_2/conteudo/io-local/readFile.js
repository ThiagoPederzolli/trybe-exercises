// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

readFilePromise('./meu-arquivo.txt')
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });