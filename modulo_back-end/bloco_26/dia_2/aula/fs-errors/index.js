// const fs = require('fs');

// fs.readFile('./notasMauricio.txt', 'utf-8', (err, content) => {
//   if(err) return console.log("não tenho permissão para ler as notas do Mauricio", err);
//   console.log(content)
// });


const util = require('util');
// Possui uma função que se chama promisify
// Recebe uma função no estilo de callback
// E converte ela para o estilo de Promise


const readFolder = require('./readFolder');

const readFolderPromise = util.promisify(readFolder);

readFolderPromise(caminhoDoDiretorio)
.then(result => console.log('agora é promise!', result))
.catch(err => console.log(err.message));