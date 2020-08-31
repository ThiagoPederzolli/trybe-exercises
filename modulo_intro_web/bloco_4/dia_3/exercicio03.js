let n = 5;
let linha = '';
let simbolo = '*';
//marca como posição o n, para que a última linha tenha a quantidade de asterisco declarada
let posicao = n;

// roda o código verificando as linhas
for(i = 0; i < n; i += 1){
  // roda o código verificando as colunas
  for(j = 0; j <= n; j += 1){
    if(j < posicao){
      // add espaço em branco se o nº de colunas for menor q a posição
      linha += ' ';
    } else {
      // add asterisco caso o º de colunas seja igual ou maior ao da posição
      linha += simbolo;
    }
  }
  //imprime a linha
  console.log(linha);
  // reseta a linha para o próximo loop
  linha = '';
  // diminui a posição para o próximo loop vir com menos espaços em branco.
  posicao -= 1;
}