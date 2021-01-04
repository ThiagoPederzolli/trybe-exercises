// const fs = require('fs');

// fs.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Arquivo salvo');
// });

// const fs = require('fs');

// const text = 'Texto teste 2';

// async function writingFiles() {
//   await fs.writeFile('./meu-arquivo.txt', text, (err) => {
//     if (err) return console.log(err);
//     console.log(text);
//   })
// }

// writingFiles();

// const fs = require('fs').promises;

// const text = 'Texto teste 3';

// function writingFiles() {
//   fs.writeFile('./meu-arquivo.txt', text);
// }

// writingFiles();

const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const text = 'Texto teste 4';

function writingFiles() {
  writeFile('./meu-arquivo.txt', text);
}

writingFiles();