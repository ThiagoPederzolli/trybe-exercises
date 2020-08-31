let n = 5;
let linhas = '';
let simbolo = '*';

//encontra o meio da pirâmide
let meio = (n + 1) /2;
let ladoDireito = meio;
let ladoEsquerdo = meio;

//loop completo, criando as linhas e printando na tela
for (linha = 0; linha <= meio; linha += 1){
  //loop para estruturação das colunas dentro da linha
 for (coluna = 1; coluna <= n; coluna += 1){
   
    if(coluna > ladoDireito && coluna < ladoEsquerdo){
      //começa a imprimir simbolos pelo meio
      linhas += simbolo;
    } else {
      // retorna espaço em branco para a linha
      linhas += ' ';
    }
  }
  //imprimi a linha;
  console.log(linhas);
  //limpa a linha para o próximo loop
  linhas = '';
  //diminui o lado direito para coluna ficar maior e entrar no if ao invés do else
  ladoDireito -= 1;
  //aumenta o lado esquerdo para coluna ficar menor e entrar no if ao invés do else
  ladoEsquerdo += 1;
}