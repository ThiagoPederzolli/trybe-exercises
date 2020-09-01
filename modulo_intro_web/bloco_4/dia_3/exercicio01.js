let n = 5;
let linhas = '';

//para cada loop, adiciona um asterisco a string linhas
for (i = 0; i < n; i += 1){
  linhas += '*';
}
// para cada loop imprime uma vez a string linhas
for(i = 0; i < n; i += 1){
  console.log(linhas);
}