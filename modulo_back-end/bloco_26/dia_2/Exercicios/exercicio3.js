// const fs = require('fs');
// const path = require('path'); // provê utilidades para trabalhar com caminhos de arquivos e diretórios.
// const readline = require('readline');


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite o caminho do arquivo que deseja ler: ', (answer) => {
//   fs.readFile(path.resolve(__dirname, answer), (err, file) => {
//     // path.resolve é usado para resolver uma sequência de caminhos para um caminho absoluto.
//     // Funciona processando uma sequência de caminhos da direitao pra esquerda, unindo todos até que o caminho absoluto seja criado
    
//     if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);

//     console.log(file.toString('utf8'));
//     console.log('---------------------');
//     console.log(`Arquivo de ${file.byteLength} bytes`);

//     rl.close();
//   });
// });

const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');
// const { timeEnd } = require('console');

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const answer = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const file = await readFile(path.resolve(__dirname, answer));
    console.time('#file')
    console.log(file.toString('utf8'));
    console.log('---------------------');    
    console.log(`Arquivo de ${file.byteLength} bytes e em`), console.timeEnd('#file');
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
};

start();